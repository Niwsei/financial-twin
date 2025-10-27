import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Smart Portfolio Analytics",
    description: "Track all your investments in one place with advanced analytics, performance metrics, and risk assessment tools.",
    image: "/placeholder.svg",
    gradient: "from-primary/20 to-transparent"
  },
  {
    title: "Real-Time Market Data",
    description: "Stay ahead with live market updates, price alerts, and instant notifications on your portfolio performance.",
    image: "/placeholder.svg",
    gradient: "from-accent/20 to-transparent"
  },
  {
    title: "AI-Powered Insights",
    description: "Leverage artificial intelligence to get personalized investment recommendations and market trend predictions.",
    image: "/placeholder.svg",
    gradient: "from-primary/20 to-transparent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Manage Wealth</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed for modern investors and traders
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Feature Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden aspect-square">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} z-10`} />
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Feature Content */}
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>

              <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
