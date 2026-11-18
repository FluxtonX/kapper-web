import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";

export default function ImageSlot({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return <div className={`image-slot relative w-full overflow-hidden ${className}`}>
    {src ? <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" priority={priority} className="image-slot-image"/> : <div className="image-slot-empty" role="img" aria-label={alt}><ImageIcon size={26} strokeWidth={1.25}/></div>}
  </div>;
}
