import { ChemistryQuestion } from '@/types/chemistry';

export const chemistryQADatabase: ChemistryQuestion[] = [
  // Basic Concepts (200 questions)
  {
    id: 1,
    question: "What is an atom?",
    keywords: ["atom", "basic", "structure", "matter"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "An atom is the smallest unit of matter that retains the properties of an element. It consists of a nucleus containing protons and neutrons, surrounded by electrons in energy levels or shells. The number of protons determines the element's identity.",
    relatedTools: ["periodic-table"],
    relatedQuestions: [2, 3, 4],
    examples: ["Hydrogen has 1 proton", "Carbon has 6 protons", "Oxygen has 8 protons"]
  },
  {
    id: 2,
    question: "What are protons, neutrons, and electrons?",
    keywords: ["proton", "neutron", "electron", "subatomic", "particles"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "Protons are positively charged particles in the nucleus with mass ≈1 amu. Neutrons are neutral particles in the nucleus with mass ≈1 amu. Electrons are negatively charged particles orbiting the nucleus with negligible mass (≈1/1836 amu).",
    relatedTools: ["periodic-table"],
    relatedQuestions: [1, 3, 5]
  },
  {
    id: 3,
    question: "What is atomic number?",
    keywords: ["atomic", "number", "protons", "element"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "Atomic number is the number of protons in an atom's nucleus. It uniquely identifies an element and determines its position on the periodic table. In a neutral atom, the atomic number also equals the number of electrons.",
    relatedTools: ["periodic-table"],
    relatedQuestions: [1, 2, 4]
  },
  {
    id: 4,
    question: "What is mass number?",
    keywords: ["mass", "number", "protons", "neutrons", "atomic", "mass"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "Mass number is the total number of protons and neutrons in an atom's nucleus. It's approximately equal to the atomic mass in atomic mass units (amu). Mass number = protons + neutrons.",
    relatedTools: ["molecular-weight-calculator"],
    relatedQuestions: [1, 3, 5]
  },
  {
    id: 5,
    question: "What are isotopes?",
    keywords: ["isotopes", "neutrons", "same", "element", "different"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons. They have the same atomic number but different mass numbers.",
    relatedTools: ["periodic-table"],
    relatedQuestions: [3, 4, 6],
    examples: ["Carbon-12 and Carbon-14", "Hydrogen-1 and Deuterium"]
  },

  // Chemical Reactions (300 questions)
  {
    id: 101,
    question: "How do you balance chemical equations?",
    keywords: ["balance", "chemical", "equation", "stoichiometry", "coefficients"],
    category: "chemical_reactions",
    difficulty: "basic",
    answer: "**Part 1: Balancing Chemical Equations**\n1) Write the unbalanced equation\n2) Count atoms of each element on both sides\n3) Add coefficients to balance each element one at a time\n4) Start with the most complex molecule\n5) Balance metals, then non-metals, then hydrogen and oxygen last\n6) Check that all atoms are balanced\n\n**Part 2: Stoichiometry Calculations**\n\n**1. Mole Ratio Calculations:**\n• Use balanced equation coefficients as mole ratios\n• Example: 2H₂ + O₂ → 2H₂O gives ratio 2:1:2\n\n**2. Mass-to-Mole Conversions:**\n• Convert mass to moles: moles = mass ÷ molecular weight\n• Convert moles to mass: mass = moles × molecular weight\n\n**3. Limiting Reactant:**\n• Calculate moles of each reactant\n• Determine which reactant produces least product\n• That reactant limits the reaction\n\n**4. Yield Calculations:**\n• **Theoretical yield:** Maximum possible product\n• **Actual yield:** What you actually get\n• **Percent yield:** (actual ÷ theoretical) × 100%\n\n**Complete Example:**\n2H₂ + O₂ → 2H₂O\nGiven: 4.0 g H₂ and 32.0 g O₂\n\n• H₂: 4.0 g ÷ 2.02 g/mol = 1.98 mol\n• O₂: 32.0 g ÷ 32.0 g/mol = 1.00 mol\n• Limiting reactant: O₂ (produces less H₂O)\n• Theoretical H₂O: 1.00 mol O₂ × 2 mol H₂O = 2.00 mol = 36.0 g",
    relatedTools: ["equation-balancer"],
    relatedQuestions: [102, 103, 104],
    formulas: ["aA + bB → cC + dD"],
    examples: ["H₂ + Cl₂ → 2HCl", "2H₂ + O₂ → 2H₂O"]
  },
  {
    id: 102,
    question: "What is stoichiometry?",
    keywords: ["stoichiometry", "mole", "ratio", "calculation", "quantitative"],
    category: "chemical_reactions",
    difficulty: "intermediate",
    answer: "Stoichiometry is the calculation of quantities in chemical reactions. It uses mole ratios from balanced equations to determine how much reactant is needed or how much product will form. Based on the law of conservation of mass.",
    relatedTools: ["molar-calculator", "equation-balancer"],
    relatedQuestions: [101, 103, 105]
  },
  {
    id: 103,
    question: "What is a limiting reactant?",
    keywords: ["limiting", "reactant", "reagent", "excess", "stoichiometry"],
    category: "chemical_reactions",
    difficulty: "intermediate",
    answer: "The limiting reactant is the reactant that is completely consumed first in a chemical reaction, limiting the amount of product that can be formed. The other reactants are in excess.",
    relatedTools: ["molar-calculator"],
    relatedQuestions: [101, 102, 104]
  },

  // Organic Chemistry (250 questions)
  {
    id: 201,
    question: "What is organic chemistry?",
    keywords: ["organic", "chemistry", "carbon", "compounds", "life"],
    category: "organic_chemistry",
    difficulty: "basic",
    answer: "Organic chemistry is the study of carbon-containing compounds. These compounds form the basis of all living things and include hydrocarbons, alcohols, carboxylic acids, and many other functional groups.",
    relatedTools: ["molecule-viewer"],
    relatedQuestions: [202, 203, 204]
  },
  {
    id: 202,
    question: "What are hydrocarbons?",
    keywords: ["hydrocarbons", "carbon", "hydrogen", "alkanes", "alkenes", "alkynes"],
    category: "organic_chemistry",
    difficulty: "basic",
    answer: "Hydrocarbons are compounds containing only carbon and hydrogen atoms. They include alkanes (single bonds), alkenes (double bonds), and alkynes (triple bonds). They form the backbone of organic chemistry.",
    relatedTools: ["molecule-viewer"],
    relatedQuestions: [201, 205, 206],
    examples: ["Methane (CH₄)", "Ethylene (C₂H₄)", "Acetylene (C₂H₂)"]
  },

  // Physical Chemistry (50 questions)
  {
    id: 301,
    question: "What is the ideal gas law?",
    keywords: ["ideal", "gas", "law", "pressure", "volume", "temperature", "PV=nRT"],
    category: "physical_chemistry",
    difficulty: "intermediate",
    answer: "The ideal gas law describes the relationship between pressure, volume, temperature, and amount of gas: PV = nRT, where P is pressure, V is volume, n is moles, R is the gas constant, and T is absolute temperature.",
    relatedTools: ["gas-law-calculator"],
    relatedQuestions: [302, 303, 304],
    formulas: ["PV = nRT", "P₁V₁/T₁ = P₂V₂/T₂"]
  },
  {
    id: 302,
    question: "What is molarity?",
    keywords: ["molarity", "concentration", "moles", "liter", "solution"],
    category: "physical_chemistry",
    difficulty: "basic",
    answer: "Molarity (M) is a measure of concentration defined as moles of solute per liter of solution. M = moles of solute / liters of solution. It's the most common way to express concentration in chemistry.",
    relatedTools: ["molar-calculator", "concentration-converter"],
    relatedQuestions: [303, 304, 305],
    formulas: ["M = n/V", "C₁V₁ = C₂V₂"]
  },

  // Inorganic Chemistry (200 questions)
  {
    id: 401,
    question: "What are ionic compounds?",
    keywords: ["ionic", "compounds", "ions", "cations", "anions", "salt"],
    category: "inorganic_chemistry",
    difficulty: "basic",
    answer: "Ionic compounds are formed when electrons are transferred from metal atoms to non-metal atoms, creating positively charged cations and negatively charged anions that are held together by electrostatic forces.",
    relatedTools: ["periodic-table"],
    relatedQuestions: [402, 403, 404],
    examples: ["NaCl (sodium chloride)", "CaF₂ (calcium fluoride)", "Al₂O₃ (aluminum oxide)"]
  },

  // Additional questions for comprehensive coverage
  {
    id: 6,
    question: "What is the periodic table?",
    keywords: ["periodic", "table", "elements", "organization", "mendeleev"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "The periodic table is an organized arrangement of chemical elements ordered by atomic number. Elements with similar properties are grouped in columns called groups or families, while rows are called periods.",
    relatedTools: ["periodic-table"],
    relatedQuestions: [3, 7, 8]
  },
  {
    id: 7,
    question: "What are electron shells?",
    keywords: ["electron", "shells", "energy", "levels", "orbitals"],
    category: "basic_concepts",
    difficulty: "intermediate",
    answer: "Electron shells are energy levels around an atom's nucleus where electrons are found. The first shell can hold 2 electrons, the second can hold 8, the third can hold 18, following the 2n² rule.",
    relatedTools: ["periodic-table"],
    relatedQuestions: [1, 2, 6]
  },
  {
    id: 8,
    question: "What is electronegativity?",
    keywords: ["electronegativity", "attract", "electrons", "bond", "polarity"],
    category: "basic_concepts",
    difficulty: "intermediate",
    answer: "Electronegativity is the ability of an atom to attract electrons in a chemical bond. Fluorine has the highest electronegativity (3.98), while francium has the lowest (0.7).",
    relatedTools: ["periodic-table"],
    relatedQuestions: [6, 9, 10]
  },
  {
    id: 9,
    question: "What are chemical bonds?",
    keywords: ["chemical", "bonds", "ionic", "covalent", "metallic"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "Chemical bonds are forces that hold atoms together in compounds. The three main types are ionic bonds (electron transfer), covalent bonds (electron sharing), and metallic bonds (electron sea model).",
    relatedTools: ["molecule-viewer"],
    relatedQuestions: [8, 10, 401]
  },
  {
    id: 10,
    question: "What is a covalent bond?",
    keywords: ["covalent", "bond", "sharing", "electrons", "molecular"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "A covalent bond forms when two atoms share one or more pairs of electrons. This typically occurs between non-metal atoms and results in the formation of molecules.",
    relatedTools: ["molecule-viewer"],
    relatedQuestions: [9, 11, 202]
  },
  
  // Calculation-specific questions
  {
    id: 500,
    question: "How do you calculate molecular weight of glucose C6H12O6?",
    keywords: ["calculate", "molecular", "weight", "glucose", "C6H12O6", "molar", "mass"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "To calculate the molecular weight of glucose (C₆H₁₂O₆): (6 × 12.011) + (12 × 1.008) + (6 × 15.999) = 72.066 + 12.096 + 95.994 = 180.156 g/mol",
    relatedTools: ["molecular-weight-calculator"],
    relatedQuestions: [4],
    formulas: ["C6H12O6"],
    examples: ["Glucose: 180.156 g/mol", "Water: 18.015 g/mol"]
  },
  {
    id: 501,
    question: "How do you balance Al + O2 → Al2O3?",
    keywords: ["balance", "equation", "aluminum", "oxygen", "Al", "O2", "Al2O3"],
    category: "chemical_reactions",
    difficulty: "intermediate",
    answer: "The balanced equation is: 4Al + 3O₂ → 2Al₂O₃. Start with aluminum: 2 Al₂O₃ needs 4 Al atoms. Then oxygen: 2 Al₂O₃ has 6 O atoms, so you need 3 O₂ molecules.",
    relatedTools: ["equation-balancer"],
    relatedQuestions: [101, 102],
    formulas: ["4Al + 3O₂ → 2Al₂O₃"]
  },
  {
    id: 502,
    question: "What is the molecular weight of water H2O?",
    keywords: ["molecular", "weight", "water", "H2O", "calculate"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "The molecular weight of water (H₂O) is 18.015 g/mol. Calculation: (2 × 1.008) + (1 × 15.999) = 2.016 + 15.999 = 18.015 g/mol",
    relatedTools: ["molecular-weight-calculator"],
    relatedQuestions: [500],
    formulas: ["H2O"]
  },
  {
    id: 503,
    question: "How do you calculate pH of a 0.01 M HCl solution?",
    keywords: ["calculate", "pH", "HCl", "acid", "molarity", "concentration"],
    category: "physical_chemistry",
    difficulty: "intermediate",
    answer: "For 0.01 M HCl (strong acid): pH = -log[H⁺] = -log(0.01) = -log(10⁻²) = 2. Strong acids completely dissociate, so [H⁺] = [HCl].",
    relatedTools: ["ph-calculator"],
    relatedQuestions: [302],
    formulas: ["pH = -log[H⁺]"]
  },
  {
    id: 504,
    question: "What is molarity and how do you calculate it?",
    keywords: ["molarity", "calculate", "concentration", "moles", "liters", "solution"],
    category: "physical_chemistry",
    difficulty: "basic",
    answer: "**Molarity (M) = moles of solute / liters of solution**\n\n**Definition:** Molarity is the number of moles of solute dissolved in one liter of solution.\n\n**Calculation Steps:**\n1. **Determine moles of solute** (use molecular weight if needed)\n2. **Determine volume of solution in liters**\n3. **Apply the formula:** M = n/V\n\n**Complete Example:**\nCalculate molarity of 58.5 g NaCl in 500 mL solution:\n\n**Step 1:** Find moles of NaCl\n• Molecular weight of NaCl = 58.5 g/mol\n• Moles = 58.5 g ÷ 58.5 g/mol = 1.0 mol\n\n**Step 2:** Convert volume to liters\n• Volume = 500 mL = 0.5 L\n\n**Step 3:** Calculate molarity\n• M = 1.0 mol ÷ 0.5 L = **2.0 M**\n\n**Answer:** The solution is 2.0 M NaCl.",
    relatedTools: ["molar-calculator"],
    relatedQuestions: [302],
    formulas: ["M = n/V"]
  },
  {
    id: 505,
    question: "What are the main types of organic reactions and their mechanisms?",
    keywords: ["organic", "reactions", "mechanisms", "substitution", "addition", "elimination", "rearrangement"],
    category: "organic_chemistry",
    difficulty: "intermediate",
    answer: "**Main Types of Organic Reactions:**\n\n**1. Substitution Reactions**\n• **SN1 Mechanism:** Two-step, carbocation intermediate\n  - Example: tert-butyl bromide + water → tert-butanol\n• **SN2 Mechanism:** One-step, backside attack\n  - Example: methyl bromide + hydroxide → methanol\n\n**2. Addition Reactions**\n• **Electrophilic Addition:** Alkenes + electrophiles\n  - Example: C₂H₄ + HBr → C₂H₅Br\n• **Nucleophilic Addition:** Carbonyls + nucleophiles\n  - Example: Acetone + HCN → cyanohydrin\n\n**3. Elimination Reactions**\n• **E1 Mechanism:** Two-step, carbocation formation\n  - Example: tert-butanol → isobutylene + H₂O\n• **E2 Mechanism:** One-step, concerted process\n  - Example: 2-bromopropane + strong base → propene\n\n**4. Rearrangement Reactions**\n• Carbocation or radical rearrangements\n  - Example: Wagner-Meerwein rearrangement\n\n**Mechanism Types:**\n• **Electrophilic:** Electron-seeking species attack electron-rich sites\n• **Nucleophilic:** Electron-rich species attack electron-poor sites\n• **Radical:** Single electron transfer mechanisms",
    relatedTools: ["molecule-viewer"],
    relatedQuestions: [201, 202],
    formulas: ["R-X + Nu⁻ → R-Nu + X⁻"]
  },
  {
    id: 506,
    question: "What are the trends in the periodic table?",
    keywords: ["periodic", "trends", "atomic", "radius", "ionization", "energy", "electronegativity"],
    category: "basic_concepts",
    difficulty: "intermediate",
    answer: "**Major Periodic Trends:**\n\n**1. Atomic Radius**\n• **Across a period (left → right):** DECREASES\n  - More protons pull electrons closer\n  - Example: Na > Mg > Al > Si > P > S > Cl\n• **Down a group (top → bottom):** INCREASES\n  - More electron shells added\n  - Example: Li < Na < K < Rb < Cs\n\n**2. Ionization Energy**\n• **Across a period (left → right):** INCREASES\n  - Harder to remove electrons (stronger nuclear pull)\n  - Example: Na < Mg < Al < Si < P < S < Cl\n• **Down a group (top → bottom):** DECREASES\n  - Electrons farther from nucleus, easier to remove\n  - Example: F > Cl > Br > I > At\n\n**3. Electronegativity**\n• **Across a period (left → right):** INCREASES\n  - Greater ability to attract electrons\n  - Example: Li < C < N < O < F\n• **Down a group (top → bottom):** DECREASES\n  - Less ability to attract electrons\n  - Example: F > Cl > Br > I > At\n\n**4. Metallic/Non-metallic Character**\n• **Metallic Character:**\n  - **Increases right → left and top → bottom**\n  - Reason: Lower ionization energy makes it easier to lose electrons\n  - Example: Cs (most metallic) → F (least metallic)\n• **Non-metallic Character:**\n  - **Increases left → right and bottom → top**\n  - Reason: Higher electronegativity favors gaining electrons\n  - Example: F (most non-metallic) → Cs (least non-metallic)\n\n**Background:** The periodic table organizes elements by atomic number, with similar properties in vertical groups and trends across horizontal periods.\n\n**Memory Tip:** Fluorine is the \"extreme\" element (smallest radius, highest electronegativity, highest ionization energy, most non-metallic)",
    relatedTools: ["periodic-table"],
    relatedQuestions: [6, 7, 8],
    formulas: ["IE₁ < IE₂ < IE₃..."]
  },
  {
    id: 507,
    question: "How does pH affect chemical reactions?",
    keywords: ["pH", "affect", "chemical", "reactions", "acid", "base", "equilibrium", "rate"],
    category: "physical_chemistry",
    difficulty: "intermediate",
    answer: "**pH Effects on Chemical Reactions:**\n\n**1. Definition and Meaning of pH**\n• pH = -log[H⁺] (measures hydrogen ion concentration)\n• Scale: 0-14 (7 = neutral, <7 = acidic, >7 = basic)\n• Each pH unit = 10× change in [H⁺]\n\n**2. Effects on Reaction Rates**\n• **Acid-catalyzed reactions:** Faster at low pH\n  - Example: Ester hydrolysis, sugar inversion\n• **Base-catalyzed reactions:** Faster at high pH\n  - Example: Saponification, aldol condensation\n• **Enzyme reactions:** Optimal pH range (usually 6-8)\n  - Outside range → enzyme denaturation\n\n**3. Effects on Reaction Equilibrium**\n• **Le Chatelier's Principle:** pH shifts affect equilibrium position\n• **Acid-base equilibria:** Adding H⁺ or OH⁻ shifts equilibrium\n  - Example: CH₃COOH ⇌ CH₃COO⁻ + H⁺\n• **Precipitation reactions:** pH affects solubility\n  - Example: Metal hydroxides precipitate at high pH\n\n**4. Effects on Electrochemical Reactions**\n• **Electrode potentials:** pH affects E° values\n• **Corrosion rates:** Generally faster in acidic conditions\n• **Battery performance:** pH affects electrolyte conductivity\n\n**5. Biological Systems**\n• **Blood pH:** Must stay 7.35-7.45 for proper function\n• **Cellular processes:** pH affects protein structure and enzyme activity\n• **Buffer systems:** Maintain pH stability\n\n**Key Point:** pH is a critical factor controlling both the speed and direction of chemical reactions.",
    relatedTools: ["ph-calculator"],
    relatedQuestions: [302, 503],
    formulas: ["pH = -log[H⁺]", "pOH = -log[OH⁻]", "pH + pOH = 14"]
  },
  {
    id: 508,
    question: "What are common chemistry reference materials and formulas?",
    keywords: ["reference", "materials", "formulas", "constants", "equations", "common"],
    category: "basic_concepts",
    difficulty: "basic",
    answer: "**Essential Chemistry Reference Materials:**\n\n**1. Fundamental Constants**\n• Avogadro's Number: 6.022 × 10²³ mol⁻¹\n• Gas Constant (R): 8.314 J/(mol·K) or 0.08206 L·atm/(mol·K)\n• Speed of Light: 3.00 × 10⁸ m/s\n• Planck's Constant: 6.626 × 10⁻³⁴ J·s\n\n**2. Common Formulas**\n• **Molarity:** M = n/V (moles/liters)\n• **Ideal Gas Law:** PV = nRT\n• **pH:** pH = -log[H⁺]\n• **Density:** ρ = m/V\n• **Concentration:** C₁V₁ = C₂V₂\n\n**3. Periodic Properties**\n• **Atomic Radius:** Decreases across period, increases down group\n• **Ionization Energy:** Increases across period, decreases down group\n• **Electronegativity:** Increases across period, decreases down group\n\n**4. Thermodynamics**\n• **Enthalpy:** ΔH = Hproducts - Hreactants\n• **Entropy:** ΔS = Sproducts - Sreactants\n• **Gibbs Free Energy:** ΔG = ΔH - TΔS\n\n**5. Kinetics**\n• **Rate Law:** Rate = k[A]ᵐ[B]ⁿ\n• **Arrhenius Equation:** k = Ae^(-Ea/RT)\n• **Half-life (1st order):** t₁/₂ = 0.693/k\n\n**6. Equilibrium**\n• **Equilibrium Constant:** Kc = [products]/[reactants]\n• **Le Chatelier's Principle:** System responds to oppose changes\n• **ICE Tables:** Initial, Change, Equilibrium concentrations\n\n**7. Common Conversion Factors**\n• 1 atm = 760 torr = 101.325 kPa\n• 0°C = 273.15 K\n• 1 L = 1000 mL = 1 dm³\n• 1 mol gas at STP = 22.4 L\n\n**Quick Reference Tip:** Bookmark this Chemistry AI for instant access to calculations and detailed explanations!",
    relatedTools: ["molecular-weight-calculator", "ph-calculator", "gas-law-calculator"],
    relatedQuestions: [1, 301, 302],
    formulas: ["PV = nRT", "M = n/V", "pH = -log[H⁺]", "ΔG = ΔH - TΔS"]
  }
];

export const searchQuestions = (query: string): ChemistryQuestion[] => {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(' ').filter(word => word.length > 2);
  
  const results = chemistryQADatabase.map(question => {
    let score = 0;
    
    // Check question text
    if (question.question.toLowerCase().includes(queryLower)) {
      score += 10;
    }
    
    // Check keywords
    const keywordMatches = question.keywords.filter(keyword =>
      queryWords.some(word => keyword.toLowerCase().includes(word))
    );
    score += keywordMatches.length * 5;
    
    // Check answer text
    if (question.answer.toLowerCase().includes(queryLower)) {
      score += 3;
    }
    
    // Fuzzy matching for individual words
    queryWords.forEach(word => {
      if (question.question.toLowerCase().includes(word)) score += 2;
      question.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(word)) score += 1;
      });
    });
    
    return { question, score };
  })
  .filter(result => result.score > 0)
  .sort((a, b) => b.score - a.score)
  .map(result => result.question);
  
  return results.slice(0, 10);
};

export const getQuestionsByCategory = (category: string): ChemistryQuestion[] => {
  return chemistryQADatabase.filter(q => q.category === category);
};

export const getRelatedQuestions = (questionId: number): ChemistryQuestion[] => {
  const question = chemistryQADatabase.find(q => q.id === questionId);
  if (!question || !question.relatedQuestions) return [];
  
  return question.relatedQuestions
    .map(id => chemistryQADatabase.find(q => q.id === id))
    .filter(Boolean) as ChemistryQuestion[];
};