'use client'
import AdminLayout from './AdminLayout'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement
}>) {
  return (
    <section className='admin-layout'>
      <AdminLayout>{children}</AdminLayout>
    </section>
  )
}
