import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              John Developer
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate software developer creating innovative solutions and exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-200">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>john@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2025 John Developer. Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group bg-gray-800 hover:bg-gray-700 p-3 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <ArrowUp size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;