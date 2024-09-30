import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'

import { users as dummyUsers } from '@/assets/DummyData'
import plusIcon from '@/assets/icons/plus.svg'
import searchIcon from '@/assets/icons/searchForButton.svg'
import DealersList from './components/DealersList'
import { getDealers } from '@/api/apiCalls'
import { DEALERS_DATA, DEALERS_RES } from '@/api/apiTypes'

const ITEMS_PER_PAGE = 8

type Props = {}

const DealersListBox = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dealersList, setDealersList] = useState<DEALERS_DATA[]>()
  const t = useTranslations('')

  const handleGetDealers = async () => {
    setIsLoading(true)
    const response = await getDealers({
      page: currentPage,
      pageSize: ITEMS_PER_PAGE,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      personalId: '',
    })
    if (response) {
      console.log('res:', response.data)
      // setIsPageLoaded(true)
      setDealersList(response.data)
      setCurrentPage(response.page)
      setTotalPages(response.pageCount)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetDealers()
    //eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Frame>
        <HeaderH4Bold text={t('dealers list')} />
        <ButtonFrame>
          <SecondaryButton
            text={t('search')}
            onClick={() => {}}
            icon={searchIcon}
          />
          <SecondaryButton
            text={t('add recipient')}
            onClick={() => {
              setIsModalOpen(true)
            }}
            icon={plusIcon}
          />
        </ButtonFrame>
      </Frame>
      {dealersList && <DealersList dealersData={dealersList} />}
    </Container>
  )
}

export default DealersListBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  gap: 16px;

  @media ${({ theme }) => theme.media?.sm} {
    padding: 0px;
  }
  padding: 24px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${({ theme }) => theme.media?.sm} {
    align-items: flex-start;
    gap: unset;
    margin-top: 32px;
    min-width: 270px;
    padding: 0 8%;
  }
  align-items: unset;
  gap: 16px;
  width: unset;
  margin-top: unset;
  min-width: unset;
  padding: unset;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
  padding: 8px 0 24px 0;
`
