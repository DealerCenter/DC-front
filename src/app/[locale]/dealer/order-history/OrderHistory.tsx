import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import HeaderH4Bold from '../components/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import OrderListItem from './components/OrderListItem'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import DummyImage from '@/assets/images/DummyCarImage.jpg'
import Image from 'next/image'
import { orderedCars } from '@/assets/DummyData'

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
        {orderedCars.map((car, i) => (
          <OrderListItem
            imageLink={DummyImage.src}
            item={car}
            key={`${car.serialNumber}82kj32$${i}`}
            index={i}
          />
        ))}
        {/* <OrderListItem imageLink={DummyImage.src} isArrived={true} />
        <OrderListItem imageLink={DummyImage.src} isArrived={true} />
        <OrderListItem imageLink={DummyImage.src} isArrived={false} />
        <OrderListItem imageLink={DummyImage.src} isArrived={false} />
        <OrderListItem imageLink={DummyImage.src} isArrived={false} /> */}
      </ListFrame>
    </Container>
  )
}

export default OrderHistory

const Line = styled.div``

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

  @media ${({ theme }) => theme.media?.sm} {
    gap: 16px;
    padding: 0 5%;
  }
`

const ButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 32px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0;
  }
`
const ListFrame = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`
