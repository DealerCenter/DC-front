import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'

import personListBig from '@/assets/icons/personList/personListBig.svg'
import plusIcon from '@/assets/icons/plus.svg'

type Props = { onClick: () => void }

const PlaceHolderForList = ({ onClick }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Icon>
        <Image src={personListBig} alt='icon' width={36} height={36} />
      </Icon>
      <Frame>
        <H5Bold>თქვენ ჯერ არ გაქვთ დამატებული მიმღები</H5Bold>
        <Text>
          შეავსეთ მიმღების მონაცემები და შემდგომში მარტივად მიუთითეთ რაღაც რაღაც
          რაღაცა
        </Text>
        <SecondaryButton
          text={t('add recipient')}
          onClick={onClick}
          icon={plusIcon}
        />
      </Frame>
    </Container>
  )
}

export default PlaceHolderForList

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 794px;
  height: 276px;
`

const Icon = styled.div`
  margin: 6px;
`
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 520px;
  height: 196px;
  padding: 16px 0px;
  gap: 24px;
`
const H5Bold = styled.h5`
  font-size: 23px;
  font-weight: 700;
  margin: 0;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  text-align: center;
`
