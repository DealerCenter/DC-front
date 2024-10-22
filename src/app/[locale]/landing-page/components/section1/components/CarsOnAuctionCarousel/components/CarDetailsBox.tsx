import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import carImage from '@/assets/images/DummyCarImage.jpg'
import GelAndUsdSwitch from './GelAndUsdSwitch'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {}

const CarDetailsBox = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container>
      <Image src={carImage} alt='car image' width={isMobile ? 240 : 286} />
      <DetailsFrame>
        <HeaderFrame>
          <Header>2021 Mercedes E-Class</Header>
          <CarModel>E class, Diezel</CarModel>
        </HeaderFrame>
        <MiddleFrame>
          <LabelsBox>
            <Label>2.0 ბენზინი</Label>
            <Label>116,000 კმ</Label>
          </LabelsBox>
          <LabelsBox>
            <Label>მარცხენა საჭე</Label>
            <Label>Run and Drive</Label>
          </LabelsBox>
        </MiddleFrame>
        <BottomFrame>
          <Amount>5,600</Amount>
          <GelAndUsdSwitch />
        </BottomFrame>
      </DetailsFrame>
    </Container>
  )
}

export default CarDetailsBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  border-radius: 24px;
  width: 286px;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors?.white};

  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};

  @media ${({ theme }) => theme.media?.sm} {
    width: 240px;
    gap: ${({ theme }) => theme.spacing?.md};
  }
`

const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};

  padding: 0px 12px 16px 12px;
`

const HeaderFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const Header = styled.label`
  font-size: 23px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 19px;
  }
`

const CarModel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_56};
`

const MiddleFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LabelsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 13px;
  }
`

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Amount = styled.label`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: 23px;
  }
`
