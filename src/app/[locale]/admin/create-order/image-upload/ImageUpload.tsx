import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import { IMAGE_LOCATIONS, routeName } from '@/common/helpers/constants'

import Box from '../../components/common/Box'
import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import AddFieldButton from '../../components/common/AddFieldButton'
import BasicButton from '@/common/components/appButton/BasicButton'
import InputFieldAndImageUploadPair from './components/InputFieldAndImageUploadPair'

import checkedIcon from '@/assets/icons/doneIcon.svg'
import closeX from '@/assets/icons/closeX.svg'
import { message } from 'antd'
import { useCreateOrderContext } from '../hooks/useCreateOrderContext'

type Props = { onClose: () => void }

const ImageLocations: IMAGE_LOCATIONS[] = [
  IMAGE_LOCATIONS.TOW_TRUCK,
  IMAGE_LOCATIONS.ABROAD_PORT,
  IMAGE_LOCATIONS.CONTAINER,
  IMAGE_LOCATIONS.HOME_PORT,
]

const ImageUpload = ({ onClose }: Props) => {
  const t = useTranslations('')

  const [selectedLocations, setSelectedLocations] = useState({
    [IMAGE_LOCATIONS.TOW_TRUCK]: false,
    [IMAGE_LOCATIONS.ABROAD_PORT]: false,
    [IMAGE_LOCATIONS.CONTAINER]: false,
    [IMAGE_LOCATIONS.HOME_PORT]: false,
  })

  const [numOfPairs, setNumOfPairs] = useState(0)

  const handleAdd = () => {
    if (numOfPairs < ImageLocations.length) setNumOfPairs((num) => num + 1)
  }
  const handleCancel = () => {
    if (numOfPairs > 0) setNumOfPairs((num) => num - 1)
  }

  const handleSubmit = () => {
    message.success('submitted photos to upload')
    onClose()
  }

  const { setImages } = useCreateOrderContext()

  const handleGoBack = () => {
    onClose()
    setImages({
      [IMAGE_LOCATIONS.TOW_TRUCK]: [],
      [IMAGE_LOCATIONS.ABROAD_PORT]: [],
      [IMAGE_LOCATIONS.CONTAINER]: [],
      [IMAGE_LOCATIONS.HOME_PORT]: [],
    })
  }

  return (
    <Container>
      <GoBackButtonFrame>
        <AppGoBackButton onClick={handleGoBack} text={t('go back')} />
      </GoBackButtonFrame>
      <Box>
        {ImageLocations.map(
          (_, i) =>
            i <= numOfPairs && (
              <InputFieldAndImageUploadPair
                ImageLocations={ImageLocations}
                key={`InputFieldAndImageUploadPair${i}`}
                setSelectedLocations={setSelectedLocations}
                selectedLocations={selectedLocations}
              />
            )
        )}
        <PaddingBox>
          {numOfPairs < 3 && <AddFieldButton onClick={handleAdd} />}
        </PaddingBox>
        <CancelAndDonePair>
          {numOfPairs > 0 ? (
            <BasicButton
              onClick={handleCancel}
              padding={16}
              color='white'
              isBorder={true}
            >
              <ButtonIcon>
                <Image src={closeX} alt='close icon' width={16} />
              </ButtonIcon>
              <ButtonText>{t('cancel field')}</ButtonText>
            </BasicButton>
          ) : (
            <div></div>
          )}
          <BasicButton onClick={handleSubmit} padding={16} htmlType='submit'>
            <ButtonIcon>
              <Image src={checkedIcon} alt='done icon' width={15} />
            </ButtonIcon>
            <ButtonText>{t('save')}</ButtonText>
          </BasicButton>
        </CancelAndDonePair>
      </Box>
    </Container>
  )
}

export default ImageUpload

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* margin-bottom: unset; */
  gap: 22px;
  padding-top: 40px;
  padding-bottom: 40px;

  background-color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.sm} {
    /* margin-bottom: 100px; */
    gap: 16px;
  }
`

const PaddingBox = styled.div`
  padding: 12px 0;
`

const CancelAndDonePair = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ButtonIcon = styled.label`
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const ButtonText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  cursor: pointer;
`

const GoBackButtonFrame = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: unset;
  }
`
