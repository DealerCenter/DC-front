import Image from 'next/image'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import copyIcon from '@/assets/icons/copyIcons/copy.svg'
import copyIconFull from '@/assets/icons/copyIcons/copyFull.svg'

type Props = { textToCopy: string }

const CopyButton = ({ textToCopy }: Props) => {
  const [isActive, setIsActive] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsActive(true)
      setTimeout(() => setIsActive(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <IconBox onClick={copyToClipboard} isActive={isActive}>
      {isActive ? (
        <Image src={copyIconFull} alt='copy icon' />
      ) : (
        <Image src={copyIcon} alt='copy icon' />
      )}
    </IconBox>
  )
}

export default CopyButton

type IconBoxProps = { isActive: boolean }

const IconBox = styled.div<IconBoxProps>`
  position: relative;
  width: 56px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 300ms ease-in-out;

  @media ${({ theme }) => theme.media?.notSm} {
    &:hover {
      background-color: ${({ theme }) => theme.colors?.main_gray_10};
    }
  }

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_10};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.white};
        `}
`

const Bubble = styled.div`
  position: absolute;
  top: -35px;
  left: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  color: ${({ theme }) => theme.colors?.text_black};
  background-color: ${({ theme }) => theme.colors?.main_gray_16};
  border-radius: ${({ theme }) => theme.radius?.lg};
  font-size: 13px;
  font-weight: 700;
`
