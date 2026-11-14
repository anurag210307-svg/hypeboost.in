export interface Creator {
  id: string;
  name: string;
  handle: string;
  profileUrl: string;
  platformType: 'youtube' | 'instagram';
  avatarUrl: string;
  category: string;
  categoryLabel: string;
  followers: string;
  followersNumeric: number;
  collaborations?: string;
  totalViews?: string;
  quote: string;
  platforms: ('instagram' | 'youtube' | 'x')[];
}

export interface BrandTestimonial {
  id: string;
  name: string;
  role: string;
  categoryTag: string;
  quote: string;
  attribution?: string;
  resultsMetric: string;
  resultsLabel: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'creator' | 'brand';
}
