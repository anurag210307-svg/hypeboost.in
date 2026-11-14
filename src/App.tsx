/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceMarquee } from './components/ServiceMarquee';
import { ServicesSection } from './components/ServicesSection';
import { CreatorsShowcase } from './components/CreatorsShowcase';
import { ProcessSection } from './components/ProcessSection';
import { StatsSection } from './components/StatsSection';
import { BrandTestimonials } from './components/BrandTestimonials';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CreatorDetailModal } from './components/CreatorDetailModal';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Creator } from './types';

export default function App() {
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [contactRole, setContactRole] = useState<'creator' | 'brand'>('brand');
  const [contactPrefill, setContactPrefill] = useState<string>('');

  const handleOpenContact = (role: 'creator' | 'brand' = 'brand', prefillNote: string = '') => {
    setContactRole(role);
    setContactPrefill(prefillNote);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookCreator = (creator: Creator) => {
    setSelectedCreator(null);
    handleOpenContact(
      'brand',
      `Campaign Booking: I would like to run a collaboration with ${creator.name} (${creator.handle}).`
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F1E6] text-[#141414] flex flex-col font-['Space_Grotesk'] selection:bg-[#FFE478] selection:text-[#141414] relative">
      {/* Subtle Paper Texture Grain Overlay via Inline SVG Filter */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.045] z-50 mix-blend-multiply"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>

      {/* 1. Sticky Top Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Agency Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Collage & Stickers */}
        <Hero
          onOpenContact={handleOpenContact}
          onSelectRole={(role) => handleOpenContact(role)}
        />

        {/* 3. Services Marquee Strip */}
        <ServiceMarquee />

        {/* 4. Services with Segmented Mini-bars */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 5. Work / Creator Showcase with Polaroid Cards */}
        <CreatorsShowcase
          onSelectCreator={(creator) => setSelectedCreator(creator)}
          onOpenContact={handleOpenContact}
        />

        {/* 6. Process Section (4-Step Timeline & Stacking Cards) */}
        <ProcessSection />

        {/* 7. Numbers & Big Counters */}
        <StatsSection />

        {/* 8. Testimonials (Sticky Notes Style) */}
        <BrandTestimonials />

        {/* 9. Final Call to Action Block */}
        <FinalCtaSection onOpenContact={handleOpenContact} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />

        {/* 12. Contact Form & Direct Information */}
        <ContactSection
          initialRole={contactRole}
          prefilledNote={contactPrefill}
        />
      </main>

      {/* 13. Dark Footer with Social Pills */}
      <Footer />

      {/* 14. Fixed Floating Action Pills (Book a Call & WhatsApp) */}
      <FloatingActions onOpenContact={handleOpenContact} />

      {/* 15. Creator Detail Modal */}
      <CreatorDetailModal
        creator={selectedCreator}
        onClose={() => setSelectedCreator(null)}
        onBook={handleBookCreator}
      />

      {/* 16. Vercel Web Analytics & Site Performance Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
