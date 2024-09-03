import GraphicsImg from "../assets/courses/courseImg.jpg";
import GraphicsBanner from "../assets/courses/courseBanner.jpg";
import pythonImg from "../assets/courses/python.jpeg";
import pythonBanner from "../assets/courses/pythonBanner.jpg";
import djangoImg from "../assets/courses/django.jpg";
import djangoBanner from "../assets/courses/djangoBanner.jpg";
import mern from "../assets/courses/Mern.jpg";
import mernBanner from "../assets/courses/mernBanner.jpg";
import flutter from "../assets/courses/flutter.png";
import flutterBanner from "../assets/courses/flutterBanner.jpg";
import ml from "../assets/courses/ml.jpg";
import mlBanner from "../assets/courses/mlBanner.jpg";
import BI from "../assets/courses/BI.jpg";
import BIBanner from "../assets/courses/BIBanner.png";
import kids from "../assets/courses/kids.png";
import kidsBanner from "../assets/courses/kidsBanner.png";
import ccna from "../assets/courses/CCNABanner.jpeg";
import ccnaBanner from "../assets/courses/CCNABanner.jpg";
import digital from "../assets/courses/digital.jpg";
import digitalBanner from "../assets/courses/digitalBanner.jpg";
import english from "../assets/courses/english.jpg";
import englishBanner from "../assets/courses/englishBanner.jpg";
import grammar from "../assets/courses/grammar.png";
import grammarBanner from "../assets/courses/grammarBanner.jpg";
import ielts from "../assets/courses/ielts.png";
import ieltsBanner from "../assets/courses/ieltsBanner.png";
import Erp from "../assets/software/ERP.jpg";
import Hr from "../assets/software/HR.jpg";
import School from "../assets/software/school.jpg";
import domainHosting from "../assets/Websolution/domainHosting.png";
import webSecurity from "../assets/Websolution/webSecurity.png";
import b2bc from "../assets/Websolution/b2b.webp";

import { v4 as uuidv4 } from "uuid";

// export const categories = [
//   {
//     name: "course",
//     id: 111,
//     products: [
//       {
//         productName: "Graphics Design",
//         productId: 1,
//       },
//       {
//         productName: "Digital Marketing",
//         productId: 2,
//       },
//       {
//         productName: "Web Development with Django",
//         productId: 3,
//       },
//       {
//         productName: "Web Development with MERN Stack",
//         productId: 4,
//       },
//       {
//         productName: "Mobile App Development with Flutter",
//         productId: 5,
//       },
//     ],
//   },

//   {
//     name: "Software Services",
//     id: 222,
//     products: [
//       {
//         productName: "School Management",
//         productId: 6,
//       },
//       {
//         productName: "Enterprise Resource Planning System",
//         productId: 7,
//       },
//       {
//         productName: "HR Management Software",
//         productId: 8,
//       },
//     ],
//   },

//   {
//     name: "web solution",
//     id: 333,
//     products: [
//       {
//         productName: "Domain & Hosting",
//         productId: 9,
//       },
//       {
//         productName: "Web Security",
//         productId: 10,
//       },
//       {
//         productName: "B2B/B2C Portal",
//         productId: 11,
//       },
//     ],
//   },
// ];

// export const trainingCourses = [
//   {
//     id: 1,
//     name: "Graphics Design",
//     category: "course",

//     price: 15000,
//     // courseImg: GraphicsImg,
//     img: GraphicsBanner,
//     roadmap:
//       "Dive into the History of Graphic Design, Master the Design Principles & Process, Geek Out On Typography, Study the Fundamentals of Color, Get Well Versed in Design Terminology, Master Design Programs, Get Creatively Inspired, Get Social, Submit your Work, Join Design Group and Network, Explore Creative Career Paths, Start a Passion Project",

//     materials:
//       "Adobe Photoshop - CC, Adobe Illustrator - CC, Business Card Design, Logo Design, Brochure Design, Banner Design, Web Template Design, Flyer Design, Course Duration 4 Month, Weekly 3 Class, Class time 1.5 Hours",
//     queries:
//       "Graphic design involves creating visual content to convey messages effectively. Designers use typography, images, and layout techniques to meet user needs and enhance the user experience. While salaries for graphic designers in Bangladesh vary, it can be a rewarding career choice, especially with training and job opportunities available. However, the demand for graphic designers may fluctuate depending on the industry. Despite age, starting a career in graphic design or any field at 30 is feasible and may even offer advantages, as individuals may have gained valuable skills and experiences.",
//   },
//   {
//     id: 2,
//     name: "Digital Marketing",
//     category: "course",

//     price: 18000,
//     // courseImg: digital,
//     img: digitalBanner,
//     roadmap:
//       "Introduction to digital marketing concepts, Understanding digital marketing channels (SEO, SEM, SMM, Email, Content), Market research and target audience analysis, Creating and optimizing websites for search engines (SEO), Implementing paid advertising campaigns (Google Ads, Facebook Ads), Creating and distributing content (blog posts, videos, infographics), Engaging with audiences on social media platforms, Email marketing strategies and automation, Analyzing marketing data and performance metrics, Conversion rate optimization (CRO) techniques, Understanding affiliate marketing and partnerships, Online reputation management, Marketing automation tools and platforms, Staying updated with digital marketing trends and algorithms, Continuous experimentation and optimization",

//     materials:
//       "Introduction to Digital Marketing, Understanding Digital Marketing Channels (SEO, SEM, SMM, Email Marketing), Search Engine Optimization (SEO) Techniques, Search Engine Marketing (SEM) Strategies (Google Ads), Social Media Marketing (SMM) Strategies (Facebook, Instagram, Twitter, LinkedIn), Content Marketing and Blogging, Email Marketing Campaigns, Web Analytics and Data Analysis, Digital Marketing Tools and Platforms, Creating Digital Marketing Strategies and Campaigns, Measuring and Evaluating Digital Marketing Performance, Digital Marketing Trends and Future Outlook",
//     queries:
//       "Digital marketing uses online channels to promote products, services, and brands. It's important for businesses as it allows them to connect with customers online, target specific groups, and track results easily. Learning digital marketing involves understanding various online techniques like SEO, social media, and email marketing. Anyone interested in marketing or upgrading their skills can take a digital marketing course. After completing the course, individuals can pursue careers such as digital marketing specialist, social media manager, or SEO analyst, as businesses increasingly seek professionals with digital marketing expertise.",
//   },
//   {
//     id: 3,
//     name: "Web Development with Django",
//     category: "course",

//     price: 25000,
//     // courseImg: djangoImg,
//     img: djangoBanner,
//     roadmap:
//       "Introduction to Django framework, Setting up Django environment, Understanding MVC architecture, Creating and managing Django apps, Working with models and databases (SQLite, PostgreSQL), Implementing user authentication and authorization, Creating views and templates, Handling URL routing, Understanding Django forms, Implementing class-based views, Working with static files and media, Implementing REST APIs with Django Rest Framework, Deploying Django applications, Testing and debugging Django applications, Exploring advanced Django features",

//     materials:
//       "Introduction to Django Framework, Setting Up Django Environment, Creating Django Projects and Apps, Django Models and Databases, Django Views and Templates, User Authentication and Authorization, Working with Forms and Form Validation, Django ORM (Object-Relational Mapping), Handling Static Files and Media, Django Admin Interface, RESTful APIs with Django REST Framework, Testing and Debugging Django Applications, Deploying Django Applications",
//     queries:
//       "Django is a Python web framework that helps developers quickly build web applications with clean, organized code. It's great for creating robust and secure websites. Job prospects for Django developers are strong, especially in industries like web development and startups. Learning Django can be challenging for beginners, but there are many resources available to help. After mastering Django, you can pursue careers as a Django developer, full-stack developer, or software engineer.",
//   },
//   {
//     id: 4,
//     name: "Web Development with MERN Stack",
//     category: "course",

//     price: 30000,
//     // courseImg: mern,
//     img: mernBanner,
//     roadmap:
//       "Introduction to MERN Stack (MongoDB, Express.js, React.js, Node.js), Setting up development environment, Understanding MongoDB (NoSQL database), Creating RESTful APIs with Express.js, Understanding React.js (frontend library), Building user interfaces with React.js, Working with React Router for client-side routing, State management with Redux (or Context API), Authentication and authorization in MERN applications, Integrating backend with frontend, Deploying MERN applications to platforms like Heroku, Netlify, Testing MERN applications, Exploring additional libraries and tools (e.g., Axios, Material-UI), Best practices and optimization techniques, Continuous learning and staying updated with latest trends",

//     materials:
//       "Introduction to MERN Stack, Setting Up Development Environment, Building React Components, State Management with Redux, Creating RESTful APIs with Node.js and Express, Working with MongoDB and Mongoose, User Authentication and Authorization, Handling Forms and Form Validation, Frontend Routing with React Router, Responsive Web Design with CSS and Bootstrap, Deploying MERN Applications to Heroku, Testing and Debugging MERN Applications, Best Practices and Advanced Topics",
//     queries:
//       "The MERN Stack is a popular choice for building modern web applications. It includes MongoDB, Express.js, React.js, and Node.js, allowing developers to use JavaScript for both frontend and backend development. MERN Stack is great for creating dynamic single-page applications, and job prospects for MERN Stack developers are strong, especially in startups and tech companies. While learning MERN Stack may be challenging for beginners, there are many resources available to help. After mastering MERN Stack, you can pursue careers such as MERN Stack developer, full-stack developer, or JavaScript developer.",
//   },
//   {
//     id: 5,
//     name: "Mobile App Development with Flutter",
//     category: "course",

//     price: 25000,
//     // courseImg: flutter,
//     img: flutterBanner,
//     roadmap:
//       "Introduction to Flutter framework, Setting up Flutter environment, Understanding Dart programming language, Building UI components with Flutter widgets, Layouts and navigation in Flutter apps, State management techniques (setState, Provider, Bloc), Handling user input and forms, Fetching and displaying data from APIs, Working with device features (camera, GPS), Styling and theming Flutter apps, Internationalization and localization, Handling platform-specific features and APIs, Testing and debugging Flutter apps, Deployment to app stores (Google Play Store, Apple App Store), Exploring Flutter ecosystem and packages",

//     materials:
//       "Introduction to Flutter and Dart Programming Language, Setting Up Flutter Development Environment, Understanding Widgets and Layouts, State Management in Flutter, Navigation and Routing in Flutter Apps, Working with APIs and HTTP Requests, User Authentication and Authorization, Local Database Management with SQLite, Working with Device Features (Camera, GPS, etc.), Implementing Responsive Design, Testing and Debugging Flutter Apps, Deployment to App Stores (iOS App Store and Google Play Store), Best Practices and Advanced Topics",
//     queries:
//       "Flutter is a UI software development kit by Google for building mobile, web, and desktop apps from one codebase. It's great for mobile app development, offering fast performance and a single codebase for iOS and Android. Job prospects for Flutter developers are strong, with demand expected to grow. Learning Flutter is relatively easy, especially for developers familiar with object-oriented languages. After learning Flutter, you can pursue careers as a mobile app developer, UI/UX designer, or frontend developer.",
//   },
// ];

// export const softwareServices = [
//   {
//     id: 6,
//     category: "Software Services",

//     name: "School Management",
//     img: School,

//     productDescription:
//       "Our School/College Management system offers you to control all of the daily activity of your School. By using this Software, you can save your time and money. Some useful feature is included in this Software. Take a look at them all.",
//     features:
//       "Different Types of Profile Management, Attendance and Class Schedule Management, Exam Management and Mark Evaluation, Result and Notification System, Tracking Fees and Payment, Study Materials and Assessments, Transport Management, Library Management, School Accounts and Fund Management, Academic Year And Session Management",
//     importance:
//       "Simplicity To Use, Up-gradation in Requirements, Your Own System, User-Friendly, High Quality Software, Progressively Reliable School ERP, Summarize Your School, Secure Funding",
//   },
//   {
//     id: 7,
//     category: "Software Services",

//     name: "Enterprise Resource Planning System",
//     img: Erp,

//     productDescription:
//       "Our Enterprise Resource Planning (ERP) System offers comprehensive management solutions for your organization, covering HR & Admin, Accounts, Billing, Customer Database, Stock Management, Inventory Management, Employee Attendance, and Data & Reports. Take a look at the features below:",
//     features:
//       "HR & Admin 🕵🏽, Employee Payroll 💸, Accounts Section 📈, Billing 🎉, Customer Database 📓, Stock Management 📡, Inventory Management 🧵, Employee Attendance 🙋🏽, Data & Reports ⚙️",
//     importance:
//       "Saving Money ❤️, Improved Collaboration 💠, Better Analytics 🔆, Improved Productivity 🎊, Happier Customers 👨, Improved Inventory and Production Management 🦸‍♂️",
//   },
//   {
//     id: 8,
//     name: "HR Management Software",
//     category: "Software Services",

//     img: Hr,
//     productDescription:
//       "HR Management Software brings you a comprehensive Human Resource Management solution with exclusive features designed to streamline your HR processes. Take a look at what our software offers:",
//     features:
//       "Employee Profile Management 🕵🏼‍♀️, Complaints/Disputes 👨🏼‍🚀, Departments and Designations 👩🏼‍💼, Employee Attendance 🙋🏼, Employee Leave and Vacation Management ⛱, Employee Payroll Management 💸, Performance Evaluation and Awards 🏆, Private Messaging 📩",
//     importance:
//       "Improved decision-making effectiveness 🎇, Improved Productivity 💎, Measurable ROI ⚖️, HR Modules Help Business Management Efficiency 🧬, Improved Security 🎆",
//   },
// ];

// export const webSolution = [
//   {
//     id: 9,
//     productName: "Domain & Hosting",
//     category: "web solution",

//     img: domainHosting,

//     productDescription:
//       "Our Domain & Hosting services offer you reliable and secure hosting solutions for your website. Whether you're a small business or a large enterprise, we provide scalable hosting plans tailored to your needs. With our domain registration services, you can find and register the perfect domain name for your online presence. Take a look at our exclusive features below.",
//     features:
//       "Domain Registration, Web Hosting, Scalable Plans, 24/7 Support, Security, Backup Solutions, Email Hosting",
//     importance:
//       "Reliability, Security, Scalability, Support, Backup, Affordability",
//   },
//   {
//     id: 10,
//     productName: "Web Security",
//     category: "web solution",

//     img: webSecurity,

//     productDescription:
//       "Our Web Security services provide comprehensive protection for your website, ensuring the safety and integrity of your online presence. From safeguarding against cyber threats to implementing robust security measures, we prioritize the security of your website and data. Explore our exclusive features below to see how we can help secure your online assets.",
//     features:
//       "SSL/TLS Encryption, Firewall Protection, Malware Detection & Removal, DDoS Mitigation, Vulnerability Scanning, Security Monitoring, Security Updates & Patches",
//     importance:
//       "Data Protection, Prevent Cyber Attacks, Maintain Trust, Compliance, Business Continuity, Reputation Management",
//   },
//   {
//     id: 11,
//     productName: "B2B/B2C Portal",
//     category: "web solution",

//     img: b2bc,
//     productDescription:
//       "Our B2B/B2C Portal offers a comprehensive platform for businesses to connect and transact seamlessly with each other (B2B) and with consumers (B2C). Whether you're a supplier, distributor, or retailer, our portal provides the tools and features you need to manage your relationships and transactions effectively. Explore the features below to see how our portal can streamline your business operations and enhance your customer experience.",
//     features:
//       "Supplier Management, Distributor Management, Retailer Dashboard, Customer Account Management, Order Processing, Inventory Management, Payment Gateway Integration, Analytics & Reporting, Customization & Scalability, Mobile-Friendly Interface",
//     importance:
//       "Efficient Transactions, Improved Customer Experience, Increased Reach, Enhanced Collaboration, Data-driven Insights, Scalability & Flexibility, Competitive Advantage, Cost Savings",
//   },
// ];

export const categoriesMain = [
  {
    name: "course",
    id: 111,
  },

  {
    name: "Software Services",
    id: 222,
  },

  {
    name: "web solution",
    id: 333,
  },
];

export const products = [
  {
    id: 1,
    name: "Graphics Design",
    category: {
      name: "course",
      id: 111,
    },
    price: 15000,

    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714235816/courseBanner_apy4ro.jpg",
    roadmap:
      "Dive into the History of Graphic Design, Master the Design Principles & Process, Geek Out On Typography, Study the Fundamentals of Color, Get Well Versed in Design Terminology, Master Design Programs, Get Creatively Inspired, Get Social, Submit your Work, Join Design Group and Network, Explore Creative Career Paths, Start a Passion Project",

    materials:
      "Adobe Photoshop - CC, Adobe Illustrator - CC, Business Card Design, Logo Design, Brochure Design, Banner Design, Web Template Design, Flyer Design, Course Duration 4 Month, Weekly 3 Class, Class time 1.5 Hours",
    queries:
      "Graphic design involves creating visual content to convey messages effectively. Designers use typography, images, and layout techniques to meet user needs and enhance the user experience. While salaries for graphic designers in Bangladesh vary, it can be a rewarding career choice, especially with training and job opportunities available. However, the demand for graphic designers may fluctuate depending on the industry. Despite age, starting a career in graphic design or any field at 30 is feasible and may even offer advantages, as individuals may have gained valuable skills and experiences.",
  },
  {
    id: 2,
    name: "Digital Marketing",
    category: {
      name: "course",
      id: 111,
    },
    price: 18000,
    // courseImg: digital,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714235890/digitalBanner_w5znrs.jpg",
    roadmap:
      "Introduction to digital marketing concepts, Understanding digital marketing channels (SEO, SEM, SMM, Email, Content), Market research and target audience analysis, Creating and optimizing websites for search engines (SEO), Implementing paid advertising campaigns (Google Ads, Facebook Ads), Creating and distributing content (blog posts, videos, infographics), Engaging with audiences on social media platforms, Email marketing strategies and automation, Analyzing marketing data and performance metrics, Conversion rate optimization (CRO) techniques, Understanding affiliate marketing and partnerships, Online reputation management, Marketing automation tools and platforms, Staying updated with digital marketing trends and algorithms, Continuous experimentation and optimization",

    materials:
      "Introduction to Digital Marketing, Understanding Digital Marketing Channels (SEO, SEM, SMM, Email Marketing), Search Engine Optimization (SEO) Techniques, Search Engine Marketing (SEM) Strategies (Google Ads), Social Media Marketing (SMM) Strategies (Facebook, Instagram, Twitter, LinkedIn), Content Marketing and Blogging, Email Marketing Campaigns, Web Analytics and Data Analysis, Digital Marketing Tools and Platforms, Creating Digital Marketing Strategies and Campaigns, Measuring and Evaluating Digital Marketing Performance, Digital Marketing Trends and Future Outlook",
    queries:
      "Digital marketing uses online channels to promote products, services, and brands. It's important for businesses as it allows them to connect with customers online, target specific groups, and track results easily. Learning digital marketing involves understanding various online techniques like SEO, social media, and email marketing. Anyone interested in marketing or upgrading their skills can take a digital marketing course. After completing the course, individuals can pursue careers such as digital marketing specialist, social media manager, or SEO analyst, as businesses increasingly seek professionals with digital marketing expertise.",
  },
  {
    id: 3,
    name: "Web Development with Django",
    category: {
      name: "course",
      id: 111,
    },
    price: 25000,
    // courseImg: djangoImg,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714235947/djangoBanner_w78eux.jpg",
    roadmap:
      "Introduction to Django framework, Setting up Django environment, Understanding MVC architecture, Creating and managing Django apps, Working with models and databases (SQLite, PostgreSQL), Implementing user authentication and authorization, Creating views and templates, Handling URL routing, Understanding Django forms, Implementing class-based views, Working with static files and media, Implementing REST APIs with Django Rest Framework, Deploying Django applications, Testing and debugging Django applications, Exploring advanced Django features",

    materials:
      "Introduction to Django Framework, Setting Up Django Environment, Creating Django Projects and Apps, Django Models and Databases, Django Views and Templates, User Authentication and Authorization, Working with Forms and Form Validation, Django ORM (Object-Relational Mapping), Handling Static Files and Media, Django Admin Interface, RESTful APIs with Django REST Framework, Testing and Debugging Django Applications, Deploying Django Applications",
    queries:
      "Django is a Python web framework that helps developers quickly build web applications with clean, organized code. It's great for creating robust and secure websites. Job prospects for Django developers are strong, especially in industries like web development and startups. Learning Django can be challenging for beginners, but there are many resources available to help. After mastering Django, you can pursue careers as a Django developer, full-stack developer, or software engineer.",
  },
  {
    id: 4,
    name: "Web Development with MERN Stack",
    category: {
      name: "course",
      id: 111,
    },
    price: 30000,
    // courseImg: mern,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236005/mernBanner_mrgi15.jpg",
    roadmap:
      "Introduction to MERN Stack (MongoDB, Express.js, React.js, Node.js), Setting up development environment, Understanding MongoDB (NoSQL database), Creating RESTful APIs with Express.js, Understanding React.js (frontend library), Building user interfaces with React.js, Working with React Router for client-side routing, State management with Redux (or Context API), Authentication and authorization in MERN applications, Integrating backend with frontend, Deploying MERN applications to platforms like Heroku, Netlify, Testing MERN applications, Exploring additional libraries and tools (e.g., Axios, Material-UI), Best practices and optimization techniques, Continuous learning and staying updated with latest trends",

    materials:
      "Introduction to MERN Stack, Setting Up Development Environment, Building React Components, State Management with Redux, Creating RESTful APIs with Node.js and Express, Working with MongoDB and Mongoose, User Authentication and Authorization, Handling Forms and Form Validation, Frontend Routing with React Router, Responsive Web Design with CSS and Bootstrap, Deploying MERN Applications to Heroku, Testing and Debugging MERN Applications, Best Practices and Advanced Topics",
    queries:
      "The MERN Stack is a popular choice for building modern web applications. It includes MongoDB, Express.js, React.js, and Node.js, allowing developers to use JavaScript for both frontend and backend development. MERN Stack is great for creating dynamic single-page applications, and job prospects for MERN Stack developers are strong, especially in startups and tech companies. While learning MERN Stack may be challenging for beginners, there are many resources available to help. After mastering MERN Stack, you can pursue careers such as MERN Stack developer, full-stack developer, or JavaScript developer.",
  },
  {
    id: 5,
    name: "Mobile App Development with Flutter",
    category: {
      name: "course",
      id: 111,
    },
    price: 25000,
    // courseImg: flutter,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236168/flutterBanner_lmzrph.jpg",
    roadmap:
      "Introduction to Flutter framework, Setting up Flutter environment, Understanding Dart programming language, Building UI components with Flutter widgets, Layouts and navigation in Flutter apps, State management techniques (setState, Provider, Bloc), Handling user input and forms, Fetching and displaying data from APIs, Working with device features (camera, GPS), Styling and theming Flutter apps, Internationalization and localization, Handling platform-specific features and APIs, Testing and debugging Flutter apps, Deployment to app stores (Google Play Store, Apple App Store), Exploring Flutter ecosystem and packages",

    materials:
      "Introduction to Flutter and Dart Programming Language, Setting Up Flutter Development Environment, Understanding Widgets and Layouts, State Management in Flutter, Navigation and Routing in Flutter Apps, Working with APIs and HTTP Requests, User Authentication and Authorization, Local Database Management with SQLite, Working with Device Features (Camera, GPS, etc.), Implementing Responsive Design, Testing and Debugging Flutter Apps, Deployment to App Stores (iOS App Store and Google Play Store), Best Practices and Advanced Topics",
    queries:
      "Flutter is a UI software development kit by Google for building mobile, web, and desktop apps from one codebase. It's great for mobile app development, offering fast performance and a single codebase for iOS and Android. Job prospects for Flutter developers are strong, with demand expected to grow. Learning Flutter is relatively easy, especially for developers familiar with object-oriented languages. After learning Flutter, you can pursue careers as a mobile app developer, UI/UX designer, or frontend developer.",
  },
  {
    id: 6,
    category: {
      name: "Software Services",
      id: 222,
    },
    price: 0,
    name: "School Management",
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236718/school_nximoc.jpg",

    productDescription:
      "Our School/College Management system offers you to control all of the daily activity of your School. By using this Software, you can save your time and money. Some useful feature is included in this Software. Take a look at them all.",
    features:
      "Different Types of Profile Management, Attendance and Class Schedule Management, Exam Management and Mark Evaluation, Result and Notification System, Tracking Fees and Payment, Study Materials and Assessments, Transport Management, Library Management, School Accounts and Fund Management, Academic Year And Session Management",
    importance:
      "Simplicity To Use, Up-gradation in Requirements, Your Own System, User-Friendly, High Quality Software, Progressively Reliable School ERP, Summarize Your School, Secure Funding",
  },
  {
    id: 7,
    category: {
      name: "Software Services",
      id: 222,
    },
    price: 0,
    name: "Enterprise Resource Planning System",
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236823/ERP_lbkx6w.jpg",

    productDescription:
      "Our Enterprise Resource Planning (ERP) System offers comprehensive management solutions for your organization, covering HR & Admin, Accounts, Billing, Customer Database, Stock Management, Inventory Management, Employee Attendance, and Data & Reports. Take a look at the features below:",
    features:
      "HR & Admin 🕵🏽, Employee Payroll 💸, Accounts Section 📈, Billing 🎉, Customer Database 📓, Stock Management 📡, Inventory Management 🧵, Employee Attendance 🙋🏽, Data & Reports ⚙️",
    importance:
      "Saving Money ❤️, Improved Collaboration 💠, Better Analytics 🔆, Improved Productivity 🎊, Happier Customers 👨, Improved Inventory and Production Management 🦸‍♂️",
  },
  {
    id: 8,
    name: "HR Management Software",
    category: {
      name: "Software Services",
      id: 222,
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236831/HR_lht2ip.jpg",
    productDescription:
      "HR Management Software brings you a comprehensive Human Resource Management solution with exclusive features designed to streamline your HR processes. Take a look at what our software offers:",
    features:
      "Employee Profile Management 🕵🏼‍♀️, Complaints/Disputes 👨🏼‍🚀, Departments and Designations 👩🏼‍💼, Employee Attendance 🙋🏼, Employee Leave and Vacation Management ⛱, Employee Payroll Management 💸, Performance Evaluation and Awards 🏆, Private Messaging 📩",
    importance:
      "Improved decision-making effectiveness 🎇, Improved Productivity 💎, Measurable ROI ⚖️, HR Modules Help Business Management Efficiency 🧬, Improved Security 🎆",
  },
  {
    id: 9,
    name: "Domain & Hosting",
    category: {
      name: "web solution",
      id: 333,
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236919/domainHosting_up6xib.png",

    productDescription:
      "Our Domain & Hosting services offer you reliable and secure hosting solutions for your website. Whether you're a small business or a large enterprise, we provide scalable hosting plans tailored to your needs. With our domain registration services, you can find and register the perfect domain name for your online presence. Take a look at our exclusive features below.",
    features:
      "Domain Registration, Web Hosting, Scalable Plans, 24/7 Support, Security, Backup Solutions, Email Hosting",
    importance:
      "Reliability, Security, Scalability, Support, Backup, Affordability",
  },
  {
    id: 10,
    name: "Web Security",
    category: {
      name: "web solution",
      id: 333,
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236919/webSecurity_gtctuf.png",

    productDescription:
      "Our Web Security services provide comprehensive protection for your website, ensuring the safety and integrity of your online presence. From safeguarding against cyber threats to implementing robust security measures, we prioritize the security of your website and data. Explore our exclusive features below to see how we can help secure your online assets.",
    features:
      "SSL/TLS Encryption, Firewall Protection, Malware Detection & Removal, DDoS Mitigation, Vulnerability Scanning, Security Monitoring, Security Updates & Patches",
    importance:
      "Data Protection, Prevent Cyber Attacks, Maintain Trust, Compliance, Business Continuity, Reputation Management",
  },
  {
    id: 11,
    name: "B2B/B2C Portal",
    category: {
      name: "web solution",
      id: 333,
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236917/b2b_esvsis.webp",
    productDescription:
      "Our B2B/B2C Portal offers a comprehensive platform for businesses to connect and transact seamlessly with each other (B2B) and with consumers (B2C). Whether you're a supplier, distributor, or retailer, our portal provides the tools and features you need to manage your relationships and transactions effectively. Explore the features below to see how our portal can streamline your business operations and enhance your customer experience.",
    features:
      "Supplier Management, Distributor Management, Retailer Dashboard, Customer Account Management, Order Processing, Inventory Management, Payment Gateway Integration, Analytics & Reporting, Customization & Scalability, Mobile-Friendly Interface",
    importance:
      "Efficient Transactions, Improved Customer Experience, Increased Reach, Enhanced Collaboration, Data-driven Insights, Scalability & Flexibility, Competitive Advantage, Cost Savings",
  },
];

//////////
[
  {
    name: "Graphics Design",
    category: {
      name: "course",
    },
    price: 15000,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714235816/courseBanner_apy4ro.jpg",
    roadmap:
      "Dive into the History of Graphic Design, Master the Design Principles & Process, Geek Out On Typography, Study the Fundamentals of Color, Get Well Versed in Design Terminology, Master Design Programs, Get Creatively Inspired, Get Social, Submit your Work, Join Design Group and Network, Explore Creative Career Paths, Start a Passion Project",
    materials:
      "Adobe Photoshop - CC, Adobe Illustrator - CC, Business Card Design, Logo Design, Brochure Design, Banner Design, Web Template Design, Flyer Design, Course Duration 4 Month, Weekly 3 Class, Class time 1.5 Hours",
    queries:
      "Graphic design involves creating visual content to convey messages effectively. Designers use typography, images, and layout techniques to meet user needs and enhance the user experience. While salaries for graphic designers in Bangladesh vary, it can be a rewarding career choice, especially with training and job opportunities available. However, the demand for graphic designers may fluctuate depending on the industry. Despite age, starting a career in graphic design or any field at 30 is feasible and may even offer advantages, as individuals may have gained valuable skills and experiences.",
  },
  {
    name: "Digital Marketing",
    category: {
      name: "course",
    },
    price: 18000,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714235890/digitalBanner_w5znrs.jpg",
    roadmap:
      "Introduction to digital marketing concepts, Understanding digital marketing channels (SEO, SEM, SMM, Email, Content), Market research and target audience analysis, Creating and optimizing websites for search engines (SEO), Implementing paid advertising campaigns (Google Ads, Facebook Ads), Creating and distributing content (blog posts, videos, infographics), Engaging with audiences on social media platforms, Email marketing strategies and automation, Analyzing marketing data and performance metrics, Conversion rate optimization (CRO) techniques, Understanding affiliate marketing and partnerships, Online reputation management, Marketing automation tools and platforms, Staying updated with digital marketing trends and algorithms, Continuous experimentation and optimization",
    materials:
      "Introduction to Digital Marketing, Understanding Digital Marketing Channels (SEO, SEM, SMM, Email Marketing), Search Engine Optimization (SEO) Techniques, Search Engine Marketing (SEM) Strategies (Google Ads), Social Media Marketing (SMM) Strategies (Facebook, Instagram, Twitter, LinkedIn), Content Marketing and Blogging, Email Marketing Campaigns, Web Analytics and Data Analysis, Digital Marketing Tools and Platforms, Creating Digital Marketing Strategies and Campaigns, Measuring and Evaluating Digital Marketing Performance, Digital Marketing Trends and Future Outlook",
    queries:
      "Digital marketing uses online channels to promote products, services, and brands. It's important for businesses as it allows them to connect with customers online, target specific groups, and track results easily. Learning digital marketing involves understanding various online techniques like SEO, social media, and email marketing. Anyone interested in marketing or upgrading their skills can take a digital marketing course. After completing the course, individuals can pursue careers such as digital marketing specialist, social media manager, or SEO analyst, as businesses increasingly seek professionals with digital marketing expertise.",
  },
  {
    name: "Web Development with Django",
    category: {
      name: "course",
    },
    price: 25000,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714235947/djangoBanner_w78eux.jpg",
    roadmap:
      "Introduction to Django framework, Setting up Django environment, Understanding MVC architecture, Creating and managing Django apps, Working with models and databases (SQLite, PostgreSQL), Implementing user authentication and authorization, Creating views and templates, Handling URL routing, Understanding Django forms, Implementing class-based views, Working with static files and media, Implementing REST APIs with Django Rest Framework, Deploying Django applications, Testing and debugging Django applications, Exploring advanced Django features",
    materials:
      "Introduction to Django Framework, Setting Up Django Environment, Creating Django Projects and Apps, Django Models and Databases, Django Views and Templates, User Authentication and Authorization, Working with Forms and Form Validation, Django ORM (Object-Relational Mapping), Handling Static Files and Media, Django Admin Interface, RESTful APIs with Django REST Framework, Testing and Debugging Django Applications, Deploying Django Applications",
    queries:
      "Django is a Python web framework that helps developers quickly build web applications with clean, organized code. It's great for creating robust and secure websites. Job prospects for Django developers are strong, especially in industries like web development and startups. Learning Django can be challenging for beginners, but there are many resources available to help. After mastering Django, you can pursue careers as a Django developer, full-stack developer, or software engineer.",
  },
  {
    name: "Web Development with MERN Stack",
    category: {
      name: "course",
    },
    price: 30000,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236005/mernBanner_mrgi15.jpg",
    roadmap:
      "Introduction to MERN Stack (MongoDB, Express.js, React.js, Node.js), Setting up development environment, Understanding MongoDB (NoSQL database), Creating RESTful APIs with Express.js, Understanding React.js (frontend library), Building user interfaces with React.js, Working with React Router for client-side routing, State management with Redux (or Context API), Authentication and authorization in MERN applications, Integrating backend with frontend, Deploying MERN applications to platforms like Heroku, Netlify, Testing MERN applications, Exploring additional libraries and tools (e.g., Axios, Material-UI), Best practices and optimization techniques, Continuous learning and staying updated with latest trends",
    materials:
      "Introduction to MERN Stack, Setting Up Development Environment, Building React Components, State Management in Flutter, Navigation and Routing in Flutter Apps, Working with MongoDB and Mongoose, User Authentication and Authorization, Handling Forms and Form Validation, Frontend Routing with React Router, Responsive Web Design with CSS and Bootstrap, Deploying MERN Applications to Heroku, Testing and Debugging MERN Applications, Best Practices and Advanced Topics",
    queries:
      "The MERN Stack is a popular choice for building modern web applications. It includes MongoDB, Express.js, React.js, and Node.js, allowing developers to use JavaScript for both frontend and backend development. MERN Stack is great for creating dynamic single-page applications, and job prospects for MERN Stack developers are strong, especially in startups and tech companies. While learning MERN Stack may be challenging for beginners, there are many resources available to help. After mastering MERN Stack, you can pursue careers such as MERN Stack developer, full-stack developer, or JavaScript developer.",
  },
  {
    name: "Mobile App Development with Flutter",
    category: {
      name: "course",
    },
    price: 25000,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236168/flutterBanner_lmzrph.jpg",
    roadmap:
      "Introduction to Flutter framework, Setting up Flutter environment, Understanding Dart programming language, Building UI components with Flutter widgets, Layouts and navigation in Flutter apps, State management techniques (setState, Provider, Bloc), Handling user input and forms, Fetching and displaying data from APIs, Working with device features (camera, GPS), Styling and theming Flutter apps, Internationalization and localization, Handling platform-specific features and APIs, Testing and debugging Flutter apps, Deployment to app stores (Google Play Store, Apple App Store), Exploring Flutter ecosystem and packages",
    materials:
      "Introduction to Flutter and Dart Programming Language, Setting Up Flutter Development Environment, Understanding Widgets and Layouts, State Management in Flutter, Navigation and Routing in Flutter Apps, Working with APIs and HTTP Requests, User Authentication and Authorization, Local Database Management with SQLite, Working with Device Features (Camera, GPS, etc.), Implementing Responsive Design, Testing and Debugging Flutter Apps, Deployment to App Stores (iOS App Store and Google Play Store), Best Practices and Advanced Topics",
    queries:
      "Flutter is a UI software development kit by Google for building mobile, web, and desktop apps from one codebase. It's great for mobile app development, offering fast performance and a single codebase for iOS and Android. Job prospects for Flutter developers are strong, with demand expected to grow. Learning Flutter is relatively easy, especially for developers familiar with object-oriented languages. After learning Flutter, you can pursue careers as a mobile app developer, UI/UX designer, or frontend developer.",
  },
  {
    name: "School Management",
    category: {
      name: "Software Services",
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236718/school_nximoc.jpg",
    productDescription:
      "Our School/College Management system offers you to control all of the daily activity of your School. By using this Software, you can save your time and money. Some useful feature is included in this Software. Take a look at them all.",
    features:
      "Different Types of Profile Management, Attendance and Class Schedule Management, Exam Management and Mark Evaluation, Result and Notification System, Tracking Fees and Payment, Study Materials and Assessments, Transport Management, Library Management, School Accounts and Fund Management, Academic Year And Session Management",
    importance:
      "Simplicity To Use, Up-gradation in Requirements, Your Own System, User-Friendly, High Quality Software, Progressively Reliable School ERP, Summarize Your School, Secure Funding",
  },
  {
    name: "Enterprise Resource Planning System",
    category: {
      name: "Software Services",
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236823/ERP_lbkx6w.jpg",
    productDescription:
      "Our Enterprise Resource Planning (ERP) System offers comprehensive management solutions for your organization, covering HR & Admin, Accounts, Billing, Customer Database, Stock Management, Inventory Management, Employee Attendance, and Data & Reports. Take a look at the features below:",
    features:
      "HR & Admin 🕵🏽, Employee Payroll 💸, Accounts Section 📈, Billing 🎉, Customer Database 📓, Stock Management 📡, Inventory Management 🧵, Employee Attendance 🙋🏽, Data & Reports ⚙️",
    importance:
      "Saving Money ❤️, Improved Collaboration 💠, Better Analytics 🔆, Improved Productivity 🎊, Happier Customers 👨, Improved Inventory and Production Management 🦸‍♂️",
  },
  {
    name: "HR Management Software",
    category: {
      name: "Software Services",
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236831/HR_lht2ip.jpg",
    productDescription:
      "HR Management Software brings you a comprehensive Human Resource Management solution with exclusive features designed to streamline your HR processes. Take a look at what our software offers:",
    features:
      "Employee Profile Management 🕵🏼‍♀️, Complaints/Disputes 👨🏼‍🚀, Departments and Designations 👩🏼‍💼, Employee Attendance 🙋🏼, Employee Leave and Vacation Management ⛱, Employee Payroll Management 💸, Performance Evaluation and Awards 🏆, Private Messaging 📩",
    importance:
      "Improved decision-making effectiveness 🎇, Improved Productivity 💎, Measurable ROI ⚖️, HR Modules Help Business Management Efficiency 🧬, Improved Security 🎆",
  },
  {
    name: "Domain & Hosting",
    category: {
      name: "web solution",
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236919/domainHosting_up6xib.png",
    productDescription:
      "Our Domain & Hosting services offer you reliable and secure hosting solutions for your website. Whether you're a small business or a large enterprise, we provide scalable hosting plans tailored to your needs. With our domain registration services, you can find and register the perfect domain name for your online presence. Take a look at our exclusive features below.",
    features:
      "Domain Registration, Web Hosting, Scalable Plans, 24/7 Support, Security, Backup Solutions, Email Hosting",
    importance:
      "Reliability, Security, Scalability, Support, Backup, Affordability",
  },
  {
    name: "Web Security",
    category: {
      name: "web solution",
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236919/webSecurity_gtctuf.png",
    productDescription:
      "Our Web Security services provide comprehensive protection for your website, ensuring the safety and integrity of your online presence. From safeguarding against cyber threats to implementing robust security measures, we prioritize the security of your website and data. Explore our exclusive features below to see how we can help secure your online assets.",
    features:
      "SSL/TLS Encryption, Firewall Protection, Malware Detection & Removal, DDoS Mitigation, Vulnerability Scanning, Security Monitoring, Security Updates & Patches",
    importance:
      "Data Protection, Prevent Cyber Attacks, Maintain Trust, Compliance, Business Continuity, Reputation Management",
  },
  {
    name: "B2B/B2C Portal",
    category: {
      name: "web solution",
    },
    price: 0,
    img: "https://res.cloudinary.com/dxiygdbvg/image/upload/v1714236917/b2b_esvsis.webp",
    productDescription:
      "Our B2B/B2C Portal offers a comprehensive platform for businesses to connect and transact seamlessly with each other (B2B) and with consumers (B2C). Whether you're a supplier, distributor, or retailer, our portal provides the tools and features you need to manage your relationships and transactions effectively. Explore the features below to see how our portal can streamline your business operations and enhance your customer experience.",
    features:
      "Supplier Management, Distributor Management, Retailer Dashboard, Customer Account Management, Order Processing, Inventory Management, Payment Gateway Integration, Analytics & Reporting, Customization & Scalability, Mobile-Friendly Interface",
    importance:
      "Efficient Transactions, Improved Customer Experience, Increased Reach, Enhanced Collaboration, Data-driven Insights, Scalability & Flexibility, Competitive Advantage, Cost Savings",
  },
];
