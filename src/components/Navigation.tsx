import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full gradient-full animate-gradient"></div>
            <span className="text-2xl font-display font-bold gradient-text">Memorae</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <Button variant="outline" className="border-border hover:border-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-up">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full border-border hover:border-primary">
                Sign In
              </Button>
              <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
