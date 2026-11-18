import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [{ n: "01", title: "Explore salons", copy: "Browse salon profiles to see the services and details they share." }, { n: "02", title: "Choose a service and time", copy: "Select a service, then pick from the dates and times made available by the salon." }, { n: "03", title: "Keep your visit close", copy: "Review appointment updates and continue the conversation with the salon in the app." }];

export default function HowItWorks() {
  return <section className="how-section" id="how-it-works"><AnimatedSection><Container><SectionHeading eyebrow="HOW IT WORKS" title="From discovery to appointment" description="A straightforward flow for planning your next salon visit." centered/><div className="steps-grid">{steps.map(step => <article className="step-card" key={step.n}><span className="step-number">{step.n}</span><div className="step-line"/><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></Container></AnimatedSection></section>;
}
