import { getMailinatorMessageById } from '@/api/apiCalls'
import React, { useEffect, useState } from 'react'
import cheerio from 'cheerio'
import ImagesBox from '../../vehicle-listing/[vin]/components/imageAndBid/components/ImagesBox'
import styled from 'styled-components'
import PriceAndShippingEstimate from '../../vehicle-listing/[vin]/components/priceAndShippingEstimate/PriceAndShippingEstimate'
import DamageAuctionVehicleInfo from '../../vehicle-listing/[vin]/components/damageAuctionVehicleInfo/DamageAuctionVehicleInfo'
import useInboxCar, { CarData } from './useInboxCar'
import Loader from '@/common/components/loader/Loader'

type Props = {
  id: string
}

const InboxCarListing = ({ id }: Props) => {
  const [data, setData] = useState('')
  // @ts-ignore
  const html = data?.['parts']?.[1]?.['body']
  const [isLoading, setIsLoading] = useState(false)

  const { extractData, getMainImageSrc, getTitle } = useInboxCar()

  // @ts-ignore
  const parsedData: CarData = extractData(html)

  useEffect(() => {
    const getCar = async () => {
      setIsLoading(true)
      const res = await getMailinatorMessageById(id)
      setData(res)
      setIsLoading(false)
    }
    getCar()
  }, [])

  function extractImageSources(html: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const images = doc.querySelectorAll('img')

    const srcs = Array.from(images).map((img) => img.src)

    return srcs
  }

  const images = extractImageSources(html)

  const carDetails = {
    primary_damage: '',
    highlights: '',
    vin: parsedData?.vin || '',
    lot_number: '',
    seller: '',
    odometer: parsedData?.mileage || '',
    car_keys: '',
    engine_type: parsedData?.engine || '',
    drive: parsedData?.drive || '',
    transmission: parsedData?.transmission || '',
    fuel: parsedData?.fuelType || '',
    cylinders: parsedData?.cylinder || '',
    body_style: '',
    isDamaged: parsedData.isDamaged || '',
    isPainted: parsedData.isPainted || '',
    isDrivable: parsedData.isDrivable || '',
  }

  if (isLoading) return <Loader />

  return (
    <>
      <Container>
        <ImagesBox images={images} />
        {/* @ts-ignore */}
        <DamageAuctionVehicleInfo carDetails={carDetails} />
        {/* <PriceAndShippingEstimate /> */}
      </Container>
    </>
  )
}

export default InboxCarListing

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  padding: 16px 0;
`
