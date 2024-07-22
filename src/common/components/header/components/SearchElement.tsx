import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import searchIcon from '@/assets/icons/search.svg'

type Props = { onClick: () => void }

const SearchElement = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <Image width={20} height={20} src={searchIcon} alt='search icon' />
    </Container>
  )
}

export default SearchElement

const Container = styled.div`
  height: 44px;
  width: 56px;
  border: 2px solid ${({ theme }) => theme.colors?.border_white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.hover_white};
    border: 2px solid ${({ theme }) => theme.colors?.button_black};
  }
`
