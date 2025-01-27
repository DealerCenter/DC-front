import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import VehicleBox from './VehicleBox'

import carIcon from '@/assets/icons/vehicleIcons/CarBlack.svg'
import carIconSmall from '@/assets/icons/vehicleIcons/CarBlackSmall.svg'
import TruckBlack from '@/assets/icons/vehicleIcons/TruckBlack.svg'
import TruckBlackSmall from '@/assets/icons/vehicleIcons/TruckBlackSmall.svg'
import MotorcycleBlack from '@/assets/icons/vehicleIcons/MotorcycleBlack.svg'
import MotorcycleBlackSmall from '@/assets/icons/vehicleIcons/MotorcycleBlackSmall.svg'

type Props = {}

const VehicleTypes = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState<
    'car' | 'truck' | 'motorcycle'
  >('car')
  const t = useTranslations('')

  return (
    <Container>
      <VehicleBox
        icon={carIcon}
        iconSmall={carIconSmall}
        isActive={selectedOption === 'car'}
        label={t('car')}
        onClick={() => setSelectedOption('car')}
      />
      <VehicleBox
        icon={TruckBlack}
        iconSmall={TruckBlackSmall}
        isActive={selectedOption === 'truck'}
        label={t('truck')}
        onClick={() => setSelectedOption('truck')}
      />
      <VehicleBox
        icon={MotorcycleBlack}
        iconSmall={MotorcycleBlackSmall}
        isActive={selectedOption === 'motorcycle'}
        label={t('motorcycle')}
        onClick={() => setSelectedOption('motorcycle')}
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
