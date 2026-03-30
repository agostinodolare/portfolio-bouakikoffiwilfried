export type ProjectCategory = "Pentesting & Sécurité Web" | "Sécurité Réseau & Infrastructure" | "Forensic & DFIR" | "Développement & Automatisation";

export interface Project {
  title: string;
  description: string;
  tools: string[];
  category: ProjectCategory;
  roles: string[];
}

export const categories: ProjectCategory[] = [
  "Pentesting & Sécurité Web",
  "Sécurité Réseau & Infrastructure",
  "Forensic & DFIR",
  "Développement & Automatisation",
];

export const projects: Project[] = [
  {
    title: "Test d'Intrusion Blackbox (Banque)",
    description: "Audit de sécurité complet d'une infrastructure bancaire en boîte noire avec génération automatisée de rapports.",
    tools: ["Nmap", "Burp Suite", "Metasploit", "Python", "OWASP ZAP"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Reconnaissance et collecte d'informations (OSINT)",
      "Identification et exploitation de vulnérabilités OWASP TOP 10",
      "Post-exploitation et élévation de privilèges",
      "Développement de scripts Python d'automatisation de reporting",
    ],
  },
  {
    title: "Audit Injections SQL Avancées",
    description: "Identification et exploitation de diverses vulnérabilités SQL Injection sur applications web.",
    tools: ["SQLmap", "Burp Suite", "SQL"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Bypass d'authentification via SQLi classique",
      "Extraction de données via UNION-based et Error-based injections",
      "Exploitation d'injections blindées (booléennes et temporelles)",
      "Récupération de données sensibles et démonstration d'impact",
    ],
  },
  {
    title: "Investigation Vulnérabilités XSS",
    description: "Analyse approfondie des vulnérabilités Cross-Site Scripting sur applications web.",
    tools: ["JavaScript", "Burp Suite", "Browser DevTools"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Identification de XSS réfléchi, stocké et DOM-based",
      "Développement de payloads JavaScript avancés",
      "Tests de vol de session et d'attaques de phishing",
      "Contournement des mécanismes de protection",
    ],
  },
  {
    title: "VPN d'Entreprise",
    description: "Déploiement sécurisé d'un serveur OpenVPN pour l'accès distant aux ressources d'entreprise.",
    tools: ["OpenVPN", "Easy-RSA", "PKI"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Installation et configuration serveur OpenVPN",
      "Gestion de l'infrastructure PKI et certificats",
      "Configuration du chiffrement et authentification",
      "Création de profils clients et documentation technique",
    ],
  },
  {
    title: "Simulation Réseau Cisco",
    description: "Conception et configuration complète d'un réseau d'entreprise multi-sites avec sécurisation avancée.",
    tools: ["Packet Tracer", "VLAN", "OSPF", "VLSM", "DMZ"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Plan d'adressage VLSM pour optimisation des IP",
      "Configuration VLANs et routage inter-VLAN",
      "Mise en place OSPF avec authentification MD5",
      "Configuration DMZ avec serveur web et pare-feux",
    ],
  },
  {
    title: "Système IDS/IPS Suricata",
    description: "Installation et configuration d'un système de détection et prévention d'intrusions pour la surveillance réseau.",
    tools: ["Suricata", "UFW", "nfqueue"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Création de signatures personnalisées pour attaques spécifiques",
      "Configuration mode IPS avec blocage actif",
      "Intégration avec UFW pour redirection du trafic",
      "Tests de détection et validation du blocage",
    ],
  },
  {
    title: "Investigation DFIR Complète",
    description: "Investigation forensique d'une machine compromise via un package malveillant.",
    tools: ["MFTExplorer", "Timeline Explorer", "Hash tracking"],
    category: "Forensic & DFIR",
    roles: [
      "Identification du point d'entrée et technique d'ingénierie sociale",
      "Analyse de la persistance de la menace (tâches planifiées, fichiers malveillants)",
      "Investigation temporelle de l'incident et corrélation des événements",
      "Détection des modifications de sécurité et mesures anti-forensiques",
      "Identification de la famille de malware et actions post-compromission",
    ],
  },
  {
    title: "Analyse Malware (Extension Navigateur)",
    description: "Investigation approfondie d'une extension de navigateur compromise pour vol de données.",
    tools: ["Reverse Engineering", "Analyse statique/dynamique", "Dé-obfuscation"],
    category: "Forensic & DFIR",
    roles: [
      "Extraction et décomposition de l'extension navigateur malveillante",
      "Analyse des techniques d'obfuscation et dissimulation d'URL",
      "Identification des mécanismes de vol de credentials et suivi de frappes",
      "Investigation des canaux d'exfiltration et méthodes de chiffrement",
    ],
  },
  {
    title: "Forensic Réseau (PCAPNG)",
    description: "Investigation approfondie de captures réseau et analyse des en-têtes protocoles.",
    tools: ["Wireshark", "Hex Editor", "PCAPNG"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse structure fichiers PCAPNG (SHB, IDB, EPB)",
      "Reverse engineering en-têtes réseau (Ethernet, IPv4, TCP)",
      "Investigation manuelle avec éditeur hexadécimal",
      "Documentation des structures binaires et offsets",
    ],
  },
  {
    title: "Détection Exfiltration DNS",
    description: "Investigation de techniques d'exfiltration de données via tunneling DNS.",
    tools: ["Zeek", "Zeek-cut", "Analyse logs"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse des logs Zeek (conn.log, dns.log) pour détection d'anomalies",
      "Identification de patterns d'exfiltration DNS et calcul de métriques",
      "Investigation des adresses IP compromises et domaines malveillants",
      "Analyse temporelle et calcul de taux de requêtes suspects",
    ],
  },
  {
    title: "Analyse de Logs Système",
    description: "Investigation de logs système pour identifier des activités malveillantes et compromissions.",
    tools: ["EVTX", "Forensic numérique", "Analyse logs Windows"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse approfondie des logs d'événements système et d'application",
      "Détection de modifications de sécurité et de configurations suspectes",
      "Investigation des processus malveillants et des persistances",
      "Identification des indicateurs de compromission (IOCs) et mesures correctives",
    ],
  },
  {
    title: "Outils de Sécurité Python",
    description: "Conception et développement d'outils automatisés pour tests de sécurité et analyse.",
    tools: ["Python", "Requests", "BeautifulSoup"],
    category: "Développement & Automatisation",
    roles: [
      "Développement scanners vulnérabilités web automatisés",
      "Implémentation détection SQLi, XSS, CSRF",
      "Création systèmes génération rapports automatiques",
      "Optimisation performances et analyse résultats",
    ],
  },
  {
    title: "Programmation Système C",
    description: "Développement d'applications système avec gestion avancée de la mémoire et pointeurs.",
    tools: ["C", "Pointeurs", "Algorithmes"],
    category: "Développement & Automatisation",
    roles: [
      "Implémentation fonctions manipulation chaînes et mémoire",
      "Développement algorithmes tri et optimisation performances",
      "Gestion pointeurs et allocation dynamique mémoire",
      "Résolution problèmes bas niveau et debugging",
    ],
  },
  {
    title: "Administration Linux",
    description: "Gestion avancée de systèmes Linux et automatisation de tâches d'administration.",
    tools: ["Bash", "Linux", "Git", "SSH"],
    category: "Développement & Automatisation",
    roles: [
      "Configuration environnement et gestion utilisateurs",
      "Développement scripts d'automatisation Bash",
      "Gestion versions avec Git et déploiement SSH",
      "Optimisation permissions et sécurité système",
    ],
  },
];
