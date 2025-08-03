

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Home2 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Milestones', 'Services', 'Media Coverage', 'Reviews', 'Careers'];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                <span className="text-blue-500">yes</span>
                <span className={isScrolled ? 'text-pink-500' : 'text-pink-400'}>madam</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-pink-400 ${
                      isScrolled ? 'text-gray-700 hover:text-pink-500' : 'text-white'
                    }`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Get App Button */}
            <div className="hidden md:block">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300">
                Get App
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md"
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors duration-300">
                Get App
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Bringing <span className="text-pink-400">Salon Expertise</span> to{' '}
            <span className="text-pink-400">Your Doorstep</span> While
            <br />
            Changing the Lives of Service Professionals
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Experience premium beauty services at home while empowering talented professionals 
            to build their careers on their own terms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Yes Madam
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Register as a Professional
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Yes Madam?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing the beauty industry by connecting skilled professionals 
              with customers who value quality and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Service</h3>
              <p className="text-gray-600">
                Our certified professionals bring salon-quality services directly to your doorstep 
                with all the necessary equipment and products.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Convenience</h3>
              <p className="text-gray-600">
                Book appointments at your preferred time and location. No more waiting in queues 
                or traveling to salons.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowerment</h3>
              <p className="text-gray-600">
                We empower beauty professionals by providing them with flexible work opportunities 
                and the tools to build their own businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative z-10 bg-gradient-to-r from-pink-500 to-blue-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white mb-10 opacity-90">
            Join thousands of satisfied customers who have made the switch to convenient, 
            professional beauty services at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download App Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home2;