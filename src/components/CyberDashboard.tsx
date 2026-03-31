import { useState, useEffect, useCallback, Suspense } from "react";
import { generateAttack, AttackEvent } from "@/data/attackData";
import CyberGlobe from "./CyberGlobe";
import AttackLog from "./AttackLog";
import AttackCounters from "./AttackCounters";
import { Activity, X } from "lucide-react";

export default function CyberDashboard() {
  const [attacks, setAttacks] = useState<AttackEvent[]>([]);
  const [activeArcs, setActiveArcs] = useState<AttackEvent[]>([]);
  const [stats, setStats] = useState({ total: 0, critical: 0, blocked: 0 });
  const [logOpen, setLogOpen] = useState(false);

  useEffect(() => {
    const initial = Array.from({ length: 5 }, generateAttack);
    setAttacks(initial);
    setActiveArcs(initial);
    setStats({ total: 1247, critical: 23, blocked: 1189 });

    const interval = setInterval(() => {
      const newAttack = generateAttack();
      setAttacks((prev) => [newAttack, ...prev].slice(0, 50));
      setActiveArcs((prev) => [...prev, newAttack].slice(-12));
      setStats((s) => ({
        total: s.total + 1,
        critical: s.critical + (newAttack.threatLevel === "critical" ? 1 : 0),
        blocked: s.blocked + (Math.random() > 0.15 ? 1 : 0),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleArcComplete = useCallback((id: string) => {
    setActiveArcs((prev) => prev.filter((a) => a.id !== id));
  }, []);

  return (
    <section id="dashboard" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary text-glow">&lt;</span>
          Cyber Threat Monitor
          <span className="text-primary text-glow">/&gt;</span>
        </h2>
        <p className="text-muted-foreground text-center mb-8 text-sm">
          Surveillance en temps réel des menaces mondiales
        </p>

        {/* Globe - full width */}
        <div className="relative h-[500px] md:h-[600px] rounded-xl border border-border bg-card/30 overflow-hidden">
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-border">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs text-primary">LIVE</span>
          </div>

          {/* Live Attack Log button */}
          <button
            onClick={() => setLogOpen(!logOpen)}
            className="absolute top-3 right-3 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-border hover:border-primary/50 transition-colors cursor-pointer"
          >
            <Activity className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-xs text-primary">LIVE ATTACK LOG</span>
            <span className="w-5 h-5 rounded-full bg-destructive/80 text-[10px] font-bold text-white flex items-center justify-center">
              {attacks.length}
            </span>
          </button>

          {/* Slide-in log panel */}
          {logOpen && (
            <div className="absolute top-12 right-3 z-20 w-80 max-h-[calc(100%-60px)] rounded-xl border border-border bg-background/95 backdrop-blur-md p-4 shadow-2xl animate-fade-in">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-mono text-xs font-bold text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  LIVE ATTACK LOG
                </h3>
                <button onClick={() => setLogOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="overflow-y-auto max-h-[300px]">
                <AttackLog attacks={attacks} />
              </div>
            </div>
          )}

          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-sm text-muted-foreground animate-pulse">Loading Globe...</span>
              </div>
            }
          >
            <CyberGlobe attacks={activeArcs} onAttackComplete={handleArcComplete} />
          </Suspense>
        </div>

        {/* Counters below globe */}
        <div className="mt-6 max-w-3xl mx-auto">
          <AttackCounters
            total={stats.total}
            critical={stats.critical}
            blocked={stats.blocked}
            active={activeArcs.length}
          />
        </div>
      </div>
    </section>
  );
}
