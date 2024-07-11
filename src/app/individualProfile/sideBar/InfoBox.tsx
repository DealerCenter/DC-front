import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import notificationBell from '@/assets/icons/notificatonBell.svg'
import notificationDot from '@/assets/icons/notificationDot.svg'

type Props = { refreshDate: string; name: string; notificationCount: number }

const InfoBox = ({ refreshDate, name, notificationCount }: Props) => {
  return (
    <Container>
      <Frame>
        <TextBox>
          <Text>gamrjoba,</Text>
          <TextName>{name}</TextName>
        </TextBox>
        <DateText>{refreshDate}</DateText>
      </Frame>
      <IconBox>
        <BellBox>
          <Image src={notificationBell} alt='notification bell icon' />
          <DotBox>
            <Image src={notificationDot} alt='notification Dot icon' />
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
  position: relative;
  display: flex;
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
const IconBox = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
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
`
const DotNumber = styled.span`
  position: absolute;
  right: 3.3px;
  top: 2.2px;
  font-size: 10px;
  font-weight: 700;
  color: white;
`
