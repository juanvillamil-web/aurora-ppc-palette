
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-brand-blue text-white py-20 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-brand-light-blue text-brand-blue hover:bg-brand-light-blue/90">
                AI-Powered
              </Badge>
              <Badge className="bg-brand-coral text-brand-blue hover:bg-brand-coral/90">
                24/7 Automation
              </Badge>
              <Badge className="bg-white/10 text-white hover:bg-white/20">
                Enterprise Ready
              </Badge>
            </div>
            
            <h1 className="font-news-plantin text-hero lg:text-7xl leading-tight">
              Automate Your PPC Campaigns with 
              <span className="text-brand-light-blue"> AI Precision</span>
            </h1>
            
            <p className="text-body-lg text-brand-light-blue/80 max-w-xl">
              Stop wasting time on manual bid adjustments and keyword research. Our AI-powered platform optimizes your campaigns 24/7, delivering better results while you focus on strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-brand-coral hover:bg-brand-coral/90 text-brand-blue font-semibold px-8 py-4 text-lg"
                onClick={() => (window as any).gtag_report_conversion()}
              >
                Start 14-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-light-blue text-brand-light-blue hover:bg-brand-light-blue hover:text-brand-blue px-8 py-4 text-lg"
                onClick={() => (window as any).gtag_report_conversion()}
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-coral">40%</div>
                <div className="text-sm text-brand-light-blue/70">Higher ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-coral">60%</div>
                <div className="text-sm text-brand-light-blue/70">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-coral">24/7</div>
                <div className="text-sm text-brand-light-blue/70">Monitoring</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="h-4 bg-brand-coral rounded w-3/4"></div>
                <div className="h-4 bg-brand-light-blue rounded w-1/2"></div>
                <div className="h-4 bg-white/30 rounded w-5/6"></div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-brand-coral/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-coral">+157%</div>
                    <div className="text-sm text-brand-light-blue">CTR Increase</div>
                  </div>
                  <div className="bg-brand-light-blue/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-brand-light-blue">-32%</div>
                    <div className="text-sm text-white">CPC Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
