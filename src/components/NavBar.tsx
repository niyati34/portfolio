
import React from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import AudioPlayer from './AudioPlayer';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 py-4 px-6 md:px-10",
      "glass-effect transition-all duration-300 backdrop-blur-md",
      className
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-comfortaa font-bold gradient-text">
          Portfolio<span className="text-purple-light">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-purple-light transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple-light after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-3">
          <AudioPlayer />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
