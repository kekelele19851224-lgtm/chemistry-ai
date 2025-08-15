export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  electronConfiguration: string;
  group: number;
  period: number;
  block: string;
  category: string;
  electronegativity?: number;
  ionizationEnergy?: number;
  atomicRadius?: number;
  density?: number;
  meltingPoint?: number;
  boilingPoint?: number;
  discoveryYear?: number;
  discoveredBy?: string;
  uses: string[];
  properties: {
    metallic: boolean;
    radioactive: boolean;
    state: 'solid' | 'liquid' | 'gas' | 'synthetic';
    color?: string;
  };
}

export interface ChemistryQuestion {
  id: number;
  question: string;
  keywords: string[];
  category: 'basic_concepts' | 'chemical_reactions' | 'organic_chemistry' | 'inorganic_chemistry' | 'physical_chemistry';
  difficulty: 'basic' | 'intermediate' | 'advanced';
  answer: string;
  relatedTools?: string[];
  relatedQuestions?: number[];
  formulas?: string[];
  examples?: string[];
}

export interface Molecule {
  id: string;
  name: string;
  formula: string;
  smiles?: string;
  structure: {
    atoms: Array<{
      element: string;
      x: number;
      y: number;
      z: number;
    }>;
    bonds: Array<{
      from: number;
      to: number;
      order: number;
    }>;
  };
  properties: {
    molecularWeight: number;
    polarMolecule: boolean;
    category: string;
  };
}

export interface Reaction {
  id: number;
  name: string;
  equation: string;
  reactants: string[];
  products: string[];
  type: string;
  conditions?: string;
  mechanism?: string;
  description: string;
}

export interface CalculationResult {
  input: Record<string, string | number>;
  result: number | string;
  unit: string;
  steps: string[];
  formula: string;
}