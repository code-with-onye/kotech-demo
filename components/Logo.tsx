"use client";

import { useBrand } from '../context/BrandContext';

export default function Logo({ light = false }: { light?: boolean }) {
  const brand = useBrand();
  
  return (
    <div className="flex items-center gap-3 group cursor-pointer" id="brand-logo">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
        light ? 'bg-white/10 group-hover:bg-white/20' : 'bg-primary/10 group-hover:bg-primary/20'
      }`}>
        <svg 
          viewBox="0 0 24 24" 
          className={`w-6 h-6 transition-transform duration-700 group-hover:rotate-360 ${
            light ? 'text-white' : 'text-primary'
          }`}
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-black tracking-tighter transition-colors ${light ? 'text-white' : 'text-gray-900'}`}>
          {brand.nameUpper}
        </span>
        <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${light ? 'text-white/50' : 'text-primary'}`}>
          {brand.subtext}
        </span>
      </div>
    </div>
  );
}
