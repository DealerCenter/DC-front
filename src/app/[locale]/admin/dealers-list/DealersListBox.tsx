import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import searchIcon from '@/assets/icons/searchForButton.svg'
import plusIcon from '@/assets/icons/plus.svg'
import UserListEmpty from './components/UserListEmpty'
import AddRecipient from './components/addRecipient/AddRecipient'
import AppModal from '@/common/components/modal/AppModal'
import { users as dummyUsers } from '@/assets/DummyData'
import DealersList from './components/DealersList'

type Props = {}

const DealersListBox = (props: Props) => {
  const t = useTranslations('')
  const [isModalOpen, setIsModalOpen] = useState(false)

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
            text={t('add container')}
            onClick={() => {
              setIsModalOpen(true)
            }}
            icon={plusIcon}
          />
        </ButtonFrame>
      </Frame>
      <DealersList dealersData={dummyUsers} />
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
