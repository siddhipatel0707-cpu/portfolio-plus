import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Clean Minimal",
    category: "Minimalist",
    color: "bg-gradient-to-br from-slate-50 to-slate-100",
    accent: "bg-slate-800",
  },
  {
    id: 2,
    name: "Ocean Breeze",
    category: "Modern",
    color: "bg-gradient-to-br from-cyan-50 to-blue-100",
    accent: "bg-template-teal",
  },
  {
    id: 3,
    name: "Sunset Glow",
    category: "Bold",
    color: "bg-gradient-to-br from-orange-50 to-rose-100",
    accent: "bg-template-coral",
  },
  {
    id: 4,
    name: "Royal Purple",
    category: "Creative",
    color: "bg-gradient-to-br from-violet-50 to-purple-100",
    accent: "bg-template-lavender",
  },
  {
    id: 5,
    name: "Forest Green",
    category: "Professional",
    color: "bg-gradient-to-br from-emerald-50 to-green-100",
    accent: "bg-template-emerald",
  },
  {
    id: 6,
    name: "Golden Hour",
    category: "Bold",
    color: "bg-gradient-to-br from-amber-50 to-yellow-100",
    accent: "bg-template-gold",
  },
];

const TemplateGallery = () => {
  return (
    <section id="templates" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Choose Your Style
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pick from our collection of professionally designed templates. 
            Each one is crafted to make your portfolio stand out.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Template Preview */}
              <div className={`h-48 ${template.color} p-4 relative`}>
                {/* Mock Portfolio Layout */}
                <div className="absolute inset-4 bg-white/90 rounded-lg shadow-sm p-3">
                  <div className={`w-10 h-10 rounded-full ${template.accent} mb-2`} />
                  <div className="h-2 w-24 bg-slate-200 rounded mb-1" />
                  <div className="h-1.5 w-16 bg-slate-100 rounded mb-3" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-slate-50 rounded" />
                    <div className="h-8 bg-slate-50 rounded" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary-foreground font-medium">
                    Preview Template
                  </span>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {template.category}
                </span>
                <h3 className="font-display font-semibold mt-1">
                  {template.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              View All Templates
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;
