'use client'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import AppButton from '@/common/components/appButton/AppButton'
import CheckBox from '@/common/components/appCheckBox/Checkbox'

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
            <StyledCheckbox>
              <CheckBox
                isChecked={selectedOption === option.value}
                shape='circle'
              />
            </StyledCheckbox>
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
  gap: ${({ theme }) => theme.spacing?.lg};
`

type UserTypeProps = {
  selected: boolean
}

const UserType = styled.div<UserTypeProps>`
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_10};
  width: 148px;
  height: 120px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  ${({ selected }) =>
    selected &&
    css`
      border-color: ${({ theme }) => theme.colors?.main_gray_100};
    `};
`

const UserTypeText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 700;
  line-height: 19.2px;
  padding: ${({ theme }) => theme.spacing?.md};
`

const StyledCheckbox = styled.div`
  align-self: flex-end;

  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`
