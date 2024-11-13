import { DatePickerProps } from 'antd'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import {
  SHIPPING_STATUS,
  ShippingStatus,
  ShippingStatusAndDates,
} from '@/common/helpers/constants'
import LineOfStatus from './components/LineOfStatus'
import dayjs from 'dayjs'
import Item from 'antd/es/list/Item'

// const SHIPPING_STEPS = [
//   { value: SHIPPING_STATUS.IN_AUCTION, step: 1 },
//   { value: SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE, step: 2 },
//   { value: SHIPPING_STATUS.IN_CONTAINER, step: 3 },
//   { value: SHIPPING_STATUS.UNDERGOES_CUSTOMS, step: 4 },
//   { value: SHIPPING_STATUS.SENT, step: 5 },
// ]

const DATE_FORMAT = 'YYYY-MM-DD'

const SHIPPING_STEPS = [
  { status: SHIPPING_STATUS.IN_AUCTION, date: '', order: 1, isCurrent: false },
  {
    status: SHIPPING_STATUS.IN_AMERICAN_WAREHOUSE,
    date: '',
    order: 2,
    isCurrent: false,
  },
  {
    status: SHIPPING_STATUS.IN_CONTAINER,
    date: '',
    order: 3,
    isCurrent: false,
  },
  {
    status: SHIPPING_STATUS.UNDERGOES_CUSTOMS,
    date: '',
    order: 4,
    isCurrent: false,
  },
  { status: SHIPPING_STATUS.SENT, date: '', order: 5, isCurrent: false },
]

type Props = {
  value: ShippingStatusAndDates[]
  isEditing: boolean
  setStatusFieldValue?: (arg: ShippingStatusAndDates[]) => void
}

const ShippingStatusBox = ({
  value,
  isEditing,
  setStatusFieldValue,
}: Props) => {
  const t = useTranslations('')

  const [currentStatusAndDates, setCurrentStatusAndDates] = useState<
    ShippingStatusAndDates[]
  >([])

  const [currentStep, setCurrentStep] = useState<ShippingStatusAndDates>()

  useEffect(() => {
    if (value.length > 0) {
      setCurrentStatusAndDates(value)
      // setCurrentStep(value.find((item) => item.isCurrent === true))
    }
  }, [value])

  // console.log('status in formik:', values[FIELD_NAMES.STATUS])

  const onChange = (
    date: DatePickerProps['value'],
    dateString: string | string[],
    step: ShippingStatusAndDates
  ) => {
    // Update the current step based on the step of the changed DatePicker
    if (date) {
      const formattedDate = date.format(DATE_FORMAT)
      if (currentStatusAndDates.length > 0) {
        setCurrentStatusAndDates([
          ...currentStatusAndDates,
          { ...step, date: formattedDate },
        ])
      } else {
        // setting status if its the first one
        setCurrentStatusAndDates([
          { ...step, date: formattedDate, isCurrent: true },
        ])
      }

      // Update the Formik value for the status field
      // setStatusFieldValue &&
      //   setStatusFieldValue(SHIPPING_STEPS[step.step - 1].value)
    }
  }

  useEffect(() => {
    console.log('current array of status:', currentStatusAndDates)

    setCurrentStep(
      currentStatusAndDates.reduce((max, current) => {
        return current.order > max.order ? current : max
      }, currentStatusAndDates[0])
    )
  }, [currentStatusAndDates])

  useEffect(() => {
    console.log('currentStep:', currentStep)

    // setCurrentStatusAndDates((prevStatuses) =>
    //   prevStatuses.map((status) => ({
    //     ...status,
    //     isCurrent: status.status === currentStep?.status,
    //   }))
    // )
  }, [currentStep])

  // if (currentStatusAndDates.length === 0) return

  return (
    <Container isEditing={isEditing}>
      {SHIPPING_STEPS.map((step) => (
        <LineOfStatus
          key={`lineOfStatusKey${step.status}`}
          isEditing={isEditing}
          title={t(step.status)}
          step={step.order}
          currentStep={currentStep?.order}
          statusAndDates={currentStatusAndDates}
          totalSteps={SHIPPING_STEPS.length}
          onChange={(date, dateString) => onChange(date, dateString, step)}
          isDisabled={false}
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
