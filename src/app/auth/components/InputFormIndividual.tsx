import React from 'react'

type Props = {
  setStep: React.Dispatch<
    React.SetStateAction<'chooseType' | 'individual' | 'legalPerson' | null>
  >
}

function InputsIndividual({ setStep }: Props) {
  return <div>InputsIndividual</div>
}

export default InputsIndividual
