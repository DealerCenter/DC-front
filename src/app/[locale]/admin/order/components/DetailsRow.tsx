import Image from 'next/image'
import React, { useTransition } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import BasicButton from '@/common/components/appButton/BasicButton'
import CopyButton from '@/common/components/copyToClipboard/CopyButton'

import pdfIcon from '@/assets/icons/pdf.svg'
import infoIcon from '@/assets/icons/infoIconEmpty.svg'

type Props = {}

const DummyVinCode = 'WD4PG2EE1J3371314'

const DetailsRow = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <CarDetailsBox>
        <BrandLabelBox>
          <BrandLabel>Mercedes Benz</BrandLabel>
          <YearLabel>2020</YearLabel>
        </BrandLabelBox>
        <CarModel>E class, Diezel</CarModel>
        <VinCodeBox>
          <VinLabel>VIN:</VinLabel>
          <VinCode>{DummyVinCode}</VinCode>
          <CopyButton textToCopy={DummyVinCode} />
        </VinCodeBox>
      </CarDetailsBox>
      <OnMobileFlipFrame>
        <CostsBox>
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
        </CostsBox>
        <DebtBox>
          <DebtFrame>
            <Text16BoldGray>{t('current debt')}</Text16BoldGray>
            <DebtLabelBox>
              <DebtLabel>$ 1,600</DebtLabel>
              <Image src={infoIcon} alt='info icon' />
            </DebtLabelBox>
          </DebtFrame>
          <BasicButton onClick={() => {}} height={56}>
            {t('repay debt')}
          </BasicButton>
        </DebtBox>
      </OnMobileFlipFrame>
    </Container>
  )
}

export default DetailsRow

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 100%; */
  gap: 16px;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
  }
`

const OnMobileFlipFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  /* width: 100%; */
  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    gap: 8px;
  }
`

const CarDetailsBox = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.md} {
    width: 350px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    padding: 24px 16px;
  }
`
const BrandLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const BrandLabel = styled.label`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 23px;
  }
`
const YearLabel = styled.label`
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 16px;
  }
`
const Text23Bold = styled.label`
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
  white-space: nowrap;
`

const CarModel = styled.label`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_68};

  @media ${({ theme }) => theme.media?.sm} {
    color: ${({ theme }) => theme.colors?.main_gray_42};
  }
`
const VinCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const VinCode = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.black};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 13px;
  }
`
const VinLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 13px;
    font-weight: 400;
  }
`
const Text16BoldGray = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const CostsBox = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  gap: 8px;

  @media ${({ theme }) => theme.media?.md} {
    width: 378px;
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
const DebtBox = styled.div`
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
`
