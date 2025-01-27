import React from 'react'
import styled from 'styled-components'

type Props = { header: string; text: string }

const ToolTipTextWithHeader = ({ header, text }: Props) => {
  return (
    <Container>
      <Header>{header}</Header>
      <Label>{text}</Label>
    </Container>
  )
}

export default ToolTipTextWithHeader

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  gap: 4px;
`

const Header = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  color: rgba(52, 64, 84, 1);

  cursor: default;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.small};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: rgba(102, 112, 133, 1);

  cursor: default;
`
