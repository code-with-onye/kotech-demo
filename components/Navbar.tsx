"use client";

import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 max-w-7xl mx-auto text-white">
      <div className="flex items-center justify-between">
        <Logo light={true} />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-white/80 transition-colors">About</a>
          <a href="#services" className="hover:text-white/80 transition-colors">Service</a>
          <a href="#blog" className="hover:text-white/80 transition-colors">Blog</a>
        </div>

        <div className="hidden md:flex">
          <a href="#cta" className="bg-white text-primary px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-white/90 transition-colors shadow-lg">
            Get Started Now
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
              <ArrowRight className="w-3 h-3" />
            </div>
          </a>
        </div>

        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center gap-6 text-2xl font-bold">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white/80 transition-colors">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-white/80 transition-colors">Service</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="hover:text-white/80 transition-colors">Blog</a>
        </div>
        <a href="#cta" onClick={() => setIsOpen(false)} className="bg-white text-primary px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 mt-4">
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
