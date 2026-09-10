export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work", link: "#work" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My name is Bjorn Lindqvist, and I'm a Full Stack Engineer.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications and authorized to work in EU and US.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I speak multiple languages: English, Swedish, Hungarian and Spanish.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently studying for the CompTIA Security+ certification and taking courses for the CompTIA Data+ certification.",
    description: "What I'm working on...",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Feel free to reach out!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const education = [
  {
    id: 1,
    title:
      "Bachelor of Applied Science in Applied Business & Information Technology",
    company_name: "University of Hawaii, Maui, HI",
    date: "Graduated: May 2020",
    // Provide an icon and background color if you’d like
    icon: "/uhmc.jpg",
    iconBg: "#E6DEDD",
    // This component expects an array named `points`
    points: [
      "Courses: Database Design & Development, C++: Object-Oriented Programming, Information Systems & eCommerce",
    ],
  },
  {
    id: 2,
    title:
      "Professional Certificate in Coding: Full Stack Development with MERN",
    company_name: "Massachusetts Institute of Technology (MIT), Remote",
    date: "Completed: May 2022",
    icon: "/mit.jpg",
    iconBg: "#383E56",
    points: [
      "Gained comprehensive knowledge in front-end and back-end technologies.",
      "Developed responsive, user-friendly web applications with React.js and Node.js.",
      "Utilized RESTful APIs for seamless data integration and functionality.",
      "Proficient in version control with Git and collaborative project management.",
    ],
  },
  {
    id: 3,
    title: "Center of Academic Excellence in Cyber Defense (CAE CD)",
    company_name:
      "National Security Agency (NSA) & Department of Homeland Security (DHS), Maui, HI",
    date: "Completed: May 2020",
    icon: "/uhmc.jpg",
    iconBg: "#E6DEDD",
    points: [
      // If you want a line about it, add something:
      // "Recognized institution for Cyber Defense knowledge and practices."
    ],
  },
  {
    id: 4,
    // For certifications, we can treat them as one "Education" item
    // with bullet points listing each cert.
    title: "Certifications",
    company_name: "Various",
    date: "",
    icon: "/certs.jpg",
    iconBg: "#383E56",
    points: [
      "Full Stack Development Certificate, MIT",
      "CompTIA Security+ (Expected - 12/24)",
      "CompTIA Data+ (In Progress)",
    ],
  },
];




export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/BjornCLind",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bclindqvist/",
  },
];

export const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "VolunteerAlly",
    icon: "/exp1.svg",
    iconBg: "#383E56",
    date: "August 2023 – Present",
    points: [
      "Designed a scalable, secure MongoDB database.",
      "Enhanced performance and SEO with Next.js Server Side Rendering.",
      "Aligned cross-team goals and communicated technical concepts effectively.",
      "Built secure RESTful APIs with authentication.",
      "Improved reliability with Cypress testing and performance tools.",
      "Conducted cost-benefit analyses, designed scalable systems, and delivered IT solutions.",
    ],
  },
  {
    title: "Field Service Technician",
    company_name: "Subcontractor",
    icon: "/exp2.svg",
    iconBg: "#383E56",
    date: "August 2021 – August 2023",
    points: [
      "Troubleshot, diagnosed, and repaired computers and printers in commercial settings.",
      "Terminated and troubleshot Cat5e, Cat6 network cabling and equipment.",
      "Applied working knowledge of Cisco VoIP phones, switches, and routers.",
      "Documented work with before/after photos and detailed closing notes.",
      "Performed tasks at client standards with minimal supervision.",
      "Collaborated with network administrators and server engineers to ensure quality service.",
    ],
  },
  {
    title: "Waiter/Lead Server",
    company_name: "Mala Tavern",
    icon: "/exp3.svg",
    iconBg: "#383E56",
    date: "June 2016 – August 2021",
    points: [
      "Bridged communication between staff, management, and customers for seamless service.",
      "Resolved customer issues promptly and effectively.",
      "Maintained records of preferences, showcasing attention to detail.",
      "Delivered exceptional service with a user-focused approach.",
    ],
  },
];
