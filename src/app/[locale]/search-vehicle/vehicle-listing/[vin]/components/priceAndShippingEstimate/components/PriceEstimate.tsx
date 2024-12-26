import { useTranslations } from 'next-intl'

import TextInput from '@/common/components/InputElements/TextInput'
import Image from 'next/image'
import LabelValuePair from '../../common/LabelValuePair'
import BoxWithHeaderAndFooter from '../common/BoxWithHeaderAndFooter'

import dollarSign from '@/assets/icons/dollarSignBlack.svg'
import styled from 'styled-components'
import Paragraph from 'antd/es/skeleton/Paragraph'
import ToolTipTextBox from '@/common/components/appTooltip/ToolTipTextBox'

type Props = {}

const PriceEstimate = (props: Props) => {
  const t = useTranslations('')

  return (
    <BoxWithHeaderAndFooter
      header={t('price estimate')}
      footerText={t('total')}
      footerValue={'$ 2,340'}
      tooltipText='Price estimate tooltip'
      width={716}
    >
      <>
        <InputTitleFrame>
          <InputTitle>{t('price and additional costs')}</InputTitle>
          <TextInput
            type='text'
            name='name'
            placeholder={t('final bid')}
            value=''
            onChange={() => {}}
            onBlur={() => {}}
            icon={<Image src={dollarSign} alt='image' />}
            paddingLeft={38}
            isWidthFill={true}
          />
        </InputTitleFrame>
        <PairsFrame>
          <LabelValuePair
            label={t('auction fees')}
            value='$433 USD'
            tooltipValue={<ToolTipTextBox text='tooltip tip tip tip' />}
          />
          <LabelValuePair
            label={t('documentation fee')}
            value='$99 USD'
            tooltipValue={<ToolTipTextBox text='tooltip tip tip tip' />}
          />
          <LabelValuePair
            label={t('transaction')}
            value='$349 USD'
            tooltipValue={<ToolTipTextBox text='tooltip tip tip tip' />}
          />
        </PairsFrame>
      </>
    </BoxWithHeaderAndFooter>
  )
}

export default PriceEstimate

const PairsFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InputTitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.md};
`

const InputTitle = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  color: ${({ theme }) => theme.colors?.main_gray_68};
  cursor: default;
`
