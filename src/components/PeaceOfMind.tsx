const PeaceOfMind = () => {
  return (
    <section className="py-20 bg-gray-100 text-gray-900 relative overflow-hidden">
      {/* Moving Memory Items */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '1.5s' }}>
          🧠
        </div>
        <div className="absolute top-32 right-20 text-5xl animate-bounce opacity-80" style={{ animationDelay: '0.5s', animationDuration: '1s' }}>
          💭
        </div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-pulse opacity-70" style={{ animationDelay: '1s', animationDuration: '1.2s' }}>
          📝
        </div>
        <div className="absolute top-1/2 right-10 text-5xl animate-float opacity-75" style={{ animationDelay: '0.3s', animationDuration: '1.8s' }}>
          ⏰
        </div>
        <div className="absolute bottom-32 right-1/3 text-6xl animate-bounce opacity-80" style={{ animationDelay: '0.8s', animationDuration: '1.3s' }}>
          💡
        </div>
        <div className="absolute top-20 left-1/3 text-4xl animate-pulse opacity-75" style={{ animationDelay: '1.5s', animationDuration: '1s' }}>
          📱
        </div>
        <div className="absolute top-60 left-20 text-5xl animate-float opacity-70" style={{ animationDelay: '1.2s', animationDuration: '1.6s' }}>
          🎯
        </div>
        <div className="absolute bottom-40 right-20 text-4xl animate-bounce opacity-75" style={{ animationDelay: '2s', animationDuration: '1.4s' }}>
          ✅
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 text-xl lg:text-2xl leading-relaxed font-light" style={{fontFamily: 'Georgia, serif'}}>
            <p className="text-gray-700">
              You've normalized living with your brain about to{" "}
              <span className="text-red-600 font-semibold">explode</span>. 
              And you don't even notice anymore.
            </p>
            
            <p className="text-gray-700">
              There's always something pending. Something you forget. Something you should be doing right now
              <span className="text-orange-600">...but you don't know what.</span>
            </p>
            
            <p className="text-gray-700">
              You jot down things so you won't forget them. 
              But you end up forgetting{" "}
              <span className="text-blue-600 font-semibold">why you wrote them</span>. 
              And you start again. Over and over.
            </p>
            
            <p className="text-gray-600 italic">
              As if organization were the goal, not the solution.
            </p>
            
            <div className="py-8">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-gray-700">
              Until you decide to let go. And someone appears who doesn't complicate you,{" "}
              <span className="text-green-600 font-semibold">they just stay</span>.
            </p>
            
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">
              And they give you back something you lost a long time ago:{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                peace of mind
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;