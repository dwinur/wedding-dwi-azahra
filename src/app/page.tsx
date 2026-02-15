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

const SECTION_IDS = [
  'cover',        // 0
  'invitation',   // 1
  'family',       // 2
  'event',        // 3
  'countdown',    // 4
  'location',     // 5
  'gift',         // 6
  'wishes',       // 7
  'closing'       // 8
]

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
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

  /* Helper to get absolute position */
  const getAbsoluteTop = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect()
    return rect.top + window.scrollY
  }

  const scrollToSection = (index: number) => {
    const sectionId = SECTION_IDS[index]
    const element = document.getElementById(sectionId)
    if (element) {
      const top = getAbsoluteTop(element)
      window.scrollTo({ top, behavior: 'smooth' })
      setActiveSection(index)
    }
  }

  const handleScrollToNext = () => {
    scrollToSection(1)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      SECTION_IDS.forEach((id, index) => {
        const element = document.getElementById(id)
        if (element) {
          const top = getAbsoluteTop(element)
          const bottom = top + element.offsetHeight

          if (scrollPosition >= top && scrollPosition < bottom) {
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
            {/* Cover Section */}
            <div id={SECTION_IDS[0]}>
              <CoverSection onScrollToNext={handleScrollToNext} />
            </div>

            {/* Invitation Section */}
            <div id={SECTION_IDS[1]}>
              <InvitationSection />
            </div>

            {/* Family Section */}
            <div id={SECTION_IDS[2]}>
              <FamilySection />
            </div>
            <div id={SECTION_IDS[3]}>
              <EventDetailsSection />
            </div>
            {/* CountdownSection hidden per user request */}
            {/* <div id={SECTION_IDS[4]}>
              <CountdownSection />
            </div> */}
            <div id={SECTION_IDS[5]}>
              <LocationSection />
            </div>
            <div id={SECTION_IDS[6]}>
              <WeddingGiftSection />
            </div>
            <div id={SECTION_IDS[7]}>
              <WishesSection />
            </div>
            <div id={SECTION_IDS[8]} className="pb-0">
              <ClosingSection />
            </div>
          </div>

          {/* Footer Menu */}
          <FooterMenu activeSection={activeSection} onNavigate={scrollToSection} />

          {/* Navigation Dots */}
          <NavigationDots activeSection={activeSection} onNavigate={scrollToSection} totalSections={SECTION_IDS.length} />
        </>
      )}
    </div>
  )
}
