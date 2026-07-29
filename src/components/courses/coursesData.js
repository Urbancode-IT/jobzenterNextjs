const courses = [
    // DEVELOPMENT
    {
        id: 1,
        title: "React Native",
        slug: "react-fullstack",
        category: "Development",
        description: "Master React.js for the frontend and power it with Node.js and Express for complete full-stack web applications.",
        img: "/courses/reactNative.webp",
        rating: "4.8",
        students: "1500",
        locked: true,
        aboutData: {
            topic: "Master React Native Development",
            content1: "Our React Native training empowers developers to build cross-platform mobile applications with a single codebase, ensuring seamless performance across iOS and Android platforms. This includes real-time app development, API integration, and mobile UI/UX best practices.",
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
            { id: "r1", title: "Introduction to React Native", icon: "bi bi-window", defaultOpen: true, items: ["Overview of React Native framework", "Setting up the development environment", "Core components and architecture"] },
            { id: "r2", title: "Frontend Development with React Native", icon: "bi bi-cpu", items: ["Building UIs with built-in components (Text, View, Image, etc.)", "Styling using Flexbox and StyleSheet", "Navigation with React Navigation"] },
            { id: "r3", title: "Backend Integration & API Handling", icon: "bi bi-shield-check", items: ["Fetching data from APIs (using Axios or Fetch)", "Handling API responses and error management", "Implementing user authentication"] },
            { id: "r4", title: "Database Integration & Authentication", icon: "bi bi-database", items: ["Setting up Firebase for real-time data", "Local storage management with AsyncStorage", "Authentication methods (Firebase, OAuth)"] },
            { id: "r5", title: "Deployment & Publishing", icon: "bi bi-rocket", items: ["Preparing the app for production", "Publishing to Google Play Store and Apple App Store", "Version management and updates"] }
        ],
        faqData: [
            { question: "What is React Native?", answer: "React Native is a framework for building cross-platform mobile applications using JavaScript and React, allowing you to write code once and deploy it to both iOS and Android." },
            { question: "Why should I learn React Native?", answer: "React Native allows developers to create high-performance, native-like mobile applications using JavaScript, which reduces development time and cost for both platforms." },
            { question: "How does React Native compare to other mobile development frameworks?", answer: "Unlike Flutter or Xamarin, React Native uses React, making it easier for web developers to transition into mobile app development with a familiar JavaScript framework." },
            { question: "Can React Native be used for web development?", answer: "While React Native is designed for mobile apps, the skills learned are transferable to React for web development, as both use the same core concepts." },
            { question: "What job roles can I pursue after learning React Native?", answer: "Roles include React Native Developer, Mobile App Developer, and Fullstack Developer. React Native skills are highly sought after in the mobile app development industry." }
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
            content1: "The Java Full Stack module focuses on Spring Boot, Hibernate, REST API development, and modern frontend integration, equipping learners to build robust enterprise applications. Meanwhile, the Python Full Stack track covers Django/Flask frameworks, backend logic, database integration, and rapid application development for scalable solutions.",
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
            content1: "For JavaScript enthusiasts, we offer deep specialization in MERN Stack (MongoDB, Express.js, React, Node.js) and MEAN Stack (MongoDB, Express.js, Angular, Node.js). Learners develop end-to-end applications, mastering RESTful APIs, state management, authentication mechanisms (JWT, OAuth), and performance optimization techniques.",
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
            { id: "mern1", title: "Introduction to MERN Stack", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of MERN stack (MongoDB, Express.js, React.js, Node.js)", "Setting up the development environment", "Understanding the full-stack architecture and flow"] },
            { id: "mern2", title: "Frontend Development with React.js", icon: "bi bi-code-square", items: ["Building dynamic UIs with React components", "Managing state with hooks (useState, useEffect)", "Implementing React Router for navigation", "Styling with CSS-in-JS and popular libraries (styled-components)"] },
            { id: "mern3", title: "Backend Development with Node.js & Express.js", icon: "bi bi-server", items: ["Setting up a Node.js server with Express", "RESTful API design and CRUD operations", "Connecting Express with MongoDB using Mongoose", "Handling user authentication and JWT (JSON Web Tokens)"] },
            { id: "mern4", title: "Database Management with MongoDB", icon: "bi bi-database", items: ["Understanding MongoDB and NoSQL concepts", "Designing database schemas using Mongoose", "Querying data with MongoDB queries", "Implementing data validation and error handling"] },
            { id: "mern5", title: "Deployment & Performance Optimization", icon: "bi bi-cloud-arrow-up", items: ["Deploying the MERN stack application to cloud platforms (Heroku, AWS, etc.)", "Configuring environment variables and production settings", "Optimizing app performance (caching, lazy loading, etc.)", "Managing app scaling and handling user load"] }
        ],
        faqData: [
            { question: "What is MERN Stack Development?", answer: "MERN Stack is a JavaScript-based framework combining MongoDB, Express.js, React, and Node.js for building full-stack web applications with both front-end and back-end capabilities." },
            { question: "Why should I learn MERN Stack?", answer: "MERN Stack allows you to use JavaScript across the entire development process, making it easier to build dynamic, scalable, and real-time web applications." },
            { question: "How does MERN Stack compare to other stacks?", answer: "MERN offers a unified JavaScript environment, enabling faster development and real-time features, making it ideal for building modern web applications." },
            { question: "Can MERN Stack be used for mobile app development?", answer: "Yes, React Native allows you to build cross-platform mobile apps, sharing most of the logic from your MERN Stack projects." },
            { question: "What job roles can I pursue after learning MERN Stack?", answer: "Roles include MERN Stack Developer, Frontend Developer, and Fullstack Developer, with opportunities in startups and tech companies focusing on modern web applications." }
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
            { question: "What is MEAN Stack Development?", answer: "MEAN Stack combines MongoDB, Express.js, Angular, and Node.js to build modern, scalable, and efficient web applications. It's a full-stack JavaScript solution for both front-end and back-end development." },
            { question: "Why should I learn MEAN Stack?", answer: "Learning MEAN Stack helps you build dynamic, scalable applications with a single language, JavaScript, across the entire stack, making development faster and more efficient." },
            { question: "How does MEAN Stack differ from MERN Stack?", answer: "The main difference is that MEAN Stack uses Angular for front-end development, while MERN Stack uses React. Both are powerful, but Angular offers more opinionated structures for larger enterprise applications." },
            { question: "Can MEAN Stack be used for mobile app development?", answer: "Yes, MEAN Stack can be used for mobile app development with frameworks like Ionic that integrate with Angular for cross-platform mobile apps." },
            { question: "What career opportunities can I pursue with MEAN Stack?", answer: "After completing MEAN Stack, you can work as a MEAN Stack Developer, Frontend Developer, or Fullstack Developer, with high demand in the web development and enterprise solutions industry." }
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
            { id: "py1", title: "Introduction to Python Full Stack Development", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of Python for Full Stack Development", "Setting up the development environment (Python, Django/Flask, PostgreSQL, etc.)", "Understanding the full-stack architecture with Python"] },
            { id: "py2", title: "Frontend Development with HTML, CSS, and JavaScript", icon: "bi bi-layout-text-window", items: ["Building responsive UIs using HTML and CSS", "Introduction to JavaScript for interactivity", "Integrating front-end frameworks (e.g., React, Vue.js) with Python backends", "Using AJAX for asynchronous communication with the backend"] },
            { id: "py3", title: "Backend Development with Python (Django/Flask)", icon: "bi bi-lightning", items: ["Building RESTful APIs with Django REST Framework or Flask", "Managing user authentication and session handling (JWT, OAuth)", "Implementing CRUD operations in Python", "Working with databases using Django ORM or SQLAlchemy (PostgreSQL/MySQL)"] },
            { id: "py4", title: "Database Management and Integration", icon: "bi bi-database", items: ["Understanding SQL and NoSQL databases (PostgreSQL, MongoDB)", "Designing database schemas and relationships", "Performing queries and handling migrations in Django/Flask", "Data validation and optimization techniques"] },
            { id: "py5", title: "Deployment & Scaling", icon: "bi bi-cloud-arrow-up", items: ["Preparing a Python app for production (environment variables, logging, etc.)", "Deploying the application to cloud platforms (Heroku, AWS, DigitalOcean)", "Implementing app performance optimization techniques (caching, database indexing)", "Scaling the application for handling increased traffic"] }
        ],
        faqData: [
            { question: "What is Python Fullstack Development?", answer: "Python Fullstack Development uses Python for back-end development with frameworks like Django or Flask, and front-end development with tools like HTML, CSS, and JavaScript to build full-stack web applications." },
            { question: "Why should I learn Python Fullstack Development?", answer: "Python's simplicity and readability, combined with powerful frameworks like Django and Flask, make it an excellent choice for building scalable and secure full-stack applications efficiently." },
            { question: "How does Python Fullstack compare to other technologies?", answer: "Unlike JavaScript-based stacks like MERN or MEAN, Python Fullstack emphasizes simplicity, readability, and rapid development with a wide range of libraries and frameworks for both back-end and front-end." },
            { question: "Can Python Fullstack be used for mobile app development?", answer: "While Python is mainly used for web back-end development, tools like Kivy and BeeWare allow Python developers to build cross-platform mobile apps as well." },
            { question: "What job roles can I pursue with Python Fullstack Development?", answer: "After learning Python Fullstack, you can pursue roles such as Fullstack Developer, Backend Developer, or Python Developer in industries such as web development, data science, and software engineering." }
        ]
    },
    {
        id: 43,
        title: ".Net Fullstack Development",
        slug: "dotnet-fullstack-development",
        category: "Development",
        description: "Master .NET technologies to build robust and scalable enterprise-level applications using C#, ASP.NET Core, and SQL Server.",
        img: "/courses/dotnet.jpg",
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
            { id: "dn1", title: "Introduction to .NET Full Stack Development", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of .NET for Full Stack Development", "Setting up the development environment (Visual Studio, .NET Core, SQL Server)", "Understanding the full-stack architecture with .NET (Backend + Frontend)"] },
            { id: "dn2", title: "Frontend Development with HTML, CSS, and JavaScript", icon: "bi bi-layout-text-window", items: ["Building responsive and interactive UIs with HTML5 and CSS3", "Introduction to JavaScript and modern JS frameworks (React.js or Angular)", "Integrating frontend with .NET backend using AJAX and RESTful APIs", "Implementing form validation and handling user inputs"] },
            { id: "dn3", title: "Backend Development with ASP.NET Core", icon: "bi bi-cpu", items: ["Building web APIs with ASP.NET Core", "Implementing CRUD operations and data handling", "User authentication and authorization with Identity and JWT", "Dependency Injection and Middleware for clean architecture"] },
            { id: "dn4", title: "Database Integration with Entity Framework Core", icon: "bi bi-database", items: ["Setting up SQL Server and connecting to .NET backend", "Using Entity Framework Core for ORM (Object Relational Mapping)", "Database migrations and data seeding", "Writing complex queries and optimizing database performance"] },
            { id: "dn5", title: "Deployment & Cloud Integration", icon: "bi bi-cloud-arrow-up", items: ["Preparing .NET Core applications for production", "Deploying to cloud platforms (Azure, AWS, Docker containers)", "Continuous Integration and Continuous Deployment (CI/CD) pipelines", "Optimizing application performance and scaling for production"] }
        ],
        faqData: [
            { question: "What is .NET Angular Full Stack Development?", answer: ".NET Angular Full Stack Development combines ASP.NET Core (backend) with Angular (frontend) to build scalable, high-performance web applications. It enables developers to create secure REST APIs, dynamic user interfaces, and enterprise-grade solutions using Microsoft technologies." },
            { question: "What skills are required to learn .NET Angular development?", answer: "To become a .NET Angular developer, you should learn C#, ASP.NET Core, Web API development, Entity Framework, Angular (TypeScript, RxJS), HTML, CSS, JavaScript, along with database management (SQL Server) and version control tools like Git." },
            { question: "Is .NET Angular suitable for beginners?", answer: "Yes, .NET Angular is suitable for beginners with basic programming knowledge. With structured training, hands-on projects, and real-time application development, learners can gradually master both frontend and backend technologies." },
            { question: "What job roles can I get after learning .NET Angular?", answer: "After completing .NET Angular training, you can apply for roles such as Full Stack Developer, .NET Developer, Angular Developer, Software Engineer, and Web Application Developer in product-based and service-based companies." },
            { question: "Why is .NET Angular widely used in enterprises?", answer: ".NET Angular is widely used because it offers robust security, scalability, maintainability, and seamless integration. ASP.NET Core provides high-performance backend services, while Angular enables responsive and dynamic front-end applications, making it ideal for enterprise-level solutions." }
        ]
    },

    // TESTING
    {
        id: 44,
        title: "Java",
        slug: "java-for-test-automation",
        category: "Testing",
        description: "Learn core Java the way automation engineers use it—OOP, collections, and patterns that power Selenium, TestNG, and CI-ready test code.",
        img: "/courses/javaFullstack.webp",
        rating: "4.7",
        students: "720",
        locked: true,
        aboutData: {
            topic: "Java for Test Automation",
            content1: "Build a solid Java foundation focused on readable, maintainable automation: classes, interfaces, exceptions, and collections applied to real test scenarios—not generic theory.",
            content2: "Pair this track with Selenium or Playwright courses to move from scripts to frameworks."
        },
        whatYouLearnData: [
            { title: "Java Basics", desc: "Syntax, loops, methods, and packages.", icon: "bi bi-braces" },
            { title: "OOP", desc: "Classes, inheritance, polymorphism.", icon: "bi bi-diagram-3" },
            { title: "Collections", desc: "Lists, maps, and iterators for test data.", icon: "bi bi-collection" },
            { title: "Exceptions", desc: "Try/catch and meaningful failures.", icon: "bi bi-exclamation-triangle" },
            { title: "Build Tools", desc: "Maven basics for test projects.", icon: "bi bi-box-seam" },
            { title: "TestNG Intro", desc: "Annotations and test structure.", icon: "bi bi-play-circle" }
        ],
        courseContentData: [
            { id: "jt1", title: "Java Fundamentals for QA", icon: "bi bi-info-circle", defaultOpen: true, items: ["Setting up JDK, IDE, and project structure for automation", "Variables, data types, operators, and control flow", "Methods, constructors, and code organization", "Packages, access modifiers, and clean coding habits", "Debugging techniques for failing tests"] },
            { id: "jt2", title: "Object-Oriented Programming", icon: "bi bi-box", items: ["Classes, objects, encapsulation, and reusability", "Inheritance and polymorphism in test utilities", "Interfaces and abstract classes for frameworks", "Design patterns commonly used in automation (e.g., Singleton, Factory)", "Refactoring duplicated test code"] },
            { id: "jt3", title: "Collections & Data Handling", icon: "bi bi-list-ul", items: ["Lists, Sets, and Maps for parameterized tests", "Reading test data from CSV, Excel, or JSON", "Iterators and streams for batch validations", "Comparing expected vs. actual collections", "Avoiding brittle hard-coded data"] },
            { id: "jt4", title: "Exceptions, Logging & Reporting Hooks", icon: "bi bi-bug", items: ["Try/catch/finally in automation flows", "Custom exceptions for clearer failures", "Logging meaningful steps (SLF4J / Log4j basics)", "Integrating with reporting libraries", "Best practices for failure screenshots and traces"] },
            { id: "jt5", title: "Maven, TestNG & Git Basics", icon: "bi bi-git", items: ["Maven project layout for test suites", "Dependencies: Selenium, TestNG, drivers", "TestNG annotations, suites, and parallel hints", "Git workflow for test code reviews", "Running tests from CLI and CI shells"] }
        ],
        faqData: [
            { question: "Is this Java course only for testers?", answer: "Yes—the emphasis is on Java skills directly used in test automation: readable structure, data handling, and integration with tools like TestNG and Selenium." },
            { question: "Do I need prior programming experience?", answer: "Basic logical thinking helps; we start from core syntax and build toward automation-oriented examples." },
            { question: "How does this relate to Selenium?", answer: "Selenium WebDriver scripts are usually written in Java; this course gives you the language foundation before or alongside Selenium training." },
            { question: "Will I build projects?", answer: "You will practice with exercises modeled on real QA scenarios: utilities, data-driven patterns, and maintainable test modules." },
            { question: "What roles does this support?", answer: "QA Automation Engineer, SDET, and Test Engineer roles that expect Java-based frameworks." }
        ]
    },
    {
        id: 45,
        title: "Selenium",
        slug: "selenium",
        category: "Testing",
        description: "Hands-on Selenium WebDriver—locators, waits, actions, Page Object Model, and scalable browser automation for regression suites.",
        img: "/courses/selenium.png",
        rating: "4.8",
        students: "880",
        locked: true,
        aboutData: {
            topic: "Selenium WebDriver Deep Dive",
            content1: "From first script to maintainable framework pieces: master locators, synchronization, cross-browser runs, and reporting so your suites stay stable as the UI changes.",
            content2: "Pairs naturally with our Java and TypeScript tracks for stronger typed automation."
        },
        whatYouLearnData: [
            { title: "Locators", desc: "CSS, XPath, and resilient strategies.", icon: "bi bi-bullseye" },
            { title: "Waits", desc: "Implicit, explicit, fluent patterns.", icon: "bi bi-hourglass-split" },
            { title: "Actions", desc: "Keyboard, mouse, and frames.", icon: "bi bi-hand-index" },
            { title: "POM", desc: "Page Object and reusable layers.", icon: "bi bi-layout-text-window" },
            { title: "Grid", desc: "Selenium Grid / parallel basics.", icon: "bi bi-grid-3x3" },
            { title: "CI Runs", desc: "Headless and pipeline-friendly execution.", icon: "bi bi-arrow-repeat" }
        ],
        courseContentData: [
            { id: "se1", title: "Selenium Setup & First Scripts", icon: "bi bi-info-circle", defaultOpen: true, items: ["WebDriver architecture and browser drivers", "Opening URLs, navigation, and basic interactions", "Finding elements: ID, name, class, link text", "Taking screenshots on failure", "Project layout for growing test suites"] },
            { id: "se2", title: "Advanced Locators & Synchronization", icon: "bi bi-search", items: ["CSS selectors vs. XPath: when to use which", "Handling dynamic IDs and shadow DOM awareness", "Explicit waits and expected conditions", "Avoiding flaky tests with timing discipline", "iframes, alerts, and multiple windows"] },
            { id: "se3", title: "Actions, Forms & Data-Driven Tests", icon: "bi bi-input-cursor-text", items: ["Actions API for hover, drag-drop, keyboard", "Working with dropdowns, calendars, and uploads", "Parameterizing tests with external data", "Assertions that explain failures clearly", "Tagging and grouping scenarios"] },
            { id: "se4", title: "Framework Patterns", icon: "bi bi-boxes", items: ["Page Object Model structure", "Base classes and driver management", "Listeners and hooks for reporting", "Parallel execution considerations", "Integrating with TestNG or JUnit"] },
            { id: "se5", title: "Cross-Browser, Grid & Maintenance", icon: "bi bi-globe2", items: ["Cross-browser configuration", "Introduction to Selenium Grid concepts", "Retry strategies and stability checks", "Version control hygiene for locators", "CI-friendly headless execution"] }
        ],
        faqData: [
            { question: "Is Selenium still relevant?", answer: "Yes—many teams still rely on Selenium WebDriver for mature browser automation, especially with Java ecosystems and large legacy suites." },
            { question: "Java or TypeScript with Selenium?", answer: "Java is still dominant in enterprise QA; TypeScript is growing with modern stacks. Choose based on your stack—or learn both over time." },
            { question: "Do you cover Selenium 4?", answer: "Content is aligned with current Selenium 4 concepts including improved W3C WebDriver usage and modern driver management." },
            { question: "What if my application is highly dynamic?", answer: "We focus on resilient locators, waits, and framework patterns to reduce breakage when the UI changes." },
            { question: "Career outcomes?", answer: "Roles such as Automation Tester, QA Automation Engineer, and SDET frequently expect strong Selenium skills." }
        ]
    },
    {
        id: 46,
        title: "Playwright",
        slug: "playwright",
        category: "Testing",
        description: "Fast, reliable end-to-end tests with Playwright—multi-browser, auto-waiting, traces, and CI-ready pipelines.",
        img: "/courses/softwareTesting.webp",
        rating: "4.8",
        students: "640",
        locked: true,
        aboutData: {
            topic: "Modern E2E with Playwright",
            content1: "Learn Playwright’s developer-friendly API, built-in waits, tracing, and codegen—so you ship stable tests without fighting synchronization edge cases.",
            content2: "Ideal alongside TypeScript for strongly typed specs and scalable fixtures."
        },
        whatYouLearnData: [
            { title: "Core API", desc: "Pages, contexts, and fixtures.", icon: "bi bi-window" },
            { title: "Selectors", desc: "Role, text, and resilient queries.", icon: "bi bi-funnel" },
            { title: "Tracing", desc: "Screenshots, video, and debug.", icon: "bi bi-camera-video" },
            { title: "Parallelism", desc: "Workers and sharding basics.", icon: "bi bi-lightning" },
            { title: "API Testing", desc: "Combine UI + API checks.", icon: "bi bi-plug" },
            { title: "CI/CD", desc: "Docker-friendly test runs.", icon: "bi bi-cloud-arrow-up" }
        ],
        courseContentData: [
            { id: "pw1", title: "Playwright Basics", icon: "bi bi-info-circle", defaultOpen: true, items: ["Installing Playwright and browsers", "First test: navigation, clicks, and assertions", "Auto-wait architecture vs. manual sleeps", "Project structure and configuration", "Running tests in headed and headless modes"] },
            { id: "pw2", title: "Selectors, Fixtures & POM", icon: "bi bi-layout-text-window", items: ["Recommended selector strategies for stability", "Fixtures for login and shared setup", "Page objects without brittleness", "Parameterized tests and data tables", "Handling multiple tabs and popups"] },
            { id: "pw3", title: "Debugging & Reporting", icon: "bi bi-bug", items: ["Trace viewer and step-through debugging", "Screenshots and video on failure", "HTML report overview", "Annotating tests for clarity", "Flake reduction checklist"] },
            { id: "pw4", title: "API & Network", icon: "bi bi-wifi", items: ["Mocking and intercepting network calls", "Combining API checks with UI flows", "Basic performance awareness in E2E", "Environment-specific configs", "Secrets and config hygiene"] },
            { id: "pw5", title: "CI, Parallelism & Best Practices", icon: "bi bi-stars", items: ["Parallel workers and sharding concepts", "Docker and CI pipeline integration", "Tagging smoke vs. regression", "Versioning tests with application releases", "Maintaining fast feedback loops"] }
        ],
        faqData: [
            { question: "Playwright vs. Selenium?", answer: "Playwright offers a modern unified API, strong auto-waiting, and excellent diagnostics; Selenium remains widespread in Java shops. Many teams use both over time." },
            { question: "Do I need TypeScript?", answer: "Not strictly—Playwright supports JavaScript—but TypeScript improves maintainability for larger suites." },
            { question: "Can I test mobile web?", answer: "Playwright targets browsers; mobile native apps are out of scope here, but responsive web testing is covered." },
            { question: "Is this suitable for beginners?", answer: "Basic HTML/DOM awareness helps. We start from first scripts and progress to patterns." },
            { question: "Job relevance?", answer: "Playwright is in strong demand for SDET and modern QA automation roles." }
        ]
    },
    {
        id: 47,
        title: "TypeScript",
        slug: "typescript",
        category: "Testing",
        description: "TypeScript essentials for test engineers—types, interfaces, async/await, and patterns that make Playwright and modern automation suites maintainable.",
        img: "/courses/mern.webp",
        rating: "4.7",
        students: "590",
        locked: true,
        aboutData: {
            topic: "TypeScript for Test Code",
            content1: "Write safer automation with static typing: catch mistakes before runtime, document intent with interfaces, and scale fixtures across large Playwright or JS-based test repos.",
            content2: "Designed to pair with Playwright and JavaScript-first automation stacks."
        },
        whatYouLearnData: [
            { title: "Types & Interfaces", desc: "Shape data and API contracts.", icon: "bi bi-braces" },
            { title: "Async/Await", desc: "Clean asynchronous tests.", icon: "bi bi-arrow-left-right" },
            { title: "Modules", desc: "Imports, exports, and structure.", icon: "bi bi-folder2-open" },
            { title: "Generics", desc: "Reusable helpers for test data.", icon: "bi bi-boxes" },
            { title: "Tooling", desc: "tsconfig, ESLint basics.", icon: "bi bi-gear" },
            { title: "Patterns", desc: "Fixtures and test doubles intro.", icon: "bi bi-puzzle" }
        ],
        courseContentData: [
            { id: "ts1", title: "TypeScript Foundations", icon: "bi bi-info-circle", defaultOpen: true, items: ["JS vs. TS for automation teams", "Installing and compiling TypeScript", "Basic types, unions, and literals", "Functions and arrow syntax in tests", "Strict mode mindset"] },
            { id: "ts2", title: "Interfaces, Types & Classes", icon: "bi bi-filetype-ts", items: ["Interfaces for API response shapes", "Type aliases vs. interfaces", "Classes and dependency-friendly design", "Enums and const maps for test states", "Avoiding any in production test code"] },
            { id: "ts3", title: "Async Testing Patterns", icon: "bi bi-hourglass-split", items: ["Promises and async/await in specs", "Error handling that preserves traces", "Sequential vs. parallel safe patterns", "Timeouts and retries concepts", "Working with Playwright Test types"] },
            { id: "ts4", title: "Modules, Tooling & Quality", icon: "bi bi-wrench", items: ["ES modules in test repos", "tsconfig paths for helpers", "ESLint + TypeScript basics", "Formatting and team conventions", "Refactoring safely with the compiler"] },
            { id: "ts5", title: "Scaling Test Suites", icon: "bi bi-diagram-3", items: ["Shared fixtures and typed context", "Generic utilities for data builders", "Mocking boundaries with types", "Documentation through types", "Preparing for CI type-check gates"] }
        ],
        faqData: [
            { question: "I know JavaScript—is this redundant?", answer: "TypeScript adds structure that pays off in larger automation codebases; you’ll move faster with fewer runtime surprises." },
            { question: "Is this only for Playwright?", answer: "Patterns apply to any TypeScript test stack; examples align with modern E2E tooling." },
            { question: "Do I need OOP in JS first?", answer: "We cover what you need for typed tests; heavy app development patterns are out of scope." },
            { question: "Compiler vs. runtime errors?", answer: "You’ll learn to let the compiler flag contract mismatches between helpers, fixtures, and API payloads." },
            { question: "Career benefit?", answer: "Teams hiring SDETs for JS/TS stacks expect solid TypeScript fundamentals." }
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
            { id: "mb1", title: "Introduction to Medical Billing", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of the healthcare industry and medical billing process", "Understanding the role of a medical biller and coder", "Key terms and concepts: CPT codes, ICD-10, HCPCS, NPI, and EDI", "Overview of medical insurance types: private insurance, Medicare, Medicaid", "Understanding payer systems and insurance verification"] },
            { id: "mb2", title: "Medical Billing Codes & Classifications", icon: "bi bi-journal-text", items: ["Introduction to the ICD-10 coding system: Diagnosis codes", "Understanding CPT (Current Procedural Terminology) codes: Medical procedures and services", "HCPCS codes: Supplies, equipment, and additional services", "Modifiers: Understanding and applying CPT and HCPCS modifiers", "Mapping diagnosis codes to procedures and treatments for billing"] },
            { id: "mb3", title: "Insurance Verification & Claims Submission", icon: "bi bi-file-text", items: ["Verifying patient insurance coverage and benefits", "Understanding the importance of pre-certification and prior authorization", "Claim forms: Completing CMS-1500 and UB-04 forms", "Submitting claims to insurance companies using electronic (EDI) and paper methods", "Tracking claim status and managing claim denials"] },
            { id: "mb4", title: "Claims Management & Payment Posting", icon: "bi bi-wallet", items: ["Managing rejected or denied claims and the appeal process", "Payment posting: Recording payments and adjustments", "Handling remittance advice (RA) and Explanation of Benefits (EOB)", "Balancing accounts and maintaining accurate patient billing records", "Applying patient payments, co-pays, and deductibles to their accounts"] },
            { id: "mb5", title: "Compliance, Regulations, and Best Practices", icon: "bi bi-shield-check", items: ["Understanding HIPAA regulations and patient confidentiality", "Navigating fraud and abuse laws (False Claims Act, Anti-Kickback Statute)", "Billing compliance with payer policies and government regulations", "Best practices for ensuring accurate coding and billing processes", "Continuous education on updates to medical billing codes, regulations, and payer policies"] }
        ],
        faqData: [
            { question: "What is Medical Billing?", answer: "Medical Billing is the process of submitting and following up on claims with health insurance companies to receive payment for healthcare services provided to patients. It ensures proper reimbursement for healthcare providers." },
            { question: "Why should I learn Medical Billing?", answer: "Learning Medical Billing helps you understand insurance policies, coding systems, and billing practices, which are essential skills for healthcare administration, ensuring timely and accurate payments." },
            { question: "What tools are used in Medical Billing?", answer: "Common tools used in Medical Billing include specialized software such as EZClaim, PracticeSuite, and Kareo, which help streamline the claim process, billing, and insurance verification." },
            { question: "What are the career opportunities after completing Medical Billing?", answer: "After completing Medical Billing, you can work as a Medical Biller, Billing Coordinator, or Healthcare Administrator in hospitals, clinics, or insurance companies handling billing and claims." },
            { question: "How does Medical Billing relate to Medical Coding?", answer: "While Medical Coding involves translating diagnoses and procedures into codes, Medical Billing uses these codes to submit claims to insurance companies for payment. Both are crucial in the healthcare reimbursement process." }
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
            { id: "mc1", title: "Introduction to Medical Coding", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of the healthcare industry and the role of medical coding", "Understanding the differences between medical coding and medical billing", "Key terms and concepts in medical coding: Codes, modifiers, and medical terminology", "Introduction to coding systems: ICD-10, CPT, and HCPCS", "The role of a medical coder in the healthcare team"] },
            { id: "mc2", title: "ICD-10 Coding System", icon: "bi bi-journal", items: ["Introduction to ICD-10 (International Classification of Diseases, 10th Revision)", "Structure of ICD-10 codes: Categories, subcategories, and codes", "Diagnosing and classifying diseases and conditions using ICD-10", "Coding for acute, chronic, and unspecified conditions", "Guidelines for accurate ICD-10 coding (using the Alphabetic Index and Tabular List)"] },
            { id: "mc3", title: "CPT (Current Procedural Terminology) Coding System", icon: "bi bi-file-medical", items: ["Introduction to CPT codes for medical procedures and services", "Structure and categories of CPT codes: Evaluation and Management (E/M), Surgery, Radiology, Pathology, and Medicine", "Understanding the different code types: Category I, II, and III", "Guidelines for accurate CPT code selection based on medical records", "Using modifiers in CPT coding to provide additional information"] },
            { id: "mc4", title: "HCPCS (Healthcare Common Procedure Coding System)", icon: "bi bi-box-seam", items: ["Understanding HCPCS codes for equipment, supplies, and services", "Differentiating between Level I and Level II HCPCS codes", "Level II codes: Durable medical equipment (DME), ambulatory services, and non-physician services", "Application of HCPCS codes in healthcare settings", "Common HCPCS codes for commonly used medical supplies and services"] },
            { id: "mc5", title: "Coding Compliance and Best Practices", icon: "bi bi-shield-check", items: ["Understanding the importance of compliance in medical coding", "Adhering to coding guidelines and payer-specific requirements", "Avoiding coding errors: Upcoding, downcoding, and unbundling", "Documentation requirements for accurate coding: The importance of medical records and patient history", "Staying updated with coding changes: Annual revisions to ICD-10, CPT, and HCPCS"] }
        ],
        faqData: [
            { question: "What is Medical Coding?", answer: "Medical Coding is the process of transforming healthcare diagnoses, procedures, and medical services into universal alphanumeric codes, which are essential for insurance claims and healthcare documentation." },
            { question: "Why should I learn Medical Coding?", answer: "Learning Medical Coding equips you with the skills to convert medical information into standardized codes, which is essential for healthcare reimbursement and accurate medical record-keeping." },
            { question: "What coding systems are used in Medical Coding?", answer: "Common coding systems include ICD-10 (International Classification of Diseases), CPT (Current Procedural Terminology), and HCPCS (Healthcare Common Procedure Coding System), which are used for diagnostic and procedural coding." },
            { question: "What are the career opportunities after learning Medical Coding?", answer: "After completing Medical Coding, you can work as a Certified Medical Coder, Coding Specialist, or Healthcare Compliance Officer in hospitals, insurance companies, and private practices." },
            { question: "Is Medical Coding related to Medical Billing?", answer: "Yes, Medical Coding and Medical Billing are closely related. While coding involves translating medical terms into codes, billing uses these codes to submit claims to insurance companies for payment." }
        ]
    },
    // {
    //     id: 37,
    //     title: "Clinical Research",
    //     slug: "clinical-research",
    //     category: "Healthcare",
    //     description: "Master the processes of clinical trials and drug development. Learn about GCP, regulatory affairs, and trial management.",
    //     img: "/courses/.webp",
    //     rating: "4.7",
    //     students: "400",
    //     locked: true,
    //     aboutData: {
    //         topic: "Clinical Trial Management",
    //         content1: "Learn how new drugs and medical devices are tested for safety and efficacy in humans.",
    //         content2: "Master the regulatory requirements and ethics involved in clinical research."
    //     },
    //     whatYouLearnData: [
    //         { title: "GCP Guidelines", desc: "Good Clinical Practice standards.", icon: "bi bi-shield-check" },
    //         { title: "Trial Design", desc: "Phases of clinical trials (I-IV).", icon: "bi bi-diagram-3" },
    //         { title: "Drug Development", desc: "The journey from lab to market.", icon: "bi bi-capsule" },
    //         { title: "Regulatory Affairs", desc: "FDA and international regulations.", icon: "bi bi-file-earmark-check" },
    //         { title: "Pharmacovigilance", desc: "Monitoring drug safety.", icon: "bi bi-eye" },
    //         { title: "Trial Ops", desc: "Managing sites and data.", icon: "bi bi-gear" }
    //     ],
    //     courseContentData: [
    //         { id: "cr1", title: "Introduction to Clinical Research", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of clinical research and its importance in healthcare", "Phases of clinical trials: Preclinical, Phase I, II, III, IV", "Types of clinical trials: Interventional, observational, and registries", "Ethical considerations in clinical research: Informed consent, confidentiality, and patient safety", "Regulatory bodies: FDA, EMA, ICH-GCP, and their role in clinical research"] },
    //         { id: "cr2", title: "Study Design & Protocol Development", icon: "bi bi-diagram-3", items: ["Understanding different study designs: Randomized controlled trials (RCT), cohort studies, case-control studies", "Developing a clinical trial protocol: Objectives, design, methodology, and statistical analysis plan", "Defining inclusion and exclusion criteria for participant selection", "Sample size calculation and power analysis", "Key elements of a protocol: Safety monitoring, endpoints, and outcome measures"] },
    //         { id: "cr3", title: "Clinical Trial Management & Operations", icon: "bi bi-gear", items: ["Roles and responsibilities in a clinical trial: Investigators, coordinators, monitors, and sponsors", "Site selection and initiation: Identifying and preparing clinical sites for research", "Patient recruitment and retention strategies", "Data management: Collection, storage, and analysis of trial data", "Monitoring and auditing clinical trials for compliance with GCP (Good Clinical Practice)"] },
    //         { id: "cr4", title: "Regulatory Compliance & Documentation", icon: "bi bi-file-lock", items: ["Regulatory requirements for clinical trials: IND (Investigational New Drug), IRB (Institutional Review Board) approval", "Understanding the role of Institutional Review Boards (IRBs) and ethics committees", "Clinical trial documentation: Case Report Forms (CRFs), source documents, and adverse event reports", "Good Clinical Practice (GCP) guidelines and their importance", "Submission of clinical trial data to regulatory bodies and ethics committees"] },
    //         { id: "cr5", title: "Data Analysis & Reporting in Clinical Research", icon: "bi bi-bar-chart", items: ["Statistical methods used in clinical trials: Descriptive statistics, hypothesis testing, p-values, and confidence intervals", "Analyzing safety and efficacy data: Understanding treatment effects, adverse events, and endpoints", "Interpreting clinical trial results and making recommendations", "Writing clinical trial reports: Final study report, manuscripts for publication", "Post-market surveillance and Phase IV studies: Long-term safety monitoring and additional research"] }
    //     ],
    //     faqData: [
    //         { question: "Who can join this course?", answer: "Graduates in Life Sciences, Pharmacy, or Medicine are ideal candidates." },
    //         { question: "What are the job roles?", answer: "CRA (Clinical Research Associate), CRC (Coordinator), and Data Manager." }
    //     ]
    // },
    // CCNA
    {
        id: 40,
        title: "CCNA Network",
        slug: "ccnp-network",
        category: "CCNA",
        description: "Master advanced routing and switching. Prepare for the CCNA Enterprise certification.",
        img: "/courses/ccnp.jpg",
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
            { id: "cn1", title: "Advanced Routing and Switching Concepts", icon: "bi bi-diagram-3", defaultOpen: true, items: ["Advanced IP routing protocols: OSPF, EIGRP, and BGP", "OSPF (Open Shortest Path First) and its advanced configuration: Area types, LSAs, OSPF Path Selection", "EIGRP (Enhanced Interior Gateway Routing Protocol): Advanced features, route summarization, and unequal load balancing", "BGP (Border Gateway Protocol): Configuration and operation, route maps, filtering, and policies", "Implementing IPv6 routing and addressing with OSPFv3 and EIGRPv6"] },
            { id: "cn2", title: "Layer 2 Technologies and Switching", icon: "bi bi-arrow-left-right", items: ["Advanced switching concepts: VLANs, trunking, and VTP (VLAN Trunking Protocol)", "Spanning Tree Protocol (STP) enhancements: Rapid Spanning Tree (RSTP), MSTP (Multiple Spanning Tree Protocol)", "EtherChannel (Link Aggregation): Configuration, troubleshooting, and load balancing", "Switch Security: Port security, 802.1X authentication, DHCP snooping, Dynamic ARP Inspection (DAI)", "Implementing and troubleshooting private VLANs (PVLANs)"] },
            { id: "cn3", title: "Network Security and VPN Technologies", icon: "bi bi-shield-lock", items: ["Implementing network security features: ACLs (Access Control Lists), NAT (Network Address Translation)", "VPN technologies: Site-to-site and remote-access VPNs, IPsec, GRE (Generic Routing Encapsulation)", "Configuring and securing Cisco ASA (Adaptive Security Appliance) firewalls", "AAA (Authentication, Authorization, and Accounting) protocols: RADIUS, TACACS+", "Implementing secure remote access: SSL VPN, AnyConnect client"] },
            { id: "cn4", title: "Quality of Service (QoS) and Traffic Management", icon: "bi bi-graph-up", items: ["Understanding QoS concepts: Bandwidth management, traffic shaping, and policing", "Configuring QoS on Cisco routers and switches using tools like CBWFQ (Class-Based Weighted Fair Queuing) and LLQ (Low Latency Queuing)", "Implementing traffic prioritization and congestion management", "QoS in MPLS (Multiprotocol Label Switching) networks", "Troubleshooting QoS issues in production environments"] },
            { id: "cn5", title: "Network Troubleshooting and Automation", icon: "bi bi-code-slash", items: ["Advanced troubleshooting techniques: Using Cisco tools like ping, traceroute, and show commands", "Troubleshooting routing and switching issues in complex networks", "Network automation with Cisco DNA Center and SD-WAN (Software-Defined WAN)", "Introduction to Python for network automation and scripting", "Implementing and configuring Cisco Network Programmability solutions (NetFlow, SNMP, Cisco ONE)"] }
        ],
        faqData: [
            { question: "What is CCNP Network?", answer: "CCNP Network is an advanced certification designed for professionals with experience in networking. It focuses on complex routing and switching configurations, preparing you for the CCNP Enterprise certification." },
            { question: "What skills will I gain in CCNP Network?", answer: "The CCNP course covers advanced routing protocols, network security, troubleshooting, and QoS (Quality of Service) configurations for enterprise-level networks." },
            { question: "Why should I pursue CCNP Network certification?", answer: "CCNP certification demonstrates expertise in managing complex networks, which is highly sought after by organizations looking for skilled network engineers." },
            { question: "What are the career benefits of CCNP certification?", answer: "After completing CCNP Network, you can advance to roles like Senior Network Engineer, Network Architect, or Network Consultant, enhancing career prospects in enterprise networking." },
            { question: "What are the prerequisites for the CCNP Network course?", answer: "Before starting CCNP, it's recommended to have a CCNA certification or equivalent knowledge in networking concepts." }
        ]
    },
    {
        id: 42,
        title: "Ethical Hacking",
        slug: "ethical-hacking",
        category: "CCNA",
        description: "Think like a hacker to build better defenses. Learn vulnerability assessment and penetration testing.",
        img: "/courses/ethicalHacking.webp",
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
            { id: "eh1", title: "Introduction to Ethical Hacking", icon: "bi bi-info-circle", defaultOpen: true, items: ["Overview of ethical hacking and its importance in cybersecurity", "Differences between ethical hacking, black-hat, and white-hat hacking", "The role of ethical hackers in identifying vulnerabilities before malicious hackers exploit them", "Legal and ethical considerations: Penetration testing authorization and scope", "Key ethical hacking methodologies and frameworks (e.g., OWASP, PTES)"] },
            { id: "eh2", title: "Footprinting and Reconnaissance", icon: "bi bi-search", items: ["Information gathering: Techniques for footprinting (e.g., DNS queries, WHOIS, Google dorks)", "Passive and active reconnaissance methods: Scanning public sources for data", "Tools for footprinting and reconnaissance: Nmap, Maltego, and Shodan", "Identifying attack surfaces: Websites, network infrastructure, and people (social engineering)", "Reconnaissance countermeasures: How organizations defend against footprinting"] },
            { id: "eh3", title: "Scanning and Enumeration", icon: "bi bi-broadcast", items: ["Network scanning techniques: Discovering active devices, ports, and services (using Nmap, Netcat)", "Vulnerability scanning: Identifying known vulnerabilities (using Nessus, OpenVAS, Nexpose)", "Enumeration techniques: Extracting information from active systems, services, and networks", "Footprinting vs. scanning: Transitioning from reconnaissance to deeper scanning", "Ethical considerations and responsible scanning practices"] },
            { id: "eh4", title: "Exploitation and Penetration Testing", icon: "bi bi-terminal", items: ["Understanding exploitation and the different stages of a penetration test", "Exploit development: Common vulnerabilities (buffer overflow, SQL injection, cross-site scripting)", "Post-exploitation techniques: Maintaining access, privilege escalation, and data exfiltration", "Hands-on exploitation tools: Metasploit, Burp Suite, and Wireshark", "Reporting and documenting findings in a penetration test, including risk assessment and mitigation strategies"] },
            { id: "eh5", title: "Web Application and Network Security", icon: "bi bi-shield-lock", items: ["Web application security: Identifying vulnerabilities like SQL injection, Cross-Site Scripting (XSS), and Cross-Site Request Forgery (CSRF)", "Network penetration testing: Identifying and exploiting network vulnerabilities (e.g., ARP spoofing, man-in-the-middle attacks)", "Wireless network security: Cracking WEP/WPA, rogue access points, and defending against wireless threats", "Social engineering attacks: Phishing, vishing, and pretexting", "Best practices for defending against common attacks: Web Application Firewalls (WAF), VPNs, and strong encryption"] }
        ],
        faqData: [
            { question: "What is Ethical Hacking?", answer: "Ethical Hacking involves testing and securing systems, networks, and applications by simulating attacks. The goal is to identify vulnerabilities before malicious hackers can exploit them." },
            { question: "Why should I learn Ethical Hacking?", answer: "Learning Ethical Hacking allows you to understand the mindset of hackers, helping organizations defend their networks and sensitive data against cyber threats." },
            { question: "What tools are used in Ethical Hacking?", answer: "Common tools include Kali Linux, Metasploit, Wireshark, Nmap, and Burp Suite, which help identify vulnerabilities and test system security." },
            { question: "How does Ethical Hacking enhance career prospects?", answer: "Ethical hackers are highly sought after in industries such as IT security, penetration testing, and cybersecurity. Roles include Penetration Tester, Security Analyst, and Ethical Hacker." },
            { question: "Is Ethical Hacking legal?", answer: "Yes, ethical hacking is legal when performed with permission from the organization being tested. Ethical hackers work within the boundaries of legal and ethical guidelines." }
        ]
    },
    {
        id: 26,
        title: "Cyber Security",
        slug: "cyber-security",
        category: "CCNA",
        description: "Comprehensive cybersecurity training covering defense strategies, incident response, and security operations.",
        img: "/courses/cyberSecurity.webp",
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
            { id: "cs1", title: "Introduction to Cybersecurity", icon: "bi bi-shield-lock", defaultOpen: true, items: ["Understanding cybersecurity and its importance in the digital age", "Key concepts: Confidentiality, Integrity, Availability (CIA Triad)", "Types of cyber threats: Malware, phishing, DDoS, insider threats, APTs (Advanced Persistent Threats)", "Cybersecurity policies and frameworks: NIST, ISO 27001, CIS Controls", "The role of cybersecurity professionals and ethical hacking in protecting organizations"] },
            { id: "cs2", title: "Network Security", icon: "bi bi-diagram-3", items: ["Securing network devices: Firewalls, routers, switches, and intrusion detection/prevention systems (IDS/IPS)", "Network security protocols: SSL/TLS, IPsec, and VPNs", "Segmentation and isolation: VLANs, DMZ, and Zero Trust Architecture", "Monitoring network traffic: Packet analysis with Wireshark, anomaly detection", "Defending against network attacks: DoS/DDoS, Man-in-the-Middle (MITM), and IP spoofing"] },
            { id: "cs3", title: "Application Security", icon: "bi bi-code-slash", items: ["Secure Software Development Life Cycle (SDLC)", "Web application vulnerabilities: SQL injection, Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and more", "Secure coding practices and common security vulnerabilities (OWASP Top 10)", "Code review, static and dynamic analysis tools (e.g., SonarQube, Burp Suite)", "Application security testing: Penetration testing, fuzz testing, and vulnerability scanning"] },
            { id: "cs4", title: "Endpoint Security", icon: "bi bi-laptop", items: ["Defending endpoints: Desktops, laptops, mobile devices, and IoT devices", "Endpoint security solutions: Antivirus, anti-malware, EDR (Endpoint Detection and Response)", "Managing device encryption and data protection: Full disk encryption (BitLocker, FileVault)", "Implementing access controls: Multi-factor authentication (MFA), role-based access control (RBAC)", "Protecting against malware and ransomware: Identification, containment, and remediation"] },
            { id: "cs5", title: "Incident Response and Disaster Recovery", icon: "bi bi-exclamation-triangle", items: ["Incident response process: Preparation, detection, containment, eradication, recovery, and lessons learned", "Tools for incident detection and forensics: SIEM (Security Information and Event Management), Sysmon, and Splunk", "Conducting root cause analysis and impact assessment", "Disaster recovery planning: Business Continuity, Recovery Time Objective (RTO), and Recovery Point Objective (RPO)", "Best practices for securing backup systems and ensuring data integrity in case of a cyber incident"] }
        ],
        faqData: [
            { question: "What is Cyber Security?", answer: "Cyber Security involves the practice of protecting systems, networks, and programs from digital attacks. It focuses on data protection, malware prevention, and securing network infrastructure." },
            { question: "Why is Cyber Security important?", answer: "With increasing digital threats, cyber security is crucial to prevent attacks like data breaches, identity theft, and ransomware. It ensures the confidentiality, integrity, and availability of critical data." },
            { question: "What topics are covered in Cyber Security?", answer: "The course covers topics like network security, cryptography, ethical hacking, incident response, and risk management." },
            { question: "What career opportunities can I pursue with Cyber Security?", answer: "After completing a Cyber Security course, you can pursue roles like Cyber Security Analyst, Information Security Manager, Security Consultant, or Incident Responder." },
            { question: "What skills are necessary for a career in Cyber Security?", answer: "Key skills include knowledge of network protocols, firewalls, encryption techniques, and experience with penetration testing and incident response." }
        ]
    },

    // CLOUD
    {
        id: 5,
        title: "AWS & Devops",
        slug: "aws",
        category: "Cloud",
        description: "AWS is a secure cloud platform offering computing power, database storage, and content delivery services on demand.",
        img: "/courses/aws.webp",
        rating: "4.8",
        students: "1500",
        locked: true,
        aboutData: {
            topic: "Master Cloud Computing with AWS",
            content1: "The program begins with core AWS fundamentals, covering services such as EC2, S3, IAM, VPC, RDS, and CloudWatch. Learners gain hands-on expertise in provisioning and managing secure, scalable cloud environments while understanding best practices in identity access management and network architecture. This program is ideal for developers, system administrators, and IT professionals aiming to become AWS DevOps Engineers, Cloud Engineers, or Site Reliability Engineers (SREs).",
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
            { id: "aws1", title: "Introduction to AWS and Cloud Computing", icon: "bi bi-cloud", defaultOpen: true, items: ["Overview of cloud computing and AWS fundamentals", "Benefits of cloud computing: Scalability, flexibility, and cost-effectiveness", "AWS Global Infrastructure: Regions, Availability Zones, and edge locations", "Core AWS services: Compute (EC2), Storage (S3), Networking (VPC), and Databases (RDS, DynamoDB)", "AWS Pricing and Cost Management: Understanding AWS Free Tier, pay-as-you-go model, and pricing calculator"] },
            { id: "aws2", title: "Compute Services in AWS", icon: "bi bi-server", items: ["Amazon EC2 (Elastic Compute Cloud): Instance types, pricing models, security groups, and auto-scaling", "Launching, configuring, and managing EC2 instances (Windows and Linux)", "Amazon Lambda: Serverless computing and event-driven applications", "Elastic Beanstalk: Easy deployment of applications and environments", "AWS Elastic Load Balancing (ELB) and Auto Scaling for high availability and traffic distribution"] },
            { id: "aws3", title: "Storage and Database Services", icon: "bi bi-database", items: ["Amazon S3 (Simple Storage Service): Buckets, versioning, and lifecycle policies", "Amazon EBS (Elastic Block Store): Persistent block storage for EC2 instances", "Amazon RDS (Relational Database Service): Managed relational databases (MySQL, PostgreSQL, MariaDB, SQL Server)", "Amazon DynamoDB: NoSQL database service for high-performance applications", "Amazon Glacier: Low-cost archive storage for long-term data retention"] },
            { id: "aws4", title: "Networking and Security in AWS", icon: "bi bi-shield-lock", items: ["Amazon VPC (Virtual Private Cloud): Creating isolated networks, subnets, route tables, and security groups", "AWS Identity and Access Management (IAM): User roles, permissions, and policies", "Securing AWS resources: Key management (AWS KMS), encryption (S3, RDS, EC2)", "AWS WAF (Web Application Firewall) and Shield for DDoS protection", "Amazon CloudFront: Content Delivery Network (CDN) for faster content distribution"] },
            { id: "aws5", title: "Monitoring, Automation, and Management in AWS", icon: "bi bi-graph-up", items: ["Amazon CloudWatch: Monitoring AWS resources, setting alarms, and logging", "AWS CloudTrail: Tracking and auditing API calls and resource activity", "AWS Systems Manager: Automation of operational tasks and patch management", "AWS CloudFormation: Infrastructure as Code (IaC) for provisioning AWS resources", "AWS Trusted Advisor: Best practice recommendations for improving AWS infrastructure"] }
        ],
        faqData: [
            { question: "What is AWS DevOps and why is it important?", answer: "AWS DevOps is a combination of development and operations practices implemented using Amazon Web Services to automate and streamline the software delivery lifecycle. It enables faster deployments, improved collaboration, scalability, and continuous delivery through tools like AWS CodePipeline, Jenkins, and Docker." },
            { question: "What skills are required to become an AWS DevOps Engineer?", answer: "To become an AWS DevOps Engineer, you need knowledge of cloud computing (AWS services like EC2, S3, IAM), CI/CD pipelines, Infrastructure as Code (Terraform/CloudFormation), containerization (Docker, Kubernetes), scripting (Python/Bash), and monitoring tools like CloudWatch." },
            { question: "Is AWS DevOps suitable for beginners?", answer: "Yes, AWS DevOps is beginner-friendly if you start with basic cloud concepts and Linux fundamentals. With structured training, hands-on projects, and guided learning paths, even freshers or non-IT professionals can transition into DevOps roles." },
            { question: "What job roles can I get after AWS DevOps training?", answer: "After completing AWS DevOps training, you can apply for roles such as AWS DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Release Engineer, and Infrastructure Engineer, with strong demand across IT industries." },
            { question: "Which tools are commonly used in AWS DevOps?", answer: "Common tools used in AWS DevOps include AWS CodePipeline, CodeBuild, CodeDeploy, Jenkins, GitHub Actions, Docker, Kubernetes, Terraform, CloudFormation, and CloudWatch for automation, deployment, monitoring, and infrastructure management." }
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
            { id: "az1", title: "Introduction to Microsoft Azure", icon: "bi bi-cloud", defaultOpen: true, items: ["Overview of cloud computing and Microsoft Azure fundamentals", "Benefits of Azure: Scalability, flexibility, cost-effectiveness, and global reach", "Azure Regions, Availability Zones, and Edge Locations", "Core Azure services: Compute (VMs, App Services), Storage (Blob, Disk), and Networking (Virtual Networks)", "Azure Pricing and Cost Management: Pricing calculator, billing, and cost optimization tools"] },
            { id: "az2", title: "Compute Services in Azure", icon: "bi bi-pc-display", items: ["Azure Virtual Machines (VMs): Creating, configuring, and managing VMs (Windows and Linux)", "Azure App Services: Managed platform for deploying web apps and APIs", "Azure Kubernetes Service (AKS): Deploying, managing, and scaling containerized applications with Kubernetes", "Azure Functions: Serverless computing for event-driven architecture", "Azure Virtual Desktop (AVD): Managing virtual desktop infrastructure (VDI) in the cloud"] },
            { id: "az3", title: "Storage and Database Services in Azure", icon: "bi bi-database", items: ["Azure Blob Storage: Object storage for unstructured data with access tiers (Hot, Cool, Archive)", "Azure Disk Storage: Persistent block storage for VMs", "Azure File Storage: Managed file shares with SMB protocol support", "Azure SQL Database: Managed relational database service for SQL Server-based applications", "Azure Cosmos DB: Globally distributed NoSQL database for high-performance applications"] },
            { id: "az4", title: "Networking and Security in Azure", icon: "bi bi-shield-lock", items: ["Azure Virtual Networks (VNet): Creating isolated networks, subnets, and routing", "Network Security Groups (NSG) and Azure Firewall: Controlling traffic and securing resources", "Azure Load Balancer and Application Gateway: Distributing traffic for high availability and application delivery", "Azure Identity and Access Management (IAM): Role-based access control (RBAC) and Azure Active Directory (AAD)", "Azure Key Vault: Securely managing keys, secrets, and certificates"] },
            { id: "az5", title: "Monitoring, Automation, and Management in Azure", icon: "bi bi-graph-up", items: ["Azure Monitor: Collecting and analyzing monitoring data, creating alerts, and setting up dashboards", "Azure Log Analytics: Querying and analyzing logs for operational insights", "Azure Automation: Automating repetitive tasks using runbooks and scripts", "Azure Resource Manager (ARM): Managing and organizing resources with ARM templates", "Azure Cost Management + Billing: Monitoring and optimizing cloud spending"] }
        ],
        faqData: [
            { question: "What is Azure Cloud?", answer: "Microsoft Azure is a cloud computing platform offering a wide range of services for building, testing, deploying, and managing applications across Microsoft's global network of data centers." },
            { question: "Why should I learn Azure Cloud?", answer: "Azure is widely used for building enterprise-level cloud solutions. Learning Azure enhances your skills in cloud computing, DevOps, and big data, positioning you for roles in both public and private cloud infrastructures." },
            { question: "What services are available in Azure?", answer: "Azure provides a range of services including Azure Virtual Machines, Azure Storage, Azure Kubernetes Service (AKS), Azure Functions, and Azure AI, all designed for enterprise-scale deployments." },
            { question: "What career roles can I pursue after learning Azure?", answer: "With expertise in Azure, you can pursue roles like Cloud Architect, Azure Developer, DevOps Engineer, and Cloud Engineer in organizations adopting Microsoft Azure for their cloud solutions." },
            { question: "How is Azure different from AWS?", answer: "Both Azure and AWS provide similar cloud services, but Azure is more integrated with Microsoft products like Windows Server, SQL Server, and Active Directory, which makes it a top choice for enterprises with a Microsoft-based infrastructure." }
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
            { id: "gcp1", title: "Introduction to Google Cloud Platform (GCP)", icon: "bi bi-cloud", defaultOpen: true, items: ["Overview of cloud computing and Google Cloud fundamentals", "Benefits of GCP: Scalability, innovation, and integration with Google services", "GCP global infrastructure: Regions, zones, and edge locations", "Core GCP services: Compute (Compute Engine, App Engine, Kubernetes Engine), Storage (Cloud Storage, Persistent Disks), and Networking (VPC)", "GCP Pricing and Billing: Cost management, pricing calculator, and free tier"] },
            { id: "gcp2", title: "Compute Services in GCP", icon: "bi bi-cpu", items: ["Google Compute Engine (GCE): Creating and managing virtual machines", "Google Kubernetes Engine (GKE): Deploying and managing containerized applications with Kubernetes", "Google App Engine (GAE): Platform-as-a-Service (PaaS) for building and deploying web apps", "Google Cloud Functions: Serverless computing for event-driven applications", "Google Cloud Run: Running containerized applications in a fully managed environment"] },
            { id: "gcp3", title: "Storage and Database Services in GCP", icon: "bi bi-database", items: ["Google Cloud Storage: Object storage with different storage classes (Standard, Nearline, Coldline, Archive)", "Persistent Disks: Block storage for virtual machine instances", "Google Cloud SQL: Managed relational database service for MySQL, PostgreSQL, and SQL Server", "Google Cloud Firestore and Datastore: Managed NoSQL databases for flexible data models", "BigQuery: Serverless, highly scalable data warehouse for big data analytics"] },
            { id: "gcp4", title: "Networking and Security in GCP", icon: "bi bi-shield-lock", items: ["Google Virtual Private Cloud (VPC): Creating isolated networks, subnets, and routing", "Google Cloud Load Balancing: Distributing traffic across resources for high availability", "Google Cloud CDN: Content Delivery Network for faster content distribution", "Identity and Access Management (IAM): Role-based access control (RBAC), service accounts, and security policies", "Google Cloud Key Management and Secret Manager: Managing encryption keys and sensitive data securely"] },
            { id: "gcp5", title: "Monitoring, Automation, and Management in GCP", icon: "bi bi-graph-up", items: ["Google Cloud Monitoring and Logging: Using Stackdriver to monitor, log, and analyze resources and applications", "Google Cloud Deployment Manager: Infrastructure as Code (IaC) for provisioning resources using templates", "Google Cloud AutoML: Machine learning tools for custom model training without deep ML expertise", "Google Cloud Pub/Sub: Messaging and event-driven architecture for building scalable applications", "Google Cloud Cost Management: Monitoring and optimizing cloud usage and costs"] }
        ],
        faqData: [
            { question: "What is Google Cloud?", answer: "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure used by Google Search and YouTube, providing scalable services for computing, storage, and networking." },
            { question: "Why should I learn Google Cloud?", answer: "Google Cloud is ideal for professionals interested in big data, machine learning, and serverless computing. It offers high performance and innovation, particularly for data-driven and AI-powered applications." },
            { question: "What services does GCP provide?", answer: "GCP offers services like Compute Engine, Cloud Storage, BigQuery (for big data analysis), App Engine, Cloud Functions, and AI tools for developing and running scalable applications." },
            { question: "What job roles can I pursue with Google Cloud skills?", answer: "Learning Google Cloud opens doors to roles such as Cloud Engineer, Data Engineer, Machine Learning Engineer, and GCP Architect, especially in companies focusing on data and machine learning." },
            { question: "How does Google Cloud compare to AWS and Azure?", answer: "While AWS and Azure offer similar cloud services, Google Cloud stands out in the areas of big data, machine learning, and AI tools, leveraging Google’s experience with data processing and infrastructure." }
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
            { id: "dk1", title: "Introduction to Docker", icon: "bi bi-box", defaultOpen: true, items: ["Overview of containerization and the role of Docker in modern application development", "Understanding Docker architecture: Docker Daemon, Docker CLI, and Docker Registry", "Creating and managing Docker containers: Building Docker images with Dockerfile", "Docker images vs. containers: What are they and how do they differ?", "Best practices for Docker image creation and management (multistage builds, image optimization)"] },
            { id: "dk2", title: "Docker Networking and Storage", icon: "bi bi-diagram-3", items: ["Understanding Docker networking: Bridge network, host network, overlay network", "Docker Compose: Defining and running multi-container applications with YAML files", "Managing persistent storage in Docker: Volumes, bind mounts, and tmpfs mounts", "Docker Swarm mode: Setting up and managing a Docker Swarm cluster", "Working with Docker Hub and private registries: Pushing and pulling Docker images"] },
            { id: "dk3", title: "Introduction to Kubernetes", icon: "bi bi-diagram-2", items: ["Overview of Kubernetes architecture: Master node, worker nodes, etcd, API server, kubelet, kube-proxy", "Kubernetes objects: Pods, Deployments, Services, ConfigMaps, and Secrets", "Managing Kubernetes clusters: kubectl commands and cluster setup", "Kubernetes namespaces: Isolating resources and organizing workloads", "Understanding Kubernetes control plane and its components"] },
            { id: "dk4", title: "Deploying and Managing Applications with Kubernetes", icon: "bi bi-rocket", items: ["Creating and managing Pods and Deployments in Kubernetes", "Configuring Kubernetes services for load balancing and service discovery", "Rolling updates and rollback strategies for application deployments", "Managing environment variables and configurations with ConfigMaps and Secrets", "Kubernetes persistent storage: Persistent Volumes (PV), Persistent Volume Claims (PVC), and StorageClasses"] },
            { id: "dk5", title: "Kubernetes Networking, Scaling, and Security", icon: "bi bi-shield-lock", items: ["Kubernetes networking concepts: Pod-to-Pod communication, ClusterIP, NodePort, LoadBalancer", "Horizontal Pod Autoscaling: Automatically scaling workloads based on CPU or memory usage", "Security in Kubernetes: Role-Based Access Control (RBAC), Service Accounts, and Network Policies", "Managing Ingress controllers and ingress resources for HTTP/S traffic routing", "Monitoring and troubleshooting Kubernetes clusters with tools like Prometheus, Grafana, and kubectl logs"] }
        ],
        faqData: [
            { question: "What is Docker?", answer: "Docker is a platform for developing, shipping, and running applications inside containers. Containers allow applications to run seamlessly in different environments, improving portability and efficiency." },
            { question: "Why should I learn Docker & Kubernetes?", answer: "Docker and Kubernetes are essential for containerization and orchestration of applications in cloud-native environments, making them critical tools for DevOps, application scalability, and microservices architecture." },
            { question: "What is Kubernetes?", answer: "Kubernetes is an open-source platform for managing containerized applications at scale. It automates deployment, scaling, and management, making it ideal for cloud-native, microservice-based architectures." },
            { question: "How are Docker and Kubernetes related?", answer: "Docker is used to containerize applications, while Kubernetes helps manage, orchestrate, and scale those containers in a distributed environment, ensuring high availability and fault tolerance." },
            { question: "What careers can I pursue with Docker and Kubernetes skills?", answer: "With knowledge of Docker and Kubernetes, you can pursue roles such as DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), and Platform Engineer in cloud-based environments." }
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
            { id: "dev1", title: "Introduction to DevOps and Cloud Computing", icon: "bi bi-info-circle", defaultOpen: true, items: ["Understanding the DevOps culture: Collaboration, communication, and automation", "Key principles of DevOps: Continuous Integration (CI), Continuous Delivery (CD), Infrastructure as Code (IaC)", "Role of a Cloud DevOps Engineer in the software development lifecycle", "Overview of Cloud Computing: Public, Private, Hybrid clouds and the key cloud providers (AWS, Azure, GCP)", "Benefits of combining DevOps and Cloud technologies: Scalability, flexibility, automation, and cost optimization"] },
            { id: "dev2", title: "Version Control and Continuous Integration (CI)", icon: "bi bi-git", items: ["Introduction to version control systems (Git, GitHub, GitLab)", "Best practices for version control and branching strategies (GitFlow, trunk-based development)", "Setting up Continuous Integration pipelines: Automating code testing and building (Jenkins, GitLab CI, CircleCI)", "Integrating unit tests, linting, and security scans in CI pipelines", "Using Docker for containerizing applications and integrating with CI workflows"] },
            { id: "dev3", title: "Infrastructure as Code (IaC) and Automation", icon: "bi bi-gear-wide", items: ["Introduction to Infrastructure as Code and its role in DevOps", "Using Terraform to provision, manage, and scale cloud infrastructure (AWS, Azure, GCP)", "Introduction to CloudFormation (AWS) and ARM Templates (Azure) for IaC automation", "Configuration management tools: Ansible, Puppet, Chef for automated infrastructure configuration", "Managing environment consistency and repeatable deployments with IaC"] },
            { id: "dev4", title: "Continuous Delivery (CD) and Deployment Pipelines", icon: "bi bi-arrow-repeat", items: ["Building and automating deployment pipelines: Code building, testing, and release management", "Continuous Delivery tools: Jenkins, Spinnaker, ArgoCD, and GitLab CI for automated deployments", "Deploying to cloud platforms (AWS Elastic Beanstalk, Azure App Services, Google Cloud Run)", "Blue/Green, Canary, and Rolling deployments for reducing downtime during application updates", "Automating infrastructure scaling: Auto Scaling Groups, Kubernetes, and container orchestration"] },
            { id: "dev5", title: "Monitoring, Security, and Compliance in Cloud DevOps", icon: "bi bi-shield-check", items: ["Monitoring and logging: Using AWS CloudWatch, Azure Monitor, and Google Stackdriver for tracking system performance and health", "Implementing centralized logging with ELK stack (Elasticsearch, Logstash, Kibana) or Fluentd and Grafana", "Continuous security integration (DevSecOps): Implementing security checks in CI/CD pipelines", "Managing secrets and credentials securely: AWS Secrets Manager, HashiCorp Vault, Azure Key Vault", "Cloud security best practices: Identity and Access Management (IAM), network security, and compliance regulations (GDPR, HIPAA)"] }
        ],
        faqData: [
            { question: "What is a Cloud DevOps Engineer?", answer: "A Cloud DevOps Engineer is responsible for automating and managing the cloud infrastructure in a DevOps environment. This role involves automating build pipelines, deployments, and infrastructure monitoring." },
            { question: "Why should I learn Cloud DevOps?", answer: "Learning Cloud DevOps equips you with the skills to manage the entire DevOps lifecycle in the cloud, making it essential for streamlining development, operations, and deployment processes in cloud-native applications." },
            { question: "What tools are used in Cloud DevOps?", answer: "Common tools include AWS, Terraform, Docker, Kubernetes, Jenkins, Ansible, and Git for managing and automating deployments, testing, and infrastructure provisioning in cloud environments." },
            { question: "What is the career growth potential in Cloud DevOps?", answer: "With Cloud DevOps skills, you can work as a DevOps Engineer, Cloud Engineer, or Cloud Architect, with opportunities in companies adopting cloud infrastructure and automation practices for scalable applications." },
            { question: "How does Cloud DevOps differ from traditional DevOps?", answer: "Cloud DevOps focuses specifically on the cloud environment, leveraging tools and practices designed for cloud infrastructure, whereas traditional DevOps may work in on-premise or hybrid environments." }
        ]
    },

    // DATA ANALYTICS
    {
        id: 48,
        title: "Python",
        slug: "python-for-data-analytics",
        category: "Data Analytics",
        description: "Learn Python for data analytics—pandas, NumPy, data cleaning, visualization, and real-world analysis workflows from scratch.",
        img: "/courses/data-analytics-python.png",
        rating: "4.8",
        students: "820",
        locked: true,
        aboutData: {
            topic: "Python for Data Analytics",
            content1: "Build a job-ready Python foundation for analytics: import and clean datasets, explore patterns with pandas, and communicate insights with charts and summaries.",
            content2: "Hands-on exercises mirror real business scenarios—sales trends, customer segmentation, and operational reporting."
        },
        whatYouLearnData: [
            { title: "Python Basics", desc: "Syntax, variables, loops, and functions.", icon: "bi bi-braces" },
            { title: "pandas & NumPy", desc: "DataFrames, filtering, and aggregation.", icon: "bi bi-table" },
            { title: "Data Cleaning", desc: "Handle missing values and outliers.", icon: "bi bi-funnel" },
            { title: "Visualization", desc: "Matplotlib and Seaborn charts.", icon: "bi bi-bar-chart-line" },
            { title: "Exploratory Analysis", desc: "Summaries, correlations, and trends.", icon: "bi bi-search" },
            { title: "Mini Projects", desc: "End-to-end analysis case studies.", icon: "bi bi-folder-check" }
        ],
        courseContentData: [
            { id: "pda1", title: "Python Foundations for Analysts", icon: "bi bi-info-circle", defaultOpen: true, items: ["Setting up Python, Jupyter, and virtual environments", "Variables, data types, operators, and control flow", "Functions, modules, and readable script structure", "Working with files: CSV, Excel, and JSON imports", "Debugging and validating analysis outputs"] },
            { id: "pda2", title: "pandas for Data Manipulation", icon: "bi bi-table", items: ["Creating and indexing DataFrames", "Filtering, sorting, and grouping data", "Merging, joining, and reshaping datasets", "Handling missing and duplicate records", "Applying transformations with apply/map"] },
            { id: "pda3", title: "NumPy & Statistical Basics", icon: "bi bi-calculator", items: ["Arrays, vectorized operations, and broadcasting", "Descriptive statistics for business metrics", "Correlation and distribution awareness", "Sampling and basic hypothesis intuition", "Performance tips for larger datasets"] },
            { id: "pda4", title: "Data Visualization", icon: "bi bi-bar-chart-line", items: ["Line, bar, scatter, and histogram charts", "Customizing labels, colors, and layouts", "Seaborn for statistical plots", "Choosing the right chart for the story", "Exporting visuals for reports and decks"] },
            { id: "pda5", title: "Analytics Projects & Best Practices", icon: "bi bi-stars", items: ["End-to-end EDA on sales and marketing data", "Documenting assumptions and limitations", "Reproducible notebooks and naming conventions", "Presenting findings to non-technical stakeholders", "Preparing for SQL, Excel, and BI tool integration"] }
        ],
        faqData: [
            { question: "Do I need prior programming experience?", answer: "No—we start from Python basics and progress toward analytics-focused examples suitable for beginners and career switchers." },
            { question: "Is this only for data analyst roles?", answer: "Python analytics skills are valuable for Data Analyst, Business Analyst, and BI Developer paths—and complement SQL, Excel, and Power BI." },
            { question: "Which libraries are covered?", answer: "Core focus is pandas and NumPy with Matplotlib/Seaborn for visualization—the standard stack for entry-level analytics work." },
            { question: "Will I work on real datasets?", answer: "Yes—exercises use realistic business-style datasets for cleaning, exploration, and reporting practice." },
            { question: "What should I learn next?", answer: "Pair Python with SQL for querying and Power BI for dashboard delivery to become a well-rounded analyst." }
        ]
    },
    {
        id: 49,
        title: "Excel",
        slug: "excel-for-data-analytics",
        category: "Data Analytics",
        description: "Master Excel for data analytics—formulas, PivotTables, Power Query, dashboards, and business reporting used by analysts every day.",
        img: "/courses/data-analytics-excel.png",
        rating: "4.7",
        students: "960",
        locked: true,
        aboutData: {
            topic: "Excel for Data Analytics",
            content1: "Go beyond basic spreadsheets: build dynamic reports, automate repetitive tasks, and analyze large datasets with PivotTables and Power Query.",
            content2: "Ideal for students, finance teams, and aspiring analysts who want practical Excel skills employers expect on day one."
        },
        whatYouLearnData: [
            { title: "Advanced Formulas", desc: "XLOOKUP, INDEX-MATCH, and logic.", icon: "bi bi-calculator" },
            { title: "PivotTables", desc: "Summarize and slice business data.", icon: "bi bi-grid-3x3" },
            { title: "Power Query", desc: "Import, clean, and transform data.", icon: "bi bi-arrow-repeat" },
            { title: "Charts & Dashboards", desc: "Visual KPI tracking in Excel.", icon: "bi bi-pie-chart" },
            { title: "Data Validation", desc: "Quality checks and error control.", icon: "bi bi-shield-check" },
            { title: "Automation Intro", desc: "Macros and repeatable workflows.", icon: "bi bi-lightning" }
        ],
        courseContentData: [
            { id: "eda1", title: "Excel Essentials for Analysts", icon: "bi bi-info-circle", defaultOpen: true, items: ["Workbook structure, tables, and named ranges", "Essential formulas: SUMIFS, COUNTIFS, AVERAGEIFS", "Logical functions: IF, IFS, AND, OR", "Lookup techniques: VLOOKUP, XLOOKUP, INDEX-MATCH", "Formatting for readable management reports"] },
            { id: "eda2", title: "PivotTables & PivotCharts", icon: "bi bi-grid-3x3", items: ["Building PivotTables from raw data", "Grouping dates, categories, and numeric bins", "Calculated fields and value summaries", "Slicers, timelines, and interactive filters", "Designing PivotCharts for stakeholder reviews"] },
            { id: "eda3", title: "Power Query & Data Transformation", icon: "bi bi-arrow-repeat", items: ["Connecting to CSV, Excel, and folder sources", "Removing duplicates and splitting columns", "Unpivoting and merging queries", "Refreshable data models for recurring reports", "Error handling in import pipelines"] },
            { id: "eda4", title: "Dashboards & Business Reporting", icon: "bi bi-speedometer2", items: ["KPI layout and chart selection", "Conditional formatting for exceptions", "Combining charts, tables, and slicers", "Printing and sharing report templates", "Storytelling with numbers for decision makers"] },
            { id: "eda5", title: "Productivity & Intro to Automation", icon: "bi bi-lightning", items: ["Keyboard shortcuts for analyst speed", "Data validation and drop-down controls", "Intro to recording simple macros", "Best practices for audit-friendly models", "Bridging Excel outputs to SQL and Power BI"] }
        ],
        faqData: [
            { question: "Is advanced Excel still in demand?", answer: "Yes—Excel remains a core tool for analysts, finance teams, and managers. Power Query and Pivot skills are frequently listed in job descriptions." },
            { question: "Do I need Microsoft 365?", answer: "Modern Excel with Power Query is recommended; core topics work on recent desktop versions used in most workplaces." },
            { question: "Can beginners join?", answer: "We cover fundamentals first, then move to PivotTables and Power Query with guided exercises." },
            { question: "How is this different from Power BI?", answer: "Excel excels at ad-hoc analysis and spreadsheet modeling; Power BI is for scalable dashboards. Many analysts use both." },
            { question: "Career paths?", answer: "Business Analyst, Data Analyst, MIS Executive, and finance reporting roles commonly require strong Excel skills." }
        ]
    },
    {
        id: 50,
        title: "SQL",
        slug: "sql-for-data-analytics",
        category: "Data Analytics",
        description: "Query and analyze data with SQL—SELECT, JOINs, aggregations, subqueries, and reporting queries used in analytics and BI roles.",
        img: "/courses/data-analytics-sql.png",
        rating: "4.8",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "SQL for Data Analytics",
            content1: "Learn to extract answers from databases confidently: write clean queries, combine tables, aggregate metrics, and prepare datasets for Excel or Power BI.",
            content2: "Practice on realistic schemas—customers, orders, products, and campaigns—so you can speak the language of data teams."
        },
        whatYouLearnData: [
            { title: "SELECT & Filtering", desc: "Retrieve and filter rows precisely.", icon: "bi bi-funnel" },
            { title: "JOINs", desc: "Combine tables for richer analysis.", icon: "bi bi-diagram-3" },
            { title: "Aggregations", desc: "GROUP BY, HAVING, and metrics.", icon: "bi bi-bar-chart" },
            { title: "Subqueries & CTEs", desc: "Readable multi-step logic.", icon: "bi bi-layers" },
            { title: "Window Functions", desc: "Rankings, running totals, trends.", icon: "bi bi-window" },
            { title: "Analytics Queries", desc: "Cohort, funnel, and KPI SQL.", icon: "bi bi-graph-up" }
        ],
        courseContentData: [
            { id: "sda1", title: "SQL Foundations", icon: "bi bi-info-circle", defaultOpen: true, items: ["Relational databases and table relationships", "SELECT, WHERE, ORDER BY, and LIMIT", "Data types, NULL handling, and aliases", "Inserting sample data and exploring schemas", "Query formatting and readability habits"] },
            { id: "sda2", title: "JOINs & Multi-Table Analysis", icon: "bi bi-diagram-3", items: ["INNER, LEFT, RIGHT, and FULL joins", "Primary/foreign keys in practice", "Avoiding duplicate rows and fan-out traps", "Combining sales, customer, and product data", "Validating join results"] },
            { id: "sda3", title: "Aggregations & Grouping", icon: "bi bi-bar-chart", items: ["COUNT, SUM, AVG, MIN, MAX patterns", "GROUP BY with multiple dimensions", "HAVING vs. WHERE filters", "Date truncations and time-based rollups", "Building executive summary queries"] },
            { id: "sda4", title: "Subqueries, CTEs & Window Functions", icon: "bi bi-layers", items: ["Subqueries in SELECT and WHERE clauses", "Common Table Expressions for clarity", "ROW_NUMBER, RANK, and DENSE_RANK", "Running totals and moving averages", "Refactoring complex logic step by step"] },
            { id: "sda5", title: "Analytics Use Cases & BI Handoff", icon: "bi bi-graph-up", items: ["Cohort and retention-style queries", "Funnel and conversion analysis SQL", "Preparing datasets for Excel/Power BI", "Performance basics: indexes awareness", "Interview-style SQL problem practice"] }
        ],
        faqData: [
            { question: "Which SQL dialect is taught?", answer: "Concepts apply across PostgreSQL, MySQL, and SQL Server; examples use widely compatible ANSI-style SQL." },
            { question: "Do I need a database installed?", answer: "We use browser-friendly or local practice environments so you can run queries from day one." },
            { question: "Is SQL required for data analysts?", answer: "SQL is one of the most requested skills for Data Analyst, BI Developer, and Analytics Engineer roles." },
            { question: "Can I learn SQL without Python?", answer: "Yes—SQL stands alone for querying. Pairing with Python or Power BI later makes you more versatile." },
            { question: "What jobs does this support?", answer: "Data Analyst, BI Analyst, Reporting Analyst, and junior Analytics Engineer positions." }
        ]
    },
    {
        id: 51,
        title: "Power BI",
        slug: "power-bi",
        category: "Data Analytics",
        description: "Build interactive Power BI dashboards—data modeling, DAX, visuals, and publish-ready reports for business intelligence roles.",
        img: "/courses/data-analytics-power-bi.png",
        rating: "4.9",
        students: "1300",
        locked: true,
        aboutData: {
            topic: "Power BI for Business Intelligence",
            content1: "Transform raw data into executive-ready dashboards: connect sources, model relationships, write DAX measures, and design clear visuals that drive decisions.",
            content2: "Includes portfolio-style projects you can showcase in interviews for Data Analyst and BI Developer roles."
        },
        whatYouLearnData: [
            { title: "Data Import", desc: "Excel, SQL, and web sources.", icon: "bi bi-cloud-download" },
            { title: "Data Modeling", desc: "Star schema and relationships.", icon: "bi bi-diagram-2" },
            { title: "DAX Measures", desc: "KPIs, ratios, and time intelligence.", icon: "bi bi-calculator" },
            { title: "Visual Design", desc: "Charts, maps, and drill-through.", icon: "bi bi-pie-chart" },
            { title: "Filters & Slicers", desc: "Interactive report navigation.", icon: "bi bi-sliders" },
            { title: "Publishing", desc: "Share reports via Power BI Service.", icon: "bi bi-share" }
        ],
        courseContentData: [
            { id: "pbi1", title: "Power BI Overview & Setup", icon: "bi bi-info-circle", defaultOpen: true, items: ["Power BI Desktop vs. Service vs. Mobile", "Connecting to Excel, CSV, and SQL sources", "Power Query transformations in BI", "Understanding report, data, and model views", "Saving, versioning, and organizing projects"] },
            { id: "pbi2", title: "Data Modeling & Relationships", icon: "bi bi-diagram-2", items: ["Fact and dimension table concepts", "Creating and managing relationships", "Cardinality, active paths, and role-playing dates", "Calculated columns vs. measures overview", "Building a clean star schema"] },
            { id: "pbi3", title: "DAX for Analytics", icon: "bi bi-calculator", items: ["SUM, CALCULATE, and FILTER patterns", "Ratio and percentage KPI measures", "Time intelligence: YTD, MTD, prior period", "Handling blanks and divide-by-zero safely", "Debugging DAX with performance awareness"] },
            { id: "pbi4", title: "Visuals, UX & Interactivity", icon: "bi bi-pie-chart", items: ["Choosing effective chart types", "Slicers, bookmarks, and drill-through pages", "Tooltips, conditional formatting, and themes", "Mobile layout considerations", "Accessibility and clarity for executives"] },
            { id: "pbi5", title: "Publishing & Portfolio Projects", icon: "bi bi-share", items: ["Publishing to Power BI Service workspaces", "Row-level security introduction", "Scheduled refresh and gateway basics", "Capstone dashboard from raw to published report", "Presenting BI work in interviews"] }
        ],
        faqData: [
            { question: "Do I need SQL or Excel first?", answer: "Basic Excel helps; SQL is useful but not mandatory to start. We cover imports and transformations inside Power BI." },
            { question: "Is Power BI free to practice?", answer: "Power BI Desktop is free for learning; Service features for sharing may require a license in corporate settings." },
            { question: "Will I learn DAX?", answer: "Yes—practical DAX for KPIs, ratios, and time comparisons is a core part of the curriculum." },
            { question: "Can I build a portfolio?", answer: "Capstone-style projects help you demonstrate dashboard design, modeling, and DAX skills to employers." },
            { question: "Career outcomes?", answer: "Power BI skills align with Data Analyst, BI Developer, MIS Analyst, and reporting-focused business roles." }
        ]
    }
];

const preferredCourseOrder = [
    ".Net Fullstack Development",
    "MERN Stack Development",
    "Automation Testing",
    "AWS",
    "Cisco Certified Network Associate (CCNA)",
    "MEAN Stack Development",
    "JAVA Fullstack Development"
];

const preferredOrderIndex = new Map(
    preferredCourseOrder.map((title, index) => [title, index])
);

const orderedCourses = courses
    .map((course, index) => ({ course, index }))
    .sort((a, b) => {
        const aPriority = preferredOrderIndex.get(a.course.title);
        const bPriority = preferredOrderIndex.get(b.course.title);

        if (aPriority !== undefined && bPriority !== undefined) {
            return aPriority - bPriority;
        }

        if (aPriority !== undefined) {
            return -1;
        }

        if (bPriority !== undefined) {
            return 1;
        }

        return a.index - b.index;
    })
    .map(({ course }) => course);

export default orderedCourses;