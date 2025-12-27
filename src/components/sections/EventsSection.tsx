import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

interface Event {
  name: string;
  date: string;
  time: string;
  description: string;
  status: "upcoming" | "past";
}

const events: Event[] = [
  {
    name: "Workshop: Giới thiệu về AI/ML",
    date: "15/01/2025",
    time: "14:00 - 17:00",
    description: "Tìm hiểu về Machine Learning và ứng dụng thực tế trong các dự án. Workshop dành cho người mới bắt đầu.",
    status: "upcoming",
  },
  {
    name: "Coding Contest Tháng 1",
    date: "20/01/2025",
    time: "09:00 - 12:00",
    description: "Cuộc thi lập trình hàng tháng với các bài toán thuật toán thú vị. Giải thưởng hấp dẫn cho top 3.",
    status: "upcoming",
  },
  {
    name: "Tech Talk: Cloud Computing",
    date: "10/12/2024",
    time: "19:00 - 21:00",
    description: "Chia sẻ về AWS, Azure và cách triển khai ứng dụng trên nền tảng đám mây.",
    status: "past",
  },
  {
    name: "Hackathon Mùa Đông 2024",
    date: "25/11/2024",
    time: "48 giờ",
    description: "Sự kiện hackathon kéo dài 48 giờ với chủ đề Công nghệ xanh và Phát triển bền vững.",
    status: "past",
  },
  {
    name: "Workshop: Git & GitHub",
    date: "05/11/2024",
    time: "14:00 - 16:00",
    description: "Hướng dẫn sử dụng Git và GitHub cho quản lý source code và làm việc nhóm hiệu quả.",
    status: "past",
  },
  {
    name: "Code Review Session",
    date: "20/10/2024",
    time: "18:00 - 20:00",
    description: "Buổi review code cùng mentor, học cách viết code sạch và best practices.",
    status: "past",
  },
];

const EventsSection = () => {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <section className="py-24 relative" id="events">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Sự kiện
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hoạt Động CLB
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Các sự kiện và hoạt động của câu lạc bộ diễn ra trong năm
          </p>
        </div>

        {/* Upcoming events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              Sắp diễn ra
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.name}
                  className="group p-6 rounded-2xl glass border-primary/30 hover:border-primary/60 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Sắp tới
                    </span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {event.name}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      {event.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Past events */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-muted-foreground" />
            Đã diễn ra
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.name}
                className="group p-6 rounded-2xl glass hover:border-muted-foreground/50 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${(upcomingEvents.length + index) * 0.1}s` }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-4">
                  Đã kết thúc
                </span>
                
                <h4 className="text-lg font-semibold mb-2 group-hover:text-muted-foreground/80 transition-colors">
                  {event.name}
                </h4>
                
                <p className="text-muted-foreground/70 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
