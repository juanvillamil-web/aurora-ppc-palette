
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-brand-light-gray">
      <div className="max-w-5xl mx-auto">
        <Card className="border-0 shadow-2xl bg-white overflow-hidden">
          <CardContent className="p-12 lg:p-16 text-center">
            <div className="mb-8">
              <h2 className="font-news-plantin text-heading-lg text-brand-blue mb-6">
                Ready to Transform Your 
                <span className="text-brand-coral"> PPC Performance?</span>
              </h2>
              <p className="text-body-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Join thousands of marketers who have increased their ROI by an average of 40% 
                with our AI-powered PPC automation platform. Start your free trial today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-brand-coral hover:bg-brand-coral/90 text-brand-blue font-semibold px-8 py-4 text-lg">
                Start 14-Day Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Setup in under 5 minutes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Cancel anytime
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
