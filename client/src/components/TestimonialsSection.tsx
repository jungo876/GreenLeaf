import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "\"My Monstera from Green Pots arrived in perfect condition and has been thriving ever since. The care instructions were incredibly helpful!\"",
    name: "Jessica Miller",
    role: "Plant Enthusiast",
    initials: "JM"
  },
  {
    id: 2,
    text: "\"Green Pots has transformed my apartment into a jungle paradise! The quality of their plants is unmatched, and their customer service is exceptional.\"",
    name: "Michael Rodriguez",
    role: "Home Designer",
    initials: "MR"
  },
  {
    id: 3,
    text: "\"As someone who previously killed every plant they owned, I'm amazed at how well my Green Pots purchases are doing. Their care guides are a lifesaver!\"",
    name: "Aisha Thompson",
    role: "First-Time Plant Owner",
    initials: "AT"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto opacity-90">Join thousands of happy plant parents who have transformed their spaces with Green Pots.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white border-opacity-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-secondary text-xl flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="italic mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-lighter rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
