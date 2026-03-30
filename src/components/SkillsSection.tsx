import { Crosshair, Network, Search, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Crosshair,
    title: "Pentesting",
    skills: ["OWASP Top 10", "Burp Suite", "Metasploit", "Nmap", "SQLmap", "OWASP ZAP"],
  },
  {
    icon: Network,
    title: "Network Security",
    skills: ["OpenVPN", "Cisco", "VLAN/OSPF", "Suricata IDS/IPS", "Wireshark", "DMZ"],
  },
  {
    icon: Search,
    title: "DFIR & Forensic",
    skills: ["MFTExplorer", "Timeline Explorer", "Zeek", "PCAPNG", "Reverse Engineering", "Malware Analysis"],
  },
  {
    icon: Code,
    title: "Développement",
    skills: ["Python", "C", "Bash", "Git", "Linux", "Automatisation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="competences" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary text-glow">&lt;</span>
          Compétences
          <span className="text-primary text-glow">/&gt;</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-sm">Domaines d'expertise technique</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-xl border border-border bg-card card-hover">
              <cat.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-mono text-lg font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
