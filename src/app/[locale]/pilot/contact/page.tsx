'use client'
import React from 'react'

import ContactLayout from './ContactLayout'
import Contact from './Contact'

type Props = {}

const Page = (props: Props) => {
  return (
    <ContactLayout>
      <Contact />
    </ContactLayout>
  )
}

export default Page
