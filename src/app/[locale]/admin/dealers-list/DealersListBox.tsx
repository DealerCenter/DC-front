import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'

import { deleteDealerAdmin, getDealersAdmin } from '@/api/apiCalls'
import { DEALERS_DATA } from '@/api/apiTypes'
import plusIcon from '@/assets/icons/plus.svg'
import AppModal from '@/common/components/modal/AppModal'
import Pagination from '@/common/components/pagination/Pagination'
import SearchButton from '@/common/components/searchButton/SearchButton'
import DealersList from './components/DealersList'
import AddRecipientAdmin from './components/addRecipientAdmin/AddRecipientAdmin'
import { message } from 'antd'
import Loader from '@/common/components/loader/Loader'

const ITEMS_PER_PAGE = 8

type Props = {}

const DealersListBox = (props: Props) => {
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [dealersList, setDealersList] = useState<DEALERS_DATA[]>()
  const [searchQuery, setSearchQuery] = useState('')
  const t = useTranslations('')

  const handleGetDealers = async () => {
    setIsLoading(true)
    const response = await getDealersAdmin({
      page: currentPage,
      pageSize: ITEMS_PER_PAGE,
      firstName: searchQuery,
      lastName: '',
      email: '',
      phoneNumber: '',
      personalId: '',
    })
    if (response) {
      response.data.length === 0 && message.error(t('dealer not found'))
      setIsPageLoaded(true)
      setDealersList(response.data)
      setCurrentPage(response.page)
      setTotalPages(response.pageCount)
    }
    setIsLoading(false)
  }

  const handleDeleteDealer = async (dealerId: number) => {
    try {
      const response = await deleteDealerAdmin(dealerId.toString())
      // console.log('delete res:', response)
      response && message.success(t('dealer deleted successfully'))
      // handleGetDealers()
    } catch (error) {
      message.error(t('could not delete dealer'))
    }
  }

  useEffect(() => {
    handleGetDealers()
    //eslint-disable-next-line
  }, [currentPage, searchQuery])

  if (!isPageLoaded) {
    return (
      <Container>
        <HeaderH4Bold text={t('dealers list')} />
        <Loader height={300} />
      </Container>
    )
  }

  return (
    <Container>
      <Frame>
        <HeaderH4Bold text={t('dealers list')} />
        <ButtonFrame>
          <SearchButton
            isActive={isSearchActive}
            setIsActive={setIsSearchActive}
            text={t('search')}
            placeholder={t('search for dealer')}
            onSubmit={setSearchQuery}
            onCloseSearch={() => setSearchQuery('')}
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
      {dealersList && (
        <DealersList
          dealersData={dealersList}
          onDeleteDealer={handleDeleteDealer}
          isLoading={isLoading}
        />
      )}
      <PaginationFrame>
        <Pagination
          currentPage={currentPage}
          numOfPages={totalPages}
          setCurrentPage={setCurrentPage}
          isDisabled={isLoading}
        />
      </PaginationFrame>
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AddRecipientAdmin onClose={() => setIsModalOpen(false)} />
      </AppModal>
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

const PaginationFrame = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.md};
`
