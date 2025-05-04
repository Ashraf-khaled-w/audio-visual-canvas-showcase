
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import MediaCard from '@/components/MediaCard';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Video, AudioLines, Film, Music, Headphones, Mic } from 'lucide-react';

const Index = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      description: 'A cinematic brand film for a leading tech company showcasing their innovative solutions.',
      imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      type: 'video' as const
    },
    {
      id: 2,
      title: 'Music Production',
      description: 'Original soundtrack composition and production for an award-winning documentary series.',
      imageUrl: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80',
      type: 'audio' as const
    },
    {
      id: 3,
      title: 'Commercial Spot',
      description: 'A 30-second commercial spot with custom sound design for a national advertising campaign.',
      imageUrl: 'https://images.unsplash.com/photo-1516035645781-9f4cb084c6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      type: 'video' as const
    },
    {
      id: 4,
      title: 'Podcast Production',
      description: 'Full audio production for a weekly business podcast including recording, editing, and mixing.',
      imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      type: 'audio' as const
    }
  ];

  // Services data
  const services = [
    {
      icon: Video,
      title: 'Video Production',
      description: 'Full-service video production from concept development to post-production including filming, editing, and color grading.'
    },
    {
      icon: AudioLines,
      title: 'Audio Production',
      description: 'Professional audio recording, editing, mixing, and mastering for all types of projects.'
    },
    {
      icon: Film,
      title: 'Motion Graphics',
      description: 'Custom 2D and 3D animations and motion graphics to enhance your visual storytelling.'
    },
    {
      icon: Music,
      title: 'Sound Design',
      description: 'Create immersive audio experiences with custom sound effects and ambient sound design.'
    },
    {
      icon: Headphones,
      title: 'Podcast Production',
      description: 'End-to-end podcast production including recording, editing, mixing, and distribution.'
    },
    {
      icon: Mic,
      title: 'Voice Over',
      description: 'Professional voice over recording and production for commercials, narration, and more.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      
      {/* Work Section */}
      <Section 
        id="work" 
        title="Featured Work"
        subtitle="Explore our latest projects across video and audio production"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <MediaCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              type={project.type}
              className="animate-fade-in"
            />
          ))}
        </div>
      </Section>
      
      {/* Services Section */}
      <Section 
        id="services" 
        title="Our Services"
        subtitle="Professional audio and video services tailored to your needs"
        className="bg-secondary/5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      
      {/* About Section */}
      <Section 
        id="about" 
        title="About Us"
        subtitle="Passionate about creating impactful audio-visual experiences"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              With over a decade of experience in the industry, our studio specializes in creating high-quality audio and video content that resonates with audiences and achieves your communication goals.
            </p>
            <p className="text-lg">
              Our team of directors, cinematographers, editors, sound designers, and music composers work collaboratively to deliver exceptional results for every project, whether it's a corporate video, commercial, documentary, podcast, or original music production.
            </p>
            <p className="text-lg">
              We pride ourselves on our attention to detail, creative approach, and dedication to exceeding client expectations on every project.
            </p>
          </div>
          <div className="relative h-80 lg:h-full min-h-[400px] rounded-lg overflow-hidden glass-card">
            <img 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Studio setup"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          </div>
        </div>
      </Section>
      
      {/* Contact Section */}
      <Section 
        id="contact" 
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can bring your vision to life"
        className="bg-secondary/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-lg">contact@audio-visual-studio.com</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="text-lg">123 Creative Ave, Suite 400<br />Los Angeles, CA 90210</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Index;
