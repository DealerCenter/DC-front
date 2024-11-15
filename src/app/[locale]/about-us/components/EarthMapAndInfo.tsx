import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import InfoBox from './InfoBox'

import { useMediaQuery } from 'react-responsive'
import theme from '../../theme'
// import EarthMap from './EarthMap'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import { LatLngExpression, LatLngTuple } from 'leaflet'

type Props = {}

const locations = [
  {
    latLng: [36.778259, -119.417931],
    color: theme.colors?.main_gray_100,
    radius: 100,
    text: 'California',
  },
  {
    latLng: [42.138499446, 41.67249731],
    color: theme.colors?.main_gray_100,
    radius: 10,
    text: 'Poti',
  },
]

const EarthMapAndInfo = (props: Props) => {
  const t = useTranslations('')

  const Map = useMemo(
    () =>
      dynamic(() => import('./EarthMap'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  )

  return (
    <Container>
      <MapContainer>
        <Map
          posix={[42.138499446, 41.67249731]}
          height={500}
          zoom={2}
          locationsArray={locations}
        />
      </MapContainer>
      <InfoBoxesFrame>
        <InfoBox
          header='Support'
          text={t('our team is ready to help')}
          blueText='support@gmail.com'
        />
        <InfoBox
          header='Sales'
          text={t('have questions? Contact us')}
          blueText='sales@gmail.com'
        />
        <InfoBox
          header='Phone'
          text={t('monday-friday 9-5')}
          blueText='+1 (555) 000-0000'
        />
      </InfoBoxesFrame>
    </Container>
  )
}

export default EarthMapAndInfo

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
`

const MapContainer = styled.div`
  height: 500px;
  width: 90%;
  border-radius: ${({ theme }) => theme.radius?.lg};
  overflow: hidden;
`

const InfoBoxesFrame = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 100%;
    padding: 0 64px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 40px;
    justify-content: unset;
    width: unset;
    padding: 64px 0;
  }
`
