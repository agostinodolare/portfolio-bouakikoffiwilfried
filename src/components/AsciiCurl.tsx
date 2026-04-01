import { useState, useEffect, useRef } from "react";

const curlCommands = [
  `curl -X POST https://api.threat.io/scan\n  -H "Authorization: Bearer ****"\n  -d '{"target":"192.168.1.0/24"}'`,
  `curl -sS https://cve.mitre.org/cgi-bin/\n  cvekey.cgi?keyword=RCE+2024\n  | grep -i "critical"`,
  `curl -k https://10.0.0.1:8443/api/v1/\n  firewall/rules --cert client.pem\n  -o rules_dump.json`,
  `curl -X PUT https://siem.internal/api/\n  alerts/correlate\n  -d '{"src":"45.33.32.156","type":"bruteforce"}'`,
  `nmap -sV -sC -p- 10.0.0.0/24\n  --script vuln\n  -oX scan_results.xml`,
  `curl https://otx.alienvault.com/api/v1/\n  indicators/IPv4/185.220.101.1/\n  general -H "X-OTX-API-KEY: ****"`,
  `curl -XGET "https://elastic:9200/\n  filebeat-*/_search" -d\n  '{"query":{"match":{"threat.level":"critical"}}}'`,
  `hydra -l admin -P /usr/share/\n  wordlists/rockyou.txt\n  ssh://192.168.1.105 -t 4`,
  `sqlmap -u "http://target.com/\n  page?id=1" --dbs --batch\n  --tamper=space2comment`,
  `curl -X POST https://api.shodan.io/\n  shodan/scan -d "ips=8.8.8.8"\n  -H "key: ****"`,
];

const positions = [
  { top: "8%", left: "2%" },
  { top: "15%", right: "1%" },
  { bottom: "18%", left: "1%" },
  { bottom: "8%", right: "2%" },
  { top: "40%", left: "1%" },
  { top: "35%", right: "1%" },
];

interface CurlInstance {
  id: number;
  command: string;
  posIndex: number;
  charIndex: number;
  phase: "typing" | "visible" | "fading";
}

let idCounter = 0;

export default function AsciiCurl() {
  const [instances, setInstances] = useState<CurlInstance[]>([]);
  const usedPositions = useRef(new Set<number>());

  // Spawn new curl commands randomly
  useEffect(() => {
    const spawn = () => {
      setInstances((prev) => {
        if (prev.length >= 3) return prev;

        const available = positions
          .map((_, i) => i)
          .filter((i) => !usedPositions.current.has(i));
        if (available.length === 0) return prev;

        const posIndex = available[Math.floor(Math.random() * available.length)];
        usedPositions.current.add(posIndex);

        const cmd = curlCommands[Math.floor(Math.random() * curlCommands.length)];
        idCounter++;
        return [
          ...prev,
          { id: idCounter, command: cmd, posIndex, charIndex: 0, phase: "typing" as const },
        ];
      });
    };

    spawn();
    const interval = setInterval(spawn, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setInstances((prev) =>
        prev.map((inst) => {
          if (inst.phase === "typing" && inst.charIndex < inst.command.length) {
            return { ...inst, charIndex: inst.charIndex + 2 };
          }
          if (inst.phase === "typing" && inst.charIndex >= inst.command.length) {
            return { ...inst, phase: "visible" };
          }
          return inst;
        })
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Auto-remove after visible
  useEffect(() => {
    const interval = setInterval(() => {
      setInstances((prev) => {
        const now = prev.map((inst) => {
          if (inst.phase === "visible") return { ...inst, phase: "fading" as const };
          return inst;
        });
        return now;
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Cleanup faded
  useEffect(() => {
    const interval = setInterval(() => {
      setInstances((prev) => {
        const fading = prev.filter((i) => i.phase === "fading");
        if (fading.length > 0) {
          fading.forEach((i) => usedPositions.current.delete(i.posIndex));
          return prev.filter((i) => i.phase !== "fading");
        }
        return prev;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {instances.map((inst) => {
        const pos = positions[inst.posIndex];
        const text = inst.command.slice(0, inst.charIndex);
        return (
          <div
            key={inst.id}
            className={`absolute z-[5] pointer-events-none font-mono text-[10px] leading-relaxed max-w-[220px] transition-opacity duration-1000 ${
              inst.phase === "fading" ? "opacity-0" : "opacity-60"
            }`}
            style={{
              ...pos,
              color: "hsl(var(--primary))",
              textShadow: "0 0 8px hsl(var(--primary) / 0.4)",
            }}
          >
            <span className="text-muted-foreground">$</span> {text}
            {inst.phase === "typing" && (
              <span className="inline-block w-[6px] h-[12px] bg-primary/80 animate-pulse ml-[1px] align-middle" />
            )}
          </div>
        );
      })}
    </>
  );
}
