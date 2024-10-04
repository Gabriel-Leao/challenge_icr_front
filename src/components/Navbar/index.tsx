'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ProfileIcon from '../Svgs/ProfileIcon'
import SettingIcon from '../Svgs/SettingsIcon'
import HomeIcon from '../Svgs/HomeIcon'
import BookIcon from '../Svgs/BookIcon'
import FavoritesIcon from '../Svgs/FavoritesIcon'
import SidebarButton from '../Svgs/SidebarButton'
import { useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <nav className="fixed z-20 md:pt-20 md:ml-2 w-full xl:ml-5 lg:pt-36 md:w-[50px] lg:w-[70px] md:rounded-e-3xl">
      <div
        className="hidden md:flex justify-center cursor-pointer"
        onClick={handleShowNav}>
        <SidebarButton />
      </div>
      <ul
        className={`bg-white rounded-b-xl md:rounded-full flex justify-center w-full md:w-[50px] lg:w-[70px] md:flex-col items-center md:mt-5 gap-5 lg:gap-8 p-4 ease-in duration-500 ${showNav ? 'opacity-100' : 'md:opacity-0'} transition-opacity ease-in-out delay-150 duration-300`}>
        <li>
          <Link
            href="/profile"
            className="cursor-pointer"
            title="perfil">
            <ProfileIcon
              className="w-[22px] lg:w-[39px]"
              shadow={pathname === '/profile'}
            />
          </Link>
        </li>

        <li>
          <Link
            href="/home"
            className="cursor-pointer"
            title="home">
            <HomeIcon
              className="w-[22px] lg:w-[39px]"
              shadow={pathname === '/home'}
            />
          </Link>
        </li>

        <li>
          <Link
            href="/books"
            className="cursor-pointer"
            title="livros">
            <BookIcon
              className="w-[22px] lg:w-[39px]"
              shadow={pathname === '/books'}
            />
          </Link>
        </li>

        <li>
          <Link
            href="/favorites"
            className="cursor-pointer"
            title="favoritos">
            <FavoritesIcon
              className="w-[22px] lg:w-[39px]"
              shadow={pathname === '/favorites'}
            />
          </Link>
        </li>

        <li>
          <Link
            href="/settings"
            className="cursor-pointer"
            title="configurações">
            <SettingIcon
              className="w-[22px] lg:w-[39px]"
              shadow={pathname === '/settings'}
            />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
