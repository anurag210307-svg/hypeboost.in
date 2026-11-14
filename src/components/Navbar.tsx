import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { PixelGlasses } from './PixelGlasses';

interface NavbarProps {
  onOpenContact: (type?: 'creator' | 'brand') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Creators', href: '#creators' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Numbers', href: '#numbers' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <div
        className="max-w-4xl mx-auto rounded-full bg-[#FFFFFF] border-[3px] border-[#141414] shadow-[4px_4px_0px_#141414] transition-all duration-200 pointer-events-auto py-2.5 px-4 sm:px-6 flex items-center justify-between gap-3"
      >
        {/* Brand Mark with Goggles slightly upper to # in opposite tilt */}
        <a
          href="#"
          className="relative inline-flex items-center group focus-visible:outline-none shrink-0 pt-2 pb-0.5 px-1"
          aria-label="#hypeboost Agency"
        >
          {/* Goggles positioned slightly upper to #, totally visible, opposite tilt (~ -16deg) */}
          <div className="absolute -top-3 left-0 z-20 pointer-events-none transform -rotate-[16deg] group-hover:-rotate-[24deg] group-hover:scale-110 transition-transform duration-200">
            <div className="bg-[#FFE478] px-1.5 py-0.5 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              <PixelGlasses className="w-8 sm:w-9 h-auto" />
            </div>
          </div>

          {/* Improvised Naming Styling in Foreground */}
          <div className="relative z-10 flex items-center font-['Space_Grotesk'] bg-white px-2.5 py-1 rounded-md border-2 border-[#141414] shadow-[2.5px_2.5px_0px_#141414] group-hover:shadow-[3.5px_3.5px_0px_#141414] group-hover:-translate-y-0.5 transition-all select-none">
            <span className="text-[#EB6226] font-black text-lg sm:text-xl mr-0.5 leading-none">
              #
            </span>
            <span className="text-base sm:text-lg font-black tracking-tight text-[#141414] leading-none">
              hype<span className="text-[#EB6226]">boost</span>
            </span>
          </div>
        </a>

        {/* Clean Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-bold text-[#141414]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-[#EB6226] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#EB6226] after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary Action Button - Neubrutalist Yellow Pill */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenContact('brand')}
            className="neu-btn text-xs px-4 sm:px-5 py-2 flex items-center gap-1.5"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Book a Call</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border-2 border-[#141414] bg-[#F7F1E6] hover:bg-[#FFE478] text-[#141414] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto rounded-xl bg-white border-[3px] border-[#141414] shadow-[4px_4px_0px_#141414] p-4 pointer-events-auto animate-in fade-in duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#141414] hover:text-[#EB6226] py-1 border-b border-[#141414]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('brand');
                }}
                className="neu-btn text-xs py-2.5 text-center justify-center flex"
              >
                Book a Call (Brands)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('creator');
                }}
                className="neu-btn-white text-xs py-2.5 text-center justify-center flex"
              >
                Apply as Creator
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
