import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AppButton from '@/common/components/appButton/AppButton'
import FileDropZone from '@/common/components/InputElements/FileDropZone'
import TextInput from '@/common/components/InputElements/TextInput'
import ChooseButton from '../../../../../../common/components/appButton/ChooseButton'

import closeIcon from '@/assets/icons/closeX.svg'
import splitGrayLine from '@/assets/icons/splitGrayLine.svg'
import useAddRecipients, { FIELD_NAMES } from './hooks/useAddRecipient'
import { unVerifyReceiver, verifyReceiver } from '@/api/apiCalls'
import { message } from 'antd'

type Props = {
  onClose: () => void
  receiverData?: {
    id: number
    firstName: string
    lastName: string
    personalId: string
    phoneNumber: string
    createdAt: string
    verificationStatus: string
    idImageUrl: string
  }
  getOrderData?: () => void
  setUpdatedSuccessfully: (arg: boolean) => void
}

const AddRecipient = ({
  onClose,
  receiverData,
  setUpdatedSuccessfully,
  getOrderData,
}: Props) => {
  const [isIdImageUploaded, setIsIdImageUploaded] = useState(false)

  const t = useTranslations('')

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    setUploadIdImage,
    setFieldValue,
    isButtonDisabled,
    isReadOnly,
    setIsReadOnly,
  } = useAddRecipients(receiverData && receiverData, setUpdatedSuccessfully)

  const isButtonDisabledNative =
    isButtonDisabled || (!receiverData && !isIdImageUploaded)

  useEffect(() => {
    !receiverData && setIsReadOnly(false)
  }, [receiverData])

  return (
    <Container>
      <Icon onClick={onClose}>
        <Image src={closeIcon} alt='close icon' width={12} height={12} />
      </Icon>

      <FrameTop>
        <H3Bold>
          {isReadOnly ? t('recipient person') : t('add recipient')}
        </H3Bold>

        <Label>
          {isReadOnly ? t('recipient data') : t('enter recipient data')}
        </Label>
        {!receiverData && (
          <ChooseTypeFrame>
            <ChooseButton
              text={t('individual')}
              isActive={!values[FIELD_NAMES.IS_JURIDICAL]} // if not juridical, it's individual
              onClick={() => setFieldValue(FIELD_NAMES.IS_JURIDICAL, false)}
            />
            <Image src={splitGrayLine} alt='line icon' />
            <ChooseButton
              text={t('legal person')}
              isActive={!!values[FIELD_NAMES.IS_JURIDICAL]} // if juridical, it's legal person
              onClick={() => setFieldValue(FIELD_NAMES.IS_JURIDICAL, true)}
            />
          </ChooseTypeFrame>
        )}
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
          hasLabel
          isDisabled={isReadOnly}
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
          hasLabel
          isDisabled={isReadOnly}
        ></TextInput>
        <TextInput
          type='text'
          name={FIELD_NAMES.PERSONAL_ID}
          placeholder={t('personal number')}
          value={values[FIELD_NAMES.PERSONAL_ID]}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={
            errors[FIELD_NAMES.PERSONAL_ID] && touched[FIELD_NAMES.PERSONAL_ID]
              ? errors[FIELD_NAMES.PERSONAL_ID]
              : ''
          }
          hasLabel
          isDisabled={isReadOnly}
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
          hasLabel
          isDisabled={isReadOnly}
        ></TextInput>

        {isReadOnly ? (
          <Image
            src={receiverData?.idImageUrl ?? ''}
            alt='photo'
            width={350}
            height={200}
          />
        ) : (
          <FileDropZone
            dropText={t('drop the file here')}
            text={t('upload an ID photo')}
            uploadedText={t('photo uploaded')}
            warningText={t('add an id photo')}
            onDropAdditional={setUploadIdImage}
            setIsUploaded={setIsIdImageUploaded}
          />
        )}
      </InputFieldsFrame>

      {isReadOnly && (
        <AppButton
          text={t('edit')}
          onClick={() => setIsReadOnly(false)}
          type='filled'
        />
      )}

      {!isReadOnly && (
        <>
          <AppButton
            text={receiverData ? t('update information') : t('add')}
            type='filled'
            disabled={isButtonDisabledNative}
            onClick={handleSubmit}
            isSmall={false}
            height='medium'
            htmlType='submit'
          />
        </>
      )}
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
  gap: 14px;
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
  /* max-height: 715px; */
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
