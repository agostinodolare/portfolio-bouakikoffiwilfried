export type ProjectCategory =
  | "Pentesting & Sécurité Web"
  | "Sécurité Réseau & Infrastructure"
  | "Forensic & DFIR"
  | "Développement & Automatisation"
  | "GRC & Conformité"
  | "Data & Visualisation";

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
  "GRC & Conformité",
  "Data & Visualisation",
];

export const projects: Project[] = [
  // ===== Pentesting & Sécurité Web =====
  {
    title: "SQL Injection",
    description: "Exploitation de vulnérabilités SQL : bypass de login, extraction de données, injections blindées.",
    tools: ["SQLmap", "Burp Suite", "SQL"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Bypass de login via SQLi classique",
      "Extraction de données via UNION-based et Error-based",
      "Exploitation d'injections blindées (boolean, time-based)",
    ],
  },
  {
    title: "Cross-Site Scripting (XSS)",
    description: "Injection de scripts JavaScript pour vol de cookies et capture d'identifiants.",
    tools: ["JavaScript", "Burp Suite", "Browser DevTools"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "XSS Reflected, Stored et DOM-based",
      "Crafting de payloads avancés",
      "Bypass de filtres de sécurité",
      "Session hijacking",
    ],
  },
  {
    title: "File Inclusion (LFI, RFI, Log Poisoning)",
    description: "Exploitation des vulnérabilités d'inclusion de fichiers locaux et distants.",
    tools: ["PHP", "Burp Suite", "Wrappers"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "LFI et Path Traversal",
      "Bypass avec wrappers PHP",
      "Remote File Inclusion (RFI)",
      "Log poisoning et RCE",
    ],
  },
  {
    title: "OS Command Injection",
    description: "Contournement des restrictions pour exécuter des commandes arbitraires sur le serveur.",
    tools: ["Commix", "Burp Suite", "Bash"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Injection avec opérateurs (;, &&, ||)",
      "Bypass de blacklist",
      "Contournement d'espace et slash",
      "Obfuscation de commandes",
    ],
  },
  {
    title: "Password Attacks",
    description: "Récupération d'identifiants par attaques distantes et locales.",
    tools: ["Hydra", "John the Ripper", "Hashcat"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Brute force avec Hydra",
      "Cracking de hash (John, Hashcat)",
      "Analyse de fichiers Linux (/etc/shadow)",
      "Reverse shell et post-exploitation",
    ],
  },
  {
    title: "File Transfer Protocol Attack",
    description: "Énumération et exploitation d'un service FTP vulnérable.",
    tools: ["FTP", "Hydra", "Nmap"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Énumération FTP",
      "Connexion anonyme",
      "Brute force avec Hydra",
      "Découverte de ports cachés",
    ],
  },
  {
    title: "Server Message Block Attack",
    description: "Énumération et exploitation du protocole SMB.",
    tools: ["smbclient", "enum4linux", "Nmap"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Énumération SMB (smbclient, enum4linux)",
      "Exploitation de sessions nulles",
      "Brute force de credentials",
      "Upload de shell malveillant",
    ],
  },
  {
    title: "Information Gathering (Pentest)",
    description: "Collecte d'informations sur une cible en mode blackbox.",
    tools: ["Nmap", "Gobuster", "WhatWeb"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Recherche de fuites d'informations",
      "Fingerprinting (whatweb)",
      "Énumération de répertoires (gobuster)",
      "Cartographie des points d'entrée",
    ],
  },
  {
    title: "Mini Penetration Test (VPS)",
    description: "Pentest complet sur une application web hébergée sur VPS.",
    tools: ["Nmap", "Gobuster", "SQLmap", "Metasploit"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Reconnaissance (nmap, gobuster)",
      "Exploitation de vulnérabilités (SMB, FTP, SQLi)",
      "Reverse shell et post-exploitation",
      "Élévation de privilèges et rapport d'audit",
    ],
  },
  {
    title: "Exploitation & Post-Exploitation (Identité & Session)",
    description: "Contournement d'authentification et élévation de privilèges.",
    tools: ["Burp Suite", "OWASP ZAP", "Python"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Identity Management Testing",
      "Session Management Testing",
      "Authorization Testing",
      "Input Validation (XSS, SQLi, LFI, command injection)",
    ],
  },
  {
    title: "Exploitation & Post-Exploitation (Crypto & Logique métier)",
    description: "Identification de failles avancées : cryptographie, logique métier, client-side.",
    tools: ["Burp Suite", "SSLscan", "Browser DevTools"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Cryptography Testing (SSL/TLS)",
      "Business Logic Testing",
      "Client Side Testing (DOM XSS, clickjacking)",
    ],
  },
  {
    title: "Documentation & Reporting (Python)",
    description: "Production de rapports professionnels automatisés pour pentests.",
    tools: ["Python", "Markdown", "Templates"],
    category: "Pentesting & Sécurité Web",
    roles: [
      "Structure de rapport standard",
      "Synthèse des résultats et attack chain",
      "Template par vulnérabilité",
      "Hiérarchisation des remédiations",
    ],
  },

  // ===== Sécurité Réseau & Infrastructure =====
  {
    title: "Sécurisation réseau via IDS/IPS (Suricata)",
    description: "Sécurisation d'une infrastructure d'entreprise par analyse de trafic et prévention d'intrusions.",
    tools: ["Suricata", "UFW", "nfqueue"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Analyse de flux réseau avec Suricata",
      "Création de règles personnalisées (scans Nmap, SSH)",
      "Configuration IPS avec nfqueue",
      "Interfaçage avec UFW",
    ],
  },
  {
    title: "Déploiement IDS/IPS (Suricata)",
    description: "Renforcement de la sécurité périmétrale suite à une tentative d'intrusion.",
    tools: ["Suricata", "Linux", "Reporting"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Sélection, installation et optimisation de Suricata",
      "Paramétrage pour surveillance active du trafic",
      "Ingénierie de détection et reporting",
      "Maintenance opérationnelle",
    ],
  },
  {
    title: "VPN d'Entreprise (OpenVPN)",
    description: "Déploiement sécurisé d'un serveur OpenVPN pour accès distant multisite.",
    tools: ["OpenVPN", "Easy-RSA", "PKI", "Diffie-Hellman"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Infrastructure à clés publiques (PKI) avec Easy-RSA",
      "Sécurisation cryptographique (Diffie-Hellman, HMAC)",
      "Configuration réseau avancée (tunnel, UDP/1194)",
      "Audit et monitoring via logs",
    ],
  },
  {
    title: "Simulation Réseau Cisco (Packet Tracer)",
    description: "Conception et simulation d'une infrastructure réseau multisite sécurisée.",
    tools: ["Packet Tracer", "VLAN", "OSPF", "VLSM", "DMZ"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Segmentation VLSM et VLANs",
      "Routage dynamique OSPF avec authentification MD5",
      "Sécurisation des liaisons WAN (PPP, CHAP)",
      "Déploiement de services DHCP, NTP, DMZ",
    ],
  },
  {
    title: "Capture et analyse de trafic (Tcpdump & BPF)",
    description: "Interception et filtrage avancé de flux réseau en temps réel.",
    tools: ["Tcpdump", "BPF", "Linux"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Ingénierie de filtrage BPF",
      "Analyse de masquage binaire",
      "Détection de scans et menaces",
      "Expertise forensique réseau",
    ],
  },
  {
    title: "Analyse de trafic et filtrage BPF (Tcpdump)",
    description: "Analyse de captures réseau complexes avec filtrage granulaire.",
    tools: ["Tcpdump", "BPF", "TCP"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Expertise en langage BPF",
      "Analyse de flux TCP (flags)",
      "Filtrage granulaire et diagnostic",
      "Monitoring temps réel",
    ],
  },
  {
    title: "Ingénierie de filtrage BPF",
    description: "Maîtrise du langage Berkeley Packet Filter pour optimiser l'analyse de paquets.",
    tools: ["BPF", "Tcpdump", "VLAN"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Architecture BPF",
      "Logique de filtrage avancée",
      "Analyse binaire et masquage",
      "Filtrage de protocoles & VLAN",
    ],
  },
  {
    title: "Analyse de trafic Wireshark",
    description: "Maîtrise de l'analyse de paquets réseau et des filtres d'affichage.",
    tools: ["Wireshark", "OSI", "TCP/IP"],
    category: "Sécurité Réseau & Infrastructure",
    roles: [
      "Modélisation réseau (OSI, TCP/IP)",
      "Analyse de PDU",
      "Expertise en filtrage avancé",
      "Audit de protocoles applicatifs",
    ],
  },

  // ===== Forensic & DFIR =====
  {
    title: "Digital Forensics & Incident Response (DFIR)",
    description: "Investigation forensique d'une machine compromise via un package malveillant.",
    tools: ["MFTExplorer", "Timeline Explorer", "NuGet"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse forensique (MFT, logs, timeline)",
      "Analyse de paquets malveillants (NuGet)",
      "Détection de techniques de persistance",
      "Reconstitution de chronologie d'attaque",
    ],
  },
  {
    title: "Malware Analysis – Extension navigateur",
    description: "Analyse d'une extension Chrome/Edge malveillante (type ChatGPT) pour identifier ses mécanismes d'exfiltration.",
    tools: ["Reverse Engineering", "JavaScript", "Dé-obfuscation"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse statique de code JavaScript",
      "Détection d'obfuscation et d'encodage",
      "Analyse des permissions et API",
      "Cartographie des flux de données",
    ],
  },
  {
    title: "Network Forensics",
    description: "Analyse des logs réseau et captures PCAP pour identifier une compromission et exfiltration.",
    tools: ["Wireshark", "FTP", "DNS", "TLS"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse Wireshark approfondie",
      "Identification de protocoles suspects (FTP, DNS, TLS)",
      "Extraction d'IoC",
      "Analyse de métadonnées (MAC, géolocalisation)",
    ],
  },
  {
    title: "System Log Analysis",
    description: "Analyse d'une extension malveillante sous l'angle des interactions système.",
    tools: ["EVTX", "Logs Windows", "Forensic"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse dynamique d'extension",
      "Détection de mécanismes d'évasion",
      "Corrélation comportement système / réseau",
    ],
  },
  {
    title: "Détection Exfiltration DNS (Zeek)",
    description: "Identification et documentation d'une tentative d'exfiltration de données par tunnel DNS.",
    tools: ["Zeek", "Zeek-cut", "Analyse logs"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de logs structurés (dns.log, conn.log)",
      "Détection d'anomalies DNS",
      "Analyse technique d'attaque",
      "Reporting et remédiation",
    ],
  },
  {
    title: "Investigation numérique CLI",
    description: "Investigation de cybersécurité en ligne de commande avec manipulation de flux réseau.",
    tools: ["editcap", "tshark", "tcpflow", "Zeek"],
    category: "Forensic & DFIR",
    roles: [
      "Ingénierie de fichiers de capture (editcap, mergecap)",
      "Extraction et filtrage (tshark, ngrep)",
      "Reconstruction de flux applicatifs (tcpflow)",
      "Analyse corrélée (Zeek)",
    ],
  },
  {
    title: "Forensic PCAPNG – Structure SHB",
    description: "Compréhension de l'organisation globale des fichiers de capture réseau (Section Header Block).",
    tools: ["Hex Editor", "PCAPNG", "Wireshark"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse du Section Header Block (SHB)",
      "Détermination de l'endianness",
      "Forensique binaire",
      "Navigation de structure",
    ],
  },
  {
    title: "Forensic PCAPNG – Bloc IDB",
    description: "Compréhension de la structure logique des fichiers de capture (Interface Description Block).",
    tools: ["Hex Editor", "PCAPNG", "Wireshark"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse du bloc IDB (LinkType, SnapLen)",
      "Expertise forensique et mapping de données",
      "Navigation bas niveau dans les structures binaires",
    ],
  },
  {
    title: "Forensic PCAPNG – Enhanced Packet Block",
    description: "Maîtrise de l'anatomie des captures réseau au niveau binaire.",
    tools: ["HxD", "Vim xxd", "PCAPNG"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de structure PCAPNG (Enhanced Packet Block)",
      "Édition hexadécimale (HxD, Vim xxd)",
      "Correction de headers corrompus",
      "Reconstruction chronologique via timestamps",
    ],
  },
  {
    title: "Analyse de trames Ethernet",
    description: "Analyse et interprétation de la structure binaire des en-têtes réseau Ethernet.",
    tools: ["Wireshark", "Hex Editor", "IEEE"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de trames Ethernet (MAC, EtherType)",
      "Corrélation EPB/Ethernet",
      "Expertise en adressage MAC (OUI, unicast, multicast)",
      "Documentation technique",
    ],
  },
  {
    title: "Analyse protocolaire IPv4",
    description: "Analyse en profondeur de la structure des en-têtes IPv4.",
    tools: ["Wireshark", "Hex Editor", "RFC"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de structure IPv4 (Version, IHL, TTL, Protocol)",
      "Calculs de contrôle (Header Checksum)",
      "Audit d'adressage et subnetting",
      "Gestion de la fragmentation",
    ],
  },
  {
    title: "Analyse comparative IPv4 vs IPv6",
    description: "Maîtrise de l'architecture des en-têtes de la couche réseau.",
    tools: ["Wireshark", "IPv4", "IPv6"],
    category: "Forensic & DFIR",
    roles: [
      "Audit d'en-tête IPv4 (fragmentation, TTL)",
      "Expertise en adressage IP et subnetting",
      "Ingénierie de transition IPv6",
      "Analyse de flux et conformité",
    ],
  },
  {
    title: "Analyse protocolaire TCP",
    description: "Maîtrise de l'anatomie du protocole TCP au niveau binaire.",
    tools: ["Wireshark", "Hex Editor", "RFC"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de structure TCP (ports, séquences, flags)",
      "Ingénierie de contrôle de flux",
      "Remédiation de données corrompues",
      "Audit d'intégrité et conformité",
    ],
  },
  {
    title: "Forensic PCAPNG – Endianness & Intégrité",
    description: "Organisation binaire des captures réseau de nouvelle génération.",
    tools: ["Hex Editor", "PCAPNG", "IETF"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse du Section Header Block (SHB)",
      "Gestion de l'endianness",
      "Ingénierie de format binaire",
      "Contrôle d'intégrité",
    ],
  },
  {
    title: "Forensic PCAPNG – IDB & Encapsulation",
    description: "Organisation logique des fichiers de capture modernes.",
    tools: ["PCAPNG", "Wireshark", "IETF"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse du bloc IDB (LinkType, SnapLen)",
      "Expertise en protocoles et encapsulation",
      "Forensique binaire",
      "Validation et conformité (IETF, Wireshark)",
    ],
  },
  {
    title: "Analyse TCP & flux PCAPNG",
    description: "Anatomie du protocole TCP et structure des fichiers PCAPNG.",
    tools: ["Wireshark", "Hex Editor", "TCP"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de structure TCP (ports, flags, fenêtre)",
      "Forensique et remédiation manuelle",
      "Interprétation de fichiers PCAPNG",
      "Recherche et validation technique (RFC)",
    ],
  },
  {
    title: "Analyse Ethernet & PCAPNG",
    description: "Compréhension approfondie des trames Ethernet et du format PCAPNG.",
    tools: ["Wireshark", "IEEE", "PCAPNG"],
    category: "Forensic & DFIR",
    roles: [
      "Analyse de trames Ethernet",
      "Expertise en adressage MAC (OUI, unicast, multicast)",
      "Exploration du format PCAPNG",
      "Investigation et conformité (IEEE)",
    ],
  },

  // ===== Développement & Automatisation =====
  {
    title: "Détection de vulnérabilités web (Python)",
    description: "Automatisation de l'identification de failles courantes sur un site web.",
    tools: ["Python", "Requests", "BeautifulSoup"],
    category: "Développement & Automatisation",
    roles: [
      "Analyse des requêtes HTTP et réponses serveur",
      "Détection de SQLi, XSS, erreurs de configuration",
      "Structuration d'un script multi-endpoints",
      "Outil basique de cybersécurité pour audit automatisé",
    ],
  },
  {
    title: "Développement de fonctions système (C)",
    description: "Programmation bas niveau et manipulation de données sans bibliothèques standards.",
    tools: ["C", "Algorithmique", "my_putchar"],
    category: "Développement & Automatisation",
    roles: [
      "Développement en C strict, sans tableaux ni chaînes",
      "Gestion des flux de sortie avec my_putchar",
      "Logique combinatoire pour combinaisons numériques",
      "Rigueur structurelle avec prototypes imposés",
    ],
  },
  {
    title: "Programmation bas niveau et pointeurs (C)",
    description: "Manipulation directe de la mémoire via les pointeurs.",
    tools: ["C", "Pointeurs", "Algorithmes"],
    category: "Développement & Automatisation",
    roles: [
      "Arithmétique des pointeurs",
      "Traitement de chaînes sans bibliothèque standard",
      "Algorithmique de tri",
      "Gestion de la mémoire et débogage",
    ],
  },
  {
    title: "Administration système Linux (C-Pool)",
    description: "Utilisation avancée de la ligne de commande Linux et automatisation.",
    tools: ["Bash", "Linux", "Git", "SSH"],
    category: "Développement & Automatisation",
    roles: [
      "Gestion du système de fichiers et permissions",
      "Scripting Bash (automatisation, nettoyage)",
      "Versioning avec Git (clés SSH, add-commit-push)",
      "Archivage et compression (tar, gzip)",
    ],
  },
  {
    title: "Scripting Shell et Automatisation (Bash)",
    description: "Développement d'outils d'automatisation pour le traitement de fichiers et l'extraction de données.",
    tools: ["Bash", "CSV", "Pipes", "tr"],
    category: "Développement & Automatisation",
    roles: [
      "Parsing de données (CSV, /etc/passwd)",
      "Manipulation de flux et pipes",
      "Analyse récursive du système de fichiers",
      "Cryptographie élémentaire (tr)",
    ],
  },

  // ===== GRC & Conformité =====
  {
    title: "Audit de sécurité NIST CSF",
    description: "Audit interne complet pour sécuriser l'infrastructure d'une entreprise en pleine croissance.",
    tools: ["NIST CSF", "Analyse de risques", "RGPD"],
    category: "GRC & Conformité",
    roles: [
      "Analyse de risques et d'actifs",
      "Application du framework NIST (Identifier, Protéger, Détecter, Répondre, Rétablir)",
      "Contrôle de conformité (RGPD, paiements en ligne)",
      "Recommandations stratégiques",
    ],
  },
  {
    title: "Conformité ARTCI",
    description: "Audit d'une start-up santé pour évaluer sa conformité à la loi ivoirienne sur les données personnelles.",
    tools: ["ARTCI", "Conformité", "RGPD"],
    category: "GRC & Conformité",
    roles: [
      "Analyse de conformité légale",
      "Identification de manquements (consentement, transfert illégal)",
      "Utilisation de la jurisprudence",
      "Plan d'action et notification de violation",
    ],
  },
  {
    title: "Outil de conformité ISO 27002 (Excel)",
    description: "Création d'un outil Excel d'évaluation de la conformité aux contrôles ISO 27002:2022.",
    tools: ["ISO 27002", "Excel", "Graphiques radar"],
    category: "GRC & Conformité",
    roles: [
      "Maîtrise de la norme ISO 27002",
      "Conception d'outil avec formules Excel",
      "Visualisation (graphiques radar, barres)",
      "Calcul de niveaux de maturité",
    ],
  },
  {
    title: "Data Classification (CIA)",
    description: "Classification des actifs informationnels selon les critères CIA.",
    tools: ["ISO 27001", "CIA", "Harm Analysis"],
    category: "GRC & Conformité",
    roles: [
      "Inventaire des actifs",
      "Analyse d'impact (harm analysis)",
      "Classification CIA",
      "Recommandations ISO 27001",
    ],
  },
  {
    title: "Modélisation BPMN – Processus critiques",
    description: "Modélisation des processus métier critiques avec BPMN et identification des vulnérabilités.",
    tools: ["BPMN", "ISO 27001", "Modélisation"],
    category: "GRC & Conformité",
    roles: [
      "Analyse de processus",
      "Modélisation BPMN (pools, lanes, événements)",
      "Identification des actions critiques",
      "Proposition de contrôles ISO 27001",
    ],
  },
  {
    title: "Simulation de crise (RANSOM20)",
    description: "Gestion d'une attaque par rançongiciel sous pression (DG, SOC, COM, LEGAL).",
    tools: ["Gestion de crise", "SOC", "RGPD", "ARTCI"],
    category: "GRC & Conformité",
    roles: [
      "Coordination de cellule de crise",
      "Communication interne/externe",
      "Prise de décisions stratégiques",
      "Conformité légale (ARTCI, RGPD)",
    ],
  },
  {
    title: "Risk Management",
    description: "Maximisation d'un score en choisissant des mesures préventives et correctives.",
    tools: ["Analyse de risques", "Mitigation", "Stratégie"],
    category: "GRC & Conformité",
    roles: [
      "Identification des menaces et mesures",
      "Évaluation des coûts et impacts",
      "Calcul des seuils de mitigation",
      "Prise de décision stratégique",
    ],
  },
  {
    title: "Security by Design – Threat Modeling PASTA",
    description: "Application de la méthodologie PASTA sur une application web (Vue.js / Elixir).",
    tools: ["PASTA", "MITRE ATT&CK", "Nessus", "OpenVAS"],
    category: "GRC & Conformité",
    roles: [
      "7 étapes PASTA",
      "DFD et trust boundaries",
      "Attack trees (MITRE ATT&CK)",
      "Simulation d'attaques",
    ],
  },
  {
    title: "Security Reporting & Dashboards",
    description: "Conception de dashboards opérationnels et stratégiques pour RemoteLock.",
    tools: ["Power BI", "Excel", "KPI", "Canva"],
    category: "GRC & Conformité",
    roles: [
      "KPIs SMART",
      "Analyse des risques résiduels",
      "Tableaux de bord (Excel, PowerBI, Canva)",
      "Pitch de présentation",
    ],
  },
  {
    title: "Plan d'Audit ISO 27001",
    description: "Élaboration d'un plan d'audit pour la certification ISO 27001.",
    tools: ["ISO 27001", "SMSI", "Audit"],
    category: "GRC & Conformité",
    roles: [
      "Définition du périmètre SMSI",
      "Inventaire des actifs",
      "Évaluation des risques",
      "Planification des activités d'audit",
    ],
  },

  // ===== Data & Visualisation =====
  {
    title: "Analyse de base de données (SQL)",
    description: "Exploitation de données via des requêtes SQL pour prise de décision.",
    tools: ["SQL", "SELECT", "JOIN", "Agrégation"],
    category: "Data & Visualisation",
    roles: [
      "Extraction de données avec SELECT",
      "Filtrage (WHERE), tri (ORDER BY), agrégation (COUNT, SUM, AVG)",
      "Jointures (JOIN) pour relier plusieurs tables",
      "Interprétation des résultats pour prise de décision",
    ],
  },
  {
    title: "Visualisation de données (Power BI)",
    description: "Représentation visuelle de données pour faciliter l'analyse et la décision.",
    tools: ["Power BI", "KPI", "Graphiques"],
    category: "Data & Visualisation",
    roles: [
      "Importation et transformation des données",
      "Création de tableaux de bord interactifs",
      "Utilisation de graphiques (barres, lignes, cartes, KPI)",
      "Mise en forme pour lecture rapide et pertinente",
    ],
  },
];
