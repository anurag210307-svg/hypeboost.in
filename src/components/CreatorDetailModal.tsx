import React from 'react';
import { Creator } from '../types';
import { X, ArrowUpRight, Instagram, Youtube } from 'lucide-react';

interface CreatorDetailModalProps {
  creator: Creator | null;
  onClose: () => void;
  onBook: (creator: Creator) => void;
}

export const CreatorDetailModal: React.FC<CreatorDetailModalProps> = ({ creator, onClose, onBook }) => {
  if (!creator) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px] animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-lg bg-white border-[3px] border-[#141414] p-6 sm:p-8 shadow-[8px_8px_0px_#141414] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Washi Tape Strip */}
        <div className="washi-tape -top-3 left-12 -rotate-2" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full border-2 border-[#141414] bg-[#F7F1E6] hover:bg-[#FFE478] text-[#141414] transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4 stroke-[3]" />
        </button>

        {/* Creator Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img
              src={creator.avatarUrl}
              alt={creator.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded border-2 border-[#141414] object-cover shadow-[2px_2px_0px_#141414]"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-[#141414] font-['Space_Grotesk']">
                {creator.name}
              </h3>
            </div>

            <div className="text-xs text-neutral-600 font-bold font-['Space_Grotesk'] mt-0.5">
              {creator.handle} · {creator.followers}
            </div>

            <div className="text-xs font-black text-[#EB6226] font-['Space_Grotesk'] mt-1">
              {creator.categoryLabel}
            </div>
          </div>

          <a
            href={creator.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border-2 border-[#141414] bg-[#FFE478] hover:bg-white text-[#141414] transition-colors shadow-[2px_2px_0px_#141414] shrink-0"
            aria-label="Visit creator profile"
          >
            {creator.platformType === 'youtube' ? (
              <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
            ) : (
              <Instagram className="w-4 h-4" />
            )}
          </a>
        </div>

        {/* Quote / Background Note */}
        <div className="mb-6 p-4 rounded border-2 border-[#141414] bg-[#F7F1E6] relative">
          <span className="text-[10px] font-['Permanent_Marker'] text-[#EB6226] uppercase block mb-1">
            ★ CREATOR PERSPECTIVE
          </span>
          <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
            "{creator.quote}"
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onBook(creator)}
          className="w-full neu-btn py-3.5 text-xs sm:text-sm uppercase tracking-wider font-black flex items-center justify-center gap-2"
        >
          <span>Book Collaboration with {creator.name}</span>
          <ArrowUpRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
