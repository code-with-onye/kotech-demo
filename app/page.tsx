import Link from 'next/link';
import { BRANDS } from '../config/brands';
import { Sparkles, ArrowRight, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50"></div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in shadow-2xl backdrop-blur-xl">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary-light">
              Multi-Brand Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
            Cleaning Service
            <br />
            <span className="bg-linear-to-r from-primary via-primary-light to-white bg-clip-text text-transparent">
              Demo Registry
            </span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Explore our high-performance cleaning service templates. Managed via
            a single codebase, deployed as independent brand experiences.
          </p>

          {/* Brand Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(BRANDS).map(([slug, detail]) => (
              <Link
                key={slug}
                href={`/cleaning/${slug}`}
                className="group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="w-24 h-24 text-primary" />
                </div>

                <div className="relative z-10 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-110 group-hover:scale-125">
                    <Zap className="w-6 h-6" />
                  </div>

                  <h3 className="text-3xl font-black mb-3 group-hover:text-primary transition-colors">
                    {detail.name}
                  </h3>
                  <p className="text-gray-400 text-lg mb-8 group-hover:text-gray-300 transition-colors">
                    {detail.tagline}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                    Launch Demo
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1.5 bg-primary transition-all duration-500 w-0 group-hover:w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm font-medium">
          <p>© 2026 Kotech Demo Platform. Built for scalability.</p>
        </div>
      </footer>
    </div>
  );
}
