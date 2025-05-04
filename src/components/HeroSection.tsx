
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="home" className="section flex flex-col justify-center relative overflow-hidden pt-20">
      <div ref={containerRef} className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg md:text-xl font-medium text-purple animate-pulse-soft mb-2">
                Hello, I'm a Niyati Raiyani.
              </h2>
              <h1 className="heading-xl gradient-text mb-4 animate-text-gradient">
                Software Engineer
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
                Crafting beautiful digital experiences with code and creativity.
                Specializing in building exceptional web applications.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects">
            <Button className="btn-gradient">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </a>
            <a href="#contact">
            <Button variant="outline" className="border-purple hover:text-purple-light transition-colors">
              Get In Touch
            </Button>
            </a>
            </div>
            
            <div className="pt-6 flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-accent-foreground font-bold text-lg">
                  3+
                </div>
                <div className="ml-2">
                  <p className="text-sm text-foreground/70">Years of</p>
                  <p className="font-medium">Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-secondary text-accent-foreground font-bold text-lg">
                  15+
                </div>
                <div className="ml-2">
                  <p className="text-sm text-foreground/70">Projects</p>
                  <p className="font-medium">Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative hidden lg:flex justify-center items-center",
            "before:content-[''] before:absolute before:w-[500px] before:h-[500px]",
            "before:bg-gradient-to-r before:from-purple-light/20 before:to-pink-light/20",
            "before:blur-[100px] before:rounded-full before:-z-10"
          )}>
            <div className="w-[350px] h-[350px] rounded-full overflow-hidden border-4 border-white/20 animate-float shadow-2xl">
              <img
                src="/assets/IMG_20231201_194648_448.jpg"
                alt="Software Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-light/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-pink-light/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
