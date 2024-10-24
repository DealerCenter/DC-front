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
    onClick?: () => void
    onChoose?: () => void
  }
  onItemClick?: (label?: string) => void
}

const DropdownItem = ({ item, modalStyle, onItemClick }: Props) => {
  const pathname = usePathname()
  const t = useTranslations('')
  const { label, href, locale, icon, onClick, onChoose } = item

  const handleClick = () => {
    onClick && onClick()
    onChoose && onChoose()
    onItemClick && onItemClick()
  }

  return (
    <>
      {href && locale ? (
        <LinkContainer
          href={href ? href : pathname}
          locale={locale && locale}
          modalStyle={modalStyle}
          icon={icon ? true : false}
          onClick={onClick ? onClick : () => {}}
        >
          <Frame>
            {icon && (
              <Icon>
                <Image src={icon} alt='icon' />
              </Icon>
            )}
            {label && label}
          </Frame>
        </LinkContainer>
      ) : (
        <Container
          modalStyle={modalStyle}
          icon={icon ? true : false}
          onClick={handleClick}
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
      )}
    </>
  )
}

export default DropdownItem

type ContainerProps = { modalStyle: 'white' | 'black'; icon?: boolean }

const Container = styled.div<ContainerProps>`
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  white-space: nowrap;
  border-radius: 8px;
  text-decoration: none;

  user-select: none;

  ${({ icon }) =>
    icon
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
          color: ${({ theme }) => theme.colors?.black};
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

  cursor: pointer;
`

const LinkContainer = styled(Link)<ContainerProps>`
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  white-space: nowrap;
  border-radius: 8px;
  text-decoration: none;

  ${({ icon }) =>
    icon
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
          color: ${({ theme }) => theme.colors?.black};
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
