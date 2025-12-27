import { Code2, Terminal, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative icons */}
          <div className="flex justify-center gap-6 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-3 rounded-xl glass">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-xl glass">
              <Terminal className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-xl glass">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Club name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="text-gradient">CodeHub</span>
            <span className="block text-foreground mt-2 text-3xl md:text-4xl font-medium">
              Câu lạc bộ Lập trình
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Nơi hội tụ những đam mê công nghệ, nơi biến ý tưởng thành hiện thực. 
            Chúng tôi học hỏi, chia sẻ và cùng nhau phát triển trong thế giới lập trình.
          </p>

          {/* University info */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm md:text-base text-muted-foreground">
              Khoa Công nghệ Thông tin • Đại học Bách khoa
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Thành viên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">20+</div>
              <div className="text-sm text-muted-foreground mt-1">Sự kiện</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Giải thưởng</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
