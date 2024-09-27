import { fetchMe } from '@/api/apiCalls'
import { ME_RES } from '@/api/apiTypes'
import { create } from 'zustand'

interface UserDataState {
  userData: ME_RES | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
  setUserData: (payload: ME_RES) => void
  fetchUserData: () => void
  clearUserData: () => void
}

export const useUserData = create<UserDataState>((set) => ({
  userData: null,
  isAuthenticated: false,
  loading: true,
  error: null,
  setUserData: (payload) => {
    set({ userData: payload })
  },
  fetchUserData: async () => {
    try {
      set({ loading: true })
      const response = await fetchMe()
      set({ userData: response, isAuthenticated: !!response, loading: false })
    } catch (error) {
      console.error('Error fetching user:', error)
      set({ userData: null, loading: false })
    }
  },
  clearUserData: () => {
    set({ userData: null, isAuthenticated: false })
  },
}))
