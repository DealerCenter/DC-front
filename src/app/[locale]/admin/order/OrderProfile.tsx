import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import { routeName } from '@/common/helpers/constants'
import theme from '../../theme'

import IdAndDateBox from './components/IdAndDateBox'
import LeftFrame from './components/leftFrame/LeftFrame'
import RightFrame from './components/rightFrame/RightFrame'
import BasicButton from '@/common/components/appButton/BasicButton'
import ArrivalStateBox from '@/common/components/arrivalState/ArrivalStateBox'
import ImagesComponentEmpty from './components/ImagesComponentEmpty'
import ImagesComponent from './components/ImagesComponent'
import DetailsRow from './components/detailsRow/DetailsRow'

import leftArrow from '@/assets/icons/arrows/arrowLeftThinBlack.svg'
import editIcon from '@/assets/icons/editPencilWhite.svg'

type Props = {}

const OrderProfile = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      <TopButtonsFrame>
        <BackToOrderButton
          onClick={() => router.push(routeName.adminOrderHistory)}
        >
          <Image src={leftArrow} alt='left arrow icon' height={20} />
          {!isMobile && (
            <BackToOrderLabel>{t('back to orders')}</BackToOrderLabel>
          )}
        </BackToOrderButton>
        <BasicButton onClick={() => setIsEditing((is) => !is)} padding={16}>
          <ButtonIcon>
            <Image src={editIcon} alt='check icon' width={15} />
          </ButtonIcon>
          <ButtonText>{t('edit')}</ButtonText>
        </BasicButton>
      </TopButtonsFrame>

      <ImageFrame>
        <IdAndDateFrame>
          <IdAndDateBox
            auctionId='932874929'
            orderId='2387498739'
            dateOfPurchase='20/04/2025'
          />
        </IdAndDateFrame>

        <StateBoxFrame>
          <ArrivalStateBox arrivalState='arrived' />
        </StateBoxFrame>

        {isEditing ? <ImagesComponentEmpty /> : <ImagesComponent />}
        <DetailsRow isEditing={isEditing} />
      </ImageFrame>

      <BottomFrame>
        <LeftFrame isEditing={isEditing} />
        <RightFrame isEditing={isEditing} />
      </BottomFrame>
    </Container>
  )
}

export default OrderProfile

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  margin-top: unset;
  margin-bottom: unset;
  padding: unset;
  width: unset;

  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 50px;
    gap: 8px;
    padding: 0 5%;
    width: 100%;
  }
`

const ImageFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  padding-top: unset;

  @media ${({ theme }) => theme.media?.sm} {
    padding-top: 106px;
    gap: 8px;
  }
`

const TopButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
`

const BackToOrderButton = styled.button`
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 40px;

  background-color: unset;
  border: none;
  border-radius: ${({ theme }) => theme.radius?.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }

  cursor: pointer;
`

const BackToOrderLabel = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`

const StateBoxFrame = styled.div`
  position: absolute;
  top: -20px;
  left: 0px;

  @media ${({ theme }) => theme.media?.sm} {
    top: 0;
    left: 0;
  }

  z-index: 10;
`

const IdAndDateFrame = styled.div`
  position: absolute;
  top: -40px;
  right: 0;

  @media ${({ theme }) => theme.media?.sm} {
    top: 0;
    right: 0;
  }

  z-index: 10;
`

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
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
