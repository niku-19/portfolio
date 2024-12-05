import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikhil Ranjan Kumar",
  initials: "NRK",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full Stack Developer skilled in creating scalable applications with Next.js, AWS, and MongoDB, delivering exceptional user experiences.",
  summary:
    "I am a passionate Full Stack Developer with a [Bachelor’s degree in Computer Applications from Bengaluru City University](/#education). Over the past year, I have gained hands-on experience in building scalable, high-performance applications like Trios Plus, leveraging technologies such as [Next.js, AWS, and MongoDB](/#skills). My skill set includes expertise in front-end tools like [React, Material-UI, and Tailwind CSS](/#skills), along with backend technologies such as [Node.js , Express.js and Serverless API](/#skills). With over [100 APIs](/#skills) developed and robust database solutions implemented, I have streamlined workflows, improved user satisfaction, and optimized operational processes. I am committed to delivering innovative, user-focused solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material-UI",
    "Redux",
    "Redux-Toolkit",
    "Serverless API",
    "AWS",
    "SES (Simple Email Service)",
    "S3 (Simple Storage Service)",
    "Lambda (Serverless Functions)",
  ]
  ,
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "nikhilranjankumar1999@gmail.com",
    tel: "62056666646",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/niku-19",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-ranjan-kumar/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/19Nikhil99",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "nikhilranjankumar1999@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Braincells",
      href: "https://course.braincells.in/",
      badges: ["Frontend Developer"],
      location: "Pune Maharashtra India",
      title: "Frontend Developer",
      logoUrl: "/brainCells-logo.svg",
      start: "October 2023",
      end: "December 2024",
      description:
        "Developed over 30 interactive activities, including user retention and progress tracking systems, payment integration, language learning modules, and authentication features. Built scalable applications using ReactJS, Ionic Framework, and SQL. Designed robust data solutions with MongoDB to enhance performance and user engagement.",
    },
    {
      company: "TRIOS",
      badges: ["Full Stack Developer"],
      href: "https://trios.co.in/",
      location: "Pune Maharashtra India",
      title: "SDE Full Stack Developer",
      logoUrl: "/TRIOS-LOGO.png",
      start: "october 2023",
      end: "December 2024",
      description:
        "As a Full Stack Developer, I led the development of Trios Plus, a cutting-edge B2B web application leveraging Next.js, achieving a 30% improvement in application speed and performance. I designed and delivered a seamless UI/UX using MUI, tailored for a leading co-working space provider, driving a 25% increase in user satisfaction and adoption rates. My contributions include building key features like dynamic invoice generation, payment handling, user management, and product registration, which streamlined operations and reduced time by 20%. I engineered rate contract and agreement functionalities, enhancing collaboration and boosting contract closure efficiency by 15%. Additionally, I deployed a robust service desk and feedback system, cutting issue resolution time by 40%, and developed a vendor management system that optimized supply chain workflows, reducing processing time by 30%. Leveraging CASL, I implemented a secure, role-based UI/UX for personalized user experiences. I also built and maintained over 100 APIs using AWS Lambda and Python, with efficient data handling through MongoDB aggregation pipelines and real-time payment updates via Razorpay webhooks. Managing cloud services with AWS SES and S3 buckets, I ensured reliable email communication and secure file storage, enhancing backend scalability and robustness.",
    },
  ],
  education: [
    {
      school: "Acharya Institute of Technology",
      href: "https://www.acharya.ac.in/",
      degree: "BCA (Bachelor of Computer Applications)",
      logoUrl: "/acharya-logo.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "DAV Public School",
      href: "http://davmoonidih.in/",
      degree: "Intermediate (12th Grade)",
      logoUrl: "/dav.png",
      start: "2016",
      end: "2018",
    },
    {
      school: "DAV Public School",
      href: "http://davmoonidih.in/",
      degree: "High School (10th Grade)",
      logoUrl: "/dav.png",
      start: "2014",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Nike e store",
      href: "nike-store-peach-zeta.vercel.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This project, built with `React, Tailwind CSS, and TypeScript`, features a modern, responsive UI/UX with engaging animations. It includes an intuitive `Add to Cart` functionality, offering a seamless and visually appealing experience across all devices.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nike-store-peach-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/nike-store.git",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "/nike.mp4",
    },
    {
      title: "Supersri",
      href: "https://super-sri.netlify.app/",
      dates: "June 2023 - August 2023",
      active: true,
      description:
        "The E-commerce app built with React, Context API, and Razorpay features product listings, cart, wishlist, user authentication, and payments.",
      technologies: [
        "React.js",
        "React Hooks",
        "React Context API + useReducer",
        "Razorpay payment gateway",
        "React Router v6",
        "User Interface Design",
        "React Icons",
        "React Slicks",
        "React Toastify",
        "Cascading Style Sheets (CSS)"
      ],
      links: [
        {
          type: "Website",
          href: "https://super-sri.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/E-commerce-web-app-super-sri.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/supersri.mp4",
    },
    {
      title: "Sociabyte",
      href: "https://sociabyte-the-social-media-web-app.vercel.app/",
      dates: "August 2023 - October 2023",
      active: true,
      description:
        "SOCIABYTE is a social media web app built with React, Express.js, Node.js, and MongoDB, featuring JWT authentication, user profiles, posts, comments, friend requests, notifications, and an explore page with a modern UI/UX and interactive functionality.",
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Context API",
        "React Router v6",
        "React Hooks",
      ],
      links: [
        {
          type: "Website",
          href: "https://sociabyte-the-social-media-web-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/SOCIABYTE-the-social-media-webApp.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source Backend",
          href: "https://github.com/niku-19/social-media-backend.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/Social.mp4",
    },
    {
      title: "Disney Hotstar clone",
      href: "https://main--disney-hotstar-clone-niku.netlify.app",
      dates: "April 2023 - March 2023",
      active: true,
      description:
        "The project features Google Login authentication using Firebase, a product display homepage with top UI/UX, and a video player powered by the YouTube API.",
      technologies: [
        "React Router",
        "JavaScript Libraries",
        "Redux",
        "React.js",
        "Firebase",
        "React Hooks",
        "Hooks",
        "Cascading Style Sheets (CSS)"
      ],
      links: [
        {
          type: "Website",
          href: "https://main--disney-hotstar-clone-niku.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/niku-19/Disney__Hotstar__clone.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/hotstar.mp4",
    },
  ],
  hackathons: [
    {
      title: "TRIOS PLUS - INVOICE GENERATOR",
      dates: "October 12 - 31, 2023",
      location: "Pune Maharashtra India",
      description:
        "developed a comprehensive invoicing system with role-based functionality to streamline the entire invoicing process. The system allows users with the appropriate organization role to create and edit invoices, ensuring full control over the invoicing workflow. It features robust tracking capabilities with customizable filters, enabling users to easily find and manage invoices. A dynamic table displays invoice data with proper pagination, while users can select addresses and GSTIN numbers for accurate billing. The application also offers the ability to view and download invoices, send them to clients, and mark payments using Razorpay. The system integrates Razorpay webhooks to automatically mark payments as paid, while also allowing the creation of receipts. This solution ensures a seamless, efficient, and secure invoicing process, tailored to different user roles within the organization.",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
    {
      title: "TRIOS PLUS - AGREEMENT MANAGEMENT",
      dates: "November 12 - 31, 2023",
      location: "Pune Maharashtra India",
      description:
        "developed a web application that simplifies the process of tracking, storing, and creating agreements with companies registered on our platform. The application streamlines the agreement creation process based on pricing, timelines, and various key features. Additionally, it includes advanced status and date filters, making it easy to track agreement documents and monitor their approval status. This project enhances workflow efficiency by providing a seamless and organized way to manage agreements, ensuring timely approvals and reducing the complexity of document management.",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
    {
      title: "TRIOS PLUS - APPROVE AGREEMENTS",
      dates: "December 12 - 31, 2023",
      location: "Pune Maharashtra India",
      description:
        "developed an advanced agreement management system that simplifies the entire agreement lifecycle. Users can easily view and download agreements, with the ability to approve them through an intuitive interface. The system also allows for document uploads, securely saving files to an AWS S3 bucket for easy access and management. Based on the approved agreements, the application automatically generates rate contracts and invoices, ensuring accurate billing and efficient workflow management. Additionally, upon agreement approval, the system automatically creates deposit invoices and rate contracts, streamlining the process and reducing manual effort. This solution ensures seamless integration between agreements, invoices, and contracts, providing a smooth and organized experience for users.",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
    {
      title: "TRIOS PLUS - SERVICE DESK",
      dates: "Jan 12 - 31, 2024",
      location: "Pune Maharashtra India",
      description:
        "developed a robust service desk system that allows users to efficiently manage and resolve service requests. Users can create and edit service requests, with the ability to view them based on specific roles, ensuring that the right individuals have access to relevant information. The system enables users to accept requests, take appropriate actions, and update the request status (e.g., mark as not an issue). To speed up resolution, requests can be assigned to specific organizational users. Additionally, the service desk includes a comment and history tracker, providing a clear record of all actions taken. The system is fully role-based, ensuring secure and tailored access across different user levels. It also supports branch bifurcation and allows users to upload request-related images to AWS S3 buckets for easy storage. Finally, once the issue is resolved, the system enables users to close the ticket, streamlining the entire support process.",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
    {
      title: "TRIOS PLUS - VENDOR MANAGEMENT",
      dates: "feb 12 - 31, 2024",
      location: "Pune Maharashtra India",
      description:
        "developed a comprehensive vendor management system to streamline the entire procurement process. The system allows users to create and approve purchase requests, ensuring that all purchases are properly authorized before proceeding. It also features robust quotation management, enabling users to review, approve, and generate purchase orders once quotations are approved. After a purchase order is created, the system facilitates payment to vendors and provides real-time tracking of payments. Additionally, it tracks the delivery of vendor supplies, allowing users to create assets when products are delivered and manage them efficiently. The asset management system enables users to track the working status of assets and provides visibility into their current allocation. The application also supports asset allocation, ensuring that assets are properly assigned to the right departments or individuals. To further enhance bulk operations, the system allows the upload of Excel files for assets and quotations, converting them into JSON format and saving them directly to the database, simplifying data entry and management.",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
    {
      title: "TRIOS PLUS - CONFERENCE BOOKING MANAGEMENT",
      dates: "July 12 - 31, 2024",
      location: "Pune Maharashtra India",
      description:
        "developed a comprehensive conference room booking system that allows users to seamlessly book conference rooms through our platform. Clients can make bookings, with a credit tracking system in place to manage payments. The system integrates Razorpay webhooks for secure payment processing, and credits are tracked for future invoices. A built-in calendar provides a clear overview of room bookings, making it easy to schedule and manage events. The platform also supports booking cancellations within specified time frames. For real-time visibility, a tablet view is available to display ongoing and upcoming conference events. Additionally, users can create and manage conference rooms on the platform, with the ability to edit or delete events based on the branch’s needs. This streamlined approach ensures efficient management and easy tracking of all conference room bookings.",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
    {
      title: "TRIOS PLUS - MANY MORE FEAT...",
      dates: "feb 12 - 31, 2024",
      location: "Pune Maharashtra India",
      description:
        "Many more...",
      image:
        "/TRIOS-LOGO.png",
      mlh: "",
      links: [],
    },
  ],
  learning :[
    {
      title: "Next.js",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Used for building a fast, scalable, and SEO-friendly front-end application.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Material-UI (MUI)",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Designed a responsive and intuitive user interface with Material-UI components for a seamless user experience.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Payment Integration (Razorpay)",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Integrated Razorpay for seamless online payment processing, supporting both online and offline payments.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "UI/UX Design",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Focused on designing a user-friendly interface that improves usability and enhances the overall user experience.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Data Management",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Streamlined data processes by managing, storing, and processing large datasets efficiently.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "AWS Lambda",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Leveraged serverless architecture to build scalable APIs and handle business logic efficiently.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "MongoDB",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Utilized for robust and flexible database solutions, implementing complex aggregation pipelines for data handling.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Python",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Applied in backend development, particularly for writing Lambda functions and API logic.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "API Development - RESTful APIs 100+",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Created and optimized over 100 RESTful APIs for various functionalities, ensuring high performance and security.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Serverless Architecture",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Used AWS Lambda to deploy serverless functions, reducing infrastructure overhead and improving scalability.",
      image:
        "",
      mlh: "",
      links: [],
    },
    {
      title: "Webhooks Integration",
      dates: "October 2023 - December 2024",
      location: "Pune Maharashtra India",
      description:
        "Integrated Razorpay webhooks to automate payment updates and manage real-time data synchronization.",
      image:
        "",
      mlh: "",
      links: [],
    },
  ]
} as const;
