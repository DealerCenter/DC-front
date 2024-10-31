import React from 'react'
import styled from 'styled-components'

import theme from '@/app/[locale]/theme'
import clockIcon from '@/assets/icons/clock2Black.svg'
import Image from 'next/image'

type Props = {}

const DummyShipping = (props: Props) => {
  return (
    <Container>
      <IconBox>
        <Image src={clockIcon} alt='icon' />
      </IconBox>
      <Label>not working</Label>
    </Container>
  )
}

export default DummyShipping

const Container = styled.div`
  box-sizing: border-box;
  height: 42px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${theme.colors?.yellow};
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors?.black};
  font-size: 13px;
  font-weight: 700;
  padding: 8px;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
