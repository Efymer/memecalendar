import { Button } from "@/components/ui/button";
import {
  Twitter,
  MessageCircle,
  ArrowUpRight,
  Wallet,
  Globe,
  Calendar,
  Send,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Token } from "@/mutations/token";
import AddToCalendar from "./AddToCalendar";

export function TokenCard({
  id,
  name,
  symbol,
  cover_image,
  description,
  date,
  twitter,
  discord,
  website,
  telegram,
  dev_wallet,
}: Token) {
  const navigate = useNavigate();

  const truncatedDescription =
    description.length > 120
      ? `${description.substring(0, 120).trim()}...`
      : description;

  // const statusColors = {
  //   today: "text-blue-500 bg-blue-500/10",
  //   upcoming: "text-yellow-500 bg-yellow-500/10",
  //   ongoing: "text-green-500 bg-green-500/10",
  //   minting: "text-purple-500 bg-purple-500/10",
  //   ended: "text-white/50 bg-white/5",
  // };

  return (
    <div className="bg-[#0A0D14]/50 border border-[#1a2333] rounded-lg overflow-hidden hover:border-[#2a3343] transition-all">
      <div className="bg-[#1a2333] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          {/* <span className="text-white/70 text-sm font-mono">{name}</span> */}
        </div>
        {/* <Badge
          variant="outline"
          className="border-[#2a3343] text-white/70 font-mono"
        >
          {blockchain}
        </Badge> */}
      </div>
      <div className="p-4 space-y-4">
        <div className="flex gap-4">
          <div className="relative aspect-square w-24 overflow-hidden rounded-lg border border-[#1a2333]">
            <img
              onClick={() => navigate(`/token/${id}`)}
              src={cover_image}
              alt={name}
              className="object-cover cursor-pointer"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                display: "block",
              }}
            />
            {/* <Badge
              variant="secondary"
              className={cn(
                "absolute bottom-1 right-1 text-sm border-0 font-mono",
                // statusColors[status]
                statusColors["today"]
              )}
            >
              Today
              {/* {status}
            </Badge> */}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-semibold text-white font-mono">
                <Link to={"/token/" + id}>
                  {name} ({symbol})
                </Link>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              {/* {isVerified && (
                <CheckCircle className="h-4 w-4 fill-blue-500 text-[#0A0D14]" />
              )} */}

              <div className="flex items-center gap-1 text-white/70">
                <Calendar className="h-3 w-3" />
                <span className="text-sm text-white/70 font-mono">{format(date, "PPP")}</span>
              </div>
            </div>
            {/* {price && (
              <div className="flex items-center gap-1 text-white/70">
                <Wallet className="h-3 w-3" />
                <span className="text-sm font-mono">{price}</span>
              </div>
            )} */}
            {/* {followers && (
              <div className="flex items-center gap-1 text-white/70">
                <Users className="h-3 w-3" />
                <span className="text-sm font-mono">
                  {followers.toLocaleString()} followers
                </span>
              </div>
            )} */}

            {dev_wallet && (
              <div className="flex items-center gap-1 text-sm text-white/70 font-mono">
                <span className="inline-flex items-center gap-1 text-sm transition-colors font-mono">
                  <Wallet className="h-3 w-3" />
                  <span>Creator: {dev_wallet}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-white/70 font-mono leading-relaxed">
          {truncatedDescription}
        </p>

        {/* <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-[#2a3343] text-white/70 font-mono text-sm"
            >
              {tag}
            </Badge>
          ))}
        </div> */}

        <div className="flex flex-wrap gap-3">
          {twitter && (
            <Link
              to={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors font-mono"
            >
              <Twitter className="h-3 w-3" />
              <span>Twitter</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          )}
          {discord && (
            <Link
              to={discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors font-mono"
            >
              <MessageCircle className="h-3 w-3" />
              <span>Discord</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          )}
          {telegram && (
            <Link
              to={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors font-mono"
            >
              <Send className="h-3 w-3" />
              <span>Telegram</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          )}
          {website && (
            <Link
              to={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors font-mono"
            >
              <Globe className="h-3 w-3" />
              <span>Website</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          )}
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-[#1a2333]">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333]"
              onClick={() => navigate(`/token/${id}`)}
            >
              Read More
            </Button>
            <AddToCalendar event={{ name, description, date }} />
          </div>
        </div>
      </div>
    </div>
  );
}
