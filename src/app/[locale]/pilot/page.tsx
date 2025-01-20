'use client'

import LandingPage from './landing-page/LandingPage'
import LandingPageLayout from './landing-page/LandingPageLayout'

export default function Page() {
  return (
    <main>
      <LandingPageLayout>
        <LandingPage />
      </LandingPageLayout>
    </main>
  )
}

Page.getStaticProps = () => ({
  props: {
    hello: 'world',
  },
})
