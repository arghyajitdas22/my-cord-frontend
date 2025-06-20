import { format, formatDistanceToNow, isToday } from "date-fns";

export function formatMessageTime(isoString: string): string {
  const date = new Date(isoString);

  if (isToday(date)) {
    // e.g., "3:45 PM"
    return format(date, "p");
  }

  const hoursAgo = formatDistanceToNow(date, { addSuffix: true });
  return hoursAgo;
}
