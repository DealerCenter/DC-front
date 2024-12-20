'use client'
import { LocalesType } from '@/common/helpers/constants'
import OrderDetails from './OrderDetails'

type Props = { params: { locale?: LocalesType; id?: string[] } }

const Page = ({ params }: Props) => {
  return <OrderDetails id={params?.id && params.id[0]} />
}

export default Page
