import React, { useState } from 'react';
import { ShieldCheck, Truck, Sparkles, ArrowRight, Zap, CheckCircle2, PhoneCall, Award } from 'lucide-react';
import { HeroSlider } from './HeroSlider';

interface HeroProps {
  onOpenQuoteModal: (presetVehicle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [quickCategory, setQuickCategory] = useState('화물/특장차');
  const [quickModel, setQuickModel] = useState('포터2 냉동탑차/윙바디');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim()) {
      alert('연락처를 입력해주세요.');
      return;
    }
    setQuickSubmitted(true);
    setTimeout(() => {
      onOpenQuoteModal(`${quickCategory} - ${quickModel}`);
      setQuickSubmitted(false);
      setQuickPhone('');
    }, 800);
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-28 md:pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-white">
      {/* High-Tech Background Glows & Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(2,132,199,0.12),rgba(255,255,255,0))]" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Lines Effect */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e120_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e120_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 w-full z-10 space-y-10 sm:space-y-12">
        
        {/* 1. Main Hero Sliding Banner Carousel (Right below navbar) */}
        <div className="w-full">
          <HeroSlider onOpenQuoteModal={onOpenQuoteModal} />
        </div>

        {/* 2. Hero Supporting Headline & Instant Fast Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-2">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-sky-200 text-[#0284C7] text-xs sm:text-sm font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              <Award className="w-4 h-4 text-[#0284C7]" />
              <span>대한민국 1위 화물·승용·저신용 맞춤 렌트/리스 플랫폼</span>
            </div>

            {/* Impact Headline */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.2]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-blue-700 to-indigo-800">
                  저신용자도, 특장차도
                </span>
                <span className="block mt-1">
                  리스김에서는 가능합니다.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
                승인율 <strong className="text-[#0284C7] font-bold">99.2%</strong>의 혁신적인 자체 심사 알고리즘. <br className="hidden sm:inline" />
                초기 비용 <strong className="text-slate-900 font-bold">0원 무보증</strong>으로 1톤 냉동탑차부터 프리미엄 수입차까지 당일 맞춤출고!
              </p>
            </div>

            {/* Fast Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button
                onClick={() => onOpenQuoteModal()}
                className="group relative overflow-hidden px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all active:scale-98 flex items-center justify-center gap-2.5"
              >
                <Zap className="w-5 h-5 fill-current text-sky-200" />
                <span>30초 빠른 실시간 견적 신청</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:16000000"
                className="px-6 py-3.5 rounded-2xl bg-white border border-slate-200/90 text-slate-800 font-bold text-base hover:border-[#0284C7] hover:text-[#0284C7] transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-5 h-5 text-[#0284C7]" />
                <span>전담 상담 1600-0000</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-[#0284C7]">99.2%</p>
                <p className="text-xs text-slate-500 font-semibold">자체 심사 승인율</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-slate-900">15,280+</p>
                <p className="text-xs text-slate-500 font-semibold">누적 출고 대수</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-[#0284C7]">0원</p>
                <p className="text-xs text-slate-500 font-semibold">초기 비용 승인 가능</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-2xl sm:text-3xl font-black text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-semibold">전국 무료 현장탁송</p>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Fast Quote Widget Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 sm:p-7 bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-50 text-[#0284C7] border border-sky-100">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      1:1 맞춤 견적 간편 신청
                    </h2>
                    <p className="text-xs text-slate-500">
                      조회 기록 남지 않는 100% 비밀 보장 간이 견적
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-[#0284C7] border border-sky-100">
                  실시간 접수중
                </span>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-3.5 pt-4">
                {/* Vehicle Category Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    필요 차량 종류
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      '화물/특장차',
                      '전기차/EV',
                      '국산 인기승용',
                      '수입/법인리스',
                      '저신용 전담렌트'
                    ].map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setQuickCategory(cat)}
                        className={`py-2 px-3 rounded-xl text-xs font-bold text-left transition-all border ${
                          quickCategory === cat
                            ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-md shadow-sky-500/25'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sub Model Options */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    희망 차종 / 특장 사양
                  </label>
                  <select
                    value={quickModel}
                    onChange={(e) => setQuickModel(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#0284C7] focus:bg-white"
                  >
                    <option value="포터2 냉동탑차/윙바디">포터2 / 봉고3 냉동탑차 & 윙바디</option>
                    <option value="아이오닉6 / 테슬라 Model Y">아이오닉 6 / 테슬라 Model Y (EV)</option>
                    <option value="제네시스 G80 / GV80">제네시스 G80 / GV80 / 벤츠 E클래스</option>
                    <option value="마이티 3.5톤 윙바디/카고">마이티 3.5톤 윙바디 & 파비스 5톤</option>
                    <option value="카니발 9인승 / 쏘렌토">더 뉴 카니발 9인승 / 쏘렌토 HEV</option>
                    <option value="저신용 무보증 K5/아반떼">저신용 무보증 K5 / 아반떼 / 그랜저</option>
                  </select>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    연락처 (핸드폰 번호)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284C7] focus:bg-white placeholder-slate-400"
                  />
                </div>

                <div className="space-y-1 pt-0.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>NICE/KCB 신용 조회 기록이 절대 남지 않습니다.</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>신청 즉시 5분 내 전문 카매니저 1:1 매칭 완료</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={quickSubmitted}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
                >
                  {quickSubmitted ? (
                    <span>접수 처리 중...</span>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 fill-current text-sky-200" />
                      <span>무료 맞춤 견적 확인하기</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

