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
            {
                id: "rn1",
                title: "Introduction to React Native",
                icon: "bi bi-phone",
                defaultOpen: true,
                items: ["Environment Setup", "JSX and Components", "Styling with Flexbox", "Props and State"]
            },
            {
                id: "rn2",
                title: "Backend Development",
                icon: "bi bi-server",
                items: ["Node.js Basics", "Express Framework", "RESTful APIs", "Authentication"]
            },
            {
                id: "rn3",
                title: "Advanced State Management",
                icon: "bi bi-diagram-3",
                items: ["Redux Setup", "Middleware", "Context API", "Performance Optimization"]
            },
            {
                id: "rn4",
                title: "Testing & Deployment",
                icon: "bi bi-check2-circle",
                items: ["Unit Testing with Jest", "E2E Testing", "App Store Publishing", "Play Store Deployment"]
            }
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
            {
                id: "st1",
                title: "Manual Testing Basics",
                icon: "bi bi-clipboard-check",
                defaultOpen: true,
                items: ["SDLC & STLC", "Test Scenarios & Cases", "Defect Life Cycle", "Test Documentation"]
            },
            {
                id: "st2",
                title: "Automation with Selenium",
                icon: "bi bi-robot",
                items: ["WebDriver Setup", "Locators", "TestNG Framework", "Page Object Model"]
            },
            {
                id: "st3",
                title: "API & Performance Testing",
                icon: "bi bi-speedometer",
                items: ["Postman Basics", "REST Assured", "JMeter Introduction", "Load Testing"]
            },
            {
                id: "st4",
                title: "Advanced Topics",
                icon: "bi bi-star",
                items: ["CI/CD with Jenkins", "BDD with Cucumber", "Cross-Browser Testing", "Mobile Testing"]
            }
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
            {
                id: "java1",
                title: "Java Fundamentals",
                icon: "bi bi-code-slash",
                defaultOpen: true,
                items: [
                    "Java environment setup",
                    "Syntax and data types",
                    "Control statements and operators",
                    "Arrays and strings"
                ]
            },
            {
                id: "java2",
                title: "Object-Oriented Programming",
                icon: "bi bi-box-seam",
                items: [
                    "Classes and Objects",
                    "Inheritance and Polymorphism",
                    "Encapsulation and Abstraction",
                    "Interfaces and Abstract Classes"
                ]
            },
            {
                id: "java3",
                title: "Exception Handling & File I/O",
                icon: "bi bi-exclamation-triangle",
                items: [
                    "Try-catch blocks",
                    "Custom exceptions",
                    "File reading and writing",
                    "Serialization"
                ]
            },
            {
                id: "java4",
                title: "Advanced Core Concepts",
                icon: "bi bi-gear-wide-connected",
                items: [
                    "Multithreading",
                    "Synchronization",
                    "Collections Framework",
                    "JDBC Connectivity"
                ]
            },
            {
                id: "java5",
                title: "Java 8+ Features",
                icon: "bi bi-stars",
                items: [
                    "Lambda Expressions",
                    "Stream API",
                    "Functional Interfaces",
                    "Optional Class"
                ]
            },
            {
                id: "java6",
                title: "Enterprise Java",
                icon: "bi bi-building",
                items: [
                    "Spring Framework Basics",
                    "Spring Boot Introduction",
                    "RESTful Web Services",
                    "Microservices Architecture"
                ]
            }
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
            {
                id: "mern1",
                title: "Frontend with React",
                icon: "bi bi-code-square",
                defaultOpen: true,
                items: ["React Basics", "Hooks", "Context API", "Component Lifecycle"]
            },
            {
                id: "mern2",
                title: "Backend with Node & Express",
                icon: "bi bi-server",
                items: ["Node Modules", "Express Routing", "Middleware", "Error Handling"]
            },
            {
                id: "mern3",
                title: "Database with MongoDB",
                icon: "bi bi-database",
                items: ["MongoDB Atlas Setup", "CRUD Operations", "Mongoose ORM", "Data Modeling"]
            },
            {
                id: "mern4",
                title: "Full Stack Integration & Deployment",
                icon: "bi bi-cloud-arrow-up",
                items: ["Authentication with JWT", "State Management", "Testing", "Cloud Deployment"]
            }
        ]
    },
    {
        id: 5,
        title: "AWS",
        slug: "aws",
        category: "Development",
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
            {
                id: "aws1",
                title: "AWS Fundamentals",
                icon: "bi bi-cloud",
                defaultOpen: true,
                items: ["Cloud Concepts", "Global Infrastructure", "Free Tier", "AWS Management Console"]
            },
            {
                id: "aws2",
                title: "Core Services",
                icon: "bi bi-server",
                items: ["EC2 Instances", "S3 Buckets", "RDS Databases", "VPC Networking"]
            },
            {
                id: "aws3",
                title: "Security & IAM",
                icon: "bi bi-shield-lock",
                items: ["IAM Users & Roles", "Security Groups", "KMS Encryption", "CloudTrail Logging"]
            },
            {
                id: "aws4",
                title: "Advanced Services & DevOps",
                icon: "bi bi-diagram-3",
                items: ["Lambda Functions", "CloudWatch Monitoring", "CloudFormation", "CI/CD with CodePipeline"]
            }
        ]
    },
    {
        id: 6,
        title: "Business Intelligence",
        slug: "business-intelligence",
        category: "Development",
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
            {
                id: "bi1",
                title: "Introduction to BI",
                icon: "bi bi-lightbulb",
                defaultOpen: true,
                items: ["BI Concepts", "Data Warehousing", "Role of a BI Analyst", "Business Requirements"]
            },
            {
                id: "bi2",
                title: "Power BI Essentials",
                icon: "bi bi-bar-chart",
                items: ["Connecting Data", "Data Transformation", "Building Reports", "DAX Functions"]
            },
            {
                id: "bi3",
                title: "SQL for Analytics",
                icon: "bi bi-table",
                items: ["SELECT Queries", "Joins & Subqueries", "Aggregations", "Window Functions"]
            },
            {
                id: "bi4",
                title: "ETL & Advanced Analytics",
                icon: "bi bi-arrow-repeat",
                items: ["ETL Processes", "Tableau Fundamentals", "Data Visualization Best Practices", "Dashboard Design"]
            }
        ]
    },
    {
        id: 7,
        title: "Cisco Certified Network Associate",
        slug: "cisco-certified-network-associate",
        category: "Development",
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
            {
                id: "ccna1",
                title: "Networking Basics",
                icon: "bi bi-hdd-network",
                defaultOpen: true,
                items: ["Network Types", "Topologies", "Protocols", "OSI Model"]
            },
            {
                id: "ccna2",
                title: "Routing Concepts",
                icon: "bi bi-signpost-split",
                items: ["Static Routing", "Dynamic Routing", "Router Configuration", "OSPF & EIGRP"]
            },
            {
                id: "ccna3",
                title: "Switching & VLANs",
                icon: "bi bi-diagram-2",
                items: ["Switch Configuration", "VLANs", "Trunking", "STP Protocol"]
            },
            {
                id: "ccna4",
                title: "Security & Troubleshooting",
                icon: "bi bi-shield-check",
                items: ["ACLs", "VPN Configuration", "Network Security", "Diagnostic Tools"]
            }
        ]
    },
    {
        id: 8,
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
            {
                id: "mb1",
                title: "Healthcare Basics",
                icon: "bi bi-hospital",
                defaultOpen: true,
                items: ["US Healthcare System", "HIPAA Regulations", "Patient Privacy", "Medical Terminology"]
            },
            {
                id: "mb2",
                title: "Medical Coding",
                icon: "bi bi-upc-scan",
                items: ["ICD-10 Guidelines", "CPT Modifiers", "HCPCS Codes", "Coding Accuracy"]
            },
            {
                id: "mb3",
                title: "Claims Processing",
                icon: "bi bi-file-earmark-text",
                items: ["Insurance Verification", "Claims Submission", "Denial Management", "Follow-up Procedures"]
            },
            {
                id: "mb4",
                title: "Compliance & Software",
                icon: "bi bi-laptop",
                items: ["Healthcare Compliance", "Billing Software Training", "Revenue Cycle", "Account Receivables"]
            }
        ]
    },
];

export default courses;
