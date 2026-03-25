const courses = [
    // DEVELOPMENT
    {
        id: 1,
        title: "React Fullstack",
        slug: "react-fullstack",
        category: "Development",
        description: "Master React.js for the frontend and power it with Node.js and Express for complete full-stack web applications.",
        img: "/courses/reactNative.webp",
        rating: "4.8",
        students: "1500",
        locked: true,
        aboutData: {
            topic: "Master React & Fullstack Development",
            content1: "Learn to build modern, responsive web applications using React.js and robust backend technologies.",
            content2: "This course covers everything from Hooks and Redux to Node.js, Express, and Database integration."
        },
        whatYouLearnData: [
            { title: "React Basics", desc: "Components, Hooks, Props, and State.", icon: "bi bi-code-square" },
            { title: "State Management", desc: "Redux Toolkit and Context API.", icon: "bi bi-diagram-3" },
            { title: "Backend with Node", desc: "Express.js for RESTful API development.", icon: "bi bi-server" },
            { title: "Database Integration", desc: "MongoDB with Mongoose for data storage.", icon: "bi bi-database" },
            { title: "Authentication", desc: "Secure login systems with JWT.", icon: "bi bi-shield-lock" },
            { title: "Deployment", desc: "Deploy your full-stack apps to the cloud.", icon: "bi bi-cloud-upload" }
        ],
        courseContentData: [
            { id: "r1", title: "Frontend Mastery", icon: "bi bi-window", defaultOpen: true, items: ["React Hooks", "Custom Hooks", "Redux Toolkit", "React Router"] },
            { id: "r2", title: "Backend & API", icon: "bi bi-cpu", items: ["Node.js Basics", "Express Middleware", "API Design", "Error Handling"] },
            { id: "r3", title: "Database & Auth", icon: "bi bi-shield-check", items: ["Mongoose Schemas", "JWT Auth", "Role Based Access", "File Uploads"] },
            { id: "r4", title: "Deployment", icon: "bi bi-rocket", items: ["Git Workflow", "Environment Variables", "Vercel/Heroku", "Testing"] }
        ],
        faqData: [
            { question: "Is this course for beginners?", answer: "Yes, we start with the fundamentals of JavaScript and then move to React and Node.js." },
            { question: "Will I build real projects?", answer: "Absolutely! You will build a social media app and an e-commerce platform." }
        ]
    },
    {
        id: 3,
        title: "JAVA Fullstack Development",
        slug: "java-fullstack-development",
        category: "Development",
        description: "Java Full Stack Development is the process of developing both front-end and back-end web applications using Java technologies.",
        img: "/courses/javaFullstack.webp",
        rating: "4.5",
        students: "9556",
        locked: true,
        aboutData: {
            topic: "Master Core Java to Build Strong Object-Oriented Programming Skills",
            content1: "Develop solid foundations in Java programming with hands-on experience. Learn OOP concepts, exception handling, multithreading, and collection frameworks used in enterprise applications.",
            content2: "The Core Java course at Urbancode prepares you for real-world software development with projects, tools, and strong programming discipline."
        },
        whatYouLearnData: [
            { title: "Master OOP Programming", desc: "Design scalable software using object-oriented principles.", icon: "bi bi-lightning-charge" },
            { title: "Develop Console Applications", desc: "Build functional applications using Core Java libraries.", icon: "bi bi-terminal" },
            { title: "Integrate Databases", desc: "Apply JDBC for real-time database operations.", icon: "bi bi-database" },
            { title: "Multithreading", desc: "Build high-performance concurrent applications.", icon: "bi bi-cpu" },
            { title: "Collection Framework", desc: "Master data structures like Lists, Sets, and Maps.", icon: "bi bi-layers" },
            { title: "Exception Handling", desc: "Write robust and error-free code.", icon: "bi bi-shield-check" }
        ],
        courseContentData: [
            { id: "java1", title: "Java Fundamentals", icon: "bi bi-code-slash", defaultOpen: true, items: ["Java environment setup", "Syntax and data types", "Control statements and operators", "Arrays and strings"] },
            { id: "java2", title: "Object-Oriented Programming", icon: "bi bi-box-seam", items: ["Classes and Objects", "Inheritance and Polymorphism", "Encapsulation and Abstraction", "Interfaces and Abstract Classes"] },
            { id: "java3", title: "Exception Handling & File I/O", icon: "bi bi-exclamation-triangle", items: ["Try-catch blocks", "Custom exceptions", "File reading and writing", "Serialization"] },
            { id: "java4", title: "Advanced Core Concepts", icon: "bi bi-gear-wide-connected", items: ["Multithreading", "Synchronization", "Collections Framework", "JDBC Connectivity"] },
            { id: "java5", title: "Java 8+ Features", icon: "bi bi-stars", items: ["Lambda Expressions", "Stream API", "Functional Interfaces", "Optional Class"] },
            { id: "java6", title: "Enterprise Java", icon: "bi bi-building", items: ["Spring Framework Basics", "Spring Boot Introduction", "RESTful Web Services", "Microservices Architecture"] }
        ],
        faqData: [
            { question: "What skills will I learn?", answer: "You'll master both frontend (HTML, CSS, JS, React) and backend (Java, Spring Boot, REST APIs)." },
            { question: "Is placement support provided?", answer: "Yes, we provide 100% placement support including mock interviews and resume optimization." }
        ]
    },
    {
        id: 4,
        title: "MERN Stack Development",
        slug: "mern-stack-development",
        category: "Development",
        description: "MERN Stack Development combines MongoDB, Express, React, and Node.js to build powerful full-stack web applications.",
        img: "/courses/mern.webp",
        rating: "4.9",
        students: "2000",
        locked: true,
        aboutData: {
            topic: "Become a Full Stack MERN Developer",
            content1: "Master the MERN stack to build dynamic, high-performance web applications.",
            content2: "From frontend with React to backend with Node.js and MongoDB, cover it all."
        },
        whatYouLearnData: [
            { title: "MongoDB", desc: "NoSQL database design and management.", icon: "bi bi-database" },
            { title: "Express.js", desc: "Backend web framework for Node.js.", icon: "bi bi-server" },
            { title: "React.js", desc: "Frontend library for user interfaces.", icon: "bi bi-code-square" },
            { title: "Node.js", desc: "JavaScript runtime for backend logic.", icon: "bi bi-hexagon" },
            { title: "REST APIs", desc: "Building and consuming APIs.", icon: "bi bi-link" },
            { title: "Authentication", desc: "JWT and secure login systems.", icon: "bi bi-shield-lock" }
        ],
        courseContentData: [
            { id: "mern1", title: "Frontend with React", icon: "bi bi-code-square", defaultOpen: true, items: ["React Basics", "Hooks", "Context API", "Component Lifecycle"] },
            { id: "mern2", title: "Backend with Node & Express", icon: "bi bi-server", items: ["Node Modules", "Express Routing", "Middleware", "Error Handling"] },
            { id: "mern3", title: "Database with MongoDB", icon: "bi bi-database", items: ["MongoDB Atlas Setup", "CRUD Operations", "Mongoose ORM", "Data Modeling"] },
            { id: "mern4", title: "Full Stack Integration & Deployment", icon: "bi bi-cloud-arrow-up", items: ["Authentication with JWT", "State Management", "Testing", "Cloud Deployment"] }
        ],
        faqData: [
            { question: "Why choose MERN stack?", answer: "It's a popular, JavaScript-based stack that allows you to build fast, scalable web apps." },
            { question: "Is deployment covered?", answer: "Yes, we teach you how to deploy to cloud platforms like Heroku, Vercel, or AWS." }
        ]
    },
    {
        id: 7,
        title: "MEAN Stack Development",
        slug: "mean-stack-development",
        category: "Development",
        description: "MEAN Stack Development uses MongoDB, Express, Angular, and Node.js to build modern, scalable web applications.",
        img: "/courses/mean.jpg",
        rating: "4.7",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Master the MEAN Stack",
            content1: "Build enterprise-grade applications using the power of Angular and Node.js.",
            content2: "Learn the full development lifecycle from database design to frontend architecture."
        },
        whatYouLearnData: [
            { title: "Angular", desc: "Advanced components and services.", icon: "bi bi-browser-edge" },
            { title: "TypeScript", desc: "Strongly typed JavaScript for better code.", icon: "bi bi-code-slash" },
            { title: "Node.js", desc: "Asynchronous backend logic.", icon: "bi bi-cpu" },
            { title: "Express", desc: "Efficient server-side routing.", icon: "bi bi-server" },
            { title: "MongoDB", desc: "Flexible NoSQL data storage.", icon: "bi bi-database" },
            { title: "RxJS", desc: "Reactive programming for Angular.", icon: "bi bi-infinity" }
        ],
        courseContentData: [
            { id: "mean1", title: "Angular Frontend", icon: "bi bi-browser-edge", defaultOpen: true, items: ["Modules & Components", "Directives & Pipes", "Services & DI", "Angular Router"] },
            { id: "mean2", title: "Backend with Node", icon: "bi bi-cpu", items: ["Node.js Core", "Express API", "Middleware", "Authentication"] },
            { id: "mean3", title: "Database & Integration", icon: "bi bi-database", items: ["Mongoose Schemas", "CRUD with Angular", "File Uploads", "Error Handling"] },
            { id: "mean4", title: "Testing & Deployment", icon: "bi bi-check-all", items: ["Jasmine/Karma Testing", "Dockerization", "Cloud Deployment", "Performance Tuning"] }
        ],
        faqData: [
            { question: "Is MEAN stack still popular?", answer: "Yes, especially in large corporations for enterprise applications." },
            { question: "Do I need to know TypeScript?", answer: "No, we teach TypeScript as part of the Angular module." }
        ]
    },
    {
        id: 8,
        title: "Python Fullstack Development",
        slug: "python-fullstack-development",
        category: "Development",
        description: "Python Fullstack Development leverages Python's simplicity with Django or Flask for the backend and modern frontend tools.",
        img: "/courses/python.jpg",
        rating: "4.8",
        students: "1800",
        locked: true,
        aboutData: {
            topic: "Build Powerful Apps with Python",
            content1: "Master Python programming and learn to build robust web applications using Django.",
            content2: "Combine Python backend with React or Angular frontend for a complete skillset."
        },
        whatYouLearnData: [
            { title: "Python Basics", desc: "Variables, Loops, Functions, OOP.", icon: "bi bi-code" },
            { title: "Django Framework", desc: "Rapid development with a clean design.", icon: "bi bi-lightning" },
            { title: "Database (PostgreSQL)", desc: "Relational database management.", icon: "bi bi-database" },
            { title: "REST with DRF", desc: "Django REST Framework for APIs.", icon: "bi bi-cloud-arrow-up" },
            { title: "Frontend Integration", desc: "Connecting Python backend with React.", icon: "bi bi-layout-text-window" },
            { title: "Deployment", desc: "Heroku, AWS, and Docker for Python.", icon: "bi bi-box-arrow-in-up" }
        ],
        courseContentData: [
            { id: "py1", title: "Python Programming", icon: "bi bi-code", defaultOpen: true, items: ["Fundamentals", "Data Structures", "OOP in Python", "Libraries"] },
            { id: "py2", title: "Django Backend", icon: "bi bi-lightning", items: ["Models & ORM", "Views & Templates", "Admin Interface", "Forms"] },
            { id: "py3", title: "API Development", icon: "bi bi-cloud", items: ["RESTful Principles", "DRF Setup", "Serializers", "Viewsets"] },
            { id: "py4", title: "Fullstack Project", icon: "bi bi-star", items: ["Frontend Setup", "JWT Auth", "Unit Testing", "Deployment"] }
        ],
        faqData: [
            { question: "Is Python good for beginners?", answer: "Yes, Python is often cited as the best language for beginners due to its simple syntax." },
            { question: "Are there jobs for Python developers?", answer: "Absolutely, Python is one of the most in-demand languages in the tech industry today." }
        ]
    },
    {
        id: 43,
        title: "Dot Net Fullstack Development",
        slug: "dotnet-fullstack-development",
        category: "Development",
        description: "Master .NET technologies to build robust and scalable enterprise-level applications using C#, ASP.NET Core, and SQL Server.",
        img: "/courses/dot.png",
        rating: "4.8",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Build Enterprise Apps with .NET",
            content1: "Learn the full ecosystem of .NET development, from backend logic with C# to frontend integration and database management.",
            content2: "This course focuses on modern .NET Core and .NET 6/7/8 frameworks used by top companies worldwide."
        },
        whatYouLearnData: [
            { title: "C# Programming", desc: "Master the core language of the .NET ecosystem.", icon: "bi bi-code-slash" },
            { title: "ASP.NET Core", desc: "Build high-performance web APIs and applications.", icon: "bi bi-globe" },
            { title: "Entity Framework", desc: "Master ORM for efficient database operations.", icon: "bi bi-database" },
            { title: "SQL Server", desc: "Learn to manage and query relational databases.", icon: "bi bi-server" },
            { title: "MVC & Razor", desc: "Build dynamic web UIs with the MVC pattern.", icon: "bi bi-layout-text-window" },
            { title: "Azure Integration", desc: "Deploy and manage .NET apps on the cloud.", icon: "bi bi-cloud-arrow-up" }
        ],
        courseContentData: [
            { id: "dn1", title: "C# Fundamentals", icon: "bi bi-code", defaultOpen: true, items: ["Data Types & Variables", "OOP Principles", "Collections & Generics", "LINQ Queries"] },
            { id: "dn2", title: "ASP.NET Core Web API", icon: "bi bi-cpu", items: ["Dependency Injection", "Middleware", "Routing & Controllers", "Authentication & Authorization"] },
            { id: "dn3", title: "Data Access with EF Core", icon: "bi bi-database", items: ["Code First Migrations", "Fluent API", "Repository Pattern", "Unit of Work"] },
            { id: "dn4", title: "Frontend & Deployment", icon: "bi bi-rocket", items: ["Razor Pages", "Blazor Basics", "Unit Testing with xUnit", "CI/CD with Azure DevOps"] }
        ],
        faqData: [
            { question: "Do I need to know C# before starting?", answer: "No, we start from the absolute basics of C# programming." },
            { question: "Is .NET Core still in demand?", answer: "Yes, it is the primary choice for enterprise-level applications in many top tech firms." }
        ]
    },

    // TESTING
    {
        id: 2,
        title: "Software Testing",
        slug: "software-testing",
        category: "Testing",
        description: "Software Testing is the process of evaluating software to identify defects and ensure it meets the required quality standards.",
        img: "/courses/softwareTesting.webp",
        rating: "4.7",
        students: "850",
        locked: true,
        aboutData: {
            topic: "Become a Quality Assurance Expert",
            content1: "Master manual and automation testing techniques to ensure software quality and reliability.",
            content2: "Learn industry-standard tools like Selenium, JIRA, and TestNG."
        },
        whatYouLearnData: [
            { title: "Manual Testing", desc: "Test cases, scenarios, and bug reporting.", icon: "bi bi-clipboard-check" },
            { title: "Automation Testing", desc: "Selenium WebDriver with Java/Python.", icon: "bi bi-robot" },
            { title: "API Testing", desc: "Postman and REST Assured.", icon: "bi bi-globe" },
            { title: "Performance Testing", desc: "JMeter basics.", icon: "bi bi-speedometer" },
            { title: "Test Management", desc: "JIRA and Agile methodologies.", icon: "bi bi-kanban" },
            { title: "CI/CD Integration", desc: "Jenkins and continuous testing.", icon: "bi bi-arrow-repeat" }
        ],
        courseContentData: [
            { id: "st1", title: "Manual Testing Basics", icon: "bi bi-clipboard-check", defaultOpen: true, items: ["SDLC & STLC", "Test Scenarios & Cases", "Defect Life Cycle", "Test Documentation"] },
            { id: "st2", title: "Automation with Selenium", icon: "bi bi-robot", items: ["WebDriver Setup", "Locators", "TestNG Framework", "Page Object Model"] },
            { id: "st3", title: "API & Performance Testing", icon: "bi bi-speedometer", items: ["Postman Basics", "REST Assured", "JMeter Introduction", "Load Testing"] },
            { id: "st4", title: "Advanced Topics", icon: "bi bi-star", items: ["CI/CD with Jenkins", "BDD with Cucumber", "Cross-Browser Testing", "Mobile Testing"] }
        ],
        faqData: [
            { question: "Do I need coding skills?", answer: "For manual testing, no. For automation, we will teach you Java/Python from scratch." },
            { question: "Which tools will I learn?", answer: "Selenium, JIRA, TestNG, Postman, and JMeter." }
        ]
    },
    {
        id: 35,
        title: "Manual Testing",
        slug: "manual-testing",
        category: "Testing",
        description: "Focus on the core concepts of manual software testing, bug reporting, and test case design without any coding.",
        img: "/courses/softwareTesting.webp",
        rating: "4.6",
        students: "600",
        locked: true,
        aboutData: {
            topic: "Foundations of Manual Testing",
            content1: "Learn how to find bugs effectively by understanding the software development lifecycle and testing methodologies.",
            content2: "Master the art of writing clear test cases and reporting defects in tools like JIRA."
        },
        whatYouLearnData: [
            { title: "SDLC & STLC", desc: "Development and Testing life cycles.", icon: "bi bi-arrow-repeat" },
            { title: "Test Planning", desc: "Creating test strategies and plans.", icon: "bi bi-file-earmark-text" },
            { title: "Bug Reporting", desc: "Writing effective bug reports in JIRA.", icon: "bi bi-bug" },
            { title: "Black Box Testing", desc: "Functional and non-functional testing.", icon: "bi bi-box" },
            { title: "Regression Testing", desc: "Ensuring changes don't break existing features.", icon: "bi bi-arrow-clockwise" },
            { title: "Agile Testing", desc: "Testing in Scrum and Kanban environments.", icon: "bi bi-kanban" }
        ],
        courseContentData: [
            { id: "mt1", title: "Testing Fundamentals", icon: "bi bi-info-circle", defaultOpen: true, items: ["What is Testing?", "Principles of Testing", "V-Model", "Testing Types"] },
            { id: "mt2", title: "Test Case Design", icon: "bi bi-pencil-square", items: ["Writing Test Cases", "Boundary Value Analysis", "Equivalence Partitioning", "Traceability Matrix"] },
            { id: "mt3", title: "Defect Management", icon: "bi bi-bug", items: ["Defect Lifecycle", "Priority vs Severity", "JIRA Walkthrough", "Root Cause Analysis"] },
            { id: "mt4", title: "Project Work", icon: "bi bi-star", items: ["Real-world Test Scenarios", "Exploratory Testing", "User Acceptance Testing", "Final Project"] }
        ],
        faqData: [
            { question: "Is this for non-technical people?", answer: "Yes, manual testing is the perfect entry point for anyone wanting to join the IT industry." },
            { question: "Do I need to learn to code?", answer: "No, this course is 100% focused on manual techniques and requires no coding." }
        ]
    },
    {
        id: 14,
        title: "Automation Testing",
        slug: "automation-testing",
        category: "Testing",
        description: "Master automation testing using Selenium WebDriver with Java to build powerful and reusable test frameworks.",
        img: "/courses/softwareTesting.webp",
        rating: "4.8",
        students: "950",
        locked: true,
        aboutData: {
            topic: "Build Automation Frameworks",
            content1: "Go beyond record-and-playback. Learn to write scripts that can test complex web applications automatically.",
            content2: "Master Selenium, TestNG, Maven, and Page Object Model for professional-grade automation."
        },
        whatYouLearnData: [
            { title: "Selenium WebDriver", desc: "Automating browser actions.", icon: "bi bi-robot" },
            { title: "Java for Testers", desc: "Essential Java for automation scripts.", icon: "bi bi-code-slash" },
            { title: "Framework Design", desc: "POM and Data Driven frameworks.", icon: "bi bi-diagram-3" },
            { title: "CI/CD Integration", desc: "Running tests in Jenkins pipelines.", icon: "bi bi-arrow-repeat" },
            { title: "Git & GitHub", desc: "Version control for test scripts.", icon: "bi bi-git" },
            { title: "Reporting", desc: "Generating Extent and Allure reports.", icon: "bi bi-file-bar-graph" }
        ],
        courseContentData: [
            { id: "at1", title: "Selenium Basics", icon: "bi bi-play", defaultOpen: true, items: ["WebDriver Setup", "Locators", "Handling Alerts", "Waits & Timeouts"] },
            { id: "at2", title: "Advanced Selenium", icon: "bi bi-gear", items: ["Action Class", "JavaScript Executor", "Iframe Handling", "Multiple Windows"] },
            { id: "at3", title: "TestNG & Maven", icon: "bi bi-boxes", items: ["TestNG Annotations", "Assertions", "Parallel Execution", "Maven POM.xml"] },
            { id: "at4", title: "Framework Building", icon: "bi bi-stars", items: ["Page Object Model", "Properties File", "Data Driven with Excel", "Jenkins Setup"] }
        ],
        faqData: [
            { question: "Will I learn Java?", answer: "Yes, we include a comprehensive module on Java specifically tailored for testers." },
            { question: "Is this course project-based?", answer: "Yes, you will build an end-to-end automation framework for an e-commerce site." }
        ]
    },
    {
        id: 15,
        title: "API Testing",
        slug: "api-testing",
        category: "Testing",
        description: "Learn to test the backbone of modern apps. Master RESTful API testing using Postman and REST Assured.",
        img: "/courses/mern.webp",
        rating: "4.7",
        students: "800",
        locked: true,
        aboutData: {
            topic: "Master REST API Testing",
            content1: "Learn how to validate backend services and data flows using industry-leading tools like Postman.",
            content2: "Master automation of API tests to ensure faster delivery and higher quality."
        },
        whatYouLearnData: [
            { title: "Postman Basics", desc: "Manual API testing and Collections.", icon: "bi bi-collection" },
            { title: "HTTP Methods", desc: "GET, POST, PUT, DELETE mastery.", icon: "bi bi-globe" },
            { title: "Automation", desc: "Writing tests in Postman with JS.", icon: "bi bi-code" },
            { title: "Environment Vars", desc: "Managing dynamic data.", icon: "bi bi-gear" },
            { title: "Newman", desc: "Running tests in the command line.", icon: "bi bi-terminal" },
            { title: "Mock Servers", desc: "Simulating APIs for frontend.", icon: "bi bi-cpu" }
        ],
        courseContentData: [
            { id: "api1", title: "API Fundamentals", icon: "bi bi-info-circle", defaultOpen: true, items: ["What is an API?", "JSON & XML", "Request/Response", "Postman UI"] },
            { id: "api2", title: "Manual Testing", icon: "bi bi-play", items: ["Header & Body", "Query Params", "Auth Tokens", "Status Codes"] },
            { id: "api3", title: "Automation Scripts", icon: "bi bi-code-slash", items: ["Assertions", "Variables", "Collection Runner", "Dynamic Testing"] },
            { id: "api4", title: "Advanced API", icon: "bi bi-stars", items: ["Newman Integration", "API Documentation", "Mocking", "CI/CD for APIs"] }
        ],
        faqData: [
            { question: "Do I need to know JavaScript?", answer: "Basic JS is helpful for automation scripts, and we cover what you need." },
            { question: "Is API testing essential?", answer: "Yes, most modern software relies on APIs, making this a high-demand skill." }
        ]
    },
    {
        id: 36,
        title: "Performance Testing",
        slug: "performance-testing",
        category: "Testing",
        description: "Ensure your application can handle the load. Master performance testing using JMeter.",
        img: "/courses/softwareTesting.webp",
        rating: "4.8",
        students: "500",
        locked: true,
        aboutData: {
            topic: "Load and Stress Testing",
            content1: "Learn to identify performance bottlenecks before they affect your users.",
            content2: "Master Apache JMeter to simulate thousands of users and analyze server response."
        },
        whatYouLearnData: [
            { title: "JMeter Basics", desc: "Thread groups, Samplers, and Listeners.", icon: "bi bi-speedometer" },
            { title: "Load Testing", desc: "Testing system behavior under load.", icon: "bi bi-people" },
            { title: "Stress Testing", desc: "Finding the breaking point of your app.", icon: "bi bi-lightning" },
            { title: "Correlation", desc: "Handling dynamic values in JMeter.", icon: "bi bi-link" },
            { title: "Reporting", desc: "Analyzing throughput and latency.", icon: "bi bi-graph-up" },
            { title: "Best Practices", desc: "Distributed testing and CLI mode.", icon: "bi bi-shield-check" }
        ],
        courseContentData: [
            { id: "pt1", title: "Performance Intro", icon: "bi bi-info-circle", defaultOpen: true, items: ["What is Perf Testing?", "NFRs", "Latency vs Throughput", "JMeter Installation"] },
            { id: "pt2", title: "JMeter Scripting", icon: "bi bi-play", items: ["HTTP Request", "Config Elements", "Assertions", "Dynamic Data"] },
            { id: "pt3", title: "Advanced JMeter", icon: "bi bi-gear", items: ["Regular Expressions", "User Defined Variables", "Logic Controllers", "Timers"] },
            { id: "pt4", title: "Execution & Analysis", icon: "bi bi-bar-chart", items: ["Running Load Tests", "Interpreting Results", "Resource Monitoring", "Reporting Dashboard"] }
        ],
        faqData: [
            { question: "Why use JMeter?", answer: "It's the most popular open-source tool for load testing and supports many protocols." },
            { question: "Do I need a server for testing?", answer: "We will provide access to test applications for your practice." }
        ]
    },

    // HEALTHCARE
    {
        id: 10,
        title: "Medical Billing",
        slug: "medical-billing",
        category: "Healthcare",
        description: "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment.",
        img: "/courses/medicalBilling.webp",
        rating: "4.5",
        students: "600",
        locked: true,
        aboutData: {
            topic: "Master Revenue Cycle Management",
            content1: "Learn how to process claims, handle denials, and ensure healthcare providers get paid.",
            content2: "Master the software and regulations required for professional medical billing."
        },
        whatYouLearnData: [
            { title: "Claims Lifecycle", desc: "Submission, processing, and payment.", icon: "bi bi-arrow-repeat" },
            { title: "Denial Management", desc: "Handling rejected insurance claims.", icon: "bi bi-x-circle" },
            { title: "Insurance Types", desc: "Medicare, Medicaid, and Private plans.", icon: "bi bi-building-check" },
            { title: "Billing Software", desc: "Hands-on with industry tools.", icon: "bi bi-pc-display" },
            { title: "Patient Billing", desc: "Invoicing and collections.", icon: "bi bi-person-lines-fill" },
            { title: "Regulatory Laws", desc: "Compliance and billing ethics.", icon: "bi bi-shield-check" }
        ],
        courseContentData: [
            { id: "mb1", title: "Intro to Billing", icon: "bi bi-cash", defaultOpen: true, items: ["Role of a Biller", "Healthcare Ecosystem", "Insurance Terminology", "HIPAA Basics"] },
            { id: "mb2", title: "Claim Forms", icon: "bi bi-file-text", items: ["CMS-1500 Form", "UB-04 Form", "Electronic Claims (EDI)", "Clearinghouses"] },
            { id: "mb3", title: "Payment Posting", icon: "bi bi-wallet", items: ["EOB Analysis", "ERA Processing", "Adjustment Codes", "Patient Responsibility"] },
            { id: "mb4", title: "A/R Management", icon: "bi bi-graph-up", items: ["Aging Reports", "Appeals Process", "Collections", "Audit Prep"] }
        ],
        faqData: [
            { question: "Is billing easier than coding?", answer: "Billing is more about finance, while coding is clinical. Both are essential!" },
            { question: "Can I work from home?", answer: "Yes, many billing roles offer remote opportunities." }
        ]
    },
    {
        id: 9,
        title: "Medical Coding",
        slug: "medical-coding",
        category: "Healthcare",
        description: "Medical coding involves transforming healthcare diagnoses, procedures, and medical services into universal alphanumeric codes.",
        img: "/courses/medicalCoding.webp",
        rating: "4.6",
        students: "750",
        locked: true,
        aboutData: {
            topic: "Start a Career in Healthcare IT",
            content1: "Learn the essential coding systems (ICD-10, CPT, HCPCS) used in the medical industry.",
            content2: "Prepare for CPC certification and professional medical coder roles."
        },
        whatYouLearnData: [
            { title: "ICD-10-CM", desc: "International Classification of Diseases.", icon: "bi bi-journal-medical" },
            { title: "CPT Coding", desc: "Current Procedural Terminology.", icon: "bi bi-file-medical" },
            { title: "HCPCS Level II", desc: "Medical supplies and services codes.", icon: "bi bi-box-seam" },
            { title: "Medical Terminology", desc: "Anatomy and physiology basics.", icon: "bi bi-person-heart" },
            { title: "Insurance Billing", desc: "Claims processing and compliance.", icon: "bi bi-cash-stack" },
            { title: "Compliance", desc: "HIPAA and healthcare regulations.", icon: "bi bi-shield-check" }
        ],
        courseContentData: [
            { id: "mc1", title: "Medical Basics", icon: "bi bi-heart", defaultOpen: true, items: ["Anatomy & Physiology", "Medical Terminology", "Pathology", "Healthcare Delivery"] },
            { id: "mc2", title: "ICD-10-CM Coding", icon: "bi bi-journal", items: ["Coding Guidelines", "Infection Diseases", "Neoplasms", "Circulatory System"] },
            { id: "mc3", title: "CPT & HCPCS", icon: "bi bi-file-earmark", items: ["Evaluation & Management", "Surgery Coding", "Radiology", "Lab Procedures"] },
            { id: "mc4", title: "Certification Prep", icon: "bi bi-award", items: ["CPC Exam Overview", "Mock Tests", "Time Management", "Job Interview Prep"] }
        ],
        faqData: [
            { question: "Do I need a medical degree?", answer: "No, a basic understanding of biology is enough, and we teach the rest." },
            { question: "What is the CPC exam?", answer: "It's the gold standard certification for medical coders." }
        ]
    },
    {
        id: 37,
        title: "Clinical Research",
        slug: "clinical-research",
        category: "Healthcare",
        description: "Master the processes of clinical trials and drug development. Learn about GCP, regulatory affairs, and trial management.",
        img: "/courses/medicalCoding.webp",
        rating: "4.7",
        students: "400",
        locked: true,
        aboutData: {
            topic: "Clinical Trial Management",
            content1: "Learn how new drugs and medical devices are tested for safety and efficacy in humans.",
            content2: "Master the regulatory requirements and ethics involved in clinical research."
        },
        whatYouLearnData: [
            { title: "GCP Guidelines", desc: "Good Clinical Practice standards.", icon: "bi bi-shield-check" },
            { title: "Trial Design", desc: "Phases of clinical trials (I-IV).", icon: "bi bi-diagram-3" },
            { title: "Drug Development", desc: "The journey from lab to market.", icon: "bi bi-capsule" },
            { title: "Regulatory Affairs", desc: "FDA and international regulations.", icon: "bi bi-file-earmark-check" },
            { title: "Pharmacovigilance", desc: "Monitoring drug safety.", icon: "bi bi-eye" },
            { title: "Trial Ops", desc: "Managing sites and data.", icon: "bi bi-gear" }
        ],
        courseContentData: [
            { id: "cr1", title: "Intro to Clinical Research", icon: "bi bi-info-circle", defaultOpen: true, items: ["Terminology", "Historical Context", "Ethical Principles", "Trial Stakeholders"] },
            { id: "cr2", title: "Regulatory Framework", icon: "bi bi-file-lock", items: ["ICH-GCP", "Informed Consent", "Institutional Review Board", "Documentation"] },
            { id: "cr3", title: "Trial Execution", icon: "bi bi-play", items: ["Site Selection", "Monitoring Visits", "Data Management", "Safety Reporting"] },
            { id: "cr4", title: "Special Topics", icon: "bi bi-stars", items: ["Bioethics", "Medical Writing", "Audits & Inspections", "Career Paths"] }
        ],
        faqData: [
            { question: "Who can join this course?", answer: "Graduates in Life Sciences, Pharmacy, or Medicine are ideal candidates." },
            { question: "What are the job roles?", answer: "CRA (Clinical Research Associate), CRC (Coordinator), and Data Manager." }
        ]
    },
    {
        id: 38,
        title: "Hospital Management",
        slug: "hospital-management",
        category: "Healthcare",
        description: "Learn to manage the complex operations of healthcare facilities, from patient care to hospital administration.",
        img: "/courses/medicalBilling.webp",
        rating: "4.5",
        students: "550",
        locked: true,
        aboutData: {
            topic: "Healthcare Administration",
            content1: "Master the skills needed to run a hospital efficiently while maintaining high standards of patient care.",
            content2: "Learn about hospital operations, quality management, and healthcare finance."
        },
        whatYouLearnData: [
            { title: "Hospital Ops", desc: "Daily management of hospital departments.", icon: "bi bi-building" },
            { title: "Quality Control", desc: "NABH and JCI accreditation standards.", icon: "bi bi-award" },
            { title: "Patient Relations", desc: "Managing patient experience and care.", icon: "bi bi-heart" },
            { title: "Healthcare Finance", desc: "Budgeting and financial management.", icon: "bi bi-cash-stack" },
            { title: "HR in Healthcare", desc: "Managing medical and non-medical staff.", icon: "bi bi-people" },
            { title: "Health IT", desc: "Hospital Information Systems (HIS).", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "hm1", title: "Hospital Organization", icon: "bi bi-grid", defaultOpen: true, items: ["Hospital Structure", "Departmental Functions", "Healthcare Systems", "Public vs Private"] },
            { id: "hm2", title: "Operations Management", icon: "bi bi-gear", items: ["Supply Chain", "Facility Management", "Emergency Services", "Outpatient Care"] },
            { id: "hm3", title: "Quality & Safety", icon: "bi bi-shield-check", items: ["Patient Safety", "Infection Control", "Risk Management", "Accreditation Prep"] },
            { id: "hm4", title: "Admin & Leadership", icon: "bi bi-person-badge", items: ["Leadership Skills", "Ethics & Law", "Strategic Planning", "Hospital Marketing"] }
        ],
        faqData: [
            { question: "Is this for doctors only?", answer: "No, this is for anyone interested in the administrative side of healthcare." },
            { question: "What is NABH?", answer: "It's the national accreditation board for hospitals ensuring quality standards." }
        ]
    },
    {
        id: 39,
        title: "Pharmacy Management",
        slug: "pharmacy-management",
        category: "Healthcare",
        description: "Learn to manage retail and hospital pharmacies, focusing on inventory, regulations, and patient counseling.",
        img: "/courses/medicalCoding.webp",
        rating: "4.6",
        students: "350",
        locked: true,
        aboutData: {
            topic: "Pharmacy Operations & Care",
            content1: "Learn the business and clinical aspects of running a pharmacy successfully.",
            content2: "Master inventory management, drug regulations, and effective patient communication."
        },
        whatYouLearnData: [
            { title: "Inventory Control", desc: "Managing drug stocks and expiry.", icon: "bi bi-box-seam" },
            { title: "Drug Laws", desc: "Pharmacy acts and regulations.", icon: "bi bi-file-earmark-lock" },
            { title: "Patient Counseling", desc: "Providing medication advice.", icon: "bi bi-chat-dots" },
            { title: "Retail Management", desc: "Running a profitable pharmacy.", icon: "bi bi-shop" },
            { title: "Pharmacology", desc: "Basics of drug actions.", icon: "bi bi-capsule" },
            { title: "Pharmacy IT", desc: "Software for billing and inventory.", icon: "bi bi-pc-display" }
        ],
        courseContentData: [
            { id: "ph1", title: "Pharmacy Basics", icon: "bi bi-info-circle", defaultOpen: true, items: ["Role of Pharmacist", "Pharmacy Types", "Drug Classification", "Storage Norms"] },
            { id: "ph2", title: "Stock & Inventory", icon: "bi bi-boxes", items: ["Procurement", "Stock Audits", "Lead Time", "Waste Management"] },
            { id: "ph3", title: "Regulations & Ethics", icon: "bi bi-shield", items: ["Prescription Handling", "Controlled Substances", "Legal Compliance", "Professional Ethics"] },
            { id: "ph4", title: "Business Skills", icon: "bi bi-graph-up", items: ["Sales & Marketing", "Customer Service", "Financial Basics", "Digital Pharmacy"] }
        ],
        faqData: [
            { question: "Do I need a Pharmacy degree?", answer: "Basic knowledge is helpful, but we cover the management side for beginners." },
            { question: "Will I learn about software?", answer: "Yes, we include hands-on training with pharmacy management software." }
        ]
    },

    // DATABASE
    {
        id: 6,
        title: "Business Intelligence",
        slug: "business-intelligence",
        category: "Database",
        description: "Business Intelligence (BI) transforms raw data into meaningful insights for strategic decisions and performance measurement.",
        img: "/courses/business.webp",
        rating: "4.6",
        students: "900",
        locked: true,
        aboutData: {
            topic: "Data-Driven Decision Making with BI",
            content1: "Learn to visualize data and extract actionable insights using industry-leading BI tools.",
            content2: "Master Power BI, Tableau, and data warehousing concepts."
        },
        whatYouLearnData: [
            { title: "Data Visualization", desc: "Create compelling charts and dashboards.", icon: "bi bi-pie-chart" },
            { title: "Power BI", desc: "DAX formulas and Power Query.", icon: "bi bi-bar-chart-line" },
            { title: "Tableau", desc: "Advanced data mapping and storytelling.", icon: "bi bi-graph-up-arrow" },
            { title: "ETL Processes", desc: "Extract, Transform, and Load data.", icon: "bi bi-arrow-left-right" },
            { title: "SQL for BI", desc: "Querying databases for reporting.", icon: "bi bi-database-check" },
            { title: "Data Modeling", desc: "Star and Snowflake schemas.", icon: "bi bi-diagram-3" }
        ],
        courseContentData: [
            { id: "bi1", title: "Intro to BI", icon: "bi bi-info-circle", defaultOpen: true, items: ["BI Concepts", "Data Analytics Lifecycle", "Types of BI Tools", "Data Strategy"] },
            { id: "bi2", title: "Power BI Mastery", icon: "bi bi-bar-chart", items: ["Connecting Data", "DAX Basics", "Creating Reports", "Publishing to Service"] },
            { id: "bi3", title: "Tableau Fundamentals", icon: "bi bi-graph-up", items: ["Dimensions vs Measures", "Calculated Fields", "Dashboards", "Storyboards"] },
            { id: "bi4", title: "Advanced Analytics", icon: "bi bi-stars", items: ["Predictive Modeling", "Big Data Integration", "Data Governance", "BI Project Management"] }
        ],
        faqData: [
            { question: "Which tool is better: Power BI or Tableau?", answer: "Both have their strengths. We teach both so you can choose based on your needs." },
            { question: "What roles can I apply for?", answer: "BI Developer, Data Analyst, or Business Analyst." }
        ]
    },
    {
        id: 24,
        title: "MySQL Administration",
        slug: "mysql-administration",
        category: "Database",
        description: "MySQL is the world's most popular open-source database, widely used for web applications.",
        img: "/courses/sql.jpg",
        rating: "4.7",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Master MySQL Database",
            content1: "Learn to manage and optimize MySQL databases for web and enterprise apps.",
            content2: "Master security, replication, and performance tuning."
        },
        whatYouLearnData: [
            { title: "SQL Mastery", desc: "Querying and data modeling.", icon: "bi bi-terminal" },
            { title: "Security", desc: "User management and encryption.", icon: "bi bi-shield-lock" },
            { title: "Performance", desc: "Indexing and Query cache.", icon: "bi bi-speedometer" },
            { title: "Backup", desc: "MySQLDump and Point-in-time recovery.", icon: "bi bi-safe" },
            { title: "Replication", desc: "Master-Slave and Master-Master.", icon: "bi bi-share" },
            { title: "Engines", desc: "InnoDB vs MyISAM deep dive.", icon: "bi bi-gear" }
        ],
        courseContentData: [
            { id: "my1", title: "MySQL Fundas", icon: "bi bi-play", defaultOpen: true, items: ["Installation", "Workbench", "SQL Basics", "Data Types"] },
            { id: "my2", title: "Data Management", icon: "bi bi-database", items: ["Normalization", "Joins", "Transactions", "Views"] },
            { id: "my3", title: "DBA Core", icon: "bi bi-gear-wide", items: ["Server Variables", "Logs", "Backups", "User Privileges"] },
            { id: "my4", title: "Advanced Topics", icon: "bi bi-stars", items: ["Optimization", "Partitioning", "Stored Procedures", "Triggers"] }
        ],
        faqData: [
            { question: "Is MySQL easy to learn?", answer: "Yes, it's very beginner-friendly and has a massive community." },
            { question: "Will I learn about performance?", answer: "Yes, we focus heavily on how to make your queries run fast." }
        ]
    },
    {
        id: 12,
        title: "MongoDB",
        slug: "mongodb",
        category: "Database",
        description: "MongoDB is a source-available cross-platform document-oriented database program, classified as a NoSQL database.",
        img: "/courses/mern.webp",
        rating: "4.8",
        students: "1000",
        locked: true,
        aboutData: {
            topic: "Master NoSQL with MongoDB",
            content1: "Learn the flexible document-based approach to database management used in modern web apps.",
            content2: "Master CRUD operations, aggregation pipelines, and database scaling."
        },
        whatYouLearnData: [
            { title: "Document Model", desc: "JSON-like data structures.", icon: "bi bi-file-code" },
            { title: "CRUD Operations", desc: "Insert, Find, Update, Delete.", icon: "bi bi-pencil-square" },
            { title: "Aggregation", desc: "Powerful data processing pipeline.", icon: "bi bi-funnel" },
            { title: "Indexing", desc: "Improving query speed in NoSQL.", icon: "bi bi-lightning" },
            { title: "Mongoose ORM", desc: "Using MongoDB with Node.js.", icon: "bi bi-hexagon" },
            { title: "Atlas & Scaling", desc: "Cloud deployment and sharding.", icon: "bi bi-cloud" }
        ],
        courseContentData: [
            { id: "mg1", title: "Getting Started", icon: "bi bi-play", defaultOpen: true, items: ["Intro to NoSQL", "Atlas Setup", "Compass Interface", "BSON vs JSON"] },
            { id: "mg2", title: "Basic Queries", icon: "bi bi-search", items: ["Insert & Find", "Query Operators", "Array Queries", "Updates"] },
            { id: "mg3", title: "Data Modeling", icon: "bi bi-diagram-3", items: ["Embedding vs Referencing", "Schema Design", "Validation", "Indexes"] },
            { id: "mg4", title: "Advanced MongoDB", icon: "bi bi-stars", items: ["Aggregation Framework", "Replication", "Sharding Basics", "Security"] }
        ],
        faqData: [
            { question: "Why use NoSQL over SQL?", answer: "NoSQL is great for unstructured data and apps that need to scale horizontally quickly." },
            { question: "Is MongoDB free?", answer: "Yes, MongoDB Atlas has a generous free tier for developers." }
        ]
    },
    {
        id: 23,
        title: "PostgreSQL",
        slug: "postgresql",
        category: "Database",
        description: "PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability.",
        img: "/courses/sql.jpg",
        rating: "4.8",
        students: "900",
        locked: true,
        aboutData: {
            topic: "Master Advanced SQL with Postgres",
            content1: "Learn to manage and query data using the most advanced open-source database.",
            content2: "Master performance tuning, JSONB, and full-text search."
        },
        whatYouLearnData: [
            { title: "Complex Queries", desc: "CTEs and Window functions.", icon: "bi bi-code-square" },
            { title: "JSONB Support", desc: "Handling semi-structured data.", icon: "bi bi-filetype-json" },
            { title: "Indexing", desc: "GIN and GIST indexes.", icon: "bi bi-lightning" },
            { title: "Stored Procedures", desc: "PL/pgSQL programming.", icon: "bi bi-terminal" },
            { title: "Backup & HA", desc: "Data safety and replication.", icon: "bi bi-safe" },
            { title: "Performance", desc: "EXPLAIN ANALYZE and Tuning.", icon: "bi bi-speedometer" }
        ],
        courseContentData: [
            { id: "pg1", title: "Postgres Basics", icon: "bi bi-play", defaultOpen: true, items: ["Installation", "pgAdmin Tool", "Data Types", "Basic CRUD"] },
            { id: "pg2", title: "Advanced SQL", icon: "bi bi-lightning", items: ["Joins & Subqueries", "Window Functions", "Common Table Expressions", "Views"] },
            { id: "pg3", title: "DB Programming", icon: "bi bi-cpu", items: ["Triggers", "Functions", "Transactions", "JSON Support"] },
            { id: "pg4", title: "DBA Basics", icon: "bi bi-gear", items: ["User Roles", "Backup/Restore", "Vacuuming", "Partitioning"] }
        ],
        faqData: [
            { question: "Is Postgres better than MySQL?", answer: "Postgres has more advanced features and is strictly compliant with SQL standards." },
            { question: "Where is Postgres used?", answer: "In high-reliability systems and modern web backends." }
        ]
    },
    {
        id: 18,
        title: "Oracle SQL",
        slug: "oracle-sql",
        category: "Database",
        description: "Oracle SQL is the standard language for interacting with Oracle Database, one of the most powerful enterprise DBs.",
        img: "/courses/sql.jpg",
        rating: "4.6",
        students: "850",
        locked: true,
        aboutData: {
            topic: "Master Oracle Database SQL",
            content1: "Learn to write efficient SQL for Oracle, the world's leading enterprise database.",
            content2: "Master complex joins, subqueries, and PL/SQL fundamentals."
        },
        whatYouLearnData: [
            { title: "Data Retrieval", desc: "Selecting and filtering data.", icon: "bi bi-search" },
            { title: "Complex Joins", desc: "Inner, Outer, and Self joins.", icon: "bi bi-diagram-2" },
            { title: "Analytic Functions", desc: "Rank, Row_Number, and Lead/Lag.", icon: "bi bi-calculator" },
            { title: "Data Manipulation", desc: "INSERT, UPDATE, and DELETE.", icon: "bi bi-pencil" },
            { title: "PL/SQL Intro", desc: "Blocks, Variables, and Procedures.", icon: "bi bi-code-square" },
            { title: "Optimization", desc: "Query plans and hints.", icon: "bi bi-speedometer" }
        ],
        courseContentData: [
            { id: "ora1", title: "SQL Fundamentals", icon: "bi bi-play", defaultOpen: true, items: ["Oracle Architecture", "SQL Developer Tool", "Basic Select", "Where Clause"] },
            { id: "ora2", title: "Data Management", icon: "bi bi-database", items: ["Joins & Sets", "Aggregate Functions", "Subqueries", "String/Date Functions"] },
            { id: "ora3", title: "Schema Objects", icon: "bi bi-boxes", items: ["Tables & Constraints", "Indexes & Synonyms", "Sequences", "Views"] },
            { id: "ora4", title: "Intro to PL/SQL", icon: "bi bi-code", items: ["PL/SQL Blocks", "Control Structures", "Cursors", "Exception Handling"] }
        ],
        faqData: [
            { question: "Where is Oracle SQL used?", answer: "Mainly in large-scale enterprises like banks and telecom systems." },
            { question: "Is PL/SQL included?", answer: "Yes, we include an introductory module to get you started with PL/SQL." }
        ]
    },

    // CCNA
    {
        id: 13,
        title: "Cisco Certified Network Associate (CCNA)",
        slug: "ccna",
        category: "CCNA",
        description: "CCNA validates essential networking skills for configuring and troubleshooting modern computer networks.",
        img: "/courses/aws.webp",
        rating: "4.9",
        students: "1400",
        locked: true,
        aboutData: {
            topic: "Master Networking with Cisco",
            content1: "Learn the fundamentals of networking, security, and automation using Cisco technologies.",
            content2: "Prepare for the CCNA 200-301 exam and start a career as a Network Engineer."
        },
        whatYouLearnData: [
            { title: "Network Fundas", desc: "Routers, Switches, and OSI Model.", icon: "bi bi-diagram-2" },
            { title: "IP Connectivity", desc: "Routing protocols like OSPF.", icon: "bi bi-share" },
            { title: "Security Fundas", desc: "VPNs, Firewalls, and Access Control.", icon: "bi bi-shield-lock" },
            { title: "IP Services", desc: "DHCP, DNS, and NAT.", icon: "bi bi-cloud" },
            { title: "Automation", desc: "Network programmability basics.", icon: "bi bi-robot" },
            { title: "Wireless Access", desc: "WLAN and wireless security.", icon: "bi bi-wifi" }
        ],
        courseContentData: [
            { id: "cc1", title: "Networking Basics", icon: "bi bi-info-circle", defaultOpen: true, items: ["OSI & TCP/IP", "Cabling & Topology", "IPv4 & IPv6", "Subnetting"] },
            { id: "cc2", title: "Switching & Routing", icon: "bi bi-arrow-left-right", items: ["VLANs & Trunking", "STP Basics", "Static Routing", "OSPFv2 Config"] },
            { id: "cc3", title: "IP Services & Security", icon: "bi bi-shield", items: ["ACLs", "NAT/PAT", "DHCP Config", "Device Hardening"] },
            { id: "cc4", title: "Exam Preparation", icon: "bi bi-award", items: ["Exam Strategies", "Lab Practice", "Mock Exams", "Review Sessions"] }
        ],
        faqData: [
            { question: "Do I need special hardware?", answer: "No, we use Packet Tracer and GNS3 for simulations." },
            { question: "How long is the exam?", answer: "The CCNA 200-301 exam is 120 minutes long." }
        ]
    },
    {
        id: 40,
        title: "CCNP Network",
        slug: "ccnp-network",
        category: "CCNA",
        description: "Master advanced routing and switching. Prepare for the CCNP Enterprise certification.",
        img: "/courses/aws.webp",
        rating: "4.9",
        students: "300",
        locked: true,
        aboutData: {
            topic: "Advanced Enterprise Networking",
            content1: "Deep dive into complex network architectures, high availability, and advanced troubleshooting.",
            content2: "Master BGP, EIGRP, OSPF, and SD-WAN technologies."
        },
        whatYouLearnData: [
            { title: "Advanced Routing", desc: "Master BGP and complex OSPF.", icon: "bi bi-share" },
            { title: "High Availability", desc: "HSRP, VRRP, and GLBP.", icon: "bi bi-shield-check" },
            { title: "VPN Technologies", desc: "DMVPN and site-to-site VPNs.", icon: "bi bi-lock" },
            { title: "SD-WAN", desc: "Software-Defined WAN architectures.", icon: "bi bi-cloud" },
            { title: "Network Automation", desc: "Using Python and Ansible for Cisco.", icon: "bi bi-robot" },
            { title: "Troubleshooting", desc: "Expert level diagnostic skills.", icon: "bi bi-search" }
        ],
        courseContentData: [
            { id: "cn1", title: "Core Networking", icon: "bi bi-cpu", defaultOpen: true, items: ["Dual Stack (IPv4/v6)", "Virtualization", "Infrastructure", "Network Assurance"] },
            { id: "cn2", title: "Advanced Routing", icon: "bi bi-diagram-3", items: ["BGP Attributes", "Route Filtering", "Redistribution", "Multicast"] },
            { id: "cn3", title: "Enterprise Design", icon: "bi bi-building", items: ["High Availability", "QoS Implementation", "WLAN Security", "Cloud Connectivity"] },
            { id: "cn4", title: "Automation", icon: "bi bi-code-slash", items: ["REST APIs", "Cisco DNA Center", "JSON/YAML", "Python Scripting"] }
        ],
        faqData: [
            { question: "Is CCNA required?", answer: "Yes, CCNA level knowledge is essential before starting CCNP." },
            { question: "What are the job prospects?", answer: "Senior Network Engineer, Network Architect, and Infrastructure Lead." }
        ]
    },
    {
        id: 41,
        title: "Network Security",
        slug: "network-security",
        category: "CCNA",
        description: "Protect your infrastructure. Learn to implement and manage firewalls, IPS, and secure access.",
        img: "/courses/softwareTesting.webp",
        rating: "4.8",
        students: "450",
        locked: true,
        aboutData: {
            topic: "Securing Modern Networks",
            content1: "Learn the strategies and tools used to protect enterprise data and systems from unauthorized access.",
            content2: "Master Cisco ASA firewalls, VPNs, and secure network management."
        },
        whatYouLearnData: [
            { title: "Firewalls", desc: "Configuring ASA and Next-Gen firewalls.", icon: "bi bi-shield-shaded" },
            { title: "IPS/IDS", desc: "Intrusion prevention and detection.", icon: "bi bi-eye" },
            { title: "Secure VPNs", desc: "Implementing AnyConnect and IPsec.", icon: "bi bi-lock" },
            { title: "AAA Framework", desc: "Authentication, Authorization, Accounting.", icon: "bi bi-key" },
            { title: "Web Security", desc: "Content filtering and protection.", icon: "bi bi-globe" },
            { title: "Endpoint Security", desc: "Protecting devices on the network.", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "ns1", title: "Security Basics", icon: "bi bi-info-circle", defaultOpen: true, items: ["Security Threats", "Mitigation Techniques", "Management Plane Security", "VLAN Security"] },
            { id: "ns2", title: "Cisco ASA Firewall", icon: "bi bi-shield", items: ["ASA Fundamentals", "Access Control Lists", "Object Groups", "NAT on ASA"] },
            { id: "ns3", title: "VPN Implementation", icon: "bi bi-lock", items: ["Site-to-Site IPsec", "Remote Access VPN", "SSL VPN", "Encryption Algorithms"] },
            { id: "ns4", title: "Advanced Protection", icon: "bi bi-stars", items: ["Cisco Firepower", "Email Security", "Cloud Security", "Security Auditing"] }
        ],
        faqData: [
            { question: "Do I need to know networking?", answer: "Yes, a solid understanding of TCP/IP and routing is required." },
            { question: "Is this for security certifications?", answer: "Yes, it helps prepare for various network security exams." }
        ]
    },
    {
        id: 42,
        title: "Ethical Hacking",
        slug: "ethical-hacking",
        category: "CCNA",
        description: "Think like a hacker to build better defenses. Learn vulnerability assessment and penetration testing.",
        img: "/courses/softwareTesting.webp",
        rating: "4.9",
        students: "800",
        locked: true,
        aboutData: {
            topic: "Offensive Security Mastery",
            content1: "Master the tools and techniques used by hackers to identify vulnerabilities and secure them.",
            content2: "Learn footprinting, scanning, exploitation, and post-exploitation."
        },
        whatYouLearnData: [
            { title: "Footprinting", desc: "Information gathering and reconnaissance.", icon: "bi bi-search" },
            { title: "Scanning", desc: "Network scanning and vulnerability analysis.", icon: "bi bi-broadcast" },
            { title: "Exploitation", desc: "Gaining access using Metasploit.", icon: "bi bi-terminal" },
            { title: "Web App Hacking", desc: "SQL injection and XSS attacks.", icon: "bi bi-code-slash" },
            { title: "Wireless Hacking", desc: "Cracking Wi-Fi security.", icon: "bi bi-wifi" },
            { title: "Privilege Escalation", desc: "Gaining higher level access.", icon: "bi bi-person-up" }
        ],
        courseContentData: [
            { id: "eh1", title: "Intro to Hacking", icon: "bi bi-incognito", defaultOpen: true, items: ["Ethical Hacking Phases", "Lab Setup (Kali Linux)", "Legal Issues", "Google Dorking"] },
            { id: "eh2", title: "Network Hacking", icon: "bi bi-diagram-3", items: ["Nmap Scanning", "Sniffing", "MITM Attacks", "DoS Attacks"] },
            { id: "eh3", title: "System Hacking", icon: "bi bi-pc-display", items: ["Password Cracking", "Buffer Overflows", "Backdoors", "Steganography"] },
            { id: "eh4", title: "Advanced Hacking", icon: "bi bi-stars", items: ["Mobile Hacking", "IoT Security", "Cloud Hacking", "Pentest Reporting"] }
        ],
        faqData: [
            { question: "Is this legal?", answer: "Yes, we teach ethical hacking for the purpose of defense and security." },
            { question: "Do I need a high-end PC?", answer: "A decent laptop with 8GB RAM is enough to run virtual labs." }
        ]
    },
    {
        id: 26,
        title: "Cyber Security",
        slug: "cyber-security",
        category: "CCNA",
        description: "Comprehensive cybersecurity training covering defense strategies, incident response, and security operations.",
        img: "/courses/softwareTesting.webp",
        rating: "4.9",
        students: "1000",
        locked: true,
        aboutData: {
            topic: "Defensive Security Expert",
            content1: "Master the skills needed to detect, respond to, and prevent cyber threats in enterprise environments.",
            content2: "Learn SOC operations, SIEM tools, and defensive architecture."
        },
        whatYouLearnData: [
            { title: "SOC Operations", desc: "Monitoring and responding to incidents.", icon: "bi bi-display" },
            { title: "SIEM Tools", desc: "Using Splunk and ELK for analysis.", icon: "bi bi-graph-up" },
            { title: "Threat Intel", desc: "Understanding the threat landscape.", icon: "bi bi-search" },
            { title: "Digital Forensics", desc: "Investigating security breaches.", icon: "bi bi-camera" },
            { title: "Defensive Architecture", desc: "Building resilient networks.", icon: "bi bi-building" },
            { title: "Compliance", desc: "ISO 27001 and GDPR standards.", icon: "bi bi-file-earmark-check" }
        ],
        courseContentData: [
            { id: "cs1", title: "Cyber Security Fundas", icon: "bi bi-shield-lock", defaultOpen: true, items: ["Cyber Landscape", "CIA Triad", "Risk Management", "Security Policy"] },
            { id: "cs2", title: "Defensive Tech", icon: "bi bi-shield", items: ["Firewalls & IDS", "Endpoint Protection", "Encryption", "Identity Management"] },
            { id: "cs3", title: "Security Ops", icon: "bi bi-display", items: ["SOC Roles", "Log Management", "SIEM Setup", "Alert Analysis"] },
            { id: "cs4", title: "Incident Response", icon: "bi bi-exclamation-triangle", items: ["IR Lifecycle", "Malware Analysis", "Recovery", "Business Continuity"] }
        ],
        faqData: [
            { question: "What is a SOC?", answer: "A Security Operations Center is where security teams monitor for threats." },
            { question: "What certifications can I get?", answer: "Security+, CEH, and various SOC Analyst certifications." }
        ]
    },

    // CLOUD
    {
        id: 5,
        title: "AWS",
        slug: "aws",
        category: "Cloud",
        description: "AWS is a secure cloud platform offering computing power, database storage, and content delivery services on demand.",
        img: "/courses/aws.webp",
        rating: "4.8",
        students: "1500",
        locked: true,
        aboutData: {
            topic: "Master Cloud Computing with AWS",
            content1: "Learn to design, deploy, and manage scalable cloud solutions using Amazon Web Services.",
            content2: "Prepare for AWS certifications and real-world cloud architecture roles."
        },
        whatYouLearnData: [
            { title: "EC2 & S3", desc: "Compute and storage services.", icon: "bi bi-cloud" },
            { title: "IAM & Security", desc: "Identity and access management.", icon: "bi bi-shield-lock" },
            { title: "VPC & Networking", desc: "Cloud network architecture.", icon: "bi bi-diagram-2" },
            { title: "Lambda & Serverless", desc: "Event-driven compute service.", icon: "bi bi-lightning" },
            { title: "RDS & DynamoDB", desc: "Managed database services.", icon: "bi bi-database" },
            { title: "CloudWatch", desc: "Monitoring and observability.", icon: "bi bi-graph-up" }
        ],
        courseContentData: [
            { id: "aws1", title: "AWS Fundamentals", icon: "bi bi-cloud", defaultOpen: true, items: ["Cloud Concepts", "Global Infrastructure", "Free Tier", "AWS Management Console"] },
            { id: "aws2", title: "Core Services", icon: "bi bi-server", items: ["EC2 Instances", "S3 Buckets", "RDS Databases", "VPC Networking"] },
            { id: "aws3", title: "Security & IAM", icon: "bi bi-shield-lock", items: ["IAM Users & Roles", "Security Groups", "KMS Encryption", "CloudTrail Logging"] },
            { id: "aws4", title: "Advanced Services & DevOps", icon: "bi bi-diagram-3", items: ["Lambda Functions", "CloudWatch Monitoring", "CloudFormation", "CI/CD with CodePipeline"] }
        ],
        faqData: [
            { question: "Do I need coding for AWS?", answer: "While basic scripting helps, AWS is largely about infrastructure." },
            { question: "Is certification covered?", answer: "Yes, we prepare you for the Solutions Architect Associate exam." }
        ]
    },
    {
        id: 19,
        title: "Azure Cloud",
        slug: "azure-cloud",
        category: "Cloud",
        description: "Microsoft Azure is a cloud computing service for building, testing, deploying, and managing applications.",
        img: "/courses/Azure Cloud.png",
        rating: "4.8",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Master Microsoft Azure",
            content1: "Learn to build and manage cloud solutions on the Azure platform.",
            content2: "Prepare for AZ-900 and AZ-104 certifications."
        },
        whatYouLearnData: [
            { title: "Azure Compute", desc: "Virtual Machines and App Services.", icon: "bi bi-pc-display" },
            { title: "Azure Storage", desc: "Blob, Table, and Queue storage.", icon: "bi bi-database" },
            { title: "Networking", desc: "Virtual Networks and Load Balancers.", icon: "bi bi-diagram-3" },
            { title: "Azure AD", desc: "Identity and Access Management.", icon: "bi bi-person-lock" },
            { title: "Governance", desc: "Policy, Cost, and Resource groups.", icon: "bi bi-shield-check" },
            { title: "DevOps", desc: "Azure DevOps pipelines.", icon: "bi bi-infinity" }
        ],
        courseContentData: [
            { id: "az1", title: "Azure Fundas", icon: "bi bi-cloud", defaultOpen: true, items: ["Cloud Concepts", "Core Services", "Azure Portal", "Solutions Architectures"] },
            { id: "az2", title: "Administration", icon: "bi bi-gear", items: ["VM Management", "Network Config", "Identity Protection", "Monitoring"] },
            { id: "az3", title: "App Services", icon: "bi bi-rocket", items: ["Web Apps", "Functions", "Logic Apps", "Containers"] },
            { id: "az4", title: "Exam Prep", icon: "bi bi-award", items: ["Practice Labs", "Question Banks", "Mock Exams", "Case Studies"] }
        ],
        faqData: [
            { question: "Why learn Azure?", answer: "Azure is the fastest-growing cloud platform, especially in the enterprise sector." },
            { question: "What certifications are covered?", answer: "AZ-900 (Fundamentals) and AZ-104 (Administrator)." }
        ]
    },
    {
        id: 20,
        title: "Google Cloud (GCP)",
        slug: "google-cloud-gcp",
        category: "Cloud",
        description: "Google Cloud Platform (GCP) provides a suite of cloud computing services running on the same infrastructure as Google Search and YouTube.",
        img: "/courses/Google Cloud.png",
        rating: "4.7",
        students: "900",
        locked: true,
        aboutData: {
            topic: "Master Google Cloud Platform",
            content1: "Learn to leverage Google's cutting-edge infrastructure for your applications.",
            content2: "Master Kubernetes, BigQuery, and AI/ML services on GCP."
        },
        whatYouLearnData: [
            { title: "Compute Engine", desc: "Google's virtual machine service.", icon: "bi bi-cpu" },
            { title: "GKE (Kubernetes)", desc: "Master container orchestration.", icon: "bi bi-box" },
            { title: "BigQuery", desc: "Enterprise data warehouse for analytics.", icon: "bi bi-bar-chart" },
            { title: "Cloud Storage", desc: "Object storage for any data size.", icon: "bi bi-database" },
            { title: "Cloud IAM", desc: "Identity and Access Management.", icon: "bi bi-person-check" },
            { title: "VPC & Load Balancers", desc: "Global cloud networking.", icon: "bi bi-globe" }
        ],
        courseContentData: [
            { id: "gcp1", title: "GCP Fundamentals", icon: "bi bi-play", defaultOpen: true, items: ["GCP Console", "Projects & Resources", "Regions & Zones", "Billing"] },
            { id: "gcp2", title: "Compute & Network", icon: "bi bi-pc-display", items: ["Compute Engine", "App Engine", "VPC Basics", "Cloud Load Balancing"] },
            { id: "gcp3", title: "Data & Storage", icon: "bi bi-database", items: ["Cloud SQL", "Firestore", "Bigtable", "Cloud Storage"] },
            { id: "gcp4", title: "Modern Services", icon: "bi bi-stars", items: ["Kubernetes Basics", "Pub/Sub", "Cloud Functions", "AI Platform"] }
        ],
        faqData: [
            { question: "Why choose GCP?", answer: "Leader in data analytics, AI/ML, and containerized apps (Kubernetes)." },
            { question: "What is BigQuery?", answer: "A serverless, highly scalable data warehouse, one of GCP's best features." }
        ]
    },
    {
        id: 32,
        title: "Docker & Kubernetes",
        slug: "docker-kubernetes-cloud",
        category: "Cloud",
        description: "Master containerization and orchestration using Docker and Kubernetes for cloud-native applications.",
        img: "/courses/Docker.png",
        rating: "4.9",
        students: "1200",
        locked: true,
        aboutData: {
            topic: "Container Orchestration Mastery",
            content1: "Learn to containerize applications and manage them at scale using Kubernetes.",
            content2: "Master CI/CD integration and cloud-native architecture."
        },
        whatYouLearnData: [
            { title: "Docker Basics", desc: "Images, Containers, and Dockerfiles.", icon: "bi bi-box" },
            { title: "K8s Architecture", desc: "Pods, Services, and Deployments.", icon: "bi bi-diagram-3" },
            { title: "Helm Charts", desc: "Managing K8s applications.", icon: "bi bi-flag" },
            { title: "Networking", desc: "Service discovery and Ingress.", icon: "bi bi-share" },
            { title: "Storage", desc: "Persistent volumes and claims.", icon: "bi bi-database" },
            { title: "Monitoring", desc: "Prometheus and Grafana.", icon: "bi bi-graph-up" }
        ],
        courseContentData: [
            { id: "dk1", title: "Docker Deep Dive", icon: "bi bi-box", defaultOpen: true, items: ["Container Basics", "Docker Compose", "Network & Volumes", "Registry"] },
            { id: "dk2", title: "Kubernetes Fundas", icon: "bi bi-diagram-2", items: ["Minikube Setup", "YAML manifests", "ReplicaSets", "Namespaces"] },
            { id: "dk3", title: "Scaling & Updates", icon: "bi bi-arrow-repeat", items: ["Rolling Updates", "Auto-scaling", "Health Checks", "ConfigMaps"] },
            { id: "dk4", title: "Cloud Native", icon: "bi bi-cloud", items: ["EKS/GKE/AKS Basics", "Service Mesh", "Security Best Practices", "GitOps"] }
        ],
        faqData: [
            { question: "What is a container?", answer: "A container is a standard unit of software that packages code and dependencies." },
            { question: "Is Kubernetes better than Docker Swarm?", answer: "Kubernetes is much more powerful and is the industry standard for large-scale apps." }
        ]
    },
    {
        id: 33,
        title: "Terraform (IaC)",
        slug: "terraform-iac-cloud",
        category: "Cloud",
        description: "Learn to provision and manage cloud infrastructure using Terraform, the leading Infrastructure as Code (IaC) tool.",
        img: "/courses/Terraform.png",
        rating: "4.8",
        students: "800",
        locked: true,
        aboutData: {
            topic: "Infrastructure as Code with Terraform",
            content1: "Master HCL (HashiCorp Configuration Language) to define and manage cloud resources across AWS, Azure, and GCP.",
            content2: "Learn state management, modules, and workspace organization."
        },
        whatYouLearnData: [
            { title: "HCL Basics", desc: "Variables, Providers, and Resources.", icon: "bi bi-code-square" },
            { title: "State Management", desc: "Handling terraform.tfstate securely.", icon: "bi bi-database-lock" },
            { title: "Modules", desc: "Creating reusable infrastructure components.", icon: "bi bi-boxes" },
            { title: "Provisioning", desc: "Deploying resources to multiple clouds.", icon: "bi bi-cloud-arrow-up" },
            { title: "Terraform Cloud", desc: "Collaboration and remote execution.", icon: "bi bi-people" },
            { title: "Best Practices", desc: "DRY principles and security.", icon: "bi bi-shield-check" }
        ],
        courseContentData: [
            { id: "tf1", title: "Introduction", icon: "bi bi-play", defaultOpen: true, items: ["What is IaC?", "Terraform Architecture", "Installation", "First Config"] },
            { id: "tf2", title: "Core Concepts", icon: "bi bi-cpu", items: ["Variables & Outputs", "State Management", "Data Sources", "Meta-arguments"] },
            { id: "tf3", title: "Advanced Terraform", icon: "bi bi-lightning", items: ["Modules Deep Dive", "Workspaces", "Functions & Loops", "Provisioners"] },
            { id: "tf4", title: "Real-world Labs", icon: "bi bi-rocket", items: ["AWS Infrastructure Lab", "Multi-cloud Setup", "Terraform Cloud Intro", "CI/CD Integration"] }
        ],
        faqData: [
            { question: "What is IaC?", answer: "Infrastructure as Code allows you to manage servers and networks using configuration files." },
            { question: "Is Terraform free?", answer: "The open-source version is free for everyone to use." }
        ]
    },
    {
        id: 34,
        title: "Cloud DevOps Engineer",
        slug: "cloud-devops-professional",
        category: "Cloud",
        description: "Master the complete DevOps lifecycle on the cloud, from CI/CD pipelines to automated monitoring and scaling.",
        img: "/courses/Cloud DevOps.png",
        rating: "4.9",
        students: "1500",
        locked: true,
        aboutData: {
            topic: "Become a Cloud DevOps Professional",
            content1: "Learn the tools and practices used by high-performing DevOps teams in the cloud.",
            content2: "Master Jenkins, GitHub Actions, Ansible, and Cloud monitoring tools."
        },
        whatYouLearnData: [
            { title: "CI/CD Pipelines", desc: "Automate build, test, and deploy.", icon: "bi bi-arrow-repeat" },
            { title: "Ansible (IaC)", desc: "Configuration management at scale.", icon: "bi bi-gear" },
            { title: "GitHub Actions", desc: "Modern cloud-native CI/CD.", icon: "bi bi-github" },
            { title: "Monitoring", desc: "CloudWatch, ELK, and Prometheus.", icon: "bi bi-graph-up" },
            { title: "Security (DevSecOps)", desc: "Integrating security into pipelines.", icon: "bi bi-shield-check" },
            { title: "SRE Basics", desc: "Reliability and scalability principles.", icon: "bi bi-infinity" }
        ],
        courseContentData: [
            { id: "dev1", title: "DevOps Foundations", icon: "bi bi-play", defaultOpen: true, items: ["Agile vs DevOps", "SDLC Lifecycle", "Git Workflow", "Linux for DevOps"] },
            { id: "dev2", title: "Continuous Integration", icon: "bi bi-terminal", items: ["Jenkins Mastery", "GitHub Actions", "Dockerizing Pipelines", "Artifact Management"] },
            { id: "dev3", title: "Configuration Management", icon: "bi bi-gear-wide", items: ["Ansible Basics", "Playbooks & Roles", "Dynamic Inventory", "Terraform Integration"] },
            { id: "dev4", title: "Observability & SRE", icon: "bi bi-eye", items: ["Cloud Monitoring", "Log Management", "Alerting Systems", "Scalability Labs"] }
        ],
        faqData: [
            { question: "What is DevOps?", answer: "DevOps is a set of practices that combines software development and IT operations." },
            { question: "Are there hands-on labs?", answer: "Absolutely! Most of the course consists of real-world cloud deployment labs." }
        ]
    }
];

export default courses;