import React from 'react'
import styled, { css } from 'styled-components'

type Props = { label: string; value: string }

const LabelValueBox = ({ label, value }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </Container>
  )
}

export default LabelValueBox

type ContainerProps = { width?: number }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 16px 24px;

  width: 315px;
  height: 125px;

  @media ${({ theme }) => theme.media?.md} {
    width: 286px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 8px 16px;
    width: 358px;
    height: 80px;
  }
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const Value = styled.label`
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`
