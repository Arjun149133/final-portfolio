import MyProjects from "./MyProjects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className=" min-h-screen mt-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className=" flex flex-col justify-center items-center mb-4  space-y-1"
      >
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          some of my work
        </h2>
        <h1 className=" text-xl xl:text-2xl font-bold text-white">Projects</h1>
      </motion.div>
      <div className=" flex justify-center lg:px-16 xl:px-28 my-8 xl:my-16 ">
        <MyProjects />
      </div>
    </section>
  );
};

export default Projects;
