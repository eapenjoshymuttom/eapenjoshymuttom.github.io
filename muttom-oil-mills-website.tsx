import React from 'react';
import { Factory, Droplet, Award, ChevronDown, Heart, Users, Leaf } from 'lucide-react';

export default function MuttomOilMills() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-800">Muttom Oil Mills</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#about" className="text-gray-600 hover:text-green-800">About</a></li>
                <li><a href="#products" className="text-gray-600 hover:text-green-800">Products</a></li>
                <li><a href="#tradition" className="text-gray-600 hover:text-green-800">Our Tradition</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-green-800">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-800 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Pure Tradition in Every Drop</h2>
              <p className="text-xl mb-8">From our family to yours - 100% natural coconut oil</p>
              <div className="flex space-x-4">
                <button className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-100">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-800">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/800" 
                alt="Young child holding Muttom coconut oil bottle surrounded by coconuts" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Family Tradition</h3>
              <p className="text-gray-600">Passing down quality through generations</p>
            </div>
            <div className="text-center">
              <Leaf className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-gray-600">Pure coconut oil with no additives</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-800 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">Supporting local farmers and families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tradition Section */}
      <section className="bg-white py-16" id="tradition">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Heritage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Legacy of Quality</h3>
              <p className="text-gray-600 mb-4">
                For generations, Muttom Oil Mills has been committed to producing the finest coconut oil in Kerala. Our traditional methods, passed down through families, ensure that every bottle contains the pure essence of carefully selected coconuts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <ChevronDown className="w-5 h-5 text-green-800 mr-2" />
                  Hand-picked local coconuts
                </li>
                <li className="flex items-center">
                  <ChevronDown className="w-5 h-5 text-green-800 mr-2" />
                  Traditional cold-pressing technique
                </li>
                <li className="flex items-center">
                  <ChevronDown className="w-5 h-5 text-green-800 mr-2" />
                  Zero additives or preservatives
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/api/placeholder/300/400" alt="Traditional oil pressing" className="rounded-lg" />
              <img src="/api/placeholder/300/400" alt="Modern facility" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-gray-100 py-16" id="products">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="500ml bottle" className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">500ml Glass Bottle</h3>
                <p className="text-gray-600 mb-4">Perfect for small families</p>
                <button className="bg-green-800 text-white px-4 py-2 rounded-full w-full">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="1L bottle" className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">1L Glass Bottle</h3>
                <p className="text-gray-600 mb-4">Our most popular size</p>
                <button className="bg-green-800 text-white px-4 py-2 rounded-full w-full">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/api/placeholder/400/300" alt="5L can" className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">5L Economic Pack</h3>
                <p className="text-gray-600 mb-4">Best value for large families</p>
                <button className="bg-green-800 text-white px-4 py-2 rounded-full w-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li><strong>Address:</strong> Muttom, Kerala, India</li>
                  <li><strong>Phone:</strong> +91 XXX XXX XXXX</li>
                  <li><strong>Email:</strong> info@muttomoils.com</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2">
                  <li><strong>Monday-Saturday:</strong> 9:00 AM - 6:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Muttom Oil Mills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
