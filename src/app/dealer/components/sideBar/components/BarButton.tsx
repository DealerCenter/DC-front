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
      <StyledButton active={active.toString()}>
        <IconBox>
          <Image src={icon} alt='icon' width={width} height={height} />
        </IconBox>
        {text}
      </StyledButton>
    </Container>
  )
}

export default BarButton

const Container = styled(Link)`
  position: relative;
  text-decoration: none;
`

type ButtonProps = { active: string }

const StyledButton = styled.div<ButtonProps>`
  ${({ active }) =>
    active === 'true'
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

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: left;
  height: 56px;
  width: 286px;
  font-size: 16px;
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
  margin: 0 10px 0 18px;
`
