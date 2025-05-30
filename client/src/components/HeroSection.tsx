import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/use-mobile";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const isMobile = useIsMobile();

  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-20 bg-no-repeat bg-cover bg-center md:bg-none"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/tropical-green-leaves-background_53876-88891.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      {isMobile ? (
        // 👉 Mobile View
        <div className="relative z-20 container mx-auto px-4 py-16">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold z-20 font-display text-primary leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Bring{" "}
              <span className="text-primary-light font-playfair">
                Nature's Beauty
              </span>{" "}
              Home
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300 z-20 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Breathe Better. Live Greener.
            </motion.p>
            <motion.img
              src="https://t3.ftcdn.net/jpg/14/50/46/34/240_F_1450463488_QOyZrc6oftCnINsG7m9gMo5XL7t5qNHK.jpg"
              alt="Palm plant"
              className="mx-auto w-48 h-48 object-cover rounded-full shadow-2xl border-2 border-white sm:w-32 sm:h-32 md:w-40 md:h-40"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                scale: isLoaded ? 1 : 0.5,
                rotate: isLoaded ? 0 : -10,
              }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.div
              className="flex flex-col items-center space-y-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#products"
                className="bg-primary hover:bg-primary-light transition duration-300 text-white px-6 py-3 rounded-full shadow-md  hover:shadow-xl transform hover:-translate-y-1"
              >
                🌱Explore Collection
              </a>
              <a
                href="#contact"
                className="bg-white hover:bg-neutral-cream border border-primary text-primary px-6 py-3 rounded-full transition duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-5xl lg:text-6xl font-bold font-display text-primary leading-tight "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Bring{" "}
                  <span className="text-primary-light font-playfair">
                    Nature's Beauty
                  </span>{" "}
                  Home
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl text-gray-300 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Breathe Better. Live Greener.
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
                    🌱Explore Collection
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
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full">
                {/* Leaf animation elements with absolute positioning */}
                {/* Image 1: Top-Left - Monstera */}
                <motion.img
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
                  alt="Monstera plant"
                  className="absolute top-4 left-4 w-20 h-20 sm:top-8 sm:left-8 sm:w-28 sm:h-28 md:top-10 md:left-10 md:w-32 md:h-32 object-cover rounded-full shadow-xl z-20 hover:shadow-2xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.5,
                    rotate: isLoaded ? 0 : -10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -10,
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                    transition: { duration: 0.5 },
                  }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />

                {/* Image 2: Top-Right - Fiddle Leaf */}
                <motion.img
                  src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                  alt="Fiddle leaf fig"
                  className="absolute top-2 right-4 w-16 h-16 sm:top-5 sm:right-10 sm:w-24 sm:h-24 md:top-5 md:right-20 md:w-28 md:h-28 object-cover rounded-full shadow-xl z-10"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.5,
                    rotate: isLoaded ? 0 : -10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -10,
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                    transition: { duration: 0.5 },
                  }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />

                {/* Image 3: Bottom-Left - Snake Plant */}
                <motion.img
                  src="https://images.unsplash.com/photo-1572688484438-313a6e50c333?ixlib=rb-4.0.3&auto=format&fit=crop&w=450&h=450"
                  alt="Snake plant"
                  className="absolute bottom-10 left-2 w-28 h-28 sm:bottom-16 sm:left-4 sm:w-32 sm:h-32 md:bottom-20 md:left-0 md:w-36 md:h-36 object-cover rounded-full shadow-xl"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.5,
                    rotate: isLoaded ? 0 : -10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -10,
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                    transition: { duration: 0.5 },
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Image 4: Bottom-Right - Pothos */}
                <motion.img
                  src="https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500"
                  alt="Pothos plant"
                  className="absolute bottom-4 right-4 w-32 h-32 sm:bottom-10 sm:right-10 sm:w-36 sm:h-36 md:bottom-10 md:right-10 md:w-40 md:h-40 object-cover rounded-full shadow-xl z-20"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.5,
                    rotate: isLoaded ? 0 : -10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -10,
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                    transition: { duration: 0.5 },
                  }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                />

                {/* Image 5: Center Focal - Palm */}
                <motion.img
                  src="https://t3.ftcdn.net/jpg/14/50/46/34/240_F_1450463488_QOyZrc6oftCnINsG7m9gMo5XL7t5qNHK.jpg"
                  alt="Palm plant in elegant pot"
                  className=" absolute top-[25%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full shadow-2xl border-2 border-white z-30"
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.5,
                    rotate: isLoaded ? 0 : -10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -10,
                    boxShadow: "0px 12px 24px rgba(0,0,0,0.2)",
                    transition: { duration: 0.5 },
                  }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative background elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-24"
        style={{
          borderRadius: "100% 100% 0 0",
          background: "linear-gradient(to top, #f3f4f6, #fff)",
        }}
      ></div>
    </section>
  );
}
