import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import lineIcon from '@/assets/icons/splitGrayLine.svg'
import { useTranslations } from 'next-intl'

type Props = {
  activeOption: 'status' | 'recipient' | 'dealer' | null
  setActiveOption: (arg1: 'status' | 'recipient' | 'dealer') => void
}

const OptionsBoxWithDealer = ({ activeOption, setActiveOption }: Props) => {
  const t = useTranslations('')

  return (
    <SettingsBox>
      <Setting
        isActive={'status' === activeOption}
        onClick={() => setActiveOption('status')}
      >
        <TextBold>{t('status')}</TextBold>
      </Setting>
      <Image src={lineIcon} alt='line icon' />
      <Setting
        isActive={'recipient' === activeOption}
        onClick={() => setActiveOption('recipient')}
      >
        <TextBold>{t('recipient')}</TextBold>
      </Setting>
      <Image src={lineIcon} alt='line icon' />
      <Setting
        isActive={'dealer' === activeOption}
        onClick={() => setActiveOption('dealer')}
      >
        <TextBold>{t('dealer')}</TextBold>
      </Setting>
    </SettingsBox>
  )
}

export default OptionsBoxWithDealer

const SettingsBox = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

type SettingProps = { isActive: boolean }

const Setting = styled.div<SettingProps>`
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_100};
          color: ${({ theme }) => theme.colors?.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.white};
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `}

  cursor: pointer;
`

const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  cursor: pointer;
`
