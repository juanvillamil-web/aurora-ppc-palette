
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      {/* Coral Banner */}
      <div className="bg-brand-coral py-3 px-4 text-center">
        <p className="text-brand-blue font-medium text-body-sm">
          🚀 New: Advanced Bid Management AI - Increase ROI by up to 40%
        </p>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-brand-blue text-white py-4 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="font-news-plantin text-2xl font-bold">
              PPC<span className="text-brand-light-blue">Pro</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="hover:text-brand-light-blue transition-colors">Features</a>
              <a href="#pricing" className="hover:text-brand-light-blue transition-colors">Pricing</a>
              <a href="#about" className="hover:text-brand-light-blue transition-colors">About</a>
              <a href="#contact" className="hover:text-brand-light-blue transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-brand-light-blue text-brand-light-blue hover:bg-brand-light-blue hover:text-brand-blue">
              Sign In
            </Button>
            <Button className="bg-brand-coral hover:bg-brand-coral/90 text-brand-blue font-medium">
              Start Free Trial
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
