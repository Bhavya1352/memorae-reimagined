const EmotionalStory = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Opening */}
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              You forget things.
              <br />
              <span className="text-gray-400">It's normal.</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Problem */}
          <div className="space-y-6 text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <p>
              Important conversations slip away. 
              <span className="text-red-400 font-semibold"> Brilliant ideas vanish</span>.
            </p>
            
            <p>
              Meeting decisions get lost. 
              <span className="text-orange-400"> Tasks are forgotten</span>.
            </p>
            
            <p className="text-gray-400 italic">
              Your brain wasn't designed to be a hard drive.
            </p>
          </div>

          {/* Transition */}
          <div className="py-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="text-3xl lg:text-4xl font-light text-gray-300">
              But what if...
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
            <h3 className="text-4xl lg:text-5xl font-black">
              Your memory
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}never failed?
              </span>
            </h3>
            
            <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed">
              Meet your <span className="text-white font-bold">second brain</span>.
              <br />
              It remembers <span className="text-green-400">everything</span> so you don't have to.
            </p>
          </div>

          {/* Impact */}
          <div className="grid md:grid-cols-3 gap-8 pt-16 animate-fade-in-up" style={{animationDelay: '2s'}}>
            {[
              {
                icon: "🧠",
                title: "Never Forget",
                desc: "Every conversation, idea, and decision is captured automatically"
              },
              {
                icon: "⚡",
                title: "Instant Recall",
                desc: "Find any memory in seconds with natural language search"
              },
              {
                icon: "🎯",
                title: "Stay Focused",
                desc: "Your brain is free to think, create, and innovate"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className="pt-16 animate-fade-in-up" style={{animationDelay: '2.5s'}}>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30">
              <p className="text-2xl lg:text-3xl font-light text-white leading-relaxed">
                This isn't just another app.
                <br />
                <span className="font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  This is the future of human memory.
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmotionalStory;