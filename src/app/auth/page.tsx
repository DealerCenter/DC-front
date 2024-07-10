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
  const [isLogin, setIsLogin] = useState(true)
  const [type, setType] = useState<
    'chooseType' | 'individual' | 'legalPerson' | null
  >('chooseType')

  const activeStep =
    type === 'individual' ? (
      <InputFormIndividual goToLogin={() => setIsLogin(true)} />
    ) : type === 'legalPerson' ? (
      <InputFormLegalPerson goToLogin={() => setIsLogin(true)} />
    ) : (
      <ChooseUserType setType={setType} goToLogin={() => setIsLogin(true)} />
    )

  return (
    <>
      {isMobile ? <BurgerHeader /> : <Header />}
      {isLogin ? (
        <LoginForm goToRegistration={() => setIsLogin(false)} />
      ) : (
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
      )}
    </>
  )
}

export default Page
