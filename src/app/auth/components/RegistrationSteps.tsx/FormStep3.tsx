import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import React from 'react'

import Image from 'next/image'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import useForm from '../../hooks/useForm'

import checkboxFilled from '@/assets/icons/checkboxFilled.svg'
import checkboxRed from '@/assets/icons/checkboxRed.svg'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const FormStep3 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextInput
        type='email'
        name='email'
        placeholder={t('email')}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='password'
        name='password'
        placeholder={t('password')}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        type='password'
        name='repeatPassword'
        placeholder={t('repeat password')}
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* ეს დროებით გავაკეთე ვიზუალურად რომ აღმექვა, მერე გადავაკეთებ// აქედან */}
      <PasswordErrorBox>
        <TextBox>
          <Image
            src={checkboxFilled}
            alt='checkbox filled'
            width={16}
            height={16}
          />
          <Text checked={true}>გამოიყენეთ რიცხვები</Text>
        </TextBox>
        <TextBox>
          <Image src={checkboxRed} alt='checkbox red' width={16} height={16} />
          <Text checked={false}>გამოიყენეთ დიდი სიმბოლოები</Text>
        </TextBox>
        <TextBox>
          <Image
            src={checkboxFilled}
            alt='checkbox filled'
            width={16}
            height={16}
          />
          <Text checked={true}>გამოიყენეთ პატარა სიმბოლოები</Text>
        </TextBox>
        <TextBox>
          <Image
            src={checkboxFilled}
            alt='checkbox filled'
            width={16}
            height={16}
          />
          <Text checked={true}>მინიმუმ 14 სიმბოლო</Text>
        </TextBox>
      </PasswordErrorBox>
      {/* ეს დროებით გავაკეთე ვიზუალურად რომ აღმექვა, მერე გადავაკეთებ// აქამდე */}
      <AppButton
        text={t('register')}
        type='filled'
        disabled={false}
        onClick={() => {
          setFormStep((step) => step + 1)
        }}
      />
    </StyledForm>
  )
}

export default FormStep3

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const PasswordErrorBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 350px;
  gap: 12px;
`
const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  gap: 2.5px;
  margin-top: 8px;
  margin-bottom: 0;
  height: 20px;
`

type TextProps = {
  checked?: boolean
}

const Text = styled.p<TextProps>`
  ${({ checked }) =>
    checked
      ? css`
          color: rgba(32, 32, 32, 1);
        `
      : css`
          color: rgba(207, 52, 31, 1);
        `}

  font-size: 11px;
  padding: 4px;
  font-weight: 400;
  margin: 0;
`
