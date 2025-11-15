import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";

const ReminderShowcase = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Reminder Card */}
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl max-w-sm mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                    REMINDER
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">
                      Call the dentist
                    </h3>
                    <p className="text-lg text-gray-700">
                      and make an appointment
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-gray-900">Monday, 26</div>
                        <div className="text-2xl font-black text-blue-600">8:00 AM</div>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-2xl backdrop-blur-sm animate-float flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500/20 rounded-2xl backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                Smart Reminders
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  That Actually Work
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Just tell Memorae what you need to remember. It creates beautiful, 
                actionable reminders that sync across all your devices and apps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  window.open('https://wa.me/1234567890?text=Hi%20Memorae!%20I%20want%20to%20try%20smart%20reminders', '_blank');
                }}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                Try for Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Gmail Coming Soon */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-orange-400 uppercase tracking-wide mb-1">
                    COMING SOON
                  </div>
                  <div className="text-white font-semibold">
                    Memorae will arrive in Gmail soon!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReminderShowcase;