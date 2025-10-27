import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="relative glass-card rounded-3xl p-12 md:p-16 overflow-hidden animate-glow">
          {/* Background Gradient */}
          <div className="absolute inset-0 gradient-primary opacity-10" />
          
          {/* Animated Orbs */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Start Your Journey Today</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your
              <br />
              <span className="text-gradient">Financial Future?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of investors who trust FinTwin to manage their wealth smarter.
              No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="gradient-primary text-primary-foreground font-semibold px-8 group">
                Create Free Account
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold px-8">
                Schedule Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Free forever • No credit card needed • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
