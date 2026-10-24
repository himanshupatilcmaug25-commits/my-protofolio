// ─── Projects Data ──────────────────────────────────────────────────────────
export const projects = [
  {
    id: "krishisetu",
    title: "KrishiSetu",
    subtitle: "Farm Machinery & Labour Rental Platform",
    techStack: ["Spring Boot", "C# (.NET)", "React.js", "MySQL"],
    github: "https://github.com/himanshupatilcmaug25-commits/KrishiSetu.git",
    liveDemo: null, // replace with actual URL
    screenshot: null, // replace with /assets/krishisetu-screenshot.png
    featured: true,
    description:
      "Full-stack platform connecting 4 user roles — Admin, Farmer, Machinery Owner and Farm Worker — for farm machinery rental and labour hiring, with role-based access control and admin verification.",
    highlights: [
      "Full-stack platform connecting 4 user roles (Admin, Farmer, Machinery Owner, Farm Worker) for farm machinery rental and labour hiring, with role-based access control and admin verification.",
      "10+ REST API endpoints in Spring Boot and C# ASP.NET for bookings, availability management, earnings tracking and authentication.",
      "Normalized MySQL schema with referential integrity across user, machinery, booking and payment tables; optimized queries.",
      "React frontend with component-based architecture, form state management, REST API integration and multi-language support.",
      "Integrated payment system and availability scheduling module.",
    ],
    tags: ["Full Stack", "Spring Boot", "React.js", "MySQL", "REST API"],
  },
  {
    id: "travel-planner",
    title: "Travel Planner",
    subtitle: "Trip & Itinerary Management App",
    techStack: ["Node.js", "React.js", "MySQL"],
    github: "https://github.com/himanshupatilcmaug25-commits/KrishiSetu.git",
    liveDemo: null,
    screenshot: null,
    featured: true,
    description:
      "Full-stack trip and itinerary management app with Node.js REST backend and React frontend, featuring CRUD operations, role-based authentication and an Admin dashboard.",
    highlights: [
      "Full-stack trip and itinerary management app with Node.js REST backend and React frontend.",
      "CRUD operations, role-based authentication (Admin/User) and an Admin dashboard.",
      "Relational MySQL schema with optimized SQL queries.",
      "Followed full lifecycle: requirements, API design, frontend integration, testing, debugging.",
    ],
    tags: ["Full Stack", "Node.js", "React.js", "MySQL"],
  },
];

// Experience & Achievements
export const timeline = [
  {
    id: "mumbai-metro",
    type: "experience",
    title: "Trainee",
    org: "Mumbai Metro Rail Corporation",
    period: "May 2023 – Jun 2023",
    location: "Mumbai",
    icon: "train",
    points: [
      "Studied 25kV traction power flow systems used in metro rail infrastructure.",
      "Surveyed Colaba-Bandra-SEEPZ Metro Line-III active construction sites.",
    ],
  },
  {
    id: "aero-fcrit",
    type: "achievement",
    title: "Core Member",
    org: "Aero FCRIT Club",
    period: "Jul 2022 – Jun 2023",
    location: "FCRIT, Vashi",
    icon: "drone",
    points: [
      "AIR-1 at SAEINDIA Automated Drone Development Challenge, Chennai — led electrical propulsion design.",
      "AIR-6 at Drone Development Challenge.",
      "3rd Rank in inter-college Technical Presentation.",
    ],
    highlight: "AIR-1 National",
  },
  {
    id: "eesa",
    type: "experience",
    title: "Program Coordinator",
    org: "EESA Council",
    period: "Jul 2022 – May 2023",
    location: "FCRIT, Vashi",
    icon: "council",
    points: [
      "Organized technical seminars and workshops for the Electrical Engineering student community.",
      "Led the documentation team for council activities and event records.",
    ],
  },
];
