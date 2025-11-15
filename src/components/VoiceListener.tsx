import { useState, useEffect } from "react";
import { Mic, MicOff } from "lucide-react";

const VoiceListener = () => {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState("Ready to listen");
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    setIsListening(true);
    setStatus("Listening...");
    
    // Simulate voice processing
    setTimeout(() => {
      setStatus("Processing...");
      setTimeout(() => {
        setTranscript("Meeting with Sarah about Q4 planning and budget allocation for new features");
        setStatus("Summary created!");
        setTimeout(() => {
          setIsListening(false);
          setStatus("Ready to listen");
        }, 2000);
      }, 1500);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Your AI is Always
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Listening
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Speak naturally. Your AI captures, understands, and organizes everything.
            </p>
          </div>

          {/* Voice Interface */}
          <div className="relative">
            {/* Pulsing Waves */}
            {isListening && (
              <>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" style={{animationDuration: '2s'}}></div>
                <div className="absolute inset-4 rounded-full bg-purple-500/20 animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
                <div className="absolute inset-8 rounded-full bg-pink-500/20 animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
              </>
            )}
            
            {/* Main Circle */}
            <div 
              className={`relative w-48 h-48 mx-auto rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 ${
                isListening 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50 scale-110' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-600 hover:to-purple-600 hover:scale-105'
              }`}
              onClick={startListening}
            >
              {isListening ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full animate-pulse mr-2"></div>
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse mr-2" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-6 h-6 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              ) : (
                <Mic className="w-16 h-16 text-white" />
              )}
            </div>
          </div>

          {/* Status */}
          <div className="mt-8">
            <p className={`text-2xl font-bold transition-all duration-500 ${
              isListening ? 'text-blue-400' : 'text-gray-400'
            }`}>
              {status}
            </p>
          </div>

          {/* Transcript */}
          {transcript && (
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Memory Captured</span>
              </div>
              <p className="text-white text-lg">"{transcript}"</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Meeting</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Planning</span>
                <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Budget</span>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Real-time Processing", desc: "Instant transcription and understanding" },
              { title: "Smart Categorization", desc: "Auto-tags and organizes your memories" },
              { title: "Privacy First", desc: "All processing happens securely" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceListener;