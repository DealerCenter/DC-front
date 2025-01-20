import { useTranslations } from 'next-intl'
import React from 'react'
import styled from 'styled-components'

type Props = { children: any; headerText: string }

const BoxWithHeader = ({ children, headerText }: Props) => {
  const t = useTranslations('')

  return (
    <Box>
      <Header>{t(headerText)}</Header>
      <Line />
      {children}
    </Box>
  )
}

export default BoxWithHeader

const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  background-color: ${({ theme }) => theme.colors?.white};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: ${({ theme }) => theme.spacing?.xl};
`

const Header = styled.h6`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
`

const Line = styled.div`
  height: 1px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
`
