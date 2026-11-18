import Link from "next/link";
import type { ReactNode } from "react";

export default function Button({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "text"; className?: string }) {
  return <Link className={`button button-${variant} ${className}`} href={href}>{children}</Link>;
}
