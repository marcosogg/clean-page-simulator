
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Build beautiful</span>
            <span className="block text-primary">digital experiences</span>
          </h1>
          <p className="mt-6 max-w-lg text-xl text-muted-foreground">
            Create stunning websites, apps, and digital products with our modern platform that helps you bring your ideas to life.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/40 sm:h-80 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-xl font-medium text-primary-foreground">Beautiful UI Preview</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
