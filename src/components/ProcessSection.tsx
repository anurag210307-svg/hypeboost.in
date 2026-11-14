import React from 'react';
import { Target, Users, Zap, BarChart3 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      dateMarker: 'DAY 1 // STRATEGY',
      title: 'Strategy Brief & Angle Matching',
      description: 'We audit your target demographics, conversion benchmarks, and brand guidelines to draft a high-intent creator brief.',
      icon: Target,
      color: 'bg-[#FFE478]'
    },
    {
      step: '02',
      dateMarker: 'DAY 2-4 // DISCOVERY',
      title: 'Creator Vetting & Contracting',
      description: 'Handpicking talent from our verified roster with zero-leakage contracts, usage rights negotiation, and fixed deliverables.',
      icon: Users,
      color: 'bg-[#FFFFFF]'
    },
    {
      step: '03',
      dateMarker: 'DAY 5-10 // PRODUCTION',
      title: 'Scripting, Hooks & Filming',
      description: 'Creators draft native hooks and high-retention concepts. We review storyboard alignment before cameras roll to prevent revisions.',
      icon: Zap,
      color: 'bg-[#FFFFFF]'
    },
    {
      step: '04',
      dateMarker: 'POST-CAMPAIGN // ROI',
      title: 'Verified Results & Reporting',
      description: 'Transparent end-to-end performance tracking, organic view validation, engagement ratios, and thorough ROI analysis delivered right after flight.',
      icon: BarChart3,
      color: 'bg-[#FFE478]'
    }
  ];

  return (
    <section className="py-24 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="process">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block transform rotate-1 mb-2">
            <span className="bg-[#EB6226] text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              Workflow Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
            Our 4-Step <span className="underline decoration-[#FFE478] decoration-wavy">Campaign Process</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 mt-3 font-medium">
            From initial strategy brief to viral launch and comprehensive post-campaign reporting. 4 phases across 2 aligned tracks.
          </p>
        </div>

        {/* 2 Rows x 2 Steps Grid on Full Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.step}
                className={`relative ${item.color} border-[3px] border-[#141414] rounded-lg p-6 sm:p-8 shadow-[5px_5px_0px_#141414] flex flex-col justify-between h-full transform ${
                  isEven ? '-rotate-[0.5deg]' : 'rotate-[0.5deg]'
                } hover:rotate-0 hover:-translate-y-1 transition-all duration-200`}
              >
                {/* Washi Tape Strip */}
                <div
                  className={`washi-tape -top-3.5 ${
                    isEven ? 'right-10 rotate-3' : 'left-10 -rotate-3'
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    {/* Step Number Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#141414] text-white border-2 border-[#141414] flex items-center justify-center font-black font-['Space_Grotesk'] text-lg shrink-0 shadow-[2px_2px_0px_#FFE478]">
                      {item.step}
                    </div>

                    <div className="w-12 h-12 rounded-lg bg-white border-2 border-[#141414] shadow-[2px_2px_0px_#141414] flex items-center justify-center text-[#141414] shrink-0">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Marker Timeline Date */}
                  <div className="text-xs font-['Permanent_Marker'] text-[#EB6226] uppercase tracking-wider mb-1.5">
                    {item.dateMarker}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#141414] font-['Space_Grotesk'] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t-2 border-[#141414]/15 flex items-center justify-between text-xs font-bold text-neutral-600 font-['Space_Grotesk']">
                  <span>Phase {item.step} of 04</span>
                  <span className="text-[#141414] font-black">Guaranteed Milestone ✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
