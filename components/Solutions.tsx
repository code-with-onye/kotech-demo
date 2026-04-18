"use client"
import { CheckCircle2 } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

export default function Solutions() {
  const brand = useBrand();
  const { solutions } = brand;
  
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[500px]">
            <img 
              src={solutions.section1.image} 
              alt={`Expert cleaning professional from ${brand.name}`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 top-12 -right-12 w-full h-full bg-primary/5 rounded-3xl"></div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
            {solutions.section1.title}
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            {solutions.section1.description}
          </p>

          <ul className="space-y-6">
            {solutions.section1.features.map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-800 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-gray-900">
            {solutions.section2.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {solutions.section2.description1}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {solutions.section2.description2}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={solutions.section2.imageMain} 
              alt="Professional eco-friendly cleaning supplies" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={solutions.section2.imageSub1} 
              alt="Detailed house cleaning services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={solutions.section2.imageSub2} 
              alt="Residential cleaning in progress" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
