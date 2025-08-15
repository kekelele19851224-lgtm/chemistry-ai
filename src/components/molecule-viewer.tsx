'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Molecule } from '@/types/chemistry';

interface MoleculeViewerProps {
  molecule?: Molecule;
  width?: number;
  height?: number;
}

const ELEMENT_COLORS: Record<string, number> = {
  H: 0xffffff,  // White
  C: 0x333333,  // Dark gray
  N: 0x0066cc,  // Blue
  O: 0xff3333,  // Red
  F: 0x66ff66,  // Light green
  Cl: 0x33cc33, // Green
  Br: 0x994433, // Brown
  I: 0x664499,  // Purple
  S: 0xffff33,  // Yellow
  P: 0xff6633,  // Orange
  Na: 0x9966ff, // Purple
  Ca: 0x00ff00, // Bright green
  K: 0x8f40d4,  // Dark violet
  Mg: 0x138808, // Forest green
};

const ELEMENT_SIZES: Record<string, number> = {
  H: 0.3,
  C: 0.4,
  N: 0.35,
  O: 0.35,
  F: 0.3,
  Cl: 0.5,
  Br: 0.6,
  I: 0.7,
  S: 0.5,
  P: 0.45,
  Na: 0.8,
  Ca: 0.7,
  K: 0.9,
  Mg: 0.65,
};

const sampleMolecules: Molecule[] = [
  // Simple Inorganic Molecules
  {
    id: 'water',
    name: 'Water',
    formula: 'H₂O',
    structure: {
      atoms: [
        { element: 'O', x: 0, y: 0, z: 0 },
        { element: 'H', x: 0.76, y: 0.59, z: 0 },
        { element: 'H', x: -0.76, y: 0.59, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 0, to: 2, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 18.015,
      polarMolecule: true,
      category: 'Simple Inorganic',
    },
  },
  {
    id: 'ammonia',
    name: 'Ammonia',
    formula: 'NH₃',
    structure: {
      atoms: [
        { element: 'N', x: 0, y: 0, z: 0 },
        { element: 'H', x: 1, y: 0, z: 0 },
        { element: 'H', x: -0.5, y: 0.87, z: 0 },
        { element: 'H', x: -0.5, y: -0.87, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 0, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 17.031,
      polarMolecule: true,
      category: 'Simple Inorganic',
    },
  },
  {
    id: 'carbon-dioxide',
    name: 'Carbon Dioxide',
    formula: 'CO₂',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'O', x: 1.16, y: 0, z: 0 },
        { element: 'O', x: -1.16, y: 0, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 2 },
        { from: 0, to: 2, order: 2 },
      ],
    },
    properties: {
      molecularWeight: 44.009,
      polarMolecule: false,
      category: 'Simple Inorganic',
    },
  },
  {
    id: 'hydrogen-chloride',
    name: 'Hydrogen Chloride',
    formula: 'HCl',
    structure: {
      atoms: [
        { element: 'H', x: 0, y: 0, z: 0 },
        { element: 'Cl', x: 1.27, y: 0, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 36.458,
      polarMolecule: true,
      category: 'Simple Inorganic',
    },
  },
  {
    id: 'sulfur-dioxide',
    name: 'Sulfur Dioxide',
    formula: 'SO₂',
    structure: {
      atoms: [
        { element: 'S', x: 0, y: 0, z: 0 },
        { element: 'O', x: 1.49, y: 0, z: 0 },
        { element: 'O', x: -0.74, y: 1.28, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 2 },
        { from: 0, to: 2, order: 2 },
      ],
    },
    properties: {
      molecularWeight: 64.066,
      polarMolecule: true,
      category: 'Simple Inorganic',
    },
  },
  {
    id: 'phosphine',
    name: 'Phosphine',
    formula: 'PH₃',
    structure: {
      atoms: [
        { element: 'P', x: 0, y: 0, z: 0 },
        { element: 'H', x: 1.42, y: 0, z: 0 },
        { element: 'H', x: -0.71, y: 1.23, z: 0 },
        { element: 'H', x: -0.71, y: -1.23, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 0, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 33.998,
      polarMolecule: true,
      category: 'Simple Inorganic',
    },
  },
  
  // Hydrocarbons
  {
    id: 'methane',
    name: 'Methane',
    formula: 'CH₄',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'H', x: 1.1, y: 0, z: 0 },
        { element: 'H', x: -0.55, y: 0.95, z: 0 },
        { element: 'H', x: -0.55, y: -0.95, z: 0 },
        { element: 'H', x: 0, y: 0, z: 1.1 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 0, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
        { from: 0, to: 4, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 16.043,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },
  {
    id: 'ethane',
    name: 'Ethane',
    formula: 'C₂H₆',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.54, y: 0, z: 0 },
        { element: 'H', x: -0.51, y: 0.89, z: 0 },
        { element: 'H', x: -0.51, y: -0.89, z: 0 },
        { element: 'H', x: -0.51, y: 0, z: 0.89 },
        { element: 'H', x: 2.05, y: 0.89, z: 0 },
        { element: 'H', x: 2.05, y: -0.89, z: 0 },
        { element: 'H', x: 2.05, y: 0, z: 0.89 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 0, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
        { from: 0, to: 4, order: 1 },
        { from: 1, to: 5, order: 1 },
        { from: 1, to: 6, order: 1 },
        { from: 1, to: 7, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 30.069,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },
  {
    id: 'ethylene',
    name: 'Ethylene',
    formula: 'C₂H₄',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.34, y: 0, z: 0 },
        { element: 'H', x: -0.6, y: 0.9, z: 0 },
        { element: 'H', x: -0.6, y: -0.9, z: 0 },
        { element: 'H', x: 1.94, y: 0.9, z: 0 },
        { element: 'H', x: 1.94, y: -0.9, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 2 },
        { from: 0, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
        { from: 1, to: 4, order: 1 },
        { from: 1, to: 5, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 28.054,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },
  {
    id: 'acetylene',
    name: 'Acetylene',
    formula: 'C₂H₂',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.2, y: 0, z: 0 },
        { element: 'H', x: -1.06, y: 0, z: 0 },
        { element: 'H', x: 2.26, y: 0, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 3 },
        { from: 0, to: 2, order: 1 },
        { from: 1, to: 3, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 26.038,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },
  {
    id: 'propane',
    name: 'Propane',
    formula: 'C₃H₈',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.54, y: 0, z: 0 },
        { element: 'C', x: 3.08, y: 0, z: 0 },
        { element: 'H', x: -0.51, y: 0.89, z: 0 },
        { element: 'H', x: -0.51, y: -0.89, z: 0 },
        { element: 'H', x: -0.51, y: 0, z: 0.89 },
        { element: 'H', x: 1.54, y: 0.89, z: 0.89 },
        { element: 'H', x: 1.54, y: -0.89, z: -0.89 },
        { element: 'H', x: 3.59, y: 0.89, z: 0 },
        { element: 'H', x: 3.59, y: -0.89, z: 0 },
        { element: 'H', x: 3.59, y: 0, z: 0.89 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
        { from: 0, to: 4, order: 1 },
        { from: 0, to: 5, order: 1 },
        { from: 1, to: 6, order: 1 },
        { from: 1, to: 7, order: 1 },
        { from: 2, to: 8, order: 1 },
        { from: 2, to: 9, order: 1 },
        { from: 2, to: 10, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 44.096,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },
  {
    id: 'benzene',
    name: 'Benzene',
    formula: 'C₆H₆',
    structure: {
      atoms: [
        { element: 'C', x: 1.4, y: 0, z: 0 },
        { element: 'C', x: 0.7, y: 1.21, z: 0 },
        { element: 'C', x: -0.7, y: 1.21, z: 0 },
        { element: 'C', x: -1.4, y: 0, z: 0 },
        { element: 'C', x: -0.7, y: -1.21, z: 0 },
        { element: 'C', x: 0.7, y: -1.21, z: 0 },
        { element: 'H', x: 2.48, y: 0, z: 0 },
        { element: 'H', x: 1.24, y: 2.15, z: 0 },
        { element: 'H', x: -1.24, y: 2.15, z: 0 },
        { element: 'H', x: -2.48, y: 0, z: 0 },
        { element: 'H', x: -1.24, y: -2.15, z: 0 },
        { element: 'H', x: 1.24, y: -2.15, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 2 },
        { from: 1, to: 2, order: 1 },
        { from: 2, to: 3, order: 2 },
        { from: 3, to: 4, order: 1 },
        { from: 4, to: 5, order: 2 },
        { from: 5, to: 0, order: 1 },
        { from: 0, to: 6, order: 1 },
        { from: 1, to: 7, order: 1 },
        { from: 2, to: 8, order: 1 },
        { from: 3, to: 9, order: 1 },
        { from: 4, to: 10, order: 1 },
        { from: 5, to: 11, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 78.114,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },
  {
    id: 'cyclohexane',
    name: 'Cyclohexane',
    formula: 'C₆H₁₂',
    structure: {
      atoms: [
        { element: 'C', x: 1.4, y: 0, z: 0 },
        { element: 'C', x: 0.7, y: 1.21, z: 0 },
        { element: 'C', x: -0.7, y: 1.21, z: 0 },
        { element: 'C', x: -1.4, y: 0, z: 0 },
        { element: 'C', x: -0.7, y: -1.21, z: 0 },
        { element: 'C', x: 0.7, y: -1.21, z: 0 },
        { element: 'H', x: 1.9, y: 0.5, z: 0.5 },
        { element: 'H', x: 1.9, y: -0.5, z: -0.5 },
        { element: 'H', x: 0.95, y: 1.71, z: 0.5 },
        { element: 'H', x: 0.45, y: 1.71, z: -0.5 },
        { element: 'H', x: -0.45, y: 1.71, z: 0.5 },
        { element: 'H', x: -0.95, y: 1.71, z: -0.5 },
        { element: 'H', x: -1.9, y: 0.5, z: 0.5 },
        { element: 'H', x: -1.9, y: -0.5, z: -0.5 },
        { element: 'H', x: -0.95, y: -1.71, z: 0.5 },
        { element: 'H', x: -0.45, y: -1.71, z: -0.5 },
        { element: 'H', x: 0.45, y: -1.71, z: 0.5 },
        { element: 'H', x: 0.95, y: -1.71, z: -0.5 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 2, to: 3, order: 1 },
        { from: 3, to: 4, order: 1 },
        { from: 4, to: 5, order: 1 },
        { from: 5, to: 0, order: 1 },
        { from: 0, to: 6, order: 1 },
        { from: 0, to: 7, order: 1 },
        { from: 1, to: 8, order: 1 },
        { from: 1, to: 9, order: 1 },
        { from: 2, to: 10, order: 1 },
        { from: 2, to: 11, order: 1 },
        { from: 3, to: 12, order: 1 },
        { from: 3, to: 13, order: 1 },
        { from: 4, to: 14, order: 1 },
        { from: 4, to: 15, order: 1 },
        { from: 5, to: 16, order: 1 },
        { from: 5, to: 17, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 84.162,
      polarMolecule: false,
      category: 'Hydrocarbons',
    },
  },

  // Organic Functional Groups
  {
    id: 'ethanol',
    name: 'Ethanol',
    formula: 'C₂H₅OH',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.5, y: 0, z: 0 },
        { element: 'O', x: 2.5, y: 0.8, z: 0 },
        { element: 'H', x: 3.2, y: 0.3, z: 0 },
        { element: 'H', x: -0.5, y: 0.8, z: 0 },
        { element: 'H', x: -0.5, y: -0.8, z: 0 },
        { element: 'H', x: 0, y: 0, z: 1 },
        { element: 'H', x: 1.5, y: -0.8, z: 0 },
        { element: 'H', x: 2, y: 0, z: 1 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 2, to: 3, order: 1 },
        { from: 0, to: 4, order: 1 },
        { from: 0, to: 5, order: 1 },
        { from: 0, to: 6, order: 1 },
        { from: 1, to: 7, order: 1 },
        { from: 1, to: 8, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 46.068,
      polarMolecule: true,
      category: 'Organic Functional Groups',
    },
  },
  {
    id: 'methanol',
    name: 'Methanol',
    formula: 'CH₃OH',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'O', x: 1.4, y: 0, z: 0 },
        { element: 'H', x: 2.3, y: 0.2, z: 0 },
        { element: 'H', x: -0.5, y: 0.9, z: 0 },
        { element: 'H', x: -0.5, y: -0.9, z: 0 },
        { element: 'H', x: -0.5, y: 0, z: 0.9 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
        { from: 0, to: 4, order: 1 },
        { from: 0, to: 5, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 32.042,
      polarMolecule: true,
      category: 'Organic Functional Groups',
    },
  },
  {
    id: 'acetic-acid',
    name: 'Acetic Acid',
    formula: 'CH₃COOH',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.5, y: 0, z: 0 },
        { element: 'O', x: 2.3, y: 1.1, z: 0 },
        { element: 'O', x: 2.1, y: -1.1, z: 0 },
        { element: 'H', x: 2.8, y: -1.3, z: 0 },
        { element: 'H', x: -0.5, y: 0.9, z: 0 },
        { element: 'H', x: -0.5, y: -0.9, z: 0 },
        { element: 'H', x: -0.5, y: 0, z: 0.9 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 2 },
        { from: 1, to: 3, order: 1 },
        { from: 3, to: 4, order: 1 },
        { from: 0, to: 5, order: 1 },
        { from: 0, to: 6, order: 1 },
        { from: 0, to: 7, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 60.052,
      polarMolecule: true,
      category: 'Organic Functional Groups',
    },
  },
  {
    id: 'acetone',
    name: 'Acetone',
    formula: 'CH₃COCH₃',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.5, y: 0, z: 0 },
        { element: 'C', x: 3, y: 0, z: 0 },
        { element: 'O', x: 1.5, y: 1.2, z: 0 },
        { element: 'H', x: -0.5, y: 0.9, z: 0 },
        { element: 'H', x: -0.5, y: -0.9, z: 0 },
        { element: 'H', x: -0.5, y: 0, z: 0.9 },
        { element: 'H', x: 3.5, y: 0.9, z: 0 },
        { element: 'H', x: 3.5, y: -0.9, z: 0 },
        { element: 'H', x: 3.5, y: 0, z: 0.9 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 1, to: 3, order: 2 },
        { from: 0, to: 4, order: 1 },
        { from: 0, to: 5, order: 1 },
        { from: 0, to: 6, order: 1 },
        { from: 2, to: 7, order: 1 },
        { from: 2, to: 8, order: 1 },
        { from: 2, to: 9, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 58.08,
      polarMolecule: true,
      category: 'Organic Functional Groups',
    },
  },
  {
    id: 'formaldehyde',
    name: 'Formaldehyde',
    formula: 'CH₂O',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'O', x: 1.2, y: 0, z: 0 },
        { element: 'H', x: -0.6, y: 0.9, z: 0 },
        { element: 'H', x: -0.6, y: -0.9, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 2 },
        { from: 0, to: 2, order: 1 },
        { from: 0, to: 3, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 30.026,
      polarMolecule: true,
      category: 'Organic Functional Groups',
    },
  },

  // Biological Molecules
  {
    id: 'glucose',
    name: 'Glucose',
    formula: 'C₆H₁₂O₆',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.5, y: 0, z: 0 },
        { element: 'C', x: 2.25, y: 1.3, z: 0 },
        { element: 'C', x: 1.5, y: 2.6, z: 0 },
        { element: 'C', x: 0, y: 2.6, z: 0 },
        { element: 'O', x: -0.75, y: 1.3, z: 0 },
        { element: 'O', x: 2.25, y: -1.3, z: 0 },
        { element: 'O', x: 3.75, y: 1.3, z: 0 },
        { element: 'O', x: 2.25, y: 3.9, z: 0 },
        { element: 'O', x: -0.75, y: 3.9, z: 0 },
        { element: 'O', x: -0.75, y: -1.3, z: 0 },
        { element: 'H', x: 2.95, y: -1.5, z: 0 },
        { element: 'H', x: 4.45, y: 1.1, z: 0 },
        { element: 'H', x: 2.95, y: 4.1, z: 0 },
        { element: 'H', x: -1.45, y: 4.1, z: 0 },
        { element: 'H', x: -1.45, y: -1.1, z: 0 },
        { element: 'H', x: 0.3, y: 0.9, z: 0 },
        { element: 'H', x: 1.2, y: 0.9, z: 0 },
        { element: 'H', x: 1.95, y: 1.6, z: 0 },
        { element: 'H', x: 1.8, y: 2.9, z: 0 },
        { element: 'H', x: -0.3, y: 2.9, z: 0 },
        { element: 'H', x: -1.05, y: 1.6, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 2, to: 3, order: 1 },
        { from: 3, to: 4, order: 1 },
        { from: 4, to: 5, order: 1 },
        { from: 5, to: 0, order: 1 },
        { from: 1, to: 6, order: 1 },
        { from: 2, to: 7, order: 1 },
        { from: 3, to: 8, order: 1 },
        { from: 4, to: 9, order: 1 },
        { from: 0, to: 10, order: 1 },
        { from: 6, to: 11, order: 1 },
        { from: 7, to: 12, order: 1 },
        { from: 8, to: 13, order: 1 },
        { from: 9, to: 14, order: 1 },
        { from: 10, to: 15, order: 1 },
        { from: 0, to: 16, order: 1 },
        { from: 1, to: 17, order: 1 },
        { from: 2, to: 18, order: 1 },
        { from: 3, to: 19, order: 1 },
        { from: 4, to: 20, order: 1 },
        { from: 5, to: 21, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 180.156,
      polarMolecule: true,
      category: 'Biological Molecules',
    },
  },
  {
    id: 'caffeine',
    name: 'Caffeine',
    formula: 'C₈H₁₀N₄O₂',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'N', x: 1.4, y: 0, z: 0 },
        { element: 'C', x: 2.1, y: 1.2, z: 0 },
        { element: 'C', x: 1.4, y: 2.4, z: 0 },
        { element: 'N', x: 0, y: 2.4, z: 0 },
        { element: 'C', x: -0.7, y: 1.2, z: 0 },
        { element: 'N', x: -2.1, y: 1.2, z: 0 },
        { element: 'C', x: -2.8, y: 0, z: 0 },
        { element: 'N', x: -2.1, y: -1.2, z: 0 },
        { element: 'C', x: -0.7, y: -1.2, z: 0 },
        { element: 'O', x: 0, y: -2.4, z: 0 },
        { element: 'O', x: 1.4, y: 3.6, z: 0 },
        { element: 'C', x: 2.8, y: -0.6, z: 0 },
        { element: 'C', x: -0.7, y: 3.6, z: 0 },
        { element: 'C', x: -2.8, y: -2.4, z: 0 },
        { element: 'H', x: 3.5, y: 1.2, z: 0 },
        { element: 'H', x: -3.9, y: 0, z: 0 },
        { element: 'H', x: 3.4, y: -1.5, z: 0 },
        { element: 'H', x: 3.4, y: 0.3, z: 0 },
        { element: 'H', x: 2.2, y: -1.5, z: 0 },
        { element: 'H', x: -1.3, y: 4.5, z: 0 },
        { element: 'H', x: 0.3, y: 4.2, z: 0 },
        { element: 'H', x: -0.1, y: 3.0, z: 0 },
        { element: 'H', x: -3.4, y: -3.3, z: 0 },
        { element: 'H', x: -2.2, y: -3.3, z: 0 },
        { element: 'H', x: -3.4, y: -1.5, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 1 },
        { from: 2, to: 3, order: 2 },
        { from: 3, to: 4, order: 1 },
        { from: 4, to: 5, order: 1 },
        { from: 5, to: 0, order: 2 },
        { from: 5, to: 6, order: 1 },
        { from: 6, to: 7, order: 1 },
        { from: 7, to: 8, order: 2 },
        { from: 8, to: 9, order: 1 },
        { from: 9, to: 0, order: 1 },
        { from: 9, to: 10, order: 2 },
        { from: 3, to: 11, order: 2 },
        { from: 1, to: 12, order: 1 },
        { from: 4, to: 13, order: 1 },
        { from: 8, to: 14, order: 1 },
        { from: 2, to: 15, order: 1 },
        { from: 7, to: 16, order: 1 },
        { from: 12, to: 17, order: 1 },
        { from: 12, to: 18, order: 1 },
        { from: 12, to: 19, order: 1 },
        { from: 13, to: 20, order: 1 },
        { from: 13, to: 21, order: 1 },
        { from: 13, to: 22, order: 1 },
        { from: 14, to: 23, order: 1 },
        { from: 14, to: 24, order: 1 },
        { from: 14, to: 25, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 194.194,
      polarMolecule: true,
      category: 'Biological Molecules',
    },
  },
  {
    id: 'aspirin',
    name: 'Aspirin',
    formula: 'C₉H₈O₄',
    structure: {
      atoms: [
        { element: 'C', x: 0, y: 0, z: 0 },
        { element: 'C', x: 1.4, y: 0, z: 0 },
        { element: 'C', x: 2.1, y: 1.2, z: 0 },
        { element: 'C', x: 1.4, y: 2.4, z: 0 },
        { element: 'C', x: 0, y: 2.4, z: 0 },
        { element: 'C', x: -0.7, y: 1.2, z: 0 },
        { element: 'O', x: -2.1, y: 1.2, z: 0 },
        { element: 'C', x: -2.8, y: 0, z: 0 },
        { element: 'O', x: -4.2, y: 0, z: 0 },
        { element: 'C', x: -2.1, y: -1.2, z: 0 },
        { element: 'C', x: 2.1, y: -1.2, z: 0 },
        { element: 'O', x: 3.5, y: -1.2, z: 0 },
        { element: 'O', x: 1.4, y: -2.4, z: 0 },
        { element: 'H', x: 3.5, y: 1.2, z: 0 },
        { element: 'H', x: 2, y: 3.3, z: 0 },
        { element: 'H', x: -0.6, y: 3.3, z: 0 },
        { element: 'H', x: -2.7, y: -2.1, z: 0 },
        { element: 'H', x: -2.7, y: -0.3, z: 0 },
        { element: 'H', x: -1.5, y: -2.1, z: 0 },
        { element: 'H', x: 0.4, y: -2.4, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 2 },
        { from: 1, to: 2, order: 1 },
        { from: 2, to: 3, order: 2 },
        { from: 3, to: 4, order: 1 },
        { from: 4, to: 5, order: 2 },
        { from: 5, to: 0, order: 1 },
        { from: 5, to: 6, order: 1 },
        { from: 6, to: 7, order: 1 },
        { from: 7, to: 8, order: 2 },
        { from: 7, to: 9, order: 1 },
        { from: 1, to: 10, order: 1 },
        { from: 10, to: 11, order: 2 },
        { from: 10, to: 12, order: 1 },
        { from: 2, to: 13, order: 1 },
        { from: 3, to: 14, order: 1 },
        { from: 4, to: 15, order: 1 },
        { from: 9, to: 16, order: 1 },
        { from: 9, to: 17, order: 1 },
        { from: 9, to: 18, order: 1 },
        { from: 12, to: 19, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 180.159,
      polarMolecule: true,
      category: 'Biological Molecules',
    },
  },

  // Ionic Compounds
  {
    id: 'sodium-chloride',
    name: 'Sodium Chloride',
    formula: 'NaCl',
    structure: {
      atoms: [
        { element: 'Na', x: 0, y: 0, z: 0 },
        { element: 'Cl', x: 2.8, y: 0, z: 0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 58.443,
      polarMolecule: true,
      category: 'Ionic Compounds',
    },
  },
  {
    id: 'calcium-carbonate',
    name: 'Calcium Carbonate',
    formula: 'CaCO₃',
    structure: {
      atoms: [
        { element: 'Ca', x: 0, y: 0, z: 0 },
        { element: 'C', x: 2.5, y: 0, z: 0 },
        { element: 'O', x: 3.7, y: 1.0, z: 0 },
        { element: 'O', x: 3.7, y: -1.0, z: 0 },
        { element: 'O', x: 1.3, y: 0, z: 1.0 },
      ],
      bonds: [
        { from: 0, to: 1, order: 1 },
        { from: 1, to: 2, order: 2 },
        { from: 1, to: 3, order: 1 },
        { from: 1, to: 4, order: 1 },
      ],
    },
    properties: {
      molecularWeight: 100.087,
      polarMolecule: true,
      category: 'Ionic Compounds',
    },
  },
];

const MoleculeViewer: React.FC<MoleculeViewerProps> = ({
  molecule,
  width = 600,
  height = 400,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animationRef = useRef<number>();
  const [selectedMolecule, setSelectedMolecule] = useState<Molecule>(molecule || sampleMolecules[0]);

  const createMolecule = (mol: Molecule) => {
    if (!sceneRef.current) return;

    // Clear existing molecule
    const objectsToRemove: THREE.Object3D[] = [];
    sceneRef.current.traverse((child) => {
      if (child.userData.isMolecule) {
        objectsToRemove.push(child);
      }
    });
    objectsToRemove.forEach((obj) => sceneRef.current?.remove(obj));

    const group = new THREE.Group();
    group.userData.isMolecule = true;

    // Create atoms
    mol.structure.atoms.forEach((atom, index) => {
      const color = ELEMENT_COLORS[atom.element] || 0x888888;
      const size = ELEMENT_SIZES[atom.element] || 0.4;
      
      const geometry = new THREE.SphereGeometry(size, 32, 32);
      const material = new THREE.MeshLambertMaterial({ color });
      const sphere = new THREE.Mesh(geometry, material);
      
      sphere.position.set(atom.x, atom.y, atom.z);
      sphere.userData.atomIndex = index;
      sphere.userData.element = atom.element;
      
      group.add(sphere);
    });

    // Create bonds
    mol.structure.bonds.forEach((bond) => {
      const atom1 = mol.structure.atoms[bond.from];
      const atom2 = mol.structure.atoms[bond.to];
      
      const start = new THREE.Vector3(atom1.x, atom1.y, atom1.z);
      const end = new THREE.Vector3(atom2.x, atom2.y, atom2.z);
      const direction = new THREE.Vector3().subVectors(end, start);
      const distance = direction.length();
      
      // Create cylinder for bond
      const geometry = new THREE.CylinderGeometry(0.1, 0.1, distance);
      const material = new THREE.MeshLambertMaterial({ color: 0x444444 });
      const cylinder = new THREE.Mesh(geometry, material);
      
      // Position and rotate cylinder
      cylinder.position.copy(start).add(direction.multiplyScalar(0.5));
      cylinder.lookAt(end);
      cylinder.rotateX(Math.PI / 2);
      
      group.add(cylinder);
    });

    sceneRef.current.add(group);
  };

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Mouse controls for rotation
    let mouseDown = false;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const onMouseDown = (event: MouseEvent) => {
      mouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const onMouseUp = () => {
      mouseDown = false;
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!mouseDown) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;

      targetRotationY += deltaX * 0.01;
      targetRotationX += deltaY * 0.01;

      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Smooth rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.1;
      currentRotationY += (targetRotationY - currentRotationY) * 0.1;

      scene.rotation.x = currentRotationX;
      scene.rotation.y = currentRotationY;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, [width, height]);

  useEffect(() => {
    createMolecule(selectedMolecule);
  }, [selectedMolecule]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">3D Molecule Viewer</h2>
        <p className="text-gray-600">Click and drag to rotate the molecule</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Molecule ({sampleMolecules.length} total)
        </label>
        <select
          value={selectedMolecule.id}
          onChange={(e) => {
            const mol = sampleMolecules.find(m => m.id === e.target.value);
            if (mol) setSelectedMolecule(mol);
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {/* Group molecules by category */}
          {['Simple Inorganic', 'Hydrocarbons', 'Organic Functional Groups', 'Biological Molecules', 'Ionic Compounds'].map((category) => {
            const categoryMolecules = sampleMolecules.filter(mol => mol.properties.category === category);
            if (categoryMolecules.length === 0) return null;
            return (
              <optgroup key={category} label={`${category} (${categoryMolecules.length})`}>
                {categoryMolecules.map((mol) => (
                  <option key={mol.id} value={mol.id}>
                    {mol.name} ({mol.formula})
                  </option>
                ))}
              </optgroup>
            );
          })}
        </select>
      </div>

      <div className="border rounded-lg overflow-hidden mb-4">
        <div ref={mountRef} className="w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Molecule Information</h3>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Name:</span> {selectedMolecule.name}</p>
            <p><span className="font-medium">Formula:</span> {selectedMolecule.formula}</p>
            <p><span className="font-medium">Category:</span> {selectedMolecule.properties.category}</p>
            <p><span className="font-medium">Molecular Weight:</span> {selectedMolecule.properties.molecularWeight} g/mol</p>
            <p><span className="font-medium">Polarity:</span> {selectedMolecule.properties.polarMolecule ? 'Polar' : 'Nonpolar'}</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Element Colors</h3>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-white border border-gray-400"></div>
              <span>Hydrogen (H)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <span>Carbon (C)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span>Nitrogen (N)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-red-600"></div>
              <span>Oxygen (O)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoleculeViewer;