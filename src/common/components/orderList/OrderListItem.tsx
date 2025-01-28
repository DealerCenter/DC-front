import styled, { css } from 'styled-components'

import { ORDER_DATA } from '@/api/apiTypes'
import theme from '@/app/[locale]/theme'
import { useMediaQuery } from 'react-responsive'

import CarDetailsBox from '../../../app/[locale]/dealer/order-history/components/CarDetailsBox'
import DebtBox from '../../../app/[locale]/dealer/order-history/components/DebtBox'
import UserInfoBox from '../../../app/[locale]/dealer/order-history/components/UserInfoBox'
import ShippingStatusBox from '../shippingStateBox/ShippingStatusBox'

type Props = {
  imageLink: string
  index: number
  orderData: ORDER_DATA
  onClick: () => void
}

const OrderListItem = ({ imageLink, orderData, index, onClick }: Props) => {
  const isTablet = useMediaQuery({
    query: theme.media?.md,
  })

  const { status, transportationCost, carCost, statusAndDates } = orderData

  return (
    <Container index={index} onClick={onClick}>
      <Frame>
        <CarDetailsBox imageLink={imageLink} orderData={orderData} />
        <MiddleFrame>
          <UserInfoBox orderData={orderData} />
          {isTablet || (
            <ShippingStateBoxFrame>
              {/* @ts-ignore */}
              <ShippingStatusBox isEditing={false} value={statusAndDates} />
            </ShippingStateBoxFrame>
          )}
        </MiddleFrame>
      </Frame>
      <DebtBox amount={transportationCost} shippingStatus={status} />
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

  cursor: pointer;
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
  width: 252px;
  height: 180px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 180px;
  }
`
