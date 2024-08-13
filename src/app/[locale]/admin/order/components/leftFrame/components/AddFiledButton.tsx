import React from 'react'
import { useTranslations } from 'next-intl'

import SecondaryButton from '@/common/components/appButton/SecondaryButton'
import plusIcon from '@/assets/icons/plus.svg'

type Props = { onClick: () => void }

const AddFiledButton = ({ onClick }: Props) => {
  const t = useTranslations('')

  return (
    <SecondaryButton
      text={t('add field')}
      onClick={onClick}
      icon={plusIcon}
      width={240}
    />
  )
}

export default AddFiledButton
