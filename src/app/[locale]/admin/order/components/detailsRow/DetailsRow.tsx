import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import CarDetailsBoxEmpty from './components/CarDetailsBoxEmpty'
import CarDetailsBox from './components/CarDetailsBox'
import CostsBoxEmpty from './components/CostsBoxEmpty'
import CostsBox from './components/CostsBox'
import DebtBox from './components/DebtBox'

type Props = { isEditing: boolean }

const DetailsRow = ({ isEditing }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      {isEditing ? (
        <>
          <CarDetailsBoxEmpty />
          <CostsBoxEmpty />
        </>
      ) : (
        <>
          <CarDetailsBox />
          <CostsBox />
        </>
      )}
      <OnMobileFlipFrame>
        <DebtBox isEditing={isEditing} />
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

  @media ${({ theme }) => theme.media?.md} {
    width: 960px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 8px;
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
