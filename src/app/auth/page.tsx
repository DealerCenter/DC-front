'use client'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'

type Props = {}

const Page = (props: Props) => {
  const [step, setStep] = useState(0)

  const steps = [
    {
      stepNumber: 1,
      stepName: 'chooseType',
      component: <RegistrationForm />,
    },
    {
      stepNumber: 2,
      stepName: 'chooseType',
      component: <LoginForm setStep={setStep} />,
    },
  ]
  const activeStep = steps.filter((st) => st.stepNumber === step)
  return (
    <>
      {/* {activeStep[0].component} */}
      {/* <LoginForm /> */}
      <RegistrationForm />
    </>
  )
}

export default Page
