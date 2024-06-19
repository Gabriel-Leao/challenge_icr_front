import { ReactNode } from 'react'

import MedEducaIcon from '../../components/Svgs/MedEducaIcon'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="mx-auto max-h-fit min-h-screen grid-cols-2 lg:grid">
      <div className="container mx-auto items-center pt-28 pb-20 w-[95%] max-w-[500px] md:w-[70%] md:flex lg:pt-0 lg:pb-0">
        <MedEducaIcon />
      </div>
      <div className="container mx-auto max-h-fit bg-white pt-16 max-w-[100%] md:flex lg:min-h-screen lg:pt-28">
        {children}
      </div>
    </div>
  )
}

export default Layout
