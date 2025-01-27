import ShippingStatusButton from '@/common/components/ShippingStatusButton/ShippingStatusButton'
import { SHIPPING_STATUS } from '@/common/helpers/constants'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

type Props = {
  shippingStatus: SHIPPING_STATUS
  amount: number
}

const StatusAndDebtBoxMobile = ({ shippingStatus, amount }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <ShippingStatusButton shippingStatus={shippingStatus} />
      <TextFrame>
        <Text>{t('debt')}</Text>
        <Money>{`$ ${amount.toString()}`}</Money>
      </TextFrame>
    </Container>
  )
}

export default StatusAndDebtBoxMobile

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const Money = styled.label`
  display: flex;
  justify-content: center;

  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0px;
  align-items: flex-end;
  width: 140px;
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
