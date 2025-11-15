import { useState, useEffect } from "react";
import { Phone, Video, MoreHorizontal } from "lucide-react";

const ChatMockup = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    { type: 'user', text: 'Memorae, remind me to call mom tomorrow at 6 PM', time: '14:32' },
    { type: 'ai', text: "I've set a reminder for you to call mom tomorrow at 6:00 PM. I'll make sure you don't forget! 💜", time: '14:32' },
    { type: 'user', text: 'Also save this: John recommended that Italian restaurant on 5th street', time: '14:35' },
    { type: 'ai', text: "Saved! I've added John's Italian restaurant recommendation on 5th street to your notes. You can find it anytime by asking me about restaurant recommendations.", time: '14:35' },
    { type: 'user', text: 'What did John recommend again?', time: '16:20' },
    { type: 'ai', text: "John recommended an Italian restaurant on 5th street. This was saved earlier today when you mentioned it at 14:35.", time: '16:20' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See Memorae in Action
            </h2>
            <p className="text-xl text-gray-600">
              Real conversations with your AI memory assistant
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Chat Interface */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 max-w-sm mx-auto">
                {/* Phone Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-3 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-lg">🧠</span>
                    </div>
                    <div>
                      <div className="font-semibold">Memorae</div>
                      <div className="text-xs opacity-90">Online</div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <Phone className="w-5 h-5" />
                    <Video className="w-5 h-5" />
                    <MoreHorizontal className="w-5 h-5" />
                  </div>
                </div>

                {/* Messages */}
                <div className="p-4 h-96 overflow-y-auto bg-gray-50">
                  {messages.slice(0, currentMessage + 1).map((message, index) => (
                    <div 
                      key={index}
                      className={`mb-4 animate-fade-in ${
                        message.type === 'user' ? 'flex justify-end' : 'flex justify-start'
                      }`}
                    >
                      <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-blue-500 text-white rounded-br-md' 
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                      <span className="text-gray-500 text-sm">Type a message...</span>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              <div className="animate-slide-in-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Natural Conversation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Talk to Memorae like you would to a friend. No commands, no complex syntax - just natural conversation that gets understood perfectly.
                </p>
              </div>

              <div className="animate-slide-in-right" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Instant Memory Recall
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ask about anything you've mentioned before. Memorae remembers context, people, places, and details so you don't have to.
                </p>
              </div>

              <div className="animate-slide-in-right" style={{animationDelay: '0.4s'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Smart Organization
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Everything gets automatically categorized and tagged. Your memories are organized intelligently without any effort from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatMockup;