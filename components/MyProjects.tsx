import ProjectCard from "./ProjectCard";

const data = [
  {
    img: "/twitterclone.png",
    desc: "A Twitter clone built using Next.js and Firebase. The application replicates many of the core features of Twitter, including user authentication, posting tweets, liking tweets, commenting on tweets. Users can sign up, log in. The application utilizes Firebase for real-time data synchronization, allowing users to see updates instantly.",
    title: "Twitter Clone",
    tools: ["nextjs", "firebase", "tailwindcss"],
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
  {
    img: "/promptopia.png",
    desc: "Next.js-powered AI Prompt Sharing Platform. Leveraging MongoDB for its robust database capabilities and Google authentication with NextAuth for seamless user access, our platform offers a comprehensive CRUD (Create, Read, Update, Delete) experience. Each user enjoys a personalized profile page, providing a hub for managing and sharing their unique collection of prompts.Our platform boasts powerful search functionality, enabling users to explore prompts based on keywords, tags, or related terms.",
    title: "Share AI Prompts",
    tools: ["NextJs", "MongoDB", "tailwindcss", "NextAuth"],
    gitLink: "https://github.com/Arjun149133/share_promts",
    liveLink: "https://share-ai-prompts-nine.vercel.app/",
  },
];

const MyProjects = () => {
  return (
    <div className=" flex max-lg:flex-col justify-between max-lg:items-center max-lg:space-y-5 w-full p-1">
      {data.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default MyProjects;
