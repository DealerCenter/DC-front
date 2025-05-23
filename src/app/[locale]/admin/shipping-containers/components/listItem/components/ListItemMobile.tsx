import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import calendarIcon from '@/assets/icons/calendar.svg'
import { useTranslations } from 'next-intl'

type Props = {
  onClick: () => void
  brandName: string
  link: string
  departureDate: string
  arrivalDate: string
  containerId: number

  isDropdownOpen: boolean
  setIsDropdownOpen: (arg: boolean) => void
}

const ListItemMobile = ({
  onClick,
  brandName,
  link,
  departureDate,
  arrivalDate,
  containerId,
  isDropdownOpen,
  setIsDropdownOpen,
}: Props) => {
  const t = useTranslations('')

  return (
    <Container onClick={onClick}>
      <NameFrame>
        <LabelAndIconBox>
          <NameLabel>{brandName}</NameLabel>
        </LabelAndIconBox>
        {/* <IconBox>
          <Icon>
            <Image
              src={editPencil}
              alt='edit icon'
              onClick={() => {
                console.log('edit ', brandName)
              }}
            />
          </Icon>
          <Icon>
            <Image
              src={trashCan}
              alt='trash icon'
              onClick={() => {
                console.log('delete ', brandName)
              }}
            />
          </Icon>
        </IconBox> */}
      </NameFrame>
      <DetailsFrame>
        <DetailsBox>
          <Label>
            {t('personal number')}
            {':'}
          </Label>
          <ValueLabel>{link}</ValueLabel>
        </DetailsBox>
        <DetailsBox>
          <Label>
            {t('mobile number')}
            {':'}
          </Label>
          <ValueLabel>{departureDate}</ValueLabel>
        </DetailsBox>
      </DetailsFrame>
      <LabelAndIconBox>
        <Image src={calendarIcon} alt='calendar icon' />
        <Label>
          {t('added')} {containerId}
        </Label>
      </LabelAndIconBox>
    </Container>
  )
}

export default ListItemMobile

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  flex: 1;
  gap: 16px;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors?.main_gray_04};
`

const NameFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LabelAndIconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const NameLabel = styled.label`
  display: flex;
  align-items: center;
  text-align: start;
  font-weight: 700;
  font-size: 16px;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors?.main_gray_100};
  font-size: 14px;
`

const ValueLabel = styled.label`
  align-items: start;
  justify-content: start;
  font-size: ${({ theme }) => theme.fontSizes?.small};
  color: ${({ theme }) => theme.colors?.main_gray_68};
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const DetailsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`
