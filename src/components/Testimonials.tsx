import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, Camera, Users } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Family Archivist",
    content: "Memorae helped me discover connections between photos I never knew existed. My grandmother's wedding dress appeared in three different generations of family photos!",
    rating: 5,
    avatar: "MR",
    icon: Heart,
    color: "primary",
    memories: "2,847 memories organized"
  },
  {
    name: "David Kim",
    role: "Travel Photographer",
    content: "The AI enhancement brought my father's 1960s travel photos back to life. Colors so vivid, it's like stepping back in time. Absolutely incredible technology.",
    rating: 5,
    avatar: "DK",
    icon: Camera,
    color: "secondary",
    memories: "15,000+ photos enhanced"
  },
  {
    name: "Jennifer Thompson",
    role: "Mother of Three",
    content: "Our family story now spans four generations in one beautiful timeline. My kids love exploring their heritage, and grandparents feel truly connected.",
    rating: 5,
    avatar: "JT",
    icon: Users,
    color: "accent",
    memories: "4 generations connected"
  }
];

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/10 via-background to-muted/5"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-muted/50 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Real Stories, Real Impact</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Stories That
            <br />
            <span className="gradient-text">Touch Hearts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every memory preserved is a story saved. Here's how Memorae has transformed 
            the way families connect with their past and future.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const isHovered = hoveredCard === index;
            return (
              <Card 
                key={index}
                className={`group cursor-pointer transition-all duration-500 border-2 overflow-hidden ${
                  isHovered 
                    ? `border-${testimonial.color} shadow-2xl shadow-${testimonial.color}/20 scale-105` 
                    : 'border-border/50 hover:border-border'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0">
                  {/* Header with Icon */}
                  <div className={`p-6 bg-gradient-to-br from-${testimonial.color}/10 to-transparent relative overflow-hidden`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-${testimonial.color} to-${testimonial.color}/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {React.createElement(testimonial.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 fill-${testimonial.color} text-${testimonial.color}`} />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {testimonial.memories}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                    <p className="text-foreground/90 mb-6 leading-relaxed text-lg italic group-hover:text-foreground transition-colors">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${testimonial.color} to-${testimonial.color}/70 flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${testimonial.color} to-${testimonial.color}/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2.5M+</div>
              <div className="text-sm text-muted-foreground">Memories Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
