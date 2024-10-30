import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  DoneIcon,
  DoneIconGrayEmpty,
  LineGray,
  LineGreen,
} from '@/common/components/readyIcons/Icons'
import { setHeapSnapshotNearHeapLimit } from 'v8'
import { DatePicker, DatePickerProps } from 'antd'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { SHIPPING_STATUS, ShippingStatus } from '@/common/helpers/constants'

type Props = {
  isEditing: boolean
  title: string
  step: number
  currentStep: number
  totalSteps: number
  onChange: (
    date: DatePickerProps['value'],
    dateString: string | string[],
    step: number
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

  const [dateValue, setDateValue] = useState<DatePickerProps['value']>(null)

  // Effect to clear the DatePicker when step <= currentStep
  useEffect(() => {
    if (step > currentStep) {
      setDateValue(null)
    }
  }, [step, currentStep])

  const handleDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDateValue(date) // Update the date state
    onChange(date, dateString, step)
  }

  return (
    <Line>
      {isEditing ? (
        <DatePicker
          value={dateValue}
          onChange={handleDateChange}
          variant={step <= currentStep ? 'filled' : 'outlined'}
        />
      ) : (
        // <Date>{step <= currentStep && `22/04${!isMobile ? '/2022' : ''}`}</Date>
        <Date>NA</Date>
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
            {step === currentStep
              ? step !== totalSteps && <LineGray />
              : step !== totalSteps && <LineGreen />}
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
