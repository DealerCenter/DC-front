import { Link, usePathname } from '@/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  modalStyle: 'white' | 'black'
  item: {
    label: string
    href?: { pathname: string }
    locale?: string
    icon?: string
  }
}

const DropdownItem = ({ item, modalStyle }: Props) => {
  const pathname = usePathname()
  const t = useTranslations('')

  const { label, href, locale, icon } = item

  return (
    <Container
      href={href ? href : pathname}
      locale={locale && locale}
      modalStyle={modalStyle}
      isIcon={icon ? true : false}
    >
      <Frame>
        {icon && (
          <Icon>
            <Image src={icon} alt='icon' />
          </Icon>
        )}
        {label && t(label)}
      </Frame>
    </Container>
  )
}

export default DropdownItem

type ContainerProps = { modalStyle: 'white' | 'black'; isIcon?: boolean }

const Container = styled(Link)<ContainerProps>`
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  white-space: nowrap;
  border-radius: 8px;
  text-decoration: none;

  ${({ isIcon }) =>
    isIcon
      ? css`
          font-size: 13px;
          padding: 8px;
          width: 160px;
        `
      : css`
          font-size: 16px;
          padding: 10px 16px;
          width: unset;
        `}

  ${({ modalStyle }) =>
    modalStyle === 'white'
      ? css`
          color: ${({ theme }) => theme.colors?.text_black};
          &:hover {
            background-color: ${({ theme }) => theme.colors?.main_gray_04};
          }
        `
      : modalStyle === 'black' &&
        css`
          color: ${({ theme }) => theme.colors?.white};
          &:hover {
            background-color: ${({ theme }) => theme.colors?.white_10};
          }
        `}



  &:active {
    color: ${({ theme }) => theme.colors?.main_gray_100};
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
