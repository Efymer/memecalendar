import { DropStatus } from "@/types/drop";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropsHeaderProps {
  activeStatus: DropStatus;
  onStatusChange: (status: DropStatus) => void;
  counts: Record<DropStatus, number>;
}

export function DropsHeader({
  activeStatus,
  onStatusChange,
  counts,
}: DropsHeaderProps) {
  const statuses: { label: string; value: DropStatus }[] = [
    { label: "Today", value: "today" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Ongoing", value: "ongoing" },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 font-mono">
      {statuses.map(({ label, value }) => (
        <Button
          key={value}
          variant="ghost"
          onClick={() => onStatusChange(value)}
          className={cn(
            "text-white/70 hover:text-white whitespace-nowrap hover:bg-[#1a2333]",
            activeStatus === value && "bg-[#1a2333] text-white hover:bg-[#1a2333]"
          )}
        >
          {label}
          <Badge
            variant="secondary"
            className={cn("ml-2 bg-[#1a2333] text-white/50 hover:bg-[#0A0D14]/50", activeStatus === value && "bg-[#0A0D14]/50 text-white")}
          >
            {counts[value]}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
