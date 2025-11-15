import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PeaceOfMind from "@/components/PeaceOfMind";
import Superpowers from "@/components/Superpowers";
import PainPoint from "@/components/PainPoint";
import ReminderShowcase from "@/components/ReminderShowcase";
import Features from "@/components/Features";
import WhatsAppDemo from "@/components/WhatsAppDemo";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PeaceOfMind />
      <Superpowers />
      <Pricing />
      <PainPoint />
      <ReminderShowcase />
      <Features />
      <WhatsAppDemo />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
