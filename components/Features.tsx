"use client"
import { Clock, Droplets, UserCheck, CheckCircle } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

const iconMap: Record<string, any> = {
  Clock,
  Droplets,
  UserCheck,
  CheckCircle,
};

export default function Features() {
  const brand = useBrand();
  const { features } = brand;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 uppercase tracking-tighter">
          {features.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          {features.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {features.list.map((feature, index) => {
            const Icon = iconMap[feature.icon] || CheckCircle;
            return (
              <div key={index} className="p-8 rounded-4xl border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <div className="text-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
