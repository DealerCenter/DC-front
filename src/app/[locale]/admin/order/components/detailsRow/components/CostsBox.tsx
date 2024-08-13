import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import pdfIcon from '@/assets/icons/pdf.svg'
import { useTranslations } from 'next-intl'

type Props = {}

const CostsBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <CostFrame>
        <CostLabelsFrame>
          <Text16BoldGray>{t('cost of transportation')}</Text16BoldGray>
          <Text23Bold>$ 1,600</Text23Bold>
        </CostLabelsFrame>
        <IconBoxPdf>
          <Image src={pdfIcon} alt='pdf icon' />
        </IconBoxPdf>
      </CostFrame>
      <CostFrame>
        <CostLabelsFrame>
          <Text16BoldGray>{t('cost of the car')}</Text16BoldGray>
          <Text23Bold>$ 7,500</Text23Bold>
        </CostLabelsFrame>
        <IconBoxPdf>
          <Image src={pdfIcon} alt='pdf icon' />
        </IconBoxPdf>
      </CostFrame>
      <Line />
      <CostFrame>
        <CostLabelsFrame>
          <Text16BoldGray>{t('total cost')}</Text16BoldGray>
          <Text23Bold>$ 9,100</Text23Bold>
        </CostLabelsFrame>
        <IconBoxPdf />
      </CostFrame>
    </Container>
  )
}

export default CostsBox

const Container = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  gap: 8px;

  @media ${({ theme }) => theme.media?.md} {
    width: 396px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    padding: 16px;
  }
`
const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: 20px;
`

const CostFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CostLabelsFrame = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
`

const IconBoxPdf = styled.div`
  margin-left: 8px;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text23Bold = styled.label`
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
  white-space: nowrap;
`

const Text16BoldGray = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`