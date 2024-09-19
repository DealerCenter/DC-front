import React from 'react'
import styled from 'styled-components'
import { DoneIcon, DoneIconGrayEmpty, LineGray, LineGreen } from '../../Icons'
import { setHeapSnapshotNearHeapLimit } from 'v8'
import { DatePicker, DatePickerProps } from 'antd'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

type Props = {
  isEditing: boolean
  title: string
  step: number
  currentStep: number
  totalSteps: number
  onChange: (
    date: DatePickerProps['value'],
    dateString: string | string[],
    step: 0 | 1 | 2 | 3 | 4
  ) => void
}

const LineOfStatus = ({
  isEditing,
  title,
  step,
  currentStep,
  totalSteps,
  onChange,
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const handleDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    onChange(date, dateString, step as 0 | 1 | 2 | 3 | 4)
  }

  return (
    <Line>
      {isEditing ? (
        <DatePicker onChange={handleDateChange} />
      ) : (
        <Date>{step <= currentStep && `22/04${!isMobile ? '/2022' : ''}`}</Date>
      )}
      <IconBox>
        {step > currentStep ? (
          <>
            <DoneIconGrayEmpty />
            {step !== totalSteps && <LineGray />}
          </>
        ) : (
          <>
            <DoneIcon />
            {step !== totalSteps && <LineGreen />}
          </>
        )}
      </IconBox>
      <Label>{title}</Label>
    </Line>
  )
}

export default LineOfStatus

const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.black};

  width: 150px;
`

const Line = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`
const Date = styled.label`
  @media ${({ theme }) => theme.media?.sm} {
    width: 40px;
  }

  width: 75px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_56};
  padding: 2px 0;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
