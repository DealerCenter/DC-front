import React from 'react'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import UsersList from './UsersList'
import AppButton from '@/common/components/appButton/AppButton'

type Props = {}

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
            type='outlined'
            text={t('search')}
            disabled={false}
            onClick={() => {}}
            isSmall={true}
          />
          <AppButton
            type='outlined'
            text={t('add recipient')}
            disabled={false}
            onClick={() => {}}
          />
        </ButtonFrame>
        <UsersList />
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
