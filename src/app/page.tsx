'use client'
import 'normalize.css/normalize.css'

import Header from '@/common/components/header/Header'

export default function Page() {
  return (
    <main>
      <Header />
    </main>
  )
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})
