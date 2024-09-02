import React from 'react'
import styled from 'styled-components'

type Props = { text: string }

const SearchButton = ({ text }: Props) => {
  return <Button>{text}</Button>
}

export default SearchButton

const Button = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  padding: ${({ theme }) => theme.spacing?.md};
  border-radius: 24px;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
