import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import EmotionalStory from "@/components/EmotionalStory";
import VoiceListener from "@/components/VoiceListener";
import AISearch from "@/components/AISearch";
import AutoSummarizer from "@/components/AutoSummarizer";
import PeaceOfMind from "@/components/PeaceOfMind";
import Superpowers from "@/components/Superpowers";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EmotionalStory />
      <VoiceListener />
      <AISearch />
      <AutoSummarizer />
      <PeaceOfMind />
      <Superpowers />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
