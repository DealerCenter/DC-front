import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import BasicButton from '@/common/components/appButton/BasicButton'
import useTransportCalculator from './useTransportCalculator'
import AppSelectAntDesignWithFetch from '@/common/components/appSelect/AppSelectAntDesignWithFetch'

import theme from '@/app/[locale]/theme'

import shipImage from '@/assets/images/shipImage.jpeg'
import PageHeader from '@/common/components/pageHeader/PageHeader'
import ResultsBox from './components/ResultsBox'
import TextInput from '@/common/components/InputElements/TextInput'

const IMAGE_WIDTH = 386
const IMAGE_HEIGHT = 292

type Props = {}

const TransportationCalculator = (props: Props) => {
  const {
    locations,
    cargoTypes,
    destinations,
    selectedLocation,
    setSelectedLocation,
    selectedCargoType,
    setSelectedCargoType,
    selectedDestination,
    setSelectedDestination,
    handleCalculate,
    calculatedResult,
    isCalculating,
    checkCarByVin,
    vin,
    setVin,
  } = useTransportCalculator()

  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const width = isMobile ? 343 : isTablet ? 257 : 377

  const t = useTranslations('')

  return (
    <Container>
      <PageHeader
        headerText={t('transportation calculator')}
        text={t('specify details and calculate exact shipping cost')}
      />
      <Frame>
        <ImageAndCalculatorFrame>
          <ImageFrame>
            {isMobile ? (
              <Image src={shipImage} alt='ship image' layout='responsive' />
            ) : (
              <Image
                src={shipImage}
                alt='ship image'
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
              />
            )}
          </ImageFrame>

          <CalculatorContainer>
            <InputsContainer>
              <Flex>
                <LabelsPair>
                  <SLabel>{t('from where')}</SLabel>
                  <AppSelectAntDesignWithFetch
                    width={width}
                    options={locations}
                    // placeholder={t('which city/state is it coming from')}
                    value={selectedLocation}
                    setValue={setSelectedLocation}
                    isLoading={false}
                    onChange={(value) => setSelectedLocation(value.toString())}
                  />
                </LabelsPair>

                <LabelsPair>
                  <SLabel>{t('vin code')}</SLabel>
                  <TextInput
                    width={width}
                    height={46}
                    type='text'
                    fontWeight='bold'
                    fontSize={13}
                    placeholder=''
                    name={'vin'}
                    onChange={(e) => setVin(e.target.value)}
                    hasLabel={false}
                    onBlur={() => {}}
                    onCheck={checkCarByVin}
                  />
                </LabelsPair>
              </Flex>
              <Flex>
                <LabelsPair>
                  <SLabel>{t('vehicle type')}</SLabel>
                  <AppSelectAntDesignWithFetch
                    options={cargoTypes}
                    // placeholder={t('select')}
                    value={selectedCargoType}
                    setValue={setSelectedCargoType}
                    isLoading={false}
                    onChange={(value) => setSelectedCargoType(value.toString())}
                    width={width}
                  />
                </LabelsPair>

                <LabelsPair>
                  <SLabel>{t('to where')}</SLabel>
                  <AppSelectAntDesignWithFetch
                    options={destinations}
                    // placeholder={t('what city/port does it arrive at')}
                    value={selectedDestination}
                    setValue={setSelectedDestination}
                    isLoading={false}
                    onChange={(value) =>
                      setSelectedDestination(value.toString())
                    }
                    width={width}
                  />
                </LabelsPair>
              </Flex>
            </InputsContainer>
            <BasicButton onClick={handleCalculate}>
              <ButtonLabel>{t('calculate')}</ButtonLabel>
            </BasicButton>
          </CalculatorContainer>
        </ImageAndCalculatorFrame>

        <ResultsBox
          calculatedResult={calculatedResult}
          isCalculating={isCalculating}
        />
      </Frame>
    </Container>
  )
}

export default TransportationCalculator

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 100px;

  @media ${({ theme }) => theme.media?.md} {
    padding: 64px 0;
    gap: 64px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    padding: 64px 0;
    gap: 48px;

    /* margin-top: 150px; */
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`

const ImageAndCalculatorFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 42px;
`

const ImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius?.xl};
  /* flex: 1; */
  width: 100%;

  @media ${({ theme }) => theme.media?.sm} {
    border-radius: unset;
    height: 150px;

    position: absolute;
    left: 0;
    top: 3010px;
    z-index: -1;
    width: 100%;
  }
`
const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};

  justify-content: space-between;
  width: 100%;
  gap: 30px;
`

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xl};

  @media ${({ theme }) => theme.media?.sm} {
    gap: ${({ theme }) => theme.spacing?.xsm};
  }
`

const LabelsPair = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  margin-left: 16px;
  flex: 1;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.xsm};
    margin-left: unset;
  }
`

const ButtonLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
  cursor: pointer;
`

const SLabel = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`
const Flex = styled.div`
  display: flex;
  flex: 1;
  width: 100%;

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    margin-top: 20px;
  }
`
