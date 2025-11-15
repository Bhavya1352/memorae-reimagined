import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold">Ready to Transform Your Memory?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Never Forget
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Anything Important
            </span>
            <br />
            Ever Again
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join thousands who've already transformed their memory with AI. 
            <span className="text-white font-semibold"> Start your 7-day free trial today.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => {
                const pricingSection = document.getElementById('pricing');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 hover:from-yellow-600 hover:via-pink-600 hover:to-purple-600 text-white px-10 py-4 text-xl font-bold rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => {
                const voiceSection = document.getElementById('voice-demo');
                voiceSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 px-10 py-4 text-xl rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">7 Days</div>
              <div className="text-sm text-gray-400">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">No Setup</div>
              <div className="text-sm text-gray-400">Ready in Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Cancel</div>
              <div className="text-sm text-gray-400">Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;