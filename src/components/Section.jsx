
import React from 'react';
import { cn } from '@/lib/utils';

const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <section 
      id={id} 
      className={cn('py-20 px-6 md:px-12 lg:px-24', className)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
