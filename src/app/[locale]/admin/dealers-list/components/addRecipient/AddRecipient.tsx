import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import AppButton from '@/common/components/appButton/AppButton'
import FileDropZone from '@/common/components/inputElements/FileDropZone'
import TextInput from '@/common/components/inputElements/TextInput'
import ChooseButton from './components/ChooseButton'

import closeIcon from '@/assets/icons/closeX.svg'
import splitGrayLine from '@/assets/icons/splitGrayLine.svg'

type Props = { onClose: () => void }

const AddRecipient = ({ onClose }: Props) => {
  const t = useTranslations('')
  const [type, setType] = useState<'individual' | 'legalPerson'>('individual')
  const dummyValue = 'something'

  return (
    <Container>
      <Icon onClick={onClose}>
        <Image src={closeIcon} alt='close icon' width={12} height={12} />
      </Icon>
      <FrameTop>
        <H3Bold>{t('add recipient')}</H3Bold>
        <Label>{t('enter recipient data')}</Label>
        <ChooseTypeFrame>
          <ChooseButton
            text={t('individual')}
            isActive={type === 'individual'}
            onClick={() => setType('individual')}
          />
          <Image src={splitGrayLine} alt='line icon' />
          <ChooseButton
            text={t('legal person')}
            isActive={type === 'legalPerson'}
            onClick={() => setType('legalPerson')}
          />
        </ChooseTypeFrame>
      </FrameTop>
      {type === 'individual' && (
        <InputFieldsFrame>
          <TextInput
            type='text'
            name='name'
            placeholder='name'
            value={dummyValue}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
          <TextInput
            type='text'
            name='surname'
            placeholder='surname'
            value={dummyValue}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
          <TextInput
            type='text'
            name='personalNumber'
            placeholder='personalNumber'
            value={dummyValue}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
          <TextInput
            type='text'
            name='mobileNumber'
            placeholder='mobileNumber'
            value={dummyValue}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
          <FileDropZone
            dropText={t('drop the file')}
            text={t('upload an ID photo')}
            uploadedText={t('photo uploaded')}
            warningText={t('add an id photo')}
          />
        </InputFieldsFrame>
      )}
      {type === 'legalPerson' && (
        <InputFieldsFrame>
          <TextInput
            type='text'
            name='companyName'
            placeholder='companyName'
            value={'companyName'}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
          <TextInput
            type='text'
            name='contactNumber'
            placeholder='contactNumber'
            value={'contactNumber'}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
          <TextInput
            type='text'
            name='identificationNumber'
            placeholder='identificationNumber'
            value={'identificationNumber'}
            onChange={() => {}}
            onBlur={() => {}}
          ></TextInput>
        </InputFieldsFrame>
      )}

      <AppButton
        text={t('add')}
        type='filled'
        disabled={false}
        onClick={() => {}}
        isSmall={false}
        height='medium'
      ></AppButton>
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
