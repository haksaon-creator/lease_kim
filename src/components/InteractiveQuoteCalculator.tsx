import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, CheckCircle, Zap, ShieldCheck, Phone, ArrowRight, UserCheck } from 'lucide-react';

interface CalculatorProps {
  onQuoteSubmitted: (data: any) => void;
}

export const InteractiveQuoteCalculator: React.FC<CalculatorProps> = ({ onQuoteSubmitted }) => {
  const [vehicleType, setVehicleType] = useState('truck');
  const [selectedModel, setSelectedModel] = useState('포터2 / 봉고3 냉동탑차 (신차)');
  const [creditGrade, setCreditGrade] = useState('standard');
  const [initialDeposit, setInitialDeposit] = useState('0'); // 0%, 10%, 20%, 30%
  const [termMonths, setTermMonths] = useState('48'); // 24, 36, 48, 60
  
  // User Form Inputs
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userRegion, setUserRegion] = useState('서울/경기/인천');
  const [businessType, setBusinessType] = useState('개인사업자 (화물/물류/기타)');
  const [userNotes, setUserNotes] = useState('');

  // Vehicle Models by Category
  const modelsMap: Record<string, { name: string; baseMonthly: number }[]> = {
    truck: [
      { name: '포터2 / 봉고3 냉동탑차 (신차)', baseMonthly: 33 },
      { name: '포터2 / 봉고3 내장탑차 & 윙바디', baseMonthly: 31 },
      { name: '현대 마이티 3.5톤 광폭 윙바디', baseMonthly: 108 },
      { name: '파비스 5톤 카고 / 특장차', baseMonthly: 125 },
    ],
    ev: [
      { name: '현대 아이오닉 6 Long Range EV', baseMonthly: 49 },
      { name: '테슬라 Model Y RWD / Long Range', baseMonthly: 55 },
      { name: '기아 EV6 / EV9 전기 SUV', baseMonthly: 52 },
      { name: '포터2 일렉트릭 / 봉고3 EV', baseMonthly: 36 },
    ],
    passenger: [
      { name: '더 뉴 카니발 9인승 하이브리드', baseMonthly: 39 },
      { name: '기아 쏘렌토 하이브리드 / 스포티지', baseMonthly: 35 },
      { name: '현대 그랜저 하이브리드 / 투싼', baseMonthly: 42 },
      { name: '기아 K5 / 현대 아반떼', baseMonthly: 29 },
    ],
    imported: [
      { name: '제네시스 G80 / GV80 3.5 Turbo', baseMonthly: 82 },
      { name: '메르세데스-벤츠 E-Class E300 4MATIC', baseMonthly: 95 },
      { name: 'BMW 5시리즈 520i / 530i xDrive', baseMonthly: 88 },
      { name: '포르쉐 카이엔 / 파나메라 법인리스', baseMonthly: 180 },
    ],
    lowcredit: [
      { name: '저신용 무보증 K5 / 아반떼 렌트', baseMonthly: 35 },
      { name: '저신용 무보증 스포티지 / 투싼', baseMonthly: 39 },
      { name: '저신용 무보증 카니발 9인승', baseMonthly: 46 },
      { name: '저신용 무보증 포터2 / 봉고3 탑차', baseMonthly: 34 },
    ]
  };

  // Calculate estimated monthly payment dynamically
  const estimatedMonthly = useMemo(() => {
    const activeList = modelsMap[vehicleType] || modelsMap.truck;
    const foundModel = activeList.find(m => m.name === selectedModel) || activeList[0];
    let base = foundModel.baseMonthly;

    // Adjust for term months (longer term = lower monthly)
    if (termMonths === '24') base *= 1.35;
    if (termMonths === '36') base *= 1.15;
    if (termMonths === '48') base *= 1.0;
    if (termMonths === '60') base *= 0.88;

    // Adjust for deposit percentage
    if (initialDeposit === '10') base *= 0.92;
    if (initialDeposit === '20') base *= 0.84;
    if (initialDeposit === '30') base *= 0.76;

    // Adjust for credit grade
    if (creditGrade === 'low') base *= 1.05; // low credit special rate

    return Math.round(base);
  }, [vehicleType, selectedModel, creditGrade, initialDeposit, termMonths]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      alert('이름과 연락처를 모두 입력해주세요.');
      return;
    }

    const submissionData = {
      vehicleType,
      selectedModel,
      creditGrade,
      initialDeposit: `${initialDeposit}%`,
      termMonths: `${termMonths}개월`,
      estimatedMonthly: `월 ${estimatedMonthly}만원~`,
      userName,
      userPhone,
      userRegion,
      businessType,
      userNotes,
      assignedManager: '김상우 수석 카매니저 (010-8900-0000)'
    };

    onQuoteSubmitted(submissionData);
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[#0284C7] text-xs font-bold">
            <Calculator className="w-4 h-4 text-[#0284C7]" />
            <span>실시간 견적 시뮬레이터</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            1:1 전담 컨설팅 <span className="text-[#0284C7]">실시간 견적 계산기</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            차종, 신용 상태, 초기 비용 조건을 직접 선택하고 예상 월 납입금을 즉시 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/90 shadow-sm">
            
            {/* Step 1: Vehicle Category */}
            <div>
              <label className="block text-xs font-bold text-[#0284C7] mb-2 uppercase tracking-wider">
                STEP 01. 희망 차량 카테고리
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'truck', label: '🚛 화물 / 특장차' },
                  { id: 'ev', label: '⚡ 전기차 / EV' },
                  { id: 'passenger', label: '🚗 국산 인기승용' },
                  { id: 'imported', label: '💎 수입 / 법인' },
                  { id: 'lowcredit', label: '🛡️ 저신용 전담' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setVehicleType(cat.id);
                      setSelectedModel(modelsMap[cat.id][0].name);
                    }}
                    className={`py-3 px-3 rounded-xl text-xs font-bold text-left transition-all border ${
                      vehicleType === cat.id
                        ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-md shadow-sky-500/25'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Specific Vehicle Model */}
            <div>
              <label className="block text-xs font-bold text-[#0284C7] mb-2 uppercase tracking-wider">
                STEP 02. 세부 차종 선택
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full py-3 px-4 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#0284C7]"
              >
                {(modelsMap[vehicleType] || modelsMap.truck).map((m, idx) => (
                  <option key={idx} value={m.name}>
                    {m.name} (기준 월 {m.baseMonthly}만원~)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Credit Status */}
            <div>
              <label className="block text-xs font-bold text-[#0284C7] mb-2 uppercase tracking-wider">
                STEP 03. 현재 신용 상태 / 이용 형태
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'high', label: '우수 신용 (1~3등급)' },
                  { id: 'standard', label: '보통 신용 (4~6등급)' },
                  { id: 'low', label: '저신용 / 회생 / 연체이력' },
                  { id: 'corporate', label: '법인 / 개인사업자' },
                ].map((cred) => (
                  <button
                    key={cred.id}
                    type="button"
                    onClick={() => setCreditGrade(cred.id)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold text-left transition-all border ${
                      creditGrade === cred.id
                        ? 'bg-sky-50 border-[#0284C7] text-[#0284C7]'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {cred.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Deposit & Period Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Initial Fee / Deposit */}
              <div>
                <label className="block text-xs font-bold text-[#0284C7] mb-2 uppercase tracking-wider">
                  초기 비용 조건 (보증금/선수금)
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { val: '0', label: '0원 무보증' },
                    { val: '10', label: '10%' },
                    { val: '20', label: '20%' },
                    { val: '30', label: '30%' },
                  ].map((dep) => (
                    <button
                      key={dep.val}
                      type="button"
                      onClick={() => setInitialDeposit(dep.val)}
                      className={`py-2 text-[11px] font-bold rounded-lg transition-all border ${
                        initialDeposit === dep.val
                          ? 'bg-[#0284C7] text-white border-[#0284C7]'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      {dep.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contract Term Months */}
              <div>
                <label className="block text-xs font-bold text-[#0284C7] mb-2 uppercase tracking-wider">
                  이용 계약 기간
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {['24', '36', '48', '60'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTermMonths(m)}
                      className={`py-2 text-[11px] font-bold rounded-lg transition-all border ${
                        termMonths === m
                          ? 'bg-[#0284C7] text-white border-[#0284C7]'
                          : 'bg-white text-slate-700 border-slate-200'
                      }`}
                    >
                      {m}개월
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Calculated Odometer Output Box */}
            <div className="p-6 rounded-2xl bg-white border border-sky-200 flex items-center justify-between shadow-md">
              <div>
                <span className="text-xs text-[#0284C7] font-bold block">
                  실시간 예상 월 납입금 (VAT / 정비 / 보험 포함)
                </span>
                <span className="text-xs text-slate-500">
                  {selectedModel} ({termMonths}개월, 보증금 {initialDeposit}%)
                </span>
              </div>
              <div className="text-right">
                <span className="text-3xl sm:text-4xl font-black text-[#0284C7] tracking-tight">
                  월 {estimatedMonthly}만원~
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Submission Form */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-5">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#0284C7]" />
                <span>1:1 전담 카매니저 상담 신청</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                작성 시 5분 내 전담 상담원이 최고 조건 및 출고 가능 날짜를 안내해 드립니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  이름 (성함/상호명) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동 / (주)리스김모빌리티"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0284C7] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  연락처 (핸드폰 번호) *
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

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    희망 거주 / 사업 지역
                  </label>
                  <select
                    value={userRegion}
                    onChange={(e) => setUserRegion(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#0284C7] focus:bg-white"
                  >
                    <option value="서울/경기/인천">서울 / 경기 / 인천</option>
                    <option value="충청/대전/세종">충청 / 대전 / 세종</option>
                    <option value="전라/광주">전라 / 광주</option>
                    <option value="경상/부산/대구/울산">경상 / 부산 / 대구</option>
                    <option value="강원/제주">강원 / 제주</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    사업자 유형
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#0284C7] focus:bg-white"
                  >
                    <option value="개인사업자 (화물/물류/기타)">개인사업자 (화물/물류)</option>
                    <option value="법인기업">법인기업</option>
                    <option value="개인/프리랜서">개인 / 프리랜서</option>
                    <option value="신설사업자 (1년미만)">신설사업자 (1년 미만)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  추가 요청사항 / 특장 옵션 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="예: 냉동탑차 특장 옵션 무보증 가능 여부 문의합니다."
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                  className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#0284C7] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#0284C7] via-sky-600 to-blue-700 text-white font-black text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 fill-current text-sky-200" />
                <span>최저가 맞춤 실시간 견적 신청</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>입력하신 개인정보는 100% 암호화되어 안전하게 보호됩니다.</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
