import React from 'react'
import AppDropdown from '../../../../appDropdown/AppDropdown'
import { usePathname } from '@/navigation'
import { useLocale } from 'next-intl'
import styled, { css } from 'styled-components'

type Props = { left: number; top: number; width?: number }

const LangChangeButton = ({ left = -3, top = 66, width }: Props) => {
  const pathname = usePathname()
  const locale = useLocale()

  const items = [
    { href: { pathname }, locale: 'ge', label: 'Ge' },
    { href: { pathname }, locale: 'en', label: 'En' },
    { href: { pathname }, locale: 'ru', label: 'Ru' },
  ]

  return (
    <AppDropdown items={items} left={left} top={top}>
      <Item width={width}>
        <Label>{locale.toUpperCase()}</Label>
      </Item>
    </AppDropdown>
  )
}

export default LangChangeButton

type ItemProps = { width?: number }

const Item = styled.div<ItemProps>`
  height: 44px;

  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: ${({ theme }) => theme.radius?.lg};
  color: ${({ theme }) => theme.colors?.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 56px;
        `}
`

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`
