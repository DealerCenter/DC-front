import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import styled from 'styled-components'

import downIcon from '@/assets/icons/arrowDownWhite.svg'
import { css } from 'styled-components'
import Image from 'next/image'

type Props = {
  mainItems: { label: string; onClick: () => void }[]
  servicesItems: { label: string; onClick: () => void }[]
}

const MiddleBox = ({ mainItems, servicesItems }: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  const t = useTranslations('')

  const handleDropdownToggle = () => {
    setIsOpenDropdown((is) => !is)
  }

  return (
    <Container>
      <Item onClick={mainItems[0].onClick}>{mainItems[0].label}</Item>
      <Item onClick={handleDropdownToggle}>
        {mainItems[1].label}
        <Icon isOpen={isOpenDropdown}>
          <Image src={downIcon} alt='down arrow icon' />
        </Icon>
      </Item>
      {isOpenDropdown && (
        <Dropdown>
          {servicesItems.map((item, i) => (
            <DropdownItem key={`dropdownItem82jof8${i}`} onClick={item.onClick}>
              {item.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
      <Item onClick={mainItems[2].onClick}>{mainItems[2].label}</Item>
      <Item onClick={mainItems[3].onClick}>{mainItems[3].label}</Item>
    </Container>
  )
}

export default MiddleBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};

  padding-left: 48px;
`

const DropdownItem = styled.div`
  color: ${({ theme }) => theme.colors?.white};

  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  padding: 10px 16px;

  border-radius: ${({ theme }) => theme.radius?.lg};

  cursor: default;
`

const Item = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors?.white};

  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  padding: 16px;

  height: 56px;
  background-color: ${({ theme }) => theme.colors?.black};

  border-radius: ${({ theme }) => theme.radius?.lg};

  gap: 10px;

  cursor: pointer;
`
type IconProps = { isOpen: boolean }

const Icon = styled.div<IconProps>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`
