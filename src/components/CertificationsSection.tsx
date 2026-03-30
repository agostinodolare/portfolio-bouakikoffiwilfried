import { Award, Trophy } from "lucide-react";

const certifications = [
  "Foundations of Cybersecurity – Google Cybersecurity Professional Certificate",
  "Certification MOOC Sécurité Numérique SecNumacadémie (ANSSI)",
  "Introduction à la Cybersécurité – Cisco Networking Academy",
  "Sensibilisation au Numérique",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary text-glow">&lt;</span>
          Certifications & Achievements
          <span className="text-primary text-glow">/&gt;</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-sm">Reconnaissance et formations</p>

        {/* CTF Achievement */}
        <div className="max-w-2xl mx-auto mb-12 p-6 rounded-xl border border-primary/30 bg-primary/5 border-glow">
          <div className="flex items-start gap-4">
            <Trophy className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-mono text-lg font-bold text-primary">🏆 1ère Place — CTF Diamond Hack Summit 2025</h3>
              <p className="text-muted-foreground text-sm mt-2">
                Compétition intensive de 11h30 en nocturne (20h–07h30). Classé 1er au sein d'une équipe de 4 personnes sur un challenge multi-disciplinaire (Web, Crypto, Reverse, Forensics).
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card card-hover">
              <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
