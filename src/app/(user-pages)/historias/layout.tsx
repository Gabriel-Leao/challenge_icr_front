import { ReactNode } from 'react'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="w-full pb-12">
      <div className="flex justify-center">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
