import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import AppTooltip from '@/common/components/appTooltip/AppTooltip'
import BasicButton from '@/common/components/appButton/BasicButton'

import infoIcon from '@/assets/icons/infoIconEmpty.svg'
import { useTranslations } from 'next-intl'
import DebtTooltipContainer from './DebtTooltipContainer'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {}

const DebtBox = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  return (
    <Container>
      <DebtFrame>
        <Text16BoldGray>{t('current debt')}</Text16BoldGray>
        <AppTooltip tooltipValue={<DebtTooltipContainer />} maxWidth={500}>
          <DebtLabelBox>
            <DebtLabel>$ 1,600</DebtLabel>
            <Image src={infoIcon} alt='info icon' />
          </DebtLabelBox>
        </AppTooltip>
      </DebtFrame>
      <BasicButton onClick={() => {}} height={56}>
        {t('repay debt')}
      </BasicButton>
    </Container>
  )
}

export default DebtBox

const Container = styled.div`
  box-sizing: border-box;
  width: 328px;
  display: flex;
  align-items: flex-start;

  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  justify-content: space-between;

  @media ${({ theme }) => theme.media?.md} {
    width: 200px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
    padding: 16px;
    flex-direction: row;
    width: 343px;
  }
`

const DebtFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: flex-start;

  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.lg};
  }
  width: 150px;
`

const DebtLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

const DebtLabel = styled.label`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
  white-space: nowrap;
  cursor: pointer;
`

const Text16BoldGray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
