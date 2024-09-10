import React from 'react'
import styled from 'styled-components'

import CarDetailsBoxEmpty from './components/CarDetailsBoxEmpty'
import CarDetailsBox from './components/CarDetailsBox'
import CostsBoxEmpty from './components/CostsBoxEmpty'
import CostsBox from './components/CostsBox'
import DebtBox from './components/DebtBox'

type Props = {}

const DetailsRow = ({}: Props) => {
  return (
    <Container>
      <CarDetailsBoxEmpty />
      <CostsBoxEmpty />
      <OnMobileFlipFrame>
        <DebtBox />
      </OnMobileFlipFrame>
    </Container>
  )
}

export default DetailsRow

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;

  width: 1200px;

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
    width: 343px;
  }
`

const OnMobileFlipFrame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  /* width: 100%; */
  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    gap: 8px;
  }
`
