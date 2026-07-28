import React, { useState } from 'react';
import { SPECIAL_DEALS } from '../data/mockData';
import { SpecialDeal } from '../types';
import { Sparkles, ArrowRight, Check, Zap, Tag, Truck, ShieldCheck, Flame } from 'lucide-react';

interface SpecialDealsProps {
  onSelectDeal: (deal: SpecialDeal) => void;
  onOpenQuoteModal: (vehicleName: string) => void;
}

export const SpecialDeals: React.FC<SpecialDealsProps> = ({ onSelectDeal, onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 프로모션' },
    { id: 'truck', label: '🚛 화물 / 특장차' },
    { id: 'ev', label: '⚡ 전기차 / EV' },
    { id: 'passenger', label: '🚗 인기 승용차' },
    { id: 'imported', label: '💎 수입 / 법인' },
    { id: 'lowcredit', label: '🛡️ 저신용 전담' },
  ];

  const filteredDeals = activeCategory === 'all'
    ? SPECIAL_DEALS
    : SPECIAL_DEALS.filter(deal => deal.category === activeCategory);

  return (
    <section id="special-deals" className="py-24 bg-slate-50 relative">
      {/* Background Accent Lines */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-[#0284C7] text-xs font-bold shadow-xs">
            <Flame className="w-4 h-4 text-[#0284C7] fill-current" />
            <span>2026 한정 특가 라인업</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            오늘의 <span className="text-[#0284C7]">특가 프로모션</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            인기 화물차부터 전기차, 수입차까지 초기 비용 부담을 제로로 낮춘 최저 월 납입금 조건.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-md shadow-sky-500/25'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-slate-900 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Deals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Card Header Image & Badges */}
              <div>
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[#0284C7] text-xs font-black shadow-xs">
                      {deal.categoryLabel}
                    </span>
                    {deal.popularRanking && (
                      <span className="px-2.5 py-1 rounded-full bg-rose-600 text-white text-xs font-bold shadow-xs">
                        TOP {deal.popularRanking}
                      </span>
                    )}
                  </div>

                  {/* Monthly Price Highlight Tag */}
                  <div className="absolute bottom-3 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-[11px] text-slate-400 line-through mr-1.5 font-medium">
                      월 {deal.originalMonthly}만원
                    </span>
                    <span className="text-xl font-black text-[#0284C7]">
                      월 {deal.dealMonthly}만원~
                    </span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-500 block mb-1">
                      {deal.brand}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors line-clamp-1">
                      {deal.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {deal.subtext}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {deal.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-sky-50 text-[#0284C7] border border-sky-100 text-[11px] font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-semibold">파워트레인</span>
                      <span className="font-bold text-slate-800 truncate block">{deal.specs.engine}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-semibold">출고 시기</span>
                      <span className="font-bold text-[#0284C7] truncate block">{deal.specs.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Key Benefits List */}
                  <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                    {deal.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#0284C7] mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenQuoteModal(`${deal.brand} ${deal.name}`)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-extrabold text-sm shadow-md hover:shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-1.5"
                >
                  <Zap className="w-4 h-4 fill-current text-sky-200" />
                  <span>특가 조건 빠른 견적 신청</span>
                </button>

                <button
                  onClick={() => onSelectDeal(deal)}
                  className="w-full py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all text-center"
                >
                  상세 세부 조건 보기
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
