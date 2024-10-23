import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import TextInput from '@/common/components/InputElements/TextInput'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../../hooks/useCreateOrderContext'

import paperClip from '@/assets/icons/paperClip.svg'

type Props = {}

const CostsBoxEmpty = (props: Props) => {
  const { values, handleBlur, handleChange, errors, touched } =
    useCreateOrderContext()

  const t = useTranslations('')

  return (
    <Container>
      <CostFrame>
        <Text16BoldGray>{t('cost of transportation')}</Text16BoldGray>
        <TextInput
          width={100}
          height={48}
          type='text'
          placeholder=''
          fontWeight='bold'
          fontSize={13}
          name={FIELD_NAMES.TRANSPORTATION_COST}
          value={values[FIELD_NAMES.TRANSPORTATION_COST]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.TRANSPORTATION_COST] &&
            touched[FIELD_NAMES.TRANSPORTATION_COST]
              ? errors[FIELD_NAMES.TRANSPORTATION_COST]
              : ''
          }
        />
        <IconBox>
          <Image src={paperClip} alt='pdf icon' />
        </IconBox>
      </CostFrame>
      <CostFrame>
        <Text16BoldGray>{t('cost of the car')}</Text16BoldGray>
        <TextInput
          width={100}
          height={48}
          type='text'
          placeholder=''
          fontWeight='bold'
          fontSize={13}
          name={FIELD_NAMES.CAR_COST}
          value={values[FIELD_NAMES.CAR_COST]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.CAR_COST] && touched[FIELD_NAMES.CAR_COST]
              ? errors[FIELD_NAMES.CAR_COST]
              : ''
          }
        />
        <IconBox>
          <Image src={paperClip} alt='pdf icon' />
        </IconBox>
      </CostFrame>
      <Line />
      <CostFrame>
        <Text16BoldGray>{t('total cost')}</Text16BoldGray>
        <TextInput
          width={100}
          height={48}
          type='text'
          name='total cost'
          placeholder=''
          value={(
            Number(values[FIELD_NAMES.CAR_COST]) +
            Number(values[FIELD_NAMES.TRANSPORTATION_COST])
          ).toString()}
          onChange={() => {}}
          onBlur={() => {}}
          fontWeight='bold'
          fontSize={13}
        />
        <IconBox />
      </CostFrame>
    </Container>
  )
}

export default CostsBoxEmpty

const Container = styled.div`
  box-sizing: border-box;
  width: 420px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 16px 24px;
  gap: 16px;

  @media ${({ theme }) => theme.media?.md} {
    width: 396px;
  }
  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
    padding: 16px;
  }
`
const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors?.main_gray_10};
  border-radius: 20px;
`

const CostFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const CostLabelsFrame = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
`

const IconBox = styled.div`
  /* margin-left: 8px;   */
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text16BoldGray = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  width: 200px;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`
