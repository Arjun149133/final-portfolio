import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  img: string;
  liveLink?: string;
  gitLink?: string;
  desc?: string;
  tools?: string[];
  title?: string;
};
const ProjectCard = ({
  img,
  liveLink,
  gitLink,
  desc,
  tools,
  title,
}: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    flipped: { rotateY: 360 },
    unflipped: { rotateY: 0 },
  };
  return (
    <motion.div
      animate={isFlipped ? "flipped" : "unflipped"}
      variants={cardVariants}
      transition={{ duration: 1 }}
      className=" bg-gradient-radial from-gray-700 to-gray-900 lg:m-1 rounded-sm rounded-t-xl space-y-2 w-full h-full pb-2 z-50"
    >
      {isFlipped ? (
        <>
          <div>{desc}</div>
        </>
      ) : (
        <>
          <div className=" rounded-t-xl relative">
            <Image
              src={img}
              quality={100}
              alt="Project"
              width={500}
              height={400}
              className=" rounded-t-xl h-full w-full"
            />
            <div className="absolute right-0 mt-2 mx-2 cursor-pointer z-50">
              <InformationCircleIcon
                onClick={() => setIsFlipped(true)}
                className=" h-7 text-white"
              />
            </div>
          </div>
          <div className=" mx-2 font-bold text-sky-700 brightness-200">
            {title}
          </div>
          <div className=" flex flex-wrap">
            {tools?.map((tool, i) => (
              <b
                key={i}
                className=" mx-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700"
              >
                {tool}
              </b>
            ))}
          </div>
          <div className=" flex justify-end gap-5 mx-4 pt-2 font-bold text-slate-100">
            <a
              href={liveLink}
              target="_blank"
              className=" bg-sky-600 p-1 rounded-md px-2 text-sm lg:text-md hover:bg-sky-500 "
            >
              Live Site
            </a>
            <a
              href={gitLink}
              target="_blank"
              className=" bg-sky-600 p-1 rounded-md px-2 text-sm lg:text-md hover:bg-sky-500 "
            >
              Git
            </a>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ProjectCard;
