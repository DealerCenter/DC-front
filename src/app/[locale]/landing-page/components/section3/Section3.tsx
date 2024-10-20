import React from 'react'
import styled from 'styled-components'
import CheckVehicleHistory from '../../../our-services/history-check/CheckVehicleHistory'
import LogosLineBox from './components/LogosLineBox'
import VehicleStatusCheck from '@/app/[locale]/our-services/status-check/VehicleStatusCheck'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <Container>
      <VehicleStatusCheck />
      <CheckVehicleHistory />
      <LogosLineBox />
    </Container>
  )
}

export default Section3

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`
