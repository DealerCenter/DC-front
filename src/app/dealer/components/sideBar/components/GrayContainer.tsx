import React from 'react'
import styled, { css } from 'styled-components'
import wallet from '@/assets/icons/wallet.svg'
import Image from 'next/image'

type Props = {
  text: string
  balance?: string
  height?: string
  icon: string
  onClick?: () => void
}

const GrayContainer = ({ text, balance, height, icon, onClick }: Props) => {
  return (
    <Container height={height} onClick={onClick}>
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <Frame>
        <Text>{text}</Text>
        {balance && <Balance>{balance}</Balance>}
      </Frame>
    </Container>
  )
}

export default GrayContainer

type ContainerProps = { height?: string }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(32, 32, 32, 0.04);
  border: 0.5px solid rgba(32, 32, 32, 0.1);

  border-radius: 16px;
  gap: 19px;
  padding: 24px 16px 24px 16px;

  ${({ height }) =>
    height
      ? css`
          width: 286px;
          height: ${height};
        `
      : css`
          width: 286px;
          height: 101px;
        `}

  @media (max-width: 500px) {
    width: 326px;
    height: 85px;
  }
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  margin-left: 3px;
`
