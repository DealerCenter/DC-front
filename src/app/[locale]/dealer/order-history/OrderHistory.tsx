import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import HeaderH4Bold from '../components/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import { orderedCars } from '@/assets/DummyData'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import Pagination from '@/common/components/pagination/Pagination'
import OrderList from './components/OrderList'

const itemsPerPage = 8
const totalPages = Math.ceil(orderedCars.length / 8)

type Props = {}

const OrderHistory = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const t = useTranslations('')
  const router = useRouter()

  return (
    <>
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
        <OrderList
          onClick={() => router.push(routeName.order)}
          list={orderedCars}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <PaginationFrame>
          <Pagination
            currentPage={currentPage}
            numOfPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </PaginationFrame>
      </Container>
    </>
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

const PaginationFrame = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
`
