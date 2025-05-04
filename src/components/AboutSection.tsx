
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
    A builder at heart and a problem-solver by mindset, I thrive on transforming complex challenges into impactful digital solutions.
    As the Co-Founder & CTO of Karoza Technologies LLP, I lead with a hands-on approach in full-stack and mobile development.
  </p>
  <p>
    My work spans AI-driven testing platforms, smart transportation systems, and user-centric applications — all rooted in a deep understanding of both frontend finesse and backend logic.
    I bring ideas to life with clean, scalable code and a strong eye for design and usability.
  </p>
  <p>
    Whether I’m contributing to open-source, mentoring peers, or staying up-to-date with the latest tech trends, I stay curious and committed to constant growth — both for myself and those I collaborate with.
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
                  <p className="font-medium">B.Tech Computer Science</p>
                  <p className="text-sm text-foreground/70">Marwadi University, 2022-2026</p>
                </li>
                <li>
                  <p className="font-medium">Secondary & Higher Secondary</p>
                  <p className="text-sm text-foreground/70">Dholakiya Schools</p>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Experience</h4>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Founder & CTO</p>
                  <p className="text-sm text-foreground/70">Karoza Technologies LLP</p>
                </li>
                <li>
                  <p className="font-medium">operational intern</p>
                  <p className="text-sm text-foreground/70">i scribblers</p>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Interests</h4>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Coding</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">UX Design</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">AI</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Designing</li>
                <li className="bg-secondary/50 px-3 py-1 rounded-full text-sm">Gardening</li>
              </ul>
            </Card>
            
            <Card className="p-6 glass-effect">
              <h4 className="heading-sm mb-4 gradient-text">Languages</h4>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Gujarati</span>
                  <span className="text-sm text-foreground/70">Native</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-sm text-foreground/70">Advanced</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Hindi</span>
                  <span className="text-sm text-foreground/70">Intermediate</span>
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
