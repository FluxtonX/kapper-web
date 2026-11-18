import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { socialLinks } from "@/lib/constants";

export default function Footer() {
  return <footer className="site-footer"><Container><div className="footer-main"><div className="footer-brand"><Link className="brand" href="#top" aria-label="Kapper Studio home"><Image src="/images/brand/logo.svg" alt="Kapper Studio" width={172} height={32}/></Link><p>Salon discovery, appointments,<br/>and a workspace for salon teams.</p></div><div className="footer-links"><div><b>Explore</b><Link href="#product">The app</Link><Link href="#for-clients">For clients</Link><Link href="#for-salons">For salons</Link><Link href="#how-it-works">How it works</Link></div>{socialLinks.length > 0 && <div><b>Follow along</b>{socialLinks.map((link)=><a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>)}</div>}</div></div><div className="footer-bottom"><span>Copyright © {new Date().getFullYear()} Kapper Studio. All rights reserved.</span><span>Made for salon visits</span></div></Container></footer>;
}
