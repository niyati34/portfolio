
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-comfortaa font-bold gradient-text">
              Portfolio<span className="text-purple-light">.</span>
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-foreground/70">
              © {new Date().getFullYear()} | Made with <Heart className="inline-block h-3 w-3 text-pink mx-1" fill="currentColor" /> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
