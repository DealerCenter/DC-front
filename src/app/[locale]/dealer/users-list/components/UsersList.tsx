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

type Props = { setIsModalOpen: (arg: boolean) => void; searchQuery: string }

const UserList = ({ setIsModalOpen, searchQuery }: Props) => {
  const [receiversData, setReceiversData] = useState<
    RECEIVER_GET_RES[] | undefined
  >(undefined)

  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const receiversToSkip = 0
  const receiversToTake = 16

  const getData = async () => {
    const response = await getReceivers({
      skip: receiversToSkip,
      take: receiversToTake,
      search: searchQuery,
    })
    setReceiversData(response)
  }

  useEffect(() => {
    getData()
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

  if (!receiversData) {
    return <Container />
  }

  if (receiversData.length === 0) {
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
            />
          ))}
        </>
      </Container>
      {/* <PaginationBox>
        <Pagination currentPage={1} setCurrentPage={() => {}} numOfPages={2} />
      </PaginationBox> */}
    </>
  )
}

export default UserList

const Container = styled.div``

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
`
