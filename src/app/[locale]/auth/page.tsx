'use client'
import Header from '@/common/components/header/Header'
import { useState } from 'react'
import AuthLanding from './components/AuthLanding'
import ChooseUserType from './components/ChooseUserType'
import InputFormIndividual from './components/InputFormIndividual'
import InputFormLegalPerson from './components/InputFormLegalPerson'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'

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
