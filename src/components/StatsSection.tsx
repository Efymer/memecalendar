import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, TrendingUp, MessageCircle } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    label: "Total Launches",
    value: "1,234",
    change: "+180 this month",
  },
  {
    icon: Users,
    label: "Community Members",
    value: "245.1K",
    change: "+18% growth",
  },
  {
    icon: TrendingUp,
    label: "Total Value Locked",
    value: "$12.4M",
    change: "+22% increase",
  },
  {
    icon: MessageCircle,
    label: "Bot Notifications",
    value: "892.5K",
    change: "Last 30 days",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 border-b border-[#1a2333]">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group card-gradient backdrop-blur-xl border-[#1a2333] hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                    <p className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/50">{stat.change}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
