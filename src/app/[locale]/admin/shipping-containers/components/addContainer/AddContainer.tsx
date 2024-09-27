import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/inputElements/TextInput'

import closeIcon from '@/assets/icons/closeX.svg'
import useAddContainer, { FIELD_NAMES } from './hooks/useAddContainer'

type Props = {
  onClose: () => void
  setUploadedSuccessfully: (arg: boolean) => void
}

const AddContainer = ({ onClose, setUploadedSuccessfully }: Props) => {
  const t = useTranslations('')

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isButtonDisabled,
    isLoading,
  } = useAddContainer(setUploadedSuccessfully)

  return (
    <Container>
      <Icon onClick={onClose}>
        <Image src={closeIcon} alt='close icon' width={12} height={12} />
      </Icon>
      <FrameTop>
        <H3Bold>{t('add container')}</H3Bold>
        <Label>{t('enter container data')}</Label>
      </FrameTop>
      <TextInput
        type='text'
        placeholder={'name'}
        width={323}
        isOutline={false}
        name={FIELD_NAMES.NAME}
        value={values[FIELD_NAMES.NAME]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.NAME] && touched[FIELD_NAMES.NAME]
            ? errors[FIELD_NAMES.NAME]
            : ''
        }
      ></TextInput>
      <TextInput
        type='text'
        placeholder={'trackingUrl'}
        width={323}
        isOutline={false}
        name={FIELD_NAMES.TRACKING_URL}
        value={values[FIELD_NAMES.TRACKING_URL]}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={
          errors[FIELD_NAMES.TRACKING_URL] && touched[FIELD_NAMES.TRACKING_URL]
            ? errors[FIELD_NAMES.TRACKING_URL]
            : ''
        }
      ></TextInput>
      <AppButton
        text={isLoading ? t('loading') : t('add new container')}
        type='filled'
        disabled={isButtonDisabled}
        onClick={handleSubmit}
        height='medium'
        width={323}
        htmlType='submit'
      ></AppButton>
    </Container>
  )
}

export default AddContainer

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 24px;
  margin-top: 200px;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media?.sm} {
    padding: 32px 16px;
  }
`

const Icon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`

const FrameTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
`

const H3Bold = styled.h3`
  font-size: 19px;
  font-weight: 700;
  margin: 0;
`
