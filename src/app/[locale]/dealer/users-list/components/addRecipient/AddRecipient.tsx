import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AppButton from '@/common/components/appButton/AppButton'
import FileDropZone from '@/common/components/inputElements/FileDropZone'
import TextInput from '@/common/components/inputElements/TextInput'
import ChooseButton from '../../../../../../common/components/appButton/ChooseButton'

import closeIcon from '@/assets/icons/closeX.svg'
import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import useAddRecipients, { FIELD_NAMES } from './hooks/useAddRecipient'

type Props = { onClose: () => void }

const AddRecipient = ({ onClose }: Props) => {
  const tUseForm = useTranslations('useForm')
  const t = useTranslations('')
  const [type, setType] = useState<'individual' | 'legalPerson'>('individual')
  const dummyValue = 'something'
  const [isIdImageUploaded, setIsIdImageUploaded] = useState()

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    axiosError,
    setUploadIdImage,
    setFieldValue,
  } = useAddRecipients()

  const isButtonDisabled = false

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Icon onClick={onClose}>
          <Image src={closeIcon} alt='close icon' width={12} height={12} />
        </Icon>
        <FrameTop>
          <H3Bold>{t('add recipient')}</H3Bold>
          <Label>{t('enter recipient data')}</Label>
          <ChooseTypeFrame>
            <ChooseButton
              text={t('Individual')}
              isActive={!values[FIELD_NAMES.IS_JURIDICAL]} // if not juridical, it's individual
              onClick={() => setFieldValue(FIELD_NAMES.IS_JURIDICAL, false)}
            />
            <Image src={splitGrayLine} alt='line icon' />
            <ChooseButton
              text={t('Legal Person')}
              isActive={!!values[FIELD_NAMES.IS_JURIDICAL]} // if juridical, it's legal person
              onClick={() => setFieldValue(FIELD_NAMES.IS_JURIDICAL, true)}
            />
          </ChooseTypeFrame>
        </FrameTop>

        <InputFieldsFrame>
          <TextInput
            type='text'
            name={FIELD_NAMES.FIRST_NAME}
            placeholder={t('name')}
            value={values[FIELD_NAMES.FIRST_NAME]}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors[FIELD_NAMES.FIRST_NAME] && touched[FIELD_NAMES.FIRST_NAME]
                ? errors[FIELD_NAMES.FIRST_NAME]
                : ''
            }
          ></TextInput>
          <TextInput
            type='text'
            name={FIELD_NAMES.LAST_NAME}
            placeholder={t('surname')}
            value={values[FIELD_NAMES.LAST_NAME]}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors[FIELD_NAMES.LAST_NAME] && touched[FIELD_NAMES.LAST_NAME]
                ? errors[FIELD_NAMES.LAST_NAME]
                : ''
            }
          ></TextInput>
          <TextInput
            type='text'
            name={FIELD_NAMES.PERSONAL_ID}
            placeholder={t('personal number')}
            value={values[FIELD_NAMES.PERSONAL_ID]}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors[FIELD_NAMES.PERSONAL_ID] &&
              touched[FIELD_NAMES.PERSONAL_ID]
                ? errors[FIELD_NAMES.PERSONAL_ID]
                : ''
            }
          ></TextInput>
          <TextInput
            type='text'
            name={FIELD_NAMES.CONTACT_NUMBER}
            placeholder={t('contact number')}
            value={values[FIELD_NAMES.CONTACT_NUMBER]}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={
              errors[FIELD_NAMES.CONTACT_NUMBER] &&
              touched[FIELD_NAMES.CONTACT_NUMBER]
                ? errors[FIELD_NAMES.CONTACT_NUMBER]
                : ''
            }
          ></TextInput>
          <FileDropZone
            dropText={t('drop the file here')}
            text={t('upload an ID photo')}
            uploadedText={t('photo uploaded')}
            warningText={t('add an id photo')}
            onDropAdditional={setUploadIdImage}
            setIsUploaded={setIsIdImageUploaded}
          />
        </InputFieldsFrame>

        <AppButton
          text={t('add')}
          type='filled'
          disabled={isButtonDisabled}
          onClick={handleSubmit}
          isSmall={false}
          height='medium'
          htmlType='submit'
        ></AppButton>
      </form>
    </Container>
  )
}

export default AddRecipient

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

const InputFieldsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const ChooseTypeFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const FrameTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 715px;
  padding: 32px;
  gap: 24px;
  margin-top: 50px;
  margin-bottom: 50px;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.main_gray_10};
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media?.sm} {
    padding: 32px 16px;
  }
`
