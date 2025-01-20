import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import CarImageAndModelBox from './CarImageAndModelBox'
import DetailsBox from './DetailsBox'

import { ORDER_DATA } from '@/api/apiTypes'
import theme from '@/app/[locale]/pilot/theme'
import grabHandle from '@/assets/icons/GrabHandle2x3Dots.svg'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import PersonFrameMobile from './PersonFrameMobile'
import StatusAndDebtBoxMobile from './StatusAndDebtBoxMobile'

type Props = {
  imageLink: string
  item: ORDER_DATA
  onClick: () => void
  isEditing: boolean
  addOrderId: (id: number) => void
  removeOrderId: (id: number) => void
}

const OrderListItem = ({
  imageLink,
  item,
  onClick,
  isEditing,
  addOrderId,
  removeOrderId,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const [isChecked, setIsChecked] = useState(false)

  const {
    manufacturer: brand,
    model: carModel,
    manufactureYear: year,
    vin: vinCode,
    receiver,
    dealer,
    carCost,
    transportationCost: amount,
    status: shippingStatus,
    createdAt: date,
    id: orderId,
  } = item
  const {
    firstName: buyerFullName,
    phoneNumber: buyerPhoneNumber,
    verificationStatus: receiverVerificationStatus,
  } = receiver
  const {
    firstName: dealerFullName,
    phoneNumber: dealerPhoneNumber,
    idImageVerificationStatus: dealerVerificationStatus,
  } = dealer

  useEffect(() => {
    !isEditing && setIsChecked(false)
  }, [isEditing])

  const handleClick = () => {
    if (isEditing) {
      isChecked ? removeOrderId(orderId) : addOrderId(orderId)
      setIsChecked((is) => !is)
    } else {
      onClick()
    }
  }

  return (
    <Container isSelected={isChecked} onClick={handleClick} isMobile={isMobile}>
      <Frame isMobile={isMobile}>
        {!isMobile && (
          <CheckboxFrame>
            {isEditing && (
              <IconBox>
                <CheckBox isChecked={isChecked} />
              </IconBox>
            )}
          </CheckboxFrame>
        )}
        {isMobile && (
          <StatusAndDebtBoxMobile
            shippingStatus={shippingStatus}
            amount={amount + carCost}
          />
        )}
        <CarImageAndModelBox
          imageLink={imageLink}
          brand={brand}
          model={carModel}
          year={year}
          vinCode={vinCode}
          date={date}
        />
      </Frame>

      {isMobile ? (
        <BottomFrameMobile>
          <PersonFrameMobile
            header={t('recipient')}
            fullName={buyerFullName}
            mobileNumber={buyerPhoneNumber}
          />
          <PersonFrameMobile
            header={t('dealer')}
            fullName={dealerFullName}
            mobileNumber={dealerPhoneNumber}
          />
        </BottomFrameMobile>
      ) : (
        <DetailsBox
          amount={amount + carCost}
          shippingStatus={shippingStatus}
          buyerFullName={buyerFullName}
          buyerPhoneNumber={buyerPhoneNumber}
          dealerFullName={dealerFullName}
          dealerPhoneNumber={dealerPhoneNumber}
          dealerVerificationStatus={dealerVerificationStatus}
          receiverVerificationStatus={receiverVerificationStatus}
          vinCode={vinCode}
        />
      )}
    </Container>
  )
}

export default OrderListItem

const CheckboxFrame = styled.div`
  width: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const IconBox = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

type IndexProp = { isSelected: boolean; isMobile: boolean }

const Container = styled.li<IndexProp>`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 128px;

  padding: ${({ theme }) => theme.spacing?.md};

  ${({ isMobile, isSelected }) =>
    isMobile && !isSelected
      ? css`
          border-radius: ${({ theme }) => theme.radius?.lg};
          background-color: unset;
          border: 2px solid ${({ theme }) => theme.colors?.white};
        `
      : isMobile && isSelected
      ? css`
          border-radius: ${({ theme }) => theme.radius?.lg};
          background-color: ${({ theme }) => theme.colors?.main_gray_04};
          border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
        `
      : !isMobile
      ? css`
          border: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
          border-top: 0;
        `
      : css`
          border: none;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    height: unset;
    gap: 24px;
  }

  @media ${({ theme }) => theme.media?.notSm} {
    &:hover {
      background-color: ${({ theme }) => theme.colors?.main_gray_04};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors?.main_gray_16};
    }
  }
`
type FrameProp = { isMobile: boolean }

const Frame = styled.div<FrameProp>`
  display: flex;
  flex-direction: row;

  gap: ${({ theme }) => theme.spacing?.sm};

  ${({ isMobile }) =>
    isMobile
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: center;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 24px;
  }
`

const BottomFrameMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`
