import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import VehicleBox from './components/VehicleBox'
import { useTranslations } from 'next-intl'

import VehicleTypes from './components/VehicleTypes'
import LogosFrame from './components/LogosFrame'
import SearchFrame from './components/SearchFrame'

type Props = {}

const SearchComponent = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <VehicleTypes />
      </TopFrame>
      <SearchFrame />
      <LogosFrame />
    </Container>
  )
}

export default SearchComponent

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white_86};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
  gap: 60px;

  margin-bottom: 200px;

  @media ${({ theme }) => theme.media?.sm} {
    margin-bottom: 100px;
    padding: ${({ theme }) => theme.spacing?.md};
  }
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: column;
`
