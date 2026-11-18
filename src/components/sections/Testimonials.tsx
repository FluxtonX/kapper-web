import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function Testimonials() {
  if (!testimonials.length) return null;
  return <section className="testimonials-section" id="testimonials"><AnimatedSection><Container><SectionHeading eyebrow="SALON STORIES" title="Trusted by studios like yours" centered/><div className="testimonial-grid">{testimonials.map(item=><article className="testimonial-card" key={item.name}><p>“{item.quote}”</p><div className="testimonial-person">{item.image ? <Image className="avatar" src={item.image} alt="" width={40} height={40}/> : <span className="avatar">{item.initials}</span>}<span><b>{item.name}</b><small>{item.role}</small></span></div></article>)}</div></Container></AnimatedSection></section>;
}
