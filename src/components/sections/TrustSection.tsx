import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CalendarDays, MessageCircle, Store } from "@/components/icons";

const values = [
  { icon: Store, title: "For clients and salons", text: "One app experience with a dedicated space for salon teams." },
  { icon: CalendarDays, title: "Appointments in one place", text: "Choose a time, review your visits, and follow appointment updates." },
  { icon: MessageCircle, title: "Conversations stay connected", text: "Keep salon messages alongside the details of your visit." },
];

export default function TrustSection() {
  return <section className="trust-section" id="trust"><AnimatedSection><Container><div className="trust-intro"><span className="eyebrow">ONE APP, TWO SIDES</span><h2>Made for the salon experience.</h2></div><div className="trust-points">{values.map(({ icon: Icon, title, text })=><article key={title}><Icon size={22} strokeWidth={1.6}/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></Container></AnimatedSection></section>;
}
