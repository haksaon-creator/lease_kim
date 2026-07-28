import React, { useState } from 'react';
import { TRUST_STATS, DELIVERY_STORIES } from '../data/mockData';
import { DeliveryStory } from '../types';
import { Star, Quote, CheckCircle, ArrowRight, ShieldCheck, ThumbsUp, Calendar, Truck, User } from 'lucide-react';

interface TrustSectionProps {
  onSelectStory: (story: DeliveryStory) => void;
  onOpenQuoteModal: (vehicleName?: string) => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ onSelectStory, onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredStories = activeFilter === 'all'
    ? DELIVERY_STORIES
    : DELIVERY_STORIES.filter(story => story.clientType === activeFilter);

  return (
    <section id="delivery-stories" className="py-24 bg-slate-50 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Top Trust Numbers Grid */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-md mb-24">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-[#0284C7] tracking-widest uppercase">
              PROVEN RESULTS & NUMBERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              숫자로 증명하는 리스김의 압도적 신뢰
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="pt-4 lg:pt-0 lg:px-4 space-y-2">
                <p className="text-3xl sm:text-5xl font-black text-[#0284C7] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-900">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.subText}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Stories Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 text-[#0284C7] text-xs font-bold shadow-xs">
            <ThumbsUp className="w-4 h-4 text-[#0284C7]" />
            <span>생생한 현장 출고 스토리</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            리스김의 <span className="text-[#0284C7]">화물 · 승용 이야기</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            타사 부결, 특장 제작 난항, 저신용 연체 이력을 극복하고 신차 인도를 완료한 사장님들의 진솔한 출고 후기.
          </p>
        </div>

        {/* Stories Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', '개인사업자', '법인기업', '저신용고객', '특장업종'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                activeFilter === filter
                  ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-sky-300'
              }`}
            >
              {filter === 'all' ? '전체 후기' : filter}
            </button>
          ))}
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-sky-300 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Image & Header */}
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[#0284C7] text-xs font-bold shadow-xs">
                      {story.clientType}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-bold text-white flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-sky-300" />
                      {story.clientName}
                    </span>
                    <span className="flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {story.deliveryDate}
                    </span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-slate-900 ml-1">
                      {story.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-xs text-[#0284C7] font-semibold bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100">
                    {story.vehicleName}
                  </span>
                </div>

                {/* Post Title & Review */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                    {story.title}
                  </h3>
                  
                  {/* Before / After box */}
                  <div className="my-3 p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                    <p className="text-rose-600 font-medium">
                      <strong>기존 문제: </strong>{story.beforeStory}
                    </p>
                    <p className="text-[#0284C7] font-bold">
                      <strong>리스김 해결: </strong>{story.afterResult}
                    </p>
                  </div>

                  {/* Customer Quote */}
                  <div className="relative pl-3 border-l-2 border-[#0284C7] py-1 text-xs text-slate-700 italic leading-relaxed">
                    "{story.reviewText}"
                  </div>
                </div>

                {/* Contract Summary & Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {story.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium border border-slate-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectStory(story)}
                  className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-300 text-xs font-bold text-slate-700 hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
                >
                  <span>출고 풀 스토리 및 계약조건 확인</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
