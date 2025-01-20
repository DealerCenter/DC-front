import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

type Props = { headerText: string; text: string; icon: string }

const InfoBox = ({ headerText, text, icon }: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <TextBox>
        <Header>{headerText}</Header>
        <Text>{text}</Text>
      </TextBox>
    </Container>
  )
}

export default InfoBox

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 30px;

  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 20px;
  padding: 40px 30px;

  width: 370px;
  height: 332px;

  box-shadow: 35px 30px 48px 0px rgba(32, 32, 32, 0.05);

  border: 1px solid rgba(229, 244, 242, 1);

  @media ${({ theme }) => theme.media?.md} {
    width: 309px;
    height: 382px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    height: 289px;
    padding: 24px 16px;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 24px;
  justify-content: center;
  align-items: center;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.h2`
  margin: 0;
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  color: ${({ theme }) => theme.colors?.onboarding_background_grey};

  text-align: center;
`
const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};

  color: ${({ theme }) => theme.colors?.onboarding_background_grey};

  text-align: center;
`
