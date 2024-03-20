import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/16/solid";

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
  return (
    <div className=" bg-gradient-radial from-gray-700 to-gray-900 m-1 rounded-sm rounded-t-xl space-y-2 pb-3">
      <div className=" rounded-t-xl relative">
        <Image
          src={img}
          quality={100}
          alt="Project"
          width={400}
          height={500}
          className=" rounded-t-xl lg:h-48"
        />
        <InformationCircleIcon
          onClick={() => {}}
          className=" h-7 absolute right-0 mt-2 mx-2 cursor-pointer"
        />
      </div>
      <div className=" mx-2">{title}</div>
      <div className="">
        {tools?.map((tool, i) => (
          <b key={i} className=" mx-2">
            {tool}
          </b>
        ))}
      </div>
      <div className=" flex justify-end gap-5 mx-4 pt-2">
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
    </div>
  );
};

export default ProjectCard;
