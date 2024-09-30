import theme from '@/app/[locale]/theme'
import { useMediaQuery } from 'react-responsive'
import ListItemFull from './components/ListItemFull'
import ListItemMobile from './components/ListItemMobile'
import { DEALERS_DATA, RECEIVER_DATA } from '@/api/apiTypes'
import { useEffect, useState } from 'react'
import { getReceivers } from '@/api/apiCalls'

const ITEMS_PER_PAGE = 8
const isAdmin = true

type Props = {
  onClick: () => void
  userData: DEALERS_DATA
}

const ListItem = ({ onClick, userData }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const [dealerId, setDealerId] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          userData={userData}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          userData={userData}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </>
  )
}

export default ListItem
