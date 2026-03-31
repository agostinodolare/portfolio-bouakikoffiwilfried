import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import CyberDashboard from "@/components/CyberDashboard";
import EducationSection from "@/components/EducationSection";
import AttackCounters from "@/components/AttackCounters";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <CyberDashboard />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <EducationSection />
    <Footer />
  </div>
);

export default Index;
