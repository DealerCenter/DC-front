import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  labels:
    | [string, string, string, string]
    | [string, string, string, string, string]

  height?: number
  paddingRight?: number
}

const LabelsContainer = ({ labels, height, paddingRight }: Props) => {
  const is4Labels = labels.length === 4

  return (
    <Container
      height={height}
      is4Labels={is4Labels}
      paddingRight={paddingRight}
    >
      {labels.map((label, i) => (
        <Label key={i}>{label}</Label>
      ))}
    </Container>
  )
}

export default LabelsContainer

type ContainerProps = {
  height?: number
  is4Labels: boolean
  paddingRight?: number
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors?.main_gray_100};
  border-radius: 16px 16px 0px 0px;

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 75px;
        `}

  ${({ is4Labels }) =>
    is4Labels
      ? css`
          padding: 16px 16px 16px 32px;
        `
      : css`
          padding: 16px 50px;
        `}

  ${({ paddingRight }) =>
    paddingRight &&
    css`
      padding-right: ${paddingRight}px;
    `}
`
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: ${({ theme }) => theme.colors?.white};
  white-space: nowrap;
  text-wrap: auto;
`
