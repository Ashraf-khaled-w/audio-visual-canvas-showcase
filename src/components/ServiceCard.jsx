
import React from 'react';
import { cn } from '@/lib/utils';

const ServiceCard = ({ icon: Icon, title, description, className }) => {
  return (
    <div className={cn('glass-card p-8 rounded-lg flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300', className)}>
      <div className="mb-6 p-4 rounded-full bg-primary/20">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
