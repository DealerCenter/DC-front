import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { message } from 'antd'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/pilot/theme'
import { deleteReceiver, getReceivers } from '@/api/apiCalls'
import { RECEIVER_DATA, RECEIVER_GET_RES } from '@/api/apiTypes'

import ListItem from './listItem/ListItem'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import Pagination from '@/common/components/pagination/Pagination'
import UserListEmpty from './UserListEmpty'
import Loader from '@/common/components/loader/Loader'

const RECEIVERS_PER_PAGE = 10

type Props = {
  setIsModalOpen: (arg: boolean) => void
  searchQuery: string
  updatedSuccessfully: boolean
  setUpdatedSuccessfully: (arg: boolean) => void
  isLoading: boolean
  setIsLoading: (arg: boolean) => void
}

const UserList = ({
  setIsModalOpen,
  searchQuery,
  updatedSuccessfully,
  setUpdatedSuccessfully,
  isLoading,
  setIsLoading,
}: Props) => {
  const [receiversData, setReceiversData] = useState<RECEIVER_DATA[]>()

  const [numOfPages, setNumOfPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const getData = async () => {
    setIsLoading(true)
    const response = await getReceivers({
      page: currentPage,
      pageSize: RECEIVERS_PER_PAGE,
      search: searchQuery,
    })
    if (response) {
      setReceiversData(response.data)
      setNumOfPages(response.pageCount)
    }
    if (searchQuery && response?.data.length === 0) {
      message.error(t('receiver not found'))
    }
    setIsLoading(false)
  }

  // Fetch data when currentPage changes or update is successful
  useEffect(() => {
    getData()

    if (updatedSuccessfully) {
      setIsModalOpen(false)
      setUpdatedSuccessfully(false)
    }
    //eslint-disable-next-line
  }, [currentPage, updatedSuccessfully])

  // Reset currentPage when searchQuery changes without triggering getData
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1) // This will trigger the first useEffect due to the currentPage change
    } else {
      getData() // Call getData directly if already on the first page
    }
    //eslint-disable-next-line
  }, [searchQuery])

  const handleDelete = async (id: number) => {
    try {
      await deleteReceiver(id)
      getData()
      message.success(t('receiver deleted successfully'))
    } catch (error) {
      message.error(t('receiver not deleted'))
    }
  }

  if (isLoading) {
    return <Loader />
  }

  if (!receiversData) {
    return <Container />
  }

  if (receiversData.length === 0 && searchQuery.length === 0) {
    return <UserListEmpty onClick={() => setIsModalOpen(true)} />
  }

  if (receiversData.length === 0 && searchQuery.length !== 0) {
    return (
      <CouldNotFindReceiver>{t('receiver not found')}</CouldNotFindReceiver>
    )
  }

  return (
    <>
      <Container>
        <>
          {!isMobile && (
            <LabelsContainer
              labels={[
                t('recipient'),
                t('mobile'),
                t('the date of addition'),
                t('verification'),
              ]}
            />
          )}
          {receiversData.map((data) => (
            <ListItem
              receiverData={data}
              key={data.id}
              handleDelete={handleDelete}
              updatedSuccessfully={updatedSuccessfully}
              setUpdatedSuccessfully={setUpdatedSuccessfully}
            />
          ))}
        </>
      </Container>
      <PaginationBox>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numOfPages={numOfPages}
          isDisabled={isLoading}
        />
      </PaginationBox>
    </>
  )
}

export default UserList

const Container = styled.div``

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
`

const CouldNotFindReceiver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};
`
