import { useRef, useEffect } from "react";
import { AttackEvent, threatColors } from "@/data/attackData";

export default function AttackLog({ attacks }: { attacks: AttackEvent[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [attacks.length]);

  return (
    <div className="h-full flex flex-col">
      <h3 className="font-mono text-[11px] font-bold text-primary mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        LIVE ATTACK LOG
      </h3>
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin">
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
    </div>
  );
}
