import React from 'react'
import styled from 'styled-components'

type Props = { text: string; top: number; left: number }

const ErrorMessage = ({ text, top, left }: Props) => {
  return (
    <Container top={top} left={left}>
      {text}
    </Container>
  )
}

export default ErrorMessage

type ContainerProps = {
  top: number
  left: number
}

const Container = styled.p<ContainerProps>`
  position: absolute;
  color: ${({ theme }) => theme.colors?.red};
  font-size: ${({ theme }) => theme.fontSizes?.extraSmall};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  z-index: 10;
  margin: 0;
`
