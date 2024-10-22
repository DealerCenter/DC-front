import React, { ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import DropdownItem from './DropdownItem'

type Props = {
  children: ReactNode
  modalStyle?: 'white' | 'black'
  items: { label: string }[]
  left?: number
  top?: number

  handleClose?: () => void
  width?: number
  isBorder?: boolean
  setActiveValue?: (arg: string) => void
  isDisabled?: boolean
  isNoActionOnClick?: boolean
}

const AppDropdownBasic = ({
  children,
  items,
  left,
  top,
  modalStyle = 'black',
  handleClose,
  width,
  isBorder,
  setActiveValue,
  isDisabled,
  isNoActionOnClick,
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

  const handleItemClick = (label?: string) => {
    !isNoActionOnClick && setIsOpen(false)
    handleClose && handleClose()

    setActiveValue && label && setActiveValue(label)
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
        <DropdownMenu
          modalStyle={modalStyle}
          left={left}
          top={top}
          onClick={() => {}}
          width={width}
          isBorder={isBorder}
        >
          {items &&
            items.map((item, i) => (
              <DropdownItem
                item={item}
                key={`${item.label}12ij${i}`}
                modalStyle={modalStyle}
                onItemClick={handleItemClick}
              />
            ))}
        </DropdownMenu>
      )}
    </Dropdown>
  )
}

export default AppDropdownBasic

const Dropdown = styled.div`
  position: relative;
`
const DropdownTrigger = styled.div``

type DropdownMenuProps = {
  left?: number
  top?: number
  modalStyle: 'white' | 'black'
  width?: number
  isBorder?: boolean
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
  ${({ modalStyle }) =>
    modalStyle === 'white'
      ? css`
          background-color: ${({ theme }) => theme.colors?.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.main_gray_100};
        `}

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
        
  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          width: unset;
        `}

  ${({ isBorder }) =>
    isBorder
      ? css`
          border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
        `
      : css`
          border: unset;
        `}
`