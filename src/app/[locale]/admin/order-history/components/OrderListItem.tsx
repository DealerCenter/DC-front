import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import DetailsBox from './DetailsBox'
import CarImageAndModelBox from './CarImageAndModelBox'
import Image from 'next/image'

import grabHandle from '@/assets/icons/GrabHandle2x3Dots.svg'
import CheckBox from '@/common/components/checkbox/CheckBox'

type Props = {
  imageLink: string
  index: number
  item: {
    brand: string
    year: string
    vinCode: string
    buyerFullName: string
    buyerPhoneNumber: string
    debt: number
    arrivalState: string
  }
  onClick: () => void
  isEditing: boolean
}

const OrderListItem = ({
  imageLink,
  item,
  index,
  onClick,
  isEditing,
}: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  const {
    brand,
    year,
    vinCode,
    buyerFullName,
    buyerPhoneNumber,
    debt,
    arrivalState,
  } = item

  const handleClick = () => {
    onClick()
    isEditing && setIsChecked((is) => !is)
  }

  return (
    <Container index={index} onClick={handleClick}>
      <Frame>
        <CheckboxFrame>
          {isEditing && (
            <>
              <IconBox>
                <Image src={grabHandle} alt='grab handle icon' />
              </IconBox>
              <IconBox>
                <CheckBox isChecked={isChecked} />
              </IconBox>
            </>
          )}
        </CheckboxFrame>
        <CarImageAndModelBox imageLink={imageLink} brand={brand} year={year} />
      </Frame>
      <DetailsBox
        amount={debt}
        arrivalState={arrivalState}
        buyerFullName={buyerFullName}
        buyerPhoneNumber={buyerPhoneNumber}
        vinCode={vinCode}
      />
    </Container>
  )
}

export default OrderListItem

const CheckboxFrame = styled.div`
  width: 56px;
  display: flex;
  flex-direction: row;
`

const IconBox = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`

type IndexProp = { index: number }

const Container = styled.li<IndexProp>`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  border-radius: 12px;

  padding: ${({ theme }) => theme.spacing?.md};
  flex: 1;

  ${({ index }) =>
    index !== 0
      ? css`
          border: 0px;
          border-top: 1px;
          border-style: solid;
          border-color: ${({ theme }) => theme.colors?.main_gray_04};
        `
      : css`
          border: none;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column-reverse;
    height: unset;
    gap: 24px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors?.main_gray_16};
  }
`

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.sm};

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 24px;
  }
`
