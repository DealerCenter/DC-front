'use client'

import {
  CircleMarker,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
} from 'react-leaflet'
import { LatLngExpression, LatLngTuple } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import theme from '../../theme'

interface MapProps {
  posix: LatLngExpression | LatLngTuple
  zoom?: number
  height: number
  width?: number
  locationsArray?: {
    latLng: number[]
    color: string
    radius: number
    text: string
  }[]
}

const POTI_LOCATION: LatLngExpression | LatLngTuple = [
  42.138499446, 41.67249731,
]

const EarthMap = ({
  zoom = 3,
  posix,
  height,
  width,
  locationsArray,
}: MapProps) => {
  return (
    <MapContainer
      zoom={zoom}
      center={posix}
      scrollWheelZoom={false}
      style={{ height: `${height}px`, width: width ? `${width}px` : '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <Marker position={posix} draggable={false} /> */}

      {locationsArray &&
        locationsArray.map((item, i) => (
          <CircleMarker
            key={`circleMarkerIndex${i}`}
            center={item.latLng as LatLngExpression | LatLngTuple}
            pathOptions={{ color: `${item.color}` }}
            radius={10}
          >
            <Tooltip>{item.text}</Tooltip>
          </CircleMarker>
        ))}
    </MapContainer>
  )
}

export default EarthMap
