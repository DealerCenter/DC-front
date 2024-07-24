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
}

const BarButton = ({
  text,
  active,
  icon,
  width,
  height,
  href,
  isHovered,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <StyledLink href={href}>
      <Container active={active} isHovered={isHovered}>
        <IconBox>
          <Image src={icon} alt='icon' width={width} height={height} />
        </IconBox>
        {!isMobile && <Label isHovered={isHovered}>{text}</Label>}
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

type ButtonProps = { active: boolean; isHovered: boolean }

type IsHoveredProps = { isHovered: boolean }

const Container = styled.div<ButtonProps>`
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
          background-color: ${theme.colors?.active_black};
          color: ${theme.colors?.white};
        `
      : css`
          background-color: ${theme.colors?.white};
          color: ${theme.colors?.active_black};

          &:hover {
            background-color: ${theme.colors?.mist_gray};
          }
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

const Label = styled.label<IsHoveredProps>`
  opacity: 1;

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
          `}
  }
`
