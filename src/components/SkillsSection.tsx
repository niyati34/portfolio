
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Layers3,Brush,Cloud,UserCheck, BrushIcon, Code2, Database, Smartphone, Users } from "lucide-react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const skills = [
    {
      name: "Front-end Development",
      proficiency: 92,
      description: "React.js, Angular, HTML5, CSS3, SASS, JavaScript, TypeScript, Bootstrap",
      category: "development",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      name: "Back-end Development",
      proficiency: 85,
      description: "Node.js, Express, PHP, Flask, FastAPI, .NET, MySQL, MongoDB",
      category: "development",
      icon: <Database className="w-6 h-6" />
    },
    {
      name: "UI/UX Design",
      proficiency: 95,
      description: "Figma, Adobe XD, Wireframing, Responsive Design, Accessibility",
      category: "design",
      icon: <Brush className="w-6 h-6" />
    },
    {
      name: "Cloud & DevOps",
      proficiency: 75,
      description: "Firebase, Netlify, Vercel, Heroku, AWS basics, GitHub Actions",
      category: "infrastructure",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: "Mobile Development",
      proficiency: 80,
      description: "Flutter, React Native, Android Basics",
      category: "development",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      name: "Soft Skills & Teamwork",
      proficiency: 90,
      description: "Agile, Scrum, Git, GitHub, Trello, Project Collaboration",
      category: "soft-skills",
      icon: <UserCheck className="w-6 h-6" />
    }
  ];

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="section bg-background relative overflow-hidden py-24">
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg gradient-text mb-4 inline-block tracking-wide font-black">
            <span className="text-5xl">S</span><span className="text-4xl">K</span><span className="text-5xl">I</span><span className="text-4xl">L</span><span className="text-5xl">L</span><span className="text-4xl">S</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto font-light tracking-wide">
            I've developed a <span className="font-semibold">diverse</span> set of technical and soft skills throughout my career
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-xl transform transition-all duration-300 ${
                hoveredSkill === index 
                  ? 'scale-105 shadow-lg shadow-purple/20' 
                  : ''
              }`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-secondary/50 p-3 rounded-lg text-purple">
                  {skill.icon}
                </div>
                <h3 className={`text-xl font-semibold transition-all duration-300 ${
                  hoveredSkill === index ? 'text-2xl gradient-text' : ''
                }`}>{skill.name}</h3>
              </div>
              
              <p className="text-sm text-foreground/70 mb-4 pl-14">{skill.description}</p>
              
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-grow">
                  <Progress 
                    value={skill.proficiency} 
                    className="h-2 bg-secondary"
                  />
                </div>
                <motion.span 
                  className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-light to-pink"
                  animate={{ 
                    scale: hoveredSkill === index ? [1, 1.2, 1] : 1 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.proficiency}%
                </motion.span>
              </div>
              
              <div className="absolute -z-10 opacity-10 blur-3xl rounded-full bg-purple/30 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Enhanced decorative background elements */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-light/5 blur-3xl animate-pulse-soft" />
      <div className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-pink-light/10 blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-purple/5 blur-2xl animate-float" />
      
      {/* Technical grid pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZoLTZ2LTZoMTJ2NnptLTE4LTZoLTZ2Nmg2di02em0xMi0xMmg2djZoLTZ2LTZ6bS0xMiAwaDZ2NmgtNnYtNnptMzAgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
    </section>
  );
};

export default SkillsSection;
