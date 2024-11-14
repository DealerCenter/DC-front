import React from 'react'
import styled from 'styled-components'

type Props = { text: string; top?: number; left: number; bottom?: number }

const ErrorMessage = ({ text, top, left, bottom }: Props) => {
  return (
    <Container top={top} left={left} bottom={bottom}>
      {text}
    </Container>
  )
}

export default ErrorMessage

type ContainerProps = {
  top?: number
  left: number
  bottom?: number
}

const Container = styled.p<ContainerProps>`
  position: absolute;
  color: ${({ theme }) => theme.colors?.red};
  font-size: ${({ theme }) => theme.fontSizes?.extraSmall};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  bottom: ${({ bottom }) => `${bottom}px`};
  z-index: 10;
  margin: 0;
`
