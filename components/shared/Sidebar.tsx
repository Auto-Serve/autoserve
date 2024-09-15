"use client"

import { navLinks } from '@/constants'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/logo.svg"alt="logo" width={32} height={32} />
        </Link>

        <nav className="sidebar-nav">
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 4).map((link) => {
              const isActive = link.route === pathname

              return (
                <li key={link.route} className={`sidebar-nav_element group ${
                  isActive ? 'bg-purple-gradient text-white' : 'text-slate-300'
                }`}>
                  <Link className="sidebar-link" href={link.route}>
                    <Image 
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {link.label}
                  </Link>
                </li>
              )
            })}
            </ul>


          <ul className="sidebar-nav_elements">
            {navLinks.slice(4).map((link) => {
              const isActive = link.route === pathname

              return (
                <li key={link.route} className={`sidebar-nav_element group ${
                  isActive ? 'bg-purple-gradient text-white' : 'text-slate-300'
                }`}>
                  <Link className="sidebar-link" href={link.route}>
                    <Image 
                      src={link.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {link.label}
                  </Link>
                </li>
              )
            })}

            <li className="flex-center cursor-pointer gap-2 p-4">
              <UserButton showName />
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar