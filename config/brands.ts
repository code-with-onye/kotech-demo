export interface BrandConfig {
  id: string;
  name: string;
  nameUpper: string;
  subtext: string;
  tagline: string;
  description: string;
  url: string;
  colors: {
    primary: string;
    primaryLight: string;
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
    colors: {
      primary: "#3B82F6", // Indigo/Blue for a tech-demo feel
      primaryLight: "#EFF6FF",
    },
  },
};

export const DEFAULT_BRAND_ID = "oksana";
