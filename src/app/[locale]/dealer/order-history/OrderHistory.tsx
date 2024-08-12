import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import AppDropdown from '@/common/components/appDropdown/AppDropdown'
import OrderList from './components/OrderList'
import { orderedCars } from '@/assets/DummyData'

import filterIconBlack from '@/assets/icons/filterBlack.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import Pagination from '@/common/components/pagination/Pagination'

import arrowDown from '@/assets/icons/sortArrows/arrowSortDown.svg'
import arrowUp from '@/assets/icons/sortArrows/arrowSortUp.svg'

const itemsPerPage = 8
const totalPages = Math.ceil(orderedCars.length / 8)

type Props = {}

const OrderHistory = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const t = useTranslations('')
  const router = useRouter()

  const sortOptions = [
    { label: 'date descending', icon: arrowDown },
    { label: 'date ascending', icon: arrowUp },
    { label: 'price descending', icon: arrowDown },
    { label: 'price ascending', icon: arrowUp },
  ]

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
          <AppDropdown items={sortOptions} modalStyle='white'>
            <SecondaryButton
              text={t('sort')}
              onClick={() => {}}
              icon={sortIconBlack}
            ></SecondaryButton>
          </AppDropdown>
        </ButtonFrame>
      </TopFrame>
      <OrderList
        onClick={() => router.push(routeName.dealerOrder)}
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
