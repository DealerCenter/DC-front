import React, { useEffect, useState } from 'react'
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

import { routeName } from '@/common/helpers/constants'
import { useMediaQuery } from 'react-responsive'
import theme from '../theme'
import SelectedFiltersFrame from './components/SelectedFiltersFrame'
import { getVehicleList } from '@/common/helpers/utils'
import { FIELD_NAMES, useSearchVehicle } from './hooks/useSearchVehicle'

type Props = { setIsFooterShowing: (arg: boolean) => void }

const SearchForVehicle = ({ setIsFooterShowing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const [isFilterOn, setIsFilterOn] = useState(false)
  const [isFilterOpenOnMobile, setIsFilterOpenOnMobile] = useState(false)

  const {
    vehicleList,
    pagination,
    values,
    activeFilters,
    setFieldValue,
    isLoading,
  } = useSearchVehicle()

  const t = useTranslations('')

  const handleRemoveFromFilters = (key: string) => {
    setFieldValue(key, '') // Reset the filter value
  }

  // in case filter is open and user switches to bigger display
  useEffect(() => {
    if (!isMobile) {
      setIsFilterOpenOnMobile(false)
    }
  }, [isMobile])

  // hide footer when filter open (on mobile)
  useEffect(() => {
    if (isFilterOpenOnMobile) {
      setIsFooterShowing(false)
    } else {
      setIsFooterShowing(true)
    }
  }, [isFilterOpenOnMobile, setIsFooterShowing])

  // toggle filter open only when screen is mobile size
  const handleFilterToggleOnMobile = () => {
    if (isMobile) {
      setIsFilterOpenOnMobile((is) => !is)
    }
  }

  return (
    <Container>
      {!isMobile && <SearchPanel />}
      <ListFrame>
        {pagination && (
          <TextBold19>
            {`${pagination.total} `}
            {t('statement')}
          </TextBold19>
        )}

        <SortFrame>
          <SortBox>
            <SecondaryButton
              text=''
              onClick={handleFilterToggleOnMobile}
              icon={isFilterOn ? filterIconWithCancel : filterIcon}
              withoutLabel={true}
            />
            <Line />
          </SortBox>
          {!isMobile && (
            <SelectedFiltersFrame
              activeFilters={activeFilters}
              handleRemoveFromFilters={handleRemoveFromFilters}
            />
          )}
          {/* <SecondaryButton
              text={t('sort')}
              onClick={() => {}}
              icon={sortIconBlack}
              withoutLabel={isMobile}
            /> */}
        </SortFrame>
        {isFilterOpenOnMobile ? (
          <SearchPanel />
        ) : (
          <>
            {vehicleList && (
              <SearchResultsList
                vehicleList={vehicleList}
                pagination={pagination}
                setFieldValue={setFieldValue}
                isLoading={isLoading}
              />
            )}
          </>
        )}
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

  @media ${({ theme }) => theme.media?.md} {
    width: 644px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 375px;
  }
`

const SortFrame = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing?.md};
  gap: ${({ theme }) => theme.spacing?.md};
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors?.white};
`

const SortBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  gap: ${({ theme }) => theme.spacing?.md};
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

const Line = styled.div`
  width: 1px;
  height: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
`
