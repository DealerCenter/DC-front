import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

import checkmarkDone from '@/assets/icons/checkedGreen.svg'
import lineGreen from '@/assets/icons/verticalLIneGreen.svg'
import { useTranslations } from 'next-intl'

type Props = {}

const SippingStateBox = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <Line>
        <Date>22/04/2022</Date>
        <IconBox>
          <Icon>
            <Image src={checkmarkDone} alt='icon' />
          </Icon>
          <Icon>
            <Image src={lineGreen} alt='icon' />
          </Icon>
        </IconBox>
        <Label>{t('on auction')}</Label>
      </Line>
      <Line>
        <Date>22/04/2022</Date>
        <IconBox>
          <Icon>
            <Image src={checkmarkDone} alt='icon' />
          </Icon>
          <Icon>
            <Image src={lineGreen} alt='icon' />
          </Icon>
        </IconBox>
        <Label>{t('usa warehouse')}</Label>
      </Line>
      <Line>
        <Date>22/04/2022</Date>
        <IconBox>
          <Icon>
            <Image src={checkmarkDone} alt='icon' />
          </Icon>
          <Icon>
            <Image src={lineGreen} alt='icon' />
          </Icon>
        </IconBox>
        <Label>{t('on the way')}</Label>
      </Line>
      <Line>
        <Date>22/04/2022</Date>
        <IconBox>
          <Icon>
            <Image src={checkmarkDone} alt='icon' />
          </Icon>
          <Icon>
            <Image src={lineGreen} alt='icon' />
          </Icon>
        </IconBox>
        <Label>{t('in poti port')}</Label>
      </Line>
      <Line>
        <Date>22/04/2022</Date>
        <IconBox>
          <Icon>
            <Image src={checkmarkDone} alt='icon' />
          </Icon>
        </IconBox>
        <Label>{t('has arrived')}</Label>
      </Line>
      <Reminder>No Logic</Reminder>
    </Container>
  )
}

export default SippingStateBox

const Reminder = styled.div`
  color: red;
`

const Container = styled.div`
  width: 222px;
  height: 180px;
`

const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.text_black};
`

const Line = styled.div`
  height: 36px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`
const Date = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors?.main_gray_56};
  padding: 2px 0;
`

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Icon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`