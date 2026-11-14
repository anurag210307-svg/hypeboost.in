import React from 'react';
import { ArrowUp, Instagram, Mail, Sparkles } from 'lucide-react';
import { PixelGlasses } from './PixelGlasses';
import { XIcon, SubstackIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-[#F7F1E6] pt-16 pb-24 border-t-[3px] border-[#141414] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative inline-flex items-center group pt-2 pb-0.5 px-1 mb-1">
              {/* Goggles positioned slightly upper to #, totally visible, opposite tilt (~ -16deg) */}
              <div className="absolute -top-3 left-0 z-20 pointer-events-none transform -rotate-[16deg] group-hover:-rotate-[24deg] group-hover:scale-110 transition-transform duration-200">
                <div className="bg-[#FFE478] px-1.5 py-0.5 rounded border-2 border-white shadow-[2px_2px_0px_#EB6226]">
                  <PixelGlasses className="w-8 sm:w-9 h-auto" />
                </div>
              </div>

              {/* Improvised Naming Styling in Foreground */}
              <div className="relative z-10 flex items-center font-['Space_Grotesk'] bg-[#141414] px-2.5 py-1 rounded-md border-2 border-white shadow-[2.5px_2.5px_0px_#EB6226] select-none">
                <span className="text-[#EB6226] font-black text-lg sm:text-xl mr-0.5 leading-none">
                  #
                </span>
                <span className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
                  hype<span className="text-[#EB6226]">boost</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed max-w-sm">
              The anti-agency creator representation and influencer marketing shop. Flat pricing, verified reach, and zero lock-in contracts.
            </p>

            {/* Sticker Sign-off */}
            <div className="inline-block transform -rotate-2">
              <span className="bg-[#FFE478] text-[#141414] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded border border-white font-['Space_Grotesk']">
                ★ BUILT FOR CREATIVE INDEPENDENCE
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-[#EB6226] font-['Space_Grotesk'] mb-3">
              Explore
            </div>
            <ul className="space-y-2 text-xs font-medium text-neutral-300">
              <li>
                <a href="#creators" className="hover:text-[#FFE478] transition-colors">
                  Creator Roster
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FFE478] transition-colors">
                  Agency Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#FFE478] transition-colors">
                  4-Step Process
                </a>
              </li>
              <li>
                <a href="#numbers" className="hover:text-[#FFE478] transition-colors">
                  Proof & Numbers
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#FFE478] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#FFE478] transition-colors">
                  FAQ Accordion
                </a>
              </li>
            </ul>
          </div>

          {/* Social Pills */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-[#EB6226] font-['Space_Grotesk'] mb-3">
              Connect With Us
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.instagram.com/hypeboost.in1?xtok=MXZub3huMDhqMjdiZA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @hypeboost.in1"
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] hover:bg-[#FFE478] hover:text-[#141414] hover:border-white transition-all text-xs font-bold flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com/hypeboostin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X @hypeboostin"
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] hover:bg-[#FFE478] hover:text-[#141414] hover:border-white transition-all text-xs font-bold flex items-center gap-1.5"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>X</span>
              </a>
              <a
                href="https://substack.com/@hypeboost?utm_source=share&utm_medium=android&r=9bz6ql"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Substack @hypeboost"
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] hover:bg-[#FFE478] hover:text-[#141414] hover:border-white transition-all text-xs font-bold flex items-center gap-1.5"
              >
                <SubstackIcon className="w-3.5 h-3.5" />
                <span>Substack</span>
              </a>
              <a
                href="mailto:contact@hypeboost.in"
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/[0.06] hover:bg-[#FFE478] hover:text-[#141414] hover:border-white transition-all text-xs font-bold flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@hypeboost.in</span>
              </a>
            </div>

            <div className="pt-3">
              <p className="text-[11px] text-neutral-400">
                Direct Inquiries:{' '}
                <a
                  href="mailto:contact@hypeboost.in"
                  className="text-white font-bold hover:text-[#FFE478] transition-colors"
                >
                  contact@hypeboost.in
                </a>
                {' '}• 24hr response time
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} HYPEBOOST Agency. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
