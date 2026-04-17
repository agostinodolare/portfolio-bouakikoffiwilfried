import { useMemo } from "react";
import { ComposableMap, Geographies, Geography, Line, Marker, ZoomableGroup } from "react-simple-maps";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { useState } from "react";
import { AttackEvent, threatColors } from "@/data/attackData";

// Public TopoJSON world map (low-res, fast)
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface ThreatMapProps {
  attacks: AttackEvent[];
  onAttackComplete: (id: string) => void;
}

function AttackArc({ attack, onComplete }: { attack: AttackEvent; onComplete: () => void }) {
  const color = threatColors[attack.threatLevel];
  const from: [number, number] = [attack.sourceLng, attack.sourceLat];
  const to: [number, number] = [attack.destLng, attack.destLat];

  return (
    <g>
      <Line
        from={from}
        to={to}
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        style={{
          filter: `drop-shadow(0 0 4px ${color})`,
        }}
      >
        <animate
          attributeName="stroke-dasharray"
          from="0, 1000"
          to="1000, 0"
          dur="1.5s"
          fill="freeze"
        />
      </Line>

      {/* Source ping */}
      <Marker coordinates={from}>
        <circle r={2} fill={color} opacity={0.9}>
          <animate attributeName="r" from="2" to="6" dur="1.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.9" to="0" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle r={1.5} fill={color} />
      </Marker>

      {/* Destination explosion */}
      <Marker coordinates={to}>
        <circle r={2} fill={color}>
          <animate
            attributeName="r"
            from="2"
            to="10"
            dur="1.5s"
            begin="1s"
            repeatCount="1"
            fill="freeze"
          />
          <animate
            attributeName="opacity"
            from="1"
            to="0"
            dur="1.5s"
            begin="1s"
            repeatCount="1"
            fill="freeze"
          />
        </circle>
        <circle r={2} fill={color} stroke={color} strokeWidth={0.5}>
          <animate attributeName="r" from="0" to="4" dur="0.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="1" to="0" dur="0.8s" repeatCount="indefinite" />
        </circle>
      </Marker>
    </g>
  );
}

export default function ThreatMap({ attacks, onAttackComplete }: ThreatMapProps) {
  // Auto-cleanup arcs after 3s
  useMemo(() => {
    attacks.forEach((a) => {
      setTimeout(() => onAttackComplete(a.id), 3000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attacks.length]);

  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [0, 25],
    zoom: 1,
  });

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition((p) => ({ ...p, zoom: p.zoom * 1.5 }));
  };
  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((p) => ({ ...p, zoom: p.zoom / 1.5 }));
  };
  const handleReset = () => setPosition({ coordinates: [0, 25], zoom: 1 });

  return (
    <div className="w-full h-full relative bg-[#03060d]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 130 }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={(pos) => setPosition({ coordinates: pos.coordinates as [number, number], zoom: pos.zoom })}
          maxZoom={8}
          minZoom={1}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="hsl(217 33% 8%)"
                  stroke="hsl(199 89% 48% / 0.4)"
                  strokeWidth={0.4}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "hsl(217 33% 12%)", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {attacks.map((a) => (
            <AttackArc key={a.id} attack={a} onComplete={() => onAttackComplete(a.id)} />
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Zoom controls */}
      <div className="absolute bottom-3 right-3 z-10 flex flex-col gap-1.5">
        <button
          onClick={handleZoomIn}
          aria-label="Zoom avant"
          className="w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          aria-label="Zoom arrière"
          className="w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          aria-label="Réinitialiser"
          className="w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-md border border-border hover:border-primary/50 hover:text-primary transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Subtle scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0, transparent 2px, hsl(199 89% 48% / 0.05) 2px, hsl(199 89% 48% / 0.05) 3px)",
        }}
      />
    </div>
  );
}
