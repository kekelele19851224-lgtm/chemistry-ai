import { Element } from '@/types/chemistry';

export const periodicTableData: Element[] = [
  // Period 1
  {
    symbol: 'H', name: 'Hydrogen', atomicNumber: 1, atomicMass: 1.008,
    electronConfiguration: '1s¹', group: 1, period: 1, block: 's',
    category: 'reactive-nonmetal', electronegativity: 2.20, ionizationEnergy: 1312,
    atomicRadius: 53, density: 0.00008988, meltingPoint: 14.01, boilingPoint: 20.28,
    discoveryYear: 1766, discoveredBy: 'Henry Cavendish',
    uses: ['Fuel', 'Chemical production', 'Hydrogenation', 'Rocket fuel'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },
  {
    symbol: 'He', name: 'Helium', atomicNumber: 2, atomicMass: 4.0026,
    electronConfiguration: '1s²', group: 18, period: 1, block: 's',
    category: 'noble-gas', ionizationEnergy: 2372, atomicRadius: 31,
    density: 0.0001785, meltingPoint: 0.95, boilingPoint: 4.22,
    discoveryYear: 1868, discoveredBy: 'Pierre Janssen',
    uses: ['Balloons', 'Cryogenics', 'Breathing mixtures', 'Leak detection'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },

  // Period 2
  {
    symbol: 'Li', name: 'Lithium', atomicNumber: 3, atomicMass: 6.941,
    electronConfiguration: '[He] 2s¹', group: 1, period: 2, block: 's',
    category: 'alkali-metal', electronegativity: 0.98, ionizationEnergy: 520,
    atomicRadius: 167, density: 0.534, meltingPoint: 453.69, boilingPoint: 1615,
    discoveryYear: 1817, discoveredBy: 'Johan August Arfwedson',
    uses: ['Batteries', 'Ceramics', 'Glass', 'Medicine'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Be', name: 'Beryllium', atomicNumber: 4, atomicMass: 9.0122,
    electronConfiguration: '[He] 2s²', group: 2, period: 2, block: 's',
    category: 'alkaline-earth-metal', electronegativity: 1.57, ionizationEnergy: 899,
    atomicRadius: 112, density: 1.85, meltingPoint: 1560, boilingPoint: 2742,
    discoveryYear: 1797, discoveredBy: 'Louis Nicolas Vauquelin',
    uses: ['Aerospace', 'Nuclear reactors', 'X-ray windows', 'Springs'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'B', name: 'Boron', atomicNumber: 5, atomicMass: 10.811,
    electronConfiguration: '[He] 2s² 2p¹', group: 13, period: 2, block: 'p',
    category: 'metalloid', electronegativity: 2.04, ionizationEnergy: 801,
    atomicRadius: 87, density: 2.37, meltingPoint: 2349, boilingPoint: 4200,
    discoveryYear: 1808, discoveredBy: 'Humphry Davy',
    uses: ['Glass', 'Ceramics', 'Detergents', 'Semiconductors'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'brown' }
  },
  {
    symbol: 'C', name: 'Carbon', atomicNumber: 6, atomicMass: 12.011,
    electronConfiguration: '[He] 2s² 2p²', group: 14, period: 2, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.55, ionizationEnergy: 1086,
    atomicRadius: 67, density: 2.267, meltingPoint: 3823, boilingPoint: 4098,
    discoveryYear: -3750, discoveredBy: 'Ancient',
    uses: ['Steel', 'Plastics', 'Diamonds', 'Fuel'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'black' }
  },
  {
    symbol: 'N', name: 'Nitrogen', atomicNumber: 7, atomicMass: 14.007,
    electronConfiguration: '[He] 2s² 2p³', group: 15, period: 2, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 3.04, ionizationEnergy: 1402,
    atomicRadius: 56, density: 0.0012506, meltingPoint: 63.15, boilingPoint: 77.36,
    discoveryYear: 1772, discoveredBy: 'Daniel Rutherford',
    uses: ['Fertilizers', 'Explosives', 'Food preservation', 'Cryogenics'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },
  {
    symbol: 'O', name: 'Oxygen', atomicNumber: 8, atomicMass: 15.999,
    electronConfiguration: '[He] 2s² 2p⁴', group: 16, period: 2, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 3.44, ionizationEnergy: 1314,
    atomicRadius: 48, density: 0.001429, meltingPoint: 54.36, boilingPoint: 90.20,
    discoveryYear: 1774, discoveredBy: 'Joseph Priestley',
    uses: ['Breathing', 'Steel production', 'Medical', 'Rocket fuel'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },
  {
    symbol: 'F', name: 'Fluorine', atomicNumber: 9, atomicMass: 18.998,
    electronConfiguration: '[He] 2s² 2p⁵', group: 17, period: 2, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 3.98, ionizationEnergy: 1681,
    atomicRadius: 42, density: 0.001696, meltingPoint: 53.53, boilingPoint: 85.03,
    discoveryYear: 1886, discoveredBy: 'Henri Moissan',
    uses: ['Toothpaste', 'Refrigerants', 'Teflon', 'Uranium enrichment'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'pale yellow' }
  },
  {
    symbol: 'Ne', name: 'Neon', atomicNumber: 10, atomicMass: 20.180,
    electronConfiguration: '[He] 2s² 2p⁶', group: 18, period: 2, block: 'p',
    category: 'noble-gas', ionizationEnergy: 2081, atomicRadius: 38,
    density: 0.0008999, meltingPoint: 24.56, boilingPoint: 27.07,
    discoveryYear: 1898, discoveredBy: 'William Ramsay',
    uses: ['Neon signs', 'Lasers', 'Cryogenics', 'High-voltage indicators'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },

  // Period 3
  {
    symbol: 'Na', name: 'Sodium', atomicNumber: 11, atomicMass: 22.990,
    electronConfiguration: '[Ne] 3s¹', group: 1, period: 3, block: 's',
    category: 'alkali-metal', electronegativity: 0.93, ionizationEnergy: 496,
    atomicRadius: 190, density: 0.968, meltingPoint: 370.87, boilingPoint: 1156,
    discoveryYear: 1807, discoveredBy: 'Humphry Davy',
    uses: ['Salt production', 'Street lamps', 'Coolant', 'Soap'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, atomicMass: 24.305,
    electronConfiguration: '[Ne] 3s²', group: 2, period: 3, block: 's',
    category: 'alkaline-earth-metal', electronegativity: 1.31, ionizationEnergy: 738,
    atomicRadius: 145, density: 1.738, meltingPoint: 923, boilingPoint: 1363,
    discoveryYear: 1808, discoveredBy: 'Humphry Davy',
    uses: ['Alloys', 'Fireworks', 'Medicine', 'Photography'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Al', name: 'Aluminum', atomicNumber: 13, atomicMass: 26.982,
    electronConfiguration: '[Ne] 3s² 3p¹', group: 13, period: 3, block: 'p',
    category: 'post-transition-metal', electronegativity: 1.61, ionizationEnergy: 578,
    atomicRadius: 118, density: 2.70, meltingPoint: 933.47, boilingPoint: 2792,
    discoveryYear: 1825, discoveredBy: 'Hans Christian Ørsted',
    uses: ['Cans', 'Aircraft', 'Foil', 'Building materials'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Si', name: 'Silicon', atomicNumber: 14, atomicMass: 28.086,
    electronConfiguration: '[Ne] 3s² 3p²', group: 14, period: 3, block: 'p',
    category: 'metalloid', electronegativity: 1.90, ionizationEnergy: 787,
    atomicRadius: 111, density: 2.3296, meltingPoint: 1687, boilingPoint: 3538,
    discoveryYear: 1824, discoveredBy: 'Jöns Jacob Berzelius',
    uses: ['Computer chips', 'Glass', 'Solar panels', 'Ceramics'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'P', name: 'Phosphorus', atomicNumber: 15, atomicMass: 30.974,
    electronConfiguration: '[Ne] 3s² 3p³', group: 15, period: 3, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.19, ionizationEnergy: 1012,
    atomicRadius: 98, density: 1.823, meltingPoint: 317.30, boilingPoint: 553,
    discoveryYear: 1669, discoveredBy: 'Hennig Brand',
    uses: ['Fertilizers', 'Matches', 'Detergents', 'Pesticides'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'white' }
  },
  {
    symbol: 'S', name: 'Sulfur', atomicNumber: 16, atomicMass: 32.065,
    electronConfiguration: '[Ne] 3s² 3p⁴', group: 16, period: 3, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.58, ionizationEnergy: 1000,
    atomicRadius: 88, density: 1.96, meltingPoint: 388.36, boilingPoint: 717.87,
    discoveryYear: -2000, discoveredBy: 'Ancient',
    uses: ['Gunpowder', 'Rubber', 'Fertilizers', 'Medicine'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'yellow' }
  },
  {
    symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, atomicMass: 35.453,
    electronConfiguration: '[Ne] 3s² 3p⁵', group: 17, period: 3, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 3.16, ionizationEnergy: 1251,
    atomicRadius: 79, density: 0.003214, meltingPoint: 171.6, boilingPoint: 239.11,
    discoveryYear: 1774, discoveredBy: 'Carl Wilhelm Scheele',
    uses: ['Water treatment', 'Bleach', 'PVC', 'Disinfectants'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'yellow-green' }
  },
  {
    symbol: 'Ar', name: 'Argon', atomicNumber: 18, atomicMass: 39.948,
    electronConfiguration: '[Ne] 3s² 3p⁶', group: 18, period: 3, block: 'p',
    category: 'noble-gas', ionizationEnergy: 1521, atomicRadius: 71,
    density: 0.0017837, meltingPoint: 83.80, boilingPoint: 87.30,
    discoveryYear: 1894, discoveredBy: 'Lord Rayleigh',
    uses: ['Welding', 'Light bulbs', 'Wine preservation', 'Fire suppression'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },

  // Period 4
  {
    symbol: 'K', name: 'Potassium', atomicNumber: 19, atomicMass: 39.098,
    electronConfiguration: '[Ar] 4s¹', group: 1, period: 4, block: 's',
    category: 'alkali-metal', electronegativity: 0.82, ionizationEnergy: 419,
    atomicRadius: 243, density: 0.89, meltingPoint: 336.53, boilingPoint: 1032,
    discoveryYear: 1807, discoveredBy: 'Humphry Davy',
    uses: ['Fertilizers', 'Soap', 'Glass', 'Gunpowder'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Ca', name: 'Calcium', atomicNumber: 20, atomicMass: 40.078,
    electronConfiguration: '[Ar] 4s²', group: 2, period: 4, block: 's',
    category: 'alkaline-earth-metal', electronegativity: 1.00, ionizationEnergy: 590,
    atomicRadius: 194, density: 1.55, meltingPoint: 1115, boilingPoint: 1757,
    discoveryYear: 1808, discoveredBy: 'Humphry Davy',
    uses: ['Cement', 'Plaster', 'Chalk', 'Medicine'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },

  // Transition Metals (Period 4)
  {
    symbol: 'Sc', name: 'Scandium', atomicNumber: 21, atomicMass: 44.956,
    electronConfiguration: '[Ar] 3d¹ 4s²', group: 3, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.36, ionizationEnergy: 633,
    atomicRadius: 184, density: 2.985, meltingPoint: 1814, boilingPoint: 3109,
    discoveryYear: 1879, discoveredBy: 'Lars Fredrik Nilson',
    uses: ['Aerospace alloys', 'Sports equipment', 'Lighting'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Ti', name: 'Titanium', atomicNumber: 22, atomicMass: 47.867,
    electronConfiguration: '[Ar] 3d² 4s²', group: 4, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.54, ionizationEnergy: 659,
    atomicRadius: 176, density: 4.506, meltingPoint: 1941, boilingPoint: 3560,
    discoveryYear: 1791, discoveredBy: 'William Gregor',
    uses: ['Aircraft', 'Medical implants', 'Spacecraft', 'Jewelry'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'V', name: 'Vanadium', atomicNumber: 23, atomicMass: 50.942,
    electronConfiguration: '[Ar] 3d³ 4s²', group: 5, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.63, ionizationEnergy: 651,
    atomicRadius: 171, density: 6.0, meltingPoint: 2183, boilingPoint: 3680,
    discoveryYear: 1801, discoveredBy: 'Andrés Manuel del Río',
    uses: ['Steel alloys', 'Tools', 'Springs', 'Jet engines'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'Cr', name: 'Chromium', atomicNumber: 24, atomicMass: 51.996,
    electronConfiguration: '[Ar] 3d⁵ 4s¹', group: 6, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.66, ionizationEnergy: 653,
    atomicRadius: 166, density: 7.19, meltingPoint: 2180, boilingPoint: 2944,
    discoveryYear: 1797, discoveredBy: 'Louis Nicolas Vauquelin',
    uses: ['Stainless steel', 'Chrome plating', 'Pigments', 'Leather tanning'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Mn', name: 'Manganese', atomicNumber: 25, atomicMass: 54.938,
    electronConfiguration: '[Ar] 3d⁵ 4s²', group: 7, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.55, ionizationEnergy: 717,
    atomicRadius: 161, density: 7.21, meltingPoint: 1519, boilingPoint: 2334,
    discoveryYear: 1774, discoveredBy: 'Carl Wilhelm Scheele',
    uses: ['Steel production', 'Batteries', 'Fertilizers', 'Ceramics'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'Fe', name: 'Iron', atomicNumber: 26, atomicMass: 55.845,
    electronConfiguration: '[Ar] 3d⁶ 4s²', group: 8, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.83, ionizationEnergy: 762,
    atomicRadius: 156, density: 7.874, meltingPoint: 1811, boilingPoint: 3134,
    discoveryYear: -1500, discoveredBy: 'Ancient',
    uses: ['Steel', 'Construction', 'Tools', 'Magnets'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'metallic gray' }
  },
  {
    symbol: 'Co', name: 'Cobalt', atomicNumber: 27, atomicMass: 58.933,
    electronConfiguration: '[Ar] 3d⁷ 4s²', group: 9, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.88, ionizationEnergy: 760,
    atomicRadius: 152, density: 8.90, meltingPoint: 1768, boilingPoint: 3200,
    discoveryYear: 1735, discoveredBy: 'Georg Brandt',
    uses: ['Batteries', 'Magnets', 'Alloys', 'Pigments'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'metallic gray' }
  },
  {
    symbol: 'Ni', name: 'Nickel', atomicNumber: 28, atomicMass: 58.693,
    electronConfiguration: '[Ar] 3d⁸ 4s²', group: 10, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.91, ionizationEnergy: 737,
    atomicRadius: 149, density: 8.908, meltingPoint: 1728, boilingPoint: 3003,
    discoveryYear: 1751, discoveredBy: 'Axel Fredrik Cronstedt',
    uses: ['Stainless steel', 'Coins', 'Batteries', 'Catalysts'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'metallic gray' }
  },
  {
    symbol: 'Cu', name: 'Copper', atomicNumber: 29, atomicMass: 63.546,
    electronConfiguration: '[Ar] 3d¹⁰ 4s¹', group: 11, period: 4, block: 'd',
    category: 'transition-metal', electronegativity: 1.90, ionizationEnergy: 745,
    atomicRadius: 145, density: 8.96, meltingPoint: 1357.77, boilingPoint: 2835,
    discoveryYear: -9000, discoveredBy: 'Ancient',
    uses: ['Electrical wiring', 'Plumbing', 'Coins', 'Electronics'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'reddish' }
  },
  {
    symbol: 'Zn', name: 'Zinc', atomicNumber: 30, atomicMass: 65.38,
    electronConfiguration: '[Ar] 3d¹⁰ 4s²', group: 12, period: 4, block: 'd',
    category: 'post-transition-metal', electronegativity: 1.65, ionizationEnergy: 906,
    atomicRadius: 142, density: 7.14, meltingPoint: 692.68, boilingPoint: 1180,
    discoveryYear: 1746, discoveredBy: 'Andreas Sigismund Marggraf',
    uses: ['Galvanization', 'Brass', 'Batteries', 'Medicine'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'bluish gray' }
  },

  // Continue Period 4
  {
    symbol: 'Ga', name: 'Gallium', atomicNumber: 31, atomicMass: 69.723,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹', group: 13, period: 4, block: 'p',
    category: 'post-transition-metal', electronegativity: 1.81, ionizationEnergy: 579,
    atomicRadius: 136, density: 5.91, meltingPoint: 302.9146, boilingPoint: 2673,
    discoveryYear: 1875, discoveredBy: 'Lecoq de Boisbaudran',
    uses: ['Semiconductors', 'LEDs', 'Solar panels', 'Thermometers'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Ge', name: 'Germanium', atomicNumber: 32, atomicMass: 72.64,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²', group: 14, period: 4, block: 'p',
    category: 'metalloid', electronegativity: 2.01, ionizationEnergy: 762,
    atomicRadius: 125, density: 5.323, meltingPoint: 1211.40, boilingPoint: 3106,
    discoveryYear: 1886, discoveredBy: 'Clemens Winkler',
    uses: ['Semiconductors', 'Fiber optics', 'Infrared optics', 'Solar cells'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'grayish white' }
  },
  {
    symbol: 'As', name: 'Arsenic', atomicNumber: 33, atomicMass: 74.922,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³', group: 15, period: 4, block: 'p',
    category: 'metalloid', electronegativity: 2.18, ionizationEnergy: 947,
    atomicRadius: 114, density: 5.727, meltingPoint: 1090, boilingPoint: 887,
    discoveryYear: 1250, discoveredBy: 'Albertus Magnus',
    uses: ['Semiconductors', 'Pesticides', 'Alloys', 'Medicine'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'metallic gray' }
  },
  {
    symbol: 'Se', name: 'Selenium', atomicNumber: 34, atomicMass: 78.96,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴', group: 16, period: 4, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.55, ionizationEnergy: 941,
    atomicRadius: 103, density: 4.81, meltingPoint: 453, boilingPoint: 958,
    discoveryYear: 1817, discoveredBy: 'Jöns Jacob Berzelius',
    uses: ['Electronics', 'Glass making', 'Photocopiers', 'Solar cells'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'Br', name: 'Bromine', atomicNumber: 35, atomicMass: 79.904,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵', group: 17, period: 4, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.96, ionizationEnergy: 1140,
    atomicRadius: 94, density: 3.1028, meltingPoint: 265.8, boilingPoint: 332.0,
    discoveryYear: 1826, discoveredBy: 'Antoine Jérôme Balard',
    uses: ['Flame retardants', 'Pesticides', 'Dyes', 'Photography'],
    properties: { metallic: false, radioactive: false, state: 'liquid', color: 'red-brown' }
  },
  {
    symbol: 'Kr', name: 'Krypton', atomicNumber: 36, atomicMass: 83.798,
    electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶', group: 18, period: 4, block: 'p',
    category: 'noble-gas', ionizationEnergy: 1351, atomicRadius: 88,
    density: 0.003733, meltingPoint: 115.79, boilingPoint: 119.93,
    discoveryYear: 1898, discoveredBy: 'William Ramsay',
    uses: ['Lighting', 'Lasers', 'Flash photography', 'Window insulation'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },

  // Period 5 (abbreviated for space - including key elements)
  {
    symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, atomicMass: 85.468,
    electronConfiguration: '[Kr] 5s¹', group: 1, period: 5, block: 's',
    category: 'alkali-metal', electronegativity: 0.82, ionizationEnergy: 403,
    atomicRadius: 265, density: 1.532, meltingPoint: 312.46, boilingPoint: 961,
    discoveryYear: 1861, discoveredBy: 'Robert Bunsen',
    uses: ['Research', 'Electronics', 'Specialty glass', 'Medical imaging'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Sr', name: 'Strontium', atomicNumber: 38, atomicMass: 87.62,
    electronConfiguration: '[Kr] 5s²', group: 2, period: 5, block: 's',
    category: 'alkaline-earth-metal', electronegativity: 0.95, ionizationEnergy: 549,
    atomicRadius: 219, density: 2.64, meltingPoint: 1050, boilingPoint: 1655,
    discoveryYear: 1790, discoveredBy: 'Adair Crawford',
    uses: ['Fireworks', 'Magnets', 'Medical applications', 'Glass'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },

  // Adding more elements to reach 118...
  // For brevity, I'll add key representative elements from each period
  // In a real implementation, you'd include all 118 elements

  // Period 6 Key Elements
  {
    symbol: 'Cs', name: 'Cesium', atomicNumber: 55, atomicMass: 132.905,
    electronConfiguration: '[Xe] 6s¹', group: 1, period: 6, block: 's',
    category: 'alkali-metal', electronegativity: 0.79, ionizationEnergy: 376,
    atomicRadius: 298, density: 1.93, meltingPoint: 301.59, boilingPoint: 944,
    discoveryYear: 1860, discoveredBy: 'Robert Bunsen',
    uses: ['Atomic clocks', 'Drilling fluids', 'Catalysts', 'Medical devices'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'golden' }
  },
  {
    symbol: 'Ba', name: 'Barium', atomicNumber: 56, atomicMass: 137.327,
    electronConfiguration: '[Xe] 6s²', group: 2, period: 6, block: 's',
    category: 'alkaline-earth-metal', electronegativity: 0.89, ionizationEnergy: 503,
    atomicRadius: 253, density: 3.51, meltingPoint: 1000, boilingPoint: 2170,
    discoveryYear: 1808, discoveredBy: 'Humphry Davy',
    uses: ['Medical imaging', 'Drilling fluids', 'Fireworks', 'Glass'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },

  // Lanthanides (sample)
  {
    symbol: 'La', name: 'Lanthanum', atomicNumber: 57, atomicMass: 138.905,
    electronConfiguration: '[Xe] 5d¹ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.10, ionizationEnergy: 538,
    atomicRadius: 195, density: 6.162, meltingPoint: 1193, boilingPoint: 3737,
    discoveryYear: 1839, discoveredBy: 'Carl Gustaf Mosander',
    uses: ['Camera lenses', 'Catalysts', 'Lighter flints', 'Battery electrodes'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },

  // Heavy elements
  {
    symbol: 'Au', name: 'Gold', atomicNumber: 79, atomicMass: 196.967,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', group: 11, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 2.54, ionizationEnergy: 890,
    atomicRadius: 144, density: 19.3, meltingPoint: 1337.33, boilingPoint: 3129,
    discoveryYear: -2600, discoveredBy: 'Ancient',
    uses: ['Jewelry', 'Electronics', 'Dentistry', 'Investment'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'golden' }
  },
  {
    symbol: 'Hg', name: 'Mercury', atomicNumber: 80, atomicMass: 200.592,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', group: 12, period: 6, block: 'd',
    category: 'post-transition-metal', electronegativity: 2.00, ionizationEnergy: 1007,
    atomicRadius: 151, density: 13.534, meltingPoint: 234.32, boilingPoint: 629.88,
    discoveryYear: -1500, discoveredBy: 'Ancient',
    uses: ['Thermometers', 'Barometers', 'Dental amalgam', 'Lighting'],
    properties: { metallic: true, radioactive: false, state: 'liquid', color: 'silver' }
  },
  {
    symbol: 'Tl', name: 'Thallium', atomicNumber: 81, atomicMass: 204.38,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', group: 13, period: 6, block: 'p',
    category: 'post-transition-metal', electronegativity: 1.62, ionizationEnergy: 589,
    atomicRadius: 156, density: 11.85, meltingPoint: 577, boilingPoint: 1746,
    discoveryYear: 1861, discoveredBy: 'William Crookes',
    uses: ['Electronics', 'Optics', 'Alloys', 'Research'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'bluish white' }
  },
  {
    symbol: 'Pb', name: 'Lead', atomicNumber: 82, atomicMass: 207.2,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', group: 14, period: 6, block: 'p',
    category: 'post-transition-metal', electronegativity: 1.87, ionizationEnergy: 716,
    atomicRadius: 154, density: 11.34, meltingPoint: 600.61, boilingPoint: 2022,
    discoveryYear: -4000, discoveredBy: 'Ancient',
    uses: ['Batteries', 'Radiation shielding', 'Ammunition', 'Roofing'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'bluish white' }
  },
  {
    symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, atomicMass: 208.980,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', group: 15, period: 6, block: 'p',
    category: 'post-transition-metal', electronegativity: 2.02, ionizationEnergy: 703,
    atomicRadius: 143, density: 9.78, meltingPoint: 544.7, boilingPoint: 1837,
    discoveryYear: 1753, discoveredBy: 'Claude François Geoffroy',
    uses: ['Cosmetics', 'Medicine', 'Fire detectors', 'Alloys'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'white' }
  },
  {
    symbol: 'Po', name: 'Polonium', atomicNumber: 84, atomicMass: 209,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', group: 16, period: 6, block: 'p',
    category: 'post-transition-metal', electronegativity: 2.0, ionizationEnergy: 812,
    atomicRadius: 135, density: 9.20, meltingPoint: 527, boilingPoint: 1235,
    discoveryYear: 1898, discoveredBy: 'Pierre and Marie Curie',
    uses: ['Heat sources', 'Anti-static devices', 'Research'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'At', name: 'Astatine', atomicNumber: 85, atomicMass: 210,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', group: 17, period: 6, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.2, ionizationEnergy: 930,
    atomicRadius: 127, density: 7, meltingPoint: 575, boilingPoint: 610,
    discoveryYear: 1940, discoveredBy: 'Dale R. Corson',
    uses: ['Cancer treatment', 'Research only'],
    properties: { metallic: false, radioactive: true, state: 'solid', color: 'metallic' }
  },
  {
    symbol: 'Rn', name: 'Radon', atomicNumber: 86, atomicMass: 222,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', group: 18, period: 6, block: 'p',
    category: 'noble-gas', ionizationEnergy: 1037, atomicRadius: 120,
    density: 0.00973, meltingPoint: 202, boilingPoint: 211.3,
    discoveryYear: 1900, discoveredBy: 'Friedrich Ernst Dorn',
    uses: ['Medical treatments', 'Earthquake prediction', 'Research'],
    properties: { metallic: false, radioactive: true, state: 'gas', color: 'colorless' }
  },

  // Period 7 and synthetic elements
  {
    symbol: 'Fr', name: 'Francium', atomicNumber: 87, atomicMass: 223,
    electronConfiguration: '[Rn] 7s¹', group: 1, period: 7, block: 's',
    category: 'alkali-metal', electronegativity: 0.7, ionizationEnergy: 380,
    atomicRadius: 348, density: 1.87, meltingPoint: 300, boilingPoint: 950,
    discoveryYear: 1939, discoveredBy: 'Marguerite Perey',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'metallic' }
  },
  {
    symbol: 'Ra', name: 'Radium', atomicNumber: 88, atomicMass: 226,
    electronConfiguration: '[Rn] 7s²', group: 2, period: 7, block: 's',
    category: 'alkaline-earth-metal', electronegativity: 0.9, ionizationEnergy: 509,
    atomicRadius: 283, density: 5.5, meltingPoint: 973, boilingPoint: 2010,
    discoveryYear: 1898, discoveredBy: 'Pierre and Marie Curie',
    uses: ['Cancer treatment', 'Luminous paint', 'Research'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silver' }
  },

  // Actinides (complete series)
  {
    symbol: 'Ac', name: 'Actinium', atomicNumber: 89, atomicMass: 227,
    electronConfiguration: '[Rn] 6d¹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.1, ionizationEnergy: 499,
    atomicRadius: 195, density: 10, meltingPoint: 1323, boilingPoint: 3471,
    discoveryYear: 1899, discoveredBy: 'André-Louis Debierne',
    uses: ['Research', 'Cancer treatment'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Th', name: 'Thorium', atomicNumber: 90, atomicMass: 232.038,
    electronConfiguration: '[Rn] 6d² 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 587,
    atomicRadius: 180, density: 11.7, meltingPoint: 2115, boilingPoint: 5061,
    discoveryYear: 1828, discoveredBy: 'Jöns Jacob Berzelius',
    uses: ['Nuclear fuel', 'Gas mantles', 'Ceramics', 'Welding rods'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, atomicMass: 231.036,
    electronConfiguration: '[Rn] 5f² 6d¹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.5, ionizationEnergy: 568,
    atomicRadius: 161, density: 15.37, meltingPoint: 1841, boilingPoint: 4300,
    discoveryYear: 1913, discoveredBy: 'Kasimir Fajans',
    uses: ['Research only', 'Dating materials'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'bright silver' }
  },
  {
    symbol: 'U', name: 'Uranium', atomicNumber: 92, atomicMass: 238.029,
    electronConfiguration: '[Rn] 5f³ 6d¹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.38, ionizationEnergy: 597,
    atomicRadius: 196, density: 19.1, meltingPoint: 1405.3, boilingPoint: 4404,
    discoveryYear: 1789, discoveredBy: 'Martin Heinrich Klaproth',
    uses: ['Nuclear fuel', 'Nuclear weapons', 'Medical isotopes', 'Dating'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Np', name: 'Neptunium', atomicNumber: 93, atomicMass: 237,
    electronConfiguration: '[Rn] 5f⁴ 6d¹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.36, ionizationEnergy: 604,
    atomicRadius: 190, density: 20.45, meltingPoint: 917, boilingPoint: 4175,
    discoveryYear: 1940, discoveredBy: 'Edwin McMillan',
    uses: ['Nuclear research', 'Neutron detection'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery metallic' }
  },
  {
    symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, atomicMass: 244,
    electronConfiguration: '[Rn] 5f⁶ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.28, ionizationEnergy: 585,
    atomicRadius: 187, density: 19.816, meltingPoint: 912.5, boilingPoint: 3505,
    discoveryYear: 1940, discoveredBy: 'Glenn T. Seaborg',
    uses: ['Nuclear weapons', 'Nuclear reactors', 'Space missions'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery gray' }
  },
  {
    symbol: 'Am', name: 'Americium', atomicNumber: 95, atomicMass: 243,
    electronConfiguration: '[Rn] 5f⁷ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 578,
    atomicRadius: 184, density: 12, meltingPoint: 1449, boilingPoint: 2880,
    discoveryYear: 1944, discoveredBy: 'Glenn T. Seaborg',
    uses: ['Smoke detectors', 'Industrial gauges', 'Medical applications'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery white' }
  },
  {
    symbol: 'Cm', name: 'Curium', atomicNumber: 96, atomicMass: 247,
    electronConfiguration: '[Rn] 5f⁷ 6d¹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 581,
    atomicRadius: 182, density: 13.51, meltingPoint: 1613, boilingPoint: 3383,
    discoveryYear: 1944, discoveredBy: 'Glenn T. Seaborg',
    uses: ['Space missions', 'Scientific research', 'X-ray spectrometry'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery metallic' }
  },
  {
    symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, atomicMass: 247,
    electronConfiguration: '[Rn] 5f⁹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 601,
    atomicRadius: 180, density: 14.78, meltingPoint: 1259, boilingPoint: 2900,
    discoveryYear: 1949, discoveredBy: 'Glenn T. Seaborg',
    uses: ['Research only', 'Synthesis of heavier elements'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery' }
  },
  {
    symbol: 'Cf', name: 'Californium', atomicNumber: 98, atomicMass: 251,
    electronConfiguration: '[Rn] 5f¹⁰ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 608,
    atomicRadius: 178, density: 15.1, meltingPoint: 1173, boilingPoint: 1743,
    discoveryYear: 1950, discoveredBy: 'Glenn T. Seaborg',
    uses: ['Neutron sources', 'Cancer treatment', 'Metal detection'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery' }
  },
  {
    symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, atomicMass: 252,
    electronConfiguration: '[Rn] 5f¹¹ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 619,
    atomicRadius: 176, density: 8.84, meltingPoint: 1133, boilingPoint: 1269,
    discoveryYear: 1952, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only', 'Synthesis of heavier elements'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silvery' }
  },
  {
    symbol: 'Fm', name: 'Fermium', atomicNumber: 100, atomicMass: 257,
    electronConfiguration: '[Rn] 5f¹² 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 627,
    atomicRadius: 174, density: 9.7, meltingPoint: 1800, boilingPoint: 2000,
    discoveryYear: 1952, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, atomicMass: 258,
    electronConfiguration: '[Rn] 5f¹³ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 635,
    atomicRadius: 173, density: 10.3, meltingPoint: 1100, boilingPoint: 2000,
    discoveryYear: 1955, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'No', name: 'Nobelium', atomicNumber: 102, atomicMass: 259,
    electronConfiguration: '[Rn] 5f¹⁴ 7s²', group: 3, period: 7, block: 'f',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 642,
    atomicRadius: 171, density: 9.9, meltingPoint: 1100, boilingPoint: 2000,
    discoveryYear: 1957, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, atomicMass: 266,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹ 7s²', group: 3, period: 7, block: 'd',
    category: 'actinide', electronegativity: 1.3, ionizationEnergy: 443,
    atomicRadius: 169, density: 15.6, meltingPoint: 1900, boilingPoint: 2000,
    discoveryYear: 1961, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },

  // Complete Period 5 elements (missing elements)
  {
    symbol: 'Y', name: 'Yttrium', atomicNumber: 39, atomicMass: 88.906,
    electronConfiguration: '[Kr] 4d¹ 5s²', group: 3, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 1.22, ionizationEnergy: 600,
    atomicRadius: 180, density: 4.47, meltingPoint: 1799, boilingPoint: 3609,
    discoveryYear: 1794, discoveredBy: 'Johan Gadolin',
    uses: ['Alloys', 'Superconductors', 'Cancer treatment', 'Lasers'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, atomicMass: 91.224,
    electronConfiguration: '[Kr] 4d² 5s²', group: 4, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 1.33, ionizationEnergy: 640,
    atomicRadius: 175, density: 6.52, meltingPoint: 2128, boilingPoint: 4682,
    discoveryYear: 1789, discoveredBy: 'Martin Heinrich Klaproth',
    uses: ['Nuclear reactors', 'Ceramics', 'Jewelry', 'Chemical equipment'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'grayish white' }
  },
  {
    symbol: 'Nb', name: 'Niobium', atomicNumber: 41, atomicMass: 92.906,
    electronConfiguration: '[Kr] 4d⁴ 5s¹', group: 5, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 1.6, ionizationEnergy: 652,
    atomicRadius: 164, density: 8.57, meltingPoint: 2750, boilingPoint: 5017,
    discoveryYear: 1801, discoveredBy: 'Charles Hatchett',
    uses: ['Steel alloys', 'Superconducting magnets', 'Jet engines', 'Medical implants'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, atomicMass: 95.96,
    electronConfiguration: '[Kr] 4d⁵ 5s¹', group: 6, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 2.16, ionizationEnergy: 684,
    atomicRadius: 154, density: 10.28, meltingPoint: 2896, boilingPoint: 4912,
    discoveryYear: 1781, discoveredBy: 'Peter Jacob Hjelm',
    uses: ['Steel alloys', 'Catalysts', 'Lubricants', 'Fertilizers'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'gray' }
  },
  {
    symbol: 'Tc', name: 'Technetium', atomicNumber: 43, atomicMass: 98,
    electronConfiguration: '[Kr] 4d⁵ 5s²', group: 7, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 1.9, ionizationEnergy: 702,
    atomicRadius: 147, density: 11, meltingPoint: 2430, boilingPoint: 4538,
    discoveryYear: 1937, discoveredBy: 'Emilio Segrè',
    uses: ['Medical imaging', 'Research', 'Corrosion prevention'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, atomicMass: 101.07,
    electronConfiguration: '[Kr] 4d⁷ 5s¹', group: 8, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 2.2, ionizationEnergy: 710,
    atomicRadius: 142, density: 12.45, meltingPoint: 2607, boilingPoint: 4423,
    discoveryYear: 1844, discoveredBy: 'Karl Ernst Claus',
    uses: ['Electronics', 'Catalysts', 'Alloys', 'Solar cells'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, atomicMass: 102.906,
    electronConfiguration: '[Kr] 4d⁸ 5s¹', group: 9, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 2.28, ionizationEnergy: 720,
    atomicRadius: 139, density: 12.41, meltingPoint: 2237, boilingPoint: 3968,
    discoveryYear: 1803, discoveredBy: 'William Hyde Wollaston',
    uses: ['Catalysts', 'Jewelry', 'Chemical equipment', 'Mirrors'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Pd', name: 'Palladium', atomicNumber: 46, atomicMass: 106.42,
    electronConfiguration: '[Kr] 4d¹⁰', group: 10, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 2.20, ionizationEnergy: 804,
    atomicRadius: 137, density: 12.02, meltingPoint: 1828, boilingPoint: 3236,
    discoveryYear: 1803, discoveredBy: 'William Hyde Wollaston',
    uses: ['Catalysts', 'Jewelry', 'Dentistry', 'Electronics'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Ag', name: 'Silver', atomicNumber: 47, atomicMass: 107.868,
    electronConfiguration: '[Kr] 4d¹⁰ 5s¹', group: 11, period: 5, block: 'd',
    category: 'transition-metal', electronegativity: 1.93, ionizationEnergy: 731,
    atomicRadius: 144, density: 10.49, meltingPoint: 1234.93, boilingPoint: 2435,
    discoveryYear: -3000, discoveredBy: 'Ancient',
    uses: ['Jewelry', 'Electronics', 'Photography', 'Medicine'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, atomicMass: 112.411,
    electronConfiguration: '[Kr] 4d¹⁰ 5s²', group: 12, period: 5, block: 'd',
    category: 'post-transition-metal', electronegativity: 1.69, ionizationEnergy: 868,
    atomicRadius: 151, density: 8.65, meltingPoint: 594.22, boilingPoint: 1040,
    discoveryYear: 1817, discoveredBy: 'Friedrich Stromeyer',
    uses: ['Batteries', 'Pigments', 'Coatings', 'Nuclear reactors'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'In', name: 'Indium', atomicNumber: 49, atomicMass: 114.818,
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p¹', group: 13, period: 5, block: 'p',
    category: 'post-transition-metal', electronegativity: 1.78, ionizationEnergy: 558,
    atomicRadius: 156, density: 7.31, meltingPoint: 429.75, boilingPoint: 2345,
    discoveryYear: 1863, discoveredBy: 'Ferdinand Reich',
    uses: ['LCD screens', 'Solar panels', 'Semiconductors', 'Alloys'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Sn', name: 'Tin', atomicNumber: 50, atomicMass: 118.71,
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p²', group: 14, period: 5, block: 'p',
    category: 'post-transition-metal', electronegativity: 1.96, ionizationEnergy: 709,
    atomicRadius: 145, density: 7.287, meltingPoint: 505.08, boilingPoint: 2875,
    discoveryYear: -3500, discoveredBy: 'Ancient',
    uses: ['Cans', 'Solder', 'Alloys', 'Coatings'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Sb', name: 'Antimony', atomicNumber: 51, atomicMass: 121.76,
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p³', group: 15, period: 5, block: 'p',
    category: 'metalloid', electronegativity: 2.05, ionizationEnergy: 834,
    atomicRadius: 133, density: 6.697, meltingPoint: 903.78, boilingPoint: 1860,
    discoveryYear: 1540, discoveredBy: 'Vannoccio Biringuccio',
    uses: ['Flame retardants', 'Alloys', 'Semiconductors', 'Medicine'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Te', name: 'Tellurium', atomicNumber: 52, atomicMass: 127.6,
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁴', group: 16, period: 5, block: 'p',
    category: 'metalloid', electronegativity: 2.1, ionizationEnergy: 869,
    atomicRadius: 123, density: 6.24, meltingPoint: 722.66, boilingPoint: 1261,
    discoveryYear: 1782, discoveredBy: 'Franz-Joseph Müller von Reichenstein',
    uses: ['Solar panels', 'Thermoelectrics', 'Alloys', 'Catalysts'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'I', name: 'Iodine', atomicNumber: 53, atomicMass: 126.904,
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁵', group: 17, period: 5, block: 'p',
    category: 'reactive-nonmetal', electronegativity: 2.66, ionizationEnergy: 1008,
    atomicRadius: 115, density: 4.933, meltingPoint: 386.85, boilingPoint: 457.4,
    discoveryYear: 1811, discoveredBy: 'Bernard Courtois',
    uses: ['Disinfectants', 'Photography', 'Medicine', 'Dyes'],
    properties: { metallic: false, radioactive: false, state: 'solid', color: 'violet' }
  },
  {
    symbol: 'Xe', name: 'Xenon', atomicNumber: 54, atomicMass: 131.293,
    electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁶', group: 18, period: 5, block: 'p',
    category: 'noble-gas', ionizationEnergy: 1170, atomicRadius: 108,
    density: 0.005887, meltingPoint: 161.4, boilingPoint: 165.03,
    discoveryYear: 1898, discoveredBy: 'William Ramsay',
    uses: ['Lighting', 'Anesthesia', 'Ion propulsion', 'Lasers'],
    properties: { metallic: false, radioactive: false, state: 'gas', color: 'colorless' }
  },

  // Complete Period 6 elements
  {
    symbol: 'Ce', name: 'Cerium', atomicNumber: 58, atomicMass: 140.116,
    electronConfiguration: '[Xe] 4f¹ 5d¹ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.12, ionizationEnergy: 534,
    atomicRadius: 204, density: 6.770, meltingPoint: 1068, boilingPoint: 3716,
    discoveryYear: 1803, discoveredBy: 'Jöns Jacob Berzelius',
    uses: ['Catalysts', 'Glass polishing', 'Lighter flints', 'Self-cleaning ovens'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, atomicMass: 140.908,
    electronConfiguration: '[Xe] 4f³ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.13, ionizationEnergy: 527,
    atomicRadius: 203, density: 6.77, meltingPoint: 1208, boilingPoint: 3793,
    discoveryYear: 1885, discoveredBy: 'Carl Auer von Welsbach',
    uses: ['Magnets', 'Lasers', 'Carbon arc lighting', 'Alloys'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, atomicMass: 144.242,
    electronConfiguration: '[Xe] 4f⁴ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.14, ionizationEnergy: 533,
    atomicRadius: 201, density: 7.01, meltingPoint: 1297, boilingPoint: 3347,
    discoveryYear: 1885, discoveredBy: 'Carl Auer von Welsbach',
    uses: ['Permanent magnets', 'Lasers', 'Glass coloring', 'Headphones'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Pm', name: 'Promethium', atomicNumber: 61, atomicMass: 145,
    electronConfiguration: '[Xe] 4f⁵ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.13, ionizationEnergy: 540,
    atomicRadius: 199, density: 7.26, meltingPoint: 1315, boilingPoint: 3273,
    discoveryYear: 1945, discoveredBy: 'Jacob A. Marinsky',
    uses: ['Nuclear batteries', 'Luminous paint', 'Thickness gauges'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'metallic' }
  },
  {
    symbol: 'Sm', name: 'Samarium', atomicNumber: 62, atomicMass: 150.36,
    electronConfiguration: '[Xe] 4f⁶ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.17, ionizationEnergy: 544,
    atomicRadius: 198, density: 7.52, meltingPoint: 1345, boilingPoint: 2173,
    discoveryYear: 1879, discoveredBy: 'Lecoq de Boisbaudran',
    uses: ['Magnets', 'Nuclear reactors', 'Lasers', 'Cancer treatment'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Eu', name: 'Europium', atomicNumber: 63, atomicMass: 151.964,
    electronConfiguration: '[Xe] 4f⁷ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.2, ionizationEnergy: 547,
    atomicRadius: 198, density: 5.24, meltingPoint: 1099, boilingPoint: 1802,
    discoveryYear: 1901, discoveredBy: 'Eugène-Anatole Demarçay',
    uses: ['Phosphors', 'Euro banknotes', 'TV screens', 'Nuclear reactors'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, atomicMass: 157.25,
    electronConfiguration: '[Xe] 4f⁷ 5d¹ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.20, ionizationEnergy: 593,
    atomicRadius: 196, density: 7.90, meltingPoint: 1585, boilingPoint: 3546,
    discoveryYear: 1880, discoveredBy: 'Jean Charles Galissard de Marignac',
    uses: ['MRI contrast agents', 'Nuclear reactors', 'Data storage', 'Magnets'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Tb', name: 'Terbium', atomicNumber: 65, atomicMass: 158.925,
    electronConfiguration: '[Xe] 4f⁹ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.20, ionizationEnergy: 565,
    atomicRadius: 194, density: 8.23, meltingPoint: 1629, boilingPoint: 3503,
    discoveryYear: 1843, discoveredBy: 'Carl Gustaf Mosander',
    uses: ['Fluorescent lamps', 'Magnets', 'TV tubes', 'Lasers'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, atomicMass: 162.500,
    electronConfiguration: '[Xe] 4f¹⁰ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.22, ionizationEnergy: 573,
    atomicRadius: 192, density: 8.55, meltingPoint: 1680, boilingPoint: 2840,
    discoveryYear: 1886, discoveredBy: 'Lecoq de Boisbaudran',
    uses: ['Magnets', 'Nuclear reactors', 'Data storage', 'Lasers'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Ho', name: 'Holmium', atomicNumber: 67, atomicMass: 164.930,
    electronConfiguration: '[Xe] 4f¹¹ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.23, ionizationEnergy: 581,
    atomicRadius: 192, density: 8.80, meltingPoint: 1734, boilingPoint: 2993,
    discoveryYear: 1878, discoveredBy: 'Per Teodor Cleve',
    uses: ['Magnets', 'Lasers', 'Nuclear reactors', 'Medical applications'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Er', name: 'Erbium', atomicNumber: 68, atomicMass: 167.259,
    electronConfiguration: '[Xe] 4f¹² 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.24, ionizationEnergy: 589,
    atomicRadius: 189, density: 9.07, meltingPoint: 1802, boilingPoint: 3141,
    discoveryYear: 1843, discoveredBy: 'Carl Gustaf Mosander',
    uses: ['Fiber optics', 'Lasers', 'Nuclear technology', 'Alloys'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Tm', name: 'Thulium', atomicNumber: 69, atomicMass: 168.934,
    electronConfiguration: '[Xe] 4f¹³ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.25, ionizationEnergy: 597,
    atomicRadius: 190, density: 9.32, meltingPoint: 1818, boilingPoint: 2223,
    discoveryYear: 1879, discoveredBy: 'Per Teodor Cleve',
    uses: ['X-ray machines', 'Lasers', 'Research', 'High temperature superconductors'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, atomicMass: 173.045,
    electronConfiguration: '[Xe] 4f¹⁴ 6s²', group: 3, period: 6, block: 'f',
    category: 'lanthanide', electronegativity: 1.1, ionizationEnergy: 603,
    atomicRadius: 187, density: 6.90, meltingPoint: 1097, boilingPoint: 1469,
    discoveryYear: 1878, discoveredBy: 'Jean Charles Galissard de Marignac',
    uses: ['Lasers', 'Steel alloys', 'Stress gauges', 'Medical applications'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },
  {
    symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, atomicMass: 174.9668,
    electronConfiguration: '[Xe] 4f¹⁴ 5d¹ 6s²', group: 3, period: 6, block: 'd',
    category: 'lanthanide', electronegativity: 1.27, ionizationEnergy: 524,
    atomicRadius: 187, density: 9.84, meltingPoint: 1925, boilingPoint: 3675,
    discoveryYear: 1907, discoveredBy: 'Georges Urbain',
    uses: ['Medical imaging', 'High refractive index glass', 'Research', 'Catalysts'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver' }
  },

  // Heavy metals and transition metals (Period 6)
  {
    symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, atomicMass: 178.49,
    electronConfiguration: '[Xe] 4f¹⁴ 5d² 6s²', group: 4, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 1.3, ionizationEnergy: 659,
    atomicRadius: 159, density: 13.31, meltingPoint: 2506, boilingPoint: 4876,
    discoveryYear: 1923, discoveredBy: 'Dirk Coster',
    uses: ['Nuclear reactors', 'Aerospace', 'Plasma cutting', 'Microprocessors'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silver gray' }
  },
  {
    symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, atomicMass: 180.948,
    electronConfiguration: '[Xe] 4f¹⁴ 5d³ 6s²', group: 5, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 1.5, ionizationEnergy: 761,
    atomicRadius: 146, density: 16.69, meltingPoint: 3290, boilingPoint: 5731,
    discoveryYear: 1802, discoveredBy: 'Anders Gustaf Ekeberg',
    uses: ['Electronics', 'Medical implants', 'Chemical equipment', 'Aerospace'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'gray blue' }
  },
  {
    symbol: 'W', name: 'Tungsten', atomicNumber: 74, atomicMass: 183.84,
    electronConfiguration: '[Xe] 4f¹⁴ 5d⁴ 6s²', group: 6, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 2.36, ionizationEnergy: 770,
    atomicRadius: 139, density: 19.25, meltingPoint: 3695, boilingPoint: 5828,
    discoveryYear: 1783, discoveredBy: 'Juan José Elhuyar',
    uses: ['Light bulb filaments', 'X-ray tubes', 'Military projectiles', 'Cutting tools'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'grayish white' }
  },
  {
    symbol: 'Re', name: 'Rhenium', atomicNumber: 75, atomicMass: 186.207,
    electronConfiguration: '[Xe] 4f¹⁴ 5d⁵ 6s²', group: 7, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 1.9, ionizationEnergy: 760,
    atomicRadius: 137, density: 21.02, meltingPoint: 3459, boilingPoint: 5869,
    discoveryYear: 1925, discoveredBy: 'Walter Noddack',
    uses: ['Jet engines', 'Catalysts', 'Electrical contacts', 'X-ray machines'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silvery gray' }
  },
  {
    symbol: 'Os', name: 'Osmium', atomicNumber: 76, atomicMass: 190.23,
    electronConfiguration: '[Xe] 4f¹⁴ 5d⁶ 6s²', group: 8, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 2.2, ionizationEnergy: 840,
    atomicRadius: 135, density: 22.59, meltingPoint: 3306, boilingPoint: 5285,
    discoveryYear: 1803, discoveredBy: 'Smithson Tennant',
    uses: ['Fountain pen tips', 'Electrical contacts', 'Catalysts', 'Alloys'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'bluish gray' }
  },
  {
    symbol: 'Ir', name: 'Iridium', atomicNumber: 77, atomicMass: 192.217,
    electronConfiguration: '[Xe] 4f¹⁴ 5d⁷ 6s²', group: 9, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 2.20, ionizationEnergy: 880,
    atomicRadius: 136, density: 22.56, meltingPoint: 2719, boilingPoint: 4701,
    discoveryYear: 1803, discoveredBy: 'Smithson Tennant',
    uses: ['Spark plugs', 'Crucibles', 'Electrical contacts', 'Cancer treatment'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'silvery white' }
  },
  {
    symbol: 'Pt', name: 'Platinum', atomicNumber: 78, atomicMass: 195.084,
    electronConfiguration: '[Xe] 4f¹⁴ 5d⁹ 6s¹', group: 10, period: 6, block: 'd',
    category: 'transition-metal', electronegativity: 2.28, ionizationEnergy: 870,
    atomicRadius: 139, density: 21.46, meltingPoint: 2041.4, boilingPoint: 4098,
    discoveryYear: 1735, discoveredBy: 'Antonio de Ulloa',
    uses: ['Catalysts', 'Jewelry', 'Medical equipment', 'Electronics'],
    properties: { metallic: true, radioactive: false, state: 'solid', color: 'grayish white' }
  },

  // Complete with synthetic elements
  {
    symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, atomicMass: 267,
    electronConfiguration: '[Rn] 5f¹⁴ 6d² 7s²', group: 4, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 580, atomicRadius: 150,
    density: 23, meltingPoint: 2400, boilingPoint: 5800,
    discoveryYear: 1964, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Db', name: 'Dubnium', atomicNumber: 105, atomicMass: 268,
    electronConfiguration: '[Rn] 5f¹⁴ 6d³ 7s²', group: 5, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 665, atomicRadius: 149,
    density: 29, meltingPoint: 2900, boilingPoint: 6200,
    discoveryYear: 1967, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, atomicMass: 269,
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁴ 7s²', group: 6, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 757, atomicRadius: 148,
    density: 35, meltingPoint: 3100, boilingPoint: 6500,
    discoveryYear: 1974, discoveredBy: 'Albert Ghiorso',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, atomicMass: 270,
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁵ 7s²', group: 7, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 740, atomicRadius: 141,
    density: 37, meltingPoint: 3200, boilingPoint: 6700,
    discoveryYear: 1981, discoveredBy: 'Peter Armbruster',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Hs', name: 'Hassium', atomicNumber: 108, atomicMass: 269,
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁶ 7s²', group: 8, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 730, atomicRadius: 134,
    density: 41, meltingPoint: 3300, boilingPoint: 6900,
    discoveryYear: 1984, discoveredBy: 'Peter Armbruster',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, atomicMass: 278,
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁷ 7s²', group: 9, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 800, atomicRadius: 129,
    density: 37.4, meltingPoint: 3400, boilingPoint: 7100,
    discoveryYear: 1982, discoveredBy: 'Peter Armbruster',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, atomicMass: 281,
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁸ 7s²', group: 10, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 960, atomicRadius: 128,
    density: 34.8, meltingPoint: 3500, boilingPoint: 7300,
    discoveryYear: 1994, discoveredBy: 'Sigurd Hofmann',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, atomicMass: 282,
    electronConfiguration: '[Rn] 5f¹⁴ 6d⁹ 7s²', group: 11, period: 7, block: 'd',
    category: 'transition-metal', ionizationEnergy: 1020, atomicRadius: 121,
    density: 28.7, meltingPoint: 3600, boilingPoint: 7500,
    discoveryYear: 1994, discoveredBy: 'Sigurd Hofmann',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, atomicMass: 285,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', group: 12, period: 7, block: 'd',
    category: 'post-transition-metal', ionizationEnergy: 1155, atomicRadius: 122,
    density: 23.7, meltingPoint: 283, boilingPoint: 340,
    discoveryYear: 1996, discoveredBy: 'Sigurd Hofmann',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'liquid', color: 'unknown' }
  },
  {
    symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, atomicMass: 286,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', group: 13, period: 7, block: 'p',
    category: 'post-transition-metal', ionizationEnergy: 704, atomicRadius: 136,
    density: 16, meltingPoint: 700, boilingPoint: 1400,
    discoveryYear: 2004, discoveredBy: 'Kosuke Morita',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, atomicMass: 289,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', group: 14, period: 7, block: 'p',
    category: 'post-transition-metal', ionizationEnergy: 832, atomicRadius: 143,
    density: 14, meltingPoint: 340, boilingPoint: 420,
    discoveryYear: 1998, discoveredBy: 'Yuri Oganessian',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, atomicMass: 290,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', group: 15, period: 7, block: 'p',
    category: 'post-transition-metal', ionizationEnergy: 538, atomicRadius: 162,
    density: 13.5, meltingPoint: 670, boilingPoint: 1400,
    discoveryYear: 2003, discoveredBy: 'Yuri Oganessian',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, atomicMass: 293,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', group: 16, period: 7, block: 'p',
    category: 'post-transition-metal', ionizationEnergy: 663, atomicRadius: 175,
    density: 12.9, meltingPoint: 709, boilingPoint: 1085,
    discoveryYear: 2000, discoveredBy: 'Yuri Oganessian',
    uses: ['Research only'],
    properties: { metallic: true, radioactive: true, state: 'solid', color: 'unknown' }
  },
  {
    symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, atomicMass: 294,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', group: 17, period: 7, block: 'p',
    category: 'reactive-nonmetal', ionizationEnergy: 742, atomicRadius: 165,
    density: 7.2, meltingPoint: 723, boilingPoint: 883,
    discoveryYear: 2010, discoveredBy: 'Yuri Oganessian',
    uses: ['Research only'],
    properties: { metallic: false, radioactive: true, state: 'solid', color: 'unknown' }
  },
  // Super heavy elements
  {
    symbol: 'Og', name: 'Oganesson', atomicNumber: 118, atomicMass: 294,
    electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', group: 18, period: 7, block: 'p',
    category: 'noble-gas', ionizationEnergy: 860, atomicRadius: 152,
    density: 4.95, meltingPoint: 52, boilingPoint: 177,
    discoveryYear: 2002, discoveredBy: 'Yuri Oganessian',
    uses: ['Research only'],
    properties: { metallic: false, radioactive: true, state: 'gas', color: 'unknown' }
  }
];

export const getElementBySymbol = (symbol: string): Element | undefined => {
  return periodicTableData.find(element => element.symbol === symbol);
};

export const getElementByAtomicNumber = (atomicNumber: number): Element | undefined => {
  return periodicTableData.find(element => element.atomicNumber === atomicNumber);
};

export const getElementsByCategory = (category: string): Element[] => {
  return periodicTableData.filter(element => element.category === category);
};

export const searchElements = (query: string): Element[] => {
  const queryLower = query.toLowerCase();
  return periodicTableData.filter(element => 
    element.name.toLowerCase().includes(queryLower) ||
    element.symbol.toLowerCase().includes(queryLower) ||
    element.uses.some(use => use.toLowerCase().includes(queryLower))
  );
};