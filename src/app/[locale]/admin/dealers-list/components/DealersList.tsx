import React from 'react'
import LabelsContainer from '@/common/components/labelsContainer/LabelsContainer'
import { useTranslations } from 'next-intl'

import styled from 'styled-components'
import ListItem from './listItem/ListItem'
import { useMediaQuery } from 'react-responsive'
import theme from '@/app/[locale]/theme'
import { useRouter } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

type Props = {
  dealersData: {
    fullName: string
    id: string
    mobile: string
    dateOfAddition: string
    isVerified: boolean
  }[]
}

const DealersList = ({ dealersData }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')
  const router = useRouter()

  return (
    <Container>
      {dealersData.length !== 0 && (
        <>
          {!isMobile && (
            <LabelsContainer
              labels={[
                t('full name'),
                t('mobile'),
                t('date of Joining'),
                t('debt'),
                t('num of cars'),
              ]}
              paddingRight={24}
            />
          )}
          {dealersData.map((data) => (
            <ListItem
              userData={data}
              key={`ListItem${data.id}`}
              onClick={() => router.push(routeName.adminUserProfile)}
            />
          ))}
        </>
      )}
    </Container>
  )
}

export default DealersList

const Container = styled.div``
