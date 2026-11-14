import React from 'react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '100+',
      label: 'CURATED ROSTER',
      sub: 'Top Tier Digital Creators',
      badge: '★ HIGH ENGAGEMENT',
      color: 'bg-[#FFE478]',
      tilt: '-rotate-1'
    },
    {
      value: '0%',
      label: 'HIDDEN FEES',
      sub: 'Zero Shady Deductions',
      badge: '★ 100% TRANSPARENT',
      color: 'bg-[#FFFFFF]',
      tilt: 'rotate-1'
    },
    {
      value: '48h',
      label: 'FAST MATCHING',
      sub: 'From Brief to Selection',
      badge: '★ SPEED & AGILITY',
      color: 'bg-[#FFFFFF]',
      tilt: '-rotate-1'
    },
    {
      value: '100%',
      label: 'TIMELY PAYOUTS',
      sub: 'Direct Creator Wire',
      badge: '★ TRUSTED PARTNER',
      color: 'bg-[#FFE478]',
      tilt: 'rotate-1'
    }
  ];

  return (
    <section className="py-20 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="numbers">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-['Permanent_Marker'] text-[#EB6226] uppercase tracking-wider">
            ★ BY THE NUMBERS ★
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight mt-1">
            Proof in Plain Sight
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`relative ${stat.color} border-[3px] border-[#141414] rounded-lg p-6 text-center shadow-[4px_4px_0px_#141414] transform ${stat.tilt} hover:rotate-0 hover:-translate-y-1 transition-all duration-200`}
            >
              {/* Sticker Stamp Label */}
              <div className="inline-block bg-[#141414] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded mb-3 font-['Space_Grotesk']">
                {stat.badge}
              </div>

              {/* Huge Counter Value */}
              <div className="text-5xl sm:text-6xl font-black text-[#141414] font-['Bebas_Neue'] tracking-tight">
                {stat.value}
              </div>

              <div className="text-xs font-black uppercase tracking-wider text-[#141414] font-['Space_Grotesk'] mt-1">
                {stat.label}
              </div>

              <div className="text-xs text-neutral-600 font-medium mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
