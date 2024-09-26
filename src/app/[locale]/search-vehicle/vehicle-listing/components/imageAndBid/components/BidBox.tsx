import TextInput from '@/common/components/inputElements/TextInput'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import styled, { css } from 'styled-components'

import dollarSign from '@/assets/icons/dollarSignBlack.svg'
import infoIconEmpty from '@/assets/icons/infoIconEmpty.svg'
import AppTooltip from '@/common/components/appTooltip/AppTooltip'
import ToolTipTextBox from '@/common/components/appTooltip/ToolTipTextBox'
import AppModal from '@/common/components/modal/AppModal'
import AuthRequired from '@/common/components/AuthRequired/AuthRequired'

type Props = {}

const BidBox = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const t = useTranslations('')

  return (
    <Container>
      <TimeLeftBox>
        <TimeLeftLabel>{t('time left to bid')}</TimeLeftLabel>
        <TimeLeft>0 d : 05 h : 33 m : 47 s</TimeLeft>
      </TimeLeftBox>
      <Line />
      <EnterBidBox>
        <TextInput
          type='text'
          placeholder={t('enter bid')}
          icon={<Image src={dollarSign} alt='image' />}
          name='enter bid'
          value=''
          onBlur={() => {}}
          onChange={() => {}}
          width={200}
          paddingLeft={38}
        />
        <CurrentBidBox>
          <AppTooltip
            tooltipValue={<ToolTipTextBox text='This is a tooltip' />}
          >
            <Image src={infoIconEmpty} alt='info icon' width={20} height={20} />
          </AppTooltip>
          <CurrentBidLabel>{t('current bid')}</CurrentBidLabel>
        </CurrentBidBox>
      </EnterBidBox>
      <ButtonBox>
        <StyledButton
          onClick={() => setIsModalOpen(true)}
          disabled={isButtonDisabled}
        >
          {t('bid now')}
        </StyledButton>
        {isButtonDisabled && (
          <ButtonWarningLabelBox onClick={() => setIsButtonDisabled(false)}>
            <AppTooltip
              tooltipValue={<ToolTipTextBox text='This is a tooltip' />}
            >
              <Image
                src={infoIconEmpty}
                alt='info icon'
                width={20}
                height={20}
              />
            </AppTooltip>
            <ButtonWarningLabel>
              {t('can not bid before authorization')}
            </ButtonWarningLabel>
          </ButtonWarningLabelBox>
        )}
      </ButtonBox>
      <AppModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <AuthRequired
          onCancel={() => setIsModalOpen(false)}
          onAuth={() => {}}
        />
      </AppModal>
    </Container>
  )
}

export default BidBox

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.lg};
  border-radius: ${({ theme }) => theme.radius?.xl};
  padding: 24px 32px 24px 32px;
  background-color: ${({ theme }) => theme.colors?.white};

  height: 100%;
`

const TimeLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`

const TimeLeftLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_42};
  cursor: default;
`

const TimeLeft = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_100};
  cursor: default;
`

const Line = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors?.main_gray_04};
  height: 1px;
`

const EnterBidBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const CurrentBidBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

const CurrentBidLabel = styled.label`
  font-size: 19px;
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};
  cursor: default;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const ButtonWarningLabelBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing?.xsm};
`

const ButtonWarningLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
  color: ${({ theme }) => theme.colors?.main_gray_42};
  cursor: default;
`

const ButtonLabel = styled.label`
  cursor: default;
`

type ButtonProps = {
  disabled?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: 700;
  border-radius: ${({ theme }) => theme.radius?.lg};

  font-size: ${({ theme }) => theme.fontSizes?.medium};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.white};

  border: none;
  height: 44px;
  width: 100%;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_26};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.button_black};
        `}

  cursor: pointer;
`
