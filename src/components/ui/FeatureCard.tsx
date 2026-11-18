import type { Feature } from "@/types";
import Icon from "@/components/ui/Icon";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return <AnimatedSection className="feature-reveal"><article className="feature-card"><div className="feature-card-copy"><span className="feature-icon"><Icon name={feature.icon}/></span><span className="eyebrow">{feature.eyebrow}</span><h3>{feature.title}</h3><p>{feature.description}</p></div></article></AnimatedSection>;
}
