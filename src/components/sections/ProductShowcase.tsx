import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { assets } from "@/lib/constants";
import { CalendarDays, MessageCircle, Search, Store } from "@/components/icons";

const views = [
  { title: "Explore salons", description: "Browse salon profiles and discover their services.", src: assets.salonDiscovery, alt: "Kapper salon discovery screen", icon: Search },
  { title: "Choose a service", description: "Review service details before selecting a time.", src: assets.salonDetails, alt: "Kapper salon details and services screen", icon: Store },
  { title: "Your appointments", description: "Keep upcoming and past visits together.", src: assets.appointments, alt: "Kapper appointments screen", icon: CalendarDays },
  { title: "Salon workspace", description: "Salon teams can manage availability and bookings.", src: assets.vendorSalon, alt: "Kapper salon team workspace screen", icon: MessageCircle },
];

export default function ProductShowcase() {
  return <section className="product-section" id="product"><AnimatedSection><Container><SectionHeading eyebrow="THE KAPPER APP" title="A closer look at the experience" description="A simple way for clients to find and book salons, with a dedicated workspace for salon teams."/><div className="product-views">{views.map(({ title, description, src, alt, icon: Icon })=><article className="product-view" key={title}><div className="product-view-stage"><div className="product-phone"><span className="product-phone-camera"/><ImageSlot src={src} alt={alt} className="product-phone-screen"/></div></div><div className="product-view-copy"><span className="product-view-icon"><Icon size={18} strokeWidth={1.6}/></span><div><h3>{title}</h3><p>{description}</p></div></div></article>)}</div></Container></AnimatedSection></section>;
}
