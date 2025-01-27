import { useTranslations } from 'next-intl'
import styled, { css } from 'styled-components'

type Props = {
  activeOption: 'status' | 'recipient' | null
  setActiveOption: (arg1: 'status' | 'recipient') => void
}

const OptionsBox = ({ activeOption, setActiveOption }: Props) => {
  const t = useTranslations('')

  return (
    <SettingsBox>
      <Setting
        isActive={'status' === activeOption}
        onClick={() => setActiveOption('status')}
      >
        <TextBold>{t('status')}</TextBold>
      </Setting>
      <Setting
        isActive={'recipient' === activeOption}
        onClick={() => setActiveOption('recipient')}
      >
        <TextBold>{t('recipient')}</TextBold>
      </Setting>
    </SettingsBox>
  )
}

export default OptionsBox

const SettingsBox = styled.div`
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

type SettingProps = { isActive: boolean }

const Setting = styled.div<SettingProps>`
  width: 130px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius?.lg};

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: ${({ theme }) => theme.colors?.main_gray_100};
          color: ${({ theme }) => theme.colors?.white};
        `
      : css`
          background-color: ${({ theme }) => theme.colors?.white};
          color: ${({ theme }) => theme.colors?.main_gray_100};
        `}

  cursor: pointer;
`

const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};

  cursor: pointer;
`
