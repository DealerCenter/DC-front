import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'

import theme from '@/app/[locale]/theme'
import ShippingStateBox from '../../../order-history/components/ShippingStateBox'
import TextInput from '@/common/components/inputElements/TextInput'
import UserDataBox from './components/UserDataBox'
import Box from '../../../components/common/Box'
import { dummyShippingSteps2 } from '@/assets/DummyData'
import {
  FIELD_NAMES,
  useCreateOrderContext,
} from '../../hooks/useCreateOrderContext'

type Props = {}

const RightFrame = ({}: Props) => {
  const [textInputWidth, setTextInputWidth] = useState(333)
  const { values, handleBlur, handleChange, errors, touched } =
    useCreateOrderContext()
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })
  const t = useTranslations('')

  useEffect(() => {
    setTextInputWidth(isMobile ? 311 : isTablet ? 333 : 391)
  }, [isMobile, isTablet, setTextInputWidth])

  return (
    <Container>
      <Box>
        <Header>{t('status')}</Header>
        <Line />
        <ShippingStateBox
          shippingSteps={dummyShippingSteps2}
          currentStep={1}
          isEditing={true}
        />
      </Box>
      <Box>
        <Header>{t('container data')}</Header> <Line />
        <Frame>
          <Frame2>
            <TextInput
              width={textInputWidth}
              height={48}
              type='text'
              placeholder={t('provide a link')}
              fontWeight='bold'
              fontSize={13}
              isOutline={false}
              name={FIELD_NAMES.CONTAINER_ID}
              value={values[FIELD_NAMES.CONTAINER_ID]}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={
                errors[FIELD_NAMES.CONTAINER_ID] &&
                touched[FIELD_NAMES.CONTAINER_ID]
                  ? errors[FIELD_NAMES.CONTAINER_ID]
                  : ''
              }
            />
          </Frame2>
        </Frame>
      </Box>
      <UserDataBox
        header={t('recipient data')}
        placeholder1={t('full name')}
        placeholder2={t('receiver id')}
        name={FIELD_NAMES.RECEIVER_ID}
        value={values[FIELD_NAMES.RECEIVER_ID]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.RECEIVER_ID] && touched[FIELD_NAMES.RECEIVER_ID]
            ? errors[FIELD_NAMES.RECEIVER_ID]
            : ''
        }
      />
      <UserDataBox
        header={t('dealer data')}
        placeholder1={t('full name')}
        placeholder2={t('dealer id')}
        name={FIELD_NAMES.DEALER_ID}
        value={values[FIELD_NAMES.DEALER_ID]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.DEALER_ID] && touched[FIELD_NAMES.DEALER_ID]
            ? errors[FIELD_NAMES.DEALER_ID]
            : ''
        }
      />
    </Container>
  )
}

export default RightFrame

const Container = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
  width: unset;

  @media ${({ theme }) => theme.media?.sm} {
    gap: 8px;
    width: 343px;
  }
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const DataFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

const Name = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Value = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.lg};
`
const Icon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledLink = styled.a`
  width: 112px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.link_blue};
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`
const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  white-space: nowrap;
`
