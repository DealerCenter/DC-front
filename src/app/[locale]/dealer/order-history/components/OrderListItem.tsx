import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import CarDetailsBox from './CarDetailsBox'
import DebtBox from './DebtBox'
import UserInfoBox from './UserInfoBox'
import ShippingStateBox from './ShippingStateBox'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { boolean } from 'yup'

type Props = {
  imageLink: string
  index: number
  item: {
    brand: string
    model: string
    year: string
    serialNumber: string
    buyerFullName: string
    buyerPhoneNumber: string
    debt: number
    isArrived: boolean
  }
}

const OrderListItem = ({ imageLink, item, index }: Props) => {
  const isHiddenCustom = useMediaQuery({
    query: '(max-width: 1250px) and (min-width: 900px)',
  })

  return (
    <Container index={index}>
      <Frame>
        <CarDetailsBox
          imageLink={imageLink}
          brand={item.brand}
          model={item.model}
          year={item.year}
          serialNumber={item.serialNumber}
        />
        <MiddleFrame>
          <UserInfoBox
            isArrived={item.isArrived}
            buyerFullName={item.buyerFullName}
            buyerPhoneNumber={item.buyerPhoneNumber}
          />
          {isHiddenCustom || <ShippingStateBox />}
        </MiddleFrame>
      </Frame>
      <DebtBox amount={item.debt} isArrived={item.isArrived} />
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
