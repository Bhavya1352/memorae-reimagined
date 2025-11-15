import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Shield, Wand2, Users, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Brain,
    title: "Voice Memory",
    description: "Tell Memorae anything - thoughts, ideas, tasks. Just speak naturally and it remembers everything for you.",
    gradient: "from-green-500 to-emerald-500",
    stats: "Voice powered",
    demo: "Natural speech, instant storage, smart recall"
  },
  {
    icon: Zap,
    title: "Smart Reminders",
    description: "Set reminders by simply saying when you need to remember something. Memorae handles the rest.",
    gradient: "from-blue-500 to-cyan-500",
    stats: "Never forget",
    demo: "Time-based alerts, location reminders, recurring tasks"
  },
  {
    icon: Wand2,
    title: "Personal Notes",
    description: "Store thoughts, ideas, and important information. Search and find anything you've ever told Memorae.",
    gradient: "from-purple-500 to-pink-500",
    stats: "Unlimited storage",
    demo: "Smart search, categorization, instant retrieval"
  },
  {
    icon: Users,
    title: "Memory Sharing",
    description: "Share memories and reminders with family. Keep everyone on the same page effortlessly.",
    gradient: "from-orange-500 to-red-500",
    stats: "Family sync",
    demo: "Shared memories, group reminders, family calendar"
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Track how you spend time and get insights into your daily patterns and productivity.",
    gradient: "from-indigo-500 to-purple-500",
    stats: "Time insights",
    demo: "Activity tracking, productivity analysis, time optimization"
  },
  {
    icon: Shield,
    title: "Memory Backup",
    description: "Your memories are safely stored and backed up. Never lose important information again.",
    gradient: "from-pink-500 to-red-500",
    stats: "Secure storage",
    demo: "Cloud backup, encryption, data recovery"
  }
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Personal Memory Assistant
            </span>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-black mb-8 text-white leading-tight">
            Remember
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Your personal AI assistant that remembers everything so you don't have to. 
            <span className="text-white font-semibold">Store thoughts, set reminders, and never forget</span> what's important.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isActive = activeFeature === index;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 border-2 backdrop-blur-sm overflow-hidden ${
                  isActive 
                    ? 'border-white/30 shadow-2xl shadow-purple-500/20 scale-105 bg-white/5' 
                    : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                onClick={() => {
                  const modal = document.createElement('div');
                  modal.innerHTML = `
                    <div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onclick="this.remove()">
                      <div class="bg-slate-800 p-8 rounded-2xl border border-slate-600 max-w-2xl w-full" onclick="event.stopPropagation()">
                        <div class="flex items-center space-x-4 mb-6">
                          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center">
                            <div class="w-8 h-8 text-white">⚡</div>
                          </div>
                          <div>
                            <h3 class="text-3xl font-bold text-white">${feature.title}</h3>
                            <p class="text-green-400 font-semibold">${feature.stats}</p>
                          </div>
                        </div>
                        <p class="text-gray-300 text-lg mb-6 leading-relaxed">${feature.description}</p>
                        <div class="bg-slate-700 rounded-xl p-4 mb-6">
                          <h4 class="text-white font-semibold mb-2">Key Features:</h4>
                          <p class="text-gray-300">${feature.demo}</p>
                        </div>
                        <div class="flex space-x-4">
                          <button onclick="window.open('https://wa.me/1234567890?text=Hi!%20I%20want%20to%20try%20${feature.title}', '_blank')" class="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors">Try This Feature</button>
                          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="px-6 text-gray-400 hover:text-white transition-colors">Close</button>
                        </div>
                      </div>
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
              >
                <CardContent className="p-8 relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon & Stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-white border border-white/20">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>

                  {/* Demo Features */}
                  {isActive && (
                    <div className="animate-fade-in-up">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400 font-medium">Key Features:</span>
                          <ArrowRight className="w-4 h-4 text-purple-400" />
                        </div>
                        <p className="text-sm text-white mt-2 font-medium">{feature.demo}</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Features;
