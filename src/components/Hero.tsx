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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Personal Assistant
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-left">
              Never Forget Important
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Moments
              </span>
              {" "}Again
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-300 text-left leading-relaxed">
              Your AI-powered memory assistant captures, organizes, and recalls everything through natural conversation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-purple-500/30 transition-all duration-200 hover:scale-[1.03]"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                onClick={() => {
                  const voiceSection = document.getElementById('voice-demo');
                  voiceSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl transition-all duration-200 hover:scale-[1.03]"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
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
