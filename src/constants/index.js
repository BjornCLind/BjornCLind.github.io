import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  uh,
  mit,
  carrent,
  jobit,
  tripguide,
  aws,
  logo,
  valogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FullStack Developer (Next.js)",
    company_name: "VolunteerAlly",
    icon: valogo,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Database Design and Management, with MongoDB Triggers for real-time data updates and automation.",
      "API Development and Integration, with RESTful APIs for data retrieval and manipulation.",
    ],
  },
  {
    title: "Independent Developer and Researcher",
    company_name: "Self-Employed",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Developed web applications using React.js and mobile apps with React Native.",
      "Researched and created 3D visualizations with Three.js.",
      "Integrated OpenAI APIs for AI-driven web app features.",
      "Automated workflows with Python and JavaScript.",
      "Built and deployed RESTful APIs for web and mobile apps.",
      "Collaborated in online developer communities.",
      "Explored new technologies to stay current with industry trends.",
    ],
  }
  
  ,
  {
    title: "Professional Certificate in Coding: Full Stack Development with MERN",
    company_name: "MIT",
    icon: mit,
    iconBg: "#383E56",
    date: "Oct 2021 - May 2022",
    points: [
      "Built, tested, and deployed web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Developed and maintained front-end web applications with React.js.",
      "Created, tested, and deployed APIs to support web applications.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Set up Continuous Integration (CI) and Continuous Delivery (CD) pipelines for React applications.",
      "Participated in code reviews, providing and receiving constructive feedback to maintain best practices."
    ],
  }
  ,
  {
    title: "BS Applied Business and Information Technology",
    company_name: "University of Hawaii",
    icon: uh,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - May 2020",
    points: [
      "Specialized in the MEAN stack (MongoDB, Express.js, Angular, Node.js).",
      "Learned database structure and design, including SQL and MongoDB.",
      "Developed and maintained RESTful APIs for seamless client-server communication.",
      "Built responsive web applications with modern frameworks and ensured cross-browser compatibility.",
      "Achieved CyberSecurity Certification from NSA and UH, recognized as a Center of Academic Excellence in Cyber Defense (CAE CD).",
      "Studied cybersecurity principles, threat analysis, and risk management."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
