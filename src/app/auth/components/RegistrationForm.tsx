'use client'
import AppButton from '@/common/components/appButton/AppButton'
import Checkbox from '@/common/components/checkbox/Checkbox'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled from 'styled-components'

type CheckboxOption = {
  value: string
}

const options: CheckboxOption[] = [
  { value: 'individual' },
  { value: 'legal person' },
]

type Props = {}

const RegistrationForm = (props: Props) => {
  const t = useTranslations('')
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleCheckboxChange = (value: string) => {
    setSelectedOption((prev) => (prev === value ? null : value))
  }

  return (
    <Container>
      <StyledH2>{t('choose user type')}</StyledH2>
      <Frame>
        {options.map((option, index) => (
          <UserType
            key={index}
            onClick={() => handleCheckboxChange(option.value)}
          >
            <Checkbox
              value={option.value}
              checked={selectedOption === option.value}
            />
            <UserTypeText>{t(`${option.value}`)}</UserTypeText>
          </UserType>
        ))}
      </Frame>

      <AppButton
        text={t('next')}
        type={'filled'}
        disabled={selectedOption === null}
      />
      <div>
        <StyledP>{t('already registered?')}</StyledP>
        <AppButton text={t('login')} type={'outlined'} disabled={false} />
      </div>
    </Container>
  )
}

export default RegistrationForm

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors?.background};
  margin: auto;
  width: 374px;
  min-height: 617px;
  border-radius: 28px;
  padding: 42px 12px 42px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-top: 2rem;

  @media (${({ theme }) => theme.media?.desktop}) {
    width: 65%;
    max-width: 560px;
    padding: 42px 120px 42px 120px;
  }
`

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

const UserType = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors?.disabled_gray};
  width: 148px;
  height: 120px;
  border-radius: 12px;
`

const UserTypeText = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  padding: 16px;
`
