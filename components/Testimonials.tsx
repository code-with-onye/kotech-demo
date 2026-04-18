"use client"
import { ArrowLeft, ArrowRight, Star, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';

export default function Testimonials() {
  const brand = useBrand();
  const { testimonials } = brand;
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.list.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.list.length) % testimonials.list.length);
  };

  const isMobile = windowWidth < 768;

  if (!testimonials.list || testimonials.list.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-[#f2f6f3]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading & Google Rating */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h2 className="text-5xl font-black mb-6 text-text-dark uppercase tracking-tighter">{testimonials.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {testimonials.description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21c.81-2.6.81-5.61 0-8.21"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="font-bold text-text-dark">Google Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-text-dark">{testimonials.googleRating}</span>
                <div className="flex gap-0.5 text-[#f4c150]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="bg-primary text-white px-8 py-3.5 rounded-full flex items-center gap-2 font-bold hover:bg-primary/90 transition-all group">
            See All
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Right Column: Carousel */}
        <div className="lg:col-span-8 relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-8"
            style={{ transform: `translateX(-${activeIndex * (isMobile ? 100 : 55)}%)` }}
          >
            {testimonials.list.map((t, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={t.id}
                  className={`min-w-full md:min-w-[500px] p-6 md:p-10 rounded-[2.5rem] transition-all duration-500 ${
                    isActive ? 'bg-primary text-white shadow-2xl scale-100' : 'bg-white text-gray-800 scale-95 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <h4 className="font-black text-xl">{t.name}</h4>
                      <p className={isActive ? 'text-white/70' : 'text-gray-500'}>{t.role}</p>
                    </div>
                  </div>
                  <p className={`text-lg leading-relaxed mb-10 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                    "{t.content}"
                  </p>
                  <div className="flex gap-1 text-[#f4c150]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-4 mt-12 pl-4">
            <button 
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-text-dark shadow-md hover:bg-primary hover:text-white transition-all active:scale-90"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-text-dark shadow-md hover:bg-primary hover:text-white transition-all active:scale-90"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
