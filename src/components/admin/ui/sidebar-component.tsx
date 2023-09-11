import AuthCheck from '@/components/share/auth-check'
import { SignInButton, SignOutButton } from '@/components/share/buttons'
import { adminMenuItems } from '@/constants'
import Link from 'next/link'
import React from 'react'

const SideBarComponent = () => {
  return (
    <nav className='flex flex-col gap-8 max-w-[300] p-8'>
      {
        adminMenuItems.map((item) => (
          <div key={item.url}>
            <Link href={item.url}>
              {item.name}
              </Link>
          </div>
        ))
      }
      <div>
        <SignInButton />
      </div>
      <div>
        <AuthCheck>
          <SignOutButton />
        </AuthCheck>
      </div>
    </nav>
  )
}

export default SideBarComponent
