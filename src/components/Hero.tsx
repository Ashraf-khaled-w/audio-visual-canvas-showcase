
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tighter">
          <span className="text-gradient">Audio-Visual</span> Storytelling
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Creating powerful stories through immersive video and audio experiences that captivate your audience and bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground">
            <a href="#work">View Portfolio</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/5">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
