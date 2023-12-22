import React from 'react';
import { Icons } from './Icons';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">We grow and become stronger</h3>
            <div className="flex items-center justify-center w-48 h-48 bg-blue-500 text-white rounded-full mb-4">
             <Icons.dumbbell/>
            </div>
            <p className="text-gray-700">The sister companies in the Addtech Group, Pulsteknik AB and Emcomp International AB, are merging, giving our common customers and partners a stronger future together. </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Standard range for quick delivery</h3>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-gray-700">For best availability and cost we have created a standard range of our most popular DC circuit breakers. From 1A up to 400A. Versions for both panel mounting as well as traditional DIN rail. They are of course based on the Hy-Mag principle and therefore not sensitive to the ambient temperature. See our datasheet here.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4">The HYMAG-technique is key  </h3>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;