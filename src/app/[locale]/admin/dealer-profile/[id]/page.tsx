'use client'

import LoadingText from '@/common/components/readyComponents/LoadingText'
import { ParamsType } from '@/common/helpers/constants'
import DealerProfile from './DealerProfile'

type Props = { params: ParamsType }

const Page = ({ params }: Props) => {
  if (!params.id) return <LoadingText />

  return <DealerProfile dealerId={params.id} />
}

export default Page
