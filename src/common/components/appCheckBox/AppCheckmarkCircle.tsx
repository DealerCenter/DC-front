import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import radioButtonEmtpy from '@/assets/icons/radioButton/radioButtonEmpty.svg'
import radioButtonFull from '@/assets/icons/radioButton/radioButtonFull.svg'

type Props = { isOn: boolean }

const AppCheckmarkCircle = ({ isOn }: Props) => {
  return (
    <Container>
      {isOn ? (
        <Image src={radioButtonFull} alt='checked icon' />
      ) : (
        <Image src={radioButtonEmtpy} alt='empty icon' />
      )}
    </Container>
  )
}

export default AppCheckmarkCircle

const Container = styled.div`
  width: 24px;
  height: 24px;
`
