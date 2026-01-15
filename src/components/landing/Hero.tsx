import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Create stunning portfolios in minutes</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Build Your Professional Portfolio{" "}
          <span className="gradient-text">Effortlessly</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Fill in your details, choose from 10+ beautiful templates, and download 
          a polished PDF portfolio ready to impress employers and clients.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Link to="/signup">
            <Button size="lg" className="gap-2 px-8">
              Create Your Portfolio
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="#templates">
            <Button size="lg" variant="outline" className="px-8">
              View Templates
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-muted-foreground mb-4">Trusted by professionals worldwide</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold">5,000+</div>
            <div className="h-8 w-px bg-border" />
            <div className="text-sm">Portfolios Created</div>
            <div className="h-8 w-px bg-border hidden sm:block" />
            <div className="text-2xl font-bold hidden sm:block">4.9★</div>
            <div className="text-sm hidden sm:block">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
