// ─── Courses & Certifications Data ──────────────────────────────────────────

export const certifications = [
  {
    id: "pgdac-cert",
    title: "PG Diploma in Advanced Computing",
    issuer: "Centre for Development of Advanced Computing (C-DAC)",
    date: "February 2026",
    credentialId: "B374798",
    image: "/assets/pg-dac-certificate.jpg", // replace with actual image
    downloadUrl: "/assets/pg-dac-certificate.jpg",
    tags: ["PG-DAC", "C-DAC", "Full Stack", "Java"],
    featured: true,
  },
  // ─── Add more certifications here ───
  // {
  //   id: "oracle-java",
  //   title: "Oracle Certified Associate – Java SE",
  //   issuer: "Oracle",
  //   date: "2026",
  //   credentialId: "",
  //   image: null,
  //   downloadUrl: null,
  //   tags: ["Java", "Oracle"],
  //   featured: false,
  // },
];

export const pgdacModules = [
  {
    id: "cpp",
    title: "C++ Programming",
    icon: "cpp",
    description: "Foundations of procedural and object-oriented programming in C++.",
    topics: ["Pointers & Memory", "Classes & Inheritance", "Templates", "STL"],
    filterTags: ["Foundations"],
  },
  {
    id: "dbt",
    title: "Database Technologies",
    icon: "database",
    description: "Relational database design, SQL, PL/SQL and query optimization.",
    topics: ["MySQL", "PL/SQL", "Schema Design", "CRUD", "Query Optimization"],
    filterTags: ["Database"],
  },
  {
    id: "wbjp",
    title: "Web-based Java Programming",
    icon: "java",
    description: "Server-side Java: Servlets, JSP, JDBC, and Spring Boot fundamentals.",
    topics: ["Servlets", "JSP", "JDBC", "Spring Boot", "Hibernate"],
    filterTags: ["Java", "Web"],
  },
  {
    id: "wpt",
    title: "Web Programming Technologies",
    icon: "web",
    description: "Modern frontend development with HTML5, CSS3, JavaScript and React.js.",
    topics: ["HTML5", "CSS3", "JavaScript", "React.js", "REST API Integration"],
    filterTags: ["Web"],
  },
  {
    id: "ads",
    title: "Algorithms & Data Structures",
    icon: "algo",
    description: "Core CS fundamentals: sorting, searching, trees, graphs — implemented in Java.",
    topics: ["Arrays", "Linked Lists", "Trees", "Graphs", "Sorting", "Searching"],
    filterTags: ["Java", "Foundations"],
  },
  {
    id: "oop",
    title: "OOP with Java",
    icon: "oop",
    description: "Deep dive into OOP principles — encapsulation, inheritance, polymorphism, abstraction.",
    topics: ["OOP Principles", "SOLID", "Design Patterns", "Java Collections", "Exception Handling"],
    filterTags: ["Java"],
  },
  {
    id: "dotnet",
    title: "Microsoft .NET Technologies",
    icon: "dotnet",
    description: "Building web APIs and applications with C# and ASP.NET Core.",
    topics: ["C#", "ASP.NET Core", "MVC", "Web API", "Entity Framework"],
    filterTags: [".NET"],
  },
  {
    id: "os-sdm",
    title: "OS & Software Dev Methodologies",
    icon: "os",
    description: "Operating systems concepts and software development life cycle methodologies.",
    topics: ["Processes & Threads", "Memory Management", "Agile", "SDLC", "Git"],
    filterTags: ["Foundations"],
  },
  {
    id: "project",
    title: "Project (Capstone: KrishiSetu)",
    icon: "project",
    description: "End-to-end capstone project — KrishiSetu, a full-stack farm machinery rental platform.",
    topics: ["System Design", "Spring Boot", "React.js", "MySQL", "Team Collaboration"],
    filterTags: ["Java", "Web", "Database"],
  },
  {
    id: "aptitude",
    title: "General Aptitude & Communication",
    icon: "aptitude",
    description: "Quantitative aptitude, verbal reasoning and professional communication skills.",
    topics: ["Quantitative Reasoning", "Verbal Ability", "Technical Writing", "Presentations"],
    filterTags: ["Foundations"],
  },
];

export const moduleFilterTags = ["All", "Java", "Web", "Database", ".NET", "Foundations"];
