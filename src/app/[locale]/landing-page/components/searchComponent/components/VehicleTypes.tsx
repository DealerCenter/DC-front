import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import VehicleBox from './VehicleBox'

import carIcon from '@/assets/icons/VehicleIcons/CarBlack.svg'
import carIconSmall from '@/assets/icons/VehicleIcons/CarBlackSmall.svg'
import TruckBlack from '@/assets/icons/VehicleIcons/TruckBlack.svg'
import TruckBlackSmall from '@/assets/icons/VehicleIcons/TruckBlackSmall.svg'
import MotorcycleBlack from '@/assets/icons/VehicleIcons/MotorcycleBlack.svg'
import MotorcycleBlackSmall from '@/assets/icons/VehicleIcons/MotorcycleBlackSmall.svg'

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
