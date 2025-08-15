'use client';

import React, { useState } from 'react';
import { Calculator, Beaker, Atom, Gauge } from 'lucide-react';
import { calculateMolecularWeight, calculateMolarity, calculatepH, idealGasLaw } from '@/utils/chemistry';

interface CalculatorProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const CalculatorCard: React.FC<CalculatorProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );
};

const MolecularWeightCalculator: React.FC = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      if (!formula.trim()) {
        setError('Please enter a chemical formula');
        return;
      }
      const weight = calculateMolecularWeight(formula);
      setResult(weight);
    } catch {
      setError('Invalid formula. Please check your input.');
      setResult(null);
    }
  };

  return (
    <CalculatorCard title="Molecular Weight Calculator" icon={<Atom className="w-6 h-6 text-blue-600" />}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chemical Formula
          </label>
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            placeholder="e.g., H2O, CH4, C6H12O6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>
        
        {error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
        
        {result !== null && (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-green-800">
              <span className="font-semibold">Molecular Weight:</span> {result} g/mol
            </p>
          </div>
        )}
        
        <div className="text-xs text-gray-500">
          <p><strong>Examples:</strong></p>
          <p>• Water: H2O → 18.015 g/mol</p>
          <p>• Glucose: C6H12O6 → 180.156 g/mol</p>
          <p>• Caffeine: C8H10N4O2 → 194.19 g/mol</p>
        </div>
      </div>
    </CalculatorCard>
  );
};

const MolarityCalculator: React.FC = () => {
  const [moles, setMoles] = useState('');
  const [volume, setVolume] = useState('');
  const [molarity, setMolarity] = useState('');
  const [calculationType, setCalculationType] = useState<'molarity' | 'moles' | 'volume'>('molarity');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const molesNum = parseFloat(moles);
    const volumeNum = parseFloat(volume);
    const molarityNum = parseFloat(molarity);

    switch (calculationType) {
      case 'molarity':
        if (molesNum && volumeNum) {
          setResult(calculateMolarity(molesNum, volumeNum));
        }
        break;
      case 'moles':
        if (molarityNum && volumeNum) {
          setResult(molarityNum * volumeNum);
        }
        break;
      case 'volume':
        if (molesNum && molarityNum) {
          setResult(molesNum / molarityNum);
        }
        break;
    }
  };

  return (
    <CalculatorCard title="Molarity Calculator" icon={<Beaker className="w-6 h-6 text-blue-600" />}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calculate
          </label>
          <select
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value as 'molarity' | 'moles' | 'volume')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="molarity">Molarity (M)</option>
            <option value="moles">Moles (n)</option>
            <option value="volume">Volume (L)</option>
          </select>
        </div>

        {calculationType !== 'moles' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Moles (mol)
            </label>
            <input
              type="number"
              value={moles}
              onChange={(e) => setMoles(e.target.value)}
              placeholder="Enter moles"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {calculationType !== 'volume' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Volume (L)
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Enter volume in liters"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {calculationType !== 'molarity' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Molarity (M)
            </label>
            <input
              type="number"
              value={molarity}
              onChange={(e) => setMolarity(e.target.value)}
              placeholder="Enter molarity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-green-800">
              <span className="font-semibold">Result:</span>{' '}
              {result.toFixed(4)}{' '}
              {calculationType === 'molarity' ? 'M' : calculationType === 'moles' ? 'mol' : 'L'}
            </p>
          </div>
        )}

        <div className="text-xs text-gray-500">
          <p><strong>Formula:</strong> M = n / V</p>
          <p>where M = molarity, n = moles, V = volume in liters</p>
        </div>
      </div>
    </CalculatorCard>
  );
};

const PHCalculator: React.FC = () => {
  const [concentration, setConcentration] = useState('');
  const [isAcid, setIsAcid] = useState(true);
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const conc = parseFloat(concentration);
    if (conc && conc > 0) {
      const ph = calculatepH(conc, isAcid);
      setResult(ph);
    }
  };

  return (
    <CalculatorCard title="pH Calculator" icon={<Gauge className="w-6 h-6 text-blue-600" />}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Solution Type
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={isAcid}
                onChange={() => setIsAcid(true)}
                className="mr-2"
              />
              Acid
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isAcid}
                onChange={() => setIsAcid(false)}
                className="mr-2"
              />
              Base
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Concentration (M)
          </label>
          <input
            type="number"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
            placeholder="Enter concentration"
            step="any"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate pH
        </button>

        {result !== null && (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-green-800">
              <span className="font-semibold">pH:</span> {result.toFixed(2)}
            </p>
            <p className="text-sm text-green-700 mt-1">
              This solution is{' '}
              {result < 7 ? 'acidic' : result > 7 ? 'basic' : 'neutral'}
            </p>
          </div>
        )}

        <div className="text-xs text-gray-500">
          <p><strong>pH Scale:</strong></p>
          <p>• 0-7: Acidic (lower = more acidic)</p>
          <p>• 7: Neutral</p>
          <p>• 7-14: Basic (higher = more basic)</p>
        </div>
      </div>
    </CalculatorCard>
  );
};

const GasLawCalculator: React.FC = () => {
  const [pressure, setPressure] = useState('');
  const [volume, setVolume] = useState('');
  const [temperature, setTemperature] = useState('');
  const [moles, setMoles] = useState('');
  const [calculateFor, setCalculateFor] = useState<'pressure' | 'volume' | 'temperature' | 'moles'>('pressure');
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const p = calculateFor !== 'pressure' ? parseFloat(pressure) : undefined;
    const v = calculateFor !== 'volume' ? parseFloat(volume) : undefined;
    const t = calculateFor !== 'temperature' ? parseFloat(temperature) : undefined;
    const n = calculateFor !== 'moles' ? parseFloat(moles) : undefined;

    const result = idealGasLaw(p, v, t, n);
    setResult(result);
  };

  return (
    <CalculatorCard title="Gas Law Calculator" icon={<Calculator className="w-6 h-6 text-blue-600" />}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Calculate
          </label>
          <select
            value={calculateFor}
            onChange={(e) => setCalculateFor(e.target.value as 'pressure' | 'volume' | 'temperature' | 'moles')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="pressure">Pressure (atm)</option>
            <option value="volume">Volume (L)</option>
            <option value="temperature">Temperature (K)</option>
            <option value="moles">Moles (mol)</option>
          </select>
        </div>

        {calculateFor !== 'pressure' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pressure (atm)
            </label>
            <input
              type="number"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
              placeholder="Enter pressure"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {calculateFor !== 'volume' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Volume (L)
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Enter volume"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {calculateFor !== 'temperature' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Temperature (K)
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="Enter temperature"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        {calculateFor !== 'moles' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Moles (mol)
            </label>
            <input
              type="number"
              value={moles}
              onChange={(e) => setMoles(e.target.value)}
              placeholder="Enter moles"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="bg-green-50 p-4 rounded-md">
            <p className="text-green-800">
              <span className="font-semibold">Result:</span>{' '}
              {result.toFixed(4)}{' '}
              {calculateFor === 'pressure' ? 'atm' : 
               calculateFor === 'volume' ? 'L' : 
               calculateFor === 'temperature' ? 'K' : 'mol'}
            </p>
          </div>
        )}

        <div className="text-xs text-gray-500">
          <p><strong>Ideal Gas Law:</strong> PV = nRT</p>
          <p>R = 0.08206 L·atm/(mol·K)</p>
        </div>
      </div>
    </CalculatorCard>
  );
};

const ChemistryCalculators: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Chemistry Calculators</h1>
        <p className="text-gray-600">Interactive tools for chemistry calculations and conversions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MolecularWeightCalculator />
        <MolarityCalculator />
        <PHCalculator />
        <GasLawCalculator />
      </div>
    </div>
  );
};

export default ChemistryCalculators;