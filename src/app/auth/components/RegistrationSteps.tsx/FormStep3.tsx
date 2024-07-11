import AppButton from '@/common/components/appButton/AppButton'
import TextInput from '@/common/components/InputElements/TextInput'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import useForm from '../../hooks/useForm'

import { number } from 'yup'
import ValidateTextBox from '@/common/components/passwordValidateTextBox/ValidateTextBox'
import usePasswordValidation from '../../hooks/usePasswordValidation'

type Props = { setFormStep: React.Dispatch<React.SetStateAction<number>> }

const FormStep3 = ({ setFormStep }: Props) => {
  const t = useTranslations('')
  const { values, handleBlur, handleChange, handleSubmit } = useForm()

  const criteria = usePasswordValidation(values.password)

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

      <PasswordErrorBox>
        <ValidateTextBox text={t('use numbers')} isChecked={criteria.number} />
        <ValidateTextBox
          text={t('use uppercase characters')}
          isChecked={criteria.uppercase}
        />
        <ValidateTextBox
          text={t('use lowercase characters')}
          isChecked={criteria.lowercase}
        />
        <ValidateTextBox
          text={t('at least 14 characters')}
          isChecked={criteria.length}
        />
      </PasswordErrorBox>
      <TextInput
        type='password'
        name='repeatPassword'
        placeholder={t('repeat password')}
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <AppButton
        text={t('register')}
        type='filled'
        disabled={false}
        onClick={() => {}}
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
// const TextBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   /* justify-content: center; */
//   gap: 2.5px;
//   margin-top: 8px;
//   margin-bottom: 0;
//   height: 20px;
// `

// type TextProps = {
//   checked?: boolean
// }

// const Text = styled.p<TextProps>`
//   ${({ checked }) =>
//     checked
//       ? css`
//           color: rgba(32, 32, 32, 1);
//         `
//       : css`
//           color: rgba(207, 52, 31, 1);
//         `}

//   font-size: 11px;
//   padding: 4px;
//   font-weight: 400;
//   margin: 0;
// `
