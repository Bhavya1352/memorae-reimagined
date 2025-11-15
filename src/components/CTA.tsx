import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-full animate-gradient opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-3xl p-12 md:p-16 border border-border/50">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Start Preserving Your
              <br />
              <span className="gradient-text">Memories Today</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of families who trust Memorae to safeguard their most precious moments. Get started for free, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground group px-8 py-6 text-lg"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:border-primary px-8 py-6 text-lg"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✓ Free 30-day trial  ✓ No credit card required  ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
