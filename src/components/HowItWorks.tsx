import React from "react";
import { Upload, Brain, Heart, Users, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const journeySteps = [
  {
    icon: Upload,
    title: "Begin Your Journey",
    description: "Upload photos, videos, documents, or even connect your social media. Our platform accepts everything that holds your memories.",
    details: ["Drag & drop interface", "Bulk upload support", "Social media sync", "Cloud import"],
    color: "primary",
    number: 1
  },
  {
    icon: Brain,
    title: "AI Understanding",
    description: "Our advanced AI analyzes your content, recognizing faces, places, emotions, and relationships to build your memory map.",
    details: ["Face recognition", "Location detection", "Emotion analysis", "Smart tagging"],
    color: "secondary",
    number: 2
  },
  {
    icon: Heart,
    title: "Story Creation",
    description: "Watch as your memories transform into beautiful narratives, timelines, and interactive experiences.",
    details: ["Auto-generated stories", "Timeline creation", "Memory connections", "Narrative flow"],
    color: "accent",
    number: 3
  },
  {
    icon: Users,
    title: "Share & Connect",
    description: "Invite family and friends to contribute their memories and perspectives, building a richer, shared legacy.",
    details: ["Family collaboration", "Private sharing", "Memory contributions", "Legacy building"],
    color: "primary",
    number: 4
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Your Memory Journey
            <br />
            <span className="gradient-text">Simplified</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From scattered photos to meaningful stories in four simple steps. 
            Let our AI guide you through the transformation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Desktop Timeline View */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-24 left-0 w-full h-1 bg-muted rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-1000"
                  style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
                ></div>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-4 gap-8">
                {journeySteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      activeStep === index ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Circle */}
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeStep >= index 
                        ? `bg-gradient-to-br from-${step.color} to-${step.color}/70 text-white shadow-lg shadow-${step.color}/25` 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {activeStep > index ? (
                        <CheckCircle className="w-8 h-8" />
                      ) : (
                        React.createElement(step.icon, { className: "w-8 h-8" })
                      )}
                    </div>

                    {/* Step Content */}
                    <div className={`text-center transition-all duration-500 ${
                      activeStep === index ? 'opacity-100' : 'opacity-70'
                    }`}>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                      
                      {/* Details (shown for active step) */}
                      {activeStep === index && (
                        <div className="bg-card border border-border rounded-xl p-4 mt-4 animate-fade-in-up">
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Accordion View */}
          <div className="lg:hidden space-y-4">
            {journeySteps.map((step, index) => (
              <div 
                key={index}
                className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeStep === index ? 'border-primary shadow-lg' : ''
                }`}
              >
                <div 
                  className="p-6 cursor-pointer flex items-center justify-between"
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep === index 
                        ? `bg-gradient-to-br from-${step.color} to-${step.color}/70 text-white` 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {React.createElement(step.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">Step {step.number}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${
                    activeStep === index ? 'rotate-90' : ''
                  }`} />
                </div>
                
                {activeStep === index && (
                  <div className="px-6 pb-6 animate-fade-in-up">
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
