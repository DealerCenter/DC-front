import { DEALERS_DATA } from '@/api/apiTypes'
import theme from '@/app/[locale]/theme'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ListItemFull from './components/ListItemFull'
import ListItemMobile from './components/ListItemMobile'

type Props = {
  onClick: () => void
  userData: DEALERS_DATA
  onDeleteDealer: (dealerId: number) => void
}

const ListItem = ({ onClick, userData, onDeleteDealer }: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          userData={userData}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          onDeleteDealer={onDeleteDealer}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          userData={userData}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          onDeleteDealer={onDeleteDealer}
        />
      )}
    </>
  )
}

export default ListItem
