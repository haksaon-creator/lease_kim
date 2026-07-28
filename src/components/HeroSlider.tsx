import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap, PhoneCall, ShieldCheck, Sparkles, Pause, Play, Truck, Car, Bus, BatteryCharging } from 'lucide-react';

import cargoTruckImg from '../assets/images/cargo_truck_hero_1785209829772.jpg';
import passengerVanImg from '../assets/images/passenger_van_hero_1785209848099.jpg';
import luxurySuvImg from '../assets/images/luxury_suv_hero_1785209862215.jpg';
import importedSedanImg from '../assets/images/imported_sedan_hero_1785209877038.jpg';
import electricCarImg from '../assets/images/electric_car_hero_1785209892898.jpg';

interface HeroSliderProps {
  onOpenQuoteModal: (presetVehicle?: string) => void;
}

export interface SlideItem {
  id: number;
  category: string;
  vehicleModel: string;
  title: string;
  subText: string;
  badgeText: string;
  image: string;
  icon: React.ElementType;
  badgeBg: string;
  accentText: string;
}

export const SLIDES: SlideItem[] = [
  {
    id: 1,
    category: '화물·특장차',
    vehicleModel: '포터2 / 봉고3 / 마이티 냉동탑차 & 윙바디',
    title: '초기비용 0원 무보증, 1톤~5톤 맞춤 특장차 당일 출고',
    subText: '자체 심사 승인율 99.2% · 영업용/개인사업자 특장 무상 지원',
    badgeText: '화물·특장 대표 메인',
    image: cargoTruckImg,
    icon: Truck,
    badgeBg: 'bg-amber-500/90 text-white',
    accentText: 'text-amber-300'
  },
  {
    id: 2,
    category: '승합·비즈니스',
    vehicleModel: '더 뉴 카니발 9인승 / 스타리아 / 쏠라티',
    title: '비즈니스 & 인원 수송 최적화, 법인 세제 혜택 100%',
    subText: '부가세 환급 가능 차종 · 월 리스료 전액 손비 처리 보장',
    badgeText: '승합·셔틀 메인',
    image: passengerVanImg,
    icon: Bus,
    badgeBg: 'bg-sky-500/90 text-white',
    accentText: 'text-sky-300'
  },
  {
    id: 3,
    category: '국산 프리미엄',
    vehicleModel: '제네시스 GV80 / G80 / 그랜저 HEV / 쏘렌토',
    title: '저신용·신설법인 무서류 당일 맞춤 금융 승인',
    subText: 'NICE/KCB 신용 조회 기록 0% · 최저 금리 비교 견적',
    badgeText: '프리미엄 승용',
    image: luxurySuvImg,
    icon: Car,
    badgeBg: 'bg-slate-800/90 text-white',
    accentText: 'text-sky-300'
  },
  {
    id: 4,
    category: '수입·법인리스',
    vehicleModel: '메르세데스 벤츠 E-Class / BMW 5시리즈',
    title: '수입명차 최저 월납입금, 법인 전담 단독 프로모션',
    subText: '전국 즉시 출고 재고 확보 · 100% 무상 현장 탁송 케어',
    badgeText: '수입차 특가',
    image: importedSedanImg,
    icon: Sparkles,
    badgeBg: 'bg-blue-600/90 text-white',
    accentText: 'text-sky-200'
  },
  {
    id: 5,
    category: '친환경 EV',
    vehicleModel: '아이오닉 6 / EV6 / 테슬라 Model Y / 전기 화물',
    title: '전기차 보조금 100% 우선 선점, 유류비 절감 극대화',
    subText: '지자체 보조금 복잡한 서류 완벽 대행 · 충전비 할인 혜택',
    badgeText: '친환경 스마트',
    image: electricCarImg,
    icon: BatteryCharging,
    badgeBg: 'bg-teal-600/90 text-white',
    accentText: 'text-teal-200'
  }
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenQuoteModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <div 
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slider Container Aspect Ratio */}
      <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full overflow-hidden">
        
        {/* Background Images with Fade Transition */}
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-linear transform hover:scale-100"
              />

              {/* Gradient Dark Overlay for Superior Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
            </div>
          );
        })}

        {/* Content Overlay */}
        <div className="relative z-20 h-full max-w-[1200px] mx-auto px-6 sm:px-10 flex flex-col justify-between py-8 sm:py-12 text-left">
          
          {/* Top Badge & Counter Row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-black flex items-center gap-1.5 shadow-md ${currentSlide.badgeBg}`}>
                <currentSlide.icon className="w-4 h-4" />
                <span>{currentSlide.badgeText}</span>
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                {currentSlide.category}
              </span>
            </div>

            {/* Slide Index Counter & Pause Toggle */}
            <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-white text-xs font-semibold">
              <span className="font-extrabold text-sky-400">0{currentIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">0{SLIDES.length}</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="ml-1 p-1 hover:text-sky-400 transition-colors"
                title={isPlaying ? '일시정지' : '자동재생'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Middle Main Title & Subtitle */}
          <div className="space-y-3 sm:space-y-4 max-w-2xl my-auto">
            <p className="text-xs sm:text-sm font-bold text-sky-300 tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>{currentSlide.vehicleModel}</span>
            </p>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight">
              {currentSlide.title}
            </h2>

            <p className="text-sm sm:text-lg text-slate-200 font-normal leading-relaxed">
              {currentSlide.subText}
            </p>
          </div>

          {/* Bottom Action CTA & Feature Bullet */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>조회기록 0% 안심 심사</span>
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline">전국 무상 탁송</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal(`${currentSlide.category} - ${currentSlide.vehicleModel}`)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-black text-sm shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <Zap className="w-4 h-4 fill-current text-sky-200" />
                <span>{currentSlide.category} 실시간 최저가 견적</span>
              </button>

              <a
                href="tel:16000000"
                className="hidden md:flex px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-sky-300" />
                <span>1600-0000</span>
              </a>
            </div>
          </div>

        </div>

        {/* Left / Right Arrow Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white border border-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail / Indicator Navigation Tabs */}
      <div className="bg-slate-950 border-t border-white/10 p-2.5 sm:p-3 grid grid-cols-5 gap-1.5 sm:gap-2">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative py-2 px-2 sm:px-3 rounded-xl text-left transition-all overflow-hidden ${
                isActive
                  ? 'bg-slate-800 border border-sky-400/80 text-white shadow-md'
                  : 'bg-slate-900/60 border border-white/5 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {/* Active Progress Bar Effect */}
              {isActive && isPlaying && (
                <div className="absolute top-0 left-0 bottom-0 bg-sky-500/15 animate-[slideProgress_5s_linear_infinite]" />
              )}
              <div className="relative z-10 flex items-center justify-between gap-1">
                <div className="truncate">
                  <p className={`text-[10px] sm:text-xs font-bold truncate ${isActive ? 'text-sky-300' : 'text-slate-400'}`}>
                    0{slide.id}. {slide.category}
                  </p>
                  <p className="hidden sm:block text-[11px] font-semibold text-slate-300 truncate">
                    {slide.badgeText}
                  </p>
                </div>
                <slide.icon className={`w-3.5 h-3.5 hidden md:block flex-shrink-0 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
