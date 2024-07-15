import Image from 'next/image'
import React, { useTransition } from 'react'
import styled from 'styled-components'
import notificationBell from '@/assets/icons/notificatonBell.svg'
import notificationDot from '@/assets/icons/notificationDot.svg'
import { useTranslations } from 'next-intl'

type Props = { refreshDate: string; name: string; notificationCount: number }

const InfoBox = ({ refreshDate, name, notificationCount }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Frame>
        <TextBox>
          <Text>{t('hello')}</Text>
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

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 286px;
  height: 135px;
  padding: 16px;
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
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
