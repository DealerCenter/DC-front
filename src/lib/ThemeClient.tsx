'use client'

import { ThemeProvider } from 'styled-components'
import theme from '../app/theme'

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
