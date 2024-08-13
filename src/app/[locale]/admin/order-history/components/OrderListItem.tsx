import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import DetailsBox from './DetailsBox'
import CarImageAndModelBox from './CarImageAndModelBox'
import Image from 'next/image'

import grabHandle from '@/assets/icons/GrabHandle2x3Dots.svg'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import PersonFrameMobile from './PersonFrameMobile'
import { useTranslations } from 'next-intl'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import StatusAndDebtBoxMobile from './StatusAndDebtBoxMobile'

type Props = {
  imageLink: string
  item: {
    brand: string
    model: string
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

const OrderListItem = ({ imageLink, item, onClick, isEditing }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const [isChecked, setIsChecked] = useState(false)

  const {
    brand,
    model,
    year,
    vinCode,
    buyerFullName,
    buyerPhoneNumber,
    debt,
    arrivalState,
  } = item

  useEffect(() => {
    !isEditing && setIsChecked(false)
  }, [isEditing])

  const handleClick = () => {
    isEditing ? setIsChecked((is) => !is) : onClick()
  }

  return (
    <Container isSelected={isChecked} onClick={handleClick} isMobile={isMobile}>
      <Frame isMobile={isMobile}>
        {!isMobile && (
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
        )}
        {isMobile && (
          <StatusAndDebtBoxMobile arrivalState={arrivalState} amount={debt} />
        )}
        <CarImageAndModelBox
          imageLink={imageLink}
          brand={brand}
          model={model}
          year={year}
          vinCode={vinCode}
        />
      </Frame>

      {isMobile ? (
        <BottomFrameMobile>
          <PersonFrameMobile
            header={t('recipient')}
            fullName={buyerFullName}
            mobileNumber={buyerPhoneNumber}
          />
          <PersonFrameMobile
            header={t('dealer')}
            fullName={buyerFullName}
            mobileNumber={buyerPhoneNumber}
          />
        </BottomFrameMobile>
      ) : (
        <DetailsBox
          amount={debt}
          arrivalState={arrivalState}
          buyerFullName={buyerFullName}
          buyerPhoneNumber={buyerPhoneNumber}
          vinCode={vinCode}
        />
      )}
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

type IndexProp = { isSelected: boolean; isMobile: boolean }

const Container = styled.li<IndexProp>`
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 128px;

  padding: ${({ theme }) => theme.spacing?.md};

  ${({ isMobile, isSelected }) =>
    isMobile && !isSelected
      ? css`
          border-radius: ${({ theme }) => theme.radius?.lg};
          background-color: unset;
          border: 2px solid ${({ theme }) => theme.colors?.white};
        `
      : isMobile && isSelected
        ? css`
            border-radius: ${({ theme }) => theme.radius?.lg};
            background-color: ${({ theme }) => theme.colors?.main_gray_04};
            border: 2px solid ${({ theme }) => theme.colors?.main_gray_04};
          `
        : !isMobile
          ? css`
              border: 1px solid ${({ theme }) => theme.colors?.main_gray_10};
              border-top: 0;
            `
          : css`
              border: none;
            `}

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    height: unset;
    gap: 24px;
  }

  @media ${({ theme }) => theme.media?.notSm} {
    &:hover {
      background-color: ${({ theme }) => theme.colors?.main_gray_04};
    }
    &:active {
      background-color: ${({ theme }) => theme.colors?.main_gray_16};
    }
  }
`
type FrameProp = { isMobile: boolean }

const Frame = styled.div<FrameProp>`
  display: flex;
  flex-direction: row;

  gap: ${({ theme }) => theme.spacing?.sm};

  ${({ isMobile }) =>
    isMobile
      ? css`
          align-items: flex-start;
        `
      : css`
          align-items: center;
        `}

  @media ${({ theme }) => theme.media?.sm} {
    flex-direction: column;
    gap: 24px;
  }
`

const BottomFrameMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`