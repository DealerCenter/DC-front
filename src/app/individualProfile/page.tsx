'use client'
import React from 'react'
import SideBar from './sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'
import UsersList from './usersList/UsersList'

type Props = {}

const page = (props: Props) => {
  return (
    <Container>
      <Header />
      <Frame>
        <SideBar />
        <UsersList />
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
