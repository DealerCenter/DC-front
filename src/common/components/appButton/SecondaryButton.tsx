import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

type Props = { text: string; onClick: () => void; icon: string; width?: number }

const SecondaryButton = ({ text, onClick, icon, width }: Props) => {
  return (
    <Container onClick={onClick} width={width}>
      <IconBox>
        <Image src={icon} alt='icon' />
      </IconBox>
      <Label>{text}</Label>
    </Container>
  )
}

export default SecondaryButton

type ContainerProps = { width?: number }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors?.main_gray_56};
  border-radius: 12px;
  padding: 0 20px 0 14px;
  gap: 6px;

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: unset;
        `};

  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors?.main_gray_16};
  }

  cursor: pointer;
  user-select: none;
`
const Label = styled.label`
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`
