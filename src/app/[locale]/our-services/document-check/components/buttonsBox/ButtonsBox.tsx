import React from 'react'
import styled from 'styled-components'
import SearchButton from './components/SearchButton'

type Props = {}

const ButtonsBox = (props: Props) => {
  return (
    <Container>
      <SearchButton text='Salvage' />
      <SearchButton text='Flood' />
      <SearchButton text='Rebuild' />
      <SearchButton text='Repossessed' />
      <SearchButton text='Repossessed' />
    </Container>
  )
}

export default ButtonsBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    overflow: auto;
    justify-content: flex-start;
  }
`
