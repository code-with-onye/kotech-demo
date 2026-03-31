"use client";

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const disinfectionImg = '/assets/service-disinfection.png';
const officeImg = '/assets/service-office.png';
const floorImg = '/assets/service-floor.png';

const servicesData = [
  { 
    id: 'home',
    title: 'House cleaning', 
    description: 'We clean your home from top to bottom, making sure every room is spotless and comfortable.',
    features: [
      'Deep cleaning for every room.',
      'Removing dust and dirt.',
      'A fresh-smelling home.',
      'Careful handling of your things.'
    ],
    image: '/house-cleaning.jpg'
  },
  { 
    id: 'disinfection',
    title: 'Safe sanitizing', 
    description: 'We use safe sprays to kill germs and keep your family healthy and protected.',
    features: [
      'Kills 99.9% of germs.',
      'Safe for kids and pets.',
      'Full-room sanitizing.',
      'Peace of mind for you.'
    ],
    image: disinfectionImg
  },
  { 
    id: 'office',
    title: 'Office cleaning', 
    description: 'A clean office helps your team work better. We keep your workspace tidy and organized.',
    features: [
      'Cleaning after work hours.',
      'Tidying desks and tech.',
      'Cleaning shared areas.',
      'Professional standards.'
    ],
    image: '/office-cleaning.jpg'
  },
  { 
    id: 'floor',
    title: 'Floor shining', 
    description: 'We make your wood, tile, or marble floors look brand new with our shining service.',
    features: [
      'Works on all floor types.',
      'Makes floors look new.',
      'Protects your flooring.',
      'Deep cleaning included.'
    ],
    image: floorImg
  },
  { 
    id: 'dust',
    title: 'Deep dusting', 
    description: 'We reach the high spots and hidden corners where dust usually hides.',
    features: [
      'Reaching high surfaces.',
      'Using strong vacuums.',
      'Handling fragile items.',
      'Better air for your home.'
    ],
    image: '/assets/service-dust.png'
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('home');
  const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

  return (
    <section className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-black max-w-xl leading-tight text-gray-900">
            Effortless cleaning for<br />your home or office
          </h2>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mt-6 md:mt-0 group">
            Explore All Services
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                onClick={() => setActiveId(service.id)}
                className={`p-6 rounded-3xl flex items-center justify-between cursor-pointer transition-all duration-300 transform ${
                  activeId === service.id 
                    ? 'bg-primary text-white shadow-2xl md:translate-x-4 scale-105' 
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-100 hover:translate-x-2'
                }`}
              >
                <span className="font-bold text-lg">{service.title}</span>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  activeId === service.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Background flourish */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full z-0"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center min-h-[450px]">
              <div className="w-full md:w-1/2 h-[400px] rounded-3xl overflow-hidden shadow-lg transform transition-all duration-700 hover:scale-[1.03]">
                <img 
                  src={activeService.image} 
                  key={activeService.id}
                  alt={activeService.title} 
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              <div className="w-full md:w-1/2 animate-fade-in" key={activeService.id + '-content'}>
                <h3 className="text-4xl font-black mb-6 text-gray-900">{activeService.title}</h3>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  {activeService.description}
                </p>
                <ul className="grid gap-4">
                  {activeService.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
