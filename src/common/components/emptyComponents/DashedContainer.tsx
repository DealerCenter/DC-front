import React from 'react'
import styled, { css } from 'styled-components'

type Props = { width?: number; height?: number; children: React.ReactNode }

const DashedContainer = ({ width, height, children }: Props) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  )
}

export default DashedContainer

type ContainerProps = {
  width?: number
  height?: number
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}

  //CSS for Dashed border

  --b: 2px; /* border thickness */
  --s: 40px; /* size of the dashes */
  --c1: ${({ theme }) => theme.colors?.white};
  --c2: ${({ theme }) => theme.colors?.main_gray_100};

  position: relative;

  :before {
    content: '';
    position: absolute;
    inset: 0;
    padding: var(--b);
    background: repeating-conic-gradient(var(--c1) 0 25%, var(--c2) 0 50%) 0 0 /
      var(--s) var(--s) round;
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
    border-radius: 12px;
  }
`
