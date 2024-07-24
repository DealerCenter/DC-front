import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import HeaderH4Bold from '../components/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import OrderListItem from './components/OrderListItem'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import DummyImage from '@/assets/images/DummyCarImage.jpg'

type Props = {}

const OrderHistory = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <HeaderH4Bold text={t('order history')} />
        <ButtonFrame>
          <SecondaryButton
            text={t('filter')}
            onClick={() => {}}
            icon={filterIconBlack}
          ></SecondaryButton>
          <SecondaryButton
            text={t('sort')}
            onClick={() => {}}
            icon={sortIconBlack}
          ></SecondaryButton>
        </ButtonFrame>
      </TopFrame>
      <ListFrame>
        <OrderListItem imageLink={DummyImage.src} isArrived={true} />
        <OrderListItem imageLink={DummyImage.src} isArrived={true} />
        <OrderListItem imageLink={DummyImage.src} isArrived={false} />
        <OrderListItem imageLink={DummyImage.src} isArrived={false} />
        <OrderListItem imageLink={DummyImage.src} isArrived={false} />
      </ListFrame>
    </Container>
  )
}

export default OrderHistory

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors?.white};
  padding: ${({ theme }) => theme.spacing?.lg};
  gap: ${({ theme }) => theme.spacing?.lg};
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 32px;
`
const ListFrame = styled.div`
  display: flex;
  flex-direction: column;
`
