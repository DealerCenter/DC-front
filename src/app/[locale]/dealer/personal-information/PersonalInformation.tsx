import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import HeaderH4Bold from '../../../../common/components/textComponents/HeaderH4Bold'
import ChangePasswordBox from './components/ChangePasswordBox'
import { useUserData } from '@/common/store/userDataStore'

type Props = {}

// TEMPORARY
const isJuridical = false

const PersonalInformation = (props: Props) => {
  const t = useTranslations('')
  const { userData } = useUserData()
  // const [isInfoSaved, setIsInfoSaved] = useState(true)
  // const [isPasswordSaved, setIsPasswordSaved] = useState(true)
  // const [isContactInfoSaved, setIsContactInfoSaved] = useState(true)

  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (userData) {
      setEmail(userData?.email)
      setPhoneNumber(userData?.phoneNumber)
      setAddress(userData?.address)
    }
  }, [userData])

  if (!userData) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <HeaderH4Bold text={t('personal information')} />
      <Frame>
        {/* {isJuridical ? (
          <>
            <InputFieldsBox
              headerText={t('contact information')}
              Label1={t('company name')}
              Label2={t('identification number')}
              Label3={t('address')}
              initialValue1={email}
            />
            <InputFieldsBox
              headerText={t('contact info of representative')}
              Label1={t('email')}
              Label2={t('cell phone')}
              Label3={t('address')}
              initialValue1={email}
            />
          </>
        ) : (
          <InputFieldsBox
            headerText={t('contact information')}
            Label1={t('email')}
            Label2={t('cell phone')}
            Label3={t('address')}
            initialValue1={email}
            initialValue2={phoneNumber}
            initialValue3={address}
          />
        )} */}
        <ChangePasswordBox />
      </Frame>
    </Container>
  )
}

export default PersonalInformation

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: 16px;
  gap: 24px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ButtonFrame = styled.div`
  display: flex;
  justify-content: flex-end;
`
