'use client'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import InputFormIndividual from './components/InputFormIndividual'
import ChooseUserType from './components/ChooseUserType'
import InputFormLegalPerson from './components/InputFormLegalPerson'
import AppButton from '@/common/components/appButton/AppButton'
import Header from '@/common/components/header/Header'
import AuthLanding from './components/AuthLanding'
import { useUserData } from '@/common/store/userDataStore'

type Props = {}

const Page = (props: Props) => {
  const [authStep, setAuthStep] = useState<
    'landing' | 'registration' | 'login'
  >('landing')
  const [type, setType] = useState<
    'chooseType' | 'individual' | 'legalPerson' | null
  >('chooseType')

  const activeStep =
    type === 'individual' ? (
      <InputFormIndividual goToLogin={() => setAuthStep('login')} />
    ) : type === 'legalPerson' ? (
      <InputFormLegalPerson goToLogin={() => setAuthStep('login')} />
    ) : (
      <ChooseUserType
        setType={setType}
        goToLogin={() => setAuthStep('login')}
      />
    )

  const handleGoToRegistration = () => {
    setType('chooseType')
    setAuthStep('registration')
  }

  return (
    <>
      {authStep === 'login' ? (
        <>
          <Header />
          <LoginForm goToRegistration={handleGoToRegistration} />
        </>
      ) : authStep === 'registration' ? (
        <>
          <Header />
          <RegistrationForm>{activeStep}</RegistrationForm>
        </>
      ) : (
        <AuthLanding
          goToLogin={() => setAuthStep('login')}
          goToRegistration={handleGoToRegistration}
        />
      )}
    </>
  )
}

export default Page
