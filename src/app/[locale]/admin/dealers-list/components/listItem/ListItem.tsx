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

  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [dealerId, setDealerId] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [receiversList, setReceiversList] = useState<RECEIVER_DATA[]>()

  const handleGetReceivers = async () => {
    setIsLoading(true)
    const response = await getReceivers(
      {
        page: currentPage,
        pageSize: ITEMS_PER_PAGE,
        // dealerId: 80,
      },
      isAdmin
    )
    if (response) {
      console.log('receiversList res:', response.data)
      setReceiversList(response.data)
      setCurrentPage(response.page)
      setTotalPages(response.pageCount)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    isDropdownOpen && handleGetReceivers()
    //eslint-disable-next-line
  }, [isDropdownOpen])

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          userData={userData}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          setDealerId={setDealerId}
          receiversList={receiversList}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          userData={userData}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          setDealerId={setDealerId}
          receiversList={receiversList}
        />
      )}
    </>
  )
}

export default ListItem
