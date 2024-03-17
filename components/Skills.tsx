import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen">
      <div className=" flex justify-center mb-7">
        <h1 className=" text-xl lg:text-2xl font-bold">My Skills</h1>
      </div>
      <div className=" p-2 lg:px-44 mx-2 lg:mx-7">
        <div className=" bg-gray-800 rounded-2xl p-5 w-full">
          <div className=" text-center">
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
