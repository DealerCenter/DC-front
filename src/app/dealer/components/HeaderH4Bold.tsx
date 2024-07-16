import React from 'react'
import styled from 'styled-components'

type Props = { text: string }

const HeaderH4Bold = ({ text }: Props) => {
  return (
    <H4Box>
      <StyledH4>{text}</StyledH4>
    </H4Box>
  )
}

export default HeaderH4Bold

const StyledH4 = styled.h4`
  color: rgba(32, 32, 32, 1);
  font-size: 28px;
  font-weight: 700;
`

const H4Box = styled.div`
  display: flex;
  align-items: center;
  width: 372px;
  height: 82px;
  padding-left: 32px;
`
