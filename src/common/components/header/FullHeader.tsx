'use client'
import React from 'react'
import styled from 'styled-components'
import search from '@/assets/icons/search.svg'
import person from '@/assets/icons/person.svg'
import Image from 'next/image'

type Props = {}

const FullHeader = (props: Props) => {
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
          <Item>
            <Image width={20} height={20} src={search} alt='search icon' />
          </Item>
          <Item>
            <Image width={20} height={20} src={person} alt='person icon' />
          </Item>
          <Item>
            <Label>GE</Label>
          </Item>
        </Menu>
      </HeaderBox>
    </Container>
  )
}

export default FullHeader

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px 16px 0px;
`

const HeaderBox = styled.div`
  /* background-color: red; */

  @media (min-width: 500px) {
    box-sizing: border-box;
    border-radius: 28px;
    width: 1200px;
    height: 74px;
    padding: 8px 24px 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background-color: rgba(18, 18, 20, 1);
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Title2 = styled.div`
  color: white;
  font-size: 16px;
  line-height: 19.2px;
  font-weight: 400;
  padding: 16px;

  @media (min-width: 500px) {
    &:hover {
      color: blue;
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
`

const Item = styled.div`
  height: 44px;
  width: 56px;
  border: 2px solid gray;
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
