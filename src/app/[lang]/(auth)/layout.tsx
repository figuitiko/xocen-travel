import { Poppins } from 'next/font/google'
import '../globals.css'
import { i18n, type Locale } from '@/i18n.config'
import AuthProvider from '@/lib/AuthProvider'
import SideBarComponent from '@/components/admin/ui/sidebar-component'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}
const poppins = Poppins({
  display: 'swap',
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export async function generateStaticParams () {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout ({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <AuthProvider>
    <html lang={params.lang} className={`${poppins.variable}`}>
      <body>
        <div className='flex'>
          <SideBarComponent />
          <main className='flex min-h-screen flex-col flex-1 items-center justify-between p-24'>
          {children}
          </main>
        </div>
      </body>
    </html>
    </AuthProvider>
  )
}
