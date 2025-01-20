'use client'
import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import theme from '@/app/[locale]/theme'
import { routeName } from '@/common/helpers/constants'

import FullHeader from './components/fullHeader/FullHeader'
import BurgerHeader from './components/burgerHeader/BurgerHeader'

type Props = {}

const Header = (props: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })
  const t = useTranslations('')

  const router = useRouter()

  const servicesItems = [
    {
      label: `${t('status check')}`,
      onClick: () => router.push(routeName.statusCheck),
    },
    {
      label: `${t('document check')}`,
      onClick: () => router.push(routeName.documentCheck),
    },
    {
      label: `${t('history check')}`,
      onClick: () => router.push(routeName.historyCheck),
    },
    {
      label: `${t('transportation calculator')}`,
      onClick: () => router.push(routeName.transportationCalculator),
    },
  ]

  const mainItems = [
    {
      label: `${t('search for vehicle')}`,
      onClick: () => {
        router.push(routeName.searchVehicle)
      },
    },
    {
      label: `${t('our services')}`,
      onClick: () => {},
    },
    {
      label: `${t('about us')}`,
      onClick: () => {
        router.push(routeName.aboutUs)
      },
    },
    {
      label: `${t('contact')}`,
      onClick: () => {
        router.push(routeName.contact)
      },
    },
  ]

  return (
    <Container>
      {isMobile ? (
        <BurgerHeader mainItems={mainItems} servicesItems={servicesItems} />
      ) : (
        <FullHeader mainItems={mainItems} servicesItems={servicesItems} />
      )}
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
`
