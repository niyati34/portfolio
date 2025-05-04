
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Github } from "lucide-react";

const projectCategories = ["All", "Web", "Mobile", "UI/UX", "Backend"];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Casey AI – AI-Powered Test Automation Tool",
    description: "An AI-based test automation tool that generates test cases from product descriptions and automates them using Selenium, Flask, and GitHub Actions.",
    image: "/assets/Screenshot (828).png", // Replace with your screenshot
    category: "AI",
    tags: ["Python", "Flask", "Selenium", "GitHub Actions"],
    demoLink: "https://caseyai-production.up.railway.app",
    githubLink: "https://github.com/niyati34/CaseyAi"
  },
  {
    id: 2,
    title: "Seasonal Plate Pal – Smart Diet Planning App",
    description: "A full-stack web app that generates meal plans based on seasonal fruits and vegetables using user preferences and dietary goals.",
    image: "/assets/Screenshot 2025-05-05 022237.png", // Replace with your screenshot
    category: "Web",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoLink: "https://seasonal-plate-pal.vercel.app",
    githubLink: "https://github.com/niyati34/seasonal-plate-pal"
  },
  {
    id: 3,
    title: "E-Commerce Platform – Adaa Jaipur (Best UI/UX Award)",
    description: "A full-featured online shopping platform with product listings, cart, admin panel, and secure payment integration using MERN stack.",
    image: "/assets/440128208-1842e9d6-6be0-44e7-ac79-6ee49811c2f4.png", // Replace with your screenshot
    category: "Web",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoLink: "https://dhairyafrontend.netlify.app",
    githubLink: "https://github.com/niyati34/adaa-jaipur_client"
  },
  {
    id: 4,
    title: "Prevenzo – Road Safety & Hazard Detection App",
    description: "An Android IoT app that detects road accidents and potholes, and notifies nearby users and authorities in real time.",
    image: "/assets/440139254-28e87e60-9e79-4b5a-ba36-a254ab3c2056.png", // Replace with your screenshot
    category: "Mobile",
    tags: ["Java", "Android", "Firebase", "IoT"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/Prevenzo"
  },
  {
    id: 5,
    title: "Virtual Try-On System",
    description: "A computer vision app that overlays virtual clothing on users using webcam input, OpenCV, and deep learning with MediaPipe.",
    image: "/assets/440135484-206cec04-34b4-4ae4-9efb-d24c2788c510.png", // Replace with your screenshot
    category: "AI",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/virtual-dressing-room"
  },
  {
    id: 6,
    title: "Arthik – Barter Skill Exchange Platform",
    description: "A MERN stack web app where users exchange skills instead of money, with real-time messaging and request handling features.",
    image: "/assets/Screenshot 2025-05-05 022431.png", // Replace with your screenshot
    category: "Web",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoLink: "https://my-app-nine-navy.vercel.app",
    githubLink: "https://github.com/niyati34/Arthik"
  },
  {
    id: 7,
    title: "NatureThe Flora – Environmental Awareness Web App",
    description: "An interactive web platform educating users about flora, sustainability, and the environment using engaging UI.",
    image: "/assets/440138667-d3734044-40e4-4b80-b1f7-2d56679fcf22.png", // Replace with your screenshot
    category: "UI/UX",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/The_Flora"
  },
  {
    id: 8,
    title: "Crowd Detection in City Buses",
    description: "An IoT-based AI solution to detect and monitor crowd levels in public transport using sensors and Python-based microservices.",
    image: "https://images.unsplash.com/photo-1600180758890-d54f3dd973ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Replace with your screenshot
    category: "AI",
    tags: ["IoT", "Python", "Microservices", "AI"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/crowd-detection"
  }
];


const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  
  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === category));
    }
  };
  
  return (
    <section id="projects" className="section bg-muted/30 dark:bg-muted/5">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg gradient-text mb-4">My Projects</h2>
          <p className="text-foreground/70">
            Explore some of my recent work and personal projects
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-purple-light to-pink-DEFAULT text-white' 
                  : 'hover:text-purple-light'
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map(project => (
            <Card 
              key={project.id}
              className="overflow-hidden glass-effect group transition-all duration-300 hover:shadow-lg hover:shadow-purple-light/20"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <span className="text-xs bg-secondary/70 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-background px-2 py-1 rounded-full border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Eye className="h-4 w-4" /> Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github className="h-4 w-4" /> Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-gradient">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
