import {
  assignDealerLevel,
  getDealerLevels,
  unVerifyDealer,
  verifyDealer,
} from '@/api/apiCalls'
import AppButton from '@/common/components/appButton/AppButton'
import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Select } from 'antd'
import AppSelectAntDesign from '@/common/components/appSelect/AppSelectAntDesign'
import TextInput from '@/common/components/InputElements/TextInput'
import { useTranslations } from 'next-intl'

type Props = {
  dealerId: string
  getDealerData: () => Promise<{
    firstName: string
    lastName: string
    phoneNumber: string
  } | null>
  currentLevelId: number | undefined
}

const EditModal = ({ dealerId, getDealerData, currentLevelId }: Props) => {
  const t = useTranslations('')
  const [levels, setLevels] = useState([{ id: NaN, label: '' }])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  useEffect(() => {
    const fetchDealerData = async () => {
      try {
        const response = await getDealerData()
        console.log('here', response)

        if (response) {
          console.log('res', response)
          setFirstName(response.firstName)
          setLastName(response.lastName)
          setPhoneNumber(response.phoneNumber)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchDealerData()
  }, [])

  const handleVerify = async () => {
    try {
      await verifyDealer(dealerId)
      getDealerData()
      message.success('Dealer verified successfully')
    } catch (error) {
      console.error('Error verifying dealer:', error)
    }
  }

  const handleUnVerify = async () => {
    try {
      await unVerifyDealer(dealerId)
      getDealerData()
      message.success('Dealer Unverified successfully')
    } catch (error) {
      console.error('Error verifying dealer:', error)
    }
  }

  const assignLevel = async (levelId: number, dealerId: string) => {
    try {
      await assignDealerLevel(dealerId, levelId.toString())
      getDealerData()
    } catch (error) {
      console.error('Error assigning level:', error)
    }
  }

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await getDealerLevels()
        if (response) {
          setLevels(response.map((i) => ({ id: i.id, label: i.level })))
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchLevels()
  }, [])

  return (
    <Container>
      <div>
        <Title>Assign dealer level</Title>
        <AppSelectAntDesign
          optionsWithId={levels}
          placeholder='Choose dealer level'
          onChangeId={(levelId) => assignLevel(levelId, dealerId)}
          value={currentLevelId}
        />
      </div>

      <TextInput
        type='text'
        name={'firstName'}
        placeholder={t('name')}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        onBlur={() => {}}
      />
      <TextInput
        type='text'
        name={'lastName'}
        placeholder={t('lastName')}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        onBlur={() => {}}
      />
      <TextInput
        type='text'
        name={'phoneNumber'}
        placeholder={t('number')}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onBlur={() => {}}
      />

      <VerificationButtons>
        <AppButton text='Verify status' onClick={handleVerify} type='filled' />
        <AppButton
          text='Unverify status'
          onClick={handleUnVerify}
          type='outlined'
        />
      </VerificationButtons>
    </Container>
  )
}

export default EditModal

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors?.white};
  width: 400px;
  height: 300px;
  margin-top: 100px;
  border-radius: ${({ theme }) => theme.radius?.lg};
  padding: ${({ theme }) => theme.spacing?.md};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const VerificationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing?.md};
`
const Title = styled.h1`
  font-size: 22px;
`
