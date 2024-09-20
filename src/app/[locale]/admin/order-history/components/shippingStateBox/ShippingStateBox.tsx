import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import { DatePickerProps } from 'antd'

import {
  FIELD_NAMES,
  SHIPPING_STATUS,
  useCreateOrderContext,
} from '../../../create-order/hooks/useCreateOrderContext'
import LineOfStatus from './components/LineOfStatus'

const SHIPPING_STEPS = [
  {
    value: SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE,
    title: 'is in American warehouse',
    step: 1,
  },
  {
    value: SHIPPING_STATUS.IN_CONTAINER,
    title: 'in container',
    step: 2,
  },
  {
    value: SHIPPING_STATUS.UNDERGOES_CUSTOMS,
    title: 'undergoes customs procedures',
    step: 3,
  },
  { value: SHIPPING_STATUS.SENT, title: 'was sent', step: 4 },
]

type Props = {
  isEditing: boolean
}

const ShippingStateBox = ({ isEditing }: Props) => {
  const t = useTranslations('')

  const { values, handleBlur, handleChange, errors, touched, setFieldValue } =
    useCreateOrderContext()

  const [currentStep, setCurrentStep] = useState<0 | 1 | 2 | 3 | 4>(0)

  // console.log('status in formik:', values[FIELD_NAMES.STATUS])

  const onChange = (
    date: DatePickerProps['value'],
    dateString: string | string[],
    step: 0 | 1 | 2 | 3 | 4
  ) => {
    // console.log(date, dateString, `Step: ${step}`)

    // Update the current step based on the step of the changed DatePicker
    if (date) {
      setCurrentStep(step as 0 | 1 | 2 | 3 | 4)

      // Update the Formik value for the status field
      setFieldValue(FIELD_NAMES.STATUS, SHIPPING_STEPS[step - 1].value)
    }
  }

  return (
    <Container isEditing={isEditing}>
      {SHIPPING_STEPS.map((step) => (
        <LineOfStatus
          key={`lineOfStatusKey${step.value}`}
          isEditing={isEditing}
          title={t(step.title)}
          step={step.step}
          currentStep={currentStep}
          totalSteps={SHIPPING_STEPS.length}
          onChange={(date, dateString) =>
            onChange(date, dateString, step.step as 0 | 1 | 2 | 3 | 4)
          }
        />
      ))}
    </Container>
  )
}

export default ShippingStateBox

type ContainerProps = { isEditing: boolean }

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  ${({ isEditing }) =>
    isEditing
      ? css`
          gap: 8px;
        `
      : css`
          gap: unset;
        `}
`
