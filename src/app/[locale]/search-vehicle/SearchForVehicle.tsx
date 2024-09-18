import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SearchPanel from './components/SearchPanel'
import { useTranslations } from 'next-intl'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import sortIconBlack from '@/assets/icons/sortBlack.svg'
import filterIcon from '@/assets/icons/filterIcon2.svg'
import filterIconWithCancel from '@/assets/icons/filterIcon2WithCancel.svg'
import Pagination from '@/common/components/pagination/Pagination'
import SearchResultsList from './components/SearchResultsList'

import checkboxFilled from '@/assets/icons/checkboxFilled.svg'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

const DummyNumOfPages = 3

type Props = {}

const SearchForVehicle = (props: Props) => {
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const t = useTranslations('')

  const router = useRouter()

  return (
    <Container>
      <SearchPanel />
      <ListFrame>
        <TextBold19>
          {`${'65'} `}
          {t('statement')}
        </TextBold19>
        <SortBox>
          <SecondaryButton
            text=''
            onClick={() => setIsFilterOn((is) => !is)}
            icon={isFilterOn ? filterIconWithCancel : filterIcon}
            withoutLabel={true}
          />
          <SecondaryButton
            text='temporary vehicle listing link'
            onClick={() => router.push(routeName.vehicleListing)}
            icon={checkboxFilled}
          />
          <SecondaryButton
            text={t('sort')}
            onClick={() => {}}
            icon={sortIconBlack}
          />
        </SortBox>
        <SearchResultsList />
        <PaginationBox>
          <Pagination
            currentPage={currentPage}
            numOfPages={DummyNumOfPages}
            setCurrentPage={setCurrentPage}
          />
        </PaginationBox>
      </ListFrame>
    </Container>
  )
}

export default SearchForVehicle

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing?.md};

  padding: 32px 0 80px 0;
`

const ListFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  width: 860px;
`

const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing?.xl};
  gap: ${({ theme }) => theme.spacing?.md};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors?.white};
`

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors?.white};
`

const TextBold19 = styled.h6`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
