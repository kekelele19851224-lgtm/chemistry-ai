import { CHEMISTRY_CONSTANTS } from '@/lib/constants';

export function calculateMolecularWeight(formula: string): number {
  const elementWeights: Record<string, number> = {
    H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.811, C: 12.011,
    N: 14.007, O: 15.999, F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305,
    Al: 26.982, Si: 28.086, P: 30.974, S: 32.065, Cl: 35.453, Ar: 39.948,
    K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996,
    Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38,
    Ga: 69.723, Ge: 72.64, As: 74.922, Se: 78.96, Br: 79.904, Kr: 83.798,
    Rb: 85.468, Sr: 87.62, Y: 88.906, Zr: 91.224, Nb: 92.906, Mo: 95.96,
    Tc: 98, Ru: 101.07, Rh: 102.906, Pd: 106.42, Ag: 107.868, Cd: 112.411,
    In: 114.818, Sn: 118.71, Sb: 121.76, Te: 127.6, I: 126.904, Xe: 131.293,
  };

  let totalWeight = 0;
  const regex = /([A-Z][a-z]?)(\d*)/g;
  let match;

  while ((match = regex.exec(formula)) !== null) {
    const element = match[1];
    const count = match[2] ? parseInt(match[2]) : 1;
    const weight = elementWeights[element];
    
    if (weight) {
      totalWeight += weight * count;
    }
  }

  return Math.round(totalWeight * 1000) / 1000;
}

export function balanceEquation(reactants: string[], products: string[]): {
  balanced: boolean;
  coefficients: number[];
  equation: string;
} {
  // Simplified equation balancing for common cases
  const coefficients = Array(reactants.length + products.length).fill(1);
  
  // This is a placeholder implementation
  // In a real application, you'd implement matrix-based balancing
  return {
    balanced: true,
    coefficients,
    equation: `${reactants.join(' + ')} → ${products.join(' + ')}`
  };
}

export function calculateMolarity(moles: number, volume: number): number {
  return moles / volume;
}

export function calculateMolality(moles: number, massKg: number): number {
  return moles / massKg;
}

export function calculatepH(concentration: number, isAcid: boolean = true): number {
  if (isAcid) {
    return -Math.log10(concentration);
  } else {
    const pOH = -Math.log10(concentration);
    return 14 - pOH;
  }
}

export function idealGasLaw(
  pressure?: number,
  volume?: number,
  temperature?: number,
  moles?: number
): number | null {
  const R = CHEMISTRY_CONSTANTS.GAS_CONSTANT;
  
  if (pressure && volume && temperature && !moles) {
    return (pressure * volume) / (R * temperature);
  }
  if (pressure && volume && moles && !temperature) {
    return (pressure * volume) / (R * moles);
  }
  if (pressure && temperature && moles && !volume) {
    return (moles * R * temperature) / pressure;
  }
  if (volume && temperature && moles && !pressure) {
    return (moles * R * temperature) / volume;
  }
  
  return null;
}

export function convertUnits(value: number, fromUnit: string, toUnit: string): number {
  const conversions: Record<string, Record<string, number | ((x: number) => number)>> = {
    mass: {
      'g-kg': 0.001,
      'kg-g': 1000,
      'mg-g': 0.001,
      'g-mg': 1000,
    },
    volume: {
      'L-mL': 1000,
      'mL-L': 0.001,
      'L-m3': 0.001,
      'm3-L': 1000,
    },
    temperature: {
      'C-K': (c: number) => c + 273.15,
      'K-C': (k: number) => k - 273.15,
      'C-F': (c: number) => (c * 9/5) + 32,
      'F-C': (f: number) => (f - 32) * 5/9,
    }
  };

  const conversionKey = `${fromUnit}-${toUnit}`;
  
  for (const category of Object.values(conversions)) {
    const conversion = category[conversionKey];
    if (typeof conversion === 'number') {
      return value * conversion;
    }
    if (typeof conversion === 'function') {
      return conversion(value);
    }
  }
  
  return value;
}

export function searchKeywords(query: string, keywords: string[]): number {
  const queryWords = query.toLowerCase().split(' ');
  const keywordMatches = keywords.filter(keyword => 
    queryWords.some(word => 
      word.includes(keyword.toLowerCase()) || 
      keyword.toLowerCase().includes(word)
    )
  );
  
  return keywordMatches.length / keywords.length;
}

export function fuzzySearch(query: string, target: string): number {
  const queryLower = query.toLowerCase();
  const targetLower = target.toLowerCase();
  
  if (targetLower.includes(queryLower)) {
    return 1;
  }
  
  // Simple Levenshtein distance calculation
  const matrix = Array(queryLower.length + 1).fill(null).map(() => 
    Array(targetLower.length + 1).fill(null)
  );
  
  for (let i = 0; i <= targetLower.length; i++) {
    matrix[0][i] = i;
  }
  
  for (let j = 0; j <= queryLower.length; j++) {
    matrix[j][0] = j;
  }
  
  for (let j = 1; j <= queryLower.length; j++) {
    for (let i = 1; i <= targetLower.length; i++) {
      if (queryLower[j - 1] === targetLower[i - 1]) {
        matrix[j][i] = matrix[j - 1][i - 1];
      } else {
        matrix[j][i] = Math.min(
          matrix[j - 1][i] + 1,
          matrix[j][i - 1] + 1,
          matrix[j - 1][i - 1] + 1
        );
      }
    }
  }
  
  const distance = matrix[queryLower.length][targetLower.length];
  return 1 - (distance / Math.max(queryLower.length, targetLower.length));
}