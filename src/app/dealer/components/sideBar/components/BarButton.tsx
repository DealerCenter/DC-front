import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
  return (
    <Container href={href}>
      <StyledButton active={active}>
        {text}
        <IconBox>
          <Image src={icon} alt='icon' width={width} height={height} />
        </IconBox>
      </StyledButton>
    </Container>
  )
}

export default BarButton

const Container = styled(Link)`
  position: relative;
`

type ButtonProps = { active: boolean }

const StyledButton = styled.button<ButtonProps>`
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

  text-align: left;
  padding-left: 48px;
  height: 56px;
  width: 286px;
  font-size: 16px;
  line-height: 33.6px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
`
const IconBox = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 17px;
  left: 17px;
`
