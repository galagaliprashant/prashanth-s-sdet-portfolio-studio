import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@johnanderson.dev", label: "Email" },
  ];

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
            <span className="font-display font-bold text-foreground gradient-text">
              &lt;SDET/&gt;
            </span>
            <span className="hidden md:inline">•</span>
            <span>© {currentYear} John Anderson. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-primary fill-primary" />
            </motion.div>
            <span>and React</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
