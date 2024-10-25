import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { message } from 'antd'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import { deleteReceiver, getReceivers } from '@/api/apiCalls'
import { RECEIVER_DATA, RECEIVER_GET_RES } from '@/api/apiTypes'

import ListItem from './listItem/ListItem'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import Pagination from '@/common/components/pagination/Pagination'
import UserListEmpty from './UserListEmpty'

const RECEIVERS_PER_PAGE = 10

type Props = {
  setIsModalOpen: (arg: boolean) => void
  searchQuery: string
  setSearchQuery: (arg: string) => void
  updatedSuccessfully: boolean
  setUpdatedSuccessfully: (arg: boolean) => void
}

const UserList = ({
  setIsModalOpen,
  searchQuery,
  setSearchQuery,
  updatedSuccessfully,
  setUpdatedSuccessfully,
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [receiversData, setReceiversData] = useState<
    RECEIVER_DATA[] | undefined
  >(undefined)

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
      message.error('could not find recipient')
    }
    setIsLoading(false)
  }

  // getData when search query comes in, or when the page changes
  useEffect(() => {
    getData()

    if (updatedSuccessfully) {
      setIsModalOpen(false)
      setUpdatedSuccessfully(false)
    }
    //eslint-disable-next-line
  }, [searchQuery, currentPage, updatedSuccessfully])

  const handleDelete = async (id: number) => {
    try {
      await deleteReceiver(id)
      getData()
      message.success(t('receiver deleted successfully'))
    } catch (error) {
      message.error(t('receiver not deleted'))
    }
  }

  if (!receiversData) {
    return <Container />
  }

  if (receiversData.length === 0 && searchQuery.length === 0) {
    return <UserListEmpty onClick={() => setIsModalOpen(true)} />
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
