
import React from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={cn('fixed w-full z-50 py-6 px-6 md:px-12 lg:px-24 flex items-center justify-between backdrop-blur-md bg-background/70 border-b border-white/10', className)}>
      <div className="font-bold text-2xl">
        <span className="text-gradient">Studio</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
