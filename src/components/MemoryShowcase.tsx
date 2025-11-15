import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Zap, Image, Type } from "lucide-react";

const memorySteps = [
  {
    id: 1,
    title: "Upload Your Memories",
    description: "Drag and drop photos, videos, or documents",
    icon: Image,
    preview: "📸 Family_Vacation_2023.jpg",
    color: "primary"
  },
  {
    id: 2,
    title: "AI Analysis",
    description: "Our AI identifies faces, locations, and emotions",
    icon: Zap,
    preview: "🔍 Detected: 4 people, Beach location, Happy mood",
    color: "secondary"
  },
  {
    id: 3,
    title: "Story Generation",
    description: "Automatically creates narrative from your memories",
    icon: Type,
    preview: "📖 'A perfect summer day at Malibu Beach with the whole family...'",
    color: "accent"
  }
];

const MemoryShowcase = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % memorySteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-muted/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                See Your Memories
                <br />
                <span className="gradient-text">Come to Life</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Watch how our AI transforms scattered photos into meaningful stories, 
                connecting moments across time to reveal the beautiful narrative of your life.
              </p>
            </div>

            {/* Interactive Controls */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={handlePlayPause}
                variant="outline"
                size="lg"
                className="flex items-center space-x-2"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
              </Button>
              <Button
                onClick={handleReset}
                variant="ghost"
                size="lg"
                className="flex items-center space-x-2"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reset</span>
              </Button>
            </div>

            {/* Step Indicators */}
            <div className="space-y-4">
              {memorySteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                    currentStep === index
                      ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20'
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    currentStep === index
                      ? `bg-${step.color} text-white`
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold transition-colors ${
                      currentStep === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {currentStep === index && (
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Demo */}
          <div className="relative">
            <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
              <CardContent className="p-0">
                {/* Demo Screen */}
                <div className="bg-gradient-to-br from-background to-muted/20 p-8 min-h-[400px] flex items-center justify-center">
                  <div className="text-center space-y-6 max-w-sm">
                    {/* Current Step Icon */}
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-${memorySteps[currentStep].color} to-${memorySteps[currentStep].color}/70 flex items-center justify-center animate-pulse`}>
                      {React.createElement(memorySteps[currentStep].icon, { className: "w-10 h-10 text-white" })}
                    </div>

                    {/* Step Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{memorySteps[currentStep].title}</h3>
                      <p className="text-muted-foreground">{memorySteps[currentStep].description}</p>
                    </div>

                    {/* Preview */}
                    <div className="bg-muted/50 rounded-lg p-4 border-2 border-dashed border-border">
                      <p className="text-sm font-mono">{memorySteps[currentStep].preview}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r from-${memorySteps[currentStep].color} to-${memorySteps[currentStep].color}/70 transition-all duration-300`}
                        style={{ width: `${((currentStep + 1) / memorySteps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="bg-muted/30 px-6 py-4 flex items-center justify-between border-t">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Processing...</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Step {currentStep + 1} of {memorySteps.length}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryShowcase;