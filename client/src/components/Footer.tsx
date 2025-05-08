import { Leaf } from "lucide-react";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold font-display">Green Pots</h2>
            </div>
            <p className="opacity-80 mb-6">Bringing nature's beauty to your doorstep with premium indoor plants that transform spaces and lives.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaPinterestP />
              </a>
              <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">Home</a></li>
              <li><a href="#products" className="opacity-80 hover:opacity-100 transition duration-300">Shop Plants</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">Plant Care Tips</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">Shipping Policy</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">Returns & Refunds</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">Plant Guarantee</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">FAQ</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition duration-300">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="opacity-80 mb-4">Subscribe to receive plant care tips, exclusive offers, and updates.</p>
            <form className="flex">
              <Input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
              <Button type="submit" className="bg-secondary hover:bg-secondary-light text-primary px-4 rounded-r-lg transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="opacity-80">&copy; {new Date().getFullYear()} Green Pots. All rights reserved. Designed with 🌱 for plant lovers.</p>
        </div>
      </div>
    </footer>
  );
}
