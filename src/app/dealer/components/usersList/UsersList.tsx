import React from 'react'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import { useTranslations } from 'next-intl'

import styled from 'styled-components'
import ListItem from './ListItem'

type Props = {}

const recipientListDummy = [
  {
    fullName: 'Luka Tsilosani',
    id: '09138409387',
    mobile: '098 028 07 77',
    dateOfAddition: '24/07/11',
    isVerified: true,
  },
  {
    fullName: 'Zuka Jakeli',
    id: '02189491234',
    mobile: '098 028 11 11',
    dateOfAddition: '24/04/11',
    isVerified: true,
  },
  {
    fullName: 'Elon Musk',
    id: '06060600000',
    mobile: '000 06 06 06',
    dateOfAddition: '00/11/11',
    isVerified: false,
  },
  {
    fullName: 'Siddhartha Gautama',
    id: '0000000001',
    mobile: '000 00 00 01',
    dateOfAddition: '00/00/01',
    isVerified: true,
  },
]

const UserList = (props: Props) => {
  const t = useTranslations('')

  return (
    <Container>
      <LabelsContainer
        labels={[
          t('recipient'),
          t('mobile'),
          t('the date of addition'),
          t('verification'),
        ]}
      />
      {recipientListDummy.map((data, i) => (
        <ListItem recipientInfo={data} key={`recipient${i}`} />
      ))}
    </Container>
  )
}

export default UserList

const Container = styled.div`
  width: 788px;
`
