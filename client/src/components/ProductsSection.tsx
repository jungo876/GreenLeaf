import { motion } from "framer-motion";
import { Sun, Droplets, Plus } from "lucide-react";

// Product data
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: "$45",
    image: "https://pixabay.com/get/gfd322b573b58d6e032f112247324e9f8fe54f756693722f3e2541444049fdcc5f4e01081fa19baa6342157482b1b66c074d36a852c76fffd4c064ba7f95a29d7_1280.jpg",
    light: "Medium Light",
    water: "Weekly Water",
    description: "The Swiss Cheese Plant features iconic split leaves and is perfect for making a statement in any room."
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: "$65",
    image: "https://pixabay.com/get/gb2ff0e15daffc3f6338e0c394a3a2599e02f22d987e007bc8c0efbaea9e502822444bc623f3aa469097a01734dcfddebbf3b92c1ffdf33cb2e8b64013febecc6_1280.jpg",
    light: "Bright Light",
    water: "Moderate Water",
    description: "With its large, violin-shaped leaves, this stunning plant creates an elegant focal point in any space."
  },
  {
    id: 3,
    name: "Snake Plant",
    price: "$35",
    image: "https://images.unsplash.com/photo-1620127682229-33388276e540?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    light: "Low Light",
    water: "Minimal Water",
    description: "The Snake Plant is virtually indestructible and perfect for beginners or those with a busy lifestyle."
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: "$40",
    image: "https://pixabay.com/get/gbbedfe54b23004044a66dc30c98307e3624d7d6ba7aae4960fbaaf7da68edbc7cfd277a5e90da7452282b33f1e1238ef46299197a6a4af700352c0fcaa0ae1be_1280.jpg",
    light: "Low Light",
    water: "Minimal Water",
    description: "With its glossy leaves and forgiving nature, the ZZ Plant thrives in almost any indoor environment."
  },
  {
    id: 5,
    name: "Golden Pothos",
    price: "$30",
    image: "https://pixabay.com/get/g5864dde460f6f510c42c75c865d935c4b1cd56c3ca5fac3bd2456c4c4b13f4a0a47ca58bda40d87ea176cc8bc258ef0b74ebaa2b9824e2c629c0b866ae90f346_1280.jpg",
    light: "Medium Light",
    water: "Weekly Water",
    description: "This cascading vine with heart-shaped leaves is perfect for shelves, hanging baskets, or as a trailing plant."
  },
  {
    id: 6,
    name: "Peace Lily",
    price: "$38",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    light: "Low-Medium Light",
    water: "Weekly Water",
    description: "The Peace Lily purifies air and produces elegant white flowers, making it both beautiful and functional."
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="products-bg py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16 reveal-element opacity-0 translate-y-4 transition-all duration-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Our Premium Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our carefully curated selection of indoor plants, each chosen for their beauty, air-purifying qualities, and ease of care.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-6 transition-transform duration-500 hover:translate-y-[-8px]">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold font-display text-primary">{product.name}</h3>
                  <span className="bg-secondary-lighter text-primary-light px-3 py-1 rounded-full text-sm font-medium">{product.price}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Sun className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-600">{product.light}</span>
                  </div>
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="text-sm text-gray-600">{product.water}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm">{product.description}</p>
                <button className="w-full bg-primary hover:bg-primary-light text-white py-2 rounded-lg transition duration-300 flex items-center justify-center">
                  <Plus className="h-4 w-4 mr-2" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a href="#" className="inline-block bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition duration-300 font-medium shadow-md hover:shadow-lg">
            View All Plants
          </a>
        </motion.div>
      </div>
    </section>
  );
}
