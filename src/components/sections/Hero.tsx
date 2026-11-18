import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ImageSlot from "@/components/ui/ImageSlot";
import AppMockup from "@/components/ui/AppMockup";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { assets, site } from "@/lib/constants";
import { ArrowRight, Check } from "@/components/icons";

export default function Hero() {
  const salonHref = site.demoUrl || (site.contactEmail ? `mailto:${site.contactEmail}?subject=Kapper%20Studio` : "#for-salons");
  const salonLabel = site.demoUrl || site.contactEmail ? "Talk to our team" : "For salon teams";
  return <section className="hero" id="top"><AnimatedSection><Container className="hero-grid">
    <div className="hero-copy">
      <span className="eyebrow">KAPPER STUDIO / SALON DISCOVERY & BOOKING</span>
      <h1>Your next salon visit, made simple.</h1>
      <p>Discover salons, explore their services, and book an available time. Keep your appointments and conversations together in one easy-to-use app.</p>
      <div className="hero-actions"><Button href="#product">Explore the app <ArrowRight size={17}/></Button><Button href={salonHref} variant="outline">{salonLabel}</Button></div>
      <div className="hero-checks"><span><Check size={15}/><b>Discover salons</b></span><span><Check size={15}/><b>Choose a service</b></span><span><Check size={15}/><b>Book your time</b></span></div>
    </div>
    <div className="hero-visual">
      <ImageSlot src={assets.heroSalon} alt="A bright, welcoming salon interior" className="hero-interior" priority/>
      <div className="hero-photo-caption"><span className="hero-caption-dot"/><span>Find a space that feels like you</span></div>
      <div className="hero-app-preview"><AppMockup/></div>
    </div>
  </Container></AnimatedSection></section>;
}
