import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/constants";

export default function ContactCTA() {
  const href = site.demoUrl || (site.contactEmail ? `mailto:${site.contactEmail}?subject=Kapper%20Studio` : "#product");
  const label = site.demoUrl || site.contactEmail ? "Get in touch" : "Explore the app";
  return <section className="contact-section" id="contact"><AnimatedSection><Container><div className="contact-panel"><div><span className="eyebrow">FOR SALON TEAMS</span><h2>Bring your salon into the Kapper experience.</h2><p>Present your salon, share your availability, and manage appointments in the salon workspace.</p></div><div className="contact-actions"><Button href={href}>{label} <ArrowRight size={17}/></Button></div></div></Container></AnimatedSection></section>;
}
