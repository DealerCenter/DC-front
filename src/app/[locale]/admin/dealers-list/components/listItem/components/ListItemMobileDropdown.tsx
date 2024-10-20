import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import LabelValuePair from './LabelValuePair'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import calendarIcon from '@/assets/icons/calendar.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'
import { RECEIVER_DATA } from '@/api/apiTypes'
import { formatDate } from '@/common/helpers/simpleFunctions'

type Props = {
  receiverData: RECEIVER_DATA
  onClick: () => void
}

const ListItemMobileDropdown = ({
  onClick,
  receiverData: {
    id,
    personalId,
    firstName,
    lastName,
    phoneNumber,
    createdAt,
    verificationStatus,
  },
}: Props) => {
  const t = useTranslations('')

  return (
    <Container onClick={onClick}>
      <TopFrame>
        <NameAndDebtBox>
          <NameLabel>{`${firstName} ${lastName}`}</NameLabel>
          <IconAndDebtBox>
            <Icon>
              {verificationStatus ? (
                <Image src={checkedGreen} alt='checked icon' />
              ) : (
                <Image src={uncheckedRed} alt='unchecked icon' />
              )}
            </Icon>
            <DebtLabel>{`$ 5750`}</DebtLabel>
          </IconAndDebtBox>
        </NameAndDebtBox>
        <IconAndLabelBox>
          <Image src={calendarIcon} alt='calendar icon' />
          <Label>
            {t('added')} {formatDate(createdAt)}
          </Label>
        </IconAndLabelBox>
      </TopFrame>
      <DetailsFrame>
        <LabelValuePair
          label={t('personal number')}
          value={personalId}
          valueWidth={123}
        />
        <LabelValuePair
          label={t('mobile')}
          value={phoneNumber}
          valueWidth={123}
        />
      </DetailsFrame>
      <BottomFrame>
        <IconBox>
          <Icon>
            <Image src={editPencil} alt='edit icon' onClick={onClick} />
          </Icon>
        </IconBox>
        <IconBox>
          <Icon>
            <Image src={trashCan} alt='trash icon' onClick={() => {}} />
          </Icon>
        </IconBox>
      </BottomFrame>
    </Container>
  )
}

export default ListItemMobileDropdown

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  flex: 1;
  gap: 16px;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors?.main_gray_04};
  border-radius: ${({ theme }) => theme.radius?.lg};
`

const TopFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const NameAndDebtBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const IconAndDebtBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const IconAndLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 20px;
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

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`

const DetailsFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const DebtLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes?.large};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  padding: 8px;
`

const BottomFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`
