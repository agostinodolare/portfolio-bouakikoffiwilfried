import { AttackEvent, threatColors } from "@/data/attackData";

export default function AttackLog({ attacks }: { attacks: AttackEvent[] }) {
  return (
    <div className="space-y-1">
      {attacks.map((attack) => {
        const color = threatColors[attack.threatLevel];
        return (
          <div
            key={attack.id}
            className="p-2 rounded-md border border-border bg-card/50 font-mono text-[10px] animate-fade-in flex items-center gap-2"
          >
            <span
              className="shrink-0 px-1 py-0.5 rounded text-[9px] font-bold uppercase leading-none"
              style={{ color, borderColor: color, border: "1px solid" }}
            >
              {attack.threatLevel.charAt(0)}
            </span>
            <div className="min-w-0 flex-1">
              <span className="font-bold" style={{ color }}>{attack.type}</span>
              <span className="text-muted-foreground ml-1.5">
                {attack.sourceCity} → {attack.destCity}
              </span>
            </div>
            <span className="text-muted-foreground/50 shrink-0">
              {attack.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </span>
          </div>
        );
      })}
    </div>
  );
}
