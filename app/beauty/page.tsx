"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BeautyPage() {
  const [activeCategory, setActiveCategory] = useState("Slow Ritual");
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const categories = [
    "Deep Cleanse",
    "Slow Ritual",
    "Oil Vision",
    "Balanced Body",
    "Foot Ease",
  ];

  return (
    <main className="beauty-body min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-4 md:py-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="flex items-center gap-2 z-[110]">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all logo-circle ${scrolled ? "" : "bg-white/20"}`}>
            <span className="text-white serif font-bold text-lg md:text-xl">C</span>
          </div>
          <span className={`serif font-bold tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs uppercase transition-colors logo-text ${scrolled || isMenuOpen ? "text-white md:text-beauty-primary" : "text-white"}`}>
            Chelsea Sloan <span className="hidden sm:inline">Studios</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="#treatment" className="nav-link">Treatment</Link>
          <Link href="#team" className="nav-link">Team</Link>
          <Link href="#about" className="nav-link">About Us</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </div>

        {/* Right Action Area */}
        <div className="flex items-center gap-6 z-[110]">
          <button className="hidden sm:block btn-book">
            BOOK NOW
          </button>
          
          {/* Hamburger Menu */}
          <div className={`hamburger md:hidden ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <Link href="#treatment" className="mobile-nav-link" onClick={toggleMenu}>Treatment</Link>
        <Link href="#team" className="mobile-nav-link" onClick={toggleMenu}>Team</Link>
        <Link href="#about" className="mobile-nav-link" onClick={toggleMenu}>About Us</Link>
        <Link href="#contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link>
        <button className="btn-book mt-4">BOOK NOW</button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/beauty/hero.png"
          alt="Serene back massage"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute bottom-12 md:bottom-20 left-6 md:left-12 right-6 max-w-4xl animate-fade-in">
          <h1 className="hero-title serif italic">
            Feel. Breathe. Release.
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 bg-[#f5f5f0]">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl serif">About Us</h2>
          <p className="text-muted text-lg max-w-md leading-relaxed">
            Aiming to create a sanctuary where souls are designed to bring out vitality, your space of stillness awaits. In a world that never stops, let your body and mind be in beauty.
          </p>
        </div>
        <div className="space-y-8 md:space-y-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl serif leading-tight">
            In a world that <span className="italic">never</span> stops, <span className="font-bold">𝐂𝐇𝐄𝐋𝐒𝐄𝐀 𝐒𝐋𝐎𝐀𝐍 𝐒𝐓𝐔𝐃𝐈𝐎𝐒</span> is your space of stillness.
          </h3>
          <button className="flex items-center gap-3 group">
            <span className="text-sm font-bold tracking-widest uppercase py-2 px-6 border border-black rounded-full transition-all group-hover:bg-black group-hover:text-white">Learn More</span>
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Treatment Section */}
      <section id="treatment" className="px-6 md:px-12 py-20 md:py-32 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="section-title serif">Our Treatment</h2>
            <p className="text-muted text-lg">
              Every detail is meticulously crafted to ensure your experience is nothing short of extraordinary. From ancient rituals to modern techniques, rediscover yourself here.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`category-tag ${activeCategory === cat ? "active" : ""}`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-[2rem] md:rounded-[3rem] overflow-hidden group">
            <Image
              src="/beauty/hot-stone.png"
              alt="Hot stone massage"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex gap-3">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
               </div>
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a2b2b] flex items-center justify-center text-white">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
               </div>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-4xl md:text-6xl lg:text-7xl serif italic leading-none">Hot Stone<br />Massage</h3>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-lg">
              Heated volcanic stones melt away tension from deep within the body, releasing a gentle warmth that permeates every muscle group. Feel the weight lift.
            </p>
            <button className="flex items-center gap-3 group">
              <span className="text-sm font-bold tracking-widest uppercase py-2 px-6 border border-black rounded-full group-hover:bg-black group-hover:text-white transition-all">Book Now</span>
              <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section className="px-6 md:px-12 py-20 md:py-32 bg-[#f5f5f0]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <h2 className="section-title serif m-0">Experiences</h2>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a2b2b] flex items-center justify-center text-white cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 md:h-[600px]">
          <div className="col-span-1 relative aspect-[4/5] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <Image src="/beauty/experience.png" alt="Spa scene" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
          </div>
          <div className="col-span-1 relative aspect-[4/5] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 md:translate-y-12">
            <Image src="/beauty/experience.png" alt="Essential oils" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
          </div>
          <div className="col-span-2 md:col-span-1 relative aspect-[16/9] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <Image src="/beauty/experience.png" alt="Relaxation" fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover" />
          </div>
          <div className="col-span-1 relative aspect-[4/5] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 md:translate-y-12">
            <Image src="/beauty/experience.png" alt="Wellness" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
          </div>
          <div className="col-span-1 relative aspect-[4/5] md:aspect-auto rounded-2xl md:rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <Image src="/beauty/experience.png" alt="Serenity" fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 md:px-12 py-20 md:py-32 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="section-title serif italic m-0">Hands that listen</h2>
            <p className="text-muted text-lg max-w-lg">
              Our team of dedicated professionals are here to guide you on your journey. Each therapist is trained in specialized techniques.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1a2b2b] flex items-center justify-center text-white cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { name: "Mei Tanaka", role: "Elite Massage Therapist" },
            { name: "Eliana Ruiz", role: "Certified Therapist" },
            { name: "Amaro Lewis", role: "Wellness Therapist" },
            { name: "Niko Sorensen", role: "Bodywork Specialist" },
          ].map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/beauty/team.png"
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h4 className="font-bold text-xl">{member.name}</h4>
              <p className="text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-20 md:py-32 bg-[#102a2a] relative overflow-hidden text-center rounded-t-[2rem] md:rounded-t-[4rem]">
        <div className="absolute inset-0 opacity-10 bg-[url('/beauty/hero.png')] bg-cover bg-center" />
        <div className="relative z-10 max-w-6xl mx-auto space-y-12 md:space-y-20">
          <h2 className="text-4xl md:text-6xl lg:text-8xl serif italic text-white leading-tight">Write to us, call us, or stop by.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
            <div className="opening-hours space-y-6">
              <h4 className="text-2xl serif">Opening Hours</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-black/10 pb-2"><span>Monday</span> <span>10:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>Tuesday</span> <span>10:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>Wednesday</span> <span>10:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>Thursday</span> <span>11:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>Friday</span> <span>10:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-black/10 pb-2"><span>Saturday</span> <span>11:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>12:00 PM - 4:30 PM</span></li>
              </ul>
            </div>

            <div className="contact-card flex flex-col justify-center items-center text-center space-y-4 md:space-y-8">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/20 flex items-center justify-center">
                 <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h4 className="text-2xl serif">Step Into Calm</h4>
               <p className="text-muted">A serenity experience awaits you at every level. Let us bring you to a place of inner peace.</p>
            </div>

            <div className="gold-card space-y-6 flex flex-col justify-between">
              <h4 className="text-2xl serif">CHELSEA SLOAN is waiting for you</h4>
              <div className="space-y-4">
                <p className="font-medium text-sm md:text-base">1029 South Olive Street. Los Angeles, CA</p>
                <p className="font-medium text-sm md:text-base">+1 (231) 345-2007</p>
                <p className="font-medium text-sm md:text-base underline">chelsea@sloan-studios.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-glass px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="space-y-8 md:space-y-12">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                   <span className="text-white serif font-bold text-lg md:text-xl">C</span>
                </div>
                <span className="serif font-bold text-base md:text-lg uppercase tracking-widest text-white">𝐂𝐇𝐄𝐋𝐒𝐄𝐀 𝐒𝐋𝐎𝐀𝐍 𝐒𝐓𝐔𝐃𝐈𝐎𝐒</span>
             </div>
             <h2 className="text-4xl md:text-6xl lg:text-8xl serif italic leading-tight text-white/90">Feel. Breathe. Release.</h2>
             <button className="flex items-center gap-3 group mt-8 md:mt-12">
                <span className="text-sm font-bold tracking-widest uppercase py-3 px-8 border border-white rounded-full text-white group-hover:bg-white group-hover:text-black transition-all">Book Now</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-12 md:text-right">
             <div className="space-y-4 md:space-y-6">
                <h5 className="uppercase tracking-widest text-xs font-bold opacity-50">Navigation</h5>
                <ul className="space-y-3 md:space-y-4 serif text-lg md:text-xl italic">
                   <li><Link href="#treatment" className="hover:opacity-70">Treatment</Link></li>
                   <li><Link href="#team" className="hover:opacity-70">Team</Link></li>
                   <li><Link href="#about" className="hover:opacity-70">About Us</Link></li>
                   <li><Link href="#contact" className="hover:opacity-70">Contact</Link></li>
                </ul>
             </div>
             <div className="space-y-4 md:space-y-6">
                <h5 className="uppercase tracking-widest text-xs font-bold opacity-50">Contact Us Here</h5>
                <div className="space-y-2 text-base md:text-lg">
                  <p>1029 South Olive Street. Los Angeles, CA</p>
                  <p>+1 (231) 345-2007</p>
                  <p>chelsea@sloan-studios.com</p>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-6 opacity-50 text-[10px] md:text-xs uppercase tracking-widest font-bold text-center">
           <p>© 2026 CHELSEA SLOAN STUDIOS. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-4 md:gap-8">
              <span>Privacy Policy</span>
              <span>Terms and Conditions</span>
           </div>
        </div>
      </footer>
    </main>
  );
}
