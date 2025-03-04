'use client'

import InboxCarListing from './InboxCarListing'

type Props = { params: { id: string } }

const Page = ({ params }: Props) => {
  return <InboxCarListing id={params.id} />
}

export default Page
