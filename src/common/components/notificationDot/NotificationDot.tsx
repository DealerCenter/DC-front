import React from 'react'
import styled, { css } from 'styled-components'

type Props = { number: number }

const NotificationDot = ({ number }: Props) => {
  const digits = Math.abs(number).toString().length

  return (
    <Container digits={digits}>
      <DotNumber>{number}</DotNumber>
    </Container>
  )
}

export default NotificationDot

type ContainerProps = { digits: number }

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  top: 0px;

  background-color: ${({ theme }) => theme.colors?.red};
  border-radius: 20px;

  height: 15px;

  ${({ digits }) =>
    digits === 1
      ? css`
          width: 15px;
        `
      : digits === 2
        ? css`
            width: 20px;
          `
        : digits === 3
          ? css`
              width: 25px;
            `
          : css`
              width: 25px;
            `}
`

const DotNumber = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.white};
`
