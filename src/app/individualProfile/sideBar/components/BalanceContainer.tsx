import React from 'react'
import styled from 'styled-components'
import wallet from '@/assets/icons/wallet.svg'
import Image from 'next/image'

type Props = { text: string; balance: string }

const BalanceContainer = ({ text, balance }: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={wallet} alt='wallet icon' />
      </IconBox>
      <Frame>
        <Text>{text}</Text>
        <Balance>{balance}</Balance>
      </Frame>
    </Container>
  )
}

export default BalanceContainer

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(32, 32, 32, 0.04);
  border: 0.5px solid rgba(32, 32, 32, 0.1);
  width: 286px;
  height: 101px;
  border-radius: 16px;
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 64px;
`

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`
const Balance = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`
const IconBox = styled.div`
  position: absolute;
  top: 36.5px;
  left: 19px;
`
