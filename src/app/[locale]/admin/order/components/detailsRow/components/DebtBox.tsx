import BasicButton from '@/common/components/appButton/BasicButton'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import infoIcon from '@/assets/icons/infoIconEmpty.svg'
import { useTranslations } from 'next-intl'
import TextInput from '@/common/components/inputElements/TextInput'

type Props = { isEditing: boolean }

const DebtBox = ({ isEditing }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <DebtFrame>
        <Text16BoldGray>{t('current debt')}</Text16BoldGray>
        <DebtLabelBox>
          {isEditing ? (
            <TextInput
              width={100}
              height={48}
              type='text'
              name='current debt'
              placeholder={t('')}
              value={''}
              onChange={() => {}}
              onBlur={() => {}}
              fontWeight='bold'
              fontSize={13}
            />
          ) : (
            <DebtLabel>$ 1,600</DebtLabel>
          )}
          <Image src={infoIcon} alt='info icon' />
        </DebtLabelBox>
      </DebtFrame>
      {!isEditing && (
        <BasicButton onClick={() => {}} height={56}>
          {t('repay debt')}
        </BasicButton>
      )}
    </Container>
  )
}

export default DebtBox

const Text16BoldGray = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const Container = styled.div`
  box-sizing: border-box;
  width: 328px;
  display: flex;
  align-items: flex-start;

  flex-direction: column;
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: 32px;
  justify-content: space-between;

  @media ${({ theme }) => theme.media?.md} {
    width: 226px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    align-items: center;
    padding: 16px;
    flex-direction: row;
    width: 343px;
  }
`
const DebtFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: flex-start;

  @media ${({ theme }) => theme.media?.sm} {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing?.lg};
  }
  width: 150px;
`

const DebtLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`

const DebtLabel = styled.label`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.black};
  white-space: nowrap;
`
