import React from 'react'
import styled from 'styled-components'

type Props = {
  placeholder?: string
  searchQuery: string
  setSearchQuery: (arg: string) => void
}

const SearchSmall = ({ placeholder, searchQuery, setSearchQuery }: Props) => {
  return (
    <Container>
      <StyledInput
        placeholder={placeholder ? placeholder : ''}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></StyledInput>
    </Container>
  )
}

export default SearchSmall

const Container = styled.div``

const StyledInput = styled.input`
  box-sizing: border-box;

  width: 100%;

  height: 32px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors?.black};
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_10};

  padding-right: 5px;
  padding-left: 5px;
  background-color: ${({ theme }) => theme.colors?.white};

  &:focus {
    outline: none;
  }
`
