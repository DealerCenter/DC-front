import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

import upDownIcon from '@/assets/icons/upDownArrows.svg'
import AtoZIcon from '@/assets/icons/AtoZSort.svg'
import Image from 'next/image'

type Props = {}

const OrderListHeader = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <CarDetails>
        <Icon>
          <Image src={AtoZIcon} alt='up down arrow icon' />
        </Icon>
        <Text>{t('vehicle data')}</Text>
      </CarDetails>
      <BoxesFrame>
        <RecipientBox>
          <Text>{t('recipient')}</Text>
          <Icon>
            <Image src={upDownIcon} alt='up down arrow icon' />
          </Icon>
        </RecipientBox>
        <DealerBox>
          <Text>{t('dealer')}</Text>{' '}
          <Icon>
            <Image src={upDownIcon} alt='up down arrow icon' />
          </Icon>
        </DealerBox>
        <StatusBox>
          <Text>{t('status')}</Text>{' '}
          <Icon>
            <Image src={upDownIcon} alt='up down arrow icon' />
          </Icon>
        </StatusBox>
        <MoneyBox>
          <Text>{t('amount')}</Text>{' '}
          <Icon>
            <Image src={upDownIcon} alt='up down arrow icon' />
          </Icon>
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
const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
