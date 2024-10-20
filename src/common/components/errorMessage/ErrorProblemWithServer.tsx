import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const ErrorProblemWithServer = (props: Props) => {
  const t = useTranslations('')
  return (
    <Container>
      <StyledP>{t('error while connecting to the server')}</StyledP>
    </Container>
  )
}

export default ErrorProblemWithServer

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px 50px;
`

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};
  margin: 0;
  text-align: center;
  line-height: 1.4;
`
