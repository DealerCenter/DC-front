import React from 'react'
import styled from 'styled-components'

type Props = { headerText: string; text: string; textBlue: string }

const DetailsBox = ({ headerText, text, textBlue }: Props) => {
  return (
    <Container>
      <TopFrame>
        <LabelBold>{headerText}</LabelBold>
        <LabelGray>{text}</LabelGray>
      </TopFrame>
      <LabelBlue>{textBlue}</LabelBlue>
    </Container>
  )
}

export default DetailsBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const LabelBold = styled.label`
  font-size: 19px;
  color: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white_72};
`

const LabelGray = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  color: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.white_42};
`

const LabelBlue = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  color: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.link_blue};
`
