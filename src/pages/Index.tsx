import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BoardSection from "@/components/sections/BoardSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import EventsSection from "@/components/sections/EventsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <BoardSection />
        <AchievementsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
