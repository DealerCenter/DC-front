import theme from '@/app/[locale]/theme'
import { useMediaQuery } from 'react-responsive'
import ListItemFull from './components/ListItemFull'
import ListItemMobile from './components/ListItemMobile'

type Props = {
  onClick: () => void
  userData: {
    fullName: string
    id: string
    mobile: string
    dateOfAddition: string
    isVerified: boolean
  }
}

const ListItem = ({
  onClick,
  userData: { fullName, id, mobile, dateOfAddition, isVerified },
}: Props) => {
  const isMobile = useMediaQuery({ query: theme.media?.sm })

  return (
    <>
      {isMobile ? (
        <ListItemMobile
          onClick={onClick}
          fullName={fullName}
          id={id}
          mobile={mobile}
          dateOfAddition={dateOfAddition}
          isVerified={isVerified}
        />
      ) : (
        <ListItemFull
          onClick={onClick}
          fullName={fullName}
          id={id}
          mobile={mobile}
          dateOfAddition={dateOfAddition}
          isVerified={isVerified}
        />
      )}
    </>
  )
}

export default ListItem
