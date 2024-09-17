import theme from '@/app/[locale]/theme'
import DropdownInputField from '@/common/components/inputElements/DropdownInputField'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

type Props = { label: string; placeholder: string }

const LabelAndDropdownPair = ({ label, placeholder }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const isTablet = useMediaQuery({ query: theme.media?.md })

  return (
    <Container>
      <Label>{label}</Label>
      <DropdownInputField
        placeholder={placeholder}
        backgroundColor='white'
        width={isMobile ? 343 : isTablet ? 257 : 377}
        height={48}
        fontSize={13}
      />
    </Container>
  )
}

export default LabelAndDropdownPair

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`

const Label = styled.label`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};

  @media ${({ theme }) => theme.media?.sm} {
    font-size: ${({ theme }) => theme.fontSizes?.small_13};
  }
`
