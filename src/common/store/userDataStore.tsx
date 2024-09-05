import { fetchUserData } from '@/api/apiCalls'
import axiosInstance from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import { create } from 'zustand'

interface UserDataState {
  userData: ME_RES | null
  loading: boolean
  error: string | null
  setUserData: (payload: ME_RES) => void
  fetchAndUpdateUser: () => void
}

export const useUserData = create<UserDataState>((set) => ({
  userData: null,
  loading: false,
  error: null,
  setUserData: (payload) => {
    console.log('payload', payload)
    set({ userData: payload })
  },
  fetchAndUpdateUser: async () => {
    const response = await fetchUserData()
    set({ userData: response?.data })
  },
}))
