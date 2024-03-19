type ProjectCardProps = {
  img?: string;
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
  return <div>{title}</div>;
};

export default ProjectCard;
