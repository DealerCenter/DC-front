import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'

import DropdownItem from './DropdownItem'

type Props = {
  children: ReactNode
  items:
    | { href: { pathname: string }; locale: string; label: string }[]
    | { label: string }[]

  left?: number
  top?: number
}

const AppDropdown = ({ children, items, left, top }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownTrigger onClick={toggleDropdown}>{children}</DropdownTrigger>
      {isOpen && (
        <DropdownMenu left={left} top={top}>
          {items.map((item, i) => (
            <DropdownItem item={item} key={`${item.label}12ij${i}`} />
          ))}
        </DropdownMenu>
      )}
    </Dropdown>
  )
}

export default AppDropdown

const Dropdown = styled.div`
  border-radius: 10px;
  position: relative;
`
const DropdownTrigger = styled.div``

type DropdownMenuProps = { left?: number; top?: number }

const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors?.main_gray_100};
  padding: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 6px;
  gap: 6px;

  ${({ left }) =>
    left
      ? css`
          left: ${left}px;
        `
      : css`
          left: unset;
        `}

  ${({ top }) =>
    top
      ? css`
          top: ${top}px;
        `
      : css`
          top: unset;
        `}
`
