import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import { routeName } from '@/common/helpers/constants'

import Box from '../../components/common/Box'
import AppGoBackButton from '@/common/components/appButton/AppGoBackButton'
import AddFieldButton from '../../components/common/AddFieldButton'
import BasicButton from '@/common/components/appButton/BasicButton'
import InputFieldAndImageUploadPair from './components/InputFieldAndImageUploadPair'

import checkedIcon from '@/assets/icons/doneIcon.svg'
import closeX from '@/assets/icons/closeX.svg'

type Props = {}

const dropdownOptions = [
  { value: 'evacuator' },
  { value: 'usa port' },
  { value: 'container' },
  { value: 'georgian port' },
]

const ImageUpload = (props: Props) => {
  const t = useTranslations('')
  const router = useRouter()

  const [numOfPairs, setNumOfPairs] = useState(0)

  const handleAdd = () => {
    if (numOfPairs < dropdownOptions.length) setNumOfPairs((num) => num + 1)
  }
  const handleCancel = () => {
    if (numOfPairs > 0) setNumOfPairs((num) => num - 1)
  }

  return (
    <Container>
      <AppGoBackButton
        onClick={() => router.push(routeName.adminOrder)}
        text={t('go back')}
      />
      <Box>
        {dropdownOptions.map(
          (_, i) =>
            i <= numOfPairs && (
              <InputFieldAndImageUploadPair
                dropdownOptions={dropdownOptions}
                key={`InputFieldAndImageUploadPair${i}`}
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
              <ButtonText>{t('cancel')}</ButtonText>
            </BasicButton>
          ) : (
            <div></div>
          )}
          <BasicButton onClick={() => {}} padding={16}>
            <ButtonIcon>
              <Image src={checkedIcon} alt='done icon' width={15} />
            </ButtonIcon>
            <ButtonText>{t('done')}</ButtonText>
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
  align-items: flex-start;

  margin-bottom: unset;
  gap: 22px;

  @media ${({ theme }) => theme.media?.sm} {
    margin-bottom: 100px;
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
