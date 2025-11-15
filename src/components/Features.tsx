import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Wand2, Share2, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Organization",
    description: "Automatically categorize, tag, and organize your memories with advanced AI that understands context and emotions.",
    gradient: "from-primary to-primary-light"
  },
  {
    icon: Wand2,
    title: "Smart Enhancement",
    description: "Restore old photos, enhance quality, and colorize black-and-white images with cutting-edge AI technology.",
    gradient: "from-secondary to-secondary-light"
  },
  {
    icon: Shield,
    title: "Military-Grade Security",
    description: "Your memories are encrypted and protected with bank-level security. Privacy is our top priority.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Heart,
    title: "Story Generation",
    description: "AI crafts beautiful narratives from your photos, creating meaningful stories that bring memories to life.",
    gradient: "from-primary-light to-secondary"
  },
  {
    icon: Share2,
    title: "Family Sharing",
    description: "Securely share memories with family members and collaborate on building your collective digital legacy.",
    gradient: "from-secondary-light to-accent"
  },
  {
    icon: Clock,
    title: "Timeline View",
    description: "Navigate through time with an intuitive timeline that maps your life's journey and milestones.",
    gradient: "from-accent to-primary-light"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Features That <span className="gradient-text">Matter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI technology meets intuitive design to preserve your most precious moments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 hover:border-primary/50 transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
