import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import GelAndUsdSwitch from './GelAndUsdSwitch'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'
import useInboxCar, {
  CarData,
} from '@/app/[locale]/search-vehicle/inbox-car/[id]/useInboxCar'

type Props = {
  data: any
  currencyRate: number
}

const CarDetailsBox = ({ data, currencyRate }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const router = useRouter()
  const [selectedCurrency, setSelectedCurrency] = useState<'gel' | 'usd'>('usd')
  const [price, setPrice] = useState(0)
  const { extractData, getMainImageSrc, getTitle, formatNumber } = useInboxCar()

  const html = data?.['parts']?.[1]?.['body']
  const imageSrc = getMainImageSrc(html)
  const title = getTitle(data?.['subject'])

  useEffect(() => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const trs = doc.querySelectorAll('tr')

    for (let i = 0; i < trs.length; i++) {
      if (trs[i].textContent?.includes('Price')) {
        console.log('here')
        const nextTr = trs[i + 1]
        console.log('here', nextTr)

        if (nextTr) {
          const priceValue = parseFloat(
            nextTr?.textContent?.replace(/[\$,]/g, '') || '0'
          )
          setPrice(priceValue)
        }
        break
      }
    }
  }, [html])

  // @ts-ignore
  const parsedData: CarData = extractData(html)

  return (
    <Container onClick={() => router.push(`${routeName.inboxCar}/${data.id}`)}>
      <Image
        src={imageSrc || ''}
        alt='car image'
        height={257}
        width={isMobile ? 240 : 286}
        objectFit='cover'
      />
      <DetailsFrame>
        <HeaderFrame>
          <Header>{title}</Header>
          <CarModel>{parsedData.vin}</CarModel>
        </HeaderFrame>
        <MiddleFrame>
          <LabelsBox>
            <Label>{`${parsedData.engine} ${parsedData.fuelType}`}</Label>
            <Label>{parsedData.mileage}</Label>
          </LabelsBox>
          <LabelsBox>
            <Label>Trans: {parsedData.transmission}</Label>
            <Label>Interior: {parsedData.interior}</Label>
          </LabelsBox>
        </MiddleFrame>

        <BottomFrame style={{ visibility: price ? 'unset' : 'hidden' }}>
          <Amount>
            {selectedCurrency === 'gel'
              ? formatNumber(
                  Number((Number(price) * Number(currencyRate)).toFixed(0))
                )
              : formatNumber(Number(price))}
          </Amount>
          <GelAndUsdSwitch
            selectedCurrency={selectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
          />
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
