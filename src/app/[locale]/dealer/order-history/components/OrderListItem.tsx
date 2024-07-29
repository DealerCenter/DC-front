import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import CarDetailsBox from './CarDetailsBox'
import DebtBox from './DebtBox'
import UserInfoBox from './UserInfoBox'
import ShippingStateBox from './ShippingStateBox'
import { useMediaQuery } from 'react-responsive'

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
          {isHiddenCustom || <ShippingStateBox currentStep={shippingStep} />}
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
