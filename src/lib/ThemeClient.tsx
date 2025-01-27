//@ts-nocheck
'use client'

import { ThemeProvider } from 'styled-components'
import theme from '../app/[locale]/theme'

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
