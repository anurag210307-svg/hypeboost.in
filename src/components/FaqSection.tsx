import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqs';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'creator' | 'brand'>('creator');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const filteredFaqs = FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#F7F1E6] relative border-b-[3px] border-[#141414]" id="faqs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-block transform -rotate-1 mb-2">
            <span className="bg-[#FFE478] text-[#141414] text-xs font-black uppercase tracking-wider px-3 py-1 rounded border-2 border-[#141414] shadow-[2px_2px_0px_#141414]">
              Got Questions?
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] font-['Space_Grotesk'] tracking-tight">
            Frequently Asked <span className="underline decoration-[#EB6226] decoration-wavy">Questions</span>
          </h2>

          {/* Neubrutalist Tab Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-white border-[2.5px] border-[#141414] rounded-full shadow-[3px_3px_0px_#141414]">
            <button
              onClick={() => {
                setActiveCategory('creator');
                setExpandedIndex(0);
              }}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeCategory === 'creator'
                  ? 'bg-[#141414] text-white shadow-[2px_2px_0px_#FFE478]'
                  : 'text-[#141414] hover:bg-[#F7F1E6]'
              }`}
            >
              For Creators
            </button>
            <button
              onClick={() => {
                setActiveCategory('brand');
                setExpandedIndex(0);
              }}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeCategory === 'brand'
                  ? 'bg-[#141414] text-white shadow-[2px_2px_0px_#FFE478]'
                  : 'text-[#141414] hover:bg-[#F7F1E6]'
              }`}
            >
              For Brands
            </button>
          </div>
        </div>

        {/* Neubrutalist 2-Column Accordion Grid: 2 Rows x 2 Questions on Full Screen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = expandedIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white border-[3px] border-[#141414] rounded-lg shadow-[4px_4px_0px_#141414] overflow-hidden transition-all duration-150"
              >
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full text-left py-4 sm:py-5 px-5 sm:px-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#F7F1E6]/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-black text-[#141414] font-['Space_Grotesk'] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border-2 border-[#141414] flex items-center justify-center shrink-0 mt-0.5 transition-transform ${
                      isOpen ? 'bg-[#FFE478] rotate-180' : 'bg-[#F7F1E6]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-[#141414] stroke-[3]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#141414] stroke-[3]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal border-t-2 border-[#141414]/10 bg-[#F7F1E6]/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
