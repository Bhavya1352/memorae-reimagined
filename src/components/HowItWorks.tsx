import { Upload, Sparkles, Share2 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Memories",
    description: "Simply upload your photos, videos, and documents. We support all major formats and even old physical media through our scanning service.",
    number: "01"
  },
  {
    icon: Sparkles,
    title: "AI Does the Magic",
    description: "Our advanced AI automatically organizes, enhances, and creates beautiful stories from your memories. No manual work required.",
    number: "02"
  },
  {
    icon: Share2,
    title: "Share & Preserve",
    description: "Share with loved ones, create albums, and ensure your memories are preserved for future generations with cloud backup.",
    number: "03"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Simple as <span className="gradient-text">1, 2, 3</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and let AI handle the rest
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="relative bg-card border border-border rounded-3xl p-8 hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
