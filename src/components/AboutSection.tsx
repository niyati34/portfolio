
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/30 dark:bg-muted/5">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg gradient-text mb-4">About Me</h2>
          <p className="text-foreground/70">Get to know more about me and my journey as a software engineer</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="heading-md mb-6 text-foreground">My Story</h3>
            <div className="space-y-4">
              <p>
                Hello! I'm a passionate software engineer who loves creating elegant solutions to complex problems.
                My journey began when I wrote my first line of code in college, and I've been hooked ever since.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in building responsive,
                user-friendly web applications that deliver exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>
            
            <Button className="btn-gradient mt-8 w-fit">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Education</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">B.S. Computer Science</p>
                  <p className="text-sm text-foreground/70">University of Technology, 2018-2022</p>
                </li>
                <li>
                  <p className="font-medium">Full-Stack Developer Bootcamp</p>
                  <p className="text-sm text-foreground/70">Code Academy, 2022</p>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Experience</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Software Engineer</p>
                  <p className="text-sm text-foreground/70">Tech Solutions Inc., 2022-Present</p>
                </li>
                <li>
                  <p className="font-medium">Frontend Developer</p>
                  <p className="text-sm text-foreground/70">Web Innovations, 2021-2022</p>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Interests</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Coding</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">UX Design</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">AI</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Reading</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Photography</li>
              </ul>
            </Card>
            
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Languages</h4>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-sm text-foreground/70">Native</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>French</span>
                  <span className="text-sm text-foreground/70">Intermediate</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Spanish</span>
                  <span className="text-sm text-foreground/70">Basic</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
