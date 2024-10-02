import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

import BasicButton from '@/common/components/appButton/BasicButton'
import CheckBox from '@/common/components/appCheckBox/Checkbox'
import OptionsBox from './OptionsBox'
import { ShippingStatus } from '@/common/helpers/constants'
import SingleDropdown from './SingleDropdown'
import SingleDropdownShippingStatus from './SingleDropdownShippingStatus'
import { getReceivers } from '@/api/apiCalls'
import { RECEIVER_DATA } from '@/api/apiTypes'

type Props = {
  toggleDropdown: () => void
  setShippingStatus: (arg: ShippingStatus) => void
}

const DropdownFilterBox = ({ toggleDropdown, setShippingStatus }: Props) => {
  const t = useTranslations('')
  const [activeSetting, setActiveSetting] = useState<
    'status' | 'recipient' | 'dealer' | null
  >('status')

  // const [checkedOption, setCheckedOption] = useState('')

  const [checkedStatus, setCheckedStatus] = useState<ShippingStatus>(null)
  const [checkedRecipient, setCheckedRecipient] = useState('')
  const [checkedDealer, setCheckedDealer] = useState('')

  const [receiversList, setReceiversList] = useState<RECEIVER_DATA[]>()

  const handleCancel = () => {
    setCheckedStatus(null)
    setCheckedRecipient('')
    setCheckedDealer('')
    setShippingStatus(null)
    toggleDropdown()
  }
  const handleSave = () => {
    setShippingStatus(checkedStatus)
    toggleDropdown()
  }

  const getRecipients = async () => {
    const res = await getReceivers({}, true)
    res && setReceiversList(res.data)
  }

  useEffect(() => {
    getRecipients()
  }, [])
  useEffect(() => {
    console.log('state recipient', checkedRecipient)
  }, [checkedRecipient])

  return (
    <Container>
      <Frame>
        <OptionsBox
          activeOption={activeSetting}
          setActiveOption={setActiveSetting}
        />
        {activeSetting === 'status' ? (
          <SingleDropdownShippingStatus
            checkedStatus={checkedStatus}
            setCheckedStatus={setCheckedStatus}
          />
        ) : activeSetting === 'recipient' ? (
          <SingleDropdown
            checkedOption={checkedRecipient}
            setCheckedOption={setCheckedRecipient}
            receiversList={receiversList}
          />
        ) : (
          activeSetting === 'dealer' && (
            <SingleDropdown
              values={['dealer1', 'dealer2', 'dealer3']}
              checkedOption={checkedDealer}
              setCheckedOption={setCheckedDealer}
            />
          )
        )}
      </Frame>
      <CancelSaveBox>
        <BasicButton
          onClick={handleCancel}
          height={36}
          width={157}
          color='white'
          isBorder={true}
        >
          <TextBold>{t('cancel')}</TextBold>
        </BasicButton>
        <BasicButton onClick={handleSave} height={36} width={157} color='black'>
          <TextBold>{t('save')}</TextBold>
        </BasicButton>
      </CancelSaveBox>
    </Container>
  )
}

export default DropdownFilterBox

const Container = styled.div`
  width: 330px;
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
