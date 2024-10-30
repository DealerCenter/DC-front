import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

import dropDownIcon from '@/assets/icons/arrowDown.svg'

type Props = {
  isOpen: boolean
  onClick?: () => void
  onClickWithEvent?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  isShowing?: boolean
}

const DropdownIcon = ({
  isOpen,
  onClick = () => {},
  onClickWithEvent,
  isShowing = true,
}: Props) => {
  return (
    <Container
      isOpen={isOpen}
      onClick={onClickWithEvent ? onClickWithEvent : onClick}
    >
      {isShowing && (
        <Image src={dropDownIcon} alt='down arrow icon' width={12} />
      )}
    </Container>
  )
}

export default DropdownIcon

type DropdownIconProps = { isOpen: boolean }

const Container = styled.div<DropdownIconProps>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}

  cursor: pointer;

  /* needed, so it is clickable in certain cases where other elements are overlapping */
  z-index: 10;
`
