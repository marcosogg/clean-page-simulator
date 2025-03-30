
import { Check, Zap, Shield, BarChart } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description:
      "Optimized for speed and performance, ensuring your users have the best experience possible.",
    icon: Zap,
  },
  {
    name: "Highly Secure",
    description:
      "Enterprise-grade security to protect your data and your users' information.",
    icon: Shield,
  },
  {
    name: "Analytics Built-in",
    description:
      "Comprehensive analytics to help you understand how users interact with your product.",
    icon: BarChart,
  },
  {
    name: "100% Reliable",
    description:
      "Built on a stable foundation that you can depend on, with 99.9% uptime guaranteed.",
    icon: Check,
  },
];

const Features = () => {
  return (
    <div id="features" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Everything you need to build amazing products, all in one place.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">{feature.name}</h3>
                <p className="mt-2 flex-grow text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
