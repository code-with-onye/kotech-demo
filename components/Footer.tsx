"use client";

import { Facebook, Instagram } from 'lucide-react';
import { useBrand } from '../context/BrandContext';
import Logo from './Logo';

export default function Footer() {
  const brand = useBrand();

  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <div className="mb-6">
            <Logo light={true} />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            We are committed to delivering top-quality cleaning services that leave.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <h4 className="font-bold text-lg mb-6">Navigation</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blogs</a></li>
            <li><a href="#cta" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sparkling clean every time</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Experience the power of clean</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Quality cleaning for quality living</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fresh spotless, and stress-free</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cleaning beyond expectations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Bringing shine to your space</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left text-gray-500 text-sm flex justify-between items-center">
        <p>© 2026 {brand.name} - All right reserved</p>
      </div>
    </footer>
  );
}
