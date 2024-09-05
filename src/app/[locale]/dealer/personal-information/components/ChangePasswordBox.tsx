import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import React, { useState } from 'react'
import styled from 'styled-components'
import TextInputField from './TextInputField'
import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import { useTranslations } from 'next-intl'
import { changeUserPassword } from '@/api/apiCalls'

type Props = {}

const ChangePasswordBox = (props: Props) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')

  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const t = useTranslations('')

  const [isSaved, setIsSaved] = useState(true)

  const handleChangePassword = async () => {
    if (newPassword === repeatNewPassword && oldPassword) {
      setPasswordsDontMatch(false)

      const response = await changeUserPassword(oldPassword, newPassword)

      if (response) {
        setSuccessMessage(true)
        setErrorMessage(false)
        setIsSaved(true)
      } else {
        setSuccessMessage(false)
        setErrorMessage(true)
      }
    } else {
      setPasswordsDontMatch(true)
    }
  }

  return (
    <Container>
      <InputFieldsHeader
        text={t('change the password')}
        onEdit={() => {}}
        onArrowDown={() => {}}
      />
      <InputFieldsFrame>
        <TextInputField
          label={t('current password')}
          placeholder={''}
          onChange={() => setIsSaved(false)}
          initialValue={oldPassword}
          value={oldPassword}
          setValue={setOldPassword}
          type='password'
        />
        <TextInputField
          label={t('new password')}
          placeholder={''}
          onChange={() => setIsSaved(false)}
          initialValue={newPassword}
          value={newPassword}
          setValue={setNewPassword}
          type='password'
        />
        <TextInputField
          label={t('repeat new password')}
          placeholder={''}
          onChange={() => setIsSaved(false)}
          initialValue={repeatNewPassword}
          value={repeatNewPassword}
          setValue={setRepeatNewPassword}
          type='password'
        />
      </InputFieldsFrame>
      {successMessage && (
        <Success>{t('password updated successfully')}</Success>
      )}
      {errorMessage && <Error>{t('password could not be updated')}</Error>}
      {passwordsDontMatch && <Error>{t('passwords do not match')}</Error>}
      {newPassword && oldPassword && repeatNewPassword && !isSaved && (
        <ButtonFrame>
          <FormSaveButton text={t('save')} onClick={handleChangePassword} />
        </ButtonFrame>
      )}
    </Container>
  )
}

export default ChangePasswordBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
const InputFieldsFrame = styled.div`
  padding: 0px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Error = styled.div`
  padding-left: 40px;

  color: ${({ theme }) => theme.colors?.red};
`

const Success = styled.div`
  padding-left: 40px;

  color: ${({ theme }) => theme.colors?.green};
`
