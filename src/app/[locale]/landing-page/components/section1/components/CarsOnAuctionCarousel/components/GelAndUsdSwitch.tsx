import React, { useState } from 'react'
import styled, { css } from 'styled-components'

type Props = {}

const GelAndUsdSwitch = (props: Props) => {
  const [activeOption, setActiveOption] = useState<'gel' | 'usd'>('gel')

  return (
    <Container>
      <Box
        isActive={activeOption === 'gel'}
        onClick={() => setActiveOption('gel')}
      >
        ₾
      </Box>
      <Line />
      <Box
        isActive={activeOption === 'usd'}
        onClick={() => setActiveOption('usd')}
      >
        $
      </Box>
    </Container>
  )
}

export default GelAndUsdSwitch

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 6px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
`
const Line = styled.div`
  width: 1px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
`

type BoxProps = { isActive: boolean }

const Box = styled.div<BoxProps>`
  width: 42px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_100};
          color: ${({ theme }) => theme.colors?.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.white};
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `}

  cursor: pointer;
`
