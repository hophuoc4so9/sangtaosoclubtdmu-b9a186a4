import { useEffect, useState } from "react";
import { User } from "lucide-react";
import { getBoardMembers, BoardMember } from "@/lib/googleSheets";
import { convertDriveUrlToDirectLink } from "@/lib/utils";

const BoardSection = () => {
  const [members, setMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getBoardMembers();
        setMembers(data);
      } catch (error) {
        console.error("Error loading board members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <section className="py-24 relative" id="board">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Đội ngũ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ban Chủ nhiệm
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Những người dẫn dắt và định hướng hoạt động của câu lạc bộ
          </p>
        </div>

        {/* Board members grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-secondary/20 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {members.map((member, index) => (
              <div
                key={member.id}
                className="group relative p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                {member.image ? (
                  <img 
                    src={convertDriveUrlToDirectLink(member.image)}
                    alt={member.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full object-contain bg-secondary/20"
                  />
                ) : (
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                )}

                {/* Member info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BoardSection;
