import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

type Props = {
  text: string
  balance?: string
  height?: string
  icon: string
  onClick?: () => void
  isHovered: boolean
  isCursorPointer?: boolean
  disabled?: boolean
  isFlexibleOnDesktop?: boolean
}

const GrayContainer = ({
  text,
  balance,
  height,
  icon,
  onClick,
  isHovered,
  isCursorPointer,
  disabled = false,
  isFlexibleOnDesktop,
}: Props) => {
  return (
    <Container
      height={height}
      onClick={disabled ? () => {} : onClick}
      isHovered={isHovered}
      isCursorPointer={isCursorPointer}
      isFlexibleOnDesktop={isFlexibleOnDesktop}
    >
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <Frame>
        <Text
          isHovered={isHovered}
          isCursorPointer={isCursorPointer}
          isFlexibleOnDesktop={isFlexibleOnDesktop}
        >
          {text}
        </Text>
        {balance && (
          <Balance
            isHovered={isHovered}
            isCursorPointer={isCursorPointer}
            isFlexibleOnDesktop={isFlexibleOnDesktop}
          >
            {balance}
          </Balance>
        )}
      </Frame>
    </Container>
  )
}

export default GrayContainer

type ContainerProps = {
  height?: string
  isHovered: boolean
  isCursorPointer?: boolean
  isFlexibleOnDesktop?: boolean
}

type TextProps = {
  isHovered: boolean
  isCursorPointer?: boolean
  isFlexibleOnDesktop?: boolean
}

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

  ${({ isCursorPointer }) =>
    isCursorPointer
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
        `}


        ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: width 500ms ease-in-out;
                `
              : css`
                  transition: width 500ms ease-in-out;
                  width: 64px;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: width 500ms ease-in-out;
                `
              : css`
                  transition: width 500ms ease-in-out;
                  width: 64px;
                `}
          }
        `}

 

  @media ${({ theme }) => theme.media?.sm} {
    width: 100%;
    height: 85px;
  }
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Text = styled.p<TextProps>`
  margin: 0;
  font-size: 16px;
  font-weight: 700;

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `}

  ${({ isCursorPointer }) =>
    isCursorPointer
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
        `}
`
const Balance = styled.p<TextProps>`
  margin: 0;
  font-size: 18px;
  font-weight: 400;

  ${({ isFlexibleOnDesktop, isHovered }) =>
    isFlexibleOnDesktop
      ? css`
          @media ${({ theme }) => theme.media?.notSm} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `
      : css`
          @media ${({ theme }) => theme.media?.md} {
            ${isHovered
              ? css`
                  transition: all 300ms ease-in-out 300ms;
                  opacity: 1;
                  width: unset;
                `
              : css`
                  opacity: 0;
                  width: 0;
                `}
          }
        `}

  ${({ isCursorPointer }) =>
    isCursorPointer
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: default;
        `}
`

const IconBox = styled.div`
  margin-left: 3px;
`
