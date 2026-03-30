import { useEffect, useState } from "react";
import { Shield, AlertTriangle, Zap, Bug } from "lucide-react";

interface CounterProps {
  label: string;
  value: number;
  icon: typeof Shield;
  color: string;
}

function AnimatedCounter({ label, value, icon: Icon, color }: CounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const step = Math.max(1, Math.ceil((value - display) / 10));
    if (display < value) {
      const t = setTimeout(() => setDisplay(Math.min(display + step, value)), 30);
      return () => clearTimeout(t);
    }
  }, [value, display]);

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50">
      <Icon className="w-5 h-5 flex-shrink-0" style={{ color }} />
      <div>
        <p className="font-mono text-lg font-bold" style={{ color }}>{display.toLocaleString()}</p>
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}

interface AttackCountersProps {
  total: number;
  critical: number;
  blocked: number;
  active: number;
}

export default function AttackCounters({ total, critical, blocked, active }: AttackCountersProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      <AnimatedCounter label="Total Attacks" value={total} icon={Zap} color="#00ff41" />
      <AnimatedCounter label="Critical" value={critical} icon={AlertTriangle} color="#ff0055" />
      <AnimatedCounter label="Blocked" value={blocked} icon={Shield} color="#0088ff" />
      <AnimatedCounter label="Active" value={active} icon={Bug} color="#ffaa00" />
    </div>
  );
}
