import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import CyberDashboard from "@/components/CyberDashboard";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CyberDashboard />
    <section className="py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <CyberDashboard.Counters />
      </div>
    </section>
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <EducationSection />
    <Footer />
  </div>
);

export default Index;
