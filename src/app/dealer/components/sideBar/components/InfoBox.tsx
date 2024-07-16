import Image from 'next/image'
import React, { useTransition } from 'react'
import styled, { css } from 'styled-components'
import notificationBell from '@/assets/icons/notificatonBell.svg'
import notificationDot from '@/assets/icons/notificationDot.svg'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

type Props = { refreshDate: string; name: string; notificationCount: number }

const InfoBox = ({ refreshDate, name, notificationCount }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const t = useTranslations('')

  return (
    <Container isMobile={isMobile}>
      <Frame>
        <TextBox isMobile={isMobile}>
          <Text>{t('hello')}, &nbsp;</Text>
          <TextName>{name}</TextName>
        </TextBox>
        <DateText>{refreshDate}</DateText>
      </Frame>
      <IconBox>
        <BellBox>
          <Image src={notificationBell} alt='notification bell icon' />
          <DotBox>
            <DotBox1>
              <Image src={notificationDot} alt='notification Dot icon' />
            </DotBox1>
            <DotNumber>{notificationCount}</DotNumber>
          </DotBox>
        </BellBox>
      </IconBox>
    </Container>
  )
}

export default InfoBox

type ContainerProps = { isMobile: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  padding: 16px;

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 358px;
          height: 115px;
        `
      : css`
          width: 286px;
          height: 135px;
        `}
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

type TextBoxProps = { isMobile: boolean }

const TextBox = styled.div<TextBoxProps>`
  ${({ isMobile }) =>
    isMobile
      ? css`
          flex-direction: row;
        `
      : css`
          flex-direction: column;
        `}
  display: flex;
`

const Text = styled.p`
  margin: 0;
  font-size: 28px;
  font-weight: 400;
`
const TextName = styled.span`
  font-size: 28px;
  font-weight: 700;
`

const DateText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: rgba(32, 32, 32, 0.56);
`
const IconBox = styled.div``

const BellBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`
const DotBox = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;

  display: grid;
  place-items: center;
`
const DotBox1 = styled.div`
  display: flex;
`

const DotNumber = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 700;
  color: white;
`
