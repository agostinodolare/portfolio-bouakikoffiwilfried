import { Shield, Terminal, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.png";
import MatrixRain from "./MatrixRain";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-20">
      {/* Matrix rain background */}
      <MatrixRain />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />
      
      {/* Floating accent blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8">
        {/* Profile image */}
        <div className="relative">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_hsl(130_100%_50%/0.15)]">
            <img src={profileImg} alt="Koffi Wilfried Bouaki" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1.5">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>

        {/* Terminal-style greeting */}
        <div className="flex items-center gap-2 text-primary/70 font-mono text-sm">
          <Terminal className="w-4 h-4" />
          <span className="animate-pulse">~/portfolio$</span>
          <span className="text-foreground">whoami</span>
        </div>

        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          <span className="text-foreground">BOUAKI</span>{" "}
          <span className="text-primary text-glow">KOFFI WILFRIED</span>
        </h1>

        <p className="font-mono text-lg md:text-xl text-primary/80 tracking-wide">
          Expert en Cybersécurité & Pentesting
        </p>

        <p className="max-w-2xl text-muted-foreground text-sm md:text-base leading-relaxed">
          Analyste Red Team rigoureux, spécialisé dans l'identification, l'exploitation et la correction proactive des vulnérabilités. 
          Vainqueur CTF Diamond Hack Summit 2025.
        </p>

        {/* Skill chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {["Pentesting", "DFIR", "Network Security", "Red Team", "Python"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wider"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Contact links */}
        <div className="flex gap-6 mt-4 text-muted-foreground text-sm font-mono">
          <a href="mailto:bouakikoffiwilfried41@gmail.com" className="hover:text-primary transition-colors">
            email
          </a>
          <a href="https://github.com/bouakikoffiwilfried" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            github
          </a>
          <a href="https://www.linkedin.com/in/koffi-wilfried-bouaki-80b8aa387" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            linkedin
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#competences" className="mt-12 animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
