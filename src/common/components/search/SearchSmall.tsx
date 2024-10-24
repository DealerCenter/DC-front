import Image from 'next/image'
import styled from 'styled-components'

import search from '@/assets/icons/searchForButton.svg'

type Props = {
  placeholder?: string
  searchQuery: string
  setSearchQuery: (arg: string) => void
}

const SearchSmall = ({ placeholder, searchQuery, setSearchQuery }: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={search} alt='search icon' />
      </IconBox>

      <StyledInput
        type='text'
        placeholder={placeholder ? placeholder : ''}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Container>
  )
}

export default SearchSmall

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 32px;
  border-radius: 12px;

  gap: 8px;
  padding: 0 5px;
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};

  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  user-select: none;
  cursor: pointer;
`
const StyledInput = styled.input`
  box-sizing: border-box;

  width: 100%;

  height: 28px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors?.black};
  border: unset;

  &:focus {
    outline: none;
  }
`

const IconBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  height: 28px;
  width: 28px;
`
