import StickyNavigation from "@/components/StickyNavigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ChatMockup from "@/components/ChatMockup";
import VoiceListener from "@/components/VoiceListener";
import Superpowers from "@/components/Superpowers";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyNavigation />
      <Hero />
      <HowItWorks />
      <ChatMockup />
      <VoiceListener />
      <Superpowers />
      <Features />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
