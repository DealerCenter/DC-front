import { useTranslations } from 'next-intl'
import styled from 'styled-components'

import CheckBox from '@/common/components/appCheckBox/Checkbox'
import SearchSmall from '@/common/components/search/SearchSmall'

type Props = {
  values?: { id: number; firstName: string; lastName: string }[]
  checkedOption: number | null
  setCheckedId: (arg: number | null) => void
  setSearchQuery: (arg: string) => void
}

const SingleDropdown = ({
  values,
  checkedOption,
  setCheckedId,
  setSearchQuery,
}: Props) => {
  const t = useTranslations('')

  const handleClick = (value: number | null) => {
    if (value === checkedOption) {
      setCheckedId(null)
    } else {
      setCheckedId(value)
    }
  }

  if (values) {
    return (
      <Container>
        <SearchBox>
          <SearchSmall placeholder={t('search')} onSubmit={setSearchQuery} />
        </SearchBox>
        <List>
          {values.map((value, i) => (
            <ListItem
              key={`DropdownFilterBoxListItem${i}`}
              onClick={() => handleClick(value.id)}
            >
              <CheckBox isChecked={value.id === checkedOption} />
              <Text>{`${value.firstName} ${value.lastName}`}</Text>
            </ListItem>
          ))}
        </List>
      </Container>
    )
  }
  return <Container></Container>
}

export default SingleDropdown

const Container = styled.div``

const List = styled.ul`
  padding: 0;
  margin: 0;

  max-height: 300px;
  overflow-y: auto;
`

const ListItem = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 36px;
  list-style: none;
  padding: 8px;
  gap: 16px;
  border-radius: 8px;

  transition: all 100ms ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors?.main_gray_04};
  }
`

const Text = styled.label`
  font-size: ${({ theme }) => theme.fontSizes?.small_13};
  font-weight: ${({ theme }) => theme.fontWeight?.normal};
`

const SearchBox = styled.div`
  padding: 10px 8px;
`
