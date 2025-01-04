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

const DATE_FORMAT = 'YYYY-MM-DD'

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

  const SHIPPING_STEPS = [
    {
      status: SHIPPING_STATUS.IN_AUCTION,
      date: '',
      order: 1,
      isCurrent: false,
    },
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
    { status: SHIPPING_STATUS.SENT, date: '', order: 5, isCurrent: true },
  ]

  const [currentStatusAndDates, setCurrentStatusAndDates] = useState<
    ShippingStatusAndDates[]
  >([])

  useEffect(() => {
    setCurrentStatusAndDates(
      typeof value === 'string' ? JSON.parse(value) : value
    )
  }, [value])

  const onChange = (
    date: DatePickerProps['value'],
    dateString: string | string[],
    step: ShippingStatusAndDates
  ) => {
    console.log({ currentStatusAndDates })
    if (date && setStatusFieldValue) {
      const formattedDate = date.format(DATE_FORMAT)

      setCurrentStatusAndDates((prev) => {
        return [...prev, { ...step, date: formattedDate }]
      })
    }
  }

  const setHighestOrderToCurrent = (array: ShippingStatusAndDates[]) => {
    const maxOrder = Math.max(...array.map((item) => item.order))
    return array.map((item) => ({
      ...item,
      isCurrent: item.order === maxOrder ? true : false,
    }))
  }

  useEffect(() => {
    setStatusFieldValue &&
      setStatusFieldValue(
        // @ts-ignore
        JSON.stringify(setHighestOrderToCurrent(currentStatusAndDates))
      )
  }, [currentStatusAndDates])

  return (
    <Container isEditing={isEditing}>
      {SHIPPING_STEPS.map((step) => (
        <LineOfStatus
          key={`lineOfStatusKey${step.status}`}
          isEditing={isEditing}
          title={t(step.status)}
          step={step.order}
          // @ts-ignore
          prefilledValue={currentStatusAndDates.find(
            (i) => i.order === step.order
          )}
          currentStep={Math.max(
            ...currentStatusAndDates.map((item) => item.order)
          )}
          statusAndDates={currentStatusAndDates}
          totalSteps={SHIPPING_STEPS.length}
          onChange={(date, dateString) => onChange(date, dateString, step)}
          isDisabled={false}
          setCurrentStatusAndDates={setCurrentStatusAndDates}
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
