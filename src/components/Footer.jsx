
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/10 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-2xl mb-6">
          <span className="text-gradient">Studio</span>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
            <a 
              key={social} 
              href="#" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label={social}
            >
              {social}
            </a>
          ))}
        </div>
        <div className="text-muted-foreground text-sm">
          &copy; {currentYear} Audio-Visual Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
