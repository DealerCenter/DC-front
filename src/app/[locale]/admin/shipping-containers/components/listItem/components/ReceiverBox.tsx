import VerificationIcon from '@/common/components/readyIcons/VerificationIcon'
import { VERIFICATION_STATUS_NAME } from '@/common/helpers/constants'
import React from 'react'
import styled from 'styled-components'

type Props = {
  verificationStatus: VERIFICATION_STATUS_NAME
  fullName: string
  phoneNumber: string
}

const ReceiverBox = ({ verificationStatus, fullName, phoneNumber }: Props) => {
  return (
    <Frame>
      <IconBox>
        <VerificationIcon verificationStatus={verificationStatus} />
      </IconBox>
      <Box>
        <TextBold>{fullName}</TextBold>
        <Text>{phoneNumber}</Text>
      </Box>
    </Frame>
  )
}

export default ReceiverBox

const Frame = styled.div`
  width: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`
const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.black};
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.black};
`
