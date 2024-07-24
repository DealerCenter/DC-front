'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useRouter, usePathname } from '@/navigation'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'

import search from '@/assets/icons/search.svg'
import person from '@/assets/icons/person.svg'

type Props = {}

const FullHeader = (props: Props) => {
  const t = useTranslations('')
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  return (
    <Container>
      <HeaderBox>
        <Logo>DUX</Logo>
        <Frame>
          <Title2>{t('search for vehicle')}</Title2>
          <Title2>{t('our services')}</Title2>
          <Title2>{t('about us')}</Title2>
          <Title2>{t('contact')}</Title2>
        </Frame>
        <Menu>
          <Item>
            <Image width={20} height={20} src={search} alt='search icon' />
          </Item>
          <Item onClick={() => router.push('/auth')}>
            <Image width={20} height={20} src={person} alt='person icon' />
          </Item>
          <Item onClick={() => setIsLangDropdownOpen((prev) => !prev)}>
            <Label>{locale.toUpperCase()}</Label>
            {isLangDropdownOpen && (
              <LangDropdown>
                <Link href={pathname} locale='ge'>
                  <Label>Ge</Label>
                </Link>
                <Link href={pathname} locale='en'>
                  <Label>En</Label>
                </Link>
                <Link href={pathname} locale='ru'>
                  <Label>Ru</Label>
                </Link>
              </LangDropdown>
            )}
          </Item>
        </Menu>
      </HeaderBox>
    </Container>
  )
}

export default FullHeader

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.white_10};
  border-radius: ${({ theme }) => theme.radius?.lg};
`

const IconBox = styled.div`
  position: absolute;
  left: 16px;
  top: 12px;
  z-index: 1000;
`

const SearchBox = styled.input`
  box-sizing: border-box;
  height: 44px;
  width: 200px;
  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 10px 4px 10px 45px;
`

const SearchBoxContainer = styled.div`
  position: relative;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 16px 0px;
`

const HeaderBox = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  border-radius: 28px;
  width: 100%;
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
`

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`
const LangDropdown = styled.div`
  width: 100px;
  background-color: ${({ theme }) => theme.colors?.main_gray_100};
  position: absolute;
  bottom: -100px;
  display: flex;
  color: ${({ theme }) => theme.colors?.white};
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius?.lg};
  gap: ${({ theme }) => theme.spacing?.md};
`
