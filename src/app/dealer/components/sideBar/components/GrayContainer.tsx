import React from 'react'
import styled, { css } from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

type Props = {
  text: string
  balance?: string
  height?: string
  icon: string
  onClick?: () => void
  isHovered: boolean
}

const GrayContainer = ({
  text,
  balance,
  height,
  icon,
  onClick,
  isHovered,
}: Props) => {
  const isTablet = useMediaQuery({
    query: '(max-width: 1440px) and (min-width: 500px)',
  })

  return (
    <Container height={height} onClick={onClick} isHovered={isHovered}>
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <Frame>
        <Text isHovered={isHovered}>{text}</Text>
        {balance && <Balance isHovered={isHovered}>{balance}</Balance>}
      </Frame>
    </Container>
  )
}

export default GrayContainer

type ContainerProps = { height?: string; isHovered: boolean }

type IsHoveredProps = { isHovered: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: start;
  /* justify-content: flex-start; */
  background-color: rgba(32, 32, 32, 0.04);
  border: 0.5px solid rgba(32, 32, 32, 0.1);
  border-radius: 16px;
  gap: 19px;
  padding: 24px 16px 24px 16px;
  width: 100%;

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : css`
          height: 101px;
        `}

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
        ? css`
            transition: width 500ms ease-in-out;
          `
        : css`
            transition: width 500ms ease-in-out;
            width: 64px;
          `}
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 85px;
  }
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Text = styled.p<IsHoveredProps>`
  margin: 0;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
        ? css`
            transition: all 300ms ease-in-out 300ms;
            opacity: 1;
            width: unset;
          `
        : css`
            opacity: 0;
            width: 0;
          `};
  }
`
const Balance = styled.p<IsHoveredProps>`
  margin: 0;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 1440px) and (min-width: 500px) {
    ${({ isHovered }) =>
      isHovered
        ? css`
            transition: all 300ms ease-in-out 300ms;
            opacity: 1;
            width: unset;
          `
        : css`
            opacity: 0;
            width: 0;
          `};
  }
`

const IconBox = styled.div`
  margin-left: 3px;
`
