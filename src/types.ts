export interface SpecialDeal {
  id: string;
  category: 'truck' | 'ev' | 'passenger' | 'imported' | 'lowcredit';
  categoryLabel: string;
  name: string;
  brand: string;
  subtext: string;
  originalMonthly: number; // 10k KRW
  dealMonthly: number; // 10k KRW
  image: string;
  badges: string[];
  specs: {
    engine: string;
    fuel: string;
    efficiency?: string;
    deliveryTime: string;
  };
  features: string[];
  popularRanking?: number;
}

export interface CoreService {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  keyPoints: string[];
  targetAudience: string;
  benefitBadge: string;
}

export interface DeliveryStory {
  id: string;
  title: string;
  clientName: string;
  clientType: '개인사업자' | '법인기업' | '저신용고객' | '특장업종';
  vehicleName: string;
  deliveryDate: string;
  image: string;
  creditCondition: string;
  contractSummary: string;
  reviewText: string;
  beforeStory: string;
  afterResult: string;
  rating: number;
  tags: string[];
}

export interface QuoteFormState {
  vehicleCategory: string;
  vehicleModel: string;
  creditStatus: string;
  initialFeeOption: string;
  contractPeriod: string;
  yearlyMileage: string;
  userName: string;
  userPhone: string;
  userRegion: string;
  businessType: string;
  notes: string;
}
