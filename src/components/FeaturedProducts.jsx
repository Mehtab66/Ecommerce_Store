import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const dummyProducts = [
  {
    id: 1,
    name: "Premium Sneakers",
    price: 89.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 129.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1470",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275339254-cc25772eb02f?q=80&w=1470",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: 59.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <div className="flex items-center mt-1">
                  <Star size={16} className="text-yellow-400" />
                  <span className="ml-1 text-gray-600">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;