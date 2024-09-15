import Sidebar from '@/components/shared/Sidebar'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { LogoTicker } from '@/components/sections/LogoTicker'
import { Testimonials } from '@/components/sections/Testimonials'
import { CallToAction } from '@/components/sections/CallToAction'
import { Footer } from '@/components/sections/Footer'
import { Features } from '@/components/sections/Features'

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
        <Hero />
        <LogoTicker />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </SignedOut>
    
    </main>
  )
}

export default Layout