"use client";

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useBrand } from '../context/BrandContext';

const aboutItems = [
  {
    title: "Quality you can trust",
    content: "We provide high-quality cleaning that you can rely on every time. Our experienced team treats every home with total care."
  },
  {
    title: "Making your life easier",
    content: "Our mission is to help you relax. We offer flexible times and custom plans that work around your schedule."
  },
  {
    title: "Safe and healthy cleaning",
    content: "We use cleaning products that are safe for your family and pets. Your home will be fresh, clean, and worry-free."
  },
  {
    title: "Focus on the details",
    content: "We don't just clean the big things; we look for the small spots most people miss. We're not happy until everything sparkles."
  }
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const brand = useBrand();

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src="/pexels-liliana-drew-9462313.jpg" 
              alt={`${brand.name} professional team at work`} 
              className="w-full h-[350px] md:h-[600px] object-cover focus-visible:outline-none"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/5 rounded-full -z-10 animate-pulse"></div>
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
        </div>

        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-gray-900">
            A cleaner home for a happier life.
          </h2>
          <p className="text-gray-600 mb-10 text-base leading-relaxed">
            We are a team of friendly, professional cleaners who care about your home as much as you do. We focus on the details so you don't have to.
          </p>

          <div className="space-y-4">
            {aboutItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-white border-primary shadow-xl ring-1 ring-primary/20' 
                      : 'bg-gray-50/50 border-gray-100 hover:border-primary/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 font-black text-xl ${
                        isActive ? 'bg-primary text-white scale-110' : 'bg-white text-primary  group-hover:scale-105 border border-gray-100'
                      }`}>
                        {index + 1}
                      </div>
                      <h3 className={`text-xl font-bold transition-colors ${
                        isActive ? 'text-primary' : 'text-gray-900'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                      isActive ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'
                    }`} />
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-600 pl-16 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
