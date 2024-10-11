import { ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from '@/navigation'
import { useTranslations } from 'next-intl'

import { routeName } from '@/common/helpers/constants'
import { useUserData } from '@/common/store/userDataStore'

type Props = { children: ReactNode }

const ProtectedRoute = ({ children }: Props) => {
  const router = useRouter()
  const t = useTranslations('')
  const { isAuthenticated, fetchUserData, loading } = useUserData()

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData()
  }, [fetchUserData])

  useEffect(() => {
    // Redirect to the login page if the user is not authenticated and not loading
    if (!loading && !isAuthenticated) {
      router.push(routeName.auth)
    }
  }, [isAuthenticated, loading, router])

  if (loading) {
    return (
      <Loading>
        {t('loading')}
        {'...'}
      </Loading>
    )
  }

  return isAuthenticated ? children : null
}

export default ProtectedRoute

const Loading = styled.div`
  margin: 10px;

  color: ${({ theme }) => theme.colors?.main_gray_56};

  @media ${({ theme }) => theme.media?.sm} {
    margin: 30px;
  }
`
