'use client'
import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import search from '@/assets/icons/search.svg'
import person from '@/assets/icons/person.svg'
import closeIcon from '@/assets/icons/c'

type Props = {}

const FullHeader = (props: Props) => {
  const router = useRouter()

  return (
    <Container>
      <HeaderBox>
        <Logo>DUX</Logo>
        <Frame>
          <Title2>ავტომობილის ძიება</Title2>
          <Title2>ჩვენი სერვისები</Title2>
          <Title2>ჩვენს შესახებ</Title2>
          <Title2>კონტაქტი</Title2>
        </Frame>
        <Menu>
          {/* <Item>
            <Image width={20} height={20} src={search} alt='search icon' />
          </Item>
          <Item onClick={() => router.push('/auth')}>
            <Image width={20} height={20} src={person} alt='person icon' />
          </Item>
          <Item>
            <Label>GE</Label>
          </Item> */}
          <SearchBoxContainer>
            <IconBox>
              <Image width={20} height={20} src={search} alt='search icon' />
            </IconBox>
            <CloseButton>
              <Image width={14} height={14} src={search} alt='search icon' />
            </CloseButton>
            <SearchBox type='text' placeholder='Vin კოდი'></SearchBox>
          </SearchBoxContainer>
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
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
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
  border: 2px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
  color: white;
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
  @media (min-width: 500px) {
    box-sizing: border-box;
    border-radius: 28px;
    width: 1200px;
    height: 74px;
    padding: 8px 24px 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(18, 18, 20, 1);
  }
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
  color: white;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 400;
  padding: 16px;
  max-height: 56px;
  border-radius: 12px;

  @media (min-width: 500px) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  &:active {
    color: black;
  }
`

const Logo = styled.h2`
  color: white;
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
  border: 2px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`
