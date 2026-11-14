import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';

interface FloatingActionsProps {
  onOpenContact: (type?: 'creator' | 'brand') => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenContact }) => {
  return (
    <>
      {/* Floating Bottom Right: Book a Call Pill */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => onOpenContact('brand')}
          className="neu-btn text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-2 shadow-[4px_4px_0px_#141414]"
          aria-label="Book a call"
        >
          <span className="font-bold">Book a Call</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Floating Bottom Left: Instagram Pill */}
      <div className="fixed bottom-5 left-5 z-40">
        <a
          href="https://www.instagram.com/hypeboost.in1?xtok=MXZub3huMDhqMjdiZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#141414] border-[2.5px] border-[#141414] rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 shadow-[3px_3px_0px_#141414] hover:bg-[#FFE478] hover:-translate-y-0.5 transition-all text-xs font-bold"
          aria-label="Follow Hypeboost on Instagram"
        >
          <Instagram className="w-3.5 h-3.5 text-[#EB6226]" />
          <span className="hidden sm:inline">Instagram</span>
        </a>
      </div>
    </>
  );
};
