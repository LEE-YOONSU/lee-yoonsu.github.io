import Navigation from "@/components/Navigation";
import AboutIntroSection from "@/components/AboutIntroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutIntroSection />
      <ProjectsSection />
      <AboutSection />
      <ActivitiesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
