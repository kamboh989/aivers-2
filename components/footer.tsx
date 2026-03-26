import React from 'react';
import { Linkedin, Facebook, Globe, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Top CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Ready to transform your Ideas into <br />
            <span className="text-blue-500">Innovative Software Solutions?</span>
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-blue-900/20">
            Schedule a Free Consultation Today
          </button>
        </div>

        <hr className="border-gray-800 mb-16" />

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Solutions Column 1 */}
          <div>
            <h4 className="text-xl font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Webflow Design & Development</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Creative Branding</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Shopify Plus</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Shopify Mobile Apps</li>
            </ul>
          </div>

          {/* Solutions Column 2 */}
          <div className="lg:pt-12">
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">WordPress Development</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Custom Mobile Apps</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Full Stack Development</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">SEO / SMM / SEM</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-blue-500 cursor-pointer transition-colors">About</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">Team</li>
              <li className="hover:text-blue-500 cursor-pointer transition-colors">FAQs</li>
            </ul>
          </div>

          {/* Join Us Column */}
          <div>
            <h4 className="text-xl font-bold mb-6">Join us</h4>
            <p className="text-gray-400 text-sm mb-6 cursor-pointer hover:text-blue-500 transition-colors">Careers</p>
            <button className="bg-blue-600 text-white text-xs font-bold py-3 px-6 rounded hover:bg-blue-700 transition-all">
              Contact us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:row items-center justify-between gap-6">
          
          {/* Copyright and Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-[12px] text-gray-500 font-medium">
            <span>© {currentYear} aiverse.pk</span>
            {/* <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span> */}
          </div>

          {/* Social Icons (Blue Circle Style) */}
          <div className="flex gap-3">
            {[
              { Icon: Linkedin, link: '#' },
              { Icon: Facebook, link: '#' },
              { Icon: Github, link: '#' },
              { Icon: Instagram, link: '#' },
              { Icon: Globe, link: '#' }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.link}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <social.Icon size={14} fill="currentColor" className={idx === 4 ? '' : 'stroke-0'} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;