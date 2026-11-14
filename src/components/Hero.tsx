import React from 'react';
import { ArrowUpRight, Sparkles, MessageCircle, Star, TrendingUp, Heart, Play } from 'lucide-react';
import { CREATORS_ROSTER } from '../data/creators';

interface HeroProps {
  onOpenContact: (type?: 'creator' | 'brand') => void;
  onSelectRole: (role: 'creator' | 'brand') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onSelectRole }) => {
  const topCreators = CREATORS_ROSTER.slice(0, 4);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F1E6]" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Floating Badge & Greeting */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Nametag Sticker */}
          <div className="inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-150 mb-4 cursor-default">
            <div className="bg-[#FFFFFF] border-[3px] border-[#141414] shadow-[3px_3px_0px_#141414] rounded-lg px-4 py-1.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB6226]" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#141414] font-['Space_Grotesk']">
                HELLO, WE ARE <span className="text-[#EB6226]">HYPEBOOST</span>
              </span>
            </div>
          </div>

          {/* Main Headline with Marker Accent */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#141414] font-['Space_Grotesk'] leading-[1.08] max-w-5xl mx-auto">
            Helping{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10">Creators</span>
              <span className="absolute left-0 bottom-1 w-full h-4 sm:h-6 bg-[#FFE478] -rotate-1 -z-0 rounded-sm" />
            </span>{' '}
            dream big, and{' '}
            <span className="relative inline-block px-1">
              <span className="relative z-10 text-[#EB6226]">Brands</span>
              <span className="absolute left-0 bottom-1 w-full h-4 sm:h-6 bg-[#FFE478]/70 rotate-1 -z-0 rounded-sm" />
            </span>{' '}
            grow bigger!
          </h1>

          {/* Handwritten Annotation Note */}
          <div className="mt-4 flex items-center gap-2 text-sm sm:text-base font-['Caveat'] text-[#EB6226] font-bold tracking-wide transform -rotate-1">
            <span>✦ No lock-in contracts</span>
            <span>·</span>
            <span>✦ 100% transparent fee structure</span>
            <span>·</span>
            <span>✦ 48hr turnaround</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact('brand')}
              className="neu-btn text-sm sm:text-base px-7 py-3.5 flex items-center gap-2"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              href="#creators"
              onClick={() => onSelectRole('creator')}
              className="neu-btn-white text-sm sm:text-base px-6 py-3.5 flex items-center gap-2"
            >
              <span>Explore Roster</span>
            </a>
          </div>
        </div>

        {/* Hero Collage Section: Rotated Photo Card + Washi Tape + Stickers + Spinning Badge */}
        <div className="relative mt-12 sm:mt-16 max-w-4xl mx-auto">
          {/* Rotating Circular "Book a Call" Badge */}
          <div className="absolute -top-10 -right-2 sm:-right-8 z-30 hidden sm:block">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-black uppercase tracking-[2px] fill-[#141414] font-['Space_Grotesk']">
                  <textPath href="#circlePath" startOffset="0%">
                    ✦ BOOK A CALL ✦ HYPEBOOST ✦
                  </textPath>
                </text>
              </svg>
              <div
                onClick={() => onOpenContact('brand')}
                className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#FFE478] border-[2.5px] border-[#141414] shadow-[2px_2px_0px_#141414] flex items-center justify-center font-bold text-xs cursor-pointer hover:scale-105 transition-transform"
              >
                GO!
              </div>
            </div>
          </div>

          {/* Centerpiece Scrapbook Photo Card */}
          <div className="relative bg-white border-[3px] border-[#141414] rounded-lg p-4 sm:p-6 shadow-[6px_6px_0px_#141414] transform -rotate-1 hover:rotate-0 transition-transform duration-200">
            {/* Washi Tape Accent on Top Edge */}
            <div className="washi-tape -top-3 left-8 sm:left-12 -rotate-3" />
            <div className="washi-tape-pink -top-3 right-8 sm:right-16 rotate-2" />

            {/* Collage Header Pill */}
            <div className="flex items-center justify-between border-b-[2.5px] border-[#141414] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#EB6226] border border-[#141414]" />
                <span className="w-3 h-3 rounded-full bg-[#FFE478] border border-[#141414]" />
                <span className="w-3 h-3 rounded-full bg-[#7C3AED] border border-[#141414]" />
                <span className="text-xs font-bold font-['Space_Grotesk'] ml-1 text-[#141414]">
                  CREATOR_COLLECTIONS_2026.MOV
                </span>
              </div>
              <span className="text-xs font-['Permanent_Marker'] text-[#EB6226]">
                ★ VERIFIED ROSTER
              </span>
            </div>

            {/* Polaroid Grid of Top Creators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {topCreators.map((creator, i) => (
                <div
                  key={creator.id}
                  className={`bg-[#F7F1E6] border-2 border-[#141414] rounded p-2.5 shadow-[2.5px_2.5px_0px_#141414] transform ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'
                    } hover:rotate-0 transition-transform`}
                >
                  <div className="relative aspect-square overflow-hidden rounded border border-[#141414] mb-2 bg-[#141414]">
                    <img
                      src={creator.avatarUrl}
                      alt={creator.name}
                      referrerPolicy="no-referrer"
                      decoding="async"
                      className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-200"
                    />
                    <div className="absolute top-1 right-1 bg-white/95 border border-[#141414] text-[9px] font-bold px-1.5 py-0.5 rounded shadow-[1px_1px_0px_#141414]">
                      {creator.platformType === 'youtube' ? 'YT' : 'IG'}
                    </div>
                  </div>
                  <div className="text-[12px] font-black text-[#141414] truncate font-['Space_Grotesk']">
                    {creator.name}
                  </div>
                  <div className="text-[10px] text-neutral-600 truncate font-['Space_Grotesk']">
                    {creator.handle}
                  </div>
                </div>
              ))}
            </div>

            {/* Sticker Badges Layered Around Card */}
            {/* Sticker 1: Megaphone */}
            <div className="absolute -bottom-5 -left-3 sm:-left-6 z-20 transform -rotate-6 hover:rotate-0 transition-transform">
              <div className="bg-[#FFE478] border-[2.5px] border-[#141414] shadow-[3px_3px_0px_#141414] rounded-full px-3.5 py-1.5 flex items-center gap-1.5">
                <span className="text-sm">📢</span>
                <span className="text-[11px] font-black font-['Space_Grotesk'] text-[#141414]">
                  REAL REACH
                </span>
              </div>
            </div>

            {/* Sticker 2: Chart Up */}
            <div className="absolute -bottom-5 right-4 sm:right-10 z-20 transform rotate-3 hover:rotate-0 transition-transform">
              <div className="bg-[#FFFFFF] border-[2.5px] border-[#141414] shadow-[3px_3px_0px_#141414] rounded-full px-3.5 py-1.5 flex items-center gap-1.5">
                <span className="text-sm">📈</span>
                <span className="text-[11px] font-black font-['Space_Grotesk'] text-[#EB6226]">
                  +212% ENGAGEMENT
                </span>
              </div>
            </div>

            {/* Sticker 3: Heart like counter */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 transform rotate-1 hidden sm:block">
              <div className="bg-[#7C3AED] text-white border-[2.5px] border-[#141414] shadow-[3px_3px_0px_#141414] rounded-full px-3.5 py-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span className="text-[11px] font-black font-['Space_Grotesk']">
                  CREATOR LAND
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
