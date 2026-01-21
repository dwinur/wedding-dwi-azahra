'use client'

import { useState, useEffect, useRef } from 'react'
import { OpeningSection } from '@/components/sections/OpeningSection'
import { CoverSection } from '@/components/sections/CoverSection'
import { FamilySection } from '@/components/sections/FamilySection'
import { InvitationSection } from '@/components/sections/InvitationSection'
import { EventDetailsSection } from '@/components/sections/EventDetailsSection'
import { LocationSection } from '@/components/sections/LocationSection'
import { CountdownSection } from '@/components/sections/CountdownSection'
import { WeddingGiftSection } from '@/components/sections/WeddingGiftSection'
import { WishesSection } from '@/components/sections/WishesSection'
import { ClosingSection } from '@/components/sections/ClosingSection'
import { FooterMenu } from '@/components/FooterMenu'
import { NavigationDots } from '@/components/NavigationDots'
import { MusicPlayer, type MusicPlayerRef } from '@/components/MusicPlayer'

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const musicPlayerRef = useRef<MusicPlayerRef>(null)

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true)
    // Play music on user interaction (Safari compatible)
    musicPlayerRef.current?.play()
    // Delay content animation to sync with opening fade out
    setTimeout(() => {
      setIsContentVisible(true)
    }, 100)
  }

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(index)
  }

  const handleScrollToNext = () => {
    scrollToSection(1)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Main render with unified layout
  return (
    <div className="min-h-screen bg-cream">
      {/* Music Player - Always mounted to handle autoplay/user interaction */}
      <MusicPlayer ref={musicPlayerRef} />

      {!isInvitationOpen ? (
        <OpeningSection onOpenInvitation={handleOpenInvitation} />
      ) : (
        <>
          {/* Sections */}
          <div className={`relative z-10 transition-all duration-1000 ease-out delay-200 ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
            <div ref={(el) => { if (el) sectionsRef.current[0] = el }}>
              <CoverSection onScrollToNext={handleScrollToNext} />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[1] = el }}>
              <InvitationSection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[2] = el }}>
              <FamilySection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[3] = el }}>
              <EventDetailsSection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[4] = el }}>
              <CountdownSection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[5] = el }}>
              <LocationSection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[6] = el }}>
              <WeddingGiftSection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[7] = el }}>
              <WishesSection />
            </div>
            <div ref={(el) => { if (el) sectionsRef.current[8] = el }} className="pb-20">
              <ClosingSection />
            </div>
          </div>

          {/* Footer Menu */}
          <FooterMenu activeSection={activeSection} onNavigate={scrollToSection} />

          {/* Navigation Dots */}
          <NavigationDots activeSection={activeSection} onNavigate={scrollToSection} totalSections={9} />
        </>
      )}
    </div>
  )
}
