import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, Phone, UserCheck, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetVehicle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, presetVehicle }) => {
  const [vehicleName, setVehicleName] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [creditCondition, setCreditCondition] = useState('보통 신용 / 승인 희망');
  const [initialOption, setInitialOption] = useState('0원 무보증 (초기비용 제로)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetVehicle) {
      setVehicleName(presetVehicle);
    } else {
      setVehicleName('포터2 / 봉고3 냉동탑차 (추천)');
    }
  }, [presetVehicle, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      alert('성함과 연락처를 작성해주세요.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUserName('');
    setUserPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-8 text-left overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:border-slate-300 border border-slate-200 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            {/* Modal Header */}
            <div className="space-y-1.5 border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200 text-xs font-bold">
                <Zap className="w-3.5 h-3.5 fill-current text-sky-500" />
                <span>30초 실시간 간이 견적 신청</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                리스김 맞춤 최저가 견적
              </h3>
              <p className="text-xs text-slate-500">
                조회 기록 남지 않는 100% 비밀 보장 및 당일 승인 가능 여부 확인
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Vehicle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  신청 희망 차량
                </label>
                <input
                  type="text"
                  value={vehicleName}
                  onChange={(e) => setVehicleName(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] font-bold text-sm focus:outline-none"
                />
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    고객 성함 / 상호 *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284C7] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284C7] focus:bg-white"
                  />
                </div>
              </div>

              {/* Credit Status Option */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  신용 조건 / 희망사항
                </label>
                <select
                  value={creditCondition}
                  onChange={(e) => setCreditCondition(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-[#0284C7] focus:bg-white"
                >
                  <option value="보통 신용 / 승인 희망">보통 신용 (4~6등급, 승인 희망)</option>
                  <option value="우수 신용 (1~3등급)">우수 신용 (1~3등급, 최저금리 희망)</option>
                  <option value="저신용 / 회생 / 연체이력 (자체심사)">저신용 / 개인회생 / 연체이력 (자체 심사)</option>
                  <option value="법인 / 개인사업자 세제혜택">법인 / 개인사업자 (절세 혜택)</option>
                </select>
              </div>

              {/* Initial Fee Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  희망 초기 비용
                </label>
                <select
                  value={initialOption}
                  onChange={(e) => setInitialOption(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-[#0284C7] focus:bg-white"
                >
                  <option value="0원 무보증 (초기비용 제로)">0원 무보증 (초기 비용 0원 희망)</option>
                  <option value="보증금 10~20%">보증금 10~20% (월 납입금 인하)</option>
                  <option value="선수금 조건">선수금 조건</option>
                </select>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1 text-[11px] text-slate-600">
                <p className="flex items-center gap-1.5 text-[#0284C7] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>NICE/KCB 신용점수에 영향이 없는 간이 조회입니다.</span>
                </p>
                <p>접수 완료 후 5분 이내 전담 카매니저가 친절하게 안내해 드립니다.</p>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-current text-sky-200" />
                <span>견적 신청 제출하기</span>
              </button>
            </form>
          </div>
        ) : (
          /* Submission Success View */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">
                견적 신청이 성공적으로 접수되었습니다!
              </h3>
              <p className="text-sm text-slate-600">
                <strong className="text-[#0284C7]">{userName}</strong> 사장님, 담당 카매니저가 5분 이내로 전화드려 최저가 조건과 당일 출고 가능 차량을 안내해 드리겠습니다.
              </p>
            </div>

            {/* Assigned Manager Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-bold">배정 전담 카매니저</span>
                <span className="px-2 py-0.5 rounded bg-sky-50 text-[#0284C7] border border-sky-200 font-bold text-[10px]">
                  실시간 매칭 완료
                </span>
              </div>
              <p className="text-base font-bold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#0284C7]" />
                <span>김상우 수석 카매니저</span>
              </p>
              <p className="text-slate-600">직통전화: 010-8900-0000 | 대표번호: 1600-0000</p>
              <p className="text-[#0284C7] font-semibold">신청차량: {vehicleName}</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-200 transition-all"
            >
              확인 (창 닫기)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
