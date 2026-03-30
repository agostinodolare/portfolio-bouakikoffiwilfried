import { useRef, useEffect } from "react";
import { AttackEvent, threatColors } from "@/data/attackData";
import { Shield, AlertTriangle, Zap, Bug, Fish, Lock } from "lucide-react";

const attackIcons: Record<AttackEvent["type"], typeof Shield> = {
  DDoS: Zap,
  Phishing: Fish,
  "Brute Force": Lock,
  "SQL Injection": Bug,
  XSS: AlertTriangle,
  Ransomware: Shield,
};

export default function AttackLog({ attacks }: { attacks: AttackEvent[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [attacks.length]);

  return (
    <div className="h-full flex flex-col">
      <h3 className="font-mono text-sm font-bold text-primary mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        LIVE ATTACK LOG
      </h3>
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
        {attacks.map((attack) => {
          const Icon = attackIcons[attack.type];
          const color = threatColors[attack.threatLevel];
          return (
            <div
              key={attack.id}
              className="p-3 rounded-lg border border-border bg-card/50 font-mono text-xs animate-fade-in"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                  <span className="font-bold" style={{ color }}>{attack.type}</span>
                </div>
                <span
                  className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase"
                  style={{ color, borderColor: color, border: "1px solid" }}
                >
                  {attack.threatLevel}
                </span>
              </div>
              <p className="text-muted-foreground">
                {attack.sourceCity} → {attack.destCity}
              </p>
              <p className="text-muted-foreground/70 mt-0.5">
                {attack.sourceIP} → {attack.destIP}
              </p>
              <p className="text-muted-foreground/50 mt-1">
                {attack.timestamp.toLocaleTimeString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
