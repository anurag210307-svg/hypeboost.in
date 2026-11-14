import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenContact: (type?: 'creator' | 'brand') => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="bg-[#FFE478] border-b-[3px] border-[#141414] py-20 sm:py-28 relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Floating Sticker */}
        <div className="inline-block transform -rotate-2 mb-4">
          <span className="bg-[#141414] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-white shadow-[2px_2px_0px_#141414]">
            ★ LET’S WORK TOGETHER ★
          </span>
        </div>

        {/* Giant Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight max-w-4xl mx-auto leading-[1.05]">
          Ready to scale your next campaign with <span className="underline decoration-[#EB6226] decoration-wavy">zero fluff</span>?
        </h2>

        <p className="mt-5 text-sm sm:text-base text-neutral-800 font-medium max-w-xl mx-auto">
          Whether you’re a brand seeking genuine reach or a creator wanting proactive management, we’ve got your back.
        </p>

        {/* Action Button */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenContact('brand')}
            className="neu-btn-white text-sm sm:text-base px-8 py-4 flex items-center gap-2 text-[#141414] shadow-[5px_5px_0px_#141414]"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            onClick={() => onOpenContact('creator')}
            className="neu-btn-purple text-sm sm:text-base px-7 py-4 flex items-center gap-2 shadow-[5px_5px_0px_#141414]"
          >
            <span>Apply as Creator</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};
