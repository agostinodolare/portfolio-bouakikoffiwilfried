export interface AttackEvent {
  id: string;
  type: "DDoS" | "Phishing" | "Brute Force" | "SQL Injection" | "XSS" | "Ransomware";
  sourceIP: string;
  destIP: string;
  sourceCity: string;
  destCity: string;
  sourceLat: number;
  sourceLng: number;
  destLat: number;
  destLng: number;
  threatLevel: "low" | "medium" | "high" | "critical";
  timestamp: Date;
}

const cities = [
  { city: "Moscow", lat: 55.75, lng: 37.62 },
  { city: "Beijing", lat: 39.9, lng: 116.4 },
  { city: "São Paulo", lat: -23.55, lng: -46.63 },
  { city: "Lagos", lat: 6.45, lng: 3.4 },
  { city: "Mumbai", lat: 19.08, lng: 72.88 },
  { city: "Tehran", lat: 35.69, lng: 51.39 },
  { city: "Pyongyang", lat: 39.02, lng: 125.75 },
  { city: "Bucharest", lat: 44.43, lng: 26.1 },
  { city: "Jakarta", lat: -6.21, lng: 106.85 },
  { city: "Cairo", lat: 30.04, lng: 31.24 },
];

const targets = [
  { city: "Paris", lat: 48.86, lng: 2.35 },
  { city: "New York", lat: 40.71, lng: -74.01 },
  { city: "London", lat: 51.51, lng: -0.13 },
  { city: "Tokyo", lat: 35.68, lng: 139.69 },
  { city: "Berlin", lat: 52.52, lng: 13.41 },
  { city: "Sydney", lat: -33.87, lng: 151.21 },
  { city: "Toronto", lat: 43.65, lng: -79.38 },
  { city: "Abidjan", lat: 5.36, lng: -4.01 },
];

const attackTypes: AttackEvent["type"][] = ["DDoS", "Phishing", "Brute Force", "SQL Injection", "XSS", "Ransomware"];
const threatLevels: AttackEvent["threatLevel"][] = ["low", "medium", "high", "critical"];

function randomIP() {
  return `${Math.floor(Math.random() * 223) + 1}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}

let counter = 0;

export function generateAttack(): AttackEvent {
  const source = cities[Math.floor(Math.random() * cities.length)];
  const dest = targets[Math.floor(Math.random() * targets.length)];
  counter++;
  return {
    id: `ATK-${Date.now()}-${counter}`,
    type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
    sourceIP: randomIP(),
    destIP: randomIP(),
    sourceCity: source.city,
    destCity: dest.city,
    sourceLat: source.lat,
    sourceLng: source.lng,
    destLat: dest.lat,
    destLng: dest.lng,
    threatLevel: threatLevels[Math.floor(Math.random() * threatLevels.length)],
    timestamp: new Date(),
  };
}

export const threatColors: Record<AttackEvent["threatLevel"], string> = {
  low: "#00ff41",
  medium: "#ffaa00",
  high: "#ff4444",
  critical: "#ff0055",
};
