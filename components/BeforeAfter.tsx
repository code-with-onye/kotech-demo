"use client"
import { ArrowLeftRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';

function ComparisonSlider({ before, after, labelBefore = "Before", labelAfter = "After" }: { before: string, after: string, labelBefore?: string, labelAfter?: string }) {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setPosition(percent);
  };

  const handleMouseDown = () => setIsResizing(true);
  const handleMouseUp = () => setIsResizing(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsResizing(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[300px] md:h-[500px] rounded-4xl md:rounded-[3rem] overflow-hidden cursor-ew-resize select-none shadow-2xl group"
      onMouseMove={(e) => isResizing && handleMove(e.clientX)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={(e) => isResizing && handleMove(e.touches[0].clientX)}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${before})` }}
      />

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${after})`,
          clipPath: `inset(0 0 0 ${position}%)`
        }}
      />

      {/* Labels */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
        {labelBefore}
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-primary/90 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
        {labelAfter}
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-none pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl transition-transform group-hover:scale-110">
          <ArrowLeftRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const brand = useBrand();
  const { beforeAfter } = brand;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            {beforeAfter.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {beforeAfter.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {beforeAfter.list.map((item, index) => (
            <ComparisonSlider
              key={index}
              before={item.before}
              after={item.after}
              labelBefore={item.labelBefore}
              labelAfter={item.labelAfter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
