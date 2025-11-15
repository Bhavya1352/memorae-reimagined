import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen text-white overflow-hidden" style={{backgroundImage: 'url(/bg1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="flex items-center justify-center min-h-screen relative">


          {/* Center Content */}
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up px-4">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Personal Assistant
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight">
              Your Personal
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Memory
              </span>
              <br />
              Assistant
            </h1>
            
            {/* Subtitle */}
            <div className="text-2xl lg:text-3xl font-bold text-gray-300">
              Remember Everything, <span className="text-white">Forget Nothing</span>
            </div>
            


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-10 py-7 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Remembering
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  const demoSection = document.querySelector('[data-demo-section]');
                  demoSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 px-10 py-7 text-xl font-bold rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20"
              >
                <Sparkles className="mr-3 w-6 h-6" />
                Watch Magic
              </Button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
