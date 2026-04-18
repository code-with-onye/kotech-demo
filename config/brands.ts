export interface BrandConfig {
  id: string;
  name: string;
  nameUpper: string;
  subtext: string;
  tagline: string;
  description: string;
  url: string;
  keywords: string[];
  social?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  colors: {
    primary: string;
    primaryLight: string;
    accent?: string;
  };
  hero: {
    title: string;
    subtitle: string;
    video?: string;
    image?: string;
    ctaText: string;
    trustMarks: { icon: string; text: string }[];
  };
  features: {
    title: string;
    subtitle: string;
    list: { title: string; description: string; icon: string }[];
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    items: { title: string; content: string }[];
  };
  services: {
    title: string;
    list: {
      id: string;
      title: string;
      description: string;
      features: string[];
      image: string;
    }[];
  };
  solutions: {
    section1: {
      title: string;
      description: string;
      image: string;
      features: string[];
    };
    section2: {
      title: string;
      description1: string;
      description2: string;
      imageMain: string;
      imageSub1: string;
      imageSub2: string;
    };
  };
  beforeAfter: {
    title: string;
    description: string;
    list: {
      before: string;
      after: string;
      labelBefore: string;
      labelAfter: string;
    }[];
  };
  testimonials: {
    title: string;
    description: string;
    googleRating: number;
    list: {
      id: number;
      name: string;
      role: string;
      content: string;
      rating: number;
      avatar: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    backgroundImage: string;
  };
}

export const BRANDS: Record<string, BrandConfig> = {
  oksana: {
    id: "oksana",
    name: "Oksanas Perfectcleaning",
    nameUpper: "OKSANAS",
    subtext: "Perfectcleaning",
    tagline: "Professional Home & Office Cleaning",
    description: "Oksanas Perfectcleaning provides top-quality residential and commercial cleaning. From deep house cleaning to office maintenance, we make your space sparkle.",
    url: "https://oksanasperfectcleaning.com/",
    keywords: ["house cleaning", "office cleaning", "residential cleaning", "commercial cleaning", "deep cleaning", "oksanas perfect cleaning", "london cleaning services"],
    social: {
      instagram: "oksanas_perfectcleaning",
    },
    colors: {
      primary: "#2D5A5A",
      primaryLight: "#E9F0EF",
    },
    hero: {
      title: "Spotless Homes, Zero Stress.",
      subtitle: "Professional Home & Office Cleaning. We handle the dirty work so you can relax and enjoy your day.",
      video: "/7551110-uhd_3840_2160_25fps.mp4",
      ctaText: "Book Your Clean",
      trustMarks: [
        { icon: "CheckCircle", text: "Eco-Friendly Products" },
        { icon: "Clock", text: "Fast & Reliable" },
        { icon: "Shield", text: "Fully Insured" }
      ]
    },
    features: {
      title: "Cleaning made simple",
      subtitle: "We believe a clean home is a happy home. Our expert team takes care of the dirt and dust so you don't have to.",
      list: [
        { icon: "Droplets", title: "A Fresh Home", description: "Walk into a house that looks and smells brand new. Our team cleans deeply to ensure every room is refreshing." },
        { icon: "Clock", title: "Save Your Time", description: "Stop spending your weekends cleaning. We take care of everything so you can spend your time on what matters." },
        { icon: "UserCheck", title: "Reliable Experts", description: "Our trained professionals know exactly how to handle every part of your home, from the kitchen to the bedroom." }
      ]
    },
    about: {
      title: "About Us",
      subtitle: "A cleaner home for a happier life.",
      description: "We are a team of friendly, professional cleaners who care about your home as much as you do. We focus on the details so you don't have to.",
      image: "/pexels-liliana-drew-9462313.jpg",
      items: [
        { title: "Quality you can trust", content: "We provide high-quality cleaning that you can rely on every time. Our experienced team treats every home with total care." },
        { title: "Making your life easier", content: "Our mission is to help you relax. We offer flexible times and custom plans that work around your schedule." },
        { title: "Safe and healthy cleaning", content: "We use cleaning products that are safe for your family and pets. Your home will be fresh, clean, and worry-free." },
        { title: "Focus on the details", content: "We don't just clean the big things; we look for the small spots most people miss. We're not happy until everything sparkles." }
      ]
    },
    services: {
      title: "Effortless cleaning for your home or office",
      list: [
        {
          id: 'home',
          title: 'House cleaning',
          description: 'We clean your home from top to bottom, making sure every room is spotless and comfortable.',
          features: ['Deep cleaning for every room.', 'Removing dust and dirt.', 'A fresh-smelling home.', 'Careful handling of your things.'],
          image: '/house-cleaning.jpg'
        },
        {
          id: 'disinfection',
          title: 'Safe sanitizing',
          description: 'We use safe sprays to kill germs and keep your family healthy and protected.',
          features: ['Kills 99.9% of germs.', 'Safe for kids and pets.', 'Full-room sanitizing.', 'Peace of mind for you.'],
          image: '/assets/service-disinfection.png'
        },
        {
          id: 'office',
          title: 'Office cleaning',
          description: 'A clean office helps your team work better. We keep your workspace tidy and organized.',
          features: ['Cleaning after work hours.', 'Tidying desks and tech.', 'Cleaning shared areas.', 'Professional standards.'],
          image: '/office-cleaning.jpg'
        },
        {
          id: 'floor',
          title: 'Floor shining',
          description: 'We make your wood, tile, or marble floors look brand new with our shining service.',
          features: ['Works on all floor types.', 'Makes floors look new.', 'Protects your flooring.', 'Deep cleaning included.'],
          image: '/assets/service-floor.png'
        },
        {
          id: 'dust',
          title: 'Deep dusting',
          description: 'We reach the high spots and hidden corners where dust usually hides.',
          features: ['Reaching high surfaces.', 'Using strong vacuums.', 'Handling fragile items.', 'Better air for your home.'],
          image: '/assets/service-dust.png'
        }
      ]
    },
    solutions: {
      section1: {
        title: "A spotless home for every family",
        description: "Our cleaning services are built around your needs. We use products that are safe for your home, offer times that work for you, and guarantee you'll love the results.",
        image: "/assets/solutions-pro.png",
        features: ['A perfect clean every single time', 'Professional cleaners you can trust', 'We handle the details for you', 'Safe products for pets and kids']
      },
      section2: {
        title: "Zero stress, just a clean home",
        description1: "\"They've been cleaning our home for months, and they're always amazing. The team is thorough, polite, and leaves everything looking perfect. It's such a relief to have a team we can count on.\"",
        description2: "We take pride in our work, and our customers notice the difference. From our attention to detail to our friendly service, we make sure you're happy every time we visit.",
        imageMain: "/assets/solutions-supplies.png",
        imageSub1: "/assets/solutions-detail.png",
        imageSub2: "/assets/solutions-action.png"
      }
    },
    beforeAfter: {
      title: "Before and After",
      description: "Witness the transformative power of our professional cleaning services through these real-life results.",
      list: [
        {
          before: "https://scontent-lhr6-1.xx.fbcdn.net/v/t39.30808-6/653045462_122103152445168332_4935061149532849493_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_ohc=cgifx_gH590Q7kNvwHU7oh3&_nc_oc=Admj6fQ4jmKYNydzF9UOQG_BbLXFdejmxArGC1XNif2jvglJw21RkvcZAgK7QzqwH9w&_nc_zt=23&_nc_ht=scontent-lhr6-1.xx&_nc_gid=u8k3LXJrYAPvwSsvpPFnSg&_nc_ss=8&oh=00_Afz2rhehbqTAn5rl0wTzX_xCaPoSx69VSMzRuEP4obv3IA&oe=69C06495",
          after: "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/653911218_122103152415168332_6809187678314115755_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd6889&_nc_ohc=n0uinPitwb4Q7kNvwFfxr4H&_nc_oc=AdmMYJSR9_UIy6ao0jOdPeSGgLsg6B0AmLu_sHPhN2ZUjJUfXbmdhnA2u3FWt5aYEOE&_nc_zt=23&_nc_ht=scontent-lhr8-1.xx&_nc_gid=8lstOyVWv8HPstWvn8PnQg&_nc_ss=8&oh=00_AfwQsnYatm_OoYQKnCccMqle6l5Nub9ZY2aKh8CMFci1gg&oe=69C04531",
          labelBefore: "Rough Bedroom",
          labelAfter: "Sparkling Clean Bedroom"
        }
      ]
    },
    testimonials: {
      title: "Trusted Clients",
      description: "Join our satisfied clients who trust us for impeccable cleaning services.",
      googleRating: 4.89,
      list: [
        { id: 1, name: "Ashley Cooper", role: "Product Designer", content: "Professional, reliable, and thorough! The team at this cleaning service transformed my home office into a productive sanctuary. I couldn't be happier with the results.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" },
        { id: 2, name: "Caleb Ryan Blake", role: "Marketing Manager", content: "Excellent service! The team was professional, thorough, and left our office sparkling. Their attention to detail is unmatched, and they were very flexible with our scheduling needs.", rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" }
      ]
    },
    cta: {
      title: "A cleaner space is just a click away!",
      description: "Why waste your valuable time on cleaning when you can leave it to the professionals? Our expert team is ready.",
      buttonText: "Book an appointment",
      backgroundImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920"
    }
  },
  kotech: {
    id: "kotech",
    name: "Kotech Demo",
    nameUpper: "KOTECH",
    subtext: "Cleaning Demo",
    tagline: "Innovative Smart Cleaning Solutions",
    description: "Kotech Demo brings cutting-edge technology to the cleaning industry. We provide smart, efficient, and reliable cleaning services for modern spaces.",
    url: "https://kotechdemo.com/",
    keywords: ["smart cleaning", "tech cleaning", "cleaning technology", "iot cleaning", "efficient cleaning", "kotech demo"],
    colors: {
      primary: "#3B82F6",
      primaryLight: "#EFF6FF",
    },
    hero: {
      title: "Next-Gen Cleaning Solutions.",
      subtitle: "Innovative Smart Cleaning Solutions. We use AI and IoT to ensure your workspace is always optimized for performance.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920",
      ctaText: "Start Tech Clean",
      trustMarks: [
        { icon: "CheckCircle", text: "AI-Powered Efficiency" },
        { icon: "Clock", text: "Real-time Monitoring" },
        { icon: "Shield", text: "Tech-Validated Quality" }
      ]
    },
    features: {
      title: "Smart Cleaning Framework",
      subtitle: "Redefining maintenance through technology. Our systems learn and adapt to your environment.",
      list: [
        { icon: "Droplets", title: "Automated Sanitization", description: "Smart systems that sense and clean high-traffic areas automatically." },
        { icon: "Clock", title: "Predictive Maintenance", description: "We know where cleaning is needed before you do, saving time and resources." },
        { icon: "UserCheck", title: "Expert Support", description: "Our team of tech-enabled professionals ensures 100% system uptime." }
      ]
    },
    about: {
      title: "Technology First",
      subtitle: "Efficiency through innovation.",
      description: "Kotech Demo is dedicated to bringing the latest advancements in automation and IoT to the cleaning sector.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920",
      items: [
        { title: "Data-Driven Approach", content: "Every action we take is backed by real-time data collected from smart sensors." },
        { title: "Scalable Solutions", content: "From small offices to large warehouses, our tech scales perfectly." }
      ]
    },
    services: {
      title: "High-Tech Cleaning Ecosystem",
      list: [
        {
          id: 'smart-office',
          title: 'Smart Office Care',
          description: 'Optimized cleaning schedules based on workspace usage patterns.',
          features: ['Usage tracking', 'Dynamic routing', 'Tech-surface safety.'],
          image: '/office-cleaning.jpg'
        },
        {
          id: 'uv-sanitization',
          title: 'UV-C Sanitization',
          description: 'Medical-grade UV-C light sanitization for high-risk areas and tech gadgets.',
          features: ['Chemical-free', '99.99% pathogen kill rate', 'Safe for sensitive electronics'],
          image: '/assets/service-disinfection.png'
        },
        {
          id: 'air-purification',
          title: 'Air Quality Management',
          description: 'Monitoring and purifying the air quality in your smart environment.',
          features: ['HEPA filtration', 'Real-time AQI tracking', 'Odor elimination'],
          image: '/house-cleaning.jpg'
        },
        {
          id: 'robot-floor',
          title: 'Automated Floor Care',
          description: 'Deployment of smart robotic cleaners for continuous floor maintenance.',
          features: ['AI navigation', 'Corner-to-corner mapping', 'Constant upkeep'],
          image: '/assets/service-floor.png'
        },
        {
          id: 'data-center',
          title: 'Data Center Cleaning',
          description: 'Specialized micro-dusting and static-free cleaning for server rooms.',
          features: ['Anti-static measures', 'Micro-particle vacuuming', 'Regulated environment care'],
          image: '/assets/service-dust.png'
        }
      ]
    },
    solutions: {
      section1: {
        title: "Enterprise Grade Cleaning",
        description: "Scale your cleaning operations with our centralized management platform.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1920",
        features: ['Cloud Management', 'Automated Reporting', 'API Integrations']
      },
      section2: {
        title: "The Future of Tidy",
        description1: "Kotech transformed our facility management. The transparency and efficiency are lightyears ahead of traditional services.",
        description2: "We don't just clean; we optimize. Your facility data becomes your greatest asset in maintaining a healthy environment.",
        imageMain: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
        imageSub1: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        imageSub2: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
      }
    },
    beforeAfter: {
      title: "Efficiency Metrics",
      description: "See the measurable difference our smart systems make in surface cleanliness.",
      list: [
        {
          before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
          after: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
          labelBefore: "High Bio-Load",
          labelAfter: "Clinically Clean"
        }
      ]
    },
    testimonials: {
      title: "Partner Success",
      description: "Top enterprises rely on Kotech for their maintenance needs.",
      googleRating: 4.95,
      list: [
        { id: 1, name: "Dr. Sarah Chen", role: "Facility Director", content: "The level of professionalism and technical integration is unparalleled. Highly recommended for modern institutions.", rating: 5, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150" }
      ]
    },
    cta: {
      title: "Ready to Upgrade Your Cleaning?",
      description: "Join the digital cleaning revolution today. Contact our sales team for a custom solution.",
      buttonText: "Request a Demo",
      backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
    }
  },
  prettywee: {
    id: "prettywee",
    name: "Prettyweecleans",
    nameUpper: "PRETTYWEECLEANS",
    subtext: "Pretty Wee Cleans",
    tagline: "Pretty tidy, pretty fast, pretty wee cleans.",
    description: "Prettyweecleans offers high-quality, reliable, and friendly domestic cleaning services. From weekly cleans to one-off deep cleans, we keep your home sparkling.",
    url: "https://prettyweecleans.com/",
    keywords: ["prettyweecleans", "wee cleans", "domestic cleaning", "house cleaning", "friendly cleaners", "reliable cleaning"],
    colors: {
      primary: "#D45D79",
      primaryLight: "#FDEFF2",
      accent: "#62B6B7",
    },
    hero: {
      title: "Pretty Tidy, Pretty Fast.",
      subtitle: "A fresh approach to domestic cleaning. Friendly, reliable, and just a 'wee' bit better than the rest.",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1920",
      ctaText: "Get a Wee Quote",
      trustMarks: [
        { icon: "CheckCircle", text: "Vetted Cleaners" },
        { icon: "Clock", text: "Fast Turnaround" },
        { icon: "Shield", text: "Trusted Local Business" }
      ]
    },
    features: {
      title: "The Pretty Wee Way",
      subtitle: "Why our customers keep coming back for more.",
      list: [
        { icon: "Droplets", title: "Eco-Friendly Sparkle", description: "We use kind products that leave a lovely, natural scent in your home." },
        { icon: "Clock", title: "Punctual & Polite", description: "We respect your time and your property, arriving exactly when promised." },
        { icon: "UserCheck", title: "Hand-Picked Team", description: "Our cleaners are part of our family, trained to the highest standards." }
      ]
    },
    about: {
      title: "Our Story",
      subtitle: "Small team, big heart.",
      description: "Prettyweecleans started with a simple goal: to make professional cleaning feel personal again.",
      image: "https://images.unsplash.com/photo-1556911223-e2f039460df0?auto=format&fit=crop&q=80&w=1920",
      items: [
        { title: "Local Pride", content: "We love our community and it shows in every home we visit." },
        { title: "Personal Touch", content: "No two homes are the same, which is why we tailor our services to you." }
      ]
    },
    services: {
      title: "Our Wee Services",
      list: [
        {
          id: 'domestic',
          title: 'Domestic Cleaning',
          description: 'Regular weekly or fortnightly visits to keep the cobwebs away.',
          features: ['Kitchen deep clean', 'Bathroom sanitizing', 'Vacuuming & Dusting'],
          image: '/house-cleaning.jpg'
        },
        {
          id: 'end-of-tenancy',
          title: 'End of Tenancy',
          description: 'A thorough deep clean to ensure you get your deposit back without any fuss.',
          features: ['Oven cleaning', 'Inside window care', 'Skirting boards & doors'],
          image: '/office-cleaning.jpg'
        },
        {
          id: 'spring-clean',
          title: 'One-Off Spring Clean',
          description: 'A comprehensive top-to-bottom clean to refresh your entire home.',
          features: ['Behind appliances', 'Inside cupboards', 'Intense floor care'],
          image: '/assets/service-disinfection.png'
        },
        {
          id: 'carpet-wee',
          title: 'Carpet Revitalizing',
          description: 'Bringing tired and stained carpets back to life with our gentle extraction process.',
          features: ['Stain removal', 'Odor neutralization', 'Quick drying'],
          image: '/assets/service-floor.png'
        },
        {
          id: 'ironing-service',
          title: 'Ironing & Laundry',
          description: 'Let us tackle the ironing pile while we make the rest of the house sparkle.',
          features: ['Crisp folding', 'Careful ironing', 'Wardrobe organizing'],
          image: '/assets/service-dust.png'
        }
      ]
    },
    solutions: {
      section1: {
        title: "Making Homes Happy",
        description: "There's nothing quite like walking into a Prettyweecleans home. The freshness, the shine—it's magic.",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1920",
        features: ['Bespoke cleaning plans', 'Ironing services', 'Pet-friendly staff']
      },
      section2: {
        title: "Just Sit Back",
        description1: "I don't know what I'd do without my weekly visit from Prettyweecleans. They've given me my weekends back!",
        description2: "We handle the chores so you can focus on making memories. From changing the sheets to polishing the silver, we've got you covered.",
        imageMain: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
        imageSub1: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
        imageSub2: "https://images.unsplash.com/photo-1528740561666-dc2479da08be?auto=format&fit=crop&q=80&w=800"
      }
    },
    beforeAfter: {
      title: "Real Homes, Real Reresults",
      description: "Check out some of our recent 'Wee Cleans'.",
      list: [
        {
          before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
          after: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
          labelBefore: "Mid-Week Mess",
          labelAfter: "Pretty Wee Perfect"
        }
      ]
    },
    testimonials: {
      title: "Happy Wee Customers",
      description: "Read what our lovely clients have to say about us.",
      googleRating: 4.88,
      list: [
        { id: 1, name: "Emily Watson", role: "Busy Mum", content: "The best cleaning service I've ever used. They treat my home with such respect and the results are consistently amazing.", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" }
      ]
    },
    cta: {
      title: "Ready for a Pretty Wee Clean?",
      description: "Get in touch today for a free, no-obligation quote and discover the difference.",
      buttonText: "Let's Get Cleaning",
      backgroundImage: "https://images.unsplash.com/photo-1556911223-e2f039460df0?auto=format&fit=crop&q=80&w=1920"
    }
  },
  sandh: {
    id: "sandh",
    name: "S & H Cleaning",
    nameUpper: "S & H",
    subtext: "Cleaning Services",
    tagline: "Spick & Span, Every Time",
    description: "S & H Cleaning offers premium residential and commercial cleaning services. Dedicated to making your space spotless with professional care.",
    url: "https://sandhcleaning.com/",
    keywords: ["S & H Cleaning", "house cleaning", "office cleaning", "professional cleaners", "residential cleaning", "reliable cleaning services"],
    colors: {
      primary: "#1E3A8A",
      primaryLight: "#DBEAFE",
      accent: "#10B981",
    },
    hero: {
      title: "Elite Cleaning Services.",
      subtitle: "Dedicated to making your space spotless with professional care. We bring military-grade precision to every surface we touch.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1920",
      ctaText: "Book Your Elite Clean",
      trustMarks: [
        { icon: "CheckCircle", text: "Certified Professionals" },
        { icon: "Clock", text: "Express Service" },
        { icon: "Shield", text: "Secure & Insured" }
      ]
    },
    features: {
      title: "The S & H Standard",
      subtitle: "Premium care for premium clients. We set the bar for cleanliness.",
      list: [
        { icon: "Droplets", title: "Deep-Dive Protocols", description: "We go beyond the surface to eliminate allergens and microscopic particles." },
        { icon: "Clock", title: "Precision Scheduling", description: "Our team operates with surgical efficiency to minimize disruption." },
        { icon: "UserCheck", title: "Vetted Elite Staff", description: "Only the top 5% of cleaning professionals make it onto the S & H team." }
      ]
    },
    about: {
      title: "Excellence Defined",
      subtitle: "Precision in every sweep.",
      description: "S & H Cleaning was founded on the principle that 'good enough' never is. We strive for perfection in every project.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920",
      items: [
        { title: "Uncompromising Quality", content: "Our quality control team inspects every project to ensure it meets our standards." },
        { title: "Professional Discretion", content: "We offer private cleaning services for high-profile clients with absolute confidentiality." }
      ]
    },
    services: {
      title: "Commercial & Residential Elite Care",
      list: [
        {
          id: 'commercial',
          title: 'Commercial Excellence',
          description: 'Maintaining corporate environments to the highest possible standards.',
          features: ['Executive suite care', 'Lobby maintenance', 'Night-shift precision'],
          image: '/office-cleaning.jpg'
        },
        {
          id: 'residential-elite',
          title: 'Residential Elite',
          description: 'White-glove cleaning services for luxury homes and private estates.',
          features: ['Antiques care', 'Fine fabric maintenance', 'Discreet service'],
          image: '/house-cleaning.jpg'
        },
        {
          id: 'post-construction',
          title: 'Post-Construction Finish',
          description: 'Meticulous dust removal and polishing after renovations or new builds.',
          features: ['Micro-dust elimination', 'Window track detail', 'Builder residue removal'],
          image: '/assets/service-dust.png'
        },
        {
          id: 'hard-floor',
          title: 'Premium Hard Floor Restoration',
          description: 'Stripping, polishing, and sealing of marble, wood, and concrete floors.',
          features: ['Diamond polishing', 'Protective sealing', 'Grout restoration'],
          image: '/assets/service-floor.png'
        },
        {
          id: 'clinical',
          title: 'Clinical Disinfection',
          description: 'Hospital-grade sanitization protocols for medical facilities and critical areas.',
          features: ['Electrostatic spraying', 'Bio-hazard protocols', 'Cross-contamination prevention'],
          image: '/assets/service-disinfection.png'
        }
      ]
    },
    solutions: {
      section1: {
        title: "A New Baseline for Clean",
        description: "Experience the peace of mind that comes with a truly sanitized environment.",
        image: "https://images.unsplash.com/photo-1528740561666-dc2479da08be?auto=format&fit=crop&q=80&w=1920",
        features: ['Hospital-grade sanitization', 'Zero-residue finish', 'Odor neutralization']
      },
      section2: {
        title: "Precision Cleaning",
        description1: "The S & H team is unlike any other service we've used. Their attention to detail is bordering on obsessive—exactly what we needed.",
        description2: "We understand that your environment reflects your standards. We make sure that reflection is spotless.",
        imageMain: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
        imageSub1: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800",
        imageSub2: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800"
      }
    },
    beforeAfter: {
      title: "Elite Results",
      description: "Comparing the S & H standard against ordinary cleaning.",
      list: [
        {
          before: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800",
          after: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
          labelBefore: "Standard Surface",
          labelAfter: "S & H Elite Surface"
        }
      ]
    },
    testimonials: {
      title: "Executive Endorsements",
      description: "Trusted by industry leaders for critical environment maintenance.",
      googleRating: 4.98,
      list: [
        { id: 1, name: "James Sterling", role: "CEO, Sterling Tech", content: "If you want the best, you hire S & H. There is simply no comparison in terms of quality and reliability.", rating: 5, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" }
      ]
    },
    cta: {
      title: "Secure Your Appointment",
      description: "Limited slots available for new elite clients. Contact us to schedule an assessment.",
      buttonText: "Schedule Assessment",
      backgroundImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1920"
    }
  },
};

export const DEFAULT_BRAND_ID = "oksana";
