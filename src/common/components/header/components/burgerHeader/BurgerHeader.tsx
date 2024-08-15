import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import search from '@/assets/icons/search.svg'
import person from '@/assets/icons/person.svg'
import burger from '@/assets/icons/burger.svg'
import BurgerHeaderMenu from './components/BurgerHeaderMenu'

type Props = {}

const BurgerHeader = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <BurgerHeaderMenu
        isOpen={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
      />

      <Logo>DUX</Logo>
      <Frame>
        <Item>
          <Image width={20} height={20} src={search} alt='search icon' />
        </Item>
        <Item>
          <Image width={16} height={20} src={person} alt='person icon' />
        </Item>
        <Item onClick={() => setIsMenuOpen(true)}>
          <Image width={18} height={13.5} src={burger} alt='burger icon' />
        </Item>
        {/* ამაზე აღარ ვიწვალე, რომ გავარკვევთ მერე დავამთავრებ  */}
      </Frame>
    </Container>
  )
}

export default BurgerHeader

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  background-color: ${({ theme }) => theme.colors?.button_black};
  min-width: 350px;
  border-radius: 16px;
  min-height: 52px;
  width: 90%;
`

const Frame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 6px 0;
  gap: 6px;
`

const Logo = styled.h2`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  padding: 12px 8px 12px 8px;
  margin: 0;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: 12px;

  cursor: pointer;
`
