import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen">
      <div className=" flex justify-center mb-7">
        <h1 className=" text-xl lg:text-2xl font-bold text-white">My Skills</h1>
      </div>
      <div className=" lg:p-2 lg:px-44 lg:mx-7">
        <div className="rounded-2xl lg:p-5 w-full">
          <div className=" text-center p-2">
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
