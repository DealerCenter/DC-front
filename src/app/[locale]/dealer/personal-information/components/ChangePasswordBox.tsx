import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import { changeUserPassword } from '@/api/apiCalls'
import FormSaveButton from '@/common/components/appButton/FormSaveButton'
import InputFieldsHeader from '@/common/components/inputFieldsHeader/InputFieldsHeader'
import TextInputField from './TextInputField'

type Props = {}

const ChangePasswordBox = (props: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isSaved, setIsSaved] = useState(true)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatNewPassword, setRepeatNewPassword] = useState('')

  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)

  const t = useTranslations('')


  const handleChangePassword = async () => {
    if (newPassword === repeatNewPassword && oldPassword) {
      setPasswordsDoNotMatch(false)

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
      setPasswordsDoNotMatch(true)
    }
  }

  return (
    <Container>
      <InputFieldsHeader
        text={t('change the password')}
        onEdit={() => setIsOpenDropdown((is) => !is)}
        onArrowDown={() => setIsOpenDropdown((is) => !is)}
        isOpen={isOpenDropdown}
      />
      {isOpenDropdown && (
        <>
          <InputFieldsFrame>
            <TextInputField
              label={t('current password')}
              onChange={() => setIsSaved(false)}
              value={oldPassword}
              setValue={setOldPassword}
              type='password'
            />
            <TextInputField
              label={t('new password')}
              onChange={() => setIsSaved(false)}
              value={newPassword}
              setValue={setNewPassword}
              type='password'
            />
            <TextInputField
              label={t('repeat new password')}
              onChange={() => setIsSaved(false)}
              value={repeatNewPassword}
              setValue={setRepeatNewPassword}
              type='password'
            />
          </InputFieldsFrame>
          {successMessage && (
            <Success>{t('password updated successfully')}</Success>
          )}
          {errorMessage && <Error>{t('password could not be updated')}</Error>}
          {passwordsDoNotMatch && <Error>{t('passwords do not match')}</Error>}
          {newPassword && oldPassword && repeatNewPassword && !isSaved && (
            <ButtonFrame>
              <FormSaveButton text={t('save')} onClick={handleChangePassword} />
            </ButtonFrame>
          )}
        </>
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
