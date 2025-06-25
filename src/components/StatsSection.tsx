
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Active Campaigns",
      description: "Managed daily across all platforms"
    },
    {
      number: "$50M+",
      label: "Ad Spend Optimized",
      description: "With measurable ROI improvements"
    },
    {
      number: "157%",
      label: "Average CTR Increase",
      description: "Within first 90 days of automation"
    },
    {
      number: "24/7",
      label: "Continuous Monitoring",
      description: "AI never sleeps, neither do your campaigns"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-brand-blue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-news-plantin text-heading-lg text-white mb-6">
            Results That Speak for 
            <span className="text-brand-coral"> Themselves</span>
          </h2>
          <p className="text-body-lg text-brand-light-blue/80 max-w-2xl mx-auto">
            Our AI-powered platform delivers consistent, measurable results across industries and campaign types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <div className="text-5xl lg:text-6xl font-bold text-brand-coral mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-brand-light-blue/70 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
