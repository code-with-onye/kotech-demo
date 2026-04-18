"use client"
import { ArrowRight, Play, CheckCircle, Shield, Clock } from 'lucide-react';
import { useBrand } from '../context/BrandContext';

const iconMap: Record<string, any> = {
  CheckCircle,
  Shield,
  Clock,
};

export default function Hero() {
  const brand = useBrand();
  const { hero } = brand;

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image/Video with Overlay */}
      <div className="absolute inset-0 z-0">
        {hero.video ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <img 
            src={hero.image} 
            alt={brand.name}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full mt-12">
        <div className="text-white py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 md:mb-8 drop-shadow-sm">
            {hero.title.split(',')[0]},<br />
            <span className="text-white/80 shrink-0">{hero.title.split(',')[1]}</span>
          </h1>
          
          <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-xl leading-relaxed">
            {hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-start">
            <button className="w-fit bg-white text-primary px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-xl">
              {hero.ctaText}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-fit glass-panel text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all shadow-lg border border-white/30">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Watch Process
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {hero.trustMarks.map((item, index) => {
              const Icon = iconMap[item.icon] || CheckCircle;
              return (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating cards for visual depth */}
        <div className="hidden lg:block relative h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
            <div className="glass-panel p-8 rounded-3xl shadow-2xl relative z-20 animate-bounce-slow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Quality Guaranteed</h3>
                  <p className="text-white/70 text-sm">We don't stop until it's perfect.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
