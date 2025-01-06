import { SiteHeader } from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white font-mono">
      <SiteHeader />
      <main className="container py-6">{children}</main>
      <Toaster />
    </div>
  );
}
