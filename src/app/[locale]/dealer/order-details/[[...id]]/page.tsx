'use client'
import React from 'react'
import OrderProfile from '../OrderProfile'

type Props = { params: { id?: string[] } }

const Page = ({ params }: Props) => {
  return <OrderProfile id={params?.id && params.id[0]} />
}

export default Page
