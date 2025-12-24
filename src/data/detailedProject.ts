export interface Project {
  id: number;
  name: string;
  slug: string;
  technology: string;
  description: string;
  gitHubRepoLink: string;
  liveLink: string;
  role: string;
  completionDate: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "NextJS Auth App",
    slug: "next-js-auth-app",
    technology:
      "Next.js, TypeScript, Axios, React, JSON Web Token, TailwindCSS, Nodemailer",
    description:
      "A complete authentication system with email verification, JWT-based login, secure APIs, and a forgot-password workflow. Built with Next.js App Router and TypeScript.",
    gitHubRepoLink: "https://github.com/onkar-midhunter/NextJs-auth-app",
    liveLink: "",
    role: "Full-Stack Developer",
    completionDate: "October 2024",
    features: [
      "Email verification system",
      "JWT secure authentication",
      "Forgot-password setup",
      "Protected routes",
      "Responsive UI",
    ],
    challenges: [
      "Implementing secure JWT flows",
      "Sending emails via Nodemailer in production",
      "Protecting API routes",
    ],
    learnings: [
      "Advanced Next.js routing",
      "Handling authentication flows",
      "API security best practices",
    ],
    screenshots: [],
  },

  {
    id: 2,
    name: "Music Academy",
    slug: "music-academy",
    technology: "Next.js, React, TailwindCSS, Aceternity UI",
    description:
      "An interactive and visually appealing UI for a Music Academy website with animations, course listing, and responsive design.",
    gitHubRepoLink: "https://github.com/onkar-midhunter/Music-Academy-By-NextJS",
    liveLink: "https://music-academy-by-next-js.vercel.app",
    role: "Frontend Developer",
    completionDate: "September 2024",
    features: [
      "Modern animated UI components",
      "Course listing with clean layout",
      "Fully responsive design",
      "Fast performance with Next.js",
      "Reusable UI components using Aceternity UI",
    ],
    challenges: [
      "Implementing advanced UI animations",
      "Maintaining responsiveness across devices",
      "Organizing reusable UI components",
    ],
    learnings: [
      "Building animated UI with Aceternity",
      "Next.js performance optimization",
      "Creating scalable UI structures",
    ],
    screenshots: [
      "/project/music_academy/one.png",
      "/project/music_academy/two.png",
      "/project/music_academy/three.png",
      "/project/music_academy/four.png",
      "/project/music_academy/five.png",
    ],
  },

  {
    id: 3,
    name: "YouTube Clone Backend",
    slug: "youtube-clone",
    technology: "Express.js, MongoDB, Mongoose, Bcrypt, Cloudinary, JWT, Multer",
    description:
      "A backend system inspired by YouTube with user authentication, video uploads, subscriptions, and playlist management.",
    gitHubRepoLink:
      "https://github.com/onkar-midhunter/Yotube-clone-backendJSProject",
    liveLink: "",
    role: "Backend Developer",
    completionDate: "July 2024",
    features: [
      "User authentication using JWT",
      "Video upload using Multer + Cloudinary",
      "Subscription system",
      "Playlist management",
      "Aggregation pipeline for relational data",
    ],
    challenges: [
      "Handling large file uploads",
      "Designing relational structures in MongoDB",
      "Efficient aggregation queries",
    ],
    learnings: [
      "Cloudinary media handling",
      "Advanced Express.js architecture",
      "MongoDB aggregation pipelines",
    ],
    screenshots: [],
  },

  {
    id: 4,
    name: "Ecommerce Website",
    slug: "ecommerce-website",
    technology: "React, Axios, REST API, Redux, TailwindCSS, JavaScript, Vite",
    description:
      "A full-featured ecommerce website built with React, Redux, and REST APIs for product listing, cart management, wishlist, and checkout experience.",
    gitHubRepoLink: "https://github.com/onkar-midhunter/React-Ecommerce-Website",
    liveLink: "https://react-ecommerce-website-liard-zeta.vercel.app/",
    role: "Frontend Developer",
    completionDate: "August 2024",
    features: [
      "Add to cart and wishlist",
      "Product listing with filters",
      "Dynamic product details",
      "Redux global state management",
      "Fully responsive UI with TailwindCSS",
    ],
    challenges: [
      "Efficiently managing global states",
      "Handling API failures gracefully",
      "Rendering large product lists efficiently",
    ],
    learnings: [
      "State management using Redux",
      "Component optimization in React",
      "Responsive UI design",
    ],
    screenshots: [
      "/project/ecommerce/cart.png",
      "/project/ecommerce/home.png",
      "/project/ecommerce/add_to_like.png",
    ],
  },

  {
    id: 5,
    name: "Blog Website",
    slug: "blog-website",
    technology: "React, Axios, Appwrite, Redux, TailwindCSS, JavaScript, Vite",
    description:
      "A blog management platform using Appwrite for authentication, database, and storage. Users can create, edit, update, and delete blogs.",
    gitHubRepoLink: "https://github.com/onkar-midhunter/mega-blog-website",
    liveLink: "https://mega-blog-website-ten.vercel.app",
    role: "Full-Stack Developer",
    completionDate: "June 2024",
    features: [
      "Create, edit, update, delete blog posts",
      "Authentication using Appwrite",
      "Media/file storage",
      "Redux state management",
      "Clean responsive UI",
    ],
    challenges: [
      "Integrating Appwrite services",
      "Managing blog state with Redux",
      "Handling media uploads",
    ],
    learnings: [
      "Appwrite authentication & database",
      "Full CRUD operations",
      "Building scalable blog architecture",
    ],
    screenshots: [
      "/project/blog_website/one.png",
      "/project/blog_website/two.png",
      "/project/blog_website/three.png",
      "/project/blog_website/four.png",
      "/project/blog_website/five.png",
    ],
  },

  {
    id: 6,
    name: "MyStryMessage",
    slug: "mystrymessage",
    technology:
      "Next.js (App Router), TypeScript, React 19, TailwindCSS, NextAuth, Mongoose, MongoDB, Resend, bcryptjs, Zod",
    description:
      "MyStryMessage is a message-sharing platform built with Next.js App Router. It includes user signup/sign-in with email verification, forgot-password (OTP) and reset flows, message sending/accepting APIs, and a protected dashboard — all backed by MongoDB and server-side APIs.",
    gitHubRepoLink: "https://github.com/onkar-midhunter/mystery-message",
    liveLink: "https://mystery-message-inky.vercel.app/",
    role: "Full-Stack Developer",
    completionDate: "December 2025",
    features: [
      "Email verification with token/resend",
      "Sign-up and sign-in using NextAuth",
      "Forgot-password OTP and reset",
      "Send, accept, and manage messages",
      "Protected dashboard and profile pages",
      "Server API routes with Zod validation",
    ],
    challenges: [
      "Coordinating OTP/email flows and expiry",
      "Integrating NextAuth with custom user model",
      "Designing resilient API validation and DB models",
    ],
    learnings: [
      "Advanced Next.js App Router patterns",
      "Email workflows and third-party services",
      "Secure password handling and token expiry",
    ],
    screenshots: [
      "/project/mystery-message/four.png",
      "/project/mystery-message/three.png",
      "/project/mystery-message/two.png",
      "/project/mystery-message/one.png"
    ],
  },
];
