import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Bring <span className="text-primary-light">Nature's</span> Beauty Home
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Premium indoor plants to transform your space into a lush green sanctuary. Handpicked for beauty and air-purifying benefits.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <a 
                  href="#products" 
                  className="bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Collection
                </a>
                <a 
                  href="#contact" 
                  className="bg-white hover:bg-neutral-cream text-primary border border-primary px-8 py-3 rounded-full transition duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] md:h-[500px] w-full">
              {/* Leaf animation elements with absolute positioning */}
              <motion.img 
                src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" 
                alt="Monstera plant" 
                className="absolute top-10 left-10 w-32 h-32 object-cover rounded-full shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0.5, 
                  rotate: isLoaded ? 0 : -10 
                }}
                transition={{ duration: 1.5, delay: 0.1 }}
              />
              
              <motion.img 
                src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
                alt="Fiddle leaf fig" 
                className="absolute top-5 right-20 w-28 h-28 object-cover rounded-full shadow-xl z-10"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0.5, 
                  rotate: isLoaded ? 0 : -10 
                }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              
              <motion.img 
                src="https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=450" 
                alt="Snake plant" 
                className="absolute bottom-20 left-0 w-36 h-36 object-cover rounded-full shadow-xl"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0.5, 
                  rotate: isLoaded ? 0 : -10 
                }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              <motion.img 
                src="https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" 
                alt="Pothos plant" 
                className="absolute bottom-10 right-10 w-40 h-40 object-cover rounded-full shadow-xl z-20"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0.5, 
                  rotate: isLoaded ? 0 : -10 
                }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              
              <motion.img 
                src="https://images.unsplash.com/photo-1598880689962-9375161e586c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=700" 
                alt="Palm plant in elegant pot" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white z-30"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0.5, 
                  rotate: isLoaded ? 0 : -10 
                }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ borderRadius: '100% 100% 0 0' }}></div>
    </section>
  );
}
