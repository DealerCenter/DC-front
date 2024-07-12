'use client'
import Header from '@/common/components/header/Header'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from '@/common/components/header/BurgerHeader'
import AppButton from '@/common/components/appButton/AppButton'
import { useTranslations } from 'next-intl'
import styled from 'styled-components'
import 'normalize.css/normalize.css'
import { useRouter } from 'next/navigation'
import AuthLanding from './auth/components/AuthLanding'

export default function Page() {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return <main>{isMobile ? <BurgerHeader /> : <Header />}</main>
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})
