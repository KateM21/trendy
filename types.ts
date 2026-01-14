export interface Trend {
  id: number;
  name: string;
  insight: string;
  hype: number; // Percentage from 0 to 100
  image: string;
  ages: number[];
}

// FIX: Add TrendAnalysis and GiftIdea interfaces to resolve missing type error.
export interface GiftIdea {
  name: string;
  description: string;
}

export interface TrendAnalysis {
  explanation: string;
  key_elements: string[];
  gift_ideas: GiftIdea[];
}
