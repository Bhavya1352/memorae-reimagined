import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Zap } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Black Friday Banner */}
      <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-red-600 to-orange-600 text-white text-center py-2 text-sm font-bold">
        🔥 BF20: 20% OFF Black Friday. Valid until 11/30! 🔥
      </div>
      
      <nav className={`fixed top-8 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">



        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in-up bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <Button 
              onClick={() => {
                window.open('https://wa.me/1234567890?text=Hi%20LifeBot!%20I%20want%20to%20get%20started%20with%20AI%20assistant', '_blank');
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl"
            >
              <Zap className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navigation;
