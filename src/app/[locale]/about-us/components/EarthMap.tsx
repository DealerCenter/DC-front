'use client'

import { LatLngExpression, LatLngTuple } from 'leaflet'
import { CircleMarker, MapContainer, TileLayer, Tooltip } from 'react-leaflet'

import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'
import './EarthMapStyle.css'
import { color } from 'framer-motion'

interface MapProps {
  center: LatLngExpression | LatLngTuple
  zoom?: number
  height: number
  width?: number
  locationsArray?: {
    latLng: number[]
    header: string
    text: string
  }[]
}

const EarthMap = ({
  zoom = 3,
  center,
  height,
  width,
  locationsArray,
}: MapProps) => {
  return (
    <MapContainer
      zoom={zoom}
      center={center}
      scrollWheelZoom={false}
      style={{
        height: `${height}px`,
        width: width ? `${width}px` : '100%',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {locationsArray &&
        locationsArray.map((item, i) => (
          <CircleMarker
            key={`circleMarkerIndex${i}`}
            center={item.latLng as LatLngExpression | LatLngTuple}
            pathOptions={{
              color: 'black', // outside circle
              fillColor: 'black', // inside circle
              fillOpacity: 1, // Transparency of inside circle
              opacity: 0.5, // Transparency of outside circle
              weight: 20, // outside circle
            }}
            radius={8} // inside circle
          >
            <Tooltip
              className='custom-tooltip'
              offset={[0, -15]}
              direction='top'
            >
              <CustomTooltipWrapper>
                <TooltipHeader>{item.header}</TooltipHeader>
                <TooltipText>{item.text}</TooltipText>
              </CustomTooltipWrapper>
            </Tooltip>
          </CircleMarker>
        ))}
    </MapContainer>
  )
}

export default EarthMap

const CustomTooltipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: ${({ theme }) => theme.colors?.white};
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  font-weight: 400;

  // for tooltip arrow
  ::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors?.white} transparent transparent
      transparent;
  }
`

const TooltipHeader = styled.label`
  color: ${({ theme }) => theme.colors?.main_gray_100};
  cursor: default;
`
const TooltipText = styled.label`
  color: ${({ theme }) => theme.colors?.main_gray_42};
  cursor: default;
`
