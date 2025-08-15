'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { searchQuestions, getRelatedQuestions } from '@/data/chemistry-qa';
import { enhancedProcessQuery } from '@/utils/enhanced-qa';
import { ChemistryQuestion } from '@/types/chemistry';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  relatedQuestions?: ChemistryQuestion[];
  relatedTools?: string[];
}

interface ChatInterfaceProps {
  onToolSelect?: (tool: string) => void;
  externalQuestion?: string;
  onQuestionProcessed?: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onToolSelect, externalQuestion, onQuestionProcessed }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your Chemistry AI assistant. I can help you with chemistry questions, calculations, and concepts. What would you like to learn about today?",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleExternalQuestion = useCallback(async (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);

    // Use enhanced query processing
    const enhancedResult = enhancedProcessQuery(question);
    
    let response = "";
    let relatedQuestions: ChemistryQuestion[] = [];
    let relatedTools: string[] = [];

    if (enhancedResult.confidence > 0.7) {
      response = enhancedResult.answer;
      relatedTools = enhancedResult.relatedTools || [];
      
      if (enhancedResult.calculationResult) {
        response += `\n\n💡 **Result: ${enhancedResult.calculationResult}**`;
      }
    } else {
      const searchResults = searchQuestions(question);
      
      if (searchResults.length > 0) {
        const bestMatch = searchResults[0];
        response = bestMatch.answer;
        relatedQuestions = getRelatedQuestions(bestMatch.id);
        relatedTools = bestMatch.relatedTools || [];
      } else {
        response = enhancedResult.answer;
        relatedTools = enhancedResult.relatedTools || [];
      }
    }

    await simulateTyping(response, relatedQuestions, relatedTools);
  }, []);

  // Handle external questions
  useEffect(() => {
    if (externalQuestion && externalQuestion.trim()) {
      handleExternalQuestion(externalQuestion);
      onQuestionProcessed?.();
    }
  }, [externalQuestion, onQuestionProcessed, handleExternalQuestion]);

  const simulateTyping = async (response: string, relatedQuestions?: ChemistryQuestion[], relatedTools?: string[]) => {
    setIsTyping(true);
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
    
    setIsTyping(false);
    
    const botMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: response,
      timestamp: new Date(),
      relatedQuestions,
      relatedTools,
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Use enhanced query processing first
    const enhancedResult = enhancedProcessQuery(inputText);
    
    let response = "";
    let relatedQuestions: ChemistryQuestion[] = [];
    let relatedTools: string[] = [];

    // If enhanced processing gives high confidence, use it
    if (enhancedResult.confidence > 0.7) {
      response = enhancedResult.answer;
      relatedTools = enhancedResult.relatedTools || [];
      
      // Add calculation result if available
      if (enhancedResult.calculationResult) {
        response += `\n\n💡 **Result: ${enhancedResult.calculationResult}**`;
      }
    } else {
      // Fall back to database search for lower confidence
      const searchResults = searchQuestions(inputText);
      
      if (searchResults.length > 0) {
        const bestMatch = searchResults[0];
        response = bestMatch.answer;
        relatedQuestions = getRelatedQuestions(bestMatch.id);
        relatedTools = bestMatch.relatedTools || [];
      } else {
        // Use enhanced result even if low confidence
        response = enhancedResult.answer;
        relatedTools = enhancedResult.relatedTools || [];
      }
    }

    await simulateTyping(response, relatedQuestions, relatedTools);
  };

  const handleQuickQuestion = (question: ChemistryQuestion) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: question.question,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    
    const relatedQuestions = getRelatedQuestions(question.id);
    simulateTyping(question.answer, relatedQuestions, question.relatedTools);
  };

  const handleToolClick = (tool: string) => {
    onToolSelect?.(tool);
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg border">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Bot className="w-6 h-6" />
          Chemistry AI Assistant
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-blue-600' : 'bg-gray-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              
              <div className={`p-3 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <p className="text-sm">{message.content}</p>
                
                {/* Related Tools */}
                {message.relatedTools && message.relatedTools.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-300">
                    <p className="text-xs font-semibold mb-2">Try these tools:</p>
                    <div className="flex flex-wrap gap-1">
                      {message.relatedTools.map((tool, index) => (
                        <button
                          key={index}
                          onClick={() => handleToolClick(tool)}
                          className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"
                        >
                          {tool.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Related Questions */}
                {message.relatedQuestions && message.relatedQuestions.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-300">
                    <p className="text-xs font-semibold mb-2">Related questions:</p>
                    <div className="space-y-1">
                      {message.relatedQuestions.slice(0, 3).map((q) => (
                        <button
                          key={q.id}
                          onClick={() => handleQuickQuestion(q)}
                          className="block text-xs text-blue-600 hover:text-blue-800 text-left transition-colors"
                        >
                          • {q.question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask a chemistry question..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isTyping}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;