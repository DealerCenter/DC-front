import { useTranslations } from 'next-intl'

import TextInput from '@/common/components/inputElements/TextInput'
import BoxWithHeaderAndFooter from '../common/BoxWithHeaderAndFooter'
import styled from 'styled-components'

type Props = {}

const ShippingEstimate = (props: Props) => {
  const t = useTranslations('')

  return (
    <BoxWithHeaderAndFooter
      header={t('shipping estimate')}
      footerText={t('total')}
      footerValue={'$ 2,340'}
      tooltipText='Shipping estimate tooltip'
      width={468}
    >
      <Frame>
        <InputTitleFrame>
          <InputTitle>{t('delivery to')}</InputTitle>
          <TextInput
            type='text'
            name='name'
            placeholder='Change this with ant design select'
            value=''
            onChange={() => {}}
            onBlur={() => {}}
            isWidthFill={true}
          />
          <TextInput
            type='text'
            name='name'
            placeholder='Change this with ant design select'
            value=''
            onChange={() => {}}
            onBlur={() => {}}
            isWidthFill={true}
          />
        </InputTitleFrame>
      </Frame>
    </BoxWithHeaderAndFooter>
  )
}

export default ShippingEstimate

const Frame = styled.div`
  height: 100%;
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
