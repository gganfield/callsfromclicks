import GGNav from "./components/ggbuilds/GGNav";
import GGHero from "./components/ggbuilds/GGHero";
import TrustStrip from "./components/ggbuilds/TrustStrip";
import ProblemSection from "./components/ggbuilds/ProblemSection";
import OfferSection from "./components/ggbuilds/OfferSection";
import AfterLaunchSupport from "./components/ggbuilds/AfterLaunchSupport";
import ProcessSection from "./components/ggbuilds/ProcessSection";
import DemoSection from "./components/ggbuilds/DemoSection";
import RecentBuilds from "./components/ggbuilds/RecentBuilds";
import GuaranteeSection from "./components/ggbuilds/GuaranteeSection";
import FaqSection from "./components/ggbuilds/FaqSection";
import CTASection from "./components/ggbuilds/CTASection";
import GGFooter from "./components/ggbuilds/GGFooter";
import StickyMobileCTA from "./components/ggbuilds/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <GGNav />
      <GGHero />
      <TrustStrip />
      <ProblemSection />
      <OfferSection />
      <AfterLaunchSupport />
      <ProcessSection />
      <DemoSection />
      <RecentBuilds />
      <GuaranteeSection />
      <FaqSection />
      <CTASection />
      <GGFooter />
      <StickyMobileCTA />
    </main>
  );
}
