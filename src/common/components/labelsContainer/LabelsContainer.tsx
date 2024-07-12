import React from 'react'
import styled from 'styled-components'

type Props = {
  labels:
    | [string, string, string, string]
    | [string, string, string, string, string]
}

const LabelsContainer = ({ labels }: Props) => {
  return (
    <Container>
      {labels.map((label, i) => (
        <Label key={i}>{label}</Label>
      ))}
    </Container>
  )
}

export default LabelsContainer

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 788px;
  height: 75px;
  background-color: rgba(32, 32, 32, 1);
  border-radius: 16px 16px 0px 0px;
  padding: 16px 16px 16px 32px;
`
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: white;
`
