import React from 'react'
import styled from 'styled-components'
import { styleText } from 'util'

type Props = { header: string; text: string }

const InfoBox = ({ header, text }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Text>{text}</Text>
    </Container>
  )
}

export default InfoBox

const Container = styled.label`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  padding: ${({ theme }) => theme.spacing?.lg};
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  height: 150px;
  width: 384px;

  @media ${({ theme }) => theme.media?.md} {
    height: 175px;
    width: 304px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    height: unset;
    width: 343px;
  }
`

const Header = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};
`
