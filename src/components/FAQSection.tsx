import React, { useState } from 'react';
import { FAQ_LIST } from '../data/mockData';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-[#0284C7] text-xs font-bold shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#0284C7]" />
            <span>궁금증 완벽 해결</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            자주 묻는 <span className="text-[#0284C7]">질문 (FAQ)</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            화물차 리스, 저신용 렌트, 세제 혜택에 관한 핵심 궁금증을 명쾌하게 답변해 드립니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#0284C7] transition-colors"
                >
                  <span className="text-base sm:text-lg flex items-center gap-3">
                    <span className="text-[#0284C7] font-black">Q.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0284C7] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p className="flex items-start gap-2">
                      <span className="text-[#0284C7] font-extrabold mt-0.5">A.</span>
                      <span>{faq.a}</span>
                    </p>
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
