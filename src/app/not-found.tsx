import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return <section className="simple-page not-found"><Container><span className="eyebrow">PAGE NOT FOUND</span><h1>This page isn't on the schedule.</h1><p>The page may have moved or no longer exists.</p><Link className="button button-primary" href="/">Back to the homepage <span>→</span></Link></Container></section>;
}
