import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { HashConnectButton } from "./HashConnectButton";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { useWallet } from "@buidlerlabs/hashgraph-react-wallets";
import { Bot, Calendar, Gift, Trophy } from "lucide-react";

export function SiteHeader() {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/submit-token");
  const { isConnected } = useWallet(HashpackConnector);

  return (
    <header className="w-full border-b border-[#1a2333] bg-[#0A0D14]">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link
          to="/"
          className="text-2xl font-mono tracking-tight text-white hover:text-white/90 transition-colors mr-6"
        >
          memecalendar.fun
        </Link>

        <div className="flex items-start gap-8 justify-start flex-grow">
          <Link
            to="/tokens"
            className="flex items-center gap-2 text-sm font-mono text-white/80 hover:text-white transition-colors"
          >
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Upcoming Tokens</span>
          </Link>
          <Link
            to="/hall-of-fame"
            className="flex items-center gap-2 text-sm font-mono text-white/80 hover:text-white transition-colors"
          >
            <Trophy className="h-4 w-4" />
            <span className="hidden sm:inline">Hall of Fame</span>
          </Link>
          <Link to="/bots" className="flex items-center gap-2 text-sm font-mono text-white/70 hover:text-white transition-colors">
            <Bot className="h-4 w-4" />
            <span className="hidden sm:inline">Bots</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
            <Button
            variant="outline"
            size="sm"
            className="hidden sm:block border-orange-500 text-white bg-orange-600 hover:bg-orange-700 hover:text-white font-mono"
            onClick={handleNavigate}
            >
            Submit Your Token
            </Button>
          {isConnected && <HashConnectButton />}
        </div>
      </div>
    </header>
  );
}
