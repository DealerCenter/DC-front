import React from 'react'
import styled from 'styled-components'

import infoIcon from '@/assets/icons/infoIconEmpty.svg'
import AppTooltip from '@/common/components/appTooltip/AppTooltip'
import Image from 'next/image'

type Props = {
  label: string
  value: string
  tooltipValue?: React.ReactNode
}

const LabelValuePair = ({ label, value, tooltipValue }: Props) => {
  return (
    <Container>
      <LabelBox>
        <Label>{label}</Label>
      </LabelBox>
      <ValueBox>
        <IconBox>
          {tooltipValue && (
            <AppTooltip tooltipValue={tooltipValue}>
              <Image src={infoIcon} alt='info icon' width={20} height={20} />
            </AppTooltip>
          )}
        </IconBox>
        <Value>{value}</Value>
      </ValueBox>
    </Container>
  )
}

export default LabelValuePair

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing?.xl};

  width: 350px;

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.sm};
    width: 314px;
  }
`

const LabelBox = styled.div`
  display: flex;
  align-items: center;
  height: 36px;

  width: 142px;

  @media ${({ theme }) => theme.media?.sm} {
    width: 120px;
  }
`

const ValueBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  align-items: center;
  height: 36px;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};

  cursor: default;
`

const Value = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};

  cursor: default;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  width: 24px;
  height: 24px;
`
