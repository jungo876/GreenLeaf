import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-4"
      } bg-opacity-95`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary-light" />
            <h1 className="text-2xl font-bold font-display text-primary">
              Green Leaf
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-primary hover:text-primary-light font-medium transition duration-300"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-primary hover:text-primary-light font-medium transition duration-300"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-primary hover:text-primary-light font-medium transition duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary-light text-white rounded-full transition duration-300 flex items-center">
              <a href="#products">Shop Now</a>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-primary"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-4 px-4 space-y-3">
            <a
              href="#home"
              className="block text-primary hover:text-primary-light font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block text-primary hover:text-primary-light font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#contact"
              className="block text-primary hover:text-primary-light font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="w-full bg-primary hover:bg-primary-light text-white rounded-full mt-2"
            >
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
