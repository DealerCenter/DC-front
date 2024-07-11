'use client'
import React from 'react'
import SideBar from './sideBar/SideBar'
import Header from '@/common/components/header/Header'
import styled from 'styled-components'

type Props = {}

const page = (props: Props) => {
  return (
    <Container>
      <Header />
      <SideBar />
    </Container>
  )
}

export default page

const Container = styled.div`
  background-color: #2020200a;
`
