import { useEffect, useState } from "react";
import { Trophy, Award, Medal, Star } from "lucide-react";
import { getAchievements, Achievement } from "@/lib/googleSheets";

const iconMap = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  star: Star,
};

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await getAchievements();
        setAchievements(data);
      } catch (error) {
        console.error("Error loading achievements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <section className="py-24 relative bg-secondary/30" id="achievements">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Thành tích
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Những Dấu Ấn
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hành trình chinh phục những đỉnh cao cùng niềm đam mê lập trình
          </p>
        </div>

        {/* Timeline */}
        {loading ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-secondary/20 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.category as keyof typeof iconMap] || Trophy;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={achievement.id}
                  className={`relative flex items-center gap-8 mb-12 opacity-0 animate-fade-in ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${isEven ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 group">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3">
                        {achievement.title}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {achievement.description}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {achievement.icon}
                      </p>
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass flex items-center justify-center shadow-glow">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;
