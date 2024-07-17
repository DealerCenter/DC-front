import React from 'react'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import { useTranslations } from 'next-intl'

import styled from 'styled-components'
import ListItem from './listItem/ListItem'
import { useMediaQuery } from 'react-responsive'

type Props = {
  usersData: {
    fullName: string
    id: string
    mobile: string
    dateOfAddition: string
    isVerified: boolean
  }[]
}

const UserList = ({ usersData }: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const t = useTranslations('')

  return (
    <Container>
      {usersData.length !== 0 && (
        <>
          {!isMobile && (
            <LabelsContainer
              labels={[
                t('recipient'),
                t('mobile'),
                t('the date of addition'),
                t('verification'),
              ]}
            />
          )}
          {usersData.map((data) => (
            <ListItem userData={data} key={data.id} />
          ))}
        </>
      )}
    </Container>
  )
}

export default UserList

const Container = styled.div``
