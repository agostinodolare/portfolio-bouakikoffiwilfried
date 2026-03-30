import { useState } from "react";
import { projects, categories, type Project } from "@/data/projects";
import { X } from "lucide-react";

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div className="p-6 rounded-xl border border-border bg-card card-hover flex flex-col gap-4">
    <h3 className="font-mono text-base font-semibold text-foreground leading-snug">{project.title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.tools.map((tool) => (
        <span key={tool} className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">
          {tool}
        </span>
      ))}
    </div>
    <button
      onClick={onClick}
      className="mt-auto self-start px-4 py-2 rounded-lg text-xs font-mono border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
    >
      Détails →
    </button>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    <div
      className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card p-8 border-glow"
      onClick={(e) => e.stopPropagation()}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
        <X className="w-5 h-5" />
      </button>

      <span className="text-primary text-xs font-mono">{project.category}</span>
      <h3 className="font-mono text-xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tools.map((tool) => (
          <span key={tool} className="px-3 py-1 rounded-md text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            {tool}
          </span>
        ))}
      </div>

      <h4 className="font-mono text-sm font-semibold text-foreground mb-3">Rôle & Réalisations</h4>
      <ul className="space-y-2">
        {project.roles.map((role, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1 text-xs">▹</span>
            {role}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "Tous" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projets" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary text-glow">&lt;</span>
          Projets
          <span className="text-primary text-glow">/&gt;</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 text-sm">Missions et réalisations techniques</p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Tous", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono border transition-all ${
                activeCategory === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
};

export default ProjectsSection;
