"use client";

import { CheckCircle2 } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

const solutionsPro = '/assets/solutions-pro.png';
const solutionsSupplies = '/assets/solutions-supplies.png';
const solutionsDetail = '/assets/solutions-detail.png';
const solutionsAction = '/assets/solutions-action.png';

export default function Solutions() {
  const brand = useBrand();
  
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[500px]">
            <img 
              src={solutionsPro} 
              alt={`Expert cleaning professional from ${brand.name}`} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -z-10 top-12 -right-12 w-full h-full bg-primary/5 rounded-3xl"></div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
            A spotless home for every family
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Our cleaning services are built around your needs. We use products that are safe for your home, offer times that work for you, and guarantee you'll love the results.
          </p>

          <ul className="space-y-6">
            {[
              'A perfect clean every single time',
              'Professional cleaners you can trust',
              'We handle the details for you',
              'Safe products for pets and kids'
            ].map((item, i) => (
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
            Zero stress,<br />just a clean home
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            "They've been cleaning our home for months, and they're always amazing. The team is thorough, polite, and leaves everything looking perfect. It's such a relief to have a team we can count on."
          </p>
          <p className="text-gray-600 leading-relaxed">
            We take pride in our work, and our customers notice the difference. From our attention to detail to our friendly service, we make sure you're happy every time we visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={solutionsSupplies} 
              alt="Professional eco-friendly cleaning supplies" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={solutionsDetail} 
              alt="Detailed house cleaning services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={solutionsAction} 
              alt="Residential cleaning in progress" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
