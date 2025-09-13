import React from 'react';
import { Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Globe,
      href: '#',
      label: 'Website'
    }
  ];

  return (
    <footer className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h3 className="text-2xl font-light mb-2">
              <span style={{ color: 'var(--brand-700)' }} className="font-medium">STAY</span>
              <span className="text-gray-600"> by Tobiira IO</span>
            </h3>
            <p className="text-gray-500 font-light">
              Spatial Data & Intelligence
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8 animate-slide-up animate-delay-200">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group p-3 rounded-full border-2 border-gray-200 transition-all duration-300 hover:scale-110"
                style={{
                  hover: {
                    borderColor: 'var(--brand-700)',
                    backgroundColor: 'var(--brand-700)'
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-700)';
                  e.currentTarget.style.backgroundColor = 'var(--brand-700)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-label={link.label}
              >
                <link.icon 
                  className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" 
                />
              </a>
            ))}
          </div>

          <div className="animate-slide-up animate-delay-400">
            <p className="text-sm text-gray-500 font-light">
              © 2025 Tobiira IO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;