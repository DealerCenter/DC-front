import React from 'react'
import styled from 'styled-components'

type Props = { checked: boolean; value: string }

const Checkbox = ({ checked, value }: Props) => {
  return <StyledInput type='checkbox' value={value} checked={checked} />
}

export default Checkbox

const StyledInput = styled.input`
  width: 24px;
  height: 24px;
`
