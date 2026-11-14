import React from 'react';

export const ServiceMarquee: React.FC = () => {
  const items = [
    'INFLUENCER MARKETING',
    'CREATOR STRATEGY',
    'VIRAL REELS & SHORTS',
    'YOUTUBE INTEGRATIONS',
    'ZERO HIDDEN COMMISSIONS',
    'CONTRACT VETTING',
    'PERFORMANCE TRACKING',
    'BRAND PARTNERSHIPS',
    '100% TRANSPARENCY'
  ];

  return (
    <div className="relative border-y-[3px] border-[#141414] bg-[#FFE478] py-3.5 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-sm sm:text-base font-black tracking-wider text-[#141414] font-['Space_Grotesk'] uppercase">
              {item}
            </span>
            <span className="text-base text-[#EB6226] font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
