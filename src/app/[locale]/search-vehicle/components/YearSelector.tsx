import React from 'react'
import styled from 'styled-components'
import { FIELD_NAMES, useSearchVehicle } from '../hooks/useSearchVehicle'
import { useTranslations } from 'next-intl'

type Props = {
  height?: number
}

const YearSelector = ({ height }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange } = useSearchVehicle()

  return (
    <FromUpToBox>
      <StyledInput
        name={FIELD_NAMES.YEAR_FROM}
        value={values[FIELD_NAMES.YEAR_FROM]}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
        placeholder={t('from')}
        style={{ height }}
      />
      <StyledInput
        name={FIELD_NAMES.YEAR_TO}
        value={values[FIELD_NAMES.YEAR_TO]}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
        placeholder={t('up to')}
        style={{ height }}
      />
    </FromUpToBox>
  )
}

const FromUpToBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};

  width: 114px;
  height: 40px;

  border-radius: ${({ theme }) => theme.radius?.lg};

  padding: 4px 4px 4px 10px;
  gap: 6px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
`

export default YearSelector
