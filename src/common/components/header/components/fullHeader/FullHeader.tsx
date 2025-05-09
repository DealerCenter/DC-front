'use client'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AppDropdown from '../../../appDropdown/AppDropdown'
import downIcon from '@/assets/icons/arrowDownWhite.svg'
import MenuButtons from './components/MenuButtons'
import Logo from '../Logo'

type Props = {
  mainItems: { label: string; onClick: () => void }[]
  servicesItems: { label: string; onClick: () => void }[]
}

const FullHeader = ({ mainItems, servicesItems }: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const t = useTranslations('')

  const handleDropdownOpen = () => {
    setIsOpenDropdown((is) => !is)
  }
  const handleDropdownClose = () => {
    setIsOpenDropdown(false)
  }

  return (
    <>
      <Container>
        <Logo />
        <Frame>
          <Title2 onClick={mainItems[0].onClick}>{mainItems[0].label}</Title2>
          <AppDropdown
            items={servicesItems}
            left={-50}
            top={70}
            handleToggle={handleDropdownOpen}
            handleClose={handleDropdownClose}
          >
            <Title2>
              {mainItems[1].label}
              <Icon isOpen={isOpenDropdown}>
                <Image src={downIcon} alt='down arrow icon' />
              </Icon>
            </Title2>
          </AppDropdown>
          <Title2 onClick={mainItems[2].onClick}>{mainItems[2].label}</Title2>
          <Title2 onClick={mainItems[3].onClick}>{mainItems[3].label}</Title2>
        </Frame>
        <MenuButtons />
      </Container>
    </>
  )
}

export default FullHeader

const Container = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  border-radius: 28px;
  width: 90%;
  height: 74px;
  padding: 8px 24px 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.button_black};
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Title2 = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors?.white};
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 400;
  padding: 16px;
  max-height: 56px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  gap: 10px;

  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.white_10};
  }

  &:active {
    color: ${({ theme }) => theme.colors?.button_black};
  }
`

type IconProps = { isOpen: boolean }

const Icon = styled.div<IconProps>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`
