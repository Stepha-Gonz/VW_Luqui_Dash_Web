import Header from "../components/Header";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import ComparisonSection from "../components/ComparisonSection";
import ShowcaseSection from "../components/ShowcaseSection";
import ThemeSection from "../components/ThemeSection";
import StepsSection from "../components/StepsSection";
import VideoSection from "../components/VideoSection";
import ForYouSection from "../components/ForYouSection";
import OfferSection from "../components/OfferSection";
import IncludesSection from "../components/IncludesSection";
import FAQSection from "../components/FAQSection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { HOTMART_URL, detectCurrency } from "../services/pricing";
import "./Landing.css";

export default function Landing() {
  const currency = detectCurrency();

  useScrollReveal();

  return (
    <div className="page">
      <Header />
      <Hero />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ComparisonSection />
      <ShowcaseSection />
      <ThemeSection />
      <StepsSection />
      <VideoSection />
      <ForYouSection />
      <OfferSection currency={currency} hotmartUrl={HOTMART_URL} />
      <IncludesSection />
      <FAQSection />
      <FinalCTASection hotmartUrl={HOTMART_URL} />
      <Footer />
    </div>
  );
}
