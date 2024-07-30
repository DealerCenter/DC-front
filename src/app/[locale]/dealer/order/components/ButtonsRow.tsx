import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import AppButton from '@/common/components/appButton/AppButton'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import Image from 'next/image'
import AppSelect from './AppSelect'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {}

const ButtonsRow = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const options = [
    {
      value: 'evacuator',
      label: t('evacuator'),
    },
    {
      value: 'usa port',
      label: t('usa port'),
    },
    {
      value: 'container',
      label: t('container'),
    },
    {
      value: 'georgian port',
      label: t('georgian port'),
    },
  ]

  return (
    <>
      {isMobile ? (
        <AppSelect
          options={options}
          onChange={(value) => setSelectedOption(value)}
        />
      ) : (
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
      )}
    </>
  )
}

export default ButtonsRow

const ButtonsFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 721px;
`
