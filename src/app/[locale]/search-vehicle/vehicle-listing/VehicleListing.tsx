import styled from 'styled-components'

import DamageAuctionVehicleInfo from './components/damageAuctionVehicleInfo/DamageAuctionVehicleInfo'
import ImageAndBid from './components/imageAndBid/ImageAndBid'
import PriceAndShippingEstimate from './components/priceAndShippingEstimate/PriceAndShippingEstimate'
import PreviousLots from './components/previousLots/PreviousLots'
import SimilarLots from './components/similarLots/SimilarLots'
import { SetStateAction, useEffect, useState } from 'react'
import { getSingleMail } from '@/api/apiCalls'

type Props = {}

const VehicleListing = (props: Props) => {
  const [htmlDocument, setHtmlDocument] = useState()
  const [imageSrcs, setImageSrcs] = useState<string[]>([])

  const parser = new DOMParser()
  useEffect(() => {
    getSingleMail('test1-1733824520-37758802903').then((res) => {
      console.log('res', res)
      res.html && setHtmlDocument(res.html)

      const doc = parser.parseFromString(res.html, 'text/html')
      const imgElements = doc.querySelectorAll('img')

      const imageUrls: SetStateAction<string[]> = []

      imgElements.forEach((img) => {
        const src = img.getAttribute('src')
        if (src && src.includes('https://images.cdn.manheim')) {
          imageUrls.push(src)
        }

        setImageSrcs(imageUrls)
      })
    })
  }, [])

  console.log({ imageSrcs })

  return (
    <Container>
      {/* {htmlDocument && (
        <div dangerouslySetInnerHTML={{ __html: htmlDocument }} />
      )} */}

      <ImageAndBid imageSrcs={imageSrcs} />
      <DamageAuctionVehicleInfo />
      <PriceAndShippingEstimate />
      <PreviousLots />
      <SimilarLots />
    </Container>
  )
}

export default VehicleListing

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  padding: 16px 0;
`
