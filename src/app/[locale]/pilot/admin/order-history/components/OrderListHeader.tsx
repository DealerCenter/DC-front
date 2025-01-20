import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const OrderListHeader = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <CarDetails>
        <Text>{t('vehicle data')}</Text>
      </CarDetails>
      <BoxesFrame>
        <RecipientBox>
          <Text>{t('recipient')}</Text>
        </RecipientBox>
        <DealerBox>
          <Text>{t('dealer')}</Text>{' '}
        </DealerBox>
        <StatusBox>
          <Text>{t('status')}</Text>{' '}
        </StatusBox>
        <MoneyBox>
          <Text>{t('amount')}</Text>{' '}
        </MoneyBox>
      </BoxesFrame>
    </Container>
  )
}

export default OrderListHeader

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  border-radius: 24px 24px 0px 0px;
  padding: 24px 16px;
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
`

const CarDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 348px;
`
const BoxesFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`
const RecipientBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 120px;
`
const DealerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 120px;
`
const StatusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 120px;
`
const MoneyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  width: 100px;
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.button_black};
`
