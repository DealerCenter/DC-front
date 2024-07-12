'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import AppButton from '@/common/components/appButton/AppButton'
import Checkbox from '@/common/components/checkbox/Checkbox'

type CheckboxOption = {
  title: string
  value: 'individual' | 'legalPerson'
}

const options: CheckboxOption[] = [
  { title: 'individual', value: 'individual' },
  { title: 'legal person', value: 'legalPerson' },
]

type Props = {
  goToLogin: () => void
  setType: React.Dispatch<
    React.SetStateAction<'chooseType' | 'individual' | 'legalPerson' | null>
  >
}

const ChooseUserType = ({ setType, goToLogin }: Props) => {
  const t = useTranslations('')
  const [selectedOption, setSelectedOption] = useState<
    'individual' | 'legalPerson' | null
  >(null)

  const handleCheckboxChange = (value: 'individual' | 'legalPerson') => {
    setSelectedOption((prev) => (prev === value ? null : value))
    // setSelectedOption(value)
  }

  return (
    <>
      <StyledH2>{t('choose user type')}</StyledH2>
      <Frame>
        {options.map((option, index) => (
          <UserType
            key={index}
            onClick={() => handleCheckboxChange(option.value)}
            selected={selectedOption === option.value}
          >
            <StyledCheckbox
              value={option.value}
              checked={selectedOption === option.value}
            />
            <UserTypeText>{t(`${option.title}`)}</UserTypeText>
          </UserType>
        ))}
      </Frame>

      <AppButton
        text={t('next')}
        type={'filled'}
        disabled={selectedOption === null}
        onClick={() => setType(selectedOption)}
      />
      <div>
        <StyledP>{t('already registered?')}</StyledP>
        <AppButton
          text={t('login')}
          type={'outlined'}
          disabled={false}
          onClick={() => goToLogin()}
        />
      </div>
    </>
  )
}

export default ChooseUserType

const StyledH2 = styled.h2`
  font-size: 28px;
`

const StyledP = styled.p`
  margin-bottom: 16px;
  margin-top: 24px;
`

const Frame = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

type UserTypeProps = {
  selected: boolean
}

const UserType = styled.div<UserTypeProps>`
  position: relative;
  border: 2px solid rgba(32, 32, 32, 0.1);
  width: 148px;
  height: 120px;
  border-radius: 12px;
  display: flex;

  ${({ selected }) =>
    selected &&
    css`
      border-color: rgba(32, 32, 32, 1);
    `}
`

const UserTypeText = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  padding: 16px;
`
const StyledCheckbox = styled(Checkbox)`
  /* position: absolute; */
  /* right: 16px; */
`
