import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import CarDetailsBox from '../../../app/[locale]/dealer/order-history/components/CarDetailsBox'
import DebtBox from '../../../app/[locale]/dealer/order-history/components/DebtBox'
import UserInfoBox from '../../../app/[locale]/dealer/order-history/components/UserInfoBox'
import ShippingStateBox from '../../../app/[locale]/dealer/order-history/components/ShippingStateBox'
import { useMediaQuery } from 'react-responsive'
import { dummyShippingSteps } from '@/assets/DummyData'

type Props = {
  imageLink: string
  index: number
  shippingStep: 0 | 1 | 2 | 3 | 4
  item: {
    brand: string
    model: string
    year: string
    vinCode: string
    buyerFullName: string
    buyerPhoneNumber: string
    debt: number
    isArrived: boolean
    arrivalState: string
  }
  onClick: () => void
}

const OrderListItem = ({
  imageLink,
  item,
  index,
  shippingStep,
  onClick,
}: Props) => {
  const isHiddenCustom = useMediaQuery({
    query: '(max-width: 1250px) and (min-width: 900px)',
  })

  const {
    brand,
    model,
    year,
    vinCode,
    buyerFullName,
    buyerPhoneNumber,
    debt,
    isArrived,
    arrivalState,
  } = item

  return (
    <Container index={index} onClick={onClick}>
      <Frame>
        <CarDetailsBox
          imageLink={imageLink}
          brand={brand}
          model={model}
          year={year}
          vinCode={vinCode}
        />
        <MiddleFrame>
          <UserInfoBox
            isArrived={isArrived}
            buyerFullName={buyerFullName}
            buyerPhoneNumber={buyerPhoneNumber}
          />
          {isHiddenCustom || (
            <ShippingStateBoxFrame>
              <ShippingStateBox
                shippingSteps={dummyShippingSteps}
                currentStep={shippingStep}
              />
            </ShippingStateBoxFrame>
          )}
        </MiddleFrame>
      </Frame>
      <DebtBox amount={debt} arrivalState={arrivalState} />
    </Container>
  )
}

export default OrderListItem

type IndexProp = { index: number }

const Container = styled.li<IndexProp>`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 212px;

  padding: ${({ theme }) => theme.spacing?.md};
  flex: 1;

  ${({ index }) =>
    index !== 0
      ? css`
          border: 0px;
          border-top: 1px;
          border-style: solid;
          border-color: ${({ theme }) => theme.colors?.main_gray_04};
        `
      : css`
          border: none;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    height: unset;
    gap: 24px;
  }
`
const MiddleFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  flex: 0.8;
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 0.9;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 24px;
  }
`

const ShippingStateBoxFrame = styled.div`
  width: 222px;
  height: 180px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 180px;
  }
`
