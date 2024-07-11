import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import search from '@/assets/icons/search.svg'
import person from '@/assets/icons/person.svg'
import burger from '@/assets/icons/burger.svg'

type Props = {}

const BurgerHeader = (props: Props) => {
  return (
    <Container>
      <Logo>DUX</Logo>
      <Frame>
        <Item>
          <Image width={20} height={20} src={search} alt='search icon' />
        </Item>
        <Item>
          <Image width={16} height={20} src={person} alt='person icon' />
        </Item>
        <Item>
          <Image width={18} height={13.5} src={burger} alt='burger icon' />
        </Item>
        {/* ამაზე აღარ ვიწვალე, რომ გავარკვევთ მერე დავამთავრებ  */}
      </Frame>
    </Container>
  )
}

export default BurgerHeader

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 8px;
  background-color: rgba(18, 18, 20, 1);
  width: 355px;
  margin: 10px auto;
  border-radius: 16px;
  min-height: 52px;
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
  color: white;
  font-size: 23px;
  font-weight: bold;
  padding: 12px 8px 12px 8px;
  margin: 0;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid rgba(255, 255, 255, 0.24);
  border-radius: 12px;
`
