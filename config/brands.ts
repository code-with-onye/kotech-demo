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
      primary: "#3B82F6", // Indigo/Blue for a tech-demo feel
      primaryLight: "#EFF6FF",
    },
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
      primary: "#D45D79", // The signature pink from their logo
      primaryLight: "#FDEFF2",
      accent: "#62B6B7", // The signature teal from their logo
    },
  },
};

export const DEFAULT_BRAND_ID = "oksana";
