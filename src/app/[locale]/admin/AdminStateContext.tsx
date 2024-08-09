import React, { createContext, useContext, useState, ReactNode } from 'react'

type Props = { children: React.ReactNode }

type AdminState = {
  activeSetting: 'status' | 'recipient' | 'dealer'
  setActiveSetting: (arg1: 'status' | 'recipient' | 'dealer') => void
  activeOptionStatus: number
  setActiveOptionStatus: (arg1: number) => void
  activeOptionRecipient: number
  setActiveOptionRecipient: (arg1: number) => void
  activeOptionDealer: number
  setActiveOptionDealer: (arg1: number) => void
}

const AdminStateContext = createContext<AdminState | undefined>(undefined)

export const AdminStateProvider = ({ children }: { children: ReactNode }) => {
  const [activeSetting, setActiveSetting] = useState<
    'status' | 'recipient' | 'dealer'
  >('status')
  const [activeOptionStatus, setActiveOptionStatus] = useState(0)
  const [activeOptionRecipient, setActiveOptionRecipient] = useState(0)
  const [activeOptionDealer, setActiveOptionDealer] = useState(0)

  return (
    <AdminStateContext.Provider
      value={{
        activeSetting,
        setActiveSetting,
        activeOptionStatus,
        setActiveOptionStatus,
        activeOptionRecipient,
        setActiveOptionRecipient,
        activeOptionDealer,
        setActiveOptionDealer,
      }}
    >
      {children}
    </AdminStateContext.Provider>
  )
}

export const useAdminState = () => {
  const context = useContext(AdminStateContext)
  if (!context)
    throw new Error('useGlobalState must be used within a GlobalStateProvider')
  return context
}
