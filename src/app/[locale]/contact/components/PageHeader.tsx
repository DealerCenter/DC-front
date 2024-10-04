import { useTranslations } from 'next-intl'
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  headerText: string
  text: string
  headerColor?: string
  textColor?: string
  width?: number
  isHeaderCentered?: boolean
}

const PageHeader = ({
  headerText,
  text,
  headerColor,
  textColor,
  width,
  isHeaderCentered,
}: Props) => {
  const t = useTranslations('')

  return (
    <Container width={width} isCentered={isHeaderCentered}>
      <Header color={headerColor}>{headerText}</Header>
      <Text color={textColor}>{text}</Text>
    </Container>
  )
}

export default PageHeader

type ContainerProps = { width?: number; isCentered?: boolean }

type ColorProps = {
  color?: string
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ isCentered }) =>
    isCentered
      ? css`
          align-items: center;
        `
      : css`
          align-items: unset;
        `}

  gap: ${({ theme }) => theme.spacing?.xl};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: unset;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    width: 343px;
  }
`

type HeaderProps = { color?: string }

const Header = styled.h2<HeaderProps>`
  margin: 0;
  font-size: 33px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: ${({ theme }) => theme.colors?.black};
        `}
`
const Text = styled.p<ColorProps>`
  margin: 0;
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};

  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : css`
          color: ${({ theme }) => theme.colors?.black};
        `}
`
