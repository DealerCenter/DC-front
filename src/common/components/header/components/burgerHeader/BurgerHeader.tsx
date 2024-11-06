import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

import BurgerHeaderMenu from './components/BurgerHeaderMenu'
import Logo from '../Logo'
import burger from '@/assets/icons/burger.svg'
import LoginButton from '../LoginButton'
import SearchButton from './components/SearchButton'

type Props = {
  mainItems: { label: string; onClick: () => void }[]
  servicesItems: { label: string; onClick: () => void }[]
}

const BurgerHeader = ({ mainItems, servicesItems }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <BurgerHeaderMenu
        isOpen={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
        mainItems={mainItems}
        servicesItems={servicesItems}
      />
      <Logo />
      <Frame>
        <SearchButton onClick={() => {}} />
        <LoginButton />
        <Item onClick={() => setIsMenuOpen(true)}>
          <Image width={18} src={burger} alt='burger icon' />
        </Item>
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

const Item = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: 12px;

  cursor: pointer;
`
