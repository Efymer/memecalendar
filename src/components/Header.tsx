import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { HashConnectButton } from "./HashConnectButton";

export function SiteHeader() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/submit-token");

  return (
    <header className="w-full border-b border-[#1a2333] bg-[#0A0D14]">
      <div className="container flex h-14 items-center justify-between">
        <Link
          to="/"
          className="text-xl font-mono tracking-tight text-white hover:text-white/90 transition-colors"
        >
          memecalendar.fun
        </Link>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-orange-500 text-white bg-orange-600 hover:bg-orange-700 hover:text-white font-mono"
            onClick={handleNavigate}
          >
            Submit Your Token
          </Button>
          {/* <HashConnectButton /> */}
        </div>
      </div>
    </header>
  );
}
