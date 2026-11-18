import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CalendarDays, Search, Store } from "@/components/icons";

const benefits = [
  { title: "Choose with more context", description: "See the services and details a salon shares before you select a visit.", icon: Search },
  { title: "Keep appointment details together", description: "Review your bookings, updates, and conversations from the app.", icon: CalendarDays },
  { title: "Give your salon a clear presence", description: "Salon teams can maintain their profile, services, availability, and bookings.", icon: Store },
];
export default function Benefits() {
  return <section className="benefits-section" id="benefits"><AnimatedSection><Container><SectionHeading eyebrow="A CONNECTED EXPERIENCE" title="The details of each visit, in one place" centered/><div className="benefit-cards">{benefits.map(({ title, description, icon: Icon })=><article className="benefit-card" key={title}><span><Icon size={22} strokeWidth={1.6}/></span><h3>{title}</h3><p>{description}</p></article>)}</div></Container></AnimatedSection></section>;
}
