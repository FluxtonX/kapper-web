"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { ArrowRight } from "@/components/icons";
import { site } from "@/lib/constants";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const demoHref = site.demoUrl || (site.contactEmail ? `mailto:${site.contactEmail}?subject=Kapper%20Studio` : "#product");
  const demoLabel = site.demoUrl || site.contactEmail ? "Get in touch" : "Explore the app";
  return <div className="mobile-menu"><button className={`menu-toggle${open ? " is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button>{open && <div className="mobile-panel">{navigation.map(item => <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowRight size={16}/></Link>)}<Link className="mobile-demo" href={demoHref} onClick={() => setOpen(false)}>{demoLabel}<ArrowRight size={16}/></Link></div>}</div>;
}
