// ─── Site Data ─────────────────────────────────────────────────────────────
// Edit this file to update all portfolio content.
// No layout code needs to change when you update content here.

const siteData = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: "Benjamin Tran",
  initials: "BT",
  tagline: "M.S. Computer Science Candidate (ML Focus)",
  flipSentences: [
    "M.S. Computer Science Candidate",
    "Generative Audio ML & NLP",
    "Full-Stack AI Systems",
    "Cal Poly Pomona",
  ],
  subTagline: "Cal Poly Pomona · Generative Audio ML · NLP · Full-Stack AI",
  about: "M.S. Computer Science candidate at Cal Poly Pomona, with a concentration " +
    "specializing in generative audio models and natural language processing. I fine-tune " +
    "MusicGen/AudioCraft transformers, build rigorous evaluation pipelines (including Fréchet " +
    "Audio Distance and contour-based metrics), and deploy full-stack AI systems with FastAPI " +
    "and React/TypeScript. My research includes chroma-conditioned generation workflows and " +
    "reproducible ML-vs-baseline benchmarking. At Amazon, I built real-time AWS dashboards and " +
    "Python automation while supporting incident triage across teams. I am seeking ML " +
    "engineering, applied AI, and full-stack roles where research rigor meets production impact.",
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
      category: "Machine Learning / AI",
      items: ["MusicGen (AudioCraft)", "Transformer Fine-tuning", "Generative Models", "Model Evaluation (FAD, PICS, F-measure)", "Chroma Conditioning"],
    },
    {
      category: "NLP / Data Science",
      items: ["Natural Language Processing", "Text Classification", "Embeddings", "Statistical Analysis", "Reporting", "Dashboards"],
    },
    {
      category: "Support / Ops",
      items: ["Troubleshooting", "Log/Alert Review", "Incident Triage", "Root-Cause Analysis", "Documentation"],
    },
    {
      category: "Programming",
      items: ["Python", "Java", "HTML/CSS", "TypeScript"],
    },
    {
      category: "Tools",
      items: ["Microsoft Excel", "Git", "Office 365", "FastAPI", "React", "Vite"],
    },
    {
      category: "Cloud / Systems",
      items: ["AWS (S3, Lambda, Glue, Redshift, QuickSight)", "FluidSynth", "MIDI Processing"],
    },
  ],

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      company: "Cal Poly Pomona",
      icon: null,
      role: "Research Assistant - Generative AI in Entertainment",
      location: "Pomona, California",
      period: "Oct 2025 - Present",
      type: "Research",
      bullets: [
        "Fine-tuned Meta's MusicGen (autoregressive transformer LM pre-trained on 20K+ hours of music) with per-style checkpoints across 5 retro soundfonts (SNES, GBA, NDS, PS2, Wii), improving style adherence over the base model by Fréchet Audio Distance.",
        "Engineered a chroma-conditioned generation pipeline (generate_with_chroma) that preserved melodic structure from MIDI-derived WAV prompts and reduced pitch contour deviation versus unconditioned generation across a 40+ file corpus.",
        "Built a 4-metric evaluation suite (Pitch-Interval Contour Similarity, Pearson pitch correlation, Onset Alignment F-measure, Fréchet Audio Distance) to benchmark ML output against a deterministic FluidSynth baseline across all 5 soundfont styles.",
        "Delivered a full-stack research interface (FastAPI + React/TypeScript) with real-time event logging and automated corpus evaluation scripts for reproducible ML-vs-baseline comparisons.",
      ],
      tags: ["MusicGen", "AudioCraft", "Python", "FastAPI", "React", "TypeScript", "FluidSynth", "FAD", "PICS"],
    },
    {
      company: "Amazon",
      icon: "amazon",
      role: "FC Associate / IT Support Assistant",
      location: "Chino, California",
      period: "Sep 2020 - Jan 2022",
      type: "Part-time",
      bullets: [
        "Automated an operational reporting pipeline in Python, reducing manual retrieval and formatting for recurring stakeholder reports.",
        "Built a near real-time monitoring dashboard (AWS Glue, S3, Lambda, Redshift, QuickSight) to track fulfillment KPIs and surface shift-level anomalies.",
        "Triaged and resolved connectivity and system issues, maintained documentation, and communicated incident status to cross-functional partners to reduce repeat escalations.",
        "Analyzed Excel datasets to identify operational patterns and recommend process improvements that informed floor-level workflow changes.",
      ],
      tags: ["Python", "AWS", "Glue", "S3", "Lambda", "Redshift", "QuickSight", "Troubleshooting", "Incident Triage", "Excel"],
    },
    {
      company: "Ivy Leaf Academy",
      icon: null,
      role: "Coding Teacher",
      location: "Chino Hills, California",
      period: "Nov 2024 - Present",
      type: "Part-time",
      bullets: [
        "Teach Scratch programming and computer literacy to students ages 6-12, and design adaptive lesson plans for diverse learning styles.",
      ],
      tags: ["Scratch", "Teaching", "Computer Literacy", "Curriculum Design"],
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
        "Compared deterministic MIDI-to-audio synthesis against fine-tuned MusicGen generation across 5 retro soundfont styles. Built the evaluation framework (Fréchet Audio Distance, Pitch-Interval Contour Similarity, onset F-measure), a FastAPI ML inference backend, and a React/TypeScript UI with real-time logging. Training ran locally and on Colab, with per-soundfont checkpoints versioned in the repository.",
      tags: ["Python", "FastAPI", "React", "TypeScript", "Vite", "MusicGen", "AudioCraft", "FluidSynth", "Machine Learning", "Colab"],
      github: "https://github.com/btranTFT/MIDIremapANDgen",
      live: "https://midiremapandgen.vercel.app/",
      image: null,
      featured: true,
    },
    {
      title: "Tracking the Trackers",
      period: "2025",
      description:
        "Exposed privacy leakage in a simulated healthcare portal via embedded tracking scripts. Ran a membership inference attack on anonymized session data, then evaluated three defenses (CSP headers, input sanitization, differential privacy) and quantified the attack-rate reduction of each strategy.",
      tags: ["Python", "Flask", "Node.js", "JavaScript", "SQLite", "Machine Learning", "Cybersecurity", "Differential Privacy", "Privacy Attacks"],
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
