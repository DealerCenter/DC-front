import React from 'react'
import Box from '../../components/common/Box'
import HeaderH5Bold from '@/common/components/textComponents/HeaderH5Bold'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import LabelValuePair from './LabelValuePair'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import Image from 'next/image'

import checkedIcon from '@/assets/icons/checkedGreen.svg'

type Props = {}

const DealerDataBox = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <Box width={isMobile ? 358 : isTablet ? 353 : 385}>
      <HeaderH5Bold text={t('dealer data')} />
      <Line />
      <Frame>
        <LabelValuePair label={t('full name')} value='Ani Kviciani' />
        <LabelValuePair label={t('mobile number')} value='555 555 555' />
        <LabelValuePair label={t('personal number')} value='555 555 555' />
        <LabelValuePair label={t('date of joining')} value='555 555 555' />
        <LabelFrame>
          <Label>{t('authentication')}</Label>
          <Icon>
            <Image src={checkedIcon} alt='checked icon' width={20} />
          </Icon>
        </LabelFrame>
      </Frame>
    </Box>
  )
}

export default DealerDataBox

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`

const LabelFrame = styled.div`
  display: flex;
  align-items: center;
  width: 160px;
  height: 40px;
  gap: ${({ theme }) => theme.spacing?.lg};
`

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_56};
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
