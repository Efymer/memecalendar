import { Terminal } from "lucide-react";
import Layout from "./Layout";

export default function ComingSoonPage() {
  return (
    <Layout>
      <div className="bg-[#0A0D14] text-white font-mono flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          <div className="bg-[#0A0D14]/50 border border-[#1a2333] rounded-lg overflow-hidden">
            <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/50 text-sm">launching_soon.exe</span>
            </div>

            <div className="p-6 md:p-12 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                  <Terminal className="h-4 w-4 text-blue-500" />
                  <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    System Initialization
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-4xl font-bold">
                    Something Big is{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      Coming
                    </span>
                  </h1>
                  <p className="text-lg text-white/70">
                    We're working hard to bring you the ultimate token launch
                    platform. Stay tuned!
                  </p>
                </div>

                <div className="space-y-2 font-mono">
                  <p className="text-sm text-white/90">
                    {">"} initializing launch sequence...
                  </p>
                  <p className="text-sm text-green-500">
                    {">"} systems check: passed
                  </p>

                  <p className="text-sm text-white/90 flex items-center gap-2">
                    {">"} preparing for deployment...
                    <span className="inline-block w-2 h-4 bg-blue-500 animate-pulse" />
                  </p>
                </div>
              </div>

              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1a2333]/50 border border-[#1a2333] rounded-lg p-4 text-center space-y-2"
                >
                  <div className="text-2xl md:text-3xl font-bold tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm text-white/50">{item.label}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Badge
                  variant="outline"
                  className="border-[#2a3343] text-white/70"
                >
                  <Timer className="mr-2 h-3 w-3" />
                  Get Notified
                </Badge>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1a2333] border-[#2a3343] text-white placeholder:text-white/40"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    <Send className="h-4 w-4" />
                    <span className="ml-2 hidden sm:inline">Notify Me</span>
                  </Button>
                </div>
              </div>
            </form> */}

              {/* <div className="flex items-center justify-between pt-8 border-t border-[#1a2333]">
                <div className="text-sm text-white/50">
                  © {new Date().getFullYear()} Token Calendar
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/tokencalendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://discord.gg/tokencalendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <Toaster /> */}
      </div>
    </Layout>
  );
}
