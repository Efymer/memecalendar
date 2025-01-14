import { FeatureSection } from "@/components/FeatureSection";
import { SiteHeader } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { StatsSection } from "@/components/StatsSection";
import { TestnetBanner } from "@/components/TestnetBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white font-mono flex flex-col">
      {import.meta.env.VITE_HEDERA_NETWORK === "testnet" && <TestnetBanner />}
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        {/* <StatsSection /> */}
        <FeatureSection />
      </main>
      <SiteFooter />
    </div>
  );
}
