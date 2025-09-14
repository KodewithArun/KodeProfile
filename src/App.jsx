import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Header from './assets/Components/Header';
import HeroSection from './assets/Components/HeroSection';
import Service from './assets/Components/Service';
import Achievement from './assets/Components/Achivement';
import Project from './assets/Components/Project';
import Testimonial from './assets/Components/Testimonial';

import ContactSection from './assets/Components/ContactSection';





function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <Service />
      <Achievement />
      <Project />
      <Testimonial />
      <ContactSection />
      <footer className=" text-white py-6 border-t border-gray-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Arun Pandey Laudari</span>. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="#about" className="text-gray-400 hover:text-white transition duration-200">Aboutme</a>
            <a href="#service" className="text-gray-400 hover:text-white transition duration-200">Services</a>
            <a href="#achivement" className="text-gray-400 hover:text-white transition duration-200">Achivements</a>
            <a href="#project" className="text-gray-400 hover:text-white transition duration-200">Projects</a>
          </div>
        </div>
      </footer>

    </div>
  );


}

export default App
