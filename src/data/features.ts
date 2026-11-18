import type { Feature } from "@/types";

export const features: Feature[] = [
  { audience: "clients", eyebrow: "DISCOVER", title: "Browse participating salons", description: "Explore salon profiles and see the services each one offers.", icon: "search" },
  { audience: "clients", eyebrow: "CHOOSE", title: "Find the right service", description: "Compare treatments, service details, duration, and price before you book.", icon: "scissors" },
  { audience: "clients", eyebrow: "BOOK & STAY IN TOUCH", title: "Manage visits and messages", description: "Choose an available date and time, then keep appointment updates and salon conversations together.", icon: "message" },
  { audience: "salons", eyebrow: "YOUR SALON PROFILE", title: "Present your salon", description: "Maintain your public salon details, services, portfolio, and reviews.", icon: "store" },
  { audience: "salons", eyebrow: "AVAILABILITY", title: "Set dates and time slots", description: "Publish the dates and appointment times your salon can accept.", icon: "calendar" },
  { audience: "salons", eyebrow: "DAILY WORKSPACE", title: "Manage bookings and inbox", description: "Review appointments, messages, and salon notifications from the vendor workspace.", icon: "clock" },
];
