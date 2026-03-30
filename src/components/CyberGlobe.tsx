import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { AttackEvent, threatColors } from "@/data/attackData";
import { continentOutlines } from "@/data/continents";

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function ArcLine({ attack, onComplete }: { attack: AttackEvent; onComplete: () => void }) {
  const lineRef = useRef<THREE.Line>(null);
  const progressRef = useRef(0);
  const [showPing, setShowPing] = useState(false);
  const [hovered, setHovered] = useState(false);

  const { points, dest } = useMemo(() => {
    const start = latLngToVector3(attack.sourceLat, attack.sourceLng, 2.01);
    const end = latLngToVector3(attack.destLat, attack.destLng, 2.01);
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const dist = start.distanceTo(end);
    mid.normalize().multiplyScalar(2.01 + dist * 0.4);

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return { points: curve.getPoints(50), dest: end };
  }, [attack]);

  useFrame((_, delta) => {
    if (!lineRef.current) return;
    progressRef.current = Math.min(progressRef.current + delta * 1.2, 1);
    const geo = lineRef.current.geometry as THREE.BufferGeometry;
    const count = Math.floor(progressRef.current * 50) + 1;
    geo.setDrawRange(0, count);

    if (progressRef.current >= 1 && !showPing) {
      setShowPing(true);
      setTimeout(onComplete, 2000);
    }
  });

  const color = threatColors[attack.threatLevel];

  return (
    <group>
      <line ref={lineRef as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.8} linewidth={1} />
      </line>

      {showPing && (
        <group position={[dest.x, dest.y, dest.z]}>
          <mesh
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={color} transparent opacity={0.9} />
          </mesh>
          <PingEffect color={color} />
          {hovered && (
            <Html distanceFactor={6} style={{ pointerEvents: "none" }}>
              <div className="bg-background/95 border border-primary/30 rounded-lg p-3 text-xs font-mono min-w-[200px] border-glow">
                <p className="text-primary font-bold">{attack.type}</p>
                <p className="text-muted-foreground mt-1">Source: {attack.sourceCity} ({attack.sourceIP})</p>
                <p className="text-muted-foreground">Target: {attack.destCity} ({attack.destIP})</p>
                <p className="mt-1" style={{ color }}>
                  Threat: {attack.threatLevel.toUpperCase()}
                </p>
              </div>
            </Html>
          )}
        </group>
      )}
    </group>
  );
}

function PingEffect({ color }: { color: string }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current) return;
    const s = ringRef.current.scale.x + delta * 2;
    if (s > 3) {
      ringRef.current.scale.set(0.1, 0.1, 0.1);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.8;
    } else {
      ringRef.current.scale.set(s, s, s);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.8 - s / 3);
    }
  });

  return (
    <mesh ref={ringRef} scale={[0.1, 0.1, 0.1]}>
      <ringGeometry args={[0.03, 0.05, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ContinentLines() {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    return continentOutlines.map((outline) => {
      const pts = outline.map(([lat, lng]) => latLngToVector3(lat, lng, 2.012));
      return new Float32Array(pts.flatMap((p) => [p.x, p.y, p.z]));
    });
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((arr, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={arr.length / 3}
              array={arr}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0088ff" transparent opacity={0.6} />
        </line>
      ))}
    </group>
  );
}

function GlobeBody() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial
        color="#0a0f1a"
        wireframe={false}
        transparent
        opacity={0.95}
      />
    </Sphere>
  );
}

function GlobeGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={gridRef}>
      <Sphere args={[2.005, 36, 36]}>
        <meshBasicMaterial color="#0066ff" wireframe transparent opacity={0.06} />
      </Sphere>
    </group>
  );
}

interface CyberGlobeProps {
  attacks: AttackEvent[];
  onAttackComplete: (id: string) => void;
}

export default function CyberGlobe({ attacks, onAttackComplete }: CyberGlobeProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#0066ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00ff41" />

        <GlobeBody />
        <GlobeGrid />
        <ContinentLines />

        {attacks.map((a) => (
          <ArcLine key={a.id} attack={a} onComplete={() => onAttackComplete(a.id)} />
        ))}

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={8}
          enableDamping
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
