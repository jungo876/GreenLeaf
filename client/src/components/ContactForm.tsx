import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
  // FormSubmit would be integrated here in a real application
  console.log("Form submitted:", data);

  // Prepare WhatsApp message
  const message = encodeURIComponent(`Hi, this is ${data.name}.\nSubject:${data.subject},\nMessage: ${data.message},\nEmail:${data.email}`);
  const phoneNumber = "918017194298"; // Use full international format without '+' sign
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open WhatsApp chat in a new tab
  window.open(whatsappURL, "_blank");

  toast({
    title: "Message sent!",
    description: "We'll get back to you as soon as possible.",
    variant: "default",
  });

  form.reset();
} catch (error) {
  toast({
    title: "Error sending message",
    description: "Please try again later.",
    variant: "destructive",
  });
}

  };

  return (
    <section id="contact" className="bg-neutral-cream py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-white">
              <h2 className="text-3xl font-bold font-display mb-6">Get In Touch</h2>
              <p className="mb-8 opacity-90">Have questions about our plants or need business inquiries? We'd love to hear from you!</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="opacity-80">Salt Lake, Sector-V, Bidhannagar, Kolkata, West Bengal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Number</h3>
                    <p className="opacity-80">918017194298</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Address</h3>
                    <p className="opacity-80">greenleafofficial.info@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="opacity-80">Monday - Sunday: 9am - 8pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold font-display text-primary mb-6">Send us a Message</h3>
              
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6"
                  action="https://formsubmit.co/arghyakanji239@gmail.com" 
                  method="POST"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Jane Doe" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="jane@example.com" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Order Inquiry" 
                            className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg transition duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative leaf elements */}
      <div className="absolute left-0 bottom-0 opacity-10 -z-10">
        <Leaf className="h-36 w-36 text-primary transform rotate-45" />
      </div>
      <div className="absolute right-0 top-20 opacity-10 -z-10">
        <Leaf className="h-36 w-36 text-primary transform -rotate-15" />
      </div>
    </section>
  );
}
