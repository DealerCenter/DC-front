import CheckBox from '@/common/components/appCheckBox/Checkbox'
import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  onClick?: () => void
  isChecked: boolean
}

const CheckItemBox = ({ label, onClick, isChecked }: Props) => {
  const handleClick = () => {
    onClick && onClick()
  }

  return (
    <Container onClick={handleClick}>
      <CheckBox isChecked={isChecked} />
      <Label>{label}</Label>
    </Container>
  )
}

export default CheckItemBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};

  cursor: default;
  user-select: none;
`
