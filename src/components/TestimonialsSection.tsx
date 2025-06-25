
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      content: "PPCPro increased our ROI by 45% in just 3 months. The AI bid management is incredibly sophisticated and saves us 20+ hours per week.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "E-commerce Manager",
      company: "RetailMax",
      content: "The automated keyword research feature discovered opportunities we never would have found manually. Our CTR improved by 60%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emily Johnson",
      role: "Digital Marketing Lead",
      company: "GrowthCorp",
      content: "Finally, a PPC tool that actually works as advertised. The budget optimization alone pays for the entire platform cost.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-news-plantin text-heading-lg text-brand-blue mb-6">
            Trusted by Marketing Teams 
            <span className="text-brand-coral"> Worldwide</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their PPC performance with our AI-powered automation platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex text-brand-coral mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-brand-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-brand-coral">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
