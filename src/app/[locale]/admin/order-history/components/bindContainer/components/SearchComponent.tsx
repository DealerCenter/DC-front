import Image from 'next/image'
import styled from 'styled-components'

import closeX from '@/assets/icons/closeX.svg'
import searchIcon from '@/assets/icons/SearchIconBlack.svg'

type Props = {
  searchQuery: string
  setSearchQuery: (arg: string) => void
  placeholder?: string
}

const SearchComponent = ({
  searchQuery,
  setSearchQuery,
  placeholder,
}: Props) => {
  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <Container onClick={() => {}}>
      <IconBox onClick={() => {}}>
        <Image width={18} height={18} src={searchIcon} alt='search icon' />
      </IconBox>

      <StyledInput
        type='text'
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CloseIconBox onClick={handleClear}>
        <Image src={closeX} alt='search icon' width={13} />
      </CloseIconBox>
    </Container>
  )
}

export default SearchComponent

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const StyledInput = styled.input`
  box-sizing: border-box;

  width: 323px;
  height: 56px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};

  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.black};
  padding-left: 45px;
  padding-right: 50px;
  background-color: ${({ theme }) => theme.colors?.white};

  &:focus {
    outline: none;
  }
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 7px;

  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radius?.lg};
`

const CloseIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 10px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  background-color: ${({ theme }) => theme.colors?.main_gray_04};

  &:active {
    background-color: ${({ theme }) => theme.colors?.main_gray_10};
  }

  cursor: pointer;
`
