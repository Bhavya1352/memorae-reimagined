import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Calendar, MessageSquare, FileText } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentMemory, setCurrentMemory] = useState(0);
  
  const memories = [
    {
      icon: Brain,
      title: "Meeting Summary Generated",
      time: "2 min ago",
      content: "Captured key decisions from team standup",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calendar,
      title: "Task Extracted",
      time: "5 min ago", 
      content: "Follow up with client by Friday",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Decision Captured",
      time: "8 min ago",
      content: "Approved new design direction",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: FileText,
      title: "Note Saved",
      time: "12 min ago",
      content: "Restaurant recommendation from Sarah",
      color: "from-orange-500 to-red-500"
    }
  ];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      setCurrentMemory((prev) => (prev + 1) % memories.length);
    }, 3000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-500/30 to-pink-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-up lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold text-white">
                🏆 Award-Winning AI Memory Assistant
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight text-left">
              Your Brain's
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Best Friend
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl text-gray-200 text-left leading-relaxed font-light">
              Never forget important conversations, ideas, or tasks again. 
              <span className="text-white font-semibold">Memorae remembers everything</span> so you can focus on what matters.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 hover:from-yellow-600 hover:via-pink-600 hover:to-purple-600 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
              >
                🚀 Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  const voiceSection = document.getElementById('voice-demo');
                  voiceSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white/50 bg-white/10 text-white hover:bg-white/20 hover:border-white/70 px-12 py-6 text-xl rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="text-2xl">⭐</div>
                <span className="text-white font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">🔒</div>
                <span className="text-white font-semibold">100% Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-2xl">⚡</div>
                <span className="text-white font-semibold">Instant Setup</span>
              </div>
            </div>
          </div>

          {/* Right Side - Memory Timeline */}
          <div className="relative hidden lg:block">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30"></div>
            
            {/* Memory Cards */}
            <div className="space-y-6">
              {memories.map((memory, index) => {
                const isActive = index === currentMemory;
                const isPast = index < currentMemory;
                const IconComponent = memory.icon;
                
                return (
                  <div 
                    key={index}
                    className={`relative flex items-start space-x-4 transition-all duration-1000 ${
                      isActive ? 'animate-slide-in-right opacity-100 scale-105' : 
                      isPast ? 'opacity-60 scale-95' : 'opacity-40 scale-90'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-4 h-4 rounded-full border-2 border-white ${
                      isActive ? 'bg-gradient-to-r ' + memory.color + ' animate-pulse shadow-lg' : 
                      isPast ? 'bg-gray-400' : 'bg-gray-600'
                    }`}>
                      {isActive && (
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${memory.color} animate-ping opacity-75`}></div>
                      )}
                    </div>
                    
                    {/* Memory Card */}
                    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm ${
                      isActive ? 'shadow-purple-500/20 border-white/40' : ''
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${memory.color} flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm">{memory.title}</h3>
                          <p className="text-gray-300 text-xs">{memory.time}</p>
                        </div>
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed">{memory.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
