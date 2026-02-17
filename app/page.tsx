import { readFileSync } from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import ForSellers from "@/components/ForSellers";
import ForBuyers from "@/components/ForBuyers";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

function getWaitlistCount(): number {
  try {
    const filePath = path.join(process.cwd(), "data", "waitlist.json");
    const raw = readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw);
    return (data.seed || 47) + (data.entries?.length || 0);
  } catch {
    return 47;
  }
}

export default function HomePage() {
  const count = getWaitlistCount();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection initialCount={count} />
        <HowItWorks />
        <UseCases />
        <ForSellers />
        <ForBuyers />
        <WaitlistSection initialCount={count} />
      </main>
      <Footer />
    </>
  );
}
