import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { TestnetBanner } from "@/components/TestnetBanner";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white font-mono flex flex-col sm:px-0 px-4">
      {import.meta.env.VITE_HEDERA_NETWORK === "testnet" && <TestnetBanner />}
      <SiteHeader />
      <main className="container py-6 flex-grow">{children}</main>
      <Toaster />
      <SiteFooter />
    </div>
  );
}
