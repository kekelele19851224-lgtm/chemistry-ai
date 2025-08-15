export const CHEMISTRY_CONSTANTS = {
  AVOGADRO_NUMBER: 6.02214076e23,
  GAS_CONSTANT: 8.314,
  PLANCK_CONSTANT: 6.62607015e-34,
  SPEED_OF_LIGHT: 299792458,
  ELECTRON_CHARGE: 1.602176634e-19,
  ELECTRON_MASS: 9.1093837015e-31,
  PROTON_MASS: 1.67262192369e-27,
  NEUTRON_MASS: 1.67492749804e-27,
  BOLTZMANN_CONSTANT: 1.380649e-23,
  FARADAY_CONSTANT: 96485.33212,
  STANDARD_TEMPERATURE: 273.15,
  STANDARD_PRESSURE: 101325,
  ATOMIC_MASS_UNIT: 1.66053906660e-27,
};

export const ELEMENT_CATEGORIES = [
  'alkali-metal',
  'alkaline-earth-metal',
  'transition-metal',
  'post-transition-metal',
  'metalloid',
  'reactive-nonmetal',
  'noble-gas',
  'lanthanide',
  'actinide',
] as const;

export const DIFFICULTY_LEVELS = ['basic', 'intermediate', 'advanced'] as const;

export const CHEMISTRY_CATEGORIES = [
  'basic_concepts',
  'chemical_reactions',
  'organic_chemistry',
  'inorganic_chemistry',
  'physical_chemistry',
] as const;

export const TOOLS = [
  'molecular-weight-calculator',
  'equation-balancer',
  'molar-calculator',
  'concentration-converter',
  'gas-law-calculator',
  'ph-calculator',
  'unit-converter',
  'periodic-table',
  'molecule-viewer',
] as const;