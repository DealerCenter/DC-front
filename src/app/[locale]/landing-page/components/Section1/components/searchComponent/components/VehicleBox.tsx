import React from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styled, { css } from 'styled-components'

import theme from '@/app/[locale]/theme'
import CheckboxCircle from '@/common/components/appCheckBox/CheckboxCircle'

type Props = {
  isActive: boolean
  label: string
  icon: string
  iconSmall: string
  onClick: () => void
}

const VehicleBox = ({ isActive, label, icon, iconSmall, onClick }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <Container isActive={isActive} onClick={onClick}>
      <IconAndTextBox>
        <Icon>
          <Image src={isMobile ? iconSmall : icon} alt='icon' />
        </Icon>
        {!isMobile && <Text isActive={isActive}>{label}</Text>}
      </IconAndTextBox>
      <CheckboxCircle isChecked={isActive} />
    </Container>
  )
}

export default VehicleBox

type ContainerProps = { isActive: boolean }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: 12px 12px 12px 16px;
  height: 66px;
  width: 368px;

  ${({ isActive }) =>
    isActive
      ? css`
          border: 2px solid ${({ theme }) => theme.colors?.button_black};
        `
      : css`
          border: 2px solid ${({ theme }) => theme.colors?.button_black_04};
        `};

  @media ${({ theme }) => theme.media?.md} {
    width: 288px;
  }

  @media ${({ theme }) => theme.media?.sm} {
    width: 109px;
    height: 56px;
  }
`

const IconAndTextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const Icon = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`

type TextProps = { isActive: boolean }

const Text = styled.label<TextProps>`
  font-size: 14px;
  font-weight: 700;

  ${({ isActive }) =>
    isActive
      ? css`
          color: ${({ theme }) => theme.colors?.button_black};
        `
      : css`
          color: ${({ theme }) => theme.colors?.button_black_56};
        `}
`
