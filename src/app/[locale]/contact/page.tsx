'use client'
import React from 'react'
import { useRouter, usePathname } from '@/navigation'
import { routeName } from '@/common/helpers/constants'

import ContactLayout from './ContactLayout'
import Contact from './Contact'

type Props = {}

const Page = (props: Props) => {
  return (
    <ContactLayout>
      <Contact></Contact>
    </ContactLayout>
  )
}

export default Page
