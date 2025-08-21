import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Github } from "lucide-react";

const projectCategories = ["All", "Web", "Mobile", "UI/UX", "Backend", "AI"];

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
    title: "Arthik – Barter Skill Exchange Platform",
    description:
      "A MERN stack web app where users exchange skills instead of money, with real-time messaging and request handling features.",
    image: "/assets/Screenshot 2025-08-21 222401.png",
    category: "Web",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoLink: "https://my-app-nine-navy.vercel.app",
    githubLink: "https://github.com/niyati34/Arthik",
  },
  {
    id: 2,
    title: "Box Cricket Booking System",
    description:
      "Robust web app for box cricket ground booking with roles, QR check-in, and admin panel.",
    image: "/assets/Screenshot 2025-08-21 222707.png", // replace with screenshot if available
    category: "Web",
    tags: [
      "PHP 7.4+",
      "MySQL 5.7+",
      "PHPMailer",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    demoLink: "https://boxpro.infinityfreeapp.com/",
    githubLink: "https://github.com/niyati34/box_cricket",
  },
  {
    id: 3,
    title: "College Meme Page",
    description:
      "A modern, minimalist meme-sharing platform for college communities. Features image/video uploads, aspect ratio selection, trending feed, category filters, and comments.",
    image: "/assets/Screenshot 2025-08-21 222540.png", // replace with screenshot
    category: "Web",
    tags: ["React", "Express", "MongoDB", "Cloudinary", "TailwindCSS"],
    demoLink: "https://college-meme-page.vercel.app",
    githubLink: "https://github.com/niyati34/college-meme-page",
  },
  {
    id: 4,
    title: "Casey AI – AI-Powered Test Automation Tool",
    description:
      "An AI-based test automation tool that generates test cases from product descriptions and automates them using Selenium, Flask, and GitHub Actions.",
    image: "/assets/Screenshot (828).png",
    category: "AI",
    tags: ["Python", "Flask", "Selenium", "GitHub Actions"],
    demoLink: "https://caseyai.onrender.com",
    githubLink: "https://github.com/niyati34/CaseyAi",
  },

  {
    id: 5,
    title: "E-Commerce Platform – Adaa Jaipur (Best UI/UX Award)",
    description:
      "A full-featured online shopping platform with product listings, cart, admin panel, and secure payment integration using MERN stack.",
    image: "/assets/440128208-1842e9d6-6be0-44e7-ac79-6ee49811c2f4.png",
    category: "Web",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    demoLink: "https://dhairyafrontend.netlify.app",
    githubLink: "https://github.com/niyati34/adaa-jaipur_client",
  },

  {
    id: 6,
    title: "Skippy – Student Dashboard",
    description:
      "Study dashboard for students: extract notes, generate flashcards, organize class schedules, and manage your academic life.",
    image: "/assets/Screenshot 2025-08-21 222616.png",
    category: "Web",
    tags: [
      "React 18",
      "TypeScript",
      "Vite 5",
      "Tailwind",
      "shadcn/ui",
      "Azure OpenAI",
    ],
    demoLink: "https://skippy-kohl.vercel.app",
    githubLink: "https://github.com/niyati34/skippy",
  },
  {
    id: 7,
    title: "Seasonal Plate Pal – Smart Diet Planning App",
    description:
      "A full-stack web app that generates meal plans based on seasonal fruits and vegetables using user preferences and dietary goals.",
    image: "/assets/Screenshot 2025-05-05 022237.png",
    category: "Web",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    demoLink: "https://seasonal-plate-pal.vercel.app",
    githubLink: "https://github.com/niyati34/seasonal-plate-pal",
  },
  {
    id: 8,
    title: "Talksy",
    description:
      "Talksy is a voice-enabled AI support assistant that uses GPT-4o and RAG to deliver real-time, business-aware responses with dynamic, brand-matching UI.",
    image: "/assets/Screenshot 2025-08-21 222746.png",
    category: "AI",
    tags: ["Python", "Flask", "Selenium", "GitHub Actions"],
    demoLink: "https://talksy-5w72.onrender.com",
    githubLink: "https://github.com/niyati34/Talksy",
  },
  {
    id: 9,
    title: "The Flora – Nature-Themed Web App",
    description:
      "Interactive nature-themed website with plant scanning and gift features for tree planters.",
    image: "/assets/440138667-d3734044-40e4-4b80-b1f7-2d56679fcf22.png",
    category: "UI/UX",
    tags: [
      "React 19+",
      "Bootstrap 5.3",
      "Vite 7+",
      "Context API",
      "Font Awesome",
    ],
    demoLink: "https://the-flora-42od.vercel.app/",
    githubLink: "https://github.com/niyati34/The_Flora",
  },

  {
    id: 10,
    title: "Cafe Management System",
    description:
      "Cafe/restaurant website with admin panel, built in PHP/MySQL.",
    image: "/assets/Screenshot 2025-08-21 222450.png",
    category: "Web",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    demoLink: "https://food-restaurant.infinityfreeapp.com/",
    githubLink: "https://github.com/niyati34/Cafe_Management",
  },
  {
    id: 11,
    title: "Prevenzo – Road Safety & Hazard Detection App",
    description:
      "An Android IoT app that detects road accidents and potholes, and notifies nearby users and authorities in real time.",
    image: "/assets/440139254-28e87e60-9e79-4b5a-ba36-a254ab3c2056.png",
    category: "Mobile",
    tags: ["Java", "Android", "Firebase", "IoT"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/Prevenzo",
  },
  {
    id: 12,
    title: "Virtual Try-On System",
    description:
      "A computer vision app that overlays virtual clothing on users using webcam input, OpenCV, and deep learning with MediaPipe.",
    image: "/assets/440135484-206cec04-34b4-4ae4-9efb-d24c2788c510.png",
    category: "AI",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/virtual-dressing-room",
  },
  {
    id: 13,
    title: "Crowd Detection in City Buses",
    description:
      "An IoT-based AI solution to detect and monitor crowd levels in public transport using sensors and Python-based microservices.",
    image:
      "https://images.unsplash.com/photo-1600180758890-d54f3dd973ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    category: "AI",
    tags: ["IoT", "Python", "Microservices", "AI"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/crowd-detection",
  },
  {
    id: 14,
    title: "Smart Projects Manager (WordPress Plugin)",
    description:
      "A modern WordPress plugin for project management with a React admin interface, secure REST API, and custom database integration.",
    image: "https://niyati34.github.io/assets/smart-manager.png",
    category: "Backend",
    tags: ["WordPress", "PHP", "React", "REST API"],
    demoLink: "#",
    githubLink: "https://github.com/niyati34/smart-projects-manager",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);

  const filterProjects = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(
        projects.filter((project) => project.category === category)
      );
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
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-light to-pink-DEFAULT text-white"
                  : "hover:text-purple-light"
              }`}
              onClick={() => filterProjects(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
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
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-background px-2 py-1 rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Eye size={16} />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
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
