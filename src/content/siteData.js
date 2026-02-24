// ─── Site Data ─────────────────────────────────────────────────────────────
// Edit this file to update all portfolio content.
// No layout code needs to change when you update content here.

const siteData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Benjamin Tran",
  initials: "BT",
  tagline: "M.S. Computer Science Candidate",
  flipSentences: [
    "M.S. Computer Science Candidate",
    "ML Engineering & Security Research",
    "Full-Stack Developer",
    "Cal Poly Pomona",
  ],
  subTagline: "Cal Poly Pomona · ML Engineering · Security Research · Full-Stack",
  about: "M.S. Computer Science candidate at Cal Poly Pomona, with a concentration " +
    "in Cybersecurity and Network Infrastructure. I work across ML engineering, " +
    "security research, and full-stack development. My current project, MIDI Remaster Lab, " +
    "fine-tunes Meta's MusicGen to synthesize console-era audio from MIDI input, with a " +
    "FastAPI backend, React frontend, and a suite of quantitative audio evaluation metrics. " +
    "On the security side, I have implemented membership inference attacks and differential " +
    "privacy defenses for a study replicating real-world healthcare tracking vulnerabilities. " +
    "Previously at Amazon, I built cloud dashboards surfacing cross-regional performance " +
    "metrics using AWS Glue, Lambda, and QuickSight. I am actively seeking roles in ML " +
    "engineering, security, or full-stack development where I can ship things that matter.",
  location: "Los Angeles Metropolitan Area, CA",
  email: "btran083@outlook.com",
  phone: "(909) 367-9168",
  portraits: "/portrait.png",
  resumeFile: "/resume.pdf",

  // ── Social Links ───────────────────────────────────────────────────────────
  social: {
    github: "https://github.com/btranTFT",
    linkedin: "https://www.linkedin.com/in/btran083/",
  },

  // ── Skills ────────────────────────────────────────────────────────────────
  // Each category group becomes a labelled tag-pill block in the About section.
  skills: [
    {
      category: "Languages",
      items: ["Java", "Python", "C++", "C#", "SQL", "MATLAB"],
    },
    {
      category: "Web & Scripting",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Node.js", "ADB (Android)"],
    },
    {
      category: "Tools & Platforms",
      items: ["AWS", "React", "Git", "Android Studio", "Material-UI"],
    },
  ],

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      company: "Amazon",
      icon: "amazon",
      role: "FC Associate / IT Assistant",
      location: "Chino, California",
      period: "Sep 2020 – Jan 2022",
      type: "Part-time",
      bullets: [
        "Created Python scripts to construct a pipeline that retrieved performance data from the AWS cross-regional team.",
        "Collaborated with IT teams to troubleshoot and resolve networking issues.",
        "Utilized AWS Glue, S3, Lambda, Redshift, and QuickSight to develop a dashboard displaying real-time cross-team metrics.",
        "Utilized Microsoft Excel for data analysis and reporting, contributing to process optimization.",
      ],
      tags: ["Python", "AWS", "Glue", "S3", "Lambda", "Redshift", "QuickSight"],
    },
  ],

  // ── Education ─────────────────────────────────────────────────────────────
  education: [
    {
      degree: "M.S. in Computer Science",
      school: "California State Polytechnic University – Pomona",
      location: "Pomona, California",
      period: "Expected May 2026",
      note: "Concentrations: Cybersecurity and Network Infrastructure\nRelevant Coursework: Data Structures & Algorithms, Object-Oriented Design, Computer Organization, Operating Systems, Computer Architecture, Software Engineering, Statistics & Applications",
    },
    {
      degree: "B.S. in Biological Science",
      school: "California State Polytechnic University – Pomona",
      location: "Pomona, California",
      period: "Graduated May 2022",
      note: "",
    },
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      title: "MIDI Remaster Lab",
      period: "2026",
      description:
        "Transform MIDI files into console-style audio using soundfont synthesis (Baseline) or AI generation (ML mode). Supports SNES, GBA, NDS, PS2, and Wii soundfonts. Fine-tunes Meta's MusicGen with per-console AudioCraft checkpoints and implements four quantitative evaluation metrics (PICS, Pearson melody similarity, onset alignment F-measure, Fréchet Audio Distance).",
      tags: ["Python", "FastAPI", "React", "TypeScript", "Vite", "MusicGen", "AudioCraft", "FluidSynth", "Machine Learning"],
      github: "https://github.com/btranTFT/MIDIremapANDgen",
      live: "https://midiremapandgen.vercel.app/",
      image: null,
      featured: true,
    },
    {
      title: "Tracking the Trackers",
      period: "2025",
      description:
        "CS 5510 research project demonstrating privacy leakage in healthcare web portals through embedded tracking scripts. Implements a membership inference attack (78% accuracy against undefended systems) and evaluates differential privacy defenses using the Laplace mechanism. Replicates findings similar to the 2024 Kaiser Permanente incident using only synthetic data.",
      tags: ["Python", "Flask", "Node.js", "JavaScript", "SQLite", "Machine Learning", "Cybersecurity", "Differential Privacy"],
      github: "https://github.com/btranTFT/TrackingPrivacyAttacks",
      live: null,
      image: null,
      featured: true,
    },
    {
      title: "Study Room Tracker Web Service",
      period: "2025",
      description:
        "A modern full-stack web application for booking study rooms at Cal Poly Pomona Library. Features real-time availability, floor-based navigation, and a robust booking system.",
      tags: ["React", "Node.js", "JavaScript", "SQL"],
      github: "https://github.com/SatelliteGear/RoomTracker-PROTOTYPE-frontbackend-test",
      live: null,
      image: "/roomtracker.jpg",
      featured: true,
    },
    {
      title: "SMILES Molecule Generation",
      period: "2025",
      description:
        "A computational drug-discovery project leveraging data science and machine learning to identify potential drug candidates and analyze molecular interactions.",
      tags: ["Python", "Machine Learning", "Data Science", "Chemistry"],
      github: "https://github.com/AbogAscended/Drug-Discovery",
      live: null,
      image: "/drugdiscovery.jpg",
      featured: true,
    },
  ],

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      icon: "google",
      file: "/Google CyberSec.pdf",
    },
    {
      name: "Practical Data Science on the AWS Cloud",
      issuer: "AWS",
      icon: "aws",
      file: "/AWS Data Science.pdf",
    },
    {
      name: "AWS Cloud Technical Essentials",
      issuer: "AWS",
      icon: "aws",
      file: "/AWS Cloud Technical Essentials.pdf",
    },
  ],
};

export default siteData;
