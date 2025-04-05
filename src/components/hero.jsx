import React from "react";
import { ShoppingBag } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Discover Your Perfect Style
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Shop the latest trends in fashion with unbeatable prices and quality.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <ShoppingBag size={20} />
              <span>Shop Now</span>
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470"
              alt="Hero"
              className="rounded-lg shadow-xl w-full object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;