import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import ImagesComponent from './ImagesComponent'
import AppButton from '@/common/components/appButton/AppButton'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import { useTranslations } from 'next-intl'

type Props = {}

const CarImagesAndDetailsBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <ImagesComponent />
      <ButtonsFrame>
        <AppButton
          text={t('evacuator')}
          type='filled'
          onClick={() => {}}
          width={150}
        />
        <Image src={splitGrayLine} alt='line icon' />
        <AppButton
          text={t('usa port')}
          type='filled'
          onClick={() => {}}
          width={135}
        />
        <Image src={splitGrayLine} alt='line icon' />
        <AppButton
          text={t('container')}
          type='filled'
          onClick={() => {}}
          width={150}
        />
        <Image src={splitGrayLine} alt='line icon' />
        <AppButton
          text={t('georgian port')}
          type='filled'
          onClick={() => {}}
          width={220}
        />
      </ButtonsFrame>
    </Container>
  )
}

export default CarImagesAndDetailsBox

const ButtonsFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 721px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 22px;

  border: 1px solid red;
`
