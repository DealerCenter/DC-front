import ShippingStateBox from '@/common/components/shippingStateBox/ShippingStatusBox'
import styled from 'styled-components'

import { ORDER_DATA } from '@/api/apiTypes'
import BoxWithHeader from './BoxWithHeader'
import ContainerData from './rightColumnComponents/ContainerData'
import DataOfRecipient from './rightColumnComponents/DataOfRecipient'
import DealerData from './rightColumnComponents/DealerData'

type Props = { orderData: ORDER_DATA; getOrderData: () => void }

const RightColumn = ({ orderData, getOrderData }: Props) => {
  const { statusAndDates, container, receiver, dealer } = orderData

  return (
    <Container>
      <BoxWithHeader headerText='status'>
        <ShippingStateBox isEditing={false} value={statusAndDates} />
      </BoxWithHeader>
      <ContainerData containerData={container} />
      <DataOfRecipient receiverData={receiver} getOrderData={getOrderData} />
      <DealerData data={dealer} />
    </Container>
  )
}

export default RightColumn

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
  }
`
