import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import arrowDownIcon from '@/assets/icons/arrow/arrowDownWhite.svg'

type Props = { items: string[] }

const DropdownMenu = ({ items }: Props) => {
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
    <DropdownContainer ref={dropdownRef}>
      <DropdownIcon onClick={toggleDropdown}>
        <Image src={arrowDownIcon} alt='icon' />
      </DropdownIcon>
      <Container isOpen={isOpen}>
        {items.map((item, i) => (
          <Item key={`dropdownMenuItem1${i}`}>
            <Label>{item}</Label>
          </Item>
        ))}
      </Container>
    </DropdownContainer>
  )
}

export default DropdownMenu

const DropdownIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

type ContainerProps = { isOpen: boolean }

const Container = styled.div<ContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 56px;
  right: 0;
  background-color: ${({ theme }) => theme.colors?.button_black};
  border-radius: 8px;
  z-index: 1;
`
const Item = styled.div`
  height: 40px;
  padding: 10px 16px;
  margin: 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.hover_white};
  }
`
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 400;
`
