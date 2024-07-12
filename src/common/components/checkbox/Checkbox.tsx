import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import checkboxEmpty from '@/assets/icons/checkboxEmpty.svg'
import checkboxFilled from '@/assets/icons/checkboxFilled.svg'

type Props = { checked: boolean; value: string }

const Checkbox = ({ checked, value }: Props) => {
  console.log(value)
  return (
    <Container>
      {checked ? (
        <Icon>
          <Image
            src={checkboxFilled}
            alt='checkbox filled'
            width={24}
            height={24}
          />
        </Icon>
      ) : (
        <Icon>
          <Image
            src={checkboxEmpty}
            alt='checkbox empty'
            width={24}
            height={24}
          />
        </Icon>
      )}
      <StyledInput type='checkbox' value={value} checked={checked} />
    </Container>
  )
}

export default Checkbox

const StyledInput = styled.input`
  display: none;
`

const Container = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div``
