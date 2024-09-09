import React from 'react'
import styled from 'styled-components'

type Props = {}

const SearchPanel = (props: Props) => {
  return <Container>SearchPanel</Container>
}

export default SearchPanel

const Container = styled.div`
  box-sizing: border-box;
  display: flex;

  width: 300px;
  padding: ${({ theme }) => theme.spacing?.xl};
  gap: ${({ theme }) => theme.spacing?.md};
  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors?.white};
`
