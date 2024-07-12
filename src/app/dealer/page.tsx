'use client'
import React from 'react'
import SideBar from './sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'
import UsersListBox from './usersList/UsersListBox'

type Props = {}

const page = (props: Props) => {
  return (
    <Container>
      <Header />
      <Frame>
        <SideBar />
        <ContentContainer>
          <UsersListBox />
        </ContentContainer>
      </Frame>
    </Container>
  )
}

export default page

const Container = styled.div`
  background-color: #2020200a;
`
const Frame = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 24px;
  margin-top: 8px;
`

const ContentContainer = styled.div`
  align-items: flex-start;
`
