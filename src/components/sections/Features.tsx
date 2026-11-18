import Container from "@/components/ui/Container";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Features() {
  const clients = features.filter((feature) => feature.audience === "clients");
  const salons = features.filter((feature) => feature.audience === "salons");
  return <>
    <section className="features-section" id="for-clients"><AnimatedSection><Container><SectionHeading eyebrow="FOR CLIENTS" title="Find a salon that feels right" description="Explore salon profiles and services, then keep the details of your visit close at hand." centered/><div className="features-grid">{clients.map(feature => <FeatureCard key={feature.title} feature={feature}/>)}</div></Container></AnimatedSection></section>
    <section className="features-section salon-features" id="for-salons"><AnimatedSection><Container><SectionHeading eyebrow="FOR SALON TEAMS" title="A simpler way to run your salon profile" description="Keep your public details, services, availability, appointments, and inbox in one workspace." centered/><div className="features-grid">{salons.map(feature => <FeatureCard key={feature.title} feature={feature}/>)}</div></Container></AnimatedSection></section>
  </>;
}
