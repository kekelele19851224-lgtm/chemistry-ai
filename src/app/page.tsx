'use client';

import React, { useState, useCallback } from 'react';
import { Atom, Calculator, Beaker, BookOpen, Search, Lightbulb } from 'lucide-react';
import ChatInterface from '@/components/chat-interface';
import PeriodicTable from '@/components/periodic-table';
import ChemistryCalculators from '@/components/chemistry-calculators';
import MoleculeViewer from '@/components/molecule-viewer';
// import { searchQuestions } from '@/data/chemistry-qa';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'chat' | 'periodic' | 'calculators' | 'molecules'>('chat');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [isNavigating, setIsNavigating] = useState<boolean>(false);

  const handleToolSelect = (tool: string) => {
    switch (tool) {
      case 'periodic-table':
        setActiveTab('periodic');
        break;
      case 'molecular-weight-calculator':
      case 'molar-calculator':
      case 'gas-law-calculator':
      case 'ph-calculator':
        setActiveTab('calculators');
        break;
      case 'molecule-viewer':
        setActiveTab('molecules');
        break;
      default:
        setActiveTab('calculators');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsNavigating(true);
      setActiveTab('chat');
      setCurrentQuestion(searchQuery);
      // Clear search input
      setSearchQuery('');
      // Smooth scroll to chat interface
      setTimeout(() => {
        const chatElement = document.getElementById('chat-interface');
        if (chatElement) {
          chatElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsNavigating(false);
      }, 300);
    }
  };

  const handleTopicClick = (topic: typeof featuredTopics[0]) => {
    setIsNavigating(true);
    setActiveTab('chat');
    setCurrentQuestion(topic.question);
    // Smooth scroll to chat interface
    setTimeout(() => {
      const chatElement = document.getElementById('chat-interface');
      if (chatElement) {
        chatElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsNavigating(false);
    }, 300);
  };

  const handleQuestionClick = (question: string) => {
    setIsNavigating(true);
    setActiveTab('chat');
    setCurrentQuestion(question);
    // Smooth scroll to chat interface
    setTimeout(() => {
      const chatElement = document.getElementById('chat-interface');
      if (chatElement) {
        chatElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsNavigating(false);
    }, 300);
  };

  const handleQuestionProcessed = useCallback(() => {
    setCurrentQuestion('');
    setIsNavigating(false);
  }, []);

  const featuredTopics = [
    {
      title: "Chemical Bonding",
      description: "Learn about ionic, covalent, and metallic bonds",
      icon: <Atom className="w-6 h-6" />,
      color: "bg-blue-500",
      question: "What is the difference between ionic and covalent bonds?"
    },
    {
      title: "Stoichiometry",
      description: "Master chemical calculations and mole ratios",
      icon: <Calculator className="w-6 h-6" />,
      color: "bg-green-500",
      question: "How do you balance chemical equations and calculate stoichiometry?"
    },
    {
      title: "Organic Reactions",
      description: "Explore organic chemistry mechanisms",
      icon: <Beaker className="w-6 h-6" />,
      color: "bg-purple-500",
      question: "What are the main types of organic reactions and their mechanisms?"
    },
    {
      title: "Periodic Trends",
      description: "Understand element properties and patterns",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-orange-500",
      question: "What are the trends in the periodic table?"
    }
  ];

  const popularQuestions = [
    "How do you balance chemical equations?",
    "What is the difference between ionic and covalent bonds?",
    "How do you calculate molarity?",
    "What are the trends in the periodic table?",
    "How does pH affect chemical reactions?"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Chemistry AI</h1>
                <p className="text-sm text-gray-600">Your Intelligent Chemistry Assistant</p>
              </div>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search chemistry topics..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'chat', label: 'AI Assistant', icon: <Lightbulb className="w-4 h-4" /> },
              { id: 'periodic', label: 'Periodic Table', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'calculators', label: 'Calculators', icon: <Calculator className="w-4 h-4" /> },
              { id: 'molecules', label: '3D Molecules', icon: <Beaker className="w-4 h-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'chat' | 'periodic' | 'calculators' | 'molecules')}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'chat' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Welcome to Chemistry AI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your intelligent chemistry assistant powered by comprehensive knowledge base.
                Ask questions, explore tools, and learn chemistry interactively.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chat Interface */}
              <div id="chat-interface" className={`lg:col-span-2 transition-all duration-300 ${isNavigating ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                <ChatInterface 
                  onToolSelect={handleToolSelect}
                  externalQuestion={currentQuestion}
                  onQuestionProcessed={handleQuestionProcessed}
                />
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Featured Topics */}
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured Topics</h3>
                  <div className="space-y-3">
                    {featuredTopics.map((topic, index) => (
                      <div 
                        key={index} 
                        onClick={() => handleTopicClick(topic)}
                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 hover:shadow-md cursor-pointer transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <div className={`p-2 ${topic.color} text-white rounded-lg transition-all hover:scale-110 group-hover:shadow-lg`}>
                          {topic.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{topic.title}</h4>
                          <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{topic.description}</p>
                          <div className="mt-1 text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to explore →
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Questions */}
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Questions</h3>
                  <div className="space-y-2">
                    {popularQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(question)}
                        className="group block w-full text-left text-sm text-blue-600 hover:text-blue-800 p-3 rounded hover:bg-blue-50 transition-all duration-200 hover:shadow-sm hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-transparent hover:border-blue-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="flex-1">{question}</span>
                          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                            →
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Tools */}
                <div className="bg-white p-6 rounded-lg shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Tools</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveTab('periodic')}
                      className="p-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
                    >
                      Periodic Table
                    </button>
                    <button
                      onClick={() => setActiveTab('calculators')}
                      className="p-3 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
                    >
                      Calculators
                    </button>
                    <button
                      onClick={() => setActiveTab('molecules')}
                      className="p-3 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium"
                    >
                      3D Molecules
                    </button>
                    <button 
                      onClick={() => handleQuestionClick("What are common chemistry reference materials and formulas?")}
                      className="p-3 bg-orange-100 text-orange-600 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium"
                    >
                      Reference
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'periodic' && <PeriodicTable />}
        {activeTab === 'calculators' && <ChemistryCalculators />}
        {activeTab === 'molecules' && <MoleculeViewer />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 bg-blue-600 rounded">
                  <Atom className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Chemistry AI</span>
              </div>
              <p className="text-sm text-gray-600">
                Your comprehensive chemistry learning platform with AI-powered assistance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Periodic Table</a></li>
                <li><a href="#" className="hover:text-blue-600">Molecular Calculator</a></li>
                <li><a href="#" className="hover:text-blue-600">Equation Balancer</a></li>
                <li><a href="#" className="hover:text-blue-600">3D Molecules</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Topics</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">General Chemistry</a></li>
                <li><a href="#" className="hover:text-blue-600">Organic Chemistry</a></li>
                <li><a href="#" className="hover:text-blue-600">Physical Chemistry</a></li>
                <li><a href="#" className="hover:text-blue-600">Inorganic Chemistry</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-3">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">How it Works</a></li>
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 Chemistry AI. All rights reserved. Built with Next.js and TypeScript.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}