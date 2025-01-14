import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface BotsHederProps {
  activeStatus: BotTypes;
  onStatusChange: (status: BotTypes) => void;
  counts: Record<BotTypes, number>;
}

export type BotTypes = "telegram" | "discord";

export function BotsHeader({
  activeStatus,
  onStatusChange,
  counts,
}: BotsHederProps) {
  const statuses: { label: string; value: BotTypes }[] = [
    { label: "Telegram", value: "telegram" },
    { label: "Discord", value: "discord" },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pt-2 font-mono">
      {statuses.map(({ label, value }) => (
        <Button
          key={value}
          variant="ghost"
          onClick={() => onStatusChange(value)}
          className={cn(
            "text-white/70 hover:text-white whitespace-nowrap hover:bg-[#1a2333]",
            activeStatus === value &&
              "bg-[#1a2333] text-white hover:bg-[#1a2333]"
          )}
        >
          {label}
          <Badge
            variant="secondary"
            className={cn(
              "ml-2 bg-[#1a2333] text-white/50 hover:bg-[#0A0D14]/50",
              activeStatus === value && "bg-[#0A0D14]/50 text-white"
            )}
          >
            {counts[value] ?? <Loader className="h-4 w-4 animate-spin" />}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
