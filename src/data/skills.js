// ─── Skills Data ────────────────────────────────────────────────────────────
// level: "core" | "familiar"
// category: used for filter tabs

export const skillCategories = [
  "All",
  "Languages",
  "Backend",
  "Frontend",
  "Database",
  "Security & DevOps",
  "Tools",
  "Concepts",
];

export const skills = [
  // Languages
  { name: "Java", category: "Languages", level: "core", icon: "java" },
  { name: "JavaScript", category: "Languages", level: "core", icon: "js" },
  { name: "C#", category: "Languages", level: "familiar", icon: "csharp" },
  { name: "Python", category: "Languages", level: "familiar", icon: "python" },
  { name: "C", category: "Languages", level: "familiar", icon: "c" },
  { name: "C++", category: "Languages", level: "familiar", icon: "cpp" },

  // Backend
  { name: "Spring Boot", category: "Backend", level: "core", icon: "spring" },
  { name: "REST APIs", category: "Backend", level: "core", icon: "api" },
  { name: "Hibernate", category: "Backend", level: "core", icon: "hibernate" },
  { name: "Microservices", category: "Backend", level: "familiar", icon: "micro" },
  { name: "ASP.NET (C#)", category: "Backend", level: "familiar", icon: "dotnet" },
  { name: "JDBC", category: "Backend", level: "familiar", icon: "db" },
  { name: "MVC Architecture", category: "Backend", level: "core", icon: "mvc" },

  // Frontend
  { name: "React.js", category: "Frontend", level: "core", icon: "react" },
  { name: "HTML5", category: "Frontend", level: "core", icon: "html" },
  { name: "CSS3", category: "Frontend", level: "core", icon: "css" },
  { name: "JSX", category: "Frontend", level: "core", icon: "jsx" },
  { name: "Component-based UI", category: "Frontend", level: "core", icon: "component" },

  // Database
  { name: "MySQL", category: "Database", level: "core", icon: "mysql" },
  { name: "PL/SQL", category: "Database", level: "familiar", icon: "plsql" },
  { name: "Schema Design", category: "Database", level: "core", icon: "schema" },
  { name: "Query Optimization", category: "Database", level: "familiar", icon: "query" },

  // Security & DevOps
  { name: "JWT", category: "Security & DevOps", level: "familiar", icon: "jwt" },
  { name: "Docker", category: "Security & DevOps", level: "familiar", icon: "docker" },
  { name: "Kubernetes", category: "Security & DevOps", level: "familiar", icon: "k8s" },
  { name: "Kafka", category: "Security & DevOps", level: "familiar", icon: "kafka" },
  { name: "Git", category: "Security & DevOps", level: "core", icon: "git" },
  { name: "GitHub", category: "Security & DevOps", level: "core", icon: "github" },

  // Tools
  { name: "Postman", category: "Tools", level: "core", icon: "postman" },
  { name: "Swagger", category: "Tools", level: "familiar", icon: "swagger" },
  { name: "VS Code", category: "Tools", level: "core", icon: "vscode" },
  { name: "STS4", category: "Tools", level: "core", icon: "spring" },
  { name: "Browser DevTools", category: "Tools", level: "core", icon: "devtools" },
  { name: "GitHub Copilot", category: "Tools", level: "familiar", icon: "copilot" },
  { name: "Cursor AI", category: "Tools", level: "familiar", icon: "cursor" },
  { name: "ChatGPT", category: "Tools", level: "familiar", icon: "openai" },
  { name: "Claude", category: "Tools", level: "familiar", icon: "claude" },
  { name: "Gemini", category: "Tools", level: "familiar", icon: "gemini" },

  // Concepts
  { name: "OOP", category: "Concepts", level: "core", icon: "oop" },
  { name: "SOLID", category: "Concepts", level: "core", icon: "solid" },
  { name: "MVC", category: "Concepts", level: "core", icon: "mvc" },
  { name: "REST", category: "Concepts", level: "core", icon: "rest" },
  { name: "Agile", category: "Concepts", level: "familiar", icon: "agile" },
  { name: "Debugging", category: "Concepts", level: "core", icon: "debug" },
  { name: "Code Review", category: "Concepts", level: "familiar", icon: "review" },
];

// Stack flow diagram nodes
export const stackFlow = [
  {
    id: "react",
    label: "React.js",
    layer: "Frontend",
    projects: ["KrishiSetu", "Travel Planner"],
    color: "#61DAFB",
  },
  {
    id: "api",
    label: "REST API",
    layer: "Integration",
    projects: ["KrishiSetu", "Travel Planner"],
    color: "#F2B84B",
  },
  {
    id: "spring",
    label: "Spring Boot",
    layer: "Backend",
    projects: ["KrishiSetu"],
    color: "#6DB33F",
  },
  {
    id: "mysql",
    label: "MySQL",
    layer: "Database",
    projects: ["KrishiSetu", "Travel Planner"],
    color: "#4479A1",
  },
];
