import { AcademicCapIcon } from "@heroicons/react/16/solid";

const Card = () => {
  return (
    <div className=" z-50 rounded-xl h-40 w-48 flex justify-center flex-col items-center hover:border-2 hover:border-white cursor-pointer bg-gray-900 hover:bg-gray-800 text-white">
      <div className=" mb-3">
        <AcademicCapIcon className=" w-7 h-7" />
      </div>
      <div className=" gap-2 lg:text-lg">
        <h1 className="">Education</h1>
        <p>GRIET - AIML</p>
      </div>
    </div>
  );
};

export default Card;
