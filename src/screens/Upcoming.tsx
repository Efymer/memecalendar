import Layout from "./Layout";
import {
  useGetOngoingTokens,
  useGetTodayTokens,
  useGetUpcomingTokens,
} from "@/queries/token";
import { useEffect, useState } from "react";
import { TokenCard } from "@/components/TokenCard";
import { DropsHeader } from "@/components/DropsHeader";
import { DropStatus } from "@/types/drop";
import { EmptyState } from "@/components/EmptyState";
import { LoadingState } from "@/components/LoadingState";
import { Terminal } from "lucide-react";

export default function Upcoming() {
  const { data: todayTokens, isLoading: isLoadingToday } = useGetTodayTokens();
  const { data: upComingTokens, isLoading: isLoadingUpcoming } =
    useGetUpcomingTokens();
  const { data: onGoingTokens, isLoading: isLoadingOnGoing } =
    useGetOngoingTokens();

  const isLoading = isLoadingToday || isLoadingUpcoming || isLoadingOnGoing;

  const [activeStatus, setActiveStatus] = useState<DropStatus>("upcoming");

  useEffect(() => {
    if (todayTokens?.length) {
      setActiveStatus("today");
    }
  }, [todayTokens]);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-blue-500" />
            <h1 className="text-2xl font-bold">Upcoming Tokens</h1>
            {/* <Badge
            variant="secondary"
            className="ml-2 bg-[#1a2333] text-white/50"
          >
            {mockTokens.length}
          </Badge> */}
          </div>
          <p className="text-white/70">
            Discover and track the next big token launches
          </p>
        </div>
        <div className="border border-[#1a2333] rounded-lg overflow-hidden">
          <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <span className="text-white/50 text-sm">
              C:\Users\Anon\MemeCalendar\tokens.exe
            </span>
          </div>
          <div className="p-4 bg-[#0A0D14] space-y-6">
            {/* <p className="text-sm text-white/90">{">"} initializing systems...</p> */}

            {/* <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <Switch
                id="animations"
                checked={showAnimations}
                onCheckedChange={setShowAnimations}
              />
              <Label htmlFor="animations" className="text-sm text-white/70">
                Show animations
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="nsfw"
                checked={includeNSFW}
                onCheckedChange={setIncludeNSFW}
              />
              <Label htmlFor="nsfw" className="text-sm text-white/70">
                Include NSFW
              </Label>
            </div>
          </div> */}

            {/* <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/40" />
              <Input
                placeholder="search for token..."
                className="pl-8 bg-[#1a2333] border-[#2a3343] text-white placeholder:text-white/40"
              />
            </div>
            <Select defaultValue="latest">
              <SelectTrigger className="w-[180px] bg-[#1a2333] border-[#2a3343] text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Last Activity</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div> */}

            {isLoading && <LoadingState />}

            {!isLoading && (
              <>
                <DropsHeader
                  activeStatus={activeStatus}
                  onStatusChange={setActiveStatus}
                  counts={{
                    today: todayTokens?.length,
                    upcoming: upComingTokens?.length,
                    ongoing: onGoingTokens?.length,
                  }}
                />

                <div className="flex gap-6">
                  <div className="flex-1 space-y-4">
                    {activeStatus === "today" && (
                      <>
                        {todayTokens?.length ? (
                          todayTokens.map((drop, i) => (
                            <TokenCard key={i} {...drop} />
                          ))
                        ) : (
                          <EmptyState />
                        )}
                      </>
                    )}

                    {activeStatus === "upcoming" && (
                      <>
                        {upComingTokens?.length ? (
                          upComingTokens.map((drop, i) => (
                            <TokenCard key={i} {...drop} />
                          ))
                        ) : (
                          <EmptyState />
                        )}
                      </>
                    )}

                    {activeStatus === "ongoing" && (
                      <>
                        {onGoingTokens?.length ? (
                          onGoingTokens.map((drop, i) => (
                            <TokenCard key={i} {...drop} />
                          ))
                        ) : (
                          <EmptyState />
                        )}
                      </>
                    )}

                    {/* {data?.map((drop, i) => (
                <TokenCard key={i} {...drop} />
              ))} */}
                    {/* <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333]"
                >
                  Load More
                </Button>
              </div> */}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>{" "}
      </div>
    </Layout>
  );
}
