import type { Metadata } from 'next'
import { CreateOrderProvider } from '../../create-order/hooks/useCreateOrderContext'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CreateOrderProvider>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
    </CreateOrderProvider>
  )
}
