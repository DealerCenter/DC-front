import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { deleteReceiver, getReceivers } from '@/api/apiCalls'

import ListItem from './listItem/ListItem'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import Pagination from '@/common/components/pagination/Pagination'
import UserListEmpty from './UserListEmpty'
import { message } from 'antd'

const RECEIVERS_PER_PAGE = 10

type Props = {
  setIsModalOpen: (arg: boolean) => void
  searchQuery: string
  updatedSuccessfully: boolean
  setUpdatedSuccessfully: (arg: boolean) => void
}

const UserList = ({
  setIsModalOpen,
  searchQuery,
  updatedSuccessfully,
  setUpdatedSuccessfully,
}: Props) => {
  const [receiversData, setReceiversData] = useState<
    RECEIVER_GET_RES[] | undefined
  >(undefined)

  const [numOfPages, setNumOfPages] = useState(0)
  const [receiversToSkip, setReceiversToSkip] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const getData = async () => {
    const response = await getReceivers({
      skip: searchQuery ? 0 : receiversToSkip,
      take: searchQuery ? 1000 : RECEIVERS_PER_PAGE,
      search: searchQuery,
    })
    if (searchQuery && response?.length === 0) {
      message.error('could not find recipient')
    }
    setReceiversData(response)
  }

  // To get number of pages for the Pagination component
  const getTotalReceivers = async () => {
    try {
      const response = await getReceivers({
        skip: 0,
        take: 10000,
        search: '',
      })
      response && setNumOfPages(Math.ceil(response.length / RECEIVERS_PER_PAGE))
    } catch (error) {
      console.error('Could not get total receivers')
    }
  }

  useEffect(() => {
    getTotalReceivers()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    setReceiversToSkip(RECEIVERS_PER_PAGE * (currentPage - 1))
  }, [currentPage])

  // getData when search query comes in, or when the page changes
  useEffect(() => {
    getData()

    if (updatedSuccessfully) {
      setIsModalOpen(false)
      setUpdatedSuccessfully(false)
    }
    //eslint-disable-next-line
  }, [searchQuery, receiversToSkip, updatedSuccessfully])

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
      {searchQuery.length === 0 && (
        <PaginationBox>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numOfPages={numOfPages}
          />
        </PaginationBox>
      )}
    </>
  )
}

export default UserList

const Container = styled.div``

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
`
