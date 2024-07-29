import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import AppButton from '@/common/components/appButton/AppButton'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import Image from 'next/image'

type Props = {}

const ButtonsRow = (props: Props) => {
  const t = useTranslations('')

  return (
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
  )
}

export default ButtonsRow

const ButtonsFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 721px;
`
