import { useTranslations } from 'next-intl'
import { useState } from 'react'

import SecondaryButton from '../appButton/SecondaryButton'
import AppDropdown from '../appDropdown/AppDropdown'
import CloseIconBlack from '../readyIcons/CloseIconBlack'

import arrowDown from '@/assets/icons/sortArrows/arrowSortDown.svg'
import arrowUp from '@/assets/icons/sortArrows/arrowSortUp.svg'
import sortIconBlack from '@/assets/icons/sortBlack.svg'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'

const BUTTON_WIDTH_ON_MOBILE = 160

type Props = {
  setSortByCost: (arg: 'desc' | 'asc' | null) => void
  setSortByDate: (arg: 'desc' | 'asc' | null) => void
  isDisabled?: boolean
}

const AppSort = ({ setSortByCost, setSortByDate, isDisabled }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const [activeSortLabel, setActiveSortLabel] = useState('sort')

  const t = useTranslations('')

  const sortOptions = [
    {
      label: 'date descending',
      icon: arrowDown,
      onChoose: () => setSortByDate('desc'),
    },
    {
      label: 'date ascending',
      icon: arrowUp,
      onChoose: () => setSortByDate('asc'),
    },
    {
      label: 'price descending',
      icon: arrowDown,
      onChoose: () => setSortByCost('desc'),
    },
    {
      label: 'price ascending',
      icon: arrowUp,
      onChoose: () => setSortByCost('asc'),
    },
  ]

  const onClearSort = (e: any) => {
    e.stopPropagation()
    setSortByCost(null)
    setSortByDate(null)
    setActiveSortLabel('sort')
  }

  return (
    <AppDropdown
      modalStyle='white'
      sortOptions={sortOptions}
      setActiveLabel={setActiveSortLabel}
      isDisabled={isDisabled}
    >
      <SecondaryButton
        text={t(activeSortLabel)}
        onClick={() => {}}
        icon={sortIconBlack}
        width={isMobile ? BUTTON_WIDTH_ON_MOBILE : undefined}
        isDisabled={isDisabled}
      />
      {activeSortLabel !== 'sort' && (
        <CloseIconBlack onClick={onClearSort} top={-8} right={-8} />
      )}
    </AppDropdown>
  )
}

export default AppSort
