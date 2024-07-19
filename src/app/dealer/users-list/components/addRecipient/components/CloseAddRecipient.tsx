import React from 'react'
import styled from 'styled-components'
import ChooseButton from './ChooseButton'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import closeIcon from '@/assets/icons/closeX.svg'

type Props = {}

const CloseAddRecipient = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Icon onClick={() => {}}>
        <Image src={closeIcon} alt='close icon' width={12} height={12} />
      </Icon>
      <FrameTop>
        <H3Bold>{t('delete recipient')}</H3Bold>
        <Label>{t('delete data warning')}</Label>
      </FrameTop>
      <ButtonsFrame>
        <ChooseButton text={t('cancel')} isActive={true} onClick={() => {}} />
        <ChooseButton text={t('delete')} isActive={true} onClick={() => {}} />
      </ButtonsFrame>
    </Container>
  )
}

export default CloseAddRecipient

const Icon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
`

const H3Bold = styled.h3`
  font-size: 19px;
  font-weight: 700;
  margin: 0;
`

const FrameTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ButtonsFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 369px;
  height: 211px;
  border-radius: 24px;
  padding: 32px;
  gap: 24px;

  background-color: white;
  border: 1px solid rgba(32, 32, 32, 0.1);

  @media (max-width: 500px) {
    padding: 32px 16px;
  }
`
