import React, { useEffect, useState } from 'react'
import {
  getAuctionsAndLocations,
  getAuctionsList,
  getCalculatedPrice,
  getCargoTypes,
  getDealerLevels,
  getDestinationList,
  getLocationList,
} from '@/api/apiCalls'
import { getCarDetailsByVin } from '@/common/helpers/utils'
import { VehicleType, vehicleTypes } from '@/types/vehicleTypes'
import { message } from 'antd'
import { useTranslations } from 'next-intl'

export type CalculatedResult = {
  totalPrice: number
  auctionName: string
  cargoType: string
  auctionLocation: string
  destination: string
}

type Select = {
  label: string
  id: string
}

const useTransportCalculator = () => {
  const t = useTranslations('')

  const [locations, setLocations] = useState<Select[]>([{ label: '', id: '' }])
  const [destinations, setDestinations] = useState<string[]>([])
  const [vin, setVin] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedCargoType, setSelectedCargoType] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')
  const [isCalculating, setIsCalculating] = useState(false)
  const [publicPrice, setPublicPrice] = useState<string | undefined>('')
  const [isPendingStatus, setIsPendingStatus] = useState(false)

  const [calculatedResult, setCalculatedResult] = useState<CalculatedResult>({
    totalPrice: 0,
    auctionName: '',
    cargoType: '',
    auctionLocation: '',
    destination: '',
  })

  const handleCalculate = async () => {
    try {
      setIsCalculating(true)
      const test = vehicleTypes.find((veh) =>
        veh.body_class.includes(selectedCargoType)
      )
      console.log({ test, selectedCargoType })
      const res = await getCalculatedPrice({
        cargoType: test?.vehicle_type ?? '',
        auctionLocation: selectedLocation,
        destination: selectedDestination,
      })

      setCalculatedResult(
        res ?? {
          totalPrice: 0,
          auctionName: '',
          cargoType: '',
          auctionLocation: '',
          destination: '',
        }
      )
    } catch (error) {
      console.error('Error calculating price:', error)
    } finally {
      setIsCalculating(false)
    }
  }

  const checkCarByVin = async () => {
    if (vin) {
      try {
        setSelectedLocation('')
        setSelectedDestination('')
        setSelectedCargoType('')
        const res = (await getCarDetailsByVin(vin)).result[0]
        if (res) {
          console.log({
            name: res.auction_name,
            loc: res.location.split(' ')[0]?.toUpperCase(),
            body: res.body_style,
          })

          const detectedLocation =
            locations.find((location: Select) => {
              const locationFilter =
                res.auction_name.toUpperCase() === 'COPART'
                  ? location.id
                      .toUpperCase()
                      .includes(
                        res.location.split('-')[1]?.toUpperCase().trim()
                      )
                  : location.id
                      .toUpperCase()
                      .includes(res.location.split(' ')[0]?.toUpperCase())

              return (
                location.id
                  .toUpperCase()
                  .includes(res.auction_name.toUpperCase()) && locationFilter
              )
            }) || ''

          console.log('test', res.location.split('-')[0]?.toUpperCase().trim())

          const detectedVehicleType =
            vehicleTypes.find((veh) =>
              veh.body_class.includes(res.body_style?.toUpperCase())
            )?.body_class ?? ''

          // @ts-ignore
          setSelectedLocation(detectedLocation.id)
          setSelectedDestination(destinations[0])
          setSelectedCargoType(detectedVehicleType)
        }

        message.success('Car found')
      } catch (e) {
        message.error('Car not found')
        console.error(e)
      }
    }
  }

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await getAuctionsAndLocations()
      if (response) {
        const formattedLocations = response.map((location) => {
          const splitted = location.split('-')
          return {
            label: `(${splitted[
              splitted.length - 1
            ].trim()}) - ${splitted[0].trim()}, ${splitted[1].trim()} ${
              splitted.length === 4 ? `,${splitted[2]?.trim()}` : ''
            }`,
            id: location,
          }
        })
        setLocations(formattedLocations)
      }
    }

    const fetchDestinations = async () => {
      const response = await getDestinationList()
      setDestinations(response || [])
    }

    fetchLocations()
    fetchDestinations()
  }, [])

  useEffect(() => {
    getDealerLevels()
    const getDealerLevelPrice = async () => {
      const res = await getDealerLevels()
      const role = localStorage.getItem('role')
      res &&
        setPublicPrice(
          res?.find(
            (level) => level.level.toLowerCase() === role?.toLowerCase()
          )?.cost ?? res[res?.length - 1].cost
        )
    }

    getDealerLevelPrice()
  }, [])

  return {
    locations,
    cargoTypes: vehicleTypes.map((veh) => ({
      label: t(veh.body_class),
      id: veh.body_class,
    })),
    destinations: destinations.map((destination) => ({
      label: destination,
      id: destination,
    })),

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
    publicPrice,
    isPendingStatus,
    setIsPendingStatus,
  }
}

export default useTransportCalculator
