import { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { getEvents, Event } from "@/lib/googleSheets";
import { convertDriveUrlToDirectLink } from "@/lib/utils";

const EventsSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error("Error loading events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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

        {/* Events grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-secondary/20 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="group p-6 rounded-2xl glass border-primary/30 hover:border-primary/60 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {event.image && (
                  <img 
                    src={convertDriveUrlToDirectLink(event.image)} 
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
