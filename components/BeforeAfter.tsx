"use client";

import { ArrowLeftRight } from 'lucide-react';
import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';

const before1 = '/assets/before-1.png';
const after1 = '/assets/after-1.png';
const before2 = '/assets/before-2.png';
const after2 = '/assets/after-2.png';

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
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Before and after
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Witness the transformative power of our professional cleaning
            services through these real-life results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ComparisonSlider
            before={
              "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/653045462_122103152445168332_4935061149532849493_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=cgifx_gH590Q7kNvwHU7oh3&_nc_oc=Admj6fQ4jmKYNydzF9UOQG_BbLXFdejmxArGC1XNif2jvglJw21RkvcZAgK7QzqwH9w&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=u8k3LXJrYAPvwSsvpPFnSg&_nc_ss=8&oh=00_Afz2rhehbqTAn5rl0wTzX_xCaPoSx69VSMzRuEP4obv3IA&oe=69C06495"
            }
            after={
              "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/653911218_122103152415168332_6809187678314115755_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=n0uinPitwb4Q7kNvwFfxr4H&_nc_oc=AdmMYJSR9_UIy6ao0jOdPeSGgLsg6B0AmLu_sHPhN2ZUjJUfXbmdhnA2u3FWt5aYEOE&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=8lstOyVWv8HPstWvn8PnQg&_nc_ss=8&oh=00_AfwQsnYatm_OoYQKnCccMqle6l5Nub9ZY2aKh8CMFci1gg&oe=69C04531"
            }
            labelBefore="Rough Bedroom"
            labelAfter="Sparkling Clean Bedroom"
          />
          <ComparisonSlider
            before={before2}
            after={after2}
            labelBefore="Stained Carpet"
            labelAfter="Deep Cleaned"
          />
        </div>
      </div>
    </section>
  );
}
