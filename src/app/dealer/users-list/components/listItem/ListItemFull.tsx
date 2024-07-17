import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkedGreen from '@/assets/icons/checkedGreen.svg'
import uncheckedRed from '@/assets/icons/uncheckedRed.svg'
import editPencil from '@/assets/icons/editPencil.svg'
import trashCan from '@/assets/icons/trashCan.svg'

type Props = {
  fullName: string
  id: string
  mobile: string
  dateOfAddition: string
  isVerified: boolean
}

const ListItemFull = ({
  fullName,
  id,
  mobile,
  dateOfAddition,
  isVerified,
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

export default ListItemFull

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 72px;
  padding: 0 16px 0 32px;

  border: 1px solid rgba(32, 32, 32, 0.04);
`

const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 120px;
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
  text-align: start;
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
