'use client'
import React from 'react'
import styled from 'styled-components'
import search from '@/assets/icons/search.svg'
import person from '@/assets/icons/person.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import arrowDownIcon from '@/assets/icons/arrow/arrowDownWhite.svg'
import SearchElement from './components/SearchElement'

type Props = {}

const FullHeader = (props: Props) => {
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      <HeaderBox>
        <Logo>DUX</Logo>
        <Frame>
          <Title2>
            <Label>{t('search for vehicle')}</Label>
          </Title2>
          <Title2>
            <Label>{t('our services')}</Label>
            <Icon>
              <Image src={arrowDownIcon} alt='icon' />
            </Icon>
          </Title2>
          <Title2>{t('about us')}</Title2>
          <Title2>{t('contact')}</Title2>
        </Frame>
        <Menu>
          <SearchElement onClick={() => {}} />
          <Item onClick={() => router.push('/auth')}>
            <Image width={20} height={20} src={person} alt='person icon' />
          </Item>
          <Item>
            <Ge>GE</Ge>
          </Item>
        </Menu>
      </HeaderBox>
    </Container>
  )
}

export default FullHeader

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

  @media ${({ theme }) => theme.media?.lg} {
    gap: ${({ theme }) => theme.spacing?.lg};
  }
`

const Title2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors?.white};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  line-height: 19.2px;
  font-weight: 400;
  padding: ${({ theme }) => theme.spacing?.md};
  border-radius: ${({ theme }) => theme.radius?.lg};
  height: 56px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.hover_white};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors?.active_black};
  }
`

const Logo = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: bold;
  padding: 12px 16px 12px 16px;
  margin: 0;
`

const Label = styled.div`
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding-left: ${({ theme }) => theme.spacing?.sm};
`

const Item = styled.div`
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
const Ge = styled.label`
  font-size: 16px;
  font-weight: 500;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
