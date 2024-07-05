'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/common/components/header/Header'
import { useMediaQuery } from 'react-responsive'
import BurgerHeader from '@/common/components/header/BurgerHeader'

export default function Page() {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

  return <main>{isMobile ? <BurgerHeader /> : <Header />}</main>
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})
