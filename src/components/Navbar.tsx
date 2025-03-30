
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Brand</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          <a href="#" className="text-foreground/80 hover:text-foreground">
            Home
          </a>
          <a href="#features" className="text-foreground/80 hover:text-foreground">
            Features
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground">
            About
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground">
            Contact
          </a>
        </div>

        <div className="hidden md:block">
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-500 hover:text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a 
              href="#" 
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
            >
              Home
            </a>
            <a 
              href="#features" 
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
            >
              About
            </a>
            <a 
              href="#contact"
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
            >
              Contact
            </a>
            <div className="pt-2">
              <Button className="w-full" variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
