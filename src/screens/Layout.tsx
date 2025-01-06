import { SiteHeader } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { TestnetBanner } from "@/components/TestnetBanner";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <>
      <TestnetBanner />
      <div className="min-h-screen bg-[#0A0D14] text-white font-mono">
        <SiteHeader />
        <main className="container py-6">{children}</main>
        <Toaster />
      </div>
      <SiteFooter />
    </>
  );
}
