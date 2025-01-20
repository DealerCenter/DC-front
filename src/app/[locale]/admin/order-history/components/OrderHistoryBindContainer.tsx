import { CONTAINER_GET_RES } from '@/api/apiTypes'
import { useTranslations } from 'next-intl'

import BasicButton from '@/common/components/appButton/BasicButton'
import CloseIconBlack from '@/common/components/readyIcons/CloseIconBlack'
import BindContainerDropdown from './bindContainer/BindContainerDropdown'

type Props = {
  containerToBind: CONTAINER_GET_RES | null
  setContainerToBind: (arg: CONTAINER_GET_RES | null) => void
}

const OrderHistoryBindContainer = ({
  containerToBind,
  setContainerToBind,
}: Props) => {
  const t = useTranslations('')

  const onClearContainerToBind = (e: any) => {
    e.stopPropagation()
    setContainerToBind(null)
  }

  return (
    <BindContainerDropdown setContainerToBind={setContainerToBind}>
      <BasicButton onClick={() => {}} color='white' isBorder={true}>
        {containerToBind ? containerToBind.trackingUrl : t('bind container')}
      </BasicButton>
      {containerToBind && (
        <CloseIconBlack onClick={onClearContainerToBind} top={-8} right={-8} />
      )}
    </BindContainerDropdown>
  )
}

export default OrderHistoryBindContainer
