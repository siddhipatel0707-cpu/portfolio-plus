import { UserPlus, FormInput, Layout, Download } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Account",
    description: "Sign up for free and access your personal dashboard to start building.",
  },
  {
    icon: FormInput,
    step: "02",
    title: "Fill Your Details",
    description: "Enter your education, experience, skills, projects, and upload work samples.",
  },
  {
    icon: Layout,
    step: "03",
    title: "Choose Template",
    description: "Browse our collection of 10+ stunning templates and pick your favorite.",
  },
  {
    icon: Download,
    step: "04",
    title: "Download PDF",
    description: "Preview your portfolio and download it as a professional PDF document.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create your professional portfolio in just four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-border" />
              )}

              <div className="relative z-10">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Step {step.step}
                </span>
                <h3 className="font-display font-semibold text-xl mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
