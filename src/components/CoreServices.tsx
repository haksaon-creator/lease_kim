import React, { useState } from 'react';
import { CORE_SERVICES } from '../data/mockData';
import { CoreService } from '../types';
import { Truck, ShieldAlert, Crown, Building2, CheckCircle2, ChevronRight, Zap, Sparkles } from 'lucide-react';

interface CoreServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = ({ onOpenQuoteModal }) => {
  const [selectedService, setSelectedService] = useState<CoreService | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-7 h-7 text-[#0284C7]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-[#0284C7]" />;
      case 'Crown':
        return <Crown className="w-7 h-7 text-[#0284C7]" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-[#0284C7]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#0284C7]" />;
    }
  };

  return (
    <section id="core-services" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#0284C7] text-xs font-bold">
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
            <span>리스김 특화 솔루션</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            리스김의 <span className="text-[#0284C7]">4대 핵심 서비스</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            화물차 특장부터 저신용 전담, 프리미엄 수입차, 법인 절세 리스까지 상황별 전문 카매니저가 전담 맞춤 설계합니다.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="relative rounded-3xl p-8 bg-slate-50/80 border border-slate-200 hover:border-sky-300 hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header Icon + Benefit Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 group-hover:border-sky-300 transition-all shadow-xs">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-bold">
                    {srv.benefitBadge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0284C7] mt-1">
                    {srv.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <span className="text-xs font-bold text-slate-900 block">핵심 강점</span>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {srv.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
                  <strong className="text-[#0284C7]">추천 고객: </strong>
                  <span>{srv.targetAudience}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-8 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(srv.title)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-sm shadow-md hover:shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-1.5"
                >
                  <Zap className="w-4 h-4 fill-current text-sky-200" />
                  <span>{srv.title} 맞춤 견적 신청</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
