"use client";

import { Clock, Droplets, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: 'A Fresh Home',
    description: 'Walk into a house that looks and smells brand new. Our team cleans deeply to ensure every room is refreshing.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Save Your Time',
    description: 'Stop spending your weekends cleaning. We take care of everything so you can spend your time on what matters.',
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: 'Reliable Experts',
    description: 'Our trained professionals know exactly how to handle every part of your home, from the kitchen to the bedroom.',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 uppercase tracking-tighter">Cleaning made simple</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          We believe a clean home is a happy home. Our expert team takes care of the dirt and dust so you don't have to.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-4xl border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <div className="text-primary group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-black mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
