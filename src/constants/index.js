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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // aisumerrizer,
  // aisumerrizer
  carrent,
  jobit,
  tripguide,
  threejs,
  // gamehub,
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
    id: "experience",
    title: "Experience",
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
    title: "React | Next Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
    title: "QA Engineer",
    company_name: "Atlas Computer Technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2023 - May 2024",
    points: [
      "Designing and executing test plans and test cases to ensure the quality and functionality of web applications.",
      "Collaborating with cross-functional teams including developers, designers, and product managers to identify and resolve defects.",
      "Performing manual and automated testing to validate the software against functional and non-functional requirements.",
      "Participating in code reviews and providing feedback on testability, reliability, and performance of the applications.",
      "Identifying, documenting, and tracking defects, and working with the development team to ensure timely resolution.",
      "Ensuring that the applications meet industry standards for security, performance, and usability.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Atlas Computer Technology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js for the frontend and Java Spring Boot for the backend.",
      "Participating in the development of bank applications and projects for the Ministry of Revenue (MOR), focusing on backend services and integrations.",
      "Designing and implementing RESTful APIs and microservices architecture to support the seamless interaction between frontend and backend systems.",
      "Building and deploying a chatbot for mobile banking applications using Python and Rasa, enhancing customer interaction and support.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to ensure the delivery of high-quality, scalable products.",
      "Ensuring the implementation of responsive design, cross-browser compatibility, and robust backend logic to meet industry standards.",
      "Participating in code reviews, providing constructive feedback, and ensuring the codebase meets best practices for security, performance, and maintainability.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abel proved me wrong.",
    name: "Gebru Gurmessa",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I had the privilege of working closely with. During our time together at JOSTMON Technology, Abel showcased exemplary skills in full stack development and QA testing. ",
    name: "Tsega Solomon",
    designation: "Fullstack Developer",
    company: "JOSTMON Technology",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abel optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Heaven Kokobie",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Summarize AI",
    description:
      "A web application that allows users to input a URL and receive an AI-generated summary of the webpage's content, leveraging OpenAI's language processing capabilities.",
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
    image: jobit,
    source_code_link: "https://github.com/Abelo73/Summarize-Open-Api",
    preview: "https://ai-sumerrizer-9ahz9b9yi-abelo73s-projects.vercel.app/",
  },
  {
    name: "Game Hub",
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
    image: carrent,
    source_code_link: "https://github.com/",
    preview: "https://game-7p66rjkm4-abelo73s-projects.vercel.app/",
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
    preview: "https://ai-sumerrizer-9ahz9b9yi-abelo73s-projects.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
