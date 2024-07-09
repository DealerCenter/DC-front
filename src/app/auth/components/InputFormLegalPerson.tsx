import React, { useState } from 'react'
import FormStep3 from './RegistrationSteps.tsx/FormStep3'
import LegalPersonForm2 from './RegistrationSteps.tsx/LegalPersonForm2'
import LegalPersonForm1 from './RegistrationSteps.tsx/LegalPersonForm1'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import useForm from '../hooks/useForm'
import TextInput from '@/common/components/InputElements/TextInput'
import AppButton from '@/common/components/appButton/AppButton'
import TextNav from '@/common/components/textNav/TextNav'
import FileInput from '@/common/components/InputElements/FileInput'

type Props = {}

function InputFormLegalPerson(props: Props) {
  const t = useTranslations('')
  const [formStep, setFormStep] = useState(1)

  const steps = [
    {
      stepNumber: 1,
      stepName: 'legalPerson1',
      component: <LegalPersonForm1 setFormStep={setFormStep} />,
    },
    {
      stepNumber: 2,
      stepName: 'legalPerson2',
      component: <LegalPersonForm2 setFormStep={setFormStep} />,
    },
    {
      stepNumber: 3,
      stepName: 'legalPerson3',
      component: <FormStep3 setFormStep={setFormStep} />,
    },
  ]

  const activeStep = steps.filter((step) => step.stepNumber === formStep)

  return (
    <StyledDiv>
      <H2Bold>{t('register')}</H2Bold>
      <StepsContainer>
        {steps.map((step) => (
          <TextNav
            onClick={() => setFormStep(step.stepNumber)}
            key={step.stepNumber}
            active={step.stepNumber === formStep}
          >
            {step.stepNumber.toString()}
          </TextNav>
        ))}
      </StepsContainer>
      {activeStep[0].component}
      {/* <LegalPersonForm1 setFormStep={setFormStep}></LegalPersonForm1> */}
    </StyledDiv>
  )
}

export default InputFormLegalPerson

const H2Bold = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 6px;
`

const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 24px;
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`
