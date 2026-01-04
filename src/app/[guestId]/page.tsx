'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
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
import { MusicPlayer } from '@/components/MusicPlayer'
import GuestsService from '@/lib/services/guests/guests.service'

export default function GuestPage() {
  const { guestId } = useParams()
  const searchParams = useSearchParams()
  const toParam = searchParams.get('to')
  
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  // Fetch guest data
  const guest = GuestsService.GetGuestDetail.useQuery(guestId as string)

  const guestName = toParam || guest.data?.name || 'Tamu Undangan'
  const guestIdValue = guest.data?.id || (guestId as string)
  const groupIdValue = guest.data?.groupId || ''

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true)
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

  // Jika invitation belum dibuka, tampilkan Opening Section
  if (!isInvitationOpen) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
        <OpeningSection guestName={guestName} onOpenInvitation={handleOpenInvitation} />
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/cinematic.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/70 to-slate-900" />
      </div>

      {/* Music Player */}
      <MusicPlayer />

      {/* Sections */}
      <div className="relative z-10">
        <div ref={(el) => { if (el) sectionsRef.current[0] = el }}>
          <CoverSection guestName={guestName} onScrollToNext={handleScrollToNext} />
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
          <LocationSection />
        </div>
        <div ref={(el) => { if (el) sectionsRef.current[5] = el }}>
          <CountdownSection />
        </div>
        <div ref={(el) => { if (el) sectionsRef.current[6] = el }}>
          <WeddingGiftSection />
        </div>
        <div ref={(el) => { if (el) sectionsRef.current[7] = el }}>
          <WishesSection 
            guestId={guestIdValue}
            groupId={groupIdValue}
            guestName={guestName}
          />
        </div>
        <div ref={(el) => { if (el) sectionsRef.current[8] = el }} className="pb-20">
          <ClosingSection />
        </div>
      </div>

      {/* Footer Menu */}
      <FooterMenu activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Navigation Dots */}
      <NavigationDots activeSection={activeSection} onNavigate={scrollToSection} totalSections={9} />
    </div>
  )
}
