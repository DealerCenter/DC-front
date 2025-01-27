// @ts-nocheck
'use client'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import { Link } from '@/navigation'
import theme from '@/app/[locale]/theme'

type Props = {
  icon: string
  text: string
  active: boolean
  width: number
  height: number
  href: string
  isHovered: boolean
  isFlexibleOnDesktop?: boolean
}

const BarButton = ({
  text,
  active,
  icon,
  width,
  height,
  href,
  isHovered,
  isFlexibleOnDesktop,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <StyledLink href={href}>
      <Container
        active={active}
        isHovered={isHovered}
        isFlexibleOnDesktop={isFlexibleOnDesktop}
      >
        <IconBox>
          <Image src={icon} alt='icon' width={width} height={height} />
        </IconBox>
        {!isMobile && (
          <Label
            isHovered={isHovered}
            isFlexibleOnDesktop={isFlexibleOnDesktop}
          >
            {text}
          </Label>
        )}
      </Container>
    </StyledLink>
  )
}

export default BarButton

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  border-radius: 12px;
`

type ContainerProps = {
  active: boolean
  isHovered: boolean
  isFlexibleOnDesktop?: boolean
}

const Container = styled.div<ContainerProps>`
  flex-direction: row;
  display: flex;
  align-items: center;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  border: none;
  width: 64px;

  ${({ active, theme }) =>
    active
      ? css`
          background-color: ${theme.colors?.main_gray_100};
          color: ${theme.colors?.white};
        `
      : css`
          background-color: ${theme.colors?.white};
          color: ${theme.colors?.main_gray_100};

          &:hover {
            background-color: ${theme.colors?.main_gray_04};
          }
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
    height: 52px;
    width: 52px;
    border-radius: 18px;
    justify-content: center;
  }

  height: 56px;
  width: 286px;
  border-radius: 12px;
  justify-content: start;
`

const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.media?.sm} {
    margin: 0;
  }
  margin: 0 10px 0 18px;
`

type LabelProps = { isHovered: boolean; isFlexibleOnDesktop?: boolean }

const Label = styled.label<LabelProps>`
  opacity: 1;

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

  cursor: pointer;
`
