'use client'
import { LocalesType } from '@/common/helpers/constants'
import OrderProfile from '../OrderProfile'

type Props = { params: { locale?: LocalesType; id?: string[] } }

const Page = ({ params }: Props) => {
  return <OrderProfile id={params?.id && params.id[0]} />
}

export default Page
