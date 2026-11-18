"use client";

import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/data/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/constants";

export default function Navbar() {
  const direction = useScrollDirection();
  const activeSection = useActiveSection(navigation.map((item) => item.section));
  const demoHref = site.demoUrl || (site.contactEmail ? `mailto:${site.contactEmail}?subject=Kapper%20Studio` : "#product");
  const demoLabel = site.demoUrl || site.contactEmail ? "Get in touch" : "Explore the app";
  return <header className={`site-header${direction === "down" ? " header-hidden" : ""}`}><div className="nav-inner"><Link className="brand" href="#top" aria-label="Kapper Studio home"><Image src="/images/brand/logo.svg" alt="Kapper Studio" width={188} height={35} priority/></Link><nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link className={activeSection === item.section ? "nav-active" : ""} key={item.label} href={item.href}>{item.label}</Link>)}</nav><div className="nav-right"><Button href={demoHref}>{demoLabel} <ArrowRight size={16}/></Button></div><MobileMenu/></div></header>;
}
