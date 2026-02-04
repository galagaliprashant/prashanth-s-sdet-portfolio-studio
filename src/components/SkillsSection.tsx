import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section3DDecor from "./Section3DDecor";

interface Skill {
  name: string;
  category: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  // API Testing
  { name: "RestAssured", category: "API", level: 95, icon: "🔌" },
  { name: "Postman", category: "API", level: 90, icon: "📮" },
  { name: "GraphQL", category: "API", level: 85, icon: "◈" },
  { name: "SoapUI", category: "API", level: 80, icon: "🧼" },
  // Web Automation
  { name: "Selenium", category: "Web", level: 95, icon: "🌐" },
  { name: "Cypress", category: "Web", level: 92, icon: "⚡" },
  { name: "Playwright", category: "Web", level: 88, icon: "🎭" },
  { name: "TestCafe", category: "Web", level: 75, icon: "☕" },
  // Mobile
  { name: "Appium", category: "Mobile", level: 90, icon: "📱" },
  { name: "XCUITest", category: "Mobile", level: 82, icon: "🍎" },
  { name: "Espresso", category: "Mobile", level: 78, icon: "🤖" },
  // Tools & Frameworks
  { name: "Jenkins", category: "CI/CD", level: 88, icon: "🔧" },
  { name: "Docker", category: "CI/CD", level: 85, icon: "🐳" },
  { name: "Git", category: "CI/CD", level: 92, icon: "📂" },
];

const categories = ["All", "API", "Web", "Mobile", "CI/CD"];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* 3D Decoration */}
      <Section3DDecor position="left" color="#0891b2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            >
              Technical Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              Tools & Technologies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Proficient in modern automation tools and frameworks for building 
              scalable and maintainable test solutions
            </motion.p>
          </div>

          {/* Category Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((category) => (
              <motion.span
                key={category}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-sm font-medium bg-card text-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {category}
              </motion.span>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px -15px rgba(20, 184, 166, 0.2)"
                }}
                className="group relative p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Category Badge */}
                <span className="relative z-10 absolute top-3 right-3 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {skill.category}
                </span>

                {/* Icon & Name */}
                <div className="relative z-10 flex items-center gap-3 mb-4">
                  <motion.span 
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress Bar */}
                <div className="relative z-10 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="font-medium text-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
