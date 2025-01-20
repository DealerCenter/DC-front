'use client'

import LoadingText from '@/common/components/readyComponents/LoadingText'
import { LocalesType } from '@/common/helpers/constants'
import DealerProfile from './DealerProfile'

type Props = { params: { locale?: LocalesType; id?: string } }

const Page = ({ params }: Props) => {
  if (!params.id) return <LoadingText />

  return <DealerProfile dealerId={params.id} />
}

export default Page
