import Image from 'next/image'
import React, { useTransition } from 'react'
import styled from 'styled-components'

import copyIcon from '@/assets/icons/copy.svg'
import pdfIcon from '@/assets/icons/pdf.svg'
import infoIcon from '@/assets/icons/infoIconEmpty.svg'
import BasicButton from '@/common/components/appButton/BasicButton'
import { useTranslations } from 'next-intl'

type Props = {}

const DetailsRow = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <CarDetailsBox>
        <BrandLabelBox>
          <BrandLabel>Mercedes Benz</BrandLabel>
          <Text23Bold>2020</Text23Bold>
        </BrandLabelBox>
        <Text19GrayBold>E class, Diezel</Text19GrayBold>
        <VinCodeBox>
          <Text16Bold>VIN:</Text16Bold>
          <Text16>WD4PG2EE1J3371314</Text16>
          <IconBox>
            <Image src={copyIcon} alt='copy icon' />
          </IconBox>
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
          <BasicButton
            text='dafarva'
            onClick={() => {}}
            width={140}
            height={56}
          />
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
  width: 100%;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
  }
`

const OnMobileFlipFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
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
`
const BrandLabelBox = styled.div`
  display: flex;
  flex-direction: row;
`
const BrandLabel = styled.label`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text_black};
`
const Text23Bold = styled.label`
  font-size: 23px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text_black};
  white-space: nowrap;
`

const Text19GrayBold = styled.label`
  font-size: 19px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
const VinCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const Text16 = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.text_black};
`
const Text16Bold = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.text_black};
`
const Text16BoldGray = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
const IconBox = styled.div`
  width: 56px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  justify-content: center;
  align-items: center;
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
`
const Line = styled.div`
  width: 356px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: 20px;
`

const CostFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 8px;
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
  /* width: 328px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  justify-content: space-between;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: row;
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
  color: ${({ theme }) => theme.colors?.text_black};
  white-space: nowrap;
`
