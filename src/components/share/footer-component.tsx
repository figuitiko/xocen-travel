import { menuItems } from '@/constants'
import Image from 'next/image'
import React from 'react'
import FeatureFooterComponent from './feature-footer-component'

const FooterComponent = () => {
  return (
    <footer className='w-full h-[400px] bg-primary-green py-[86px] pl-[167px] flex'>
      <div className='flex items-center'>
        <picture className='mr-[200px]'>
          <Image src={'/images/xocen-logo-white.png'} alt='logo' width={200} height={200} />
        </picture>
        <div className='flex'>
          <FeatureFooterComponent title='Company' itemsLink={menuItems} />
        </div>
      </div>

    </footer>
  )
}

export default FooterComponent
