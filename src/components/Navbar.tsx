import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: (vehicleName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-md shadow-slate-900/5'
          : 'bg-gradient-to-b from-white/95 via-white/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284C7] to-blue-700 text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-all">
            <span className="font-black text-xl tracking-tighter">L</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-wider text-slate-900 group-hover:text-[#0284C7] transition-colors">
                리스김
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200">
                화물·승용·저신용
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-widest uppercase font-semibold">
              LEASE KIM MOBILITY
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          <button
            onClick={() => scrollToSection('special-deals')}
            className="text-slate-600 hover:text-[#0284C7] transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
            특가 프로모션
          </button>
          <button
            onClick={() => scrollToSection('core-services')}
            className="text-slate-600 hover:text-[#0284C7] transition-colors"
          >
            핵심 서비스
          </button>
          <button
            onClick={() => scrollToSection('delivery-stories')}
            className="text-slate-600 hover:text-[#0284C7] transition-colors"
          >
            출고 이야기
          </button>
          <button
            onClick={() => scrollToSection('calculator')}
            className="text-slate-600 hover:text-[#0284C7] transition-colors"
          >
            실시간 견적계산기
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-slate-600 hover:text-[#0284C7] transition-colors"
          >
            자주 묻는 질문
          </button>
        </nav>

        {/* CTA Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:16000000"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 font-bold text-sm hover:border-[#0284C7] hover:text-[#0284C7] transition-all shadow-xs"
          >
            <div className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
            <Phone className="w-4 h-4 text-[#0284C7]" />
            <span>1600-0000</span>
          </a>

          <button
            onClick={() => onOpenQuoteModal()}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-extrabold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/40 transition-all active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>빠른 견적 신청</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-100 text-[#0284C7] border border-slate-200"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-semibold">
            <button
              onClick={() => scrollToSection('special-deals')}
              className="text-left py-2.5 text-slate-700 hover:text-[#0284C7] border-b border-slate-100 flex items-center justify-between"
            >
              <span>특가 프로모션</span>
              <ChevronRight className="w-4 h-4 text-[#0284C7]" />
            </button>
            <button
              onClick={() => scrollToSection('core-services')}
              className="text-left py-2.5 text-slate-700 hover:text-[#0284C7] border-b border-slate-100 flex items-center justify-between"
            >
              <span>핵심 서비스</span>
              <ChevronRight className="w-4 h-4 text-[#0284C7]" />
            </button>
            <button
              onClick={() => scrollToSection('delivery-stories')}
              className="text-left py-2.5 text-slate-700 hover:text-[#0284C7] border-b border-slate-100 flex items-center justify-between"
            >
              <span>출고 이야기</span>
              <ChevronRight className="w-4 h-4 text-[#0284C7]" />
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-left py-2.5 text-slate-700 hover:text-[#0284C7] border-b border-slate-100 flex items-center justify-between"
            >
              <span>실시간 견적계산기</span>
              <ChevronRight className="w-4 h-4 text-[#0284C7]" />
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2.5 text-slate-700 hover:text-[#0284C7] border-b border-slate-100 flex items-center justify-between"
            >
              <span>자주 묻는 질문</span>
              <ChevronRight className="w-4 h-4 text-[#0284C7]" />
            </button>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:16000000"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-[#0284C7] font-bold text-base"
              >
                <Phone className="w-5 h-5" />
                <span>1600-0000 전담 상담 연결</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-blue-700 text-white font-black text-base shadow-md"
              >
                ⚡ 30초 빠른 견적 신청
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
