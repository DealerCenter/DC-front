import { ORDER_DATA } from '@/api/apiTypes'
import CopyButton from '@/common/components/copyToClipboard/CopyButton'
import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = { orderData: ORDER_DATA }

const CarDetailsBox = ({ orderData }: Props) => {
  const t = useTranslations('')
  const { manufactureYear, model, manufacturer, vin } = orderData

  return (
    <Container>
      <BrandLabelBox>
        <BrandLabel>{manufacturer}</BrandLabel>
        <YearLabel>{manufactureYear}</YearLabel>
      </BrandLabelBox>
      <CarModel>{model}</CarModel>
      <VinCodeBox>
        <VinLabel>VIN:</VinLabel>
        <VinCode>{vin}</VinCode>
        <CopyButton textToCopy={vin} />
      </VinCodeBox>
    </Container>
  )
}

export default CarDetailsBox

const Container = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
