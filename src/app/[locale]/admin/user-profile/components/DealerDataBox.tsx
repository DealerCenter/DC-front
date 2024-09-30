import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'

import Box from '../../components/common/Box'
import LabelValuePair from './LabelValuePair'
import HeaderH5Bold from '@/common/components/textComponents/HeaderH5Bold'

import checkedIcon from '@/assets/icons/checkedGreen.svg'
import { DEALERS_DATA } from '@/api/apiTypes'
import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'
import { formatDate } from '@/common/helpers/simpleFunctions'

type Props = { dealerData: DEALERS_DATA }

const DealerDataBox = ({
  dealerData: {
    firstName,
    lastName,
    phoneNumber,
    personalId,
    createdAt,
    idImageVerificationStatus,
  },
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  return (
    <Box width={isMobile ? 358 : isTablet ? 353 : 385}>
      <HeaderH5Bold text={t('dealer data')} />
      <Line />
      <Frame>
        <LabelValuePair
          label={t('full name')}
          value={`${firstName} ${lastName}`}
        />
        <LabelValuePair label={t('mobile number')} value={phoneNumber} />
        <LabelValuePair label={t('personal number')} value={personalId} />
        <LabelValuePair
          label={t('date of joining')}
          value={formatDate(createdAt)}
        />
        <LabelFrame>
          <Label>{t('authentication')}</Label>
          <VerificationIcon verificationStatus={idImageVerificationStatus} />
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
