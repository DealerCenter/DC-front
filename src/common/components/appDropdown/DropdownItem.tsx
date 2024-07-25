import { Link, usePathname } from '@/navigation'
import React from 'react'
import styled from 'styled-components'

type Props = {
  item: { href?: { pathname: string }; locale?: string; label: string }
}

const DropdownItem = ({ item }: Props) => {
  const pathname = usePathname()

  return (
    <Container
      href={item.href ? item.href : pathname}
      locale={item.locale && item.locale}
    >
      {item?.label}
    </Container>
  )
}

export default DropdownItem

const Container = styled(Link)`
  list-style: none;
  font-size: 16px;
  font-weight: 400;
  height: 20px;
  padding: 10px 16px;
  white-space: nowrap;
  /* margin: 6px; */
  border-radius: 6px;
  color: ${({ theme }) => theme.colors?.white};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.white_10};
  }

  &:active {
    color: ${({ theme }) => theme.colors?.main_gray_100};
  }
`
