const courses = [
    {
        id: 1,
        title: "React Native Fullstack",
        slug: "react-native-fullstack",
        category: "Development",
        description: "React Native Fullstack development combines React Native for mobile apps with Node.js, Express, and databases like MongoDB or PostgreSQL on the backend.",
        img: "/courses/reactNative.webp",
        rating: "4.8",
        students: "1200",
        locked: true,
        aboutData: {
            topic: "Master React Native & Fullstack Development",
            content1: "Learn to build cross-platform mobile applications using React Native and power them with robust backend technologies.",
            content2: "This course covers everything from setting up your environment to deploying full-stack mobile applications."
        },
        whatYouLearnData: [
            { title: "React Native Basics", desc: "Components, Props, State, and Styling.", icon: "bi bi-phone" },
            { title: "Navigation", desc: "React Navigation for seamless screen transitions.", icon: "bi bi-arrows-move" },
            { title: "Backend Integration", desc: "Connect with Node.js and Express APIs.", icon: "bi bi-server" },
            { title: "Database Management", desc: "Work with MongoDB and SQL databases.", icon: "bi bi-database" },
            { title: "State Management", desc: "Redux and Context API for complex apps.", icon: "bi bi-diagram-3" },
            { title: "Deployment", desc: "Publish apps to Google Play and App Store.", icon: "bi bi-cloud-upload" }
        ],
        courseContentData: [
            { id: "rn1", title: "Introduction to React Native", icon: "bi bi-phone", defaultOpen: true, items: ["Environment Setup", "JSX and Components", "Styling with Flexbox", "Props and State"] },
            { id: "rn2", title: "Backend Development", icon: "bi bi-server", items: ["Node.js Basics", "Express Framework", "RESTful APIs", "Authentication"] },
            { id: "rn3", title: "Advanced State Management", icon: "bi bi-diagram-3", items: ["Redux Setup", "Middleware", "Context API", "Performance Optimization"] },
            { id: "rn4", title: "Testing & Deployment", icon: "bi bi-check2-circle", items: ["Unit Testing with Jest", "E2E Testing", "App Store Publishing", "Play Store Deployment"] }
        ],
        faqData: [
            { question: "Do I need prior programming experience?", answer: "No, this course starts from the basics of JavaScript and React, making it suitable for beginners as well as those with some coding background." },
            { question: "What projects will I build?", answer: "You will build real-world mobile apps, including a social media clone, an e-commerce app, and a task management system." },
            { question: "Is backend development covered?", answer: "Yes, the course covers Node.js, Express, and databases like MongoDB or PostgreSQL to help you become a full-stack mobile developer." },
            { question: "Will I get a certificate?", answer: "Yes, upon successful completion of the course and projects, you will receive a Jobzenter certification." },
            { question: "How does the placement assistance work?", answer: "We provide resume building, mock interviews, and direct referrals to our hiring partners to help you land a job." }
        ]
    },
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
            { question: "What is the difference between manual and automation testing?", answer: "Manual testing involves human intervention to find bugs, while automation testing uses tools like Selenium to execute test scripts automatically." },
            { question: "Do I need coding skills for this course?", answer: "For manual testing, no coding is required. For automation testing, we will teach you Java or Python from scratch." },
            { question: "Which tools will I learn?", answer: "You will learn industry-standard tools like Selenium WebDriver, JIRA, TestNG, Postman, and JMeter." },
            { question: "Is this course suitable for non-IT graduates?", answer: "Yes, software testing is one of the best entry points into IT for non-technical graduates." },
            { question: "What kind of jobs can I apply for?", answer: "You can apply for roles like QA Engineer, Test Automation Engineer, and Manual Tester." }
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
        students: "9,556",
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
            { question: "What skills will I learn in this Full Stack Development course?", answer: "You'll master both frontend (HTML, CSS, JavaScript, React/Angular) and backend (Java, Spring Boot, RESTful APIs) technologies, along with databases and deployment practices." },
            { question: "How long does it take to complete the Full Stack Development course?", answer: "The course typically spans 4-6 months, depending on your learning pace and the complexity of projects you undertake." },
            { question: "Do I need prior programming experience to enroll?", answer: "No, we start from the fundamentals. However, basic computer literacy is helpful. We'll teach you everything you need to know." },
            { question: "What real-world projects will I build during the course?", answer: "You'll build multiple projects including a social media application, e-commerce platform, and an enterprise-level management system as your capstone project." },
            { question: "Will I receive job assistance after completing the course?", answer: "Yes, we provide 100% placement support including mock interviews, resume optimization, interview preparation, and job referrals." }
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
            { question: "Why choose MERN stack?", answer: "MERN (MongoDB, Express, React, Node) is a popular, JavaScript-based stack that allows you to build fast, scalable, and modern web applications." },
            { question: "Do I need to know JavaScript beforehand?", answer: "Basic knowledge is helpful, but we cover modern JavaScript (ES6+) as part of the course curriculum." },
            { question: "What is the duration of the course?", answer: "The course typically takes 4-6 months, depending on your pace and the depth of the projects you undertake." },
            { question: "Is deployment covered?", answer: "Yes, we teach you how to deploy your applications to cloud platforms like Heroku, Vercel, or AWS." },
            { question: "What support do I get if I get stuck?", answer: "You get access to mentor support, doubt-clearing sessions, and a community of learners to help you out." }
        ]
    },
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
            { question: "Do I need to know coding for AWS?", answer: "While some basic scripting helps, AWS is largely about infrastructure and configuration. We teach you what you need to know." },
            { question: "Does this course prepare me for certification?", answer: "Yes, the curriculum is aligned with the AWS Certified Solutions Architect – Associate exam." },
            { question: "Do I need an AWS account?", answer: "Yes, we will guide you on setting up a free-tier AWS account to practice hands-on labs." },
            { question: "What if I miss a class?", answer: "All sessions are recorded, so you can watch them later at your convenience." },
            { question: "What are the career prospects?", answer: "Cloud computing is booming. You can work as a Cloud Architect, SysOps Administrator, or DevOps Engineer." }
        ]
    },
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
            content1: "Learn to analyze data and create stunning visualizations to drive business growth.",
            content2: "Master tools like Power BI, Tableau, and SQL for data analysis."
        },
        whatYouLearnData: [
            { title: "Data Visualization", desc: "Create interactive dashboards.", icon: "bi bi-bar-chart" },
            { title: "SQL for Analysis", desc: "Querying and manipulating data.", icon: "bi bi-table" },
            { title: "Power BI", desc: "Microsoft's analytics tool.", icon: "bi bi-graph-up-arrow" },
            { title: "Tableau", desc: "Visual analytics platform.", icon: "bi bi-pie-chart" },
            { title: "Data Modeling", desc: "Structuring data for analysis.", icon: "bi bi-diagram-3" },
            { title: "ETL Processes", desc: "Extract, Transform, Load data.", icon: "bi bi-arrow-repeat" }
        ],
        courseContentData: [
            { id: "bi1", title: "Introduction to BI", icon: "bi bi-lightbulb", defaultOpen: true, items: ["BI Concepts", "Data Warehousing", "Role of a BI Analyst", "Business Requirements"] },
            { id: "bi2", title: "Power BI Essentials", icon: "bi bi-bar-chart", items: ["Connecting Data", "Data Transformation", "Building Reports", "DAX Functions"] },
            { id: "bi3", title: "SQL for Analytics", icon: "bi bi-table", items: ["SELECT Queries", "Joins & Subqueries", "Aggregations", "Window Functions"] },
            { id: "bi4", title: "ETL & Advanced Analytics", icon: "bi bi-arrow-repeat", items: ["ETL Processes", "Tableau Fundamentals", "Data Visualization Best Practices", "Dashboard Design"] }
        ],
        faqData: [
            { question: "What tools will I learn in this BI course?", answer: "You will master Power BI, Tableau, SQL, and Excel for data analysis and visualization." },
            { question: "Is this course technical?", answer: "It is a mix of technical skills (SQL) and analytical thinking. No heavy programming is required." },
            { question: "Can I switch to BI from a non-tech background?", answer: "Yes, BI is a great field for those with a business or math background who want to get into tech." },
            { question: "What kind of projects will I do?", answer: "You will build sales dashboards, financial reports, and customer analytics visualizations." },
            { question: "Do you help with job placement?", answer: "Yes, we provide interview preparation and connect you with companies looking for data analysts." }
        ]
    },
    {
        id: 7,
        title: "Cisco Certified Network Associate",
        slug: "cisco-certified-network-associate",
        category: "CCNA",
        description: "The Cisco Certified Network Associate (CCNA) Certification validates essential networking skills for configuring and troubleshooting networks.",
        img: "/courses/ccna.webp",
        rating: "4.7",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Become a Certified Network Associate",
            content1: "Gain the skills to install, configure, operate, and troubleshoot medium-size routed and switched networks.",
            content2: "Prepare for the CCNA certification exam with hands-on labs."
        },
        whatYouLearnData: [
            { title: "Network Fundamentals", desc: "OSI model, TCP/IP, and cabling.", icon: "bi bi-hdd-network" },
            { title: "Routing & Switching", desc: "VLANs, STP, OSPF, and EIGRP.", icon: "bi bi-arrows-angle-expand" },
            { title: "IP Addressing", desc: "IPv4 and IPv6 subnetting.", icon: "bi bi-123" },
            { title: "Network Security", desc: "ACLs, VPNs, and device hardening.", icon: "bi bi-shield-lock" },
            { title: "Automation", desc: "SDN and network programmability.", icon: "bi bi-robot" },
            { title: "Troubleshooting", desc: "Diagnose and resolve network issues.", icon: "bi bi-tools" }
        ],
        courseContentData: [
            { id: "ccna1", title: "Networking Basics", icon: "bi bi-hdd-network", defaultOpen: true, items: ["Network Types", "Topologies", "Protocols", "OSI Model"] },
            { id: "ccna2", title: "Routing Concepts", icon: "bi bi-signpost-split", items: ["Static Routing", "Dynamic Routing", "Router Configuration", "OSPF & EIGRP"] },
            { id: "ccna3", title: "Switching & VLANs", icon: "bi bi-diagram-2", items: ["Switch Configuration", "VLANs", "Trunking", "STP Protocol"] },
            { id: "ccna4", title: "Security & Troubleshooting", icon: "bi bi-shield-check", items: ["ACLs", "VPN Configuration", "Network Security", "Diagnostic Tools"] }
        ],
        faqData: [
            { question: "Is this course updated for the latest CCNA exam?", answer: "Yes, the course covers the latest CCNA 200-301 exam objectives." },
            { question: "Do I need physical equipment to practice?", answer: "No, we use simulation tools like Cisco Packet Tracer and GNS3 which mimic real hardware perfectly." },
            { question: "What is the prerequisite for this course?", answer: "Basic computer literacy is enough. We start from the very basics of networking." },
            { question: "How long is the course?", answer: "The course is designed to be completed in 2-3 months with regular study and practice." },
            { question: "What roles can I get after CCNA?", answer: "You can work as a Network Engineer, Network Administrator, or Technical Support Engineer." }
        ]
    },
    {
        id: 8,
        title: "MEAN Stack Development",
        slug: "mean-stack-development",
        category: "Development",
        description: "MEAN Stack Development combines MongoDB, Express, Angular, and Node.js to build powerful full-stack web applications.",
        img: "/courses/mean.jpg",
        rating: "4.8",
        students: "1800",
        locked: true,
        aboutData: {
            topic: "Become a Full Stack MEAN Developer",
            content1: "Master the MEAN stack to build dynamic, high-performance web applications using Angular on the frontend.",
            content2: "From Angular components to Node.js backend and MongoDB database, cover it all."
        },
        whatYouLearnData: [
            { title: "MongoDB", desc: "NoSQL database design and management.", icon: "bi bi-database" },
            { title: "Express.js", desc: "Backend web framework for Node.js.", icon: "bi bi-server" },
            { title: "Angular", desc: "Frontend framework for dynamic UIs.", icon: "bi bi-code-square" },
            { title: "Node.js", desc: "JavaScript runtime for backend logic.", icon: "bi bi-hexagon" },
            { title: "REST APIs", desc: "Building and consuming APIs.", icon: "bi bi-link" },
            { title: "TypeScript", desc: "Typed JavaScript for scalable apps.", icon: "bi bi-file-code" }
        ],
        courseContentData: [
            { id: "mean1", title: "Frontend with Angular", icon: "bi bi-code-square", defaultOpen: true, items: ["Angular Basics", "Components & Modules", "Services & DI", "Routing & Guards"] },
            { id: "mean2", title: "Backend with Node & Express", icon: "bi bi-server", items: ["Node Modules", "Express Routing", "Middleware", "Error Handling"] },
            { id: "mean3", title: "Database with MongoDB", icon: "bi bi-database", items: ["MongoDB Atlas Setup", "CRUD Operations", "Mongoose ORM", "Data Modeling"] },
            { id: "mean4", title: "Full Stack Integration & Deployment", icon: "bi bi-cloud-arrow-up", items: ["Authentication with JWT", "State Management with NgRx", "Testing", "Cloud Deployment"] }
        ],
        faqData: [
            { question: "Why choose MEAN stack?", answer: "MEAN uses Angular which is a full framework with TypeScript support, making it ideal for large-scale enterprise applications." },
            { question: "Do I need to know JavaScript beforehand?", answer: "Basic knowledge is helpful, but we cover modern JavaScript and TypeScript as part of the course." },
            { question: "What is the duration of the course?", answer: "The course typically takes 4-6 months depending on your pace and depth of projects." },
            { question: "Is deployment covered?", answer: "Yes, we teach you how to deploy your applications to cloud platforms like Heroku, Vercel, or AWS." },
            { question: "What support do I get if I get stuck?", answer: "You get access to mentor support, doubt-clearing sessions, and a community of learners." }
        ]
    },
    {
        id: 9,
        title: "Python Fullstack Development",
        slug: "python-fullstack-development",
        category: "Development",
        description: "Python Full Stack Development covers both frontend and backend using Python with Django or Flask framework along with modern frontend technologies.",
        img: "/courses/python.jpg",
        rating: "4.9",
        students: "2200",
        locked: true,
        aboutData: {
            topic: "Become a Full Stack Python Developer",
            content1: "Master Python for backend development using Django or Flask and combine it with React or HTML/CSS for the frontend.",
            content2: "Build real-world projects and deploy them to the cloud with industry best practices."
        },
        whatYouLearnData: [
            { title: "Python Basics", desc: "Core Python programming fundamentals.", icon: "bi bi-code-slash" },
            { title: "Django Framework", desc: "Build powerful web apps with Django.", icon: "bi bi-globe" },
            { title: "REST APIs", desc: "Django REST Framework for APIs.", icon: "bi bi-link" },
            { title: "Frontend", desc: "HTML, CSS, JavaScript and React basics.", icon: "bi bi-layout-text-window" },
            { title: "Database", desc: "PostgreSQL and SQLite with ORM.", icon: "bi bi-database" },
            { title: "Deployment", desc: "Deploy apps on AWS, Heroku or Render.", icon: "bi bi-cloud-upload" }
        ],
        courseContentData: [
            { id: "py1", title: "Python Fundamentals", icon: "bi bi-code-slash", defaultOpen: true, items: ["Python Syntax", "Data Types & Functions", "OOP in Python", "File Handling"] },
            { id: "py2", title: "Django Backend", icon: "bi bi-server", items: ["Django Setup", "Models & Views", "URL Routing", "Templates & Forms"] },
            { id: "py3", title: "REST API Development", icon: "bi bi-link", items: ["Django REST Framework", "Serializers", "Authentication", "API Testing"] },
            { id: "py4", title: "Frontend & Deployment", icon: "bi bi-cloud-arrow-up", items: ["React Integration", "PostgreSQL Setup", "Docker Basics", "Cloud Deployment"] }
        ],
        faqData: [
            { question: "Why learn Python for full stack?", answer: "Python is one of the most popular languages for backend development with frameworks like Django making it fast and scalable." },
            { question: "Do I need prior programming experience?", answer: "No, we start from Python basics and gradually move to full stack development." },
            { question: "What projects will I build?", answer: "You will build an e-commerce website, a REST API backend, and a full stack social media clone." },
            { question: "Is Django the only framework covered?", answer: "We primarily cover Django but also introduce Flask for lightweight API development." },
            { question: "Will I get placement support?", answer: "Yes, we provide 100% placement support including resume building, mock interviews, and job referrals." }
        ]
    },
    {
        id: 10,
        title: "Medical Billing",
        slug: "medical-billing",
        category: "Healthcare",
        description: "Medical Billing involves processing and managing healthcare claims to ensure accurate reimbursement for medical services provided.",
        img: "/courses/medicalBilling.webp",
        rating: "4.5",
        students: "600",
        locked: true,
        aboutData: {
            topic: "Start a Career in Healthcare Administration",
            content1: "Learn the medical billing cycle, coding systems, and insurance reimbursement processes.",
            content2: "Gain the skills needed to work in hospitals, clinics, and insurance companies."
        },
        whatYouLearnData: [
            { title: "Medical Terminology", desc: "Language of healthcare.", icon: "bi bi-book" },
            { title: "ICD-10 & CPT Coding", desc: "Standard medical coding systems.", icon: "bi bi-list-ol" },
            { title: "Revenue Cycle", desc: "Patient registration to payment.", icon: "bi bi-currency-dollar" },
            { title: "Insurance Claims", desc: "Submission and follow-up.", icon: "bi bi-file-earmark-text" },
            { title: "Compliance", desc: "HIPAA and healthcare laws.", icon: "bi bi-shield-check" },
            { title: "Billing Software", desc: "Hands-on with industry tools.", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "mb1", title: "Healthcare Basics", icon: "bi bi-hospital", defaultOpen: true, items: ["US Healthcare System", "HIPAA Regulations", "Patient Privacy", "Medical Terminology"] },
            { id: "mb2", title: "Medical Coding", icon: "bi bi-upc-scan", items: ["ICD-10 Guidelines", "CPT Modifiers", "HCPCS Codes", "Coding Accuracy"] },
            { id: "mb3", title: "Claims Processing", icon: "bi bi-file-earmark-text", items: ["Insurance Verification", "Claims Submission", "Denial Management", "Follow-up Procedures"] },
            { id: "mb4", title: "Compliance & Software", icon: "bi bi-laptop", items: ["Healthcare Compliance", "Billing Software Training", "Revenue Cycle", "Account Receivables"] }
        ],
        faqData: [
            { question: "Do I need a medical background?", answer: "No, a medical background is not required. We teach all necessary medical terminology and anatomy." },
            { question: "Is this a good work-from-home career?", answer: "Yes, many medical billing and coding jobs offer remote work opportunities." },
            { question: "What certification does this prepare me for?", answer: "It prepares you for industry-recognized certifications like CPC (Certified Professional Coder)." },
            { question: "How is the job market for medical billing?", answer: "The healthcare industry is growing, and there is a steady demand for skilled billers and coders." },
            { question: "What software will I learn?", answer: "You will get hands-on experience with popular medical billing software used in clinics and hospitals." }
        ]
    },
    {
        id: 11,
        title: "Manual Testing",
        slug: "manual-testing",
        category: "Testing",
        description: "Manual Testing is the process of manually testing software for defects without using automation tools, ensuring quality through human observation.",
        img: "/courses/manualTesting.webp",
        rating: "4.6",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Master Manual Testing from Scratch",
            content1: "Learn the fundamentals of software testing, test case design, and defect management through hands-on practice.",
            content2: "This course prepares you for a QA career with real-world projects and industry tools."
        },
        whatYouLearnData: [
            { title: "SDLC & STLC", desc: "Software development and testing life cycles.", icon: "bi bi-arrow-repeat" },
            { title: "Test Case Design", desc: "Write effective test cases and scenarios.", icon: "bi bi-file-earmark-check" },
            { title: "Bug Reporting", desc: "Log and track defects using JIRA.", icon: "bi bi-bug" },
            { title: "Test Planning", desc: "Create test plans and strategies.", icon: "bi bi-journal-text" },
            { title: "Agile Testing", desc: "Testing in Agile and Scrum environments.", icon: "bi bi-kanban" },
            { title: "Regression Testing", desc: "Ensure new changes don't break existing features.", icon: "bi bi-shield-check" }
        ],
        courseContentData: [
            { id: "mt1", title: "Testing Fundamentals", icon: "bi bi-clipboard-check", defaultOpen: true, items: ["What is Testing?", "SDLC & STLC", "Types of Testing", "Test Levels"] },
            { id: "mt2", title: "Test Design Techniques", icon: "bi bi-pencil-square", items: ["Equivalence Partitioning", "Boundary Value Analysis", "Decision Table", "Use Case Testing"] },
            { id: "mt3", title: "Defect Management", icon: "bi bi-bug", items: ["Bug Life Cycle", "JIRA Basics", "Defect Reports", "Severity & Priority"] },
            { id: "mt4", title: "Real-World Testing", icon: "bi bi-laptop", items: ["Web App Testing", "Mobile App Testing", "Agile Testing", "Test Closure"] }
        ],
        faqData: [
            { question: "Do I need coding knowledge?", answer: "No, manual testing requires no coding skills. It is perfect for beginners entering the IT field." },
            { question: "What tools will I learn?", answer: "You will learn JIRA for bug tracking, Excel for test documentation, and basic browser dev tools." },
            { question: "Is manual testing still in demand?", answer: "Yes, manual testing is essential for exploratory, usability, and ad-hoc testing in every project." },
            { question: "Will I get a certificate?", answer: "Yes, you will receive a Jobzenter certification upon successful course completion." },
            { question: "Can I switch to automation after this?", answer: "Absolutely! Manual testing is the foundation for automation testing. Many learners transition after this course." }
        ]
    },
    {
        id: 12,
        title: "Automation Testing (Selenium)",
        slug: "automation-testing-selenium",
        category: "Testing",
        description: "Selenium Automation Testing enables testers to automate web browser interactions to execute test cases faster and more efficiently.",
        img: "/courses/seleniumTesting.webp",
        rating: "4.8",
        students: "950",
        locked: true,
        aboutData: {
            topic: "Master Selenium WebDriver for Test Automation",
            content1: "Learn to automate web applications using Selenium WebDriver with Java, build robust test frameworks, and integrate with CI/CD pipelines.",
            content2: "This course takes you from zero to a professional automation tester with real project experience."
        },
        whatYouLearnData: [
            { title: "Selenium WebDriver", desc: "Automate browser actions with Selenium.", icon: "bi bi-robot" },
            { title: "Java for Testing", desc: "Core Java concepts for automation.", icon: "bi bi-code-slash" },
            { title: "TestNG Framework", desc: "Manage and run test suites.", icon: "bi bi-list-check" },
            { title: "Page Object Model", desc: "Design pattern for maintainable tests.", icon: "bi bi-diagram-3" },
            { title: "Maven & Jenkins", desc: "Build and CI/CD integration.", icon: "bi bi-arrow-repeat" },
            { title: "Reporting", desc: "Extent Reports and test dashboards.", icon: "bi bi-bar-chart" }
        ],
        courseContentData: [
            { id: "sel1", title: "Java Basics for Automation", icon: "bi bi-code-slash", defaultOpen: true, items: ["Java Setup", "OOP Concepts", "Collections", "Exception Handling"] },
            { id: "sel2", title: "Selenium WebDriver", icon: "bi bi-robot", items: ["WebDriver Setup", "Locators", "Browser Actions", "Waits & Synchronization"] },
            { id: "sel3", title: "Test Frameworks", icon: "bi bi-list-check", items: ["TestNG Annotations", "Data-Driven Testing", "Page Object Model", "Listeners"] },
            { id: "sel4", title: "CI/CD & Reporting", icon: "bi bi-arrow-repeat", items: ["Maven Setup", "Jenkins Integration", "Extent Reports", "Git & GitHub"] }
        ],
        faqData: [
            { question: "Do I need prior Java knowledge?", answer: "No, we teach Core Java from scratch specifically for automation testing needs." },
            { question: "Which browser does Selenium support?", answer: "Selenium supports Chrome, Firefox, Edge, Safari, and more through WebDriver." },
            { question: "Is Selenium still relevant in 2024?", answer: "Yes, Selenium remains the most widely used open-source automation tool in the industry." },
            { question: "Will I learn frameworks?", answer: "Yes, you will learn TestNG and Page Object Model for building scalable test frameworks." },
            { question: "What jobs can I apply for?", answer: "You can apply for Automation Test Engineer, QA Engineer, and SDET roles." }
        ]
    },
    {
        id: 13,
        title: "API Testing (Postman)",
        slug: "api-testing-postman",
        category: "Testing",
        description: "API Testing ensures that application programming interfaces work correctly, meet functionality, reliability, and security requirements.",
        img: "/courses/apiTesting.webp",
        rating: "4.7",
        students: "780",
        locked: true,
        aboutData: {
            topic: "Master API Testing with Postman & REST Assured",
            content1: "Learn to test REST and SOAP APIs using Postman, validate responses, and automate API tests using REST Assured with Java.",
            content2: "Gain hands-on experience with real-world APIs and build a strong foundation for backend testing."
        },
        whatYouLearnData: [
            { title: "REST API Basics", desc: "HTTP methods, status codes, and headers.", icon: "bi bi-globe" },
            { title: "Postman", desc: "Test and document APIs with Postman.", icon: "bi bi-send" },
            { title: "REST Assured", desc: "Automate API tests using Java.", icon: "bi bi-code-square" },
            { title: "Authentication", desc: "OAuth, API Keys, and JWT testing.", icon: "bi bi-shield-lock" },
            { title: "JSON & XML", desc: "Parse and validate API responses.", icon: "bi bi-braces" },
            { title: "Newman", desc: "Run Postman collections via command line.", icon: "bi bi-terminal" }
        ],
        courseContentData: [
            { id: "api1", title: "API Fundamentals", icon: "bi bi-globe", defaultOpen: true, items: ["What is an API?", "REST vs SOAP", "HTTP Methods", "Status Codes"] },
            { id: "api2", title: "Postman Testing", icon: "bi bi-send", items: ["Postman Setup", "Creating Requests", "Pre & Post Scripts", "Collections & Environments"] },
            { id: "api3", title: "REST Assured Automation", icon: "bi bi-code-square", items: ["REST Assured Setup", "GET/POST/PUT/DELETE", "Response Validation", "Schema Validation"] },
            { id: "api4", title: "Advanced API Testing", icon: "bi bi-shield-lock", items: ["OAuth & JWT Testing", "Newman CLI", "CI/CD Integration", "API Performance Basics"] }
        ],
        faqData: [
            { question: "Do I need coding skills for this course?", answer: "Postman testing requires no coding. REST Assured requires basic Java which we cover in the course." },
            { question: "What is the difference between Postman and REST Assured?", answer: "Postman is a GUI tool for manual API testing, while REST Assured is a Java library for automated API testing." },
            { question: "Are APIs important in modern testing?", answer: "Yes, with microservices architecture, API testing has become one of the most critical testing skills." },
            { question: "Will I work on real APIs?", answer: "Yes, you will test publicly available APIs and also mock APIs created during the course." },
            { question: "What roles does this prepare me for?", answer: "API Tester, Backend QA Engineer, and Test Automation Engineer roles." }
        ]
    },
    {
        id: 14,
        title: "Performance Testing (JMeter)",
        slug: "performance-testing-jmeter",
        category: "Testing",
        description: "Performance Testing evaluates how a system performs under load, stress, and peak conditions to ensure reliability and speed.",
        img: "/courses/performanceTesting.webp",
        rating: "4.6",
        students: "620",
        locked: true,
        aboutData: {
            topic: "Master Performance Testing with Apache JMeter",
            content1: "Learn to design, execute, and analyze performance tests using Apache JMeter to ensure your applications perform reliably under heavy load.",
            content2: "Gain hands-on experience with load testing, stress testing, and performance monitoring tools."
        },
        whatYouLearnData: [
            { title: "JMeter Basics", desc: "Setup and configure Apache JMeter.", icon: "bi bi-speedometer" },
            { title: "Load Testing", desc: "Simulate concurrent users on applications.", icon: "bi bi-people" },
            { title: "Stress Testing", desc: "Find breaking points of the system.", icon: "bi bi-exclamation-triangle" },
            { title: "Test Plans", desc: "Design effective performance test plans.", icon: "bi bi-journal-text" },
            { title: "Reporting", desc: "Analyze results with JMeter dashboards.", icon: "bi bi-graph-up" },
            { title: "BlazeMeter", desc: "Cloud-based performance testing.", icon: "bi bi-cloud" }
        ],
        courseContentData: [
            { id: "perf1", title: "Performance Testing Basics", icon: "bi bi-speedometer", defaultOpen: true, items: ["Types of Performance Testing", "Performance Metrics", "Bottleneck Analysis", "Testing Tools Overview"] },
            { id: "perf2", title: "JMeter Fundamentals", icon: "bi bi-tools", items: ["JMeter Installation", "Test Plan Components", "Thread Groups", "Samplers & Listeners"] },
            { id: "perf3", title: "Advanced JMeter", icon: "bi bi-graph-up", items: ["Parameterization", "Correlation", "Assertions", "CSV Data Config"] },
            { id: "perf4", title: "Reporting & CI/CD", icon: "bi bi-bar-chart", items: ["HTML Dashboard Reports", "BlazeMeter Cloud", "Jenkins Integration", "Performance Tuning Basics"] }
        ],
        faqData: [
            { question: "What is performance testing?", answer: "Performance testing checks how a system behaves under load, ensuring it meets speed and stability requirements." },
            { question: "Is JMeter free?", answer: "Yes, Apache JMeter is a free and open-source tool widely used for performance testing." },
            { question: "Do I need programming knowledge?", answer: "No, JMeter is a GUI-based tool. Basic scripting knowledge is helpful but not required." },
            { question: "What is the difference between load and stress testing?", answer: "Load testing checks performance under expected load, while stress testing pushes the system beyond its limits." },
            { question: "What jobs can I get?", answer: "You can work as a Performance Test Engineer, Load Test Specialist, or DevOps QA Engineer." }
        ]
    },
    {
        id: 15,
        title: "Medical Coding",
        slug: "medical-coding",
        category: "Healthcare",
        description: "Medical Coding is the transformation of healthcare diagnoses, procedures, and services into universal medical alphanumeric codes for billing and records.",
        img: "/courses/medicalCoding.webp",
        rating: "4.7",
        students: "750",
        locked: true,
        aboutData: {
            topic: "Become a Certified Medical Coder",
            content1: "Learn ICD-10, CPT, and HCPCS coding systems used in hospitals, clinics, and insurance companies worldwide.",
            content2: "This course prepares you for CPC certification and a rewarding career in healthcare administration."
        },
        whatYouLearnData: [
            { title: "ICD-10 Coding", desc: "Diagnosis coding with ICD-10-CM.", icon: "bi bi-list-ol" },
            { title: "CPT Coding", desc: "Procedure coding for medical services.", icon: "bi bi-clipboard2-pulse" },
            { title: "HCPCS Codes", desc: "Healthcare common procedure coding.", icon: "bi bi-upc-scan" },
            { title: "Medical Terminology", desc: "Language of medicine and anatomy.", icon: "bi bi-book" },
            { title: "Compliance", desc: "HIPAA rules and coding guidelines.", icon: "bi bi-shield-check" },
            { title: "CPC Exam Prep", desc: "Prepare for AAPC certification exam.", icon: "bi bi-award" }
        ],
        courseContentData: [
            { id: "mc1", title: "Introduction to Medical Coding", icon: "bi bi-list-ol", defaultOpen: true, items: ["What is Medical Coding?", "Coding Systems Overview", "Healthcare Reimbursement", "Medical Terminology Basics"] },
            { id: "mc2", title: "ICD-10-CM Coding", icon: "bi bi-clipboard2-pulse", items: ["ICD-10 Structure", "Diagnosis Coding Guidelines", "Chapter-wise Coding", "Coding Scenarios"] },
            { id: "mc3", title: "CPT & HCPCS Coding", icon: "bi bi-upc-scan", items: ["CPT Code Structure", "Surgery & E/M Codes", "HCPCS Level II Codes", "Modifiers"] },
            { id: "mc4", title: "Compliance & CPC Prep", icon: "bi bi-award", items: ["HIPAA Compliance", "Coding Audits", "CPC Exam Format", "Practice Tests"] }
        ],
        faqData: [
            { question: "Do I need a medical background?", answer: "No, we teach all required medical terminology and anatomy as part of the course." },
            { question: "What certification does this prepare me for?", answer: "This course prepares you for the CPC (Certified Professional Coder) exam by AAPC." },
            { question: "Is medical coding a work-from-home job?", answer: "Yes, medical coding is one of the best remote-friendly healthcare careers available." },
            { question: "How long is the course?", answer: "The course is designed to be completed in 3-4 months with regular study." },
            { question: "What is the salary for medical coders?", answer: "Entry-level medical coders earn a competitive salary with growth opportunities as they gain experience." }
        ]
    },
    {
        id: 16,
        title: "Clinical Research",
        slug: "clinical-research",
        category: "Healthcare",
        description: "Clinical Research involves scientific studies that evaluate medical treatments, drugs, and devices to ensure safety and effectiveness for patients.",
        img: "/courses/clinicalResearch.webp",
        rating: "4.8",
        students: "520",
        locked: true,
        aboutData: {
            topic: "Launch Your Career in Clinical Research",
            content1: "Learn the fundamentals of clinical trials, GCP guidelines, regulatory affairs, and data management in the pharmaceutical industry.",
            content2: "This course opens doors to exciting careers in CROs, pharma companies, and hospitals worldwide."
        },
        whatYouLearnData: [
            { title: "Clinical Trials", desc: "Phases and design of clinical studies.", icon: "bi bi-clipboard2-data" },
            { title: "GCP Guidelines", desc: "Good Clinical Practice standards.", icon: "bi bi-journal-medical" },
            { title: "Regulatory Affairs", desc: "FDA, ICH guidelines and submissions.", icon: "bi bi-file-earmark-text" },
            { title: "Data Management", desc: "Clinical data collection and validation.", icon: "bi bi-database" },
            { title: "Pharmacovigilance", desc: "Drug safety monitoring and reporting.", icon: "bi bi-shield-plus" },
            { title: "CRA Role", desc: "Clinical Research Associate responsibilities.", icon: "bi bi-person-badge" }
        ],
        courseContentData: [
            { id: "cr1", title: "Introduction to Clinical Research", icon: "bi bi-clipboard2-data", defaultOpen: true, items: ["What is Clinical Research?", "Drug Development Process", "Clinical Trial Phases", "Stakeholders in Trials"] },
            { id: "cr2", title: "GCP & Regulations", icon: "bi bi-journal-medical", items: ["ICH-GCP Guidelines", "FDA Regulations", "Ethics & IRB", "Informed Consent"] },
            { id: "cr3", title: "Clinical Data Management", icon: "bi bi-database", items: ["EDC Systems", "Data Entry & Validation", "Database Lock", "SAE Reporting"] },
            { id: "cr4", title: "Pharmacovigilance & Career", icon: "bi bi-shield-plus", items: ["Drug Safety Basics", "Adverse Event Reporting", "CRA Job Responsibilities", "Resume & Interview Prep"] }
        ],
        faqData: [
            { question: "Who can enroll in this course?", answer: "Life science graduates (B.Pharm, M.Pharm, MBBS, BSc) and healthcare professionals can enroll." },
            { question: "What is a CRO?", answer: "A Contract Research Organization (CRO) is a company that provides research services to pharma and biotech companies." },
            { question: "Is clinical research a good career?", answer: "Yes, the pharmaceutical industry is growing rapidly with high demand for trained clinical research professionals globally." },
            { question: "Will I get placement support?", answer: "Yes, we provide placement assistance including resume building, mock interviews, and industry connections." },
            { question: "What is pharmacovigilance?", answer: "Pharmacovigilance is the science of monitoring drug safety and adverse effects after a drug is marketed." }
        ]
    },
    {
        id: 17,
        title: "Hospital Management",
        slug: "hospital-management",
        category: "Healthcare",
        description: "Hospital Management covers the administration, planning, and operations of healthcare facilities to ensure efficient and quality patient care.",
        img: "/courses/hospitalManagement.webp",
        rating: "4.5",
        students: "430",
        locked: true,
        aboutData: {
            topic: "Master Healthcare Administration & Hospital Operations",
            content1: "Learn hospital administration, patient management, healthcare finance, and quality management systems used in modern hospitals.",
            content2: "This course prepares you for managerial roles in hospitals, clinics, and healthcare organizations."
        },
        whatYouLearnData: [
            { title: "Hospital Administration", desc: "Day-to-day hospital operations management.", icon: "bi bi-hospital" },
            { title: "Patient Management", desc: "Admission, discharge, and patient flow.", icon: "bi bi-person-heart" },
            { title: "Healthcare Finance", desc: "Budgeting and financial management.", icon: "bi bi-currency-dollar" },
            { title: "Quality Management", desc: "NABH accreditation and standards.", icon: "bi bi-star-half" },
            { title: "HR in Healthcare", desc: "Staff management and recruitment.", icon: "bi bi-people" },
            { title: "Health IT Systems", desc: "Hospital information systems (HIS).", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "hm1", title: "Healthcare System Overview", icon: "bi bi-hospital", defaultOpen: true, items: ["Indian Healthcare System", "Types of Hospitals", "Hospital Departments", "Roles in Administration"] },
            { id: "hm2", title: "Operations Management", icon: "bi bi-gear", items: ["OPD & IPD Management", "Emergency Services", "Pharmacy Operations", "Supply Chain Management"] },
            { id: "hm3", title: "Quality & Accreditation", icon: "bi bi-star-half", items: ["NABH Standards", "Quality Indicators", "Patient Safety", "Infection Control"] },
            { id: "hm4", title: "Finance & IT Systems", icon: "bi bi-laptop", items: ["Healthcare Budgeting", "Revenue Cycle", "HIS Software", "Medical Records Management"] }
        ],
        faqData: [
            { question: "Who is this course for?", answer: "This course is for healthcare professionals, MBA students, and anyone aspiring to work in hospital administration." },
            { question: "What is NABH?", answer: "NABH is the National Accreditation Board for Hospitals, which sets quality standards for healthcare organizations in India." },
            { question: "What jobs can I get after this course?", answer: "You can work as a Hospital Administrator, Healthcare Manager, Operations Executive, or Quality Officer." },
            { question: "Is this course available online?", answer: "Yes, the entire course is available online with live sessions and recorded lectures." },
            { question: "Do I need a medical degree?", answer: "No medical degree is required. Any graduate with an interest in healthcare management can join." }
        ]
    },
    {
        id: 18,
        title: "Pharmacy Management",
        slug: "pharmacy-management",
        category: "Healthcare",
        description: "Pharmacy Management covers the administration, operations, and clinical aspects of managing pharmacy departments in hospitals and retail settings.",
        img: "/courses/pharmacyManagement.webp",
        rating: "4.6",
        students: "380",
        locked: true,
        aboutData: {
            topic: "Master Pharmacy Operations & Management",
            content1: "Learn pharmacy dispensing, inventory management, drug safety, and regulatory compliance for hospital and retail pharmacy settings.",
            content2: "This course prepares pharmacy professionals for management and administrative roles in the healthcare industry."
        },
        whatYouLearnData: [
            { title: "Pharmacy Operations", desc: "Dispensing, stocking, and patient counseling.", icon: "bi bi-capsule" },
            { title: "Inventory Management", desc: "Drug procurement and stock control.", icon: "bi bi-box-seam" },
            { title: "Drug Regulations", desc: "Pharmacy laws and compliance.", icon: "bi bi-file-earmark-text" },
            { title: "Clinical Pharmacy", desc: "Patient medication management.", icon: "bi bi-heart-pulse" },
            { title: "Pharmacovigilance", desc: "Adverse drug reaction monitoring.", icon: "bi bi-shield-plus" },
            { title: "Pharmacy IT", desc: "Pharmacy management software.", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "pm1", title: "Pharmacy Fundamentals", icon: "bi bi-capsule", defaultOpen: true, items: ["Types of Pharmacies", "Drug Classification", "Prescription Reading", "Patient Counseling"] },
            { id: "pm2", title: "Inventory & Procurement", icon: "bi bi-box-seam", items: ["Drug Procurement Process", "ABC Analysis", "Expiry Management", "Cold Chain Management"] },
            { id: "pm3", title: "Regulations & Compliance", icon: "bi bi-file-earmark-text", items: ["Drugs & Cosmetics Act", "Schedule H & X Drugs", "Narcotic Regulations", "Pharmacy Council Rules"] },
            { id: "pm4", title: "Clinical & IT Systems", icon: "bi bi-laptop", items: ["Clinical Pharmacy Services", "ADR Reporting", "Pharmacy Software", "Hospital Pharmacy Management"] }
        ],
        faqData: [
            { question: "Who can take this course?", answer: "B.Pharm, D.Pharm, and M.Pharm graduates or anyone working in a pharmacy setting can benefit from this course." },
            { question: "Is this course for hospital or retail pharmacy?", answer: "This course covers both hospital pharmacy and retail pharmacy management comprehensively." },
            { question: "What software will I learn?", answer: "You will get hands-on training with popular pharmacy management software used in hospitals and retail chains." },
            { question: "What career opportunities are available?", answer: "You can work as a Pharmacy Manager, Clinical Pharmacist, Drug Safety Associate, or Inventory Specialist." },
            { question: "Will I receive a certificate?", answer: "Yes, you will receive a Jobzenter certification upon successful completion of the course." }
        ]
    },
    {
        id: 19,
        title: "MySQL",
        slug: "mysql",
        category: "Database",
        description: "MySQL is the world's most popular open-source relational database management system used for web applications and enterprise solutions.",
        img: "/courses/mysql.webp",
        rating: "4.7",
        students: "1300",
        locked: true,
        aboutData: {
            topic: "Master MySQL for Web & Enterprise Applications",
            content1: "Learn to design, query, and manage relational databases using MySQL with hands-on projects and real-world scenarios.",
            content2: "This course covers everything from basic SQL to advanced stored procedures, indexing, and performance tuning."
        },
        whatYouLearnData: [
            { title: "SQL Basics", desc: "SELECT, INSERT, UPDATE, DELETE queries.", icon: "bi bi-table" },
            { title: "Database Design", desc: "ER diagrams and normalization.", icon: "bi bi-diagram-3" },
            { title: "Joins & Subqueries", desc: "Complex data retrieval techniques.", icon: "bi bi-intersect" },
            { title: "Stored Procedures", desc: "Automate database tasks.", icon: "bi bi-gear" },
            { title: "Indexing", desc: "Optimize query performance.", icon: "bi bi-lightning-charge" },
            { title: "MySQL Workbench", desc: "GUI tool for database management.", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "sql1", title: "SQL Fundamentals", icon: "bi bi-table", defaultOpen: true, items: ["Database Concepts", "DDL & DML Commands", "WHERE & ORDER BY", "Aggregate Functions"] },
            { id: "sql2", title: "Advanced Queries", icon: "bi bi-intersect", items: ["JOINS", "Subqueries", "Views", "Window Functions"] },
            { id: "sql3", title: "Database Design", icon: "bi bi-diagram-3", items: ["ER Diagrams", "Normalization", "Primary & Foreign Keys", "Relationships"] },
            { id: "sql4", title: "Performance & Administration", icon: "bi bi-gear", items: ["Stored Procedures", "Triggers", "Indexing", "User Management"] }
        ],
        faqData: [
            { question: "Do I need prior database knowledge?", answer: "No, we start from absolute basics and gradually move to advanced topics." },
            { question: "Which version of MySQL is covered?", answer: "We cover MySQL 8.0, the latest stable version with all modern features." },
            { question: "Is MySQL free?", answer: "Yes, MySQL Community Edition is completely free and open-source." },
            { question: "What tools will I use?", answer: "You will use MySQL Workbench and command-line tools for hands-on practice." },
            { question: "What jobs require MySQL?", answer: "Database Administrator, Backend Developer, Data Analyst, and Full Stack Developer roles all require MySQL." }
        ]
    },
    {
        id: 20,
        title: "MongoDB",
        slug: "mongodb",
        category: "Database",
        description: "MongoDB is a leading NoSQL database that stores data in flexible JSON-like documents, ideal for modern web and mobile applications.",
        img: "/courses/mongodb.webp",
        rating: "4.8",
        students: "1100",
        locked: true,
        aboutData: {
            topic: "Master MongoDB for Modern Application Development",
            content1: "Learn to design, query, and manage NoSQL databases using MongoDB with aggregation pipelines, indexing, and Atlas cloud integration.",
            content2: "This course is perfect for developers building scalable MERN or MEAN stack applications."
        },
        whatYouLearnData: [
            { title: "NoSQL Concepts", desc: "Document-based database fundamentals.", icon: "bi bi-file-earmark-code" },
            { title: "CRUD Operations", desc: "Create, Read, Update, Delete in MongoDB.", icon: "bi bi-pencil-square" },
            { title: "Aggregation", desc: "Data processing pipelines.", icon: "bi bi-funnel" },
            { title: "Mongoose ORM", desc: "MongoDB with Node.js integration.", icon: "bi bi-diagram-2" },
            { title: "Indexing", desc: "Performance optimization techniques.", icon: "bi bi-lightning-charge" },
            { title: "MongoDB Atlas", desc: "Cloud database management.", icon: "bi bi-cloud" }
        ],
        courseContentData: [
            { id: "mdb1", title: "MongoDB Basics", icon: "bi bi-database", defaultOpen: true, items: ["NoSQL vs SQL", "MongoDB Setup", "Collections & Documents", "BSON Format"] },
            { id: "mdb2", title: "CRUD & Queries", icon: "bi bi-pencil-square", items: ["Insert & Find", "Update & Delete", "Query Operators", "Projection & Sorting"] },
            { id: "mdb3", title: "Aggregation & Indexing", icon: "bi bi-funnel", items: ["Aggregation Pipeline", "Group & Match", "Index Types", "Query Optimization"] },
            { id: "mdb4", title: "Mongoose & Atlas", icon: "bi bi-cloud", items: ["Mongoose Schema", "Model & Validation", "MongoDB Atlas Setup", "Security & Auth"] }
        ],
        faqData: [
            { question: "What is the difference between SQL and MongoDB?", answer: "SQL databases use tables and rows, while MongoDB uses flexible JSON-like documents, making it ideal for unstructured data." },
            { question: "Is MongoDB free?", answer: "Yes, MongoDB Community Edition is free. MongoDB Atlas also offers a free tier for cloud hosting." },
            { question: "Do I need Node.js knowledge?", answer: "Basic Node.js knowledge is helpful for Mongoose integration, but we cover what you need in the course." },
            { question: "What is MongoDB Atlas?", answer: "MongoDB Atlas is a fully managed cloud database service provided by MongoDB Inc." },
            { question: "What jobs require MongoDB?", answer: "Full Stack Developer, Backend Developer, and Database Engineer roles commonly require MongoDB." }
        ]
    },
    {
        id: 21,
        title: "PostgreSQL",
        slug: "postgresql",
        category: "Database",
        description: "PostgreSQL is a powerful open-source relational database known for its reliability, feature robustness, and support for advanced data types.",
        img: "/courses/postgresql.webp",
        rating: "4.7",
        students: "890",
        locked: true,
        aboutData: {
            topic: "Master PostgreSQL for Enterprise Applications",
            content1: "Learn advanced SQL, database design, and PostgreSQL-specific features like JSON support, full-text search, and performance tuning.",
            content2: "This course prepares you for roles as a Database Administrator or Backend Developer using PostgreSQL."
        },
        whatYouLearnData: [
            { title: "PostgreSQL Setup", desc: "Install and configure PostgreSQL.", icon: "bi bi-gear" },
            { title: "Advanced SQL", desc: "CTEs, window functions, and partitioning.", icon: "bi bi-table" },
            { title: "JSON Support", desc: "Store and query JSON data in PostgreSQL.", icon: "bi bi-braces" },
            { title: "Full-Text Search", desc: "Powerful search capabilities.", icon: "bi bi-search" },
            { title: "Performance Tuning", desc: "Query optimization and indexing.", icon: "bi bi-lightning-charge" },
            { title: "pgAdmin", desc: "GUI tool for PostgreSQL management.", icon: "bi bi-laptop" }
        ],
        courseContentData: [
            { id: "pg1", title: "PostgreSQL Fundamentals", icon: "bi bi-database", defaultOpen: true, items: ["Installation & Setup", "psql Command Line", "Data Types", "DDL & DML Basics"] },
            { id: "pg2", title: "Advanced SQL", icon: "bi bi-table", items: ["CTEs", "Window Functions", "Partitioning", "Recursive Queries"] },
            { id: "pg3", title: "JSON & Full-Text Search", icon: "bi bi-braces", items: ["JSON & JSONB Columns", "JSON Queries", "Full-Text Search Setup", "tsvector & tsquery"] },
            { id: "pg4", title: "Performance & Administration", icon: "bi bi-gear", items: ["EXPLAIN & ANALYZE", "Index Strategies", "Vacuuming", "Backup & Restore"] }
        ],
        faqData: [
            { question: "Why choose PostgreSQL over MySQL?", answer: "PostgreSQL supports advanced features like JSON, full-text search, and better ACID compliance, making it ideal for complex applications." },
            { question: "Is PostgreSQL free?", answer: "Yes, PostgreSQL is completely free and open-source under the PostgreSQL License." },
            { question: "What tool will I use for practice?", answer: "You will use pgAdmin for GUI-based management and psql for command-line operations." },
            { question: "Does this course cover Django or Node.js integration?", answer: "Yes, we cover basic integration of PostgreSQL with Python/Django and Node.js/Express." },
            { question: "What jobs require PostgreSQL?", answer: "Database Administrator, Data Engineer, Backend Developer, and DevOps Engineer roles commonly use PostgreSQL." }
        ]
    },
    {
        id: 22,
        title: "Oracle SQL",
        slug: "oracle-sql",
        category: "Database",
        description: "Oracle SQL is the industry-standard database language used in enterprise-level applications for managing large-scale relational databases.",
        img: "/courses/oracleSQL.webp",
        rating: "4.6",
        students: "720",
        locked: true,
        aboutData: {
            topic: "Master Oracle SQL for Enterprise Database Management",
            content1: "Learn Oracle SQL from basics to advanced topics including PL/SQL programming, database administration, and performance tuning.",
            content2: "This course prepares you for Oracle certifications and high-paying DBA roles in enterprise companies."
        },
        whatYouLearnData: [
            { title: "Oracle SQL Basics", desc: "Queries, joins, and functions.", icon: "bi bi-table" },
            { title: "PL/SQL", desc: "Procedural extension of SQL.", icon: "bi bi-code-slash" },
            { title: "Stored Procedures", desc: "Reusable database programs.", icon: "bi bi-gear" },
            { title: "Oracle DB Admin", desc: "Tablespaces, users, and roles.", icon: "bi bi-person-badge" },
            { title: "Performance Tuning", desc: "Explain plan and optimization.", icon: "bi bi-lightning-charge" },
            { title: "Oracle Certification", desc: "Prepare for OCA/OCP exams.", icon: "bi bi-award" }
        ],
        courseContentData: [
            { id: "ora1", title: "Oracle SQL Fundamentals", icon: "bi bi-table", defaultOpen: true, items: ["Oracle Architecture", "DDL & DML", "Single Row Functions", "Group Functions"] },
            { id: "ora2", title: "Advanced SQL", icon: "bi bi-intersect", items: ["Joins & Subqueries", "Views & Sequences", "Synonyms", "Flashback Queries"] },
            { id: "ora3", title: "PL/SQL Programming", icon: "bi bi-code-slash", items: ["PL/SQL Basics", "Cursors", "Stored Procedures & Functions", "Triggers & Packages"] },
            { id: "ora4", title: "DBA & Certification Prep", icon: "bi bi-award", items: ["Tablespace Management", "User & Role Management", "Backup & Recovery", "OCA Exam Prep"] }
        ],
        faqData: [
            { question: "Is Oracle SQL different from MySQL?", answer: "Yes, Oracle SQL has proprietary features like PL/SQL, sequences, and advanced partitioning not found in MySQL." },
            { question: "Is Oracle free to learn?", answer: "Yes, Oracle provides Oracle XE (Express Edition) for free which is perfect for learning and development." },
            { question: "What certifications can I get?", answer: "This course prepares you for Oracle Certified Associate (OCA) and Oracle Certified Professional (OCP) exams." },
            { question: "What companies use Oracle?", answer: "Large enterprises, banks, telecom companies, and government organizations widely use Oracle databases." },
            { question: "What salary can I expect as an Oracle DBA?", answer: "Oracle DBAs are among the highest-paid database professionals due to the complexity and enterprise demand." }
        ]
    },
    {
        id: 23,
        title: "CCNP (Network Professional)",
        slug: "ccnp-network-professional",
        category: "CCNA",
        description: "CCNP certification validates advanced networking skills for planning, implementing, verifying and troubleshooting enterprise networks.",
        img: "/courses/ccnp.jpg",
        rating: "4.8",
        students: "650",
        locked: true,
        aboutData: {
            topic: "Advance Your Networking Career with CCNP",
            content1: "Master enterprise networking technologies including advanced routing, switching, and network design with hands-on lab practice.",
            content2: "This course prepares you for the Cisco CCNP Enterprise certification exam."
        },
        whatYouLearnData: [
            { title: "Advanced Routing", desc: "OSPF, EIGRP, BGP protocols.", icon: "bi bi-signpost-split" },
            { title: "Advanced Switching", desc: "VLANs, STP, EtherChannel.", icon: "bi bi-diagram-2" },
            { title: "SD-WAN", desc: "Software-defined WAN solutions.", icon: "bi bi-cloud-haze2" },
            { title: "Network Automation", desc: "Python and Ansible for networks.", icon: "bi bi-robot" },
            { title: "QoS", desc: "Quality of Service implementation.", icon: "bi bi-speedometer" },
            { title: "Troubleshooting", desc: "Advanced network diagnostics.", icon: "bi bi-tools" }
        ],
        courseContentData: [
            { id: "ccnp1", title: "Advanced Routing", icon: "bi bi-signpost-split", defaultOpen: true, items: ["OSPF Multi-Area", "EIGRP Advanced", "BGP Fundamentals", "Route Redistribution"] },
            { id: "ccnp2", title: "Advanced Switching", icon: "bi bi-diagram-2", items: ["Rapid STP", "EtherChannel", "Private VLANs", "Switch Security"] },
            { id: "ccnp3", title: "SD-WAN & Automation", icon: "bi bi-robot", items: ["SD-WAN Architecture", "vManage", "Python for Networks", "Ansible Automation"] },
            { id: "ccnp4", title: "QoS & Troubleshooting", icon: "bi bi-tools", items: ["QoS Models", "Traffic Shaping", "Network Diagnostics", "CCNP Exam Prep"] }
        ],
        faqData: [
            { question: "Do I need CCNA before CCNP?", answer: "Yes, CCNA knowledge is recommended as CCNP builds on those fundamentals with advanced concepts." },
            { question: "What is the CCNP exam format?", answer: "CCNP Enterprise requires two exams: a core exam (ENCOR) and a concentration exam of your choice." },
            { question: "How long does this course take?", answer: "The course is designed to be completed in 3-4 months with dedicated study and lab practice." },
            { question: "What tools are used for practice?", answer: "We use Cisco Packet Tracer, GNS3, and EVE-NG for hands-on lab simulations." },
            { question: "What salary can I expect with CCNP?", answer: "CCNP certified professionals command significantly higher salaries than CCNA holders with more senior roles available." }
        ]
    },
    {
        id: 24,
        title: "Network Security",
        slug: "network-security",
        category: "CCNA",
        description: "Network Security covers the policies, tools, and technologies used to protect network infrastructure from unauthorized access, misuse, and attacks.",
        img: "/courses/networkSecurity.webp",
        rating: "4.7",
        students: "820",
        locked: true,
        aboutData: {
            topic: "Master Network Security for Enterprise Protection",
            content1: "Learn firewalls, VPNs, IDS/IPS systems, and network security protocols to defend enterprise networks from modern threats.",
            content2: "This course prepares you for security roles and certifications like Cisco CCNA Security and CompTIA Security+."
        },
        whatYouLearnData: [
            { title: "Firewall Configuration", desc: "Cisco ASA and next-gen firewalls.", icon: "bi bi-shield-fill" },
            { title: "VPN Setup", desc: "Site-to-site and remote access VPNs.", icon: "bi bi-lock" },
            { title: "IDS/IPS", desc: "Intrusion detection and prevention.", icon: "bi bi-eye" },
            { title: "AAA Security", desc: "Authentication, Authorization, Accounting.", icon: "bi bi-person-badge" },
            { title: "ACL & Filtering", desc: "Access control list configuration.", icon: "bi bi-funnel" },
            { title: "Security Protocols", desc: "SSL, TLS, IPSec, and SSH.", icon: "bi bi-shield-lock" }
        ],
        courseContentData: [
            { id: "ns1", title: "Network Security Fundamentals", icon: "bi bi-shield-fill", defaultOpen: true, items: ["Threats & Vulnerabilities", "Security Policies", "CIA Triad", "Network Attack Types"] },
            { id: "ns2", title: "Firewall & VPN", icon: "bi bi-lock", items: ["Cisco ASA Setup", "Zone-Based Firewall", "IPSec VPN", "SSL VPN"] },
            { id: "ns3", title: "IDS/IPS & AAA", icon: "bi bi-eye", items: ["Snort IDS Basics", "IPS Deployment", "RADIUS & TACACS+", "802.1X Authentication"] },
            { id: "ns4", title: "Advanced Security", icon: "bi bi-shield-lock", items: ["PKI & Certificates", "Network Hardening", "SIEM Basics", "Security Auditing"] }
        ],
        faqData: [
            { question: "Do I need CCNA before this course?", answer: "Basic networking knowledge equivalent to CCNA is recommended before taking this course." },
            { question: "What certifications does this prepare me for?", answer: "This course prepares you for Cisco CCNA Security and CompTIA Security+ certifications." },
            { question: "Is network security a growing field?", answer: "Yes, cybersecurity is one of the fastest-growing IT fields with a massive global talent shortage." },
            { question: "Will I get hands-on practice?", answer: "Yes, we use Cisco Packet Tracer and GNS3 for real firewall, VPN, and IDS/IPS configurations." },
            { question: "What jobs can I get?", answer: "Network Security Engineer, Security Analyst, and Firewall Administrator are common roles." }
        ]
    },
    {
        id: 25,
        title: "Ethical Hacking",
        slug: "ethical-hacking",
        category: "CCNA",
        description: "Ethical Hacking involves legally breaking into systems to identify vulnerabilities before malicious hackers can exploit them.",
        img: "/courses/ethicalHacking.webp",
        rating: "4.9",
        students: "1400",
        locked: true,
        aboutData: {
            topic: "Become a Certified Ethical Hacker",
            content1: "Learn penetration testing techniques, hacking tools, and methodologies used by professional security researchers and red team experts.",
            content2: "This course prepares you for CEH certification and a career in offensive security."
        },
        whatYouLearnData: [
            { title: "Reconnaissance", desc: "Footprinting and information gathering.", icon: "bi bi-binoculars" },
            { title: "Network Scanning", desc: "Nmap and vulnerability scanning.", icon: "bi bi-radar" },
            { title: "Exploitation", desc: "Metasploit and penetration testing.", icon: "bi bi-bug" },
            { title: "Web App Hacking", desc: "SQL injection, XSS, CSRF attacks.", icon: "bi bi-globe" },
            { title: "Password Cracking", desc: "Hashcat and John the Ripper.", icon: "bi bi-key" },
            { title: "Report Writing", desc: "Professional pentest reporting.", icon: "bi bi-file-earmark-text" }
        ],
        courseContentData: [
            { id: "eh1", title: "Hacking Fundamentals", icon: "bi bi-shield-exclamation", defaultOpen: true, items: ["Ethical Hacking Overview", "Hacking Phases", "Legal & Compliance", "Lab Setup with Kali Linux"] },
            { id: "eh2", title: "Reconnaissance & Scanning", icon: "bi bi-radar", items: ["Passive Reconnaissance", "Active Scanning with Nmap", "Vulnerability Assessment", "Enumeration Techniques"] },
            { id: "eh3", title: "Exploitation Techniques", icon: "bi bi-bug", items: ["Metasploit Framework", "Privilege Escalation", "Password Attacks", "Social Engineering"] },
            { id: "eh4", title: "Web & Wireless Hacking", icon: "bi bi-globe", items: ["OWASP Top 10", "SQL Injection", "XSS & CSRF", "Wireless Network Attacks"] }
        ],
        faqData: [
            { question: "Is ethical hacking legal?", answer: "Yes, ethical hacking is completely legal when performed with proper written authorization from the system owner." },
            { question: "What operating system is used?", answer: "We primarily use Kali Linux, the industry-standard OS for penetration testing and ethical hacking." },
            { question: "What certification does this prepare me for?", answer: "This course aligns with the Certified Ethical Hacker (CEH) exam by EC-Council." },
            { question: "Do I need programming knowledge?", answer: "Basic understanding of networking and Linux is helpful. We teach the necessary scripting as part of the course." },
            { question: "What jobs can I get?", answer: "Penetration Tester, Security Researcher, Red Team Analyst, and Bug Bounty Hunter are popular career paths." }
        ]
    },
    {
        id: 26,
        title: "Cyber Security",
        slug: "cyber-security",
        category: "CCNA",
        description: "Cyber Security protects systems, networks, and programs from digital attacks, data breaches, and unauthorized access in the modern digital world.",
        img: "/courses/cyberSecurity.webp",
        rating: "4.8",
        students: "1600",
        locked: true,
        aboutData: {
            topic: "Master Cyber Security for the Modern Threat Landscape",
            content1: "Learn threat intelligence, SOC operations, incident response, and security frameworks used by enterprise security teams worldwide.",
            content2: "This course prepares you for certifications like CompTIA Security+, CEH, and CISSP and in-demand SOC Analyst roles."
        },
        whatYouLearnData: [
            { title: "Threat Intelligence", desc: "Identify and analyze cyber threats.", icon: "bi bi-eye" },
            { title: "SOC Operations", desc: "Security Operations Center workflows.", icon: "bi bi-display" },
            { title: "Incident Response", desc: "Handle and recover from cyberattacks.", icon: "bi bi-exclamation-triangle" },
            { title: "SIEM Tools", desc: "Splunk and IBM QRadar basics.", icon: "bi bi-graph-up" },
            { title: "Cloud Security", desc: "Securing AWS, Azure environments.", icon: "bi bi-cloud-lock" },
            { title: "Compliance", desc: "ISO 27001, GDPR, and NIST frameworks.", icon: "bi bi-file-earmark-check" }
        ],
        courseContentData: [
            { id: "cs1", title: "Cyber Security Fundamentals", icon: "bi bi-shield-lock", defaultOpen: true, items: ["Cybersecurity Landscape", "Types of Attacks", "Security Frameworks", "Risk Management"] },
            { id: "cs2", title: "SOC & Threat Intelligence", icon: "bi bi-display", items: ["SOC Roles & Tiers", "SIEM with Splunk", "Threat Hunting", "Log Analysis"] },
            { id: "cs3", title: "Incident Response", icon: "bi bi-exclamation-triangle", items: ["IR Lifecycle", "Digital Forensics Basics", "Malware Analysis", "Recovery Planning"] },
            { id: "cs4", title: "Cloud Security & Compliance", icon: "bi bi-cloud-lock", items: ["AWS Security Basics", "Zero Trust Architecture", "GDPR & ISO 27001", "Security Auditing"] }
        ],
        faqData: [
            { question: "Who should take this course?", answer: "IT professionals, network engineers, and anyone looking to transition into cybersecurity can benefit from this course." },
            { question: "What certifications does this prepare me for?", answer: "CompTIA Security+, CEH, and SOC Analyst certifications are aligned with this course content." },
            { question: "Is coding required for cybersecurity?", answer: "Basic scripting in Python or Bash is helpful but not required. We cover the necessary skills in the course." },
            { question: "What is a SOC Analyst?", answer: "A SOC Analyst monitors and responds to security incidents in a Security Operations Center, one of the most in-demand roles today." },
            { question: "What salary can I expect?", answer: "Cybersecurity professionals are among the highest-paid IT workers globally due to the critical nature of their work." }
        ]
    },
];

export default courses;