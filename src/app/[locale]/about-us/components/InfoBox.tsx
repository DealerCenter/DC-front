import React from 'react'
import styled from 'styled-components'

type Props = { header: string; text: string; blueText: string }

const InfoBox = ({ header, text, blueText }: Props) => {
  return (
    <Container>
      <Frame>
        <Header>{header}</Header>
        <Text>{text}</Text>
      </Frame>
      <BlueText>{blueText}</BlueText>
    </Container>
  )
}

export default InfoBox

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  align-items: center;
  text-align: center;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Header = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`

const Text = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};
`

const BlueText = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.link_blue};

  cursor: default;
`
