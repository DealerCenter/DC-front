import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

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
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

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

  ${({ active }) =>
    active
      ? css`
          background-color: rgba(32, 32, 32, 1);
          color: white;
        `
      : css`
          background-color: white;
          color: rgba(32, 32, 32, 1);

          &:hover {
            background-color: rgba(32, 32, 32, 0.04);
          }
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

  @media (max-width: 500px) {
    margin: 0;
  }
  margin: 0 10px 0 18px;
`

const Label = styled.label<IsHoveredProps>`
  opacity: 1;

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
          `}
  }
`
