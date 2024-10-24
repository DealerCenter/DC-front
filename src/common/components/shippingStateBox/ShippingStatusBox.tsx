import { DatePickerProps } from 'antd'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { SHIPPING_STATUS, ShippingStatus } from '@/common/helpers/constants'
import LineOfStatus from './components/LineOfStatus'

const SHIPPING_STEPS = [
  { value: SHIPPING_STATUS.IN_AUCTION, step: 1 },
  { value: SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE, step: 2 },
  { value: SHIPPING_STATUS.IN_CONTAINER, step: 3 },
  { value: SHIPPING_STATUS.UNDERGOES_CUSTOMS, step: 4 },
  { value: SHIPPING_STATUS.SENT, step: 5 },
]

type Props = {
  isEditing: boolean
  value: ShippingStatus
}

type ShippingStepType = { value: SHIPPING_STATUS | null; step: number }

const ShippingStatusBox = ({ isEditing, value }: Props) => {
  const t = useTranslations('')

  // const { setFieldValue } = useCreateOrderContext()

  const [currentStep, setCurrentStep] = useState<ShippingStepType>({
    value: null,
    step: 0,
  })

  useEffect(() => {
    if (!value) {
      setCurrentStep({
        value: null,
        step: 0,
      })
      return
    }

    const step = SHIPPING_STEPS.find((item) => item.value === value)

    step && setCurrentStep(step)
  }, [value])

  // console.log('status in formik:', values[FIELD_NAMES.STATUS])

  const onChange = (
    date: DatePickerProps['value'],
    dateString: string | string[],
    step: ShippingStepType
  ) => {
    // console.log(date, dateString, `Step: ${step.value}`)

    // Update the current step based on the step of the changed DatePicker
    if (date) {
      setCurrentStep(step)

      // Update the Formik value for the status field
      // setFieldValue(FIELD_NAMES.STATUS, SHIPPING_STEPS[step.step - 1].value)
    }
  }

  return (
    <Container isEditing={isEditing}>
      {SHIPPING_STEPS.map((step) => (
        <LineOfStatus
          key={`lineOfStatusKey${step.value}`}
          isEditing={isEditing}
          title={t(step.value)}
          step={step.step}
          currentStep={currentStep.step}
          totalSteps={SHIPPING_STEPS.length}
          onChange={(date, dateString) => onChange(date, dateString, step)}
        />
      ))}
    </Container>
  )
}

export default ShippingStatusBox

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
