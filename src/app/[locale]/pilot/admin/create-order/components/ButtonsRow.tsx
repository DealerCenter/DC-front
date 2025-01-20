import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import Image from 'next/image'
import AppSelect from './AppSelect'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/pilot/theme'
import BasicButton from '@/common/components/appButton/BasicButton'

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
          <BasicButton onClick={() => {}} height={48}>
            {t('evacuator')}
          </BasicButton>
          <Image src={splitGrayLine} alt='line icon' />
          <BasicButton onClick={() => {}} height={48}>
            {t('usa port')}
          </BasicButton>
          <Image src={splitGrayLine} alt='line icon' />
          <BasicButton onClick={() => {}} height={48}>
            {t('container')}
          </BasicButton>
          <Image src={splitGrayLine} alt='line icon' />
          <BasicButton onClick={() => {}} height={48}>
            {t('georgian port')}
          </BasicButton>
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
