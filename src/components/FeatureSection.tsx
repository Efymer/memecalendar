import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Trophy, Bot } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Token Launches",
    description:
      "Track upcoming token launches with detailed information about each project.",
  },
  {
    icon: Trophy,
    title: "Hall of Fame",
    description:
      "Track launched tokens - price, volume, market cap and more.",
  },
  {
    icon: Bot,
    title: "Notification Bots",
    description:
      "Get instant alerts on Telegram and Discord for new MemeJob and MemeCalendar listings.",
  },
  //   {
  //     icon: Bell,
  //     title: "Real-time Alerts",
  //     description:
  //       "Never miss an opportunity with customizable price and listing notifications.",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Market Analytics",
  //     description:
  //       "Access detailed market data and performance metrics for informed decisions.",
  //   },
  //   {
  //     icon: Users,
  //     title: "Community Insights",
  //     description:
  //       "Engage with the community and share insights about upcoming launches.",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Token Verification",
  //     description:
  //       "Verify token authenticity and track project credibility scores.",
  //   },
  //   {
  //     icon: Zap,
  //     title: "Quick Actions",
  //     description: "Add tokens to calendar and set reminders with one click.",
  //   },
];

export function FeatureSection() {
  return (
    <>
      <section className="relative py-16 md:py-24 border-b border-[#1a2333] overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />

        <div className="container relative">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold gradient-text">
              Platform Features
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Everything you need to discover, track, and analyze token launches
              in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group card-gradient backdrop-blur-xl border-[#1a2333] hover:border-blue-500/50 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors text-white/70">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="relative py-16 md:py-24 border-b border-[#1a2333] overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="container relative">
          <div className="flex items-center justify-center">
            <img src={hedera} />
          </div>
        </div>
      </section> */}
    </>
  );
}
