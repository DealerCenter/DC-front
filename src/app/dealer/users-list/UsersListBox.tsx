import React from 'react'
import { useTranslations } from 'next-intl'
import styled, { css } from 'styled-components'

import UsersList from './components/UsersList'
import AppButton from '@/common/components/appButton/AppButton'
import PlaceHolderForList from './components/PlaceHolderForList'
import HeaderH4Bold from '../components/HeaderH4Bold'
import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import searchIcon from '@/assets/icons/searchForButton.svg'
import plusIcon from '@/assets/icons/plus.svg'

type Props = {}

const DummyData = [
  // {
  //   fullName: 'Luka Tsilosani',
  //   id: '09138409387',
  //   mobile: '098 028 07 77',
  //   dateOfAddition: '24/07/11',
  //   isVerified: true,
  // },
  // {
  //   fullName: 'Zuka Jakeli',
  //   id: '02189491234',
  //   mobile: '098 028 11 11',
  //   dateOfAddition: '24/04/11',
  //   isVerified: true,
  // },
  // {
  //   fullName: 'Elon Musk',
  //   id: '06060600000',
  //   mobile: '000 06 06 06',
  //   dateOfAddition: '00/11/11',
  //   isVerified: false,
  // },
  // {
  //   fullName: 'Siddhartha Gautama',
  //   id: '0000000001',
  //   mobile: '000 00 00 01',
  //   dateOfAddition: '00/00/01',
  //   isVerified: true,
  // },
]

const UsersListBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <HeaderH4Bold text={t('list of users')} />
        <ButtonFrame>
          <SecondaryButton
            text={t('search')}
            onClick={() => {}}
            icon={searchIcon}
          />
          <SecondaryButton
            text={t('add recipient')}
            onClick={() => {}}
            icon={plusIcon}
          />
        </ButtonFrame>
      </Frame>
      {DummyData.length === 0 ? (
        <PlaceHolderForList onClick={() => {}} />
      ) : (
        <UsersList usersData={DummyData} />
      )}
    </Container>
  )
}

export default UsersListBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
  gap: 16px;

  @media (max-width: 500px) {
    align-items: center;
    width: 390px;
    padding: 0px;
  }
  width: 836px;
  padding: 24px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: 500px) {
    align-items: flex-start;
    gap: unset;
    width: 358px;
    margin-top: 32px;
  }
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
  padding: 8px 0 24px 0;
`
