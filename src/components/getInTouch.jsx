import React from 'react';
import salonImage from '../assets/salon.jpg'; // Replace with your actual image path

const GetInTouch = () => {
  return (
    <section className="w-full bg-white flex flex-col md:flex-row items-center justify-center py-10 px-4 md:px-20">

      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-gray-800 text-3xl font-light">Any doubt?</h2>
        <h1 className="text-gray-900 text-4xl font-bold mb-6">GET IN TOUCH</h1>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="NAME"
            className="border-b border-gray-400 focus:outline-none py-2"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="border-b border-gray-400 focus:outline-none py-2"
          />
          <textarea
            placeholder="WRITE YOUR MESSAGE"
            className="border-b border-gray-400 focus:outline-none py-2"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="border border-black px-5 py-2 mt-4 w-fit hover:bg-black hover:text-white transition-all flex items-center gap-2"
          >
            Send message
            <span>↗</span>
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10 flex justify-center">
        <img
          src={salonImage}
          alt="Salon"
          className="w-3/4 h-[300px] object-cover rounded shadow-lg"
        />
      </div>

    </section>
  );
};

export default GetInTouch;
