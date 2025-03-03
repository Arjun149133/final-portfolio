import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const data = [
  {
    img: "/chessProject.png",
    desc: "A Chess.com Like application",
    title: "Chess.com",
    tools: [
      "Next.js",
      "TypeScript",
      "WebSocket",
      "bun",
      "Docker",
      "Postgres",
      "aws",
    ],
    gitLink: "https://github.com/Arjun149133/chess-application",
    liveLink: "https://chess.arjunyadav.website",
  },
  {
    img: "/collabDraw.png",
    desc: "An Excalidraw-like application that allows users to collaborate in real-time. Users can draw shapes, add text, and collaborate with others in real-time. The application utilizes WebSocket for real-time communication.",
    title: "CollabDraw",
    tools: [
      "Next.js",
      "TypeScript",
      "WebSocket",
      "node",
      "Docker",
      "Postgres",
      "aws",
    ],
    gitLink: "https://github.com/Arjun149133/excalidraw-clone",
    liveLink: "https://collabdraw.arjunyadav.website",
  },
  {
    img: "/twitterclone.png",
    desc: "A Twitter clone built using Next.js and Firebase. The application replicates many of the core features of Twitter, including user authentication, posting tweets, liking tweets, commenting on tweets. Users can sign up, log in. The application utilizes Firebase for real-time data synchronization, allowing users to see updates instantly.",
    title: "Twitter Clone",
    tools: ["Next.js", "Firebase", "Tailwind.css", "Recoil"],
    gitLink: "https://github.com/Arjun149133/twitter-clone",
    liveLink: "https://twitter-clone-psi-henna.vercel.app/",
  },
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
