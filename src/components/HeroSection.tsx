import { Button } from "@/components/ui/button";
import { Terminal, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-[#1a2333]">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(0deg,transparent,black)]" />

      <div className="container relative py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
              <Terminal className="h-4 w-4 text-blue-500" />
              <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                The Future of Token Launches
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Discover the Next Big{" "}
                <span className="gradient-text">Meme Token</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl">
                Your ultimate platform for tracking and discovering
                new MemeJob.fun token launches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                asChild
              >
                <Link to="/tokens">
                  <Rocket className="mr-2 h-5 w-5" />
                  Explore Launches
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gradient-border bg-[#0A0D14] text-white/70 hover:text-white transition-colors"
                asChild
              >
                <Link to="/hall-of-fame">
                  View Hall of Fame
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C1FF]/10 to-[#00B4CE]/10 border border-[#00C1FF]/20 px-4 py-2 rounded-full">
                <Terminal className="h-4 w-4 text-blue-500" />
                <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#00C1FF] to-[#00B4CE]">
                  Built on Hedera
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative card-gradient backdrop-blur-xl rounded-lg p-4 space-y-4 border border-[#1a2333]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-white/50">
                  terminal_preview.exe
                </span>
              </div>
              <div className="space-y-2 font-mono">
                <p className="text-sm text-white/90">
                  {">"} connecting to memecalendar...
                </p>
                <p className="text-sm text-green-500">
                  {">"} connection established!
                </p>
                <p className="text-sm text-white/70">
                  {">"} fetching latest launches...
                </p>
                <p className="text-sm text-white/90">
                  {">"} found 156 upcoming tokens
                </p>
                <p className="text-sm text-white/70">
                  {">"} analyzing market data...
                </p>
                <p className="text-sm text-white/90 flex items-center gap-2">
                  {">"} ready for launch
                  <span className="inline-block w-2 h-4 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
