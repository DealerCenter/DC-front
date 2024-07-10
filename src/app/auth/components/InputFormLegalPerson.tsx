import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import TextNav from '@/common/components/textNav/TextNav'
import LegalPersonForm1 from './RegistrationSteps.tsx/LegalPersonForm1'
import LegalPersonForm2 from './RegistrationSteps.tsx/LegalPersonForm2'
import FormStep3 from './RegistrationSteps.tsx/FormStep3'

import stepArrow from '@/app/assets/icons/stepArrow.svg'

type Props = {
  goToLogin: () => void
}

function InputFormLegalPerson({ goToLogin }: Props) {
  const t = useTranslations('')
  const [formStep, setFormStep] = useState(1)

  const steps = [
    {
      stepNumber: 1,
      stepName: 'legalPerson1',
      component: (
        <LegalPersonForm1 setFormStep={setFormStep} goToLogin={goToLogin} />
      ),
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

  const activeStep = steps.filter((step) => step.stepNumber === formStep)[0]

  return (
    <StyledDiv>
      <H2Bold>{t('register')}</H2Bold>
      <StepsContainer>
        {steps.map((step, i) => (
          <>
            {i > 0 && (
              <Image src={stepArrow} alt='step arrow' width={20} height={20} />
            )}
            <TextNav
              done={step.stepNumber < activeStep.stepNumber}
              onClick={() => {
                if (step.stepNumber < activeStep.stepNumber) {
                  setFormStep(step.stepNumber)
                }
              }}
              key={step.stepNumber}
              active={step.stepNumber === formStep}
            >
              {step.stepNumber.toString()}
            </TextNav>
          </>
        ))}
      </StepsContainer>
      {activeStep.component}
    </StyledDiv>
  )
}

export default InputFormLegalPerson

const H2Bold = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`

const StepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`
