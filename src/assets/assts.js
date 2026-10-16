
export const about = {
  name: "Muskan Tomar",
  role: "Full Stack Developer",
  experience: "5 Years",
  tagline: "Building scalable applications with clean, maintainable code.",
  description:
    "Full Stack Developer with 5 years of experience building production-ready web applications using React.js, TypeScript, Node.js, and modern backend technologies. Experienced in REST API development, database optimization, cloud services, CI/CD pipelines, and designing modular, scalable solutions. Passionate about solving real-world problems and delivering reliable software.",
  location: "India",
  email: "your-email@example.com",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/muskan205",
    linkedin: "https://linkedin.com/in/your-profile",
  },
};

export const skills = [
  {
    title: "Languages",
    skills: ["JavaScript ES6+", "TypeScript"],
  },
  {
    title: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Material UI",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST API Development",
      "GraphQL",
      "Webhooks",
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
    ],
  },
  {
    title: "Cloud & AWS",
    skills: [
      "Amazon S3",
      "Amazon SNS",
      "Amazon SQS",
      "Amazon Cognito",
    ],
  },
  {
    title: "DevOps & Testing",
    skills: [
      "Azure DevOps",
      "Docker",
      "CI/CD Pipelines",
      "Jest",
      "Postman",
      "Git",
      "GitHub",
      "Bitbucket",
    ],
  },
  {
    title: "Architecture & Practices",
    skills: [
      "System Design",
      "Database Schema Design",
      "API Integration",
      "Query Optimization",
      "Test Automation",
      "Module Architecture",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "ClearAssure",
    category: "Enterprise Compliance Platform",
    description:
      "A secure compliance and assurance platform for managing regulatory queries, sensitive documents, governance workflows, and collaboration between clients, Data Protection Officers, and administrators.",
    responsibilities: [
      "Developed production-ready frontend features using React.js and TypeScript.",
      "Built backend functionality using Node.js and NestJS.",
      "Integrated PostgreSQL and MySQL and optimized database queries.",
      "Designed modular solutions in collaboration with business analysts and product owners.",
      "Worked on CI/CD pipelines and release automation using Azure DevOps.",
      "Integrated REST APIs, SendGrid email functionality, and enterprise system connectivity.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "AWS Cognito",
      "Azure DevOps",
      "SendGrid",
    ],
    role: "Senior Developer",
    featured: true,
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Jooper.ai",
    category: "Email Campaign Management",
    description:
      "An intelligent cold email campaign management and scheduling platform that supports personalized outreach, campaign tracking, email sequencing, dynamic templates, and engagement analytics.",
    responsibilities: [
      "Developed and maintained backend features for campaign management.",
      "Worked with Node.js, Next.js, and relational databases.",
      "Integrated REST APIs and optimized database queries.",
      "Contributed to CI/CD pipelines and deployment automation.",
      "Worked on email communication and integrations with external services.",
    ],
    technologies: [
      "Node.js",
      "Next.js",
      "React.js",
      "PostgreSQL",
      "Prisma",
      "AWS Cognito",
      "SendGrid",
      "Azure DevOps",
    ],
    role: "Backend Developer",
    featured: true,
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "MRV Creation",
    category: "Music Rights & Revenue Management",
    description:
      "A platform for organizing music rights, artist and publishing information, and ownership data while streamlining workflows for transparent revenue and royalty management.",
    responsibilities: [
      "Integrated AWS services for secure file storage and scalability.",
      "Developed modular and responsive React.js interfaces.",
      "Dockerized the application for consistent development environments.",
      "Collaborated with backend developers on API integration and testing.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "MySQL",
      "Prisma",
      "Docker",
      "AWS S3",
      "GitHub",
    ],
    role: "Senior Backend Developer",
    featured: true,
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 4,
    title: "Template Editor",
    category: "Frontend Application",
    description:
      "A dynamic template editing application featuring real-time previews, rich text editing, customizable placeholders, and reusable components.",
    responsibilities: [
      "Developed responsive and reusable React.js components.",
      "Implemented real-time preview and rich text editing features.",
      "Built customizable placeholders for reusable templates.",
      "Integrated REST APIs and improved frontend maintainability.",
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "CSS3"],
    role: "Senior Frontend Developer",
    featured: true,
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: 5,
    title: "Reserve Study",
    category: "Frontend Application",
    description:
      "A frontend application focused on reusable user interfaces and efficient workflows for reserve study reporting.",
    responsibilities: [
      "Developed responsive interfaces using React.js.",
      "Built reusable frontend components.",
      "Integrated REST APIs with backend services.",
      "Improved usability and responsive layouts.",
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "CSS3"],
    role: "Senior Frontend Developer",
    featured: false,
    githubUrl: "",
    liveUrl: "",
  },
];

export const workExperience = [
  {
    id: 1,
    company: "Golden Eagle IT Technologies",
    role: "Backend Developer",
    employmentType: "Full-time",
    startDate: "",
    endDate: "",
    current: true,
    description:
      "Working on backend development, API integrations, email systems, and scalable application services.",
    responsibilities: [
      "Develop and maintain backend services using Node.js and Express.js.",
      "Build and integrate REST APIs and database operations.",
      "Work with PostgreSQL, MongoDB, Prisma, and Mongoose.",
      "Implement email campaign processing, scheduling, and inbox synchronization.",
      "Work with Docker, GitLab, and deployment workflows.",
      "Optimize queries and troubleshoot application issues.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Docker",
      "GitLab CI/CD",
    ],
  },
];

export const education = [];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const contact = {
  heading: "Let's Build Something Great",
  description:
    "I'm interested in building scalable applications, solving challenging engineering problems, and collaborating on meaningful projects.",
  email: about.email,
  socialLinks: about.socialLinks,
};
