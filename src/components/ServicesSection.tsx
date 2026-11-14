import React from 'react';
import { Target, Users, Zap, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (type?: 'creator' | 'brand') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const services = [
    {
      id: 'creator-management',
      title: 'Creator Management & Career Growth',
      subtitle: 'ZERO-LOCKIN // 100% CREATOR FIRST',
      desc: 'Proactive brand outreach, rate negotiations, contracts, invoicing, and personal calendar scheduling so creators focus solely on high-production content.',
      icon: '🤝',
      tags: ['Sponsorships', 'Rate Defense', 'Legal Review'],
      tilt: '-rotate-[0.5deg]'
    },
    {
      id: 'brand-campaigns',
      title: 'End-to-End Influencer Campaigns',
      subtitle: 'HIGH CONVERSION // FLAT PRICING',
      desc: 'Bespoke talent curation matched with your ICP. Complete brief formulation, script review, creative hooks, and rigorous delivery timeline tracking.',
      icon: '🎯',
      tags: ['Curation', 'Contracting', 'Quality Control'],
      tilt: 'rotate-[0.5deg]'
    },
    {
      id: 'short-form-strategy',
      title: 'Viral Strategy & Reel Formats',
      subtitle: 'ALGORITHM-NATIVE // RETENTION HOOKS',
      desc: 'Specialized 3-second hook testing, pacing audits, sound trend exploitation, and visual storytelling proven to cross multi-million organic view thresholds.',
      icon: '⚡',
      tags: ['Reels', 'Shorts', 'Pacing & Hooks'],
      tilt: '-rotate-[0.5deg]'
    },
    {
      id: 'performance-analytics',
      title: 'Performance & Post-Campaign ROI',
      subtitle: 'NO BLUFF // VERIFIED CONVERSIONS',
      desc: 'Granular tracking dashboards with validated reach, link CTRs, audience retention curves, and EMV calculations delivered within 72 hours post-campaign.',
      icon: '📊',
      tags: ['EMV Reporting', 'Audience Overlap', 'Attribution'],
      tilt: 'rotate-[0.5deg]'
    }
  ];

  const channels = [
    { name: 'Instagram Reels & Stories', level: 5, note: 'Primary Flight Engine' },
    { name: 'YouTube Longform & Shorts', level: 5, note: 'High Retention & Search' },
    { name: 'Podcast Integrations', level: 4, note: 'Authority & Conversions' },
    { name: 'Omnichannel Roadblocks', level: 4, note: 'Full Market Saturation' }
  ];

  return (
    <section className="py-24 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block transform -rotate-1 mb-2">
            <span className="bg-[#EB6226] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
            Services Built for <span className="underline decoration-[#FFE478] decoration-wavy">High Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 mt-3 font-medium">
            Everything you need to launch, scale, and measure creator campaigns without the typical agency bloat.
          </p>
        </div>

        {/* Services Cards Grid with Neubrutalist Tilts: 2 Rows x 2 Services on Full Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          {services.map((item) => (
            <div
              key={item.id}
              className={`relative bg-white border-[3px] border-[#141414] rounded-lg p-6 sm:p-8 shadow-[5px_5px_0px_#141414] transform ${item.tilt} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full`}
            >
              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FFE478] border-2 border-[#141414] shadow-[2px_2px_0px_#141414] flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-[#141414] bg-[#F7F1E6] border border-[#141414] px-2 py-0.5 rounded shadow-[1px_1px_0px_#141414]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#141414] font-['Space_Grotesk'] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-[#EB6226] font-['Space_Grotesk'] mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-[#141414]/10 flex items-center justify-between">
                <span className="text-xs font-['Permanent_Marker'] text-[#EB6226]">
                  ★ 100% Guaranteed Outreach
                </span>
                <button
                  onClick={() => onOpenContact('brand')}
                  className="text-xs font-bold text-[#141414] hover:text-[#EB6226] underline decoration-2 cursor-pointer"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Progress Mini Bars: Channel Expertise */}
        <div className="bg-white border-[3px] border-[#141414] rounded-lg p-6 sm:p-8 shadow-[5px_5px_0px_#141414]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#141414]">
            <div>
              <h4 className="text-lg font-black text-[#141414] font-['Space_Grotesk']">
                Channels We Run & Depth of Expertise
              </h4>
              <p className="text-xs text-neutral-600 font-medium">
                Segmented capability meters across our primary execution vectors.
              </p>
            </div>
            <div className="text-xs font-['Caveat'] text-[#EB6226] text-base font-bold">
              ✦ Constantly benchmarked against algorithm shifts
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((chan) => (
              <div key={chan.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#141414]">
                  <span>{chan.name}</span>
                  <span className="text-[10px] text-[#EB6226]">{chan.note}</span>
                </div>
                {/* 5-Block Segmented Bar */}
                <div className="grid grid-cols-5 gap-1.5">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <div
                      key={idx}
                      className={`h-3 rounded-sm border border-[#141414] transition-all ${
                        idx <= chan.level
                          ? 'bg-[#FFE478] shadow-[1px_1px_0px_#141414]'
                          : 'bg-[#F7F1E6]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
