import React from 'react'
import styled from 'styled-components'

type Props = {}

const Checkbox = (props: Props) => {
  return <StyledInput type='checkbox' />
}

export default Checkbox

const StyledInput = styled.input`
  width: 24px;
  height: 24px;
  border: 1.5px solid gray;
  border-radius: 6px;
  color: red;
  background-color: red;
`
