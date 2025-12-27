import { Code2, Github, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and info */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-bold text-gradient">CodeHub</span>
              <p className="text-xs text-muted-foreground">
                CLB Lập trình • Đại học Bách khoa
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg glass hover:border-primary/50 transition-colors"
              aria-label="Github"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg glass hover:border-primary/50 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
            <a
              href="mailto:codehub@university.edu.vn"
              className="p-2 rounded-lg glass hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 CodeHub. Được phát triển với{" "}
            <span className="text-primary">❤</span> bởi các thành viên CLB.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
