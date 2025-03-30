
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  // Generate avatar initials from user's full name or email
  const getInitials = () => {
    if (!user) return "";
    
    const fullName = user.user_metadata?.full_name;
    if (fullName) {
      return fullName
        .split(" ")
        .map((name: string) => name[0])
        .join("")
        .toUpperCase()
        .substring(0, 2);
    }
    
    return user.email?.substring(0, 2).toUpperCase() || "";
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-bold">Brand</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex">
          <Link to="/" className="text-foreground/80 hover:text-foreground">
            Home
          </Link>
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

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Avatar>
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback>{getInitials()}</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          )}
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
            <Link 
              to="/"
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact"
              className="block rounded-md py-2 text-base font-medium text-foreground/80 hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={user.user_metadata?.avatar_url} />
                      <AvatarFallback>{getInitials()}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{user.user_metadata?.full_name || user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={signOut}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full" variant="default" size="sm">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
