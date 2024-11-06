import Image from 'next/image'
import React from 'react'

import search from '@/assets/icons/search.svg'
import styled, { css } from 'styled-components'

type Props = { onClick: () => void; height?: number; width?: number }

const SearchButton = ({ onClick, height, width }: Props) => {
  return (
    <Container onClick={onClick} height={height} width={width}>
      <Image width={20} height={20} src={search} alt='search icon' />
    </Container>
  )
}

export default SearchButton

type ContainerProps = { height?: number; width?: number }

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid ${({ theme }) => theme.colors?.white_24};
  border-radius: 12px;

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : css`
          height: 40px;
        `}

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: 40px;
        `}

  cursor: pointer;
`
