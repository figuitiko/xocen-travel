import { usePathname } from 'next/navigation'
interface Props {
  className: string
}
export const useCustomActive = ({ className }: Props) => {
  const pathname = usePathname()
  return (url: string) => {
    return (url === pathname) && `${className}`
  }
}
