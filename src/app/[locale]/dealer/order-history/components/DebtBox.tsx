import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import ShippingStatusButton from '@/common/components/ShippingStatusButton/ShippingStatusButton'
import { SHIPPING_STATUS } from '@/common/helpers/constants'

type Props = {
  amount: number
  shippingStatus: SHIPPING_STATUS
}

const DebtBox = ({ amount, shippingStatus }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <Text>{t('debt')}</Text>
        <Money>$ {amount}</Money>
      </Frame>
      <ShippingStatusButton shippingStatus={shippingStatus} />
    </Container>
  )
}

export default DebtBox

const Container = styled.div`
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
    flex-direction: row-reverse;
    align-items: center;
  }
`
const Frame = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 0px;
`

const Text = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
const Money = styled.p`
  margin: 0;
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
`
