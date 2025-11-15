import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mic, Calendar, CheckCircle, Clock, Zap } from "lucide-react";

const demoMessages = [
  {
    id: 1,
    type: "user",
    content: "🎤 Voice note: Remind me to call mom tomorrow at 6 PM and also buy milk on the way home",
    time: "2:30 PM",
    isVoice: true
  },
  {
    id: 2,
    type: "ai",
    content: "✅ Done! Created 2 reminders:\n📞 Call mom - Tomorrow 6:00 PM\n🥛 Buy milk - Today 5:30 PM (on your way home)\n\nBoth synced to your Google Calendar!",
    time: "2:30 PM",
    actions: ["📅 Calendar Synced", "⏰ 2 Reminders Set"]
  },
  {
    id: 3,
    type: "user",
    content: "📸 [Photo of handwritten shopping list]",
    time: "3:15 PM",
    isPhoto: true
  },
  {
    id: 4,
    type: "ai",
    content: "📝 I've read your shopping list and created:\n\n🛒 Shopping List (8 items):\n• Bread, Eggs, Tomatoes\n• Chicken, Rice, Onions\n• Yogurt, Bananas\n\nWant me to remind you before you go to the store?",
    time: "3:15 PM",
    actions: ["📋 List Created", "🔍 Photo Processed"]
  }
];

const WhatsAppDemo = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % demoMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section data-demo-section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Live WhatsApp Demo
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                See AI in
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Action
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Watch how natural conversations become organized tasks, reminders, and calendar events automatically.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  isPlaying 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg' 
                    : 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                }`}
              >
                {isPlaying ? '⏸️ Pause Demo' : '▶️ Play Demo'}
              </Button>
              <Button
                onClick={() => {
                  setCurrentMessage(0);
                  setIsPlaying(true);
                }}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
              >
                🔄 Restart
              </Button>
              <Button
                onClick={() => {
                  window.open('https://wa.me/1234567890?text=Hi%20LifeBot!%20I%20want%20to%20try%20the%20demo%20features', '_blank');
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                💬 Try Live
              </Button>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <Mic className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">Voice Notes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Auto Calendar</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Smart Tasks</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="text-sm text-gray-300">Proactive Reminders</span>
              </div>
            </div>
          </div>

          {/* Right - WhatsApp Mockup */}
          <div className="relative">
            <Card className="w-full max-w-sm mx-auto bg-slate-800 border-slate-700 overflow-hidden">
              <div className="bg-green-600 p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Memorae</div>
                  <div className="text-green-100 text-xs">Your Second Brain</div>
                </div>
              </div>

              <CardContent className="p-0 h-96 overflow-hidden">
                <div className="p-4 space-y-4 h-full overflow-y-auto">
                  {demoMessages.slice(0, currentMessage + 1).map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-green-600 text-white'
                            : 'bg-slate-700 text-gray-100'
                        }`}
                      >
                        {message.isVoice && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Mic className="w-4 h-4" />
                            <div className="flex space-x-1">
                              <div className="w-1 h-4 bg-current animate-pulse"></div>
                              <div className="w-1 h-6 bg-current animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-1 h-3 bg-current animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-1 h-5 bg-current animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                            </div>
                          </div>
                        )}
                        {message.isPhoto && (
                          <div className="w-full h-24 bg-gray-600 rounded-lg mb-2 flex items-center justify-center">
                            <span className="text-xs text-gray-300">📸 Shopping List Photo</span>
                          </div>
                        )}
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <div className="text-xs opacity-70 mt-2">{message.time}</div>
                        
                        {message.actions && (
                          <div className="mt-3 space-y-1">
                            {message.actions.map((action, actionIndex) => (
                              <div key={actionIndex} className="text-xs bg-white/10 rounded-lg px-2 py-1">
                                {action}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Typing Indicator */}
                {isPlaying && (
                  <div className="p-4 border-t border-slate-700">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs">AI is processing...</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-500/20 rounded-2xl backdrop-blur-sm animate-float flex items-center justify-center">
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-2xl backdrop-blur-sm animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;