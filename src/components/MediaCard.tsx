
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Volume } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MediaCardProps {
  title: string;
  description: string;
  imageUrl: string;
  type: 'video' | 'audio';
  className?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ 
  title, 
  description, 
  imageUrl,
  type,
  className 
}) => {
  return (
    <Card className={cn('overflow-hidden border-white/10 bg-transparent glass-card group', className)}>
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" className="w-16 h-16 rounded-full bg-primary/80 hover:bg-primary">
            {type === 'video' ? (
              <Play className="h-8 w-8" />
            ) : (
              <Volume className="h-8 w-8" />
            )}
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
