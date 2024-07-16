import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'

type Props = {
  icon: string
  text: string
  active: boolean
  width: number
  height: number
  href: string
}

const BarButton = ({ text, active, icon, width, height, href }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return (
    <StyledLink href={href}>
      <Container active={active} isMobile={isMobile}>
        <IconBox isMobile={isMobile}>
          <Image src={icon} alt='icon' width={width} height={height} />
        </IconBox>
        {!isMobile && text}
      </Container>
    </StyledLink>
  )
}

export default BarButton

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
`

type ButtonProps = { active: boolean; isMobile: boolean }

const Container = styled.div<ButtonProps>`
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

  ${({ isMobile }) =>
    isMobile
      ? css`
          height: 52px;
          width: 52px;
          border-radius: 18px;
          justify-content: center;
        `
      : css`
          height: 56px;
          width: 286px;
          border-radius: 12px;
          justify-content: start;
        `}

     
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  border: none;
`

type IconBoxProps = { isMobile: boolean }

const IconBox = styled.div<IconBoxProps>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isMobile }) =>
    isMobile
      ? css`
          margin: 0;
        `
      : css`
          margin: 0 10px 0 18px;
        `}
`
