
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import MediaCard from './components/MediaCard';
import ServiceCard from './components/ServiceCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Camera, Music, Video, Code } from 'lucide-react';
import { Toaster } from 'sonner';

const App = () => {
  // Sample video projects
  const videoProjects = [
    {
      title: 'Brand Commercial',
      description: 'Corporate video production for a tech company',
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
      type: 'video'
    },
    {
      title: 'Music Video',
      description: 'Creative direction and production for indie artist',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      type: 'video'
    },
    {
      title: 'Documentary Short',
      description: 'Environmental documentary series episode',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      type: 'video'
    }
  ];

  // Sample audio projects
  const audioProjects = [
    {
      title: 'Podcast Production',
      description: 'Full podcast series production and editing',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      type: 'audio'
    },
    {
      title: 'Music Composition',
      description: 'Original score for independent film',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      type: 'audio'
    }
  ];

  // Services offered
  const services = [
    {
      icon: Camera,
      title: 'Video Production',
      description: 'Professional video production services from concept to completion, including filming, editing, and post-production.'
    },
    {
      icon: Music,
      title: 'Audio Engineering',
      description: 'High-quality audio recording, mixing, and mastering services for music, podcasts, and voice-overs.'
    },
    {
      icon: Video,
      title: 'Live Streaming',
      description: 'Professional live streaming services for events, conferences, and performances with multiple camera setups.'
    },
    {
      icon: Code,
      title: 'Interactive Media',
      description: 'Custom interactive media solutions combining audio, video, and web technologies for unique user experiences.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <Section 
        id="work" 
        title="Featured Projects" 
        subtitle="Explore a selection of our recent video and audio productions"
        className="bg-black/20"
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">Video Production</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {videoProjects.map((project, index) => (
            <MediaCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              type={project.type}
            />
          ))}
        </div>
        
        <h3 className="text-2xl font-semibold mb-8 text-center">Audio Production</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audioProjects.map((project, index) => (
            <MediaCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              type={project.type}
            />
          ))}
        </div>
      </Section>
      
      <Section 
        id="services" 
        title="Our Services" 
        subtitle="Professional audio and video services for your creative projects"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Section>
      
      <Section 
        id="about" 
        title="About Us" 
        subtitle="Passionate about creating impactful audio-visual experiences"
        className="bg-black/20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-6">
            With over a decade of experience in the audio-visual industry, our team of creative professionals is dedicated to delivering high-quality content that exceeds expectations. We combine technical expertise with artistic vision to bring your ideas to life.
          </p>
          <p>
            From concept development to final delivery, we work closely with our clients to ensure that every project reflects their unique voice and achieves their specific goals. Our commitment to excellence and attention to detail has earned us the trust of clients across various industries.
          </p>
        </div>
      </Section>
      
      <Section 
        id="contact" 
        title="Get In Touch" 
        subtitle="Ready to start your next audio-visual project? Contact us today!"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="mb-8 text-muted-foreground">
              Fill out the form and we'll get back to you as soon as possible. We're looking forward to learning more about your project.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary">📍</span>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">123 Creative Ave, Studio City, CA 90210</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary">📧</span>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">hello@av-studio.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-primary">📞</span>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 rounded-lg">
            <ContactForm />
          </div>
        </div>
      </Section>
      
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
