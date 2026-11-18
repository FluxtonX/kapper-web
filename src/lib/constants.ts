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

export const assets = {
  heroSalon: "/images/hero/salon-interior.jpg",
  mobileHome: "/images/app-screenshots/mobile-home.png",
  salonDiscovery: "/images/app-screenshots/salon-discovery.png",
  salonDetails: "/images/app-screenshots/salon-details.png",
  appointments: "/images/app-screenshots/appointments.png",
  vendorSalon: "/images/app-screenshots/vendor-salon.png",
};
