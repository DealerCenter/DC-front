import styled from 'styled-components'
import OrderListItem from './OrderListItem'

import { ORDER_DATA } from '@/api/apiTypes'
import theme from '@/app/[locale]/theme'
import DummyImage from '@/assets/images/DummyCarImage.jpg'
import { routeName } from '@/common/helpers/constants'
import { useRouter } from '@/navigation'
import { useMediaQuery } from 'react-responsive'
import OrderListHeader from './OrderListHeader'

type Props = {
  list: ORDER_DATA[]
  isEditing: boolean
}

const OrderList = ({ list, isEditing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const router = useRouter()

  return (
    <ListFrame>
      {!isMobile && <OrderListHeader />}
      {list.map((order, i) => (
        <OrderListItem
          onClick={() =>
            router.push(`${routeName.adminCreateOrder}/${order.id}`)
          }
          imageLink={DummyImage.src}
          item={order}
          key={`${order.id}82kj32${i}`}
          isEditing={isEditing}
        />
      ))}
    </ListFrame>
  )
}

export default OrderList

const ListFrame = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: unset;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 16px;
  }
`
