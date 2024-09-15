import Sidebar from '@/components/shared/Sidebar'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header } from '@/components/sections/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SignedIn>
        <Sidebar />

        <div className="root-container">
          <div className="wrapper">
            {children}
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Header />
      </SignedOut>
    
    </main>
  )
}

export default Layout