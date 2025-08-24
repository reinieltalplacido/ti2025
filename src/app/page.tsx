import HeroSection from "../components/sections/HeroSection";
import TeamsSection from "../components/sections/TeamsSection";
import ScheduleSection from "../components/sections/ScheduleSection";
import TournamentHistorySection from "../components/sections/TournamentHistorySection";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TeamsSection />
      <ScheduleSection />
      <TournamentHistorySection />
      <Footer />
    </main>
  );
}
