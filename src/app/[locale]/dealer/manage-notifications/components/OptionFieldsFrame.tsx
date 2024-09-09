import React from 'react'
import styled from 'styled-components'
import OptionField from './OptionField'
import { useTranslations } from 'next-intl'

type Props = {
  settingsState: {
    OrderGet: boolean
    DebtExistence: boolean
    InfoMissing: boolean
    CompanyNewsAndServiceChange: boolean
  }
  onChange: () => void
}

const OptionFieldsFrame = ({ settingsState, onChange }: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <OptionField
        text={t('order acceptance')}
        onChange={onChange}
        isChecked={settingsState.OrderGet}
      />
      <OptionField
        text={t('existence of debt')}
        onChange={onChange}
        isChecked={settingsState.DebtExistence}
      />
      <OptionField
        text={t('incomplete information')}
        onChange={onChange}
        isChecked={settingsState.InfoMissing}
      />
      <OptionField
        text={t('company news and changes')}
        onChange={onChange}
        isChecked={settingsState.CompanyNewsAndServiceChange}
      />
    </Container>
  )
}

export default OptionFieldsFrame

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.sm};
`
