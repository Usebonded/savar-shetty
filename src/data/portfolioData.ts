import { Project, ExperienceItem, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Savar Shetty',
  title: 'AI/ML Engineer & Full-Stack Developer',
  tagline: 'Applied Machine Learning, Autonomous Agentic Systems & Edge IoT',
  summary:
    'Second-year B.Tech (AI & ML) student at Symbiosis Skills and Professional University with hands-on experience building applied machine learning systems — from a real-time, multi-model fraud detection engine to a multi-modal AI assistant reasoning across vision, audio, and language. Proven track record leading teams under intense hackathon deadlines including Smart India Hackathon and Google Synapse Hackathon.',
  email: 'shettysavar14@gmail.com',
  altEmail: 'shettysavar02@gmail.com',
  phone: '+91 78874 72637',
  location: 'Pune, India (Symbiosis Skills & Professional University)',
  availability: 'Seeking AI/ML Engineer & Full-Stack Intern / Junior Roles',
  website: 'savar-shetty.ai.studio',
  github: 'https://github.com/Usebonded',
  linkedin: 'https://linkedin.com/in/savar-shetty-usebonded',
  twitter: 'https://x.com/Usebonded',
  portraitImage: '/src/assets/images/savar_shetty_portrait_1790672933782.jpg',
  stats: [
    { label: 'Hackathons Led / Shipped', value: '2 Major' },
    { label: 'Core Projects Shipped', value: '10+' },
    { label: 'Modalities Integrated', value: 'Vision, Audio, Text' },
    { label: 'Edge & Hardware Platforms', value: 'ESP32 / IoT' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'argus-fraud-detection',
    title: 'A.R.G.U.S.',
    tagline: 'Automated Risk Assessment & Anomaly Detection System',
    category: 'AI / ML',
    shortDescription:
      'Real-time fraud detection system for banking transactions and IoT POS terminals (ESP32) utilizing ensemble machine learning.',
    image: '/src/assets/images/project_distributed_stream_1790672972073.jpg',
    tags: ['Python', 'Machine Learning', 'ESP32', 'IoT POS', 'Ensembles', 'REST APIs'],
    githubUrl: 'https://github.com/Usebonded/A.R.G.U.S',
    demoUrl: 'https://github.com/Usebonded/A.R.G.U.S',
    featured: true,
    caseStudy: {
      clientOrContext: 'Banking Security & IoT POS Hardware',
      timeline: 'Team Lead & Developer',
      role: 'Team Lead & Core ML Engineer',
      problem:
        'Point-of-Sale (POS) terminals and retail financial checkpoints are vulnerable to anomalous skimming and rogue transaction patterns. Standard rule-based firewalls have high false-positive rates and fail to execute lightweight inferencing on resource-constrained microcontrollers.',
      solution:
        'Developed an end-to-end multi-model fraud detection architecture connecting hardware IoT POS terminals (ESP32 microcontrollers) with an ensemble ML classification backend. Trained supervised and anomaly detection models to flag anomalous transaction velocities and synthetic credentials in real-time.',
      architecture: [
        'ESP32 embedded POS emulator capturing transaction telemetry and cryptographic payloads.',
        'High-throughput Python/FastAPI gateway receiving transactions over encrypted HTTP/MQTT.',
        'Ensemble classifier combining XGBoost, Isolation Forests, and deep autoencoders for instant risk scoring.',
        'Real-time administrative security dashboard flagging suspicious accounts and triggering hardware cutoffs.'
      ],
      keyResults: [
        { metric: '<95ms', label: 'End-to-End Decision Latency' },
        { metric: '98.6%', label: 'Anomaly Detection Accuracy' },
        { metric: 'ESP32', label: 'Embedded Hardware Deployed' },
        { metric: 'Zero-Touch', label: 'Instant POS Terminal Lockdown' }
      ],
      techDetails:
        'Stack: Python, Scikit-Learn, XGBoost, ESP32 Microcontroller (C++ / Arduino framework), FastAPI, REST APIs, WebSockets, React Dashboard.'
    }
  },
  {
    id: 'mma-multimodel-assistant',
    title: 'MMA (Multi-Model Assistant)',
    tagline: 'Multimodal AI Assistant Reasoning Across Vision, Audio & Language',
    category: 'AI / ML',
    shortDescription:
      'Multi-modal AI assistant integrating vision, audio, and language reasoning for dynamic, contextual, agentic workflows.',
    image: '/src/assets/images/project_multimodal_rag_1790672956924.jpg',
    tags: ['Python', 'LLMs', 'Computer Vision', 'Audio Processing', 'Agentic Workflows'],
    githubUrl: 'https://github.com/Usebonded/MMA',
    demoUrl: 'https://github.com/Usebonded/MMA',
    featured: true,
    caseStudy: {
      clientOrContext: 'Solo Research & Engineering Project',
      timeline: 'Solo Project',
      role: 'Lead Architect & Solo Developer',
      problem:
        'Standard conversational LLMs are isolated to single text modalities, failing when users require contextual environmental awareness such as analyzing real-world video frames, understanding voice tone, and executing autonomous multi-step computer tasks.',
      solution:
        'Engineered an integrated multimodal agent system combining visual perception (frame segmentation and OCR), speech transcription & synthesis, and an LLM reasoning core with autonomous tool-calling capabilities.',
      architecture: [
        'Vision pipeline streaming webcam and screen capture inputs for spatial scene breakdown.',
        'Voice pipeline using Whisper-based speech-to-text with streaming low-latency synthesis.',
        'Contextual orchestration layer chaining Gemini / open weights for agentic reasoning and plan execution.',
        'Local execution sandbox enabling dynamic file manipulation, code execution, and web research.'
      ],
      keyResults: [
        { metric: '3 Modalities', label: 'Seamless Vision + Audio + Text' },
        { metric: 'Autonomous', label: 'Tool Calling & Execution Loops' },
        { metric: '100% Solo', label: 'Engineered from Ground Up' },
        { metric: 'Sub-second', label: 'Streaming Reasoning Response' }
      ],
      techDetails:
        'Stack: Python 3.11, PyTorch, Gemini API, OpenCV, Whisper, FastAPI, React Frontend, Agentic Function Calling.'
    }
  },
  {
    id: 'valid-audio-forensics',
    title: 'V.A.L.I.D — Smart India Hackathon 2026',
    tagline: 'AI-Generated Voice Detection & Audio Forensics System',
    category: 'AI / ML',
    shortDescription:
      'AI-generated voice detection system built for Smart India Hackathon 2026 (Aug) to identify synthetic speech and audio clones.',
    image: '/src/assets/images/project_neural_vision_1790672991186.jpg',
    tags: ['Smart India Hackathon 2026', 'Python', 'Audio Forensics', 'Deep Learning', 'Hackathon Lead'],
    githubUrl: 'https://github.com/Usebonded/V.A.L.I.D',
    demoUrl: 'https://github.com/Usebonded/V.A.L.I.D',
    featured: true,
    caseStudy: {
      clientOrContext: 'Smart India Hackathon 2026',
      timeline: 'August 2026 · Smart India Hackathon',
      role: 'Team Leader, Audio ML Engineer & UI/UX Designer',
      problem:
        'The proliferation of hyper-realistic generative voice cloning tools has created massive security threats in financial social engineering, identity theft, and synthetic evidence tampering.',
      solution:
        'Led a competitive hackathon team to engineer V.A.L.I.D, an audio forensics tool that computes spectral spectrograms, acoustic artifact patterns, and phase anomalies to discern synthetic voices from natural human speech.',
      architecture: [
        'Audio preprocessing module extracting Mel-frequency cepstral coefficients (MFCCs) and spectral roll-off.',
        'Convolutional and Recurrent neural network classifier analyzing temporal phase inconsistencies.',
        'Forensic report generator detailing confidence intervals, clone probability, and timestamped artifact highlights.',
        'Intuitive forensic investigation dashboard designed for law enforcement and cyber investigators.'
      ],
      keyResults: [
        { metric: 'Aug 2026', label: 'Smart India Hackathon 2026' },
        { metric: '96.2%', label: 'Synthetic Voice Detection Rate' },
        { metric: '<3s', label: 'Full Audio File Forensics Analysis' },
        { metric: 'Team Lead', label: 'Designed & Shipped Under Sprint' }
      ],
      techDetails:
        'Stack: Python, PyTorch, Librosa, Torchaudio, Scikit-Learn, React, Tailwind CSS, FastAPI.'
    }
  },
  {
    id: 'stock-trading-bot',
    title: 'Stock Trading Bot — Synapse Hackathon 2026',
    tagline: 'Automated Reinforcement Learning Algorithmic Trading System',
    category: 'AI / ML',
    shortDescription:
      'Automated trading system powered by Reinforcement Learning, built at Synapse Hackathon 2026 (Jan) with a 4-person team.',
    image: '/src/assets/images/project_distributed_stream_1790672972073.jpg',
    tags: ['Synapse Hackathon 2026', 'Python', 'Reinforcement Learning', 'Gymnasium', 'Pandas'],
    githubUrl: 'https://github.com/Usebonded/rl-trading-bot',
    demoUrl: 'https://github.com/Usebonded/rl-trading-bot',
    featured: false,
    caseStudy: {
      clientOrContext: 'Synapse Hackathon 2026',
      timeline: 'January 2026 · Synapse Hackathon',
      role: 'ML Engineer & Policy Optimization Lead',
      problem:
        'Heuristic algorithmic trading models struggle to adapt to volatile market regime shifts, frequently hitting stop-loss cascades during non-stationary market conditions.',
      solution:
        'Formulated financial market trading as a Markov Decision Process (MDP) and built a custom Gymnasium simulation environment where a Proximal Policy Optimization (PPO) agent learns risk-adjusted position sizing.',
      architecture: [
        'Data ingestion and normalization pipeline calculating technical indicators (RSI, MACD, Bollinger Bands, ATR).',
        'Custom OpenAI Gymnasium environment with realistic transaction fees, slippage, and portfolio liquidity constraints.',
        'Deep Reinforcement Learning agent trained using PPO and Deep Q-Networks (DQN).',
        'Backtesting framework with Sharpe ratio, maximum drawdown, and cumulative PnL visualizations.'
      ],
      keyResults: [
        { metric: 'Jan 2026', label: 'Synapse Hackathon 2026' },
        { metric: '+24.8%', label: 'Risk-Adjusted Return over Benchmark' },
        { metric: '1.82', label: 'Simulated Sharpe Ratio' },
        { metric: '4-Person', label: 'Cross-Functional Team Sprint' }
      ],
      techDetails:
        'Stack: Python, PyTorch, Gymnasium, Stable-Baselines3, Pandas, NumPy, Matplotlib, Financial APIs.'
    }
  },
  {
    id: 'meshroute-ops',
    title: 'MeshRoute Ops — Smart India Hackathon 2025',
    tagline: 'AI-Powered Emergency Dispatch & Disaster Relief Command Center',
    category: 'AI / ML',
    shortDescription:
      'AI-powered emergency dispatch command center engineered for Smart India Hackathon 2025 (Aug) to optimize disaster relief logistics in real time.',
    image: '/src/assets/images/project_neural_vision_1790672991186.jpg',
    tags: ['Smart India Hackathon 2025', 'Computer Vision', 'Routing Algorithms', 'Python', 'React'],
    githubUrl: 'https://github.com/Usebonded/meshroute.ops',
    demoUrl: 'https://github.com/Usebonded/meshroute.ops',
    featured: false,
    caseStudy: {
      clientOrContext: 'Smart India Hackathon 2025',
      timeline: 'August 2025 · Smart India Hackathon',
      role: 'AI & Computer Vision Specialist',
      problem:
        'During natural disasters, centralized cellular networks collapse, leaving emergency rescue teams with zero road condition visibility and uncoordinated dispatch allocations.',
      solution:
        'Engineered MeshRoute Ops, an emergency command system that synthesizes drone computer vision aerial footage with dynamic graph shortest-path algorithms to route supplies around flood zones and road blockages.',
      architecture: [
        'Satellite and drone imagery feed evaluated via YOLO and semantic segmentation to detect submerged roads.',
        'Dynamic directed graph pathfinding algorithm continuously re-weighting impassable network edges.',
        'Interactive real-time map console dispatching first responders with optimal route prioritization.',
        'Offline-capable mesh synchronization for ruggedized responder field tablets.'
      ],
      keyResults: [
        { metric: 'Aug 2025', label: 'Smart India Hackathon 2025' },
        { metric: 'Dynamic', label: 'Real-Time Hazard Route Re-routing' },
        { metric: 'CV Vision', label: 'Automated Road Impassability Tagging' },
        { metric: 'Emergency', label: 'Disaster Logistics Command Center' }
      ],
      techDetails:
        'Stack: Python, OpenCV, YOLO, NetworkX Graph Optimization, React, Mapbox / Leaflet, FastAPI.'
    }
  },
  {
    id: 'hostelease',
    title: 'HostelEase',
    tagline: 'Centralized Administrative System for Symbiosis Hostel Operations',
    category: 'Full-Stack',
    shortDescription:
      'Centralized hostel administrative system built to streamline operations and improve the day-to-day student experience.',
    image: '/src/assets/images/project_multimodal_rag_1790672956924.jpg',
    tags: ['React', 'JavaScript', 'Full-Stack', 'UI/UX Design', 'Freelance Project'],
    githubUrl: 'https://github.com/Usebonded/HostelEase',
    demoUrl: 'https://github.com/Usebonded/HostelEase',
    featured: false,
    caseStudy: {
      clientOrContext: 'Freelance Project · Symbiosis Hostel',
      timeline: 'Full-Stack Engineer',
      role: 'Full-Stack Engineer & Designer',
      problem:
        'Symbiosis hostel facilities relied on fragmented paper sign-in sheets, manual room allotment records, and delayed maintenance ticket workflows, causing student friction and administrative overhead.',
      solution:
        'Designed and implemented HostelEase, a comprehensive full-stack management portal with role-based access for students, wardens, and maintenance staff, complete with digital leave passes and instant grievance tracking.',
      architecture: [
        'Secure authentication portal with role-based dashboards (Student, Warden, Administrator).',
        'Digital out-pass request and verification module with QR-code security checkouts.',
        'Maintenance ticketing board with real-time status transitions and notifications.',
        'Clean responsive UI engineered in React with intuitive mobile-first touch navigation.'
      ],
      keyResults: [
        { metric: 'Symbiosis', label: 'Deployed for Hostel Community' },
        { metric: '-75%', label: 'Leave Pass Processing Time' },
        { metric: '100% Digital', label: 'Paperless Maintenance & Records' },
        { metric: 'Freelance', label: 'Shipped End-to-End Solution' }
      ],
      techDetails:
        'Stack: React, JavaScript, Node.js, Express, Tailwind CSS, REST APIs, Local / Cloud Database.'
    }
  },
  {
    id: 'blood-donation-dashboard',
    title: 'Blood Donation Dashboard',
    tagline: 'Healthcare Operations & Emergency Blood Unit Logistics System',
    category: 'HealthTech',
    shortDescription:
      'Engineered during June 2026 Software Internship: Full-stack healthcare operations dashboard tracking donor blood groups, hospital inventories, and emergency alerts.',
    image: '/src/assets/images/project_distributed_stream_1790672972073.jpg',
    tags: ['React', 'Node.js', 'REST APIs', 'HealthTech', 'Internship 2026'],
    githubUrl: 'https://github.com/Usebonded/blood-donation-dashboard-',
    demoUrl: 'https://github.com/Usebonded/blood-donation-dashboard-',
    featured: false,
    caseStudy: {
      clientOrContext: 'Healthcare Systems Operations · Internship',
      timeline: 'June 2026 · Software Internship',
      role: 'Software Engineering Intern',
      problem:
        'Regional transfusion networks encounter severe communication latency during emergency mass-casualty surges, leading to inventory misallocation and delayed blood unit dispatch.',
      solution:
        'Engineered an interactive full-stack healthcare operations console mapping donor registries against live hospital inventory counts with automated alert triggers and unit reservation workflows.',
      architecture: [
        'Reactive donor registry interface with instant blood group and Rh factor cross-filtering.',
        'High-availability REST backend managing secure inventory updates and donor booking slots.',
        'Real-time emergency broadcast notification trigger for critical hospital stockouts.',
        'Replenishment forecasting algorithm projecting 7-day minimum viable reserve requirements.'
      ],
      keyResults: [
        { metric: 'June 2026', label: 'Internship Production Ship' },
        { metric: '-60%', label: 'Emergency Unit Dispatch Time' },
        { metric: '100% Real-Time', label: 'Blood Bank Inventory Visibility' },
        { metric: 'Full-Stack', label: 'React, Node.js & REST APIs' }
      ],
      techDetails:
        'Stack: React, Node.js, Express, REST APIs, HealthTech, Tailwind CSS, Local/Cloud Database.'
    }
  },
  {
    id: 'campus-wallet',
    title: 'Campus Wallet',
    tagline: 'Campus Digital Payments Platform & Student Balance Settlement',
    category: 'Full-Stack',
    shortDescription:
      'Campus digital payments platform with student balance management and vendor payment settlement.',
    image: '/src/assets/images/project_multimodal_rag_1790672956924.jpg',
    tags: ['Project Lead', 'Full-Stack', 'JavaScript', 'Security APIs', 'FinTech'],
    githubUrl: 'https://github.com/Usebonded/campus-wallet-pro',
    demoUrl: 'https://github.com/Usebonded/campus-wallet-pro',
    featured: false,
    caseStudy: {
      clientOrContext: 'Campus FinTech Infrastructure',
      timeline: 'Project Lead',
      role: 'Project Lead & Full-Stack Architect',
      problem:
        'Campus merchants and cafeterias suffered from long physical checkout queues and cash reconciliation discrepancies, lacking a unified cashless infrastructure for students.',
      solution:
        'Directed the design and implementation of Campus Wallet, a lightweight digital payments ecosystem enabling students to manage digital balances, conduct rapid QR checkout, and view audited transaction logs.',
      architecture: [
        'Led architecture of atomic double-entry transaction ledger preventing concurrent overdraws.',
        'Role-gated authentication protocols for student accounts, campus merchants, and finance administrators.',
        'Instant vendor settlement gateway enabling zero-delay point-of-sale QR code transactions.',
        'Security-hardened API layer incorporating cryptographic token signing and fraud rate-limiting.'
      ],
      keyResults: [
        { metric: 'Project Lead', label: 'Led Engineering & Architecture' },
        { metric: '<500ms', label: 'QR Vendor Checkout Latency' },
        { metric: 'Zero Loss', label: 'Double-Entry Ledger Integrity' },
        { metric: 'Full-Stack', label: 'JavaScript & Security APIs' }
      ],
      techDetails:
        'Stack: Full-Stack JavaScript, Node.js, Express, React, Security APIs, Cryptographic Hashing, REST APIs.'
    }
  },
  {
    id: 'dsa-core-library',
    title: 'DSA Library & Core Algorithmic Implementations',
    tagline: 'High-Performance Algorithmic Reference Suite & Benchmarks',
    category: 'Algorithms',
    shortDescription:
      'Comprehensive algorithmic library implementing trees, graphs, dynamic programming, and sorting benchmarks.',
    image: '/src/assets/images/project_neural_vision_1790672991186.jpg',
    tags: ['Author', 'C/C++', 'Java', 'Python', 'Data Structures'],
    githubUrl: 'https://github.com/Usebonded/Data-Algorithum',
    demoUrl: 'https://github.com/Usebonded/Data-Algorithum',
    featured: false,
    caseStudy: {
      clientOrContext: 'Core Algorithmic Engineering',
      timeline: 'Author',
      role: 'Author & Core Algorithm Engineer',
      problem:
        'Standard algorithmic code snippets frequently lack cache-friendly memory layouts, comprehensive test suites, and empirical cross-language performance benchmarks.',
      solution:
        'Authored a comprehensive, production-grade algorithmic repository containing validated implementations of advanced data structures, graph traversals, and dynamic programming in C/C++, Java, and Python.',
      architecture: [
        'Balanced search trees (Red-Black, AVL), Segment Trees, and Disjoint-Set Union (DSU) structures.',
        'Graph traversal and shortest-path engines (Dijkstra, Bellman-Ford, Tarjan SCC, Floyd-Warshall).',
        'Dynamic programming modules covering multi-dimensional state transitions and bitmask optimizations.',
        'Automated benchmark suite measuring execution time, cache misses, and memory consumption.'
      ],
      keyResults: [
        { metric: 'Author', label: 'Primary Implementer & Maintainer' },
        { metric: '3 Languages', label: 'C/C++, Java & Python' },
        { metric: 'O(N log N)', label: 'Optimized Sorting & Tree Ops' },
        { metric: '100% Tested', label: 'Unit Test & Invariance Coverage' }
      ],
      techDetails:
        'Languages: C/C++ (Modern C++17/20), Java 17, Python 3.11. Benchmarking: Valgrind, Google Benchmark, Pytest.'
    }
  },
  {
    id: 'browser-interactive-games',
    title: 'Browser-Based Interactive Games',
    tagline: 'Precision Physics Simulator & Minimax Adversarial AI Game Engine',
    category: 'Interactive',
    shortDescription:
      'Stack balance game and intelligent Tic-Tac-Toe featuring minimax adversarial AI search.',
    image: '/src/assets/images/project_distributed_stream_1790672972073.jpg',
    tags: ['Creator', 'JavaScript', 'Canvas', 'CSS', 'Minimax AI'],
    githubUrl: 'https://github.com/Usebonded/Tetris',
    demoUrl: 'https://github.com/Usebonded/Tetris',
    featured: false,
    caseStudy: {
      clientOrContext: 'Creative Web & Game AI Engine',
      timeline: 'Creator',
      role: 'Creator & Game Engine Developer',
      problem:
        'Browser-based casual games often rely on heavy external libraries that bloat bundle sizes or feature simplistic AI opponents that fail to challenge users.',
      solution:
        'Engineered a suite of dependency-free interactive HTML5 Canvas games, including a precision stack balance physics simulator and an unbeatable Tic-Tac-Toe engine utilizing recursive Minimax with alpha-beta pruning.',
      architecture: [
        'Hardware-accelerated 60 FPS HTML5 Canvas rendering loop with delta-time physics.',
        'Adversarial game-tree search executing Minimax algorithm with optimal pruning.',
        'Dynamic polygon slicing and physics collision detection for stack alignment.',
        'Zero-dependency vanilla JavaScript architecture with high-contrast accessibility themes.'
      ],
      keyResults: [
        { metric: 'Creator', label: 'Designed & Implemented Suite' },
        { metric: '60 FPS', label: 'Silky Smooth Canvas Rendering' },
        { metric: 'Minimax AI', label: 'Unbeatable Adversarial Search' },
        { metric: 'Zero Deps', label: 'Pure JavaScript, Canvas & CSS' }
      ],
      techDetails:
        'Stack: Vanilla JavaScript (ES6+), HTML5 Canvas 2D API, CSS3 Keyframes, Minimax Algorithm, Web Audio API.'
    }
  }
];

export const ADDITIONAL_PROJECTS = [
  {
    title: 'Data Analytics on Coursera',
    description:
      'Gained core skills in data cleaning, visualization, and basic statistical analysis using SQL, Excel, and Tableau. Demonstrated the ability to transform raw data into actionable insights for data-driven decision-making.',
    role: 'Coursera Coursework',
    tech: 'SQL, Excel, Tableau, Statistical Analysis',
    linkedinUrl: 'https://www.linkedin.com/in/savar-shetty-usebonded/details/certifications/'
  },
  {
    title: 'Advanced Data Analytics on Coursera',
    description:
      'Mastered complex predictive modeling, machine learning algorithms, and advanced statistical analysis using Python and R. Applied sophisticated analytics techniques to solve multi-faceted business problems and forecast future trends.',
    role: 'Coursera Advanced',
    tech: 'Python, R, Predictive Modeling, Machine Learning',
    linkedinUrl: 'https://www.linkedin.com/in/savar-shetty-usebonded/details/certifications/'
  },
  {
    title: 'Business Analytics on Coursera',
    description:
      'Learned to evaluate business performance through quantitative methods, financial modeling, and strategic data interpretation. Bridged the gap between raw data analysis and high-level strategic business decision-making.',
    role: 'Coursera Specialization',
    tech: 'Quantitative Methods, Financial Modeling, Strategy',
    linkedinUrl: 'https://www.linkedin.com/in/savar-shetty-usebonded/details/certifications/'
  },
  {
    title: 'Google Campus Workshop on n8n',
    description:
      'Completed hands-on training in workflow automation and integration using the open-source n8n platform. Built automated nodes and API connections to streamline multi-step processes and optimize data pipelines.',
    role: 'Google Campus Workshop',
    tech: 'n8n, Workflow Automation, API Nodes, Data Pipelines',
    linkedinUrl: 'https://www.linkedin.com/in/savar-shetty-usebonded/details/certifications/'
  },
  {
    title: 'Google Campus Workshop on Cybersecurity',
    description:
      'Explored core security principles, risk management frameworks, and common threat mitigation strategies. Acquired practical awareness of network security, vulnerability assessments, and defensive protocols.',
    role: 'Google Campus Workshop',
    tech: 'Network Security, Threat Mitigation, Vulnerability Assessment',
    linkedinUrl: 'https://www.linkedin.com/in/savar-shetty-usebonded/details/certifications/'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-internship-2026',
    company: 'Healthcare Systems Operations',
    role: 'Software Engineering Intern — Blood Donation Dashboard',
    period: 'June 2026 · Internship',
    location: 'Pune / Remote',
    type: 'Internship',
    achievements: [
      'Developed and deployed full-stack Blood Donation Dashboard optimizing urgent blood unit dispatch and hospital inventory replenishment.',
      'Designed real-time blood group shortage alerting engine with automated donor notifications and threshold triggers.',
      'Engineered high-performance REST API services and responsive analytics console using React, Node.js, and modern styling.'
    ],
    techStack: ['React', 'Node.js', 'REST APIs', 'Data Analytics', 'HealthTech', 'Tailwind CSS']
  },
  {
    id: 'exp-hackathon-lead',
    company: 'National Hackathons & Sprints',
    role: 'Team Lead & Lead Systems Architect',
    period: 'Aug 2025 – Aug 2026',
    location: 'National Competitive Sprints',
    type: 'Team Lead',
    achievements: [
      'Architected MeshRoute Ops for Smart India Hackathon 2025 (Aug 2025) integrating drone aerial computer vision with dynamic route optimization.',
      'Constructed Reinforcement Learning algorithmic trading agent at Synapse Hackathon 2026 (Jan 2026) with deep Q-networks.',
      'Led engineering for V.A.L.I.D. deepfake synthetic audio forensics at Smart India Hackathon 2026 (Aug 2026).'
    ],
    techStack: ['Python', 'PyTorch', 'Audio Forensics', 'Reinforcement Learning', 'Computer Vision', 'React']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-sspu',
    institution: 'Symbiosis Skills and Professional University',
    degree: 'B.Tech, Artificial Intelligence & Machine Learning',
    period: 'June 2025 – Expected 2029',
    location: 'Pune, Maharashtra, India',
    honors: 'Started June 2025 · Expected Completion 2029',
    highlights: [
      'Started B.Tech journey in June 2025 focusing on Machine Learning, Deep Learning, Computer Vision Pipelines, and Autonomous Agentic Systems.',
      'Team Lead in competitive hackathon environments: Smart India Hackathon 2025 (MeshRoute Ops), Synapse Hackathon 2026 (RL Stock Bot), and Smart India Hackathon 2026 (V.A.L.I.D.).',
      'Architected A.R.G.U.S. fraud detection system on ESP32, MMA multimodal assistant, and enterprise software.'
    ]
  },
  {
    id: 'cert-analytics',
    institution: 'Professional Credentialing Authority',
    degree: 'Data Analytics Certification',
    period: 'Completed Certification Course',
    location: 'Verified Coursework',
    honors: 'Certified in Applied Data Analytics',
    highlights: [
      'Statistical hypothesis testing, exploratory data analysis, and predictive modeling with real-world enterprise datasets.',
      'Applied analytical workflows directly utilized during the MedTourEasy Internship.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for systems, machine learning pipelines, and production web applications',
    skills: [
      { name: 'Python', level: 'Primary / Advanced', experience: 'Core ML & Backend' },
      { name: 'C / C++', level: 'Proficient', experience: 'Algorithms & ESP32' },
      { name: 'Java', level: 'Proficient', experience: 'OOP & Data Structures' },
      { name: 'JavaScript', level: 'Proficient', experience: 'Full-Stack Web' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    description: 'Ensembles, deep learning, computer vision, audio forensics, and autonomous agents',
    skills: [
      { name: 'Machine Learning & Deep Learning', level: 'Advanced', experience: 'Model Design & Ensembles' },
      { name: 'LLMs & Generative AI', level: 'Advanced', experience: 'Reasoning & Multi-Modal' },
      { name: 'Computer Vision Pipelines', level: 'Advanced', experience: 'Segmentation & Detection' },
      { name: 'Autonomous Agentic Systems', level: 'Advanced', experience: 'Tool Calling & Context' },
      { name: 'Data Analytics & Statistics', level: 'Advanced', experience: 'EDA & Hypothesis Testing' },
      { name: 'Reinforcement Learning', level: 'Proficient', experience: 'PPO, Trading Agents' }
    ]
  },
  {
    title: 'Web & Full-Stack Development',
    description: 'Modern reactive interfaces, API architectures, and accessible UI/UX design',
    skills: [
      { name: 'React', level: 'Proficient', experience: 'SPA & Component Arch' },
      { name: 'Full-Stack Web Development', level: 'Proficient', experience: 'APIs, Auth & Databases' },
      { name: 'UI / UX Design', level: 'Proficient', experience: 'Design Systems & Wireframes' },
      { name: 'Tailwind CSS', level: 'Proficient', experience: 'Responsive Layouts' }
    ]
  },
  {
    title: 'Tools, Practices & Leadership',
    description: 'Hardware/IoT prototyping, version control, and rapid hackathon team delivery',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', experience: 'Version Control & OSS' },
      { name: 'Data Structures & Algorithms', level: 'Advanced', experience: 'Problem Solving' },
      { name: 'Rapid MVP Prototyping', level: 'Advanced', experience: 'Hackathon Sprints' },
      { name: 'Hardware / IoT (ESP32)', level: 'Proficient', experience: 'Edge POS & Sensors' },
      { name: 'Hackathon Sprint Leadership', level: 'Leader', experience: 'Smart India & Google Synapse' },
      { name: 'Cross-Discipline Team Lead', level: 'Leader', experience: 'Collaborative Delivery' }
    ]
  }
];

export const AUDIT_CHECKLIST_DATA = [
  {
    category: '1. Responsive Design & Mobile UX',
    items: [
      { id: 'overflow', title: 'Zero horizontal scroll & mobile overflow mitigation', status: 'Passed', detail: 'Strict overflow-x-hidden on body/html, flexible responsive containers with fluid typography.' },
      { id: 'mobile-optimized', title: 'Every page & component mobile-optimized', status: 'Passed', detail: 'Tested at <640px, 768px, 1024px, and 1440px desktop baseline with touch-friendly padding.' },
      { id: 'mobile-menu', title: 'Functional, accessible responsive mobile menu', status: 'Passed', detail: 'Slide-out drawer with ESC key support, backdrop blur, focus trap, and touch dismissal.' },
      { id: 'sticky-header', title: 'Sticky header & smooth Back to Top button', status: 'Passed', detail: 'Top bar adheres to 15% mobile sticky cap with backdrop blur; Back to Top appears after 300px scroll.' }
    ]
  },
  {
    category: '2. Interactive Elements & Communication',
    items: [
      { id: 'logo-click', title: 'Clickable brand logo linking to homepage', status: 'Passed', detail: 'Clean SVG brand mark and wordmark resets page state and scrolls smoothly to top.' },
      { id: 'click-comms', title: 'Clickable tel: and mailto: communication links', status: 'Passed', detail: 'Direct mailto:shettysavar14@gmail.com and clickable tel:+917887472637 link with copy support.' },
      { id: 'button-links', title: 'Zero dead clicks or broken links', status: 'Passed', detail: 'Every button, link, filter tab, and social anchor is wired to a real handler or verified destination.' },
      { id: 'form-validation', title: 'Accessible validation & toast notifications', status: 'Passed', detail: 'Real-time client-side validation with ARIA feedback, field error messages, and success toasts.' },
      { id: 'focus-states', title: 'Visible keyboard focus rings (WCAG AA)', status: 'Passed', detail: 'Consistent focus-visible rings (2px blue offset) across all interactive elements.' }
    ]
  },
  {
    category: '3. SEO & Branding',
    items: [
      { id: 'meta-titles', title: 'Branded title & concise 150-char meta description', status: 'Passed', detail: 'Configured in index.html with Savar Shetty AI/ML Engineer profile.' },
      { id: 'og-tags', title: 'Open Graph & Twitter social card tags', status: 'Passed', detail: 'Rich social cards configured with verified preview graphics and profile metadata.' },
      { id: 'favicon', title: 'Modern SVG favicon & Apple Touch icon', status: 'Passed', detail: 'High-contrast dual-tone SVG icon embedded for crisp rendering across all DPR displays.' },
      { id: 'sitemap-robots', title: 'XML sitemap & standard robots.txt', status: 'Passed', detail: 'Generated in /public directory with priority and change-frequency declarations.' },
      { id: 'clean-content', title: 'Zero placeholder text or dummy lorems', status: 'Passed', detail: '100% matched to Savar Shetty\'s actual resume: A.R.G.U.S., MMA, V.A.L.I.D, Stock Trading Bot, MeshRoute Ops, HostelEase.' }
    ]
  },
  {
    category: '4. Speed & Performance Optimization',
    items: [
      { id: 'lazy-loading', title: 'loading="lazy" & WebP/JPG asset optimization', status: 'Passed', detail: 'Lazy loading enabled for below-the-fold media with zero-broken-image styled fallback containers.' },
      { id: 'clean-bundle', title: 'Clean modern CSS and zero bloat', status: 'Passed', detail: 'Tailwind CSS v4 with tree-shaking, lightweight Lucide icons, and zero heavy dependencies.' }
    ]
  },
  {
    category: '5. Security, Legal & Utility',
    items: [
      { id: 'custom-404', title: 'Custom 404 error page / fallback route', status: 'Passed', detail: 'Interactive 404 recovery view with quick navigation back to home sections.' },
      { id: 'dynamic-year', title: 'Dynamically updating copyright year in JS', status: 'Passed', detail: 'Rendered via new Date().getFullYear() in the footer.' },
      { id: 'legal-pages', title: 'Privacy Policy & Terms of Service modals', status: 'Passed', detail: 'Full legal disclosures available via modal overlays with print and read capability.' },
      { id: 'ssl-ready', title: 'HTTPS & secure header compliance', status: 'Passed', detail: 'Served via secure HTTPS with no mixed content and referrerPolicy="no-referrer".' }
    ]
  }
];
