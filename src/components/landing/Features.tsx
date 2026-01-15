import { 
  FileText, 
  Palette, 
  Download, 
  Clock, 
  Shield, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Easy Form Builder",
    description: "Fill in your details step-by-step with our intuitive multi-section form. No design skills needed.",
  },
  {
    icon: Palette,
    title: "10+ Beautiful Templates",
    description: "Choose from minimalist, bold, professional, or modern designs to match your personal brand.",
  },
  {
    icon: Download,
    title: "Instant PDF Download",
    description: "Generate and download your portfolio as a professionally formatted PDF in seconds.",
  },
  {
    icon: Clock,
    title: "Save & Edit Anytime",
    description: "Your portfolio is saved to your account. Come back and update it whenever you need.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is encrypted and stored securely. We never share your information.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Create your portfolio from any device. Our platform works beautifully on phones and tablets.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our portfolio generator makes it simple to showcase your skills, 
            experience, and achievements in a stunning format.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
