import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Twitter, Globe } from "lucide-react";
import { cn, formatCompactNumber } from "@/lib/utils";
import {
  useFetchPrices,
  useFetchVolume,
  useGetTokenInfo,
} from "@/queries/token";
import { Link } from "react-router-dom";

export function LaunchedTokenCard({ token }) {
  const { data: tokenInfo, isLoading: isLoadingTokenInfo } = useGetTokenInfo(
    token.id
  );
  const { data: volume, isLoading: isLoadingVolume } = useFetchVolume(token.id);
  const { data: liquidity, isLoading: isLoadingLiquidity } = useFetchVolume(
    token.id
  );

  const { data: prices, isLoading: isLoadingPrices } = useFetchPrices();
  const totalSupply = 1000_000_000; // 980 million

  const isLoading =
    isLoadingTokenInfo ||
    isLoadingVolume ||
    isLoadingPrices ||
    isLoadingLiquidity;

  if (isLoading) return null;

  const marketCap = totalSupply * tokenInfo.priceUsd.toFixed(6);

  return (
    <Card className="bg-[#0A0D14]/50 border-[#1a2333] overflow-hidden">
      <CardHeader className="bg-[#1a2333] px-4 py-2 flex flex-row items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="relative w-20 overflow-hidden rounded-lg border border-[#1a2333] aspect-square">
            <img
              src={token.cover_image}
              alt={tokenInfo.symbol}
              className="object-cover"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
          </div>

          <div className="md:grid grid-cols-10 gap-6 ml-4 flex-grow">
            <div className="col-span-2 space-y-1 flex flex-col items-start">
              <p className="text-2xl font-bold text-white">
                {tokenInfo.symbol}
              </p>
              <p className="text-sm text-white/50">{token.id}</p>
            </div>
            <div className="col-span-2 space-y-1 self-center">
              <p className="text-sm text-white/50">Price</p>
              <p className="text-base text-white inline-flex items-center">
                ${tokenInfo.priceUsd.toFixed(6)}
              </p>
              <p
                className={cn(
                  "text-xs",
                  prices[token.id] > 0 ? "text-green-500" : "text-red-500"
                )}
              >
                {prices[token.id] > 0 ? "+" : ""}
                {prices[token.id].toFixed(2)}%
              </p>
            </div>
            <div className="col-span-2  space-y-1 self-center">
              <p className="text-sm text-white/50">Market Cap</p>
              <p className="text-base text-white">
                ${formatCompactNumber(marketCap)}
              </p>
            </div>
            <div className="col-span-2 space-y-1 self-center">
              <p className="text-sm text-white/50">24h Vol.</p>
              <p className="text-base text-white">${volume}</p>
            </div>
            <div className="col-span-2 space-y-1 self-center">
              <p className="text-sm text-white/50">Liquidity</p>
              <p className="text-base text-white">${liquidity}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {tokenInfo.twitterHandle && (
              <Link
                to={`https://x.com/${tokenInfo?.twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-white transition-colors rounded-md hover:bg-[#1a2333]"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            )}
            {tokenInfo.website && (
              <Link
                to={tokenInfo?.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/50 hover:text-white transition-colors rounded-md hover:bg-[#1a2333]"
              >
                <Globe className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
