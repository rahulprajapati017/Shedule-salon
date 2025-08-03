import React from 'react'

import backgroundVideo from '../assets/hair-salon.mp4'; // Add your video file in /assets

function Hero() {
  return (
      <section className="relative w-full h-auto">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-10"></div>

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-24 text-white">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-5">
            <h2 className="text-3xl lg:text-4xl font-semibold">In Just 30 Seconds</h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              See 100s of Nearby<br />Salons and Deals
            </h1>
            <p className="text-lg text-gray-200">Find your perfect salon match, near you.</p>

            <button className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-all duration-300 font-medium">
              Book Now
            </button>

            {/* Slider Arrows */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-white">
              <button className="text-2xl hover:text-pink-400">&lt;</button>
              <button className="text-2xl hover:text-pink-400">&gt;</button>
            </div>
          </div>
            {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </div>

        </div>
      </section>
  )
}
export default Hero

