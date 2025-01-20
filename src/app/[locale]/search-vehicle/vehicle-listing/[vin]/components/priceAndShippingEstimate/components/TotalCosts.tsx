import InfoIconWithTooltip from '@/common/components/appTooltip/InfoIconWithTooltip'
import ToolTipTextBox from '@/common/components/appTooltip/ToolTipTextBox'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = { total: number }

const TotalCosts = ({ total }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Text>{t('total overhead costs')}</Text>
      <TotalBox>
        <InfoIconWithTooltip
          tooltipValue={<ToolTipTextBox text='Total costs tooltip' />}
          style='black'
        />
        <Header>{`$ ${total}`}</Header>
      </TotalBox>
    </Container>
  )
}

export default TotalCosts

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 32px;
  gap: ${({ theme }) => theme.spacing?.xsm};
  border-radius: ${({ theme }) => theme.radius?.xl};
  background-color: ${({ theme }) => theme.colors?.white};

  @media ${({ theme }) => theme.media?.sm} {
    padding: ${({ theme }) => theme.spacing?.lg};
  }
`

const TotalBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    width: 160px;
  }

  cursor: default;
`

const Header = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  cursor: default;
`
