import { useState, useEffect, useCallback, Suspense } from "react";
import { generateAttack, AttackEvent } from "@/data/attackData";
import CyberGlobe from "./CyberGlobe";
import AttackLog from "./AttackLog";
import AttackCounters from "./AttackCounters";
import { ArrowLeft } from "lucide-react";

export default function CyberDashboard() {
  const [attacks, setAttacks] = useState<AttackEvent[]>([]);
  const [activeArcs, setActiveArcs] = useState<AttackEvent[]>([]);
  const [stats, setStats] = useState({ total: 0, critical: 0, blocked: 0 });

  useEffect(() => {
    // Generate initial attacks
    const initial = Array.from({ length: 5 }, generateAttack);
    setAttacks(initial);
    setActiveArcs(initial);
    setStats({
      total: 1247,
      critical: 23,
      blocked: 1189,
    });

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
        <p className="text-muted-foreground text-center mb-12 text-sm">
          Surveillance en temps réel des menaces mondiales
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Globe */}
          <div className="lg:col-span-3 h-[500px] md:h-[600px] rounded-xl border border-border bg-card/30 overflow-hidden relative">
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-border">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-mono text-xs text-primary">LIVE</span>
            </div>
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-mono text-sm text-muted-foreground animate-pulse">Loading Globe...</span>
              </div>
            }>
              <CyberGlobe attacks={activeArcs} onAttackComplete={handleArcComplete} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <AttackCounters
              total={stats.total}
              critical={stats.critical}
              blocked={stats.blocked}
              active={activeArcs.length}
            />
            <div className="flex-1 min-h-[300px] rounded-xl border border-border bg-card/30 p-4">
              <AttackLog attacks={attacks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
