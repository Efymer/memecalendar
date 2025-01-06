import { format } from "date-fns";
import React from "react";
import { Button } from "./ui/button";

interface CalendarEvent {
  name: string;
  description: string;
  date: string;
}

interface AddToCalendarProps {
  event: CalendarEvent;
}

export const AddToCalendar: React.FC<AddToCalendarProps> = ({ event }) => {
  const generateGoogleCalendarUrl = (): string => {
    const { name, description, date } = event;
    const BASE_URL = "https://calendar.google.com/calendar/render";
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `⏰ Token Launch: ${name}`,
      dates: `${format(date, "yyyyMMdd")}/${format(date, "yyyyMMdd")}`,
      details: `${description || ""}\n\nPowered by MemeCalendar.fun`,
    });
    return `${BASE_URL}?${params.toString()}`;
  };

  const handleAddToCalendar = () => {
    let url = generateGoogleCalendarUrl();
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={() => handleAddToCalendar()}
      variant="outline"
      size="sm"
      className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333]"
    >
      Add to Calendar
    </Button>
  );
};

export default AddToCalendar;
