import { ReactNode, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { ShippingStatus } from '@/common/helpers/constants'
import DropdownFilterBoxWithDealer from './components/withDealer/DropdownFilterBoxWithDealer'
import DropdownFilterBox from './components/withoutDealer/DropdownFilterBox'

type Props = {
  children: ReactNode
  left?: number
  top?: number
  setShippingStatus: (arg: ShippingStatus) => void
  setDealerId: (arg: number | undefined) => void
  setReceiverId: (arg: number | undefined) => void
  checkedShippingStatus: ShippingStatus
  setCheckedShippingStatus: (arg: ShippingStatus) => void
  checkedRecipientId: number | undefined
  setCheckedRecipientId: (arg: number | undefined) => void
  checkedDealerId: number | undefined
  setCheckedDealerId: (arg: number | undefined) => void
  isWithDealer?: boolean
  clearFilterStates: () => void
}

const AppDropdownFilter = ({
  children,
  left,
  top,
  setShippingStatus,
  setDealerId,
  setReceiverId,
  checkedShippingStatus,
  setCheckedShippingStatus,
  checkedDealerId,
  setCheckedDealerId,
  checkedRecipientId,
  setCheckedRecipientId,
  isWithDealer,
  clearFilterStates,
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
      {/* @ts-ignore */}
      <DropdownTrigger onClick={toggleDropdown}>
        {/* @ts-ignore */}
        {children}
      </DropdownTrigger>
      {isOpen && (
        <DropdownMenu left={left} top={top}>
          {isWithDealer ? (
            <DropdownFilterBoxWithDealer
              toggleDropdown={toggleDropdown}
              setShippingStatus={setShippingStatus}
              setDealerId={setDealerId}
              setReceiverId={setReceiverId}
              checkedShippingStatus={checkedShippingStatus}
              setCheckedShippingStatus={setCheckedShippingStatus}
              checkedRecipientId={checkedRecipientId}
              setCheckedRecipientId={setCheckedRecipientId}
              checkedDealerId={checkedDealerId}
              setCheckedDealerId={setCheckedDealerId}
              clearFilterStates={clearFilterStates}
            />
          ) : (
            <DropdownFilterBox
              toggleDropdown={toggleDropdown}
              setShippingStatus={setShippingStatus}
              setReceiverId={setReceiverId}
              checkedShippingStatus={checkedShippingStatus}
              setCheckedShippingStatus={setCheckedShippingStatus}
              checkedRecipientId={checkedRecipientId}
              setCheckedRecipientId={setCheckedRecipientId}
              clearFilterStates={clearFilterStates}
            />
          )}
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
