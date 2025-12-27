import { User } from "lucide-react";

interface BoardMember {
  name: string;
  role: string;
  class: string;
}

const boardMembers: BoardMember[] = [
  { name: "Nguyễn Văn An", role: "Chủ nhiệm CLB", class: "K20 CNTT" },
  { name: "Trần Thị Bình", role: "Phó Chủ nhiệm", class: "K20 CNTT" },
  { name: "Lê Hoàng Cường", role: "Trưởng ban Kỹ thuật", class: "K21 CNTT" },
  { name: "Phạm Minh Đức", role: "Trưởng ban Sự kiện", class: "K21 CNTT" },
  { name: "Hoàng Thu Hà", role: "Trưởng ban Truyền thông", class: "K21 CNTT" },
  { name: "Võ Quang Huy", role: "Thủ quỹ", class: "K22 CNTT" },
];

const BoardSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {boardMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                <User className="w-10 h-10 text-primary" />
              </div>

              {/* Member info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm font-mono">
                  {member.class}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-primary opacity-10 transform rotate-45 translate-x-4 -translate-y-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardSection;
