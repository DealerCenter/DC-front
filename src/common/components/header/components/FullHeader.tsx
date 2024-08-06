'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useRouter, usePathname } from '@/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

import search from '@/assets/icons/search.svg'
import AppDropdown from '../../appDropdown/AppDropdown'
import downIcon from '@/assets/icons/arrowDownWhite.svg'
import { css } from 'styled-components'
import LangChangeButton from './LangChangeButton'
import LoginButton from './LoginButton'

type Props = {}

const FullHeader = (props: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const handleDropdownOpen = () => {
    setIsOpenDropdown((is) => !is)
  }
  const handleDropdownClose = () => {
    setIsOpenDropdown(false)
  }

  const t = useTranslations('')

  const servicesItems = [
    { label: `${t('status check')}` },
    { label: `${t('document check')}` },
    { label: `${t('history check')}` },
    { label: `${t('transportation calculator')}` },
  ]

  return (
    <Container>
      <Logo>DUX</Logo>
      <Frame>
        <Title2>{t('search for vehicle')}</Title2>
        <Title2>
          {t('our services')}
          <AppDropdown
            items={servicesItems}
            left={-200}
            top={55}
            handleToggle={handleDropdownOpen}
            handleClose={handleDropdownClose}
          >
            <Icon isOpen={isOpenDropdown}>
              <Image src={downIcon} alt='down arrow icon' />
            </Icon>
          </AppDropdown>
        </Title2>
        <Title2>{t('about us')}</Title2>
        <Title2>{t('contact')}</Title2>
      </Frame>
      <Menu>
        <Item>
          <Image width={20} height={20} src={search} alt='search icon' />
        </Item>
        <LoginButton />
        <LangChangeButton left={-3} top={66} />
      </Menu>
    </Container>
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

  &:hover {
    background-color: ${({ theme }) => theme.colors?.white_10};
  }

  &:active {
    color: ${({ theme }) => theme.colors?.button_black};
  }
`

const Logo = styled.h2`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 40px;
  font-weight: bold;
  padding: 12px 16px 12px 16px;
  margin: 0;

  cursor: default;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-left: 16px;
`

const Item = styled.div`
  height: 44px;
  width: 56px;
  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
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
