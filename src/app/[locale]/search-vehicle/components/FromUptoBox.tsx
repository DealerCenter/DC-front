import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = { type: string }

const FromUptoBox = ({ type }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <StyledInput type={type} placeholder={t('from')}></StyledInput>
      <StyledInput type={type} placeholder={t('up to')}></StyledInput>
    </Container>
  )
}

export default FromUptoBox

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors?.white};

  width: 114px;
  height: 40px;

  border-radius: ${({ theme }) => theme.radius?.lg};

  padding: 4px 4px 4px 10px;
  gap: 6px;
  border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
`
