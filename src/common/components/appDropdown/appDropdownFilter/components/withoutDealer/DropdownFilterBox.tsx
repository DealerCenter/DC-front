import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { getReceivers } from '@/api/apiCalls'
import { RECEIVER_DATA } from '@/api/apiTypes'

import BasicButton from '@/common/components/appButton/BasicButton'
import { ShippingStatus } from '@/common/helpers/constants'
import SingleDropdown from '../common/SingleDropdown'
import SingleDropdownShippingStatus from '../common/SingleDropdownShippingStatus'
import OptionsBox from './OptionsBox'

type Props = {
  toggleDropdown: () => void
  setShippingStatus: (arg: ShippingStatus) => void
  setReceiverId: (arg: number | undefined) => void
  checkedShippingStatus: ShippingStatus
  setCheckedShippingStatus: (arg: ShippingStatus) => void
  checkedRecipientId: number | undefined
  setCheckedRecipientId: (arg: number | undefined) => void
  clearFilterStates: () => void
}

const DropdownFilterBox = ({
  toggleDropdown,
  setShippingStatus,
  setReceiverId,
  checkedShippingStatus,
  setCheckedShippingStatus,
  checkedRecipientId,
  setCheckedRecipientId,
  clearFilterStates,
}: Props) => {
  const t = useTranslations('')

  const [activeSetting, setActiveSetting] = useState<
    'status' | 'recipient' | null
  >('status')

  const [receiversList, setReceiversList] = useState<RECEIVER_DATA[]>()
  const [receiversSearchQuery, setReceiversSearchQuery] = useState('')

  const handleCancel = () => {
    clearFilterStates()
    toggleDropdown()
  }

  const handleSave = () => {
    setShippingStatus(checkedShippingStatus)
    setReceiverId(checkedRecipientId)
    toggleDropdown()
  }

  const getRecipients = async () => {
    const res = await getReceivers({ search: '' })
    res && console.log('fetched receivers list:', receiversSearchQuery)
    res && setReceiversList(res.data)
  }

  useEffect(() => {
    getRecipients()
    //eslint-disable-next-line
  }, [receiversSearchQuery])

  return (
    <Container>
      <Frame>
        <OptionsBox
          activeOption={activeSetting}
          setActiveOption={setActiveSetting}
        />
        {activeSetting === 'status' ? (
          <SingleDropdownShippingStatus
            checkedShippingStatus={checkedShippingStatus}
            setCheckedShippingStatus={setCheckedShippingStatus}
          />
        ) : (
          activeSetting === 'recipient' && (
            <SingleDropdown
              checkedOption={checkedRecipientId}
              setCheckedId={setCheckedRecipientId}
              values={
                receiversList &&
                receiversList.map(({ id, firstName, lastName }) => ({
                  id,
                  firstName,
                  lastName,
                }))
              }
              searchQuery={receiversSearchQuery}
              setSearchQuery={setReceiversSearchQuery}
            />
          )
        )}
      </Frame>
      <CancelSaveBox>
        <BasicButton
          onClick={handleCancel}
          height={36}
          width={130}
          color='white'
          isBorder={true}
        >
          <TextBold>{t('cancel')}</TextBold>
        </BasicButton>
        <BasicButton
          onClick={handleSave}
          height={36}
          width={130}
          color='black'
          isDisabled={!checkedShippingStatus && !checkedRecipientId}
        >
          <TextBold>{t('save')}</TextBold>
        </BasicButton>
      </CancelSaveBox>
    </Container>
  )
}

export default DropdownFilterBox

const Container = styled.div`
  width: 270px;
  background-color: ${({ theme }) => theme.colors?.white};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CancelSaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
`

const TextBold = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.bold};
  text-align: center;
  justify-self: center;
  text-align: center;
  cursor: pointer;
`
