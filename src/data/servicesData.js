export const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "End-to-end web application development using modern technologies and best practices.",
    icon: "web-development",
    features: [
      "Custom web application development",
      "Responsive frontend interfaces",
      "Scalable backend architecture",
      "Database design and optimization",
      "API development and integration",
      "Performance optimization"
    ],
    technologies: [
      "Vue.js", "React", "JavaScript", "TypeScript",
      "Django", "Node.js", "Express", "Laravel",
      "PostgreSQL", "MySQL", "MongoDB", "Redis"
    ],
    startingPrice: 2500,
    deliveryTime: "2-8 weeks",
    category: "Development",
    popular: true,
    examples: [
      "E-commerce platforms",
      "Content management systems",
      "Business dashboards",
      "Social networking platforms"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
    icon: "mobile-development",
    features: [
      "Cross-platform development",
      "Native performance",
      "Custom UI/UX design",
      "Firebase integration",
      "Push notifications",
      "App store deployment"
    ],
    technologies: [
      "Flutter", "Dart", "Firebase",
      "SQLite", "REST APIs", "WebSockets"
    ],
    startingPrice: 3000,
    deliveryTime: "3-10 weeks",
    category: "Development",
    popular: true,
    examples: [
      "Business productivity apps",
      "Social media applications",
      "E-commerce mobile apps",
      "Real-time chat applications"
    ]
  },
  {
    id: 3,
    title: "API Development & Integration",
    description: "Robust RESTful APIs and seamless third-party service integrations.",
    icon: "api-development",
    features: [
      "RESTful API design",
      "Authentication & security",
      "Documentation (OpenAPI/Swagger)",
      "Rate limiting & caching",
      "Third-party integrations",
      "Microservices architecture"
    ],
    technologies: [
      "Django REST Framework", "Express.js", "FastAPI",
      "JWT", "OAuth 2.0", "Swagger", "Postman"
    ],
    startingPrice: 1500,
    deliveryTime: "1-4 weeks",
    category: "Backend",
    popular: false,
    examples: [
      "Payment gateway integration",
      "Social media API connections",
      "CRM system integrations",
      "Data synchronization services"
    ]
  },
  {
    id: 4,
    title: "Database Design & Optimization",
    description: "Efficient database architecture and performance optimization for scalable applications.",
    icon: "database",
    features: [
      "Database schema design",
      "Query optimization",
      "Indexing strategies",
      "Data migration",
      "Backup & recovery",
      "Performance monitoring"
    ],
    technologies: [
      "PostgreSQL", "MySQL", "MongoDB",
      "Redis", "Elasticsearch", "Database Indexing"
    ],
    startingPrice: 1000,
    deliveryTime: "1-3 weeks",
    category: "Backend",
    popular: false,
    examples: [
      "E-commerce product catalogs",
      "User management systems",
      "Analytics data warehouses",
      "Content management databases"
    ]
  },
  {
    id: 5,
    title: "DevOps & Deployment",
    description: "Complete CI/CD pipeline setup and cloud deployment solutions.",
    icon: "devops",
    features: [
      "CI/CD pipeline setup",
      "Docker containerization",
      "Cloud deployment (AWS, Digital Ocean)",
      "Domain & SSL configuration",
      "Monitoring & logging",
      "Automated testing"
    ],
    technologies: [
      "Docker", "GitHub Actions", "AWS", "Nginx",
      "Let's Encrypt", "Monitoring Tools"
    ],
    startingPrice: 800,
    deliveryTime: "1-2 weeks",
    category: "Infrastructure",
    popular: false,
    examples: [
      "Automated deployment workflows",
      "Scalable cloud architecture",
      "Performance monitoring setup",
      "Security hardening"
    ]
  },
  {
    id: 6,
    title: "Code Review & Consultation",
    description: "Expert code review and technical consultation to improve your existing projects.",
    icon: "consultation",
    features: [
      "Comprehensive code review",
      "Architecture assessment",
      "Performance analysis",
      "Security audit",
      "Best practices recommendations",
      "Technical documentation"
    ],
    technologies: [
      "All major web technologies",
      "Code quality tools",
      "Security analysis tools"
    ],
    startingPrice: 150,
    deliveryTime: "3-7 days",
    category: "Consultation",
    popular: false,
    examples: [
      "Legacy code modernization",
      "Performance bottleneck identification",
      "Security vulnerability assessment",
      "Architecture improvement recommendations"
    ]
  }
]

export const packages = [
  {
    id: 1,
    name: "Starter Package",
    description: "Perfect for small businesses and startups looking to establish their online presence.",
    price: 2500,
    duration: "2-4 weeks",
    features: [
      "Responsive website (5-8 pages)",
      "Content Management System",
      "Contact forms & basic SEO",
      "Mobile-first design",
      "Basic hosting setup",
      "3 rounds of revisions",
      "30 days support"
    ],
    technologies: ["Vue.js", "Tailwind CSS", "Node.js"],
    suitable: ["Small businesses", "Personal websites", "Portfolio sites"],
    popular: false
  },
  {
    id: 2,
    name: "Professional Package",
    description: "Comprehensive solution for growing businesses with advanced features and integrations.",
    price: 5500,
    duration: "4-8 weeks",
    features: [
      "Custom web application",
      "Database integration",
      "User authentication system",
      "Admin dashboard",
      "API development",
      "Payment integration",
      "SEO optimization",
      "Performance optimization",
      "90 days support"
    ],
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis"],
    suitable: ["Growing businesses", "E-commerce sites", "SaaS platforms"],
    popular: true
  },
  {
    id: 3,
    name: "Enterprise Package",
    description: "Full-scale solution with advanced architecture, security, and scalability features.",
    price: 12000,
    duration: "8-16 weeks",
    features: [
      "Complex web application",
      "Microservices architecture",
      "Advanced security features",
      "Third-party integrations",
      "Mobile app (iOS & Android)",
      "CI/CD pipeline setup",
      "Cloud deployment",
      "Load balancing & scaling",
      "Advanced analytics",
      "6 months support"
    ],
    technologies: ["Vue.js", "Django", "Flutter", "AWS", "Docker"],
    suitable: ["Large enterprises", "Complex platforms", "Multi-user systems"],
    popular: false
  }
]

export const process = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements.",
    duration: "1-2 days",
    deliverables: [
      "Project scope document",
      "Technical architecture plan",
      "Timeline and milestones",
      "Cost breakdown"
    ]
  },
  {
    step: 2,
    title: "Design & Wireframing",
    description: "Creating user-friendly designs and wireframes that align with your brand and objectives.",
    duration: "3-5 days",
    deliverables: [
      "UI/UX wireframes",
      "Design mockups",
      "User flow diagrams",
      "Style guide"
    ]
  },
  {
    step: 3,
    title: "Development",
    description: "Building your application using modern technologies with clean, maintainable code.",
    duration: "2-12 weeks",
    deliverables: [
      "Frontend development",
      "Backend development",
      "Database setup",
      "API integration"
    ]
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing to ensure your application works flawlessly across all devices.",
    duration: "3-7 days",
    deliverables: [
      "Functionality testing",
      "Performance optimization",
      "Security testing",
      "Cross-browser compatibility"
    ]
  },
  {
    step: 5,
    title: "Deployment & Launch",
    description: "Deploying your application to production with proper monitoring and backup systems.",
    duration: "1-3 days",
    deliverables: [
      "Production deployment",
      "Domain & SSL setup",
      "Monitoring configuration",
      "Documentation"
    ]
  },
  {
    step: 6,
    title: "Support & Maintenance",
    description: "Ongoing support to ensure your application continues to perform optimally.",
    duration: "Ongoing",
    deliverables: [
      "Bug fixes",
      "Performance monitoring",
      "Security updates",
      "Feature enhancements"
    ]
  }
]

export const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web and mobile development technologies including Vue.js, React, Django, Node.js, Flutter, and various databases like PostgreSQL and MongoDB. I stay updated with the latest industry trends and best practices."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks. I provide detailed timelines during the planning phase and keep you updated throughout the development process."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I offer different levels of post-launch support ranging from 30 days to 6 months depending on the package. This includes bug fixes, minor updates, and technical assistance. Extended support packages are also available."
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Absolutely! I can work with existing projects, whether it's adding new features, optimizing performance, fixing bugs, or modernizing legacy code. I start with a thorough code review to understand the current state."
  },
  {
    question: "Do you handle deployment and hosting?",
    answer: "Yes, I can handle the complete deployment process including cloud setup, domain configuration, SSL certificates, and CI/CD pipelines. I work with various platforms like AWS, Digital Ocean, and Vercel."
  },
  {
    question: "What is your communication style during projects?",
    answer: "I believe in transparent communication. I provide regular updates through your preferred channels (Slack, email, or project management tools), conduct weekly progress calls, and am available for questions throughout the project."
  },
  {
    question: "Do you sign NDAs and contracts?",
    answer: "Yes, I'm happy to sign NDAs and work contracts to protect your intellectual property and establish clear project terms. I believe in professional, secure working relationships."
  },
  {
    question: "Can you help with technical consulting only?",
    answer: "Definitely! I offer technical consulting services including code reviews, architecture assessments, performance audits, and technology recommendations. This is perfect if you have an internal team but need expert guidance."
  }
]