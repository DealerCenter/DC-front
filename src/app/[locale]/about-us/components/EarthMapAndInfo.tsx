import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

import theme from '../../theme'
import InfoBox from './InfoBox'

type Props = {}

const MAP_HEIGHT = 500
const MAP_HEIGHT_ON_MOBILE = 400

const locations = [
  {
    latLng: [36.778259, -119.417931],
    header: 'California',
    text: 'Text about California',
  },
  {
    latLng: [42.138499446, 41.67249731],
    header: 'Poti',
    text: 'Text about Poti port',
  },
]

const EarthMapAndInfo = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
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
      <MapContainer height={isMobile ? MAP_HEIGHT_ON_MOBILE : MAP_HEIGHT}>
        <Map
          center={[35, -30]}
          height={isMobile ? MAP_HEIGHT_ON_MOBILE : MAP_HEIGHT}
          zoom={isMobile ? 1 : 2}
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

type MapContainerProps = { height: number }

const MapContainer = styled.div<MapContainerProps>`
  height: ${({ height }) => `${height}px`};
  width: 90%;
  max-width: 1280px;
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
