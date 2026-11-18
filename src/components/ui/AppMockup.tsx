import ImageSlot from "@/components/ui/ImageSlot";
import { assets } from "@/lib/constants";

export default function AppMockup() {
  return <div className="app-device"><div className="app-device-camera"/><ImageSlot src={assets.mobileHome} alt="Kapper Studio mobile app home screen" className="app-device-screen"/></div>;
}
