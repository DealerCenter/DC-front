import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { locales } from '@/common/helpers/constants'

export const localePrefix = 'always' // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
