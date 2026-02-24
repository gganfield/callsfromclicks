import GGNav from "./components/ggbuilds/GGNav";
import GGHero from "./components/ggbuilds/GGHero";
import TrustStrip from "./components/ggbuilds/TrustStrip";
import ProblemSection from "./components/ggbuilds/ProblemSection";
import OfferSection from "./components/ggbuilds/OfferSection";
import ProcessSection from "./components/ggbuilds/ProcessSection";
import DemoSection from "./components/ggbuilds/DemoSection";
import GuaranteeSection from "./components/ggbuilds/GuaranteeSection";
import FaqSection from "./components/ggbuilds/FaqSection";
import CTASection from "./components/ggbuilds/CTASection";
import GGFooter from "./components/ggbuilds/GGFooter";

export default function Home() {
  return (
    <main>
      <GGNav />
      <GGHero />
      <TrustStrip />
      <ProblemSection />
      <OfferSection />
      <ProcessSection />
      <DemoSection />
      <GuaranteeSection />
      <FaqSection />
      <CTASection />
      <GGFooter />
    </main>
  );
}
