import React from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import {
  CurrentIcon,
  DoneIcon,
  LineGray,
  LineGreen,
  PendingIcon,
} from './Icons'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { DatePicker, DatePickerProps } from 'antd'

type Props = {
  shippingSteps: { stepName: string }[]
  currentStep: 0 | 1 | 2 | 3 | 4
  isEditing: boolean
}

const ShippingStateBox = ({ currentStep, shippingSteps, isEditing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <Container isEditing={isEditing}>
      {shippingSteps.map((step, i) => (
        <Line key={`shippingStateBoxLine${i}`}>
          {isEditing ? (
            <DatePicker onChange={onChange} />
          ) : (
            <Date>
              {i <= currentStep && `22/04${!isMobile ? '/2022' : ''}`}
            </Date>
          )}
          <IconBox>
            {i - currentStep === 1 ? (
              <CurrentIcon />
            ) : i <= currentStep ? (
              <DoneIcon />
            ) : (
              <PendingIcon />
            )}

            {i <= currentStep ? (
              <LineGreen />
            ) : (
              i < shippingSteps.length - 1 && <LineGray />
            )}
          </IconBox>
          <Label>{t(step.stepName)}</Label>
        </Line>
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

const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.black};
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
`
