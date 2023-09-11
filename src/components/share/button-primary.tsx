import { type ButtonProps } from '@/types'
import Link from 'next/link'

const ButtonPrimary = ({ children, handleClick, itemLink }: ButtonProps) => {
  return (
    <>
      {
        (itemLink?.url !== undefined)
          ? (
            <Link className='btn-primary' href={itemLink?.url}>
              {children}
            </Link>
            )
          : (
            <button onClick={handleClick} className='btn-primary'>
              {
                children
              }
            </button>
            )
      }
    </>
  )
}

export default ButtonPrimary
