import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import uncheckedYellow from '@/assets/icons/uncheckedYellow.svg'

import {
  VERIFICATION_STATUS_NAME,
  VerificationStatusType,
} from '@/common/helpers/constants'

type Props = { verificationStatus: string }

const VerificationIcon = ({ verificationStatus }: Props) => {
  return (
    <Icon>
      {verificationStatus === VERIFICATION_STATUS_NAME.VERIFIED ? (
        <Image src={checkedGreen} alt='checked icon' width={20} height={20} />
      ) : verificationStatus === VERIFICATION_STATUS_NAME.UNVERIFIED ? (
        <Image src={uncheckedRed} alt='unchecked icon' width={20} height={20} />
      ) : (
        verificationStatus === VERIFICATION_STATUS_NAME.PENDING && (
          <Image
            src={uncheckedYellow}
            alt='pending icon'
            width={20}
            height={20}
          />
        )
      )}
    </Icon>
  )
}

export default VerificationIcon

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
