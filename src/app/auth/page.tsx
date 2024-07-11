'use client'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import InputFormIndividual from './components/InputFormIndividual'
import ChooseUserType from './components/ChooseUserType'
import InputFormLegalPerson from './components/InputFormLegalPerson'
import AppButton from '@/common/components/appButton/AppButton'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from '@/common/components/header/BurgerHeader'
import Header from '@/common/components/header/Header'

type Props = {}

const Page = (props: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  // const [isLogin, setIsLogin] = useState<null | boolean>(null)
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

  return (
    <>
      {isMobile ? <BurgerHeader /> : <Header />}

      {authStep === 'login' ? (
        <LoginForm goToRegistration={() => setAuthStep('registration')} />
      ) : authStep === 'registration' ? (
        <RegistrationForm>
          <>
            {activeStep}
            {type !== 'chooseType' && (
              <AppButton
                text='Back to Choose Type'
                type='filled'
                disabled={false}
                onClick={() => setType('chooseType')}
              ></AppButton>
            )}
          </>
        </RegistrationForm>
      ) : (
        <div>Authorization page</div>
      )}
    </>
  )
}

export default Page
