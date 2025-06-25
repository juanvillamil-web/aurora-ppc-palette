
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-news-plantin text-2xl font-bold mb-4">
              PPC<span className="text-brand-light-blue">Pro</span>
            </div>
            <p className="text-brand-light-blue/70 mb-4">
              AI-powered PPC automation that drives results 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-light-blue hover:text-brand-coral transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-brand-light-blue hover:text-brand-coral transition-colors">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-brand-light-blue/70">
              <li><a href="#" className="hover:text-brand-coral transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-brand-light-blue/70">
              <li><a href="#" className="hover:text-brand-coral transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-brand-light-blue/70">
              <li><a href="#" className="hover:text-brand-coral transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-coral transition-colors">Webinars</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-light-blue/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-light-blue/70 text-sm">
            © 2024 PPCPro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-brand-light-blue/70 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-coral transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-coral transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-coral transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
