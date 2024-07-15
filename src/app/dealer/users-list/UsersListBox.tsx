import React from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import UsersList from './components/UsersList'
import AppButton from '@/common/components/appButton/AppButton'
import PlaceHolderForList from './components/PlaceHolderForList'

type Props = {}

const DummyData = [
  {
    fullName: 'Luka Tsilosani',
    id: '09138409387',
    mobile: '098 028 07 77',
    dateOfAddition: '24/07/11',
    isVerified: true,
  },
  {
    fullName: 'Zuka Jakeli',
    id: '02189491234',
    mobile: '098 028 11 11',
    dateOfAddition: '24/04/11',
    isVerified: true,
  },
  {
    fullName: 'Elon Musk',
    id: '06060600000',
    mobile: '000 06 06 06',
    dateOfAddition: '00/11/11',
    isVerified: false,
  },
  {
    fullName: 'Siddhartha Gautama',
    id: '0000000001',
    mobile: '000 00 00 01',
    dateOfAddition: '00/00/01',
    isVerified: true,
  },
]

const UsersListBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <H2Box>
        <StyledH2>მომხმარებლების სია</StyledH2>
      </H2Box>
      <Frame>
        <ButtonFrame>
          <AppButton
            height='medium'
            type='outlined'
            text={t('search')}
            disabled={false}
            onClick={() => {}}
            isSmall={true}
          />
          <AppButton
            height='medium'
            type='outlined'
            text={t('add recipient')}
            disabled={false}
            onClick={() => {}}
          />
        </ButtonFrame>
        {DummyData.length === 0 ? (
          <PlaceHolderForList onClick={() => {}} />
        ) : (
          <UsersList usersData={DummyData} />
        )}
      </Frame>
    </Container>
  )
}

export default UsersListBox

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  width: 836px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 16px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 10px;
  padding: 8px 0;
`

const H2Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 372px;
  height: 82px;
`

const StyledH2 = styled.div`
  color: rgba(32, 32, 32, 1);
  font-size: 28px;
  font-weight: 700;
`
