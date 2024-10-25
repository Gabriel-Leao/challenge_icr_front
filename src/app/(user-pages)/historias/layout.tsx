import { ReactNode, Suspense } from 'react'
import Spinner from '@/components/Spinner'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full pb-12">
      <div className="flex justify-center">
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </div>
    </div>
  )
}

export default Layout
