import React from 'react';
import { CREATORS_ROSTER } from '../data/creators';
import { Creator } from '../types';
import { Instagram, Youtube, ArrowUpRight, BadgeCheck } from 'lucide-react';

interface CreatorsShowcaseProps {
  onSelectCreator: (creator: Creator) => void;
  onOpenContact: (type?: 'creator' | 'brand', prefillNote?: string) => void;
}

export const CreatorsShowcase: React.FC<CreatorsShowcaseProps> = ({ onSelectCreator }) => {
  return (
    <section className="py-24 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="creators">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block transform -rotate-1 mb-3">
            <span className="bg-[#FFE478] text-[#141414] text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              ✦ Real Creators, Real Audiences ✦
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
            Meet Our <span className="underline decoration-[#EB6226] decoration-wavy">Creator Roster</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 mt-3 font-medium">
            Handpicked talents with high audience retention and verified metrics. Exactly 8 active creators across 4 curated rows.
          </p>
        </div>

        {/* 4 Rows x 2 Creators per row Grid on Full Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {CREATORS_ROSTER.map((creator, index) => {
            const isTiltedLeft = index % 2 === 0;
            return (
              <div
                key={creator.id}
                onClick={() => onSelectCreator(creator)}
                className={`relative bg-white border-[3px] border-[#141414] rounded-lg p-5 sm:p-6 shadow-[5px_5px_0px_#141414] cursor-pointer group flex flex-col sm:flex-row gap-6 justify-between h-full transform transition-all duration-200 ${isTiltedLeft ? '-rotate-[0.5deg] hover:rotate-0' : 'rotate-[0.5deg] hover:rotate-0'
                  } hover:-translate-y-1 hover:shadow-[7px_7px_0px_#141414]`}
              >
                {/* Washi Tape Accent */}
                <div
                  className={`washi-tape -top-3.5 ${isTiltedLeft ? 'left-8 rotate-2' : 'right-8 -rotate-2'
                    }`}
                />

                {/* Left: Polaroid Photo Box */}
                <div className="relative w-full sm:w-48 md:w-52 shrink-0 aspect-[4/5] rounded border-2 border-[#141414] overflow-hidden bg-neutral-900 shadow-[2px_2px_0px_#141414]">
                  <img
                    src={creator.avatarUrl}
                    alt={creator.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Platform Link Icon Badge */}
                  <a
                    href={creator.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`View ${creator.name} on ${creator.platformType === 'youtube' ? 'YouTube' : 'Instagram'}`}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/95 border-2 border-[#141414] shadow-[1.5px_1.5px_0px_#141414] text-[#141414] hover:bg-[#FFE478] transition-colors"
                  >
                    {creator.platformType === 'youtube' ? (
                      <Youtube className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                    ) : (
                      <Instagram className="w-3.5 h-3.5" />
                    )}
                  </a>

                  {/* Follower Tag */}
                  <div className="absolute bottom-2.5 left-2.5 bg-white/95 border-2 border-[#141414] shadow-[1.5px_1.5px_0px_#141414] px-2.5 py-0.5 rounded text-[11px] font-black text-[#141414] font-['Space_Grotesk']">
                    {creator.followers}
                  </div>
                </div>

                {/* Right: Creator Content, Quote & Action */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    {/* Header: Name & Handle */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-xl sm:text-2xl font-black text-[#141414] font-['Space_Grotesk'] group-hover:text-[#EB6226] transition-colors">
                            {creator.name}
                          </h3>
                          <BadgeCheck className="w-4 h-4 text-[#EB6226] fill-[#FFE478] shrink-0" />
                        </div>
                        <span className="text-xs font-bold text-neutral-600 font-['Space_Grotesk'] block mt-0.5">
                          {creator.handle}
                        </span>
                      </div>
                    </div>

                    {/* Category Label */}
                    <div className="text-xs font-black text-[#EB6226] mt-2 font-['Space_Grotesk']">
                      {creator.categoryLabel}
                    </div>

                    {/* Creator Quote */}
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mt-3 line-clamp-4">
                      "{creator.quote}"
                    </p>
                  </div>

                  {/* Card Footer: Handwritten Tag + Action Button */}
                  <div className="pt-4 mt-4 border-t-2 border-[#141414]/15 flex items-center justify-between">
                    <span className="text-xs font-['Permanent_Marker'] text-[#141414]">
                      ★ Verified Roster
                    </span>

                    <div className="inline-flex items-center gap-1 text-xs font-black text-[#EB6226] group-hover:translate-x-1 transition-transform font-['Space_Grotesk']">
                      <span>Collaborate</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
