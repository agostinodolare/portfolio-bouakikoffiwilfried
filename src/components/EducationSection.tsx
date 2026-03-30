import { GraduationCap, Calendar, Globe } from "lucide-react";

const formations = [
  {
    title: "Formation Pratique en Cybersécurité",
    school: "We.code (programme mis en œuvre par Epitech)",
    period: "Juin 2025 — Déc. 2025",
  },
  {
    title: "Licence 2 en Réseau Informatique et Télécommunication (RIT)",
    school: "Institut International Polytechnique des Élites d'Abidjan (IIPEA), Cocody",
    period: "Sept. 2024 — ce jour",
  },
  {
    title: "Baccalauréat A1",
    school: "Collège Privé Ahuanou d'Arrah, Arrah",
    period: "Sept. 2023 — Juil. 2024",
  },
];

const langues = [
  { name: "Français", level: "Natif" },
  { name: "Anglais", level: "Intermédiaire" },
];

export default function EducationSection() {
  return (
    <section id="formation" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary text-glow">&lt;</span>
          Formation & Langues
          <span className="text-primary text-glow">/&gt;</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-sm">Parcours académique</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {formations.map((f, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-primary/40 bg-card flex items-center justify-center group-hover:border-primary transition-colors">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  {i < formations.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-mono text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{f.school}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-primary/80">
                    <Calendar className="w-3 h-3" />
                    {f.period}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <h3 className="font-mono text-sm font-bold">Langues</h3>
            </div>
            <div className="space-y-3">
              {langues.map((l) => (
                <div key={l.name} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
                  <span className="text-sm font-mono">{l.name}</span>
                  <span className="text-xs text-muted-foreground">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
