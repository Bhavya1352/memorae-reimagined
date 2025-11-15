import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import PaymentModal from "@/components/PaymentModal";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: string} | null>(null);
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            Start your memory revolution today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pro Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-rotate-1 group cursor-pointer">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
              <div className="mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  5 MONTHS FREE
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-black text-slate-900">$2.99</span>
                <span className="text-lg text-slate-500 line-through">$4.99</span>
              </div>
              <p className="text-slate-600">per month</p>
              <p className="text-sm text-slate-500 mt-2">
                12 months for $35.88 ($59.92)
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center">
                  <Play className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-sm text-slate-700">View demo of Pro Plan</span>
              </div>
            </div>

            <Button 
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl"
              onClick={() => setSelectedPlan({name: 'Pro', price: 'US$35.88'})}
            >
              Try for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Supernova Plan */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-xl relative hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 animate-pulse group cursor-pointer">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                MOST POPULAR
              </span>
            </div>
            
            <div className="text-center mb-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Supernova</h3>
              <div className="mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  5 MONTHS FREE
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl font-black">$8.99</span>
                <span className="text-lg text-white/70 line-through">$14.99</span>
              </div>
              <p className="text-white/80">per month</p>
              <p className="text-sm text-white/70 mt-2">
                12 months for $107.88 ($180.16)
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-white">View demo of Supernova Plan</span>
              </div>
            </div>

            <Button 
              className="w-full bg-white text-purple-600 hover:bg-white/90 py-3 rounded-xl font-bold"
              onClick={() => setSelectedPlan({name: 'Supernova', price: 'US$107.88'})}
            >
              Try for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Lifetime Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 hover:rotate-1 group cursor-pointer">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Lifetime</h3>
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ONE-TIME PAYMENT
                </span>
              </div>
              <div className="mb-2">
                <span className="text-4xl font-black text-slate-900">$199.00</span>
              </div>
              <p className="text-sm text-green-600 font-semibold">
                Save over $900 in 5 years
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center">
                  <Play className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-sm text-slate-700">View demo of Supernova Lifetime Plan</span>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl"
              onClick={() => setSelectedPlan({name: 'Lifetime', price: 'US$199.00'})}
            >
              Activate Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      {selectedPlan && (
        <PaymentModal 
          plan={selectedPlan.name}
          price={selectedPlan.price}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </section>
  );
};

export default Pricing;