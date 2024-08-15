import { useRouter } from '@/navigation'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

import person from '@/assets/icons/person.svg'

type Props = { text?: string }

const LoginButton = ({ text }: Props) => {
  const router = useRouter()

  return (
    <Item
      onClick={() => router.push('/auth')}
      isText={typeof text === 'string'}
    >
      <Image width={20} height={20} src={person} alt='person icon' />
      {text && <Text>{text}</Text>}
    </Item>
  )
}

export default LoginButton

type ItemProps = {
  isText: boolean
}

const Item = styled.div<ItemProps>`
  box-sizing: border-box;
  height: 44px;
  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  gap: 10px;

  ${({ isText }) =>
    isText
      ? css`
          width: unset;
          padding: 0 16px;
        `
      : css`
          width: 56px;
          padding: unset;
        `}

  cursor: pointer
`
const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};
`
