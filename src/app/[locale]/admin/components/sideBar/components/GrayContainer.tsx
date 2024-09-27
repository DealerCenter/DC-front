import Image from 'next/image'
import styled, { css } from 'styled-components'

type Props = {
  text: string
  balance?: string
  height?: string
  icon: string
  onClick?: () => void
  isHovered: boolean
  disabled?: boolean
}

const GrayContainer = ({
  text,
  balance,
  height,
  icon,
  onClick,
  isHovered,
  disabled,
}: Props) => {
  return (
    <Container
      height={height}
      onClick={disabled ? () => {} : onClick}
      isHovered={isHovered}
    >
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
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
  border: 0.5px solid ${({ theme }) => theme.colors?.main_gray_10};
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

  @media  ${({ theme }) => theme.media?.md} {
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

  @media ${({ theme }) => theme.media?.sm} {
    width: 100%;
    height: 85px;
  }

  @media ${({ theme }) => theme.media?.notSm} {
    cursor: pointer;
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

  @media ${({ theme }) => theme.media?.md} {
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

  @media ${({ theme }) => theme.media?.md} {
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
