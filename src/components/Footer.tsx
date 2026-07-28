import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Headphones, Zap, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200/90 relative pt-16 pb-24 lg:pb-16 text-slate-600">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Pre-Footer Banner CTA */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-sky-600 via-[#0284C7] to-blue-700 border border-sky-400/30 shadow-xl mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white border border-white/20 text-xs font-bold backdrop-blur-xs">
            <Headphones className="w-4 h-4" />
            <span>24시간 실시간 무상 심사 상담</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            초기 비용 부담 없는 맞춤 차종, 지금 <span className="text-sky-200">리스김</span>과 상담하세요!
          </h2>
          <p className="text-sm sm:text-base text-sky-50 max-w-2xl mx-auto">
            신용등급 조회 기록 남지 않는 100% 안심 간이 심사. 전화 한 통으로 최저 월 납입금을 즉시 안내해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:16000000"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#0284C7] font-black text-lg shadow-lg hover:bg-sky-50 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>대표번호 1600-0000 바로 연결</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/30 border border-white/30 text-white font-bold text-base hover:bg-slate-900/50 transition-all flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5 text-sky-200" />
              <span>온라인 1:1 상담 예약</span>
            </button>
          </div>
        </div>

        {/* Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 text-xs">
          
          {/* Company Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0284C7] flex items-center justify-center shadow-xs">
                <span className="text-white font-black text-lg">L</span>
              </div>
              <span className="text-xl font-black text-slate-900 tracking-wider">
                (주)리스김 모빌리티
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              화물차(냉동탑차/윙바디), 친환경 EV, 인기 승용차, 수입차, 저신용 및 법인 전담 리스 & 장기렌트 전문 기업. 고객의 비즈니스 성공을 위해 최상의 승인 조건과 최저 월 납입금을 약속합니다.
            </p>
            <div className="pt-2 text-slate-500 space-y-1">
              <p>대표자: 김리스 | 사업자등록번호: 120-88-99999</p>
              <p>통신판매업신고: 2026-서울강남-01234 | 개인정보보호책임자: 김상우</p>
            </div>
          </div>

          {/* Contact & Address Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              고객센터 & 본사 위치
            </h4>
            <div className="space-y-2 text-slate-600">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0284C7]" />
                <span className="font-bold text-slate-900">대표전화: 1600-0000</span>
                <span className="text-slate-500">(24시간 접수가능)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0284C7]" />
                <span>24H 직통 핫라인: 010-8900-0000</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0284C7] mt-0.5 flex-shrink-0" />
                <span>서울특별시 강남구 테헤란로 427 타워 18층 (리스김 빌딩)</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#0284C7] mt-0.5 flex-shrink-0" />
                <span>영업시간: 평일 08:30 ~ 21:00 / 토·일·공휴일 09:00 ~ 18:00</span>
              </p>
            </div>
          </div>

          {/* Guarantees & Badges Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              리스김 3대 안전 보장
            </h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>NICE/KCB 신용 조회 기록 0% 보장</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>전국 계약 차량 100% 무상 현장 탁송</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                <span>전담 금융 전문 카매니저 1:1 케어</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            Copyright © 2026 LEASE KIM Mobility Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-[#0284C7] transition-colors font-bold text-[#0284C7]">개인정보처리방침</a>
            <a href="#" className="hover:text-slate-900 transition-colors">자동차리스약관</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
