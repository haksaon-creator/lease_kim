import { SpecialDeal, CoreService, DeliveryStory } from '../types';

export const SPECIAL_DEALS: SpecialDeal[] = [
  {
    id: 'deal-1',
    category: 'truck',
    categoryLabel: '화물/특장차',
    name: '포터 2 / 봉고 3 냉동탑차 & 윙바디',
    brand: '현대 / 기아',
    subtext: '신선식품 물류 & 배송 전업 사장님 필수! 특장 제작비 전액 포함 무보증',
    originalMonthly: 45,
    dealMonthly: 32,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    badges: ['인기 1위', '당일 즉시 출고', '저신용 무보증', '특장 무상 AS'],
    specs: {
      engine: '2.5 LPG 터보 / 디젤',
      fuel: 'LPG / 디젤',
      efficiency: '8.9~9.5 km/L',
      deliveryTime: '계약 당일 배송가능'
    },
    features: [
      '냉동기 성능 보증 및 탑차 하부 부식 방지 코팅 무상',
      '사업자 부가가치세 환급 (차량 가격 100% 비용 처리)',
      '저신용자 특판 유상 번호판/영업용 번호판 연계 컨설팅'
    ],
    popularRanking: 1
  },
  {
    id: 'deal-2',
    category: 'ev',
    categoryLabel: '친환경 EV',
    name: '아이오닉 6 Long Range / 테슬라 Model Y',
    brand: '현대 / 테슬라',
    subtext: '2026년 국고+지자체 전기차 보조금 최대 선반영 최저가 월 납입금',
    originalMonthly: 68,
    dealMonthly: 49,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    badges: ['전기차 보조금 확정', '즉시 인도', '충전비 50만원 지원', '무보증 승인'],
    specs: {
      engine: '77.4kWh 듀얼모터',
      fuel: '전기 (1회 충전 524km)',
      efficiency: '6.0 km/kWh',
      deliveryTime: '3일 내 인수'
    },
    features: [
      '지자체 보조금 선지급으로 초기 부담금 0원 가능',
      '전기차 세제혜택 + 고속도로 통행료 50% 감면',
      '홈 충전기 설치 지원 및 카드 할인 패키지 제공'
    ],
    popularRanking: 2
  },
  {
    id: 'deal-3',
    category: 'imported',
    categoryLabel: '수입/법인',
    name: '제네시스 G80 / 벤츠 E-Class E300 4MATIC',
    brand: '제네시스 / 메르세데스-벤츠',
    subtext: '법인 임원 및 사업자 리스 최적화! 연 1,500만원 최고 한도 손비 인정',
    originalMonthly: 110,
    dealMonthly: 82,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    badges: ['법인 무보증', '비공식 추가할인', 'VIP 맞춤 케어', '골프백 증정'],
    specs: {
      engine: '2.5 Turbo / 2.0 Mild Hybrid',
      fuel: '가솔린 / 하이브리드',
      efficiency: '10.8~12.4 km/L',
      deliveryTime: '색상별 즉시출고'
    },
    features: [
      '비공식 딜러 프로모션 및 법인 플릿 할인 추가 적용',
      '임직원 전용 운전자 보험 무상 설계',
      '리스 기간 만료 후 반납 / 인수 선택 유연'
    ],
    popularRanking: 3
  },
  {
    id: 'deal-4',
    category: 'truck',
    categoryLabel: '중형 화물차',
    name: '마이티 3.5톤 윙바디 & 파비스 5톤 카고',
    brand: '현대자동차',
    subtext: '물류 및 중량 화물 운송 특화. 승인 난이도 최고 3.5톤 무보증 할부/리스',
    originalMonthly: 145,
    dealMonthly: 108,
    image: 'https://images.unsplash.com/photo-1586191582056-a15cd3db3d84?auto=format&fit=crop&w=800&q=80',
    badges: ['영업용 번호판 지원', '초기 0원 특약', '특장 맞춤 제작'],
    specs: {
      engine: '3.9L / 5.9L 디젤',
      fuel: '디젤 (유류세 환급)',
      efficiency: '사업용 규격',
      deliveryTime: '2주 내 특장 출고'
    },
    features: [
      '알루미늄 윙바디 / 파워게이트 옵션 최저가 제작',
      '영업용 자격증 보유자 전용 승인 및 특별 금리 할인',
      '전국 24시간 긴급 출동 AS 무상 포함'
    ]
  },
  {
    id: 'deal-5',
    category: 'passenger',
    categoryLabel: '인기 승용차',
    name: '더 뉴 카니발 9인승 하이브리드 / 쏘렌토',
    brand: '기아',
    subtext: '패밀리카 & 법인 출장 겸용 1위! 9인승 부가세 100% 환급 + 버스전용차로',
    originalMonthly: 55,
    dealMonthly: 39,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    badges: ['부가세 환급 대상', '인기 색상 즉시출고', '저신용 심사 우대'],
    specs: {
      engine: '1.6 터보 하이브리드',
      fuel: '가솔린 하이브리드',
      efficiency: '14.0 km/L',
      deliveryTime: '실시간 가용 재고'
    },
    features: [
      '사업자 구비 시 부가가치세 전액 환급 (약 400만원 절감 효과)',
      '6인 이상 탑승 시 고속도로 버스전용차로 이용 가능',
      '프리미엄 썬팅, 2채널 블랙박스, 하이패스 무상 장착'
    ]
  },
  {
    id: 'deal-6',
    category: 'lowcredit',
    categoryLabel: '저신용 전담',
    name: 'K5 / 아반떼 / 그랜저 저신용 전담 렌트',
    brand: '현대 / 기아',
    subtext: '신용점수 무관, 개인회생·파산·체납 이력자도 100% 자체 심사로 승인!',
    originalMonthly: 48,
    dealMonthly: 35,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    badges: ['체납자 승인 가능', '자체 심사 100%', '신용조회 무관'],
    specs: {
      engine: '1.6 / 2.0 스마트스트림',
      fuel: '가솔린 / LPI',
      efficiency: '11.5~13.8 km/L',
      deliveryTime: '당일 차량 인도'
    },
    features: [
      'NICE/KCB 신용점수 조회 없이 리스김 전담 금융사 자체 승인',
      '소득 증빙 간소화 (통장 입출금 내역 확인만으로 가승인)',
      '계약 기간 중 신용 회복 시 납입금 연계 감면 혜택'
    ]
  }
];

export const CORE_SERVICES: CoreService[] = [
  {
    id: 'service-truck',
    title: '화물차 & 특장차 전담 솔루션',
    subtitle: '1톤 포터·봉고부터 3.5톤/5톤 윙바디·냉동탑차',
    iconName: 'Truck',
    description: '물류, 운송, 배송 사업자 사장님을 위한 특화 금융 서비스. 차량 맞춤 특장 제작 비용까지 일괄 리스/렌트로 승인받고 영업용 번호판 연계 및 세제 혜택을 극대화합니다.',
    keyPoints: [
      '냉동탑차, 윙바디, 파워게이트 등 맞춤 특장 제작비 100% 포함',
      '영업용 번호판(임대/양수양도) 및 사업자 세금 환급 컨설팅',
      '초기 비용 0원 무보증 특약 승인율 98.5%'
    ],
    targetAudience: '화물 운송업자, 쿠팡/CJ 택배 기사님, 식자재 유통 사업자',
    benefitBadge: '특장 제작비 포함 승인'
  },
  {
    id: 'service-credit',
    title: '저신용 · 연체이력 전담 렌트',
    subtitle: 'NICE / KCB 신용등급 무관 100% 자체 심사',
    iconName: 'ShieldAlert',
    description: '신용점수 하위 10%, 개인회생 중, 파산면책, 과거 연체 이력으로 타 금융사 거절을 받으신 분을 위해 리스김 전용 금융 펀딩 시스템으로 100% 승인을 보장합니다.',
    keyPoints: [
      '신용조회 기록이 남지 않는 간이 심사 알고리즘',
      '재직/소득 단순 증빙 시 무보증 조건 승인',
      '성실 납부 시 계약기간 내 차량 소유권 이전 보장'
    ],
    targetAudience: '저신용자, 신용회복/개인회생 이용자, 초기 창업자',
    benefitBadge: '자체 심사 승인율 99%'
  },
  {
    id: 'service-import',
    title: '프리미엄 수입차 & VIP 리스',
    subtitle: '벤츠, BMW, 아우디, 포르쉐, 제네시스 최저가',
    iconName: 'Crown',
    description: '전국 50개 공식 딜러사 실시간 비공식 프로모션 가격을 비교. 최고의 할인율과 최저 금리를 조합하여 전국 최저가 월 납입금을 완성합니다.',
    keyPoints: [
      '전국 비공식 딜러 프로모션 최대 할인 금액 실시간 반영',
      '법인 및 개인사업자 종합소득세/법인세 대폭 절감 효과',
      '1:1 VIP 전문 카매니저 방문 계약 및 무상 딜리버리'
    ],
    targetAudience: '법인 대표, 전문직, VIP 개인 고객',
    benefitBadge: '전국 최저가 보장제'
  },
  {
    id: 'service-corporate',
    title: '법인 & 개인사업자 맞춤 렌트/리스',
    subtitle: '연간 1,500만원 비용 처리 & 부가세 환급',
    iconName: 'Building2',
    description: '기업의 재무 구조를 개선하고 차량 유지 관리 부담을 제로로 만듭니다. 차량 구입 비용, 정비, 보험, 세금을 하나로 통합 처리하여 경리 업무를 대폭 단축합니다.',
    keyPoints: [
      '차량 1대당 연간 감가상각 800만원 + 유지비 700만원 손비 인정',
      '9인승 이상 승합차 & 경차 & 화물차 구매 시 부가세 100% 환급',
      '법인 플릿(Fleet) 단체 계약 시 가중 할인 적용'
    ],
    targetAudience: '법인기업, 개인사업자, 세무 절세가 필요한 대표님',
    benefitBadge: '최대 절세 혜택'
  }
];

export const DELIVERY_STORIES: DeliveryStory[] = [
  {
    id: 'story-1',
    title: '신용 6등급 자영업 사장님, 포터2 냉동탑차 초기비용 0원 당일 출고 성공!',
    clientName: '인천 김O훈 사장님',
    clientType: '개인사업자',
    vehicleName: '현대 포터2 냉동탑차 (특장 신차)',
    deliveryDate: '2026년 7월 20일',
    image: 'https://images.unsplash.com/photo-1586191582056-a15cd3db3d84?auto=format&fit=crop&w=800&q=80',
    creditCondition: '신용점수 620점 (기존 카드론 이력으로 타사 부결)',
    contractSummary: '48개월 / 보증금 0% / 월 33만원 / 영업용 번호판 연계',
    reviewText: '식자재 납품 계약이 당장 다음 주라 마음이 정말 급했습니다. 다른 곳에 문의했을 때 보증금 300만원 이상 요구하거나 부결되었는데, 리스김 담당자님이 당일 간이 심사로 승인 내주시고 보증금 0원에 냉동탑차 신차를 사흘 만에 집 앞까지 가져다 주셨습니다. 진짜 은인입니다!',
    beforeStory: '타 캐피탈사 2곳 부결 및 보증금 350만원 요구로 납품 계약 파기 위기',
    afterResult: '리스김 자체 예외 승인 시스템으로 보증금 0원 + 3일 내 현장 출고 완결',
    rating: 5.0,
    tags: ['화물냉동탑', '신용6등급', '보증금0원', '당일승인']
  },
  {
    id: 'story-2',
    title: '경기 제조업 법인 대표님, 제네시스 GV80 & 카니발 3대 통합 리스로 법인세 절감!',
    clientName: '경기 (주)테크O 박O우 대표',
    clientType: '법인기업',
    vehicleName: '제네시스 GV80 + 카니발 하이브리드 2대',
    deliveryDate: '2026년 7월 15일',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    creditCondition: '법인 설립 1.5년 차 (신설 법인 우대)',
    contractSummary: '60개월 / 보증금 10% / 법인 플릿 할인 적용',
    reviewText: '신설 법인이라 기존 거래 은행에서는 서류 요구가 너무 까다로웠습니다. 리스김 전담 카매니저님이 제네시스와 카니발 3대를 묶어 법인 플릿 비공식 할인까지 적용해주셨고, 부가세 환급받을 수 있게 정확히 가이드해주셔서 연간 4,000만원 넘는 세제 혜택을 얻었습니다.',
    beforeStory: '신설 법인 재무제표 미비로 타사 리스 승인 난항',
    afterResult: '법인 대표 보증 조건 완화 및 비공식 프로모션 추가 할인 450만원 적용',
    rating: 5.0,
    tags: ['법인통합리스', 'GV80', '부가세환급', '신설법인승인']
  },
  {
    id: 'story-3',
    title: '과거 연체 이력으로 답답했던 프리랜서, 아이오닉6 전기차 장기렌트 인수 완료!',
    clientName: '서울 이O민 고객님',
    clientType: '저신용고객',
    vehicleName: '현대 아이오닉 6 Long Range EV',
    deliveryDate: '2026년 7월 08일',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    creditCondition: '개인회생 인가 후 성실 납부 중 (저신용 렌트 심사 대상)',
    contractSummary: '36개월 / 보증금 10% / 지자체 전기차 보조금 완비',
    reviewText: '출퇴근 거리가 길어서 기름값이 부담되어 전기차로 바꾸고 싶었지만, 회생 중이라 꿈도 못 꿨습니다. 리스김에 상담 신청하니 신용조회 없이 소득 입출금 확인만으로 승인을 내주셨습니다. 보조금도 알아서 챙겨주셔서 월 40만원대에 최고 신차를 타게 되었어요!',
    beforeStory: '개인회생 인가 단계로 일반 캐피탈사 대출/리스 접근 불가능',
    afterResult: '소득증빙 연계 저신용 펀딩 승인 + 전기차 보조금 1,050만원 적용',
    rating: 4.9,
    tags: ['저신용전담', '아이오닉6', '전기차보조금', '개인회생승인']
  },
  {
    id: 'story-4',
    title: '3.5톤 마이티 윙바디 특장제작, 계약부터 전국 무료 탁송까지 단 10일!',
    clientName: '충남 최O호 사장님',
    clientType: '특장업종',
    vehicleName: '현대 마이티 3.5톤 광폭 윙바디',
    deliveryDate: '2026년 6월 29일',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    creditCondition: '개인사업자 3년차 (기존 대출 보유)',
    contractSummary: '60개월 / 선수금 0원 / 특장 제작비 무이자 유예',
    reviewText: '팔레트 8장 들어가는 광폭 윙바디 특장차가 필수였는데 타 업체는 대기 기간만 2달이라더군요. 리스김은 전용 특장 파트너 공장에서 즉시 라인 배정해주셔서 10일 만에 출고 검수까지 완벽히 마치고 집 앞까지 탁송해주셨습니다. 최고입니다.',
    beforeStory: '특장 공장 대기 기간 2개월 이상으로 운송 물량 수주 취소 위기',
    afterResult: '리스김 제휴 특장 라인 가동으로 10일 최단기 맞춤 출고 성공',
    rating: 5.0,
    tags: ['마이티3.5톤', '광폭윙바디', '최단기특장', '무료탁송']
  }
];

export const TRUST_STATS = [
  { label: '심사 승인율', value: '99.2%', subText: '리스김 자체 펀딩 알고리즘' },
  { label: '누적 출고 차량', value: '15,280대+', subText: '화물·특장·승용·수입차 포함' },
  { label: '고객 만족도', value: '4.96 / 5.0', subText: '3,400+ 실제 계약고객 평가' },
  { label: '초기비용 0원 승인', value: '11,840건', subText: '무보증 자격조건 최다 보유' }
];

export const FAQ_LIST = [
  {
    q: '저신용자, 개인회생 중이거나 연체 이력이 있어도 정말 리스/렌트가 가능한가요?',
    a: '네, 가능합니다! 리스김은 1금융/2금융 캐피탈 외에도 저신용·신용불량 전담 자체 펀딩 시스템을 운영하고 있습니다. NICE/KCB 신용점수 조회 없이 통장 소득 내역이나 재직/사업자 사실 확인만으로 승인이 가능한 전담 상품이 마련되어 있습니다.'
  },
  {
    q: '화물차(포터, 봉고, 마이티 등) 특장 제작비도 리스/렌트 금액에 포함되나요?',
    a: '네, 100% 포함됩니다. 냉동탑차, 윙바디, 파워게이트, 크레인, 보강 작업 등 모든 특장 옵션 비용을 차량 가액에 포함시켜 초기 목돈 부담 없이 월 납입금 하나로 이용하실 수 있습니다.'
  },
  {
    q: '초기 비용 0원(무보증) 승인을 받으려면 어떤 조건이 필요한가요?',
    a: '사업자등록증, 최근 3개월 통장 거래 내역, 또는 재직/소득증빙 서류 중 일부만 확인되면 무보증 승인율이 매우 높습니다. 신용 상태에 따라 선수금/보증금 없이 당일 신차 인도가 가능합니다.'
  },
  {
    q: '개인사업자 및 법인의 세제 혜택(절세)은 어떻게 되나요?',
    a: '화물차 및 9인승 이상 승합차, 경차는 구매/리스/렌트 시 부가가치세(10%)가 전액 환급됩니다. 또한 승용차/수입차 역시 연간 최대 1,500만원(차량 감가상각 800만원 + 기름값/통행료/유지비 700만원)까지 법인세 및 종합소득세 비용 처리가 가능합니다.'
  }
];
