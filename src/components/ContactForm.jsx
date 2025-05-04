
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input 
            id="name" 
            placeholder="Your name" 
            className="bg-white/5 border-white/10 focus:border-primary"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Your email address"
            className="bg-white/5 border-white/10 focus:border-primary"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <Input 
          id="subject" 
          placeholder="Subject of your message"
          className="bg-white/5 border-white/10 focus:border-primary"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea 
          id="message" 
          placeholder="Your message..."
          className="bg-white/5 border-white/10 focus:border-primary min-h-[150px]"
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
