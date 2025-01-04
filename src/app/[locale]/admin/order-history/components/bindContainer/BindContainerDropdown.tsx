import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import BindContainerBox from './components/BindContainerBox'
import { CONTAINER_GET_RES } from '@/api/apiTypes'

type Props = {
  children: any
  left?: number
  top?: number
  isDisabled?: boolean
  setContainerToBind: (arg: CONTAINER_GET_RES | null) => void
}

const BindContainerDropdown = ({
  children,
  left,
  top,
  isDisabled,
  setContainerToBind,
}: Props) => {
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
    //eslint-disable-next-line
  }, [])

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownTrigger onClick={isDisabled ? () => {} : toggleDropdown}>
        {children}
      </DropdownTrigger>
      {isOpen && (
        <DropdownMenu left={left} top={top} onClick={() => {}}>
          <BindContainerBox
            setContainerToBind={setContainerToBind}
            setIsOpen={setIsOpen}
          />
        </DropdownMenu>
      )}
    </Dropdown>
  )
}

export default BindContainerDropdown

const Dropdown = styled.div`
  position: relative;
`
const DropdownTrigger = styled.div``

type DropdownMenuProps = {
  left?: number
  top?: number
}

const DropdownMenu = styled.div<DropdownMenuProps>`
  box-sizing: border-box;
  position: absolute;
  padding: 0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 6px;
  z-index: 3;

  box-shadow: 0 8px 42px 0 ${({ theme }) => theme.colors?.main_gray_10};
  background-color: ${({ theme }) => theme.colors?.white};

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
