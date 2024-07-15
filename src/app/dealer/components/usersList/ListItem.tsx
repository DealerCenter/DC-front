import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'

type Props = {
  recipientInfo: {
    fullName: string
    id: string
    mobile: string
    dateOfAddition: string
    isVerified: boolean
  }
}

const ListItem = ({
  recipientInfo: { fullName, id, mobile, dateOfAddition, isVerified },
}: Props) => {
  return (
    <Container>
      <LabelBox>
        <NameLabel>{fullName}</NameLabel>
        <IdLabel>{id}</IdLabel>
      </LabelBox>
      <Label>{mobile}</Label>
      <Label>{dateOfAddition}</Label>
      <Label>
        {isVerified ? (
          <Image src={checkedGreen} alt='checked icon' />
        ) : (
          <Image src={uncheckedRed} alt='unchecked icon' />
        )}
      </Label>
      <IconBox>
        <Icon>
          <Image
            src={editPencil}
            alt='edit icon'
            onClick={() => {
              console.log('edit')
            }}
          />
        </Icon>
        <Icon>
          <Image
            src={trashCan}
            alt='trash icon'
            onClick={() => {
              console.log('delete')
            }}
          />
        </Icon>
      </IconBox>
    </Container>
  )
}

export default ListItem

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 72px;
  gap: 32px;
  padding: 16px 16px 16px 32px;

  border: 1px solid rgba(32, 32, 32, 0.04);
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 120px;
  color: rgba(32, 32, 32, 1);
  font-size: 13px;
`

const NameLabel = styled(Label)`
  font-weight: 700;
  justify-content: start;
  align-items: unset;
`

const IdLabel = styled(Label)`
  align-items: start;
  justify-content: start;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`
