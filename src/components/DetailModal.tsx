import React from 'react';
import { SpecialDeal, DeliveryStory } from '../types';
import { X, Check, Star, ShieldCheck, Zap, Calendar, User, Phone } from 'lucide-react';

interface DetailModalProps {
  deal: SpecialDeal | null;
  story: DeliveryStory | null;
  onClose: () => void;
  onOpenQuoteModal: (vehicleName: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ deal, story, onClose, onOpenQuoteModal }) => {
  if (!deal && !story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SPECIAL DEAL DETAIL */}
        {deal && (
          <div className="space-y-6">
            <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={deal.image} alt={deal.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 text-slate-900 text-xs font-bold shadow-xs">
                  {deal.categoryLabel}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0284C7] text-white text-xs font-extrabold shadow-xs">
                  한정 특가
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-xs text-sky-300 font-semibold block">{deal.brand}</span>
                  <h3 className="text-2xl font-black text-white">{deal.name}</h3>
                </div>
                <div className="text-right bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-white/20 backdrop-blur-xs">
                  <p className="text-xs text-slate-400 line-through">월 {deal.originalMonthly}만원</p>
                  <p className="text-2xl font-black text-sky-300">월 {deal.dealMonthly}만원~</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">차량 소개 & 특장 혜택</h4>
                <p className="leading-relaxed">{deal.subtext}</p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-500 block">파워트레인</span>
                  <strong className="text-slate-900 font-bold">{deal.specs.engine}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">연료 구별</span>
                  <strong className="text-slate-900 font-bold">{deal.specs.fuel}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">복합연비</span>
                  <strong className="text-slate-900 font-bold">{deal.specs.efficiency || '표준 규격'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">인도 가능일</span>
                  <strong className="text-[#0284C7] font-bold">{deal.specs.deliveryTime}</strong>
                </div>
              </div>

              {/* Features list */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">특별 혜택 포함 항목</h4>
                <ul className="space-y-2">
                  {deal.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <Check className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(`${deal.brand} ${deal.name}`);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-current text-sky-200" />
                <span>{deal.name} 즉시 견적 신청</span>
              </button>
            </div>
          </div>
        )}

        {/* STORY DETAIL */}
        {story && (
          <div className="space-y-6">
            <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#0284C7] text-white text-xs font-black shadow-xs">
                  {story.clientType} 실제 출고 후기
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs text-sky-300 font-bold block">{story.vehicleName}</span>
                <h3 className="text-xl font-black text-white">{story.title}</h3>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-600">
              {/* Meta Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-slate-500 block">고객 성함</span>
                  <strong className="text-slate-900 font-bold">{story.clientName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">출고 완료일</span>
                  <strong className="text-slate-900 font-bold">{story.deliveryDate}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">계약 요약</span>
                  <strong className="text-[#0284C7] font-bold">{story.contractSummary}</strong>
                </div>
              </div>

              {/* Before / After */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <p className="text-rose-600">
                  <strong className="text-slate-900">출고 전 상황: </strong>{story.beforeStory}
                </p>
                <p className="text-[#0284C7] font-bold">
                  <span>리스김 솔루션: </span>{story.afterResult}
                </p>
              </div>

              {/* Review Text */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border-l-4 border-[#0284C7] italic text-sm leading-relaxed text-slate-800">
                "{story.reviewText}"
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal(story.vehicleName);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-current text-sky-200" />
                <span>동일 차종/조건 상담 신청</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
