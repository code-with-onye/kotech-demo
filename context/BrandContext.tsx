"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrandConfig, BRANDS, DEFAULT_BRAND_ID } from '../config/brands';

interface BrandContextType {
  brand: BrandConfig;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export function BrandProvider({ brandId, children }: { brandId: string; children: React.ReactNode }) {
  const brand = BRANDS[brandId] || BRANDS[DEFAULT_BRAND_ID];

  useEffect(() => {
    // Inject CSS variables for colors
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', brand.colors.primary);
    root.style.setProperty('--brand-primary-light', brand.colors.primaryLight);
    if (brand.colors.accent) {
      root.style.setProperty('--brand-accent', brand.colors.accent);
    } else {
      root.style.setProperty('--brand-accent', brand.colors.primary); // Fallback
    }
    
    // Update title
    document.title = brand.name;
  }, [brand]);

  return (
    <BrandContext.Provider value={{ brand }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context.brand;
}
