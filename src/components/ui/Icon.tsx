import { CalendarDays, Clock3, MessageCircle, Scissors, Search, Store } from "@/components/icons";

const icons = { search: Search, scissors: Scissors, calendar: CalendarDays, message: MessageCircle, store: Store, clock: Clock3 };

export default function Icon({ name, size = 22, className = "" }: { name: string; size?: number; className?: string }) {
  const IconComponent = icons[name as keyof typeof icons] ?? CalendarDays;
  return <IconComponent aria-hidden="true" className={className} size={size} strokeWidth={1.6}/>;
}
