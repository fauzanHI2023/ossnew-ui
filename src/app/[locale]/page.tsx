import Donate from "@/components/layout/header/Donate";
import Header from "@/components/layout/header/Header";
import { Sidebar } from "@/components/layout/sidebar/Sidebar";
import { CurrentCampaigns } from "@/components/section/homepage/CurrentCampaigns";
import { HeroSection } from "@/components/section/homepage/HeroSection";
import { InitiativesSection } from "@/components/section/homepage/InitiativeSection";
import { NewsSection } from "@/components/section/homepage/LatestNews";

export default function IndexPage() {
  return (
    <div>
      <h1 className="bg-hero-pattern">Makasih</h1>
      <Donate />
      <Header />
      <HeroSection />
      <CurrentCampaigns />
      <NewsSection />
      <InitiativesSection />
    </div>
  );
}
