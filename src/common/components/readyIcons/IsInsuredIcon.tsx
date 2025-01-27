import Image from 'next/image'
import React from 'react'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import styled from 'styled-components'

type Props = { isInsured: boolean }

const IsInsuredIcon = ({ isInsured }: Props) => {
  return (
    <Icon>
      {isInsured ? (
        <Image src={checkedGreen} alt='checked icon' width={20} height={20} />
      ) : (
        <Image src={uncheckedRed} alt='unchecked icon' width={20} height={20} />
      )}
    </Icon>
  )
}

export default IsInsuredIcon

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`
