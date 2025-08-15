'use client';

import React, { useState } from 'react';
import { periodicTableData } from '@/data/periodic-table';
import { Element } from '@/types/chemistry';

interface PeriodicTableProps {
  onElementSelect?: (element: Element) => void;
  selectedElement?: Element | null;
}

const CATEGORY_COLORS = {
  'alkali-metal': 'bg-red-400 hover:bg-red-500',
  'alkaline-earth-metal': 'bg-orange-400 hover:bg-orange-500',
  'transition-metal': 'bg-yellow-400 hover:bg-yellow-500',
  'post-transition-metal': 'bg-green-400 hover:bg-green-500',
  'metalloid': 'bg-blue-400 hover:bg-blue-500',
  'reactive-nonmetal': 'bg-purple-400 hover:bg-purple-500',
  'noble-gas': 'bg-pink-400 hover:bg-pink-500',
  'lanthanide': 'bg-indigo-400 hover:bg-indigo-500',
  'actinide': 'bg-gray-400 hover:bg-gray-500',
};

const ElementCell: React.FC<{
  element: Element;
  onClick: () => void;
  isSelected: boolean;
}> = ({ element, onClick, isSelected }) => {
  const colorClass = CATEGORY_COLORS[element.category as keyof typeof CATEGORY_COLORS] || 'bg-gray-300 hover:bg-gray-400';
  
  return (
    <div
      className={`
        ${colorClass}
        ${isSelected ? 'ring-2 ring-blue-600' : ''}
        p-1 border border-gray-300 cursor-pointer transition-all duration-200
        text-center text-xs font-semibold text-gray-800
        min-h-[60px] flex flex-col justify-center
        transform hover:scale-105 hover:shadow-md
      `}
      onClick={onClick}
      style={{
        gridColumn: element.group,
        gridRow: element.period,
      }}
    >
      <div className="text-[8px] font-normal">{element.atomicNumber}</div>
      <div className="text-sm font-bold">{element.symbol}</div>
      <div className="text-[8px] font-normal truncate">{element.name}</div>
      <div className="text-[7px] font-normal">{element.atomicMass.toFixed(1)}</div>
    </div>
  );
};

const ElementDetails: React.FC<{ element: Element | null }> = ({ element }) => {
  if (!element) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <p className="text-gray-500 text-center">Select an element to view details</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${CATEGORY_COLORS[element.category as keyof typeof CATEGORY_COLORS]} p-4 rounded-lg`}>
          <div className="text-2xl font-bold text-gray-800">{element.symbol}</div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{element.name}</h2>
          <p className="text-gray-600">Atomic Number: {element.atomicNumber}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Basic Properties</h3>
          <div className="space-y-1 text-sm">
            <p><span className="font-medium">Atomic Mass:</span> {element.atomicMass} amu</p>
            <p><span className="font-medium">Group:</span> {element.group}</p>
            <p><span className="font-medium">Period:</span> {element.period}</p>
            <p><span className="font-medium">Block:</span> {element.block}-block</p>
            <p><span className="font-medium">Category:</span> {element.category.replace('-', ' ')}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Physical Properties</h3>
          <div className="space-y-1 text-sm">
            {element.electronegativity && (
              <p><span className="font-medium">Electronegativity:</span> {element.electronegativity}</p>
            )}
            {element.ionizationEnergy && (
              <p><span className="font-medium">Ionization Energy:</span> {element.ionizationEnergy} kJ/mol</p>
            )}
            {element.atomicRadius && (
              <p><span className="font-medium">Atomic Radius:</span> {element.atomicRadius} pm</p>
            )}
            <p><span className="font-medium">State:</span> {element.properties.state}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Electron Configuration</h3>
        <p className="text-sm bg-gray-100 p-2 rounded font-mono">{element.electronConfiguration}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Discovery</h3>
        <p className="text-sm">
          Discovered by {element.discoveredBy} in {element.discoveryYear}
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Common Uses</h3>
        <div className="flex flex-wrap gap-2">
          {element.uses.map((use, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
            >
              {use}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const PeriodicTable: React.FC<PeriodicTableProps> = ({
  onElementSelect,
  selectedElement,
}) => {
  const [internalSelectedElement, setInternalSelectedElement] = useState<Element | null>(null);
  
  const currentSelectedElement = selectedElement || internalSelectedElement;

  const handleElementClick = (element: Element) => {
    setInternalSelectedElement(element);
    onElementSelect?.(element);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Periodic Table</h2>
        
        {/* Legend */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Element Categories</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {Object.entries(CATEGORY_COLORS).map(([category, colorClass]) => (
              <div key={category} className="flex items-center gap-1">
                <div className={`w-3 h-3 rounded ${colorClass.split(' ')[0]}`}></div>
                <span className="capitalize">{category.replace('-', ' ')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Periodic Table Grid */}
        <div className="overflow-x-auto">
          <div
            className="grid gap-1 min-w-[1200px]"
            style={{
              gridTemplateColumns: 'repeat(18, 1fr)',
              gridTemplateRows: 'repeat(7, 1fr)',
            }}
          >
            {periodicTableData.map((element) => (
              <ElementCell
                key={element.symbol}
                element={element}
                onClick={() => handleElementClick(element)}
                isSelected={currentSelectedElement?.symbol === element.symbol}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Element Details */}
      <ElementDetails element={currentSelectedElement} />
    </div>
  );
};

export default PeriodicTable;