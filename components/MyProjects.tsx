import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const data = [
  {
    img: "/canvaclone.png",
    desc: "A canva clone",
    title: "Canva Clone",
    tools: ["Next.js", "cloudinaryai", "clerk", "shadcn"],
    gitLink: "https://github.com/Arjun149133/Canva-Clone",
    liveLink: "https://canva-dusky.vercel.app/",
  },
  {
    img: "/twitterclone.png",
    desc: "A Twitter clone built using Next.js and Firebase. The application replicates many of the core features of Twitter, including user authentication, posting tweets, liking tweets, commenting on tweets. Users can sign up, log in. The application utilizes Firebase for real-time data synchronization, allowing users to see updates instantly.",
    title: "Twitter Clone",
    tools: ["Next.js", "Firebase", "Tailwind.css", "Recoil"],
    gitLink: "https://github.com/Arjun149133/twitter-clone",
    liveLink: "https://twitter-clone-psi-henna.vercel.app/",
  },
  {
    img: "/shopkart.png",
    desc: "ShopCart is a modern online shopping cart application developed using ViteReact, Redux, and various other cutting-edge technologies. Users can browse through a wide range of products, easily add items to their cart, and proceed to checkout effortlessly. One of the standout features of ShopCart is its advanced filter search functionality. The application also includes essential features such as user authentication.",
    title: "ShopCart",
    tools: ["React", "Redux", "tailwindcss"],
    gitLink: "https://github.com/Arjun149133/ShopKart-vite",
    liveLink: "https://shopkart-arj.netlify.app/",
  },
  // {
  //   img: "/promptopia.png",
  //   desc: "Next.js-powered AI Prompt Sharing Platform. Leveraging MongoDB for its robust database capabilities and Google authentication with NextAuth for seamless user access, our platform offers a comprehensive CRUD (Create, Read, Update, Delete) experience. Each user enjoys a personalized profile page, providing a hub for managing and sharing their unique collection of prompts.Our platform boasts powerful search functionality, enabling users to explore prompts based on keywords, tags, or related terms.",
  //   title: "Share AI Prompts",
  //   tools: ["NextJs", "MongoDB", "tailwindcss", "NextAuth"],
  //   gitLink: "https://github.com/Arjun149133/share_promts",
  //   liveLink: "https://share-ai-prompts-nine.vercel.app/",
  // },
];

const MyProjects = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.5,
        duration: 0.7,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className=" flex max-lg:flex-col justify-between max-lg:items-center max-lg:justify-center max-lg:space-y-5 w-full lg:space-x-5"
    >
      {data.map((project, index) => (
        <motion.div key={index} variants={childVariants}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MyProjects;
