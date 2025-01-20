import { useTranslations } from 'next-intl'
import { useState } from 'react'
import styled from 'styled-components'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import UsersList from './components/UsersList'

import plusIcon from '@/assets/icons/plus.svg'
import AppModal from '@/common/components/modal/AppModal'
import SearchButton from '@/common/components/searchButton/SearchButton'
import HeaderH4Bold from '@/common/components/textComponents/HeaderH4Bold'
import AddRecipient from './components/addRecipient/AddRecipient'
import Loader from '@/common/components/loader/Loader'

type Props = {}

const UsersListBox = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [updatedSuccessfully, setUpdatedSuccessfully] = useState(false)
  const t = useTranslations('')

  const onSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCloseSearch = () => {
    setSearchQuery('')
  }

  return (
    <>
      <Container>
        <Frame>
          <HeaderH4Bold text={t('list of users')} />
          <ButtonFrame>
            <SearchButton
              isActive={isSearchActive}
              setIsActive={setIsSearchActive}
              text={t('search')}
              placeholder={t('search for recipient')}
              onSubmit={onSearch}
              onCloseSearch={handleCloseSearch}
              isDisabled={isLoading}
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

        <UsersList
          setIsModalOpen={setIsModalOpen}
          searchQuery={searchQuery}
          updatedSuccessfully={updatedSuccessfully}
          setUpdatedSuccessfully={setUpdatedSuccessfully}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Container>

      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AddRecipient
          onClose={() => setIsModalOpen(false)}
          setUpdatedSuccessfully={setUpdatedSuccessfully}
        />
      </AppModal>
    </>
  )
}

export default UsersListBox

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
