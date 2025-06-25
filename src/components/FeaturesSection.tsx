
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Bid Management",
      description: "AI algorithms continuously optimize bids based on performance data, competitor analysis, and market trends.",
      icon: "🎯",
      badge: "Core Feature"
    },
    {
      title: "Automated Keyword Research",
      description: "Discover high-converting keywords and negative keywords automatically with our advanced NLP engine.",
      icon: "🔍",
      badge: "AI-Powered"
    },
    {
      title: "Ad Copy Optimization",
      description: "Generate and test multiple ad variations using machine learning to find the highest performing creative.",
      icon: "✨",
      badge: "New"
    },
    {
      title: "Budget Distribution",
      description: "Intelligently allocate budget across campaigns and ad groups based on performance and opportunity.",
      icon: "💰",
      badge: "Smart"
    },
    {
      title: "Performance Analytics",
      description: "Deep insights with predictive analytics, custom dashboards, and automated reporting.",
      icon: "📊",
      badge: "Advanced"
    },
    {
      title: "Cross-Platform Sync",
      description: "Manage Google Ads, Microsoft Ads, and Facebook Ads from one unified dashboard.",
      icon: "🔄",
      badge: "Enterprise"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 lg:px-8 bg-brand-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-news-plantin text-heading-lg text-brand-blue mb-6">
            Powerful Features for 
            <span className="text-brand-coral"> Complete Automation</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools handles every aspect of your PPC campaigns, 
            from keyword research to bid optimization, so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge className="bg-brand-light-blue text-brand-blue">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-brand-blue group-hover:text-brand-coral transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
