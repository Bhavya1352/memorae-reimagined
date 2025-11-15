import { Mic, Brain, Search } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Mic,
      title: "Speak Naturally",
      description: "Just talk to Memorae like you would to a friend. Voice notes, conversations, ideas - everything gets captured.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Processes",
      description: "Our AI understands context, extracts key information, and organizes everything automatically.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Instant Recall",
      description: "Search your memories with natural language. Find anything you've ever told Memorae in seconds.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to never forget anything again
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                      <span className="text-sm font-bold text-gray-700">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;