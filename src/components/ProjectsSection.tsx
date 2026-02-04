import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section3DDecor from "./Section3DDecor";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  tryUrl?: string;
  caseStudyUrl?: string;
  isLive?: boolean;
  image: string;
}

const projects: Project[] = [
  {
    title: "Headless CRUD Validator for Microservices",
    description: "Lightweight Python CRUD Bot that validates Booking Engine core logic without UI. Features stateful execution with dynamic authentication, deep JSON schema validation, and self-cleaning teardown. Reduced test execution from 45s to 1.2s.",
    techStack: ["Python", "requests", "JSON", "REST API", "CI/CD"],
    githubUrl: "https://github.com",
    tryUrl: "https://github.com",
    caseStudyUrl: "/case-study/headless-crud-validator",
    isLive: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    title: "API Test Framework",
    description: "A comprehensive REST API testing framework built with RestAssured and TestNG. Features data-driven testing, parallel execution, and detailed Allure reporting.",
    techStack: ["Java", "RestAssured", "TestNG", "Allure", "Maven"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    title: "E2E Web Automation Suite",
    description: "Selenium-based page object framework for e-commerce testing. Implements BDD with Cucumber, cross-browser testing, and CI/CD integration with Jenkins.",
    techStack: ["Python", "Selenium", "Cucumber", "Jenkins", "Docker"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    title: "Cypress Test Dashboard",
    description: "Modern React dashboard for test analytics with real-time reporting. Visualizes test results, execution trends, and failure analysis with interactive charts.",
    techStack: ["Cypress", "TypeScript", "React", "Chart.js", "Node.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Mobile Test Automation",
    description: "Cross-platform mobile testing solution using Appium for iOS and Android. Includes gesture testing, screenshot comparison, and device farm integration.",
    techStack: ["Appium", "Java", "XCUITest", "Espresso", "AWS Device Farm"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    title: "Performance Testing Toolkit",
    description: "JMeter-based performance testing suite with custom plugins for API load testing. Includes Grafana dashboards and automated threshold validation.",
    techStack: ["JMeter", "Grafana", "InfluxDB", "Python", "Kubernetes"],
    githubUrl: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden">
      {/* 3D Decoration */}
      <Section3DDecor position="right" color="#06b6d4" />

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
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of automation frameworks and testing solutions I've built
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.15)"
                }}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Overlay Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-background/90 backdrop-blur-sm rounded-lg text-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-background/90 backdrop-blur-sm rounded-lg text-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Live Badge */}
                  {project.isLive && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-red-500 text-white rounded-md shadow-sm">
                        Live
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-md">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  {(project.tryUrl || project.caseStudyUrl) && (
                    <div className="flex items-center gap-4 pt-2 border-t border-border/50">
                      {project.tryUrl && (
                        <motion.a
                          href={project.tryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 2 }}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                          Try it
                          <ExternalLink size={14} />
                        </motion.a>
                      )}
                      {project.caseStudyUrl && (
                        <Link to={project.caseStudyUrl}>
                          <motion.div
                            whileHover={{ x: 2 }}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                          >
                            Read case study
                            <ArrowRight size={14} />
                          </motion.div>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
