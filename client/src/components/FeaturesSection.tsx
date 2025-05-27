import { motion } from "framer-motion";
import { Leaf, Truck, BookOpen } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Premium Quality",
      description: "Each plant is carefully selected and nurtured to ensure health and vitality before reaching your home."
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Safe Delivery",
      description: "Our specialized packaging ensures your plants arrive in perfect condition, no matter the distance."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Expert Care Guides",
      description: "Every plant comes with a detailed care guide to help you keep your new green friend thriving."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Why Choose Green Leaf?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're passionate about plants and committed to helping you create your own indoor oasis.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-neutral-cream rounded-xl p-8 text-center transition-all duration-500 transform hover:shadow-xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="inline-block bg-secondary-lighter p-4 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-display text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
