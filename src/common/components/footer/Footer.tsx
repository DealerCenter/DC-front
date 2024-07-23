import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import twitterIcon from '@/assets/icons/footer/twitter.svg'
import linkedinIcon from '@/assets/icons/footer/linkedin.svg'
import facebookIcon from '@/assets/icons/footer/facebook.svg'
import { useTranslations } from 'next-intl'

type Props = {}

const Footer = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <TopFrame>
        <LeftBox>
          <Logo>DUX</Logo>
          <LeftBoxText>{t('shipping company text')}</LeftBoxText>
        </LeftBox>
        <RightBox>
          <Item>
            <Label>{t('search for vehicle')}</Label>
          </Item>
          <Item>
            <Label>{t('our services')}</Label>
          </Item>
          <Item>
            <Label>{t('about us')}</Label>
          </Item>
          <Item>
            <Label>{t('contact')}</Label>
          </Item>
        </RightBox>
      </TopFrame>
      <Line />
      <BottomFrame>
        <Text>{t('rights reserved')}</Text>
        <IconBox>
          <Image src={twitterIcon} alt='twitter icon' />
          <Image src={linkedinIcon} alt='linkedin icon' />
          <Image src={facebookIcon} alt='facebook icon' />
        </IconBox>
      </BottomFrame>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.footer_black};
  height: 377px;
  padding: 64px 120px 62px 120px;
  justify-content: space-between;

  @media ${({ theme }) => theme.media?.md} {
    padding: 64px;
  }
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 112px;
`
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 112px;
`

const Logo = styled.h2`
  color: ${({ theme }) => theme.colors?.white};
  font-size: 28px;
  font-weight: 700;
  padding: 12px 0;
  margin: 0;
`

const LeftBoxText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors?.soft_white};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 400;
  width: 300px;
`

const RightBox = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 32px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 0 16px;
  }
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.soft_white};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 400;
`

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.white};
`

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 24px;
`

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors?.white};
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 400;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`
