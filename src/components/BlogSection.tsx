import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Building a Scalable API Testing Framework with RestAssured",
    excerpt: "Learn how to structure your API tests for maintainability and scale. We cover design patterns, data-driven testing, and integration with CI/CD pipelines.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "API Testing",
    url: "#",
  },
  {
    title: "Cypress vs Playwright: Which Should You Choose in 2024?",
    excerpt: "A comprehensive comparison of two popular E2E testing frameworks. Explore their strengths, weaknesses, and when to use each one.",
    date: "Dec 28, 2023",
    readTime: "12 min read",
    category: "Web Automation",
    url: "#",
  },
  {
    title: "Mobile Test Automation: Best Practices with Appium",
    excerpt: "Master mobile testing with these proven strategies. From element identification to gesture handling, elevate your Appium skills.",
    date: "Dec 10, 2023",
    readTime: "10 min read",
    category: "Mobile Testing",
    url: "#",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container-custom">
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
              Blog & Tutorials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              Latest Articles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Sharing knowledge and insights about test automation and quality engineering
            </motion.p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="group bg-card rounded-2xl border border-border p-6 hover-lift"
              >
                {/* Category */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Read More */}
                <a
                  href={post.url}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border rounded-xl hover:border-primary hover:text-primary transition-colors"
            >
              View All Articles
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
