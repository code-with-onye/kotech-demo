"use client";

import { ArrowRight } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export default function CTA() {
  const brand = useBrand();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920" 
          alt="Cleaning background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h2 className="text-4xl md:text-6xl font-black mb-6 max-w-xl leading-tight uppercase tracking-tighter shadow-sm">
          A cleaner space is just a click away!
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-md leading-relaxed">
          Why waste your valuable time on cleaning when you can leave it to the professionals? Our expert team is ready.
        </p>
        <button className="bg-white text-primary px-8 py-4 rounded-3xl text-lg font-black flex items-center gap-3 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-2xl">
          Book an appointment
          <div className="w-8 h-8 bg-primary rounded-2xl flex items-center justify-center text-white">
            <ArrowRight className="w-5 h-5 font-black" />
          </div>
        </button>
      </div>
    </section>
  );
}
