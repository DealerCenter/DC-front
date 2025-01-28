import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import VehicleBox from './VehicleBox'

import carIcon from '@/assets/icons/vehicleIcons/CarBlack.svg'
import carIconSmall from '@/assets/icons/vehicleIcons/CarBlackSmall.svg'
import TruckBlack from '@/assets/icons/vehicleIcons/TruckBlack.svg'
import TruckBlackSmall from '@/assets/icons/vehicleIcons/TruckBlackSmall.svg'
import MotorcycleBlack from '@/assets/icons/vehicleIcons/MotorcycleBlack.svg'
import MotorcycleBlackSmall from '@/assets/icons/vehicleIcons/MotorcycleBlackSmall.svg'
import {
  FIELD_NAMES,
  useSearchVehicle,
} from '@/app/[locale]/search-vehicle/hooks/useSearchVehicle'

type Props = {}

const VehicleTypes = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState<
    'VEHICLE' | 'TRUCK' | 'MOTORCYCLE'
  >('VEHICLE')
  const t = useTranslations('')

  const { setFieldValue } = useSearchVehicle()

  useEffect(() => {
    setFieldValue(FIELD_NAMES.CAR_TYPE, selectedOption)
  }, [selectedOption])

  return (
    <Container>
      <VehicleBox
        icon={carIcon}
        iconSmall={carIconSmall}
        isActive={selectedOption === 'VEHICLE'}
        label={t('car')}
        onClick={() => setSelectedOption('VEHICLE')}
      />
      <VehicleBox
        icon={TruckBlack}
        iconSmall={TruckBlackSmall}
        isActive={selectedOption === 'TRUCK'}
        label={t('truck')}
        onClick={() => setSelectedOption('TRUCK')}
      />
      <VehicleBox
        icon={MotorcycleBlack}
        iconSmall={MotorcycleBlackSmall}
        isActive={selectedOption === 'MOTORCYCLE'}
        label={t('motorcycle')}
        onClick={() => setSelectedOption('MOTORCYCLE')}
      />
    </Container>
  )
}

export default VehicleTypes

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
