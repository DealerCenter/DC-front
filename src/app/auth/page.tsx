'use client'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import InputFormIndividual from './components/InputFormIndividual'
import ChooseUserType from './components/ChooseUserType'
import InputFormLegalPerson from './components/InputFormLegalPerson'
import AppButton from '@/common/components/appButton/AppButton'

type Props = {}

const Page = (props: Props) => {
  const [step, setStep] = useState<
    'chooseType' | 'individual' | 'legalPerson' | null
  >('chooseType')
  // const [step, setStep] = useState('chooseType')

  const steps = [
    {
      stepNumber: 1,
      stepName: 'chooseType',
      component: <ChooseUserType setStep={setStep} />,
    },
    {
      stepNumber: 2,
      stepName: 'individual',
      component: <InputFormIndividual setStep={setStep} />,
    },
    {
      stepNumber: 3,
      stepName: 'legalPerson',
      component: <InputFormLegalPerson setStep={setStep} />,
    },
  ]

  const activeStep = steps.filter((st) => st.stepName === step)

  return (
    <>
      <RegistrationForm>
        <>
          {activeStep[0].component}
          {step !== 'chooseType' && (
            <AppButton
              text='Back to Choose Type'
              type='filled'
              disabled={false}
              onClick={() => setStep('chooseType')}
            ></AppButton>
          )}
        </>
      </RegistrationForm>
      {/* <LoginForm /> */}
    </>
  )
}

export default Page
