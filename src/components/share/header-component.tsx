import React from 'react'
import NavigationComponent from './navigation-component'
import Image from 'next/image'
import { type Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

interface Props {
  lang: Locale
}
const HeaderComponent = async ({ lang }: Props) => {
  const { navigation } = await getDictionary(lang)

  return (
    <header className='flex w-full justify-between p-12'>
      <picture>
        <Image src='/images/xocen-logo.png' alt='logo' width={200} height={200} />
      </picture>
      <NavigationComponent navigation = {navigation} lang = {lang} />
      <LocaleSwitcher />
    </header>
  )
}

export default HeaderComponent
