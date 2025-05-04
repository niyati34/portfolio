
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
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with user authentication, product catalog, and payment gateway integration.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, set deadlines, and track progress using drag and drop features.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Mobile",
    tags: ["React Native", "Redux", "Firebase"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website with smooth animations, dark/light mode, and responsive design.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "UI/UX",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "API Service",
    description: "A RESTful API service for data management with authentication, rate limiting, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Backend",
    tags: ["Node.js", "Express", "PostgreSQL", "Swagger"],
    demoLink: "#",
    githubLink: "#"
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
