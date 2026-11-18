export const site = {
  name: "Kapper Studio",
  description: "Discover salons, explore services, and manage appointments with the Kapper salon booking app.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  demoUrl: process.env.NEXT_PUBLIC_DEMO_URL ?? "",
};

export const socialLinks: Array<{ label: string; href: string }> = [
  { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "" },
  { label: "Facebook", href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "" },
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "" },
].filter((link) => Boolean(link.href));

export const trustStats: Array<{ value: number; suffix?: string; label: string }> = [];

export const assets = {
  heroSalon: "/images/hero/salon-interior.jpg",
  heroBarber: "/images/hero/barber-service.jpg",
  mobileHome: "/images/app-screenshots/mobile-home.png",
  salonDiscovery: "/images/app-screenshots/salon-discovery.png",
  salonDetails: "/images/app-screenshots/salon-details.png",
  appointments: "/images/app-screenshots/appointments.png",
  chat: "/images/app-screenshots/chat.png",
  vendorSalon: "/images/app-screenshots/vendor-salon.png",
  availability: "/images/app-screenshots/availability.png",
  notifications: "/images/app-screenshots/notifications.png",
};
