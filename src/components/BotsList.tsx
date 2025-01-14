import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  MessageCircle,
  Bell,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";
import { useState } from "react";
import { DropsHeader } from "./DropsHeader";
import { BotsHeader, BotTypes } from "./BotsHeader";

interface BotInfo {
  id: string;
  name: string;
  platform: "telegram" | "discord";
  description: string;
  features: string[];
  source: "memecalendar" | "memejob";
  inviteUrl: string;
  usersCount: number;
}

const bots: BotInfo[] = [
  {
    id: "1",
    name: "MemeJob Alerts",
    platform: "telegram",
    description:
      "Get instant notifications when new tokens are listed on MemeJob.fun",
    features: [
      "Instant listing notifications",
      "Price alerts",
      "Launch reminders",
      "Custom filters",
      "Daily summaries",
    ],
    source: "memecalendar",
    inviteUrl: "https://t.me/memecalendar_bot",
    usersCount: 15420,
  },
  {
    id: "2",
    name: "MemeCalendar Discord",
    platform: "discord",
    description:
      "Never miss a new token listing on MemeCalendar.fun with our Discord bot",
    features: [
      "Real-time notifications",
      "Token analytics",
      "Community voting",
      "Customizable alerts",
      "Role-based permissions",
    ],
    source: "memecalendar",
    inviteUrl:
      "https://discord.com/api/oauth2/authorize?client_id=123&scope=bot",
    usersCount: 8750,
  },
  {
    id: "3",
    name: "MemeJob Alerts",
    platform: "telegram",
    description:
      "Stay updated with new listings and opportunities on MemeJob.fun",
    features: [
      "New listing alerts",
      "Trending tokens",
      "Market updates",
      "Performance tracking",
      "Whale alerts",
    ],
    source: "memejob",
    inviteUrl: "https://t.me/memejob_bot",
    usersCount: 12840,
  },
  {
    id: "4",
    name: "MemeJob Discord",
    platform: "discord",
    description:
      "Get real-time updates from MemeJob.fun directly in your Discord server",
    features: [
      "Listing notifications",
      "Market analysis",
      "Token verification alerts",
      "Community insights",
      "Custom commands",
    ],
    source: "memejob",
    inviteUrl:
      "https://discord.com/api/oauth2/authorize?client_id=456&scope=bot",
    usersCount: 6320,
  },
];

export function BotsList() {
  const [addedBots, setAddedBots] = useState<string[]>([]);
  const [activePlatform, setActivePlatform] = useState<BotTypes>("telegram");

  const handleAddBot = (botId: string) => {
    setAddedBots((prev) => [...prev, botId]);
  };

  return (
    <>
      {/* <BotsHeader activePlatform={activePlatform} onStatusChange={null} /> */}
      <div className="grid gap-6">
        {bots.map((bot) => (
          <Card key={bot.id} className="bg-[#0A0D14]/50 border-[#1a2333]">
            <CardHeader className="bg-[#1a2333] px-4 py-2 flex flex-row items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/50 text-sm">
                {bot.platform === "telegram" ? "telegram" : "discord"}_bot.exe
              </span>
              <Badge
                variant="outline"
                className="ml-auto border-[#2a3343] text-white/70"
              >
                {bot.source === "memecalendar" ? "MemeCalendar" : "MemeJob"}
              </Badge>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-[#1a2333] flex items-center justify-center flex-shrink-0">
                  {bot.platform === "telegram" ? (
                    <Send className="h-6 w-6 text-blue-500" />
                  ) : (
                    <MessageCircle className="h-6 w-6 text-indigo-500" />
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-white">
                      {bot.name}
                    </h2>
                    <Badge
                      variant="secondary"
                      className="bg-[#1a2333] text-white/50"
                    >
                      {bot.usersCount.toLocaleString()} users
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70">{bot.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-white/50" />
                  <span className="text-sm font-medium text-white">
                    Features
                  </span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {bot.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-white/70"
                    >
                      <Rocket className="h-3 w-3 text-white/30" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-4">
                {addedBots.includes(bot.id) ? (
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500/10"
                    disabled
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Added to{" "}
                    {bot.platform === "telegram" ? "Telegram" : "Discord"}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333]"
                    onClick={() => {
                      window.open(bot.inviteUrl, "_blank");
                      handleAddBot(bot.id);
                    }}
                  >
                    Add to{" "}
                    {bot.platform === "telegram" ? "Telegram" : "Discord"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
