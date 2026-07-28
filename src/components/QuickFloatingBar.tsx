import React, { useState, useEffect } from 'react';
import { Phone, Zap, MessageSquare, ArrowUp } from 'lucide-react';

interface QuickFloatingBarProps {
  onOpenQuoteModal: () => void;
}

export const QuickFloatingBar: React.FC<QuickFloatingBarProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-40 flex items-center gap-2">
      {/* Floating Bar Container */}
      <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 p-2 rounded-2xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md">
        
        {/* Phone Button */}
        <a
          href="tel:16000000"
          className="flex-1 sm:flex-initial px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm hover:border-[#0284C7] hover:text-[#0284C7] transition-all flex items-center justify-center gap-1.5"
        >
          <Phone className="w-4 h-4 text-[#0284C7]" />
          <span>1600-0000</span>
        </a>

        {/* Quick Fast Quote Modal Button */}
        <button
          onClick={onOpenQuoteModal}
          className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-sky-500/25 transition-all flex items-center justify-center gap-1.5"
        >
          <Zap className="w-4 h-4 fill-current text-sky-200" />
          <span>빠른 견적</span>
        </button>

        {/* Kakao / Live Consultation Button */}
        <button
          onClick={() => alert('리스김 1:1 카카오톡 실시간 상담창으로 연결됩니다. (대표번호 1600-0000)')}
          className="px-3 py-2.5 rounded-xl bg-[#FEE500] text-[#000000] font-bold text-xs hover:bg-[#FEE500]/90 transition-all flex items-center gap-1 shadow-xs"
          title="카카오톡 상담"
        >
          <MessageSquare className="w-4 h-4 fill-current text-black" />
          <span className="hidden sm:inline">카톡상담</span>
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0284C7] hover:bg-slate-100 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

      </div>
    </div>
  );
};
