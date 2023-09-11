'use client'
import { useCustomActive } from '@/hooks/useCustomActive'
import Link from 'next/link'
import { type Navigation } from '@/types'

interface Props {
  navigation: Navigation
  lang: string
}

const NavigationComponent = ({ navigation, lang }: Props) => {
  const activeFunc = useCustomActive({ className: 'active-link' })

  return (
    <nav className='flex gap-x-12 flex-row justify-center items-center'>
      {
        (Object.keys(navigation) as Array<keyof Navigation>).map((item) => {
          const linkValue = item === 'home' ? `/${lang}` : `/${lang}/${item}`
          return (
            <Link href={linkValue} key={item} className='text-slate-900 hover:text-slate-700 text-[1rem] font-poppins  font-normal '>
              <span>
                <span className = {`${activeFunc(`/${lang}/${item}`)} capitalize`}>{navigation[item]?.[0]}</span>{navigation[item]?.slice(1)}
              </span>
          </Link>
          )
        }
        )
      }
    </nav>
  )
}

export default NavigationComponent
