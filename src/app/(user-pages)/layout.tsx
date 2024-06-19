import { ReactNode } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Navbar />
      <div className="max-h-fit pt-20 lg:pt-36 w-[90%] mx-auto md:w-full min-h-screen md:px-20 lg:px-28 2xl:pl-28">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
