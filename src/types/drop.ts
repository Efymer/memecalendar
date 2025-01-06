export interface Drop {
  id: string;
  title: string;
  image: string;
  description: string;
  startDate: string;
  endDate: string;
  isVerified?: boolean;
  twitter?: string;
  discord?: string;
  followers?: number;
  status: "today" | "upcoming" | "ongoing" | "minting" | "ended";
  blockchain: string;
  price?: string;
  website?: string;
  totalRaised?: string;
  tags: string[];
}

export type BlockchainInfo = {
  name: string;
  count: number;
  icon: string;
};

export type DropStatus = "today" | "upcoming" | "ongoing";
