'use client'
import { useCustomActive } from '@/hooks/useCustomActive'
import { type ItemLink } from '@/types'
import Link from 'next/link'

interface Props {
  itemsLink: ItemLink []
  title: string
}

const FeatureFooterComponent = ({ itemsLink, title }: Props) => {
  const activeFunc = useCustomActive({ className: 'active-link-footer' })
  return (
    <div className='flex flex-col mr-[100px]'>
            <h3 className='text-2xl font-normal '>{ title }</h3>
            {
              itemsLink.map((item) => (
                <Link key={item.url} href={item.url}>
                 <span className = {`text-[#C7C7C7] ${activeFunc(item.url)}`}>
                    {
                      item.name
                    }
                 </span>
                  </Link>
              ))
            }
          </div>
  )
}

export default FeatureFooterComponent
