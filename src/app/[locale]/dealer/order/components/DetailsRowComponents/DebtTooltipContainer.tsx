import React from 'react'
import styled from 'styled-components'

type Props = {}

const DebtTooltipContainer = (props: Props) => {
  return (
    <Container>
      <Text16Bold>დავალიანება</Text16Bold>
      <LabelsBox>
        <TextGray>ტრანსპორტირება</TextGray>
        <TextGray>$7,500</TextGray>
      </LabelsBox>
      <LabelsBox>
        <TextGray>ტრანსპორტირება</TextGray>
        <TextGray>$7,500</TextGray>
      </LabelsBox>
      <LabelsBox>
        <TextGray>ტრანსპორტირება</TextGray>
        <TextGray>$7,500</TextGray>
      </LabelsBox>
      <Line />
      <LabelsBox>
        <TextGray>ტრანსპორტირება</TextGray>
        <TextGray>$7,500</TextGray>
      </LabelsBox>
    </Container>
  )
}

export default DebtTooltipContainer

const Container = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`

const LabelsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Text16Bold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.button_black};
`

const TextGray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
