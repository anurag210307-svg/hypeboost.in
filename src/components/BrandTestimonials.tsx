import React from 'react';
import { BRAND_TESTIMONIALS } from '../data/testimonials';
import { Star } from 'lucide-react';

export const BrandTestimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block transform -rotate-1 mb-2">
            <span className="bg-[#FFE478] text-[#141414] text-xs font-black uppercase tracking-wider px-3 py-1 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              Sticky Notes from Partners
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
            Client & Brand <span className="underline decoration-[#EB6226] decoration-wavy">Reviews</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 mt-3 font-medium">
            Read what growth leads and acquisition teams share about working with HYPEBOOST.
          </p>
        </div>

        {/* Sticky Note Cards Grid: 2 Rows x 2 Reviews on Full Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {BRAND_TESTIMONIALS.map((item, index) => {
            const isYellow = index % 2 === 0;
            const tiltClass = index % 2 === 0 ? '-rotate-[0.5deg] hover:rotate-0' : 'rotate-[0.5deg] hover:rotate-0';
            return (
              <div
                key={item.id}
                className={`relative ${
                  isYellow ? 'bg-[#FFE478]' : 'bg-[#FFFFFF]'
                } border-[3px] border-[#141414] rounded-lg p-6 sm:p-8 shadow-[5px_5px_0px_#141414] flex flex-col justify-between h-full transform ${tiltClass} hover:-translate-y-1 transition-all duration-200`}
              >
                {/* Washi Tape Strip */}
                <div className="washi-tape -top-3 left-8 rotate-2" />

                <div>
                  {/* Category Pin */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-[#141414] text-white px-2 py-0.5 rounded font-['Space_Grotesk']">
                      {item.categoryTag}
                    </span>
                    <div className="flex text-[#141414]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#141414]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-[#141414] font-medium leading-relaxed mb-6 font-['Space_Grotesk']">
                    "{item.quote}"
                  </p>
                </div>

                {/* Attribution & Metric Note */}
                <div className="pt-4 border-t-2 border-[#141414]/20">
                  <div className="text-sm font-black text-[#141414] font-['Space_Grotesk']">
                    {item.name}
                  </div>
                  <div className="text-xs font-bold text-neutral-700 font-['Space_Grotesk'] mt-0.5">
                    {item.role}
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#141414]/10 flex items-center justify-between">
                    <span className="text-xs font-['Permanent_Marker'] text-[#EB6226]">
                      {item.resultsMetric}
                    </span>
                    <span className="text-[10px] text-neutral-600 font-bold">
                      {item.resultsLabel}
                    </span>
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
