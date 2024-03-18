import Image from "next/image";
import SkillIcon from "./SkillIcon";

const SkillCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 m-auto gap-10 lg:p-4 p-1 lg:gap-y-20 place-items-center">
      <SkillIcon src="/css.svg" text="CSS" />
      <SkillIcon src="/tailwind.svg" text="Tailwind" />
      <SkillIcon src="/react.svg" text="React" />
      <SkillIcon src="/njs.svg" text="NextJs" props={"brightness-200"} />
      <SkillIcon src="/firebase.svg" text="Firebase" />
      <SkillIcon src="/nodejs.svg" text="Nodejs" />
      <SkillIcon src="/js.gif" text="JavaScript" />
      <SkillIcon src="/ts.svg" text="TypeScript" />
      <SkillIcon src="/mongo.svg" text="MongoDB" />
      <SkillIcon src="/express.svg" text="ExpressJS" />
      <SkillIcon src="/prisma.svg" text="Prisma" />
      <SkillIcon src="/redux.png" text="Redux" />
      <SkillIcon src="/git.svg" text="Git" />
      <SkillIcon src="/sql1.png" text="SQL" />
    </div>
  );
};

export default SkillCard;
