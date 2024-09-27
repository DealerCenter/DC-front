import { ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import DropdownFilterBox from './components/DropdownFilterBox'
import { ShippingStatus } from '@/common/helpers/constants'

type Props = {
  children: ReactNode
  left?: number
  top?: number
  setShippingStatus: (arg: ShippingStatus) => void
}

const AppDropdownFilter = ({
  children,
  left,
  top,
  setShippingStatus,
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
  }, [])

  return (
    <Dropdown ref={dropdownRef}>
      <DropdownTrigger onClick={toggleDropdown}>{children}</DropdownTrigger>
      {isOpen && (
        <DropdownMenu left={left} top={top}>
          <DropdownFilterBox
            toggleDropdown={toggleDropdown}
            setShippingStatus={setShippingStatus}
          />
        </DropdownMenu>
      )}
    </Dropdown>
  )
}

export default AppDropdownFilter

const Dropdown = styled.div`
  position: relative;
`
const DropdownTrigger = styled.div``

type DropdownMenuProps = {
  left?: number
  top?: number
}

const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  padding: 0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 6px;
  z-index: 3;
  background-color: ${({ theme }) => theme.colors?.white};

  box-shadow: 0 8px 42px 0 ${({ theme }) => theme.colors?.main_gray_10};

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
