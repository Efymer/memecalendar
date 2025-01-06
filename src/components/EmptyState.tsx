import { FileQuestion, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function EmptyState() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0A0D14]/50 border border-[#1a2333] rounded-lg overflow-hidden">
      <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
      </div>

      <div className="p-12 flex flex-col items-center justify-center text-center space-y-6">
        <div className="h-20 w-20 rounded-full bg-[#1a2333] flex items-center justify-center">
          <FileQuestion className="h-10 w-10 text-white/30" />
        </div>

        <div className="space-y-2 max-w-sm">
          <h3 className="text-lg font-semibold text-white font-mono">
            No Tokens Found
          </h3>
          <p className="text-sm text-white/70 font-mono">
            {">"} searching for tokens...
          </p>
          <p className="text-sm text-white/70 font-mono">
            {">"} error: no tokens found in the current directory
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            className="border-orange-500 text-white bg-orange-600 hover:bg-orange-700 hover:text-white font-mono"
            onClick={() => navigate("/submit-token")}
          >
            Submit Your Token
          </Button>
        </div>
      </div>
    </div>
  );
}
