
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div id="contact" className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-3 text-xl text-primary-foreground/80">
              Join thousands of satisfied customers building with our platform.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" variant="secondary">
              Contact Sales
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
