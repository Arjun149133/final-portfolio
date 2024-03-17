import Image from "next/image";
import Card from "./Card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="max-h-screen lg:min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col justify-center items-center mb-4  space-y-3"
      >
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          Get To Know
        </h2>
        <h1 className=" text-xl xl:text-2xl font-bold text-white">About Me</h1>
      </motion.div>
      <div className=" flex flex-col lg:flex-row gap-4 p-2">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
          className=" flex justify-center mx-5 lg:w-1/3 relative"
        >
          <Image
            src="/screen.svg"
            alt="arjun"
            width={250}
            height={500}
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60 object-contain"
          />
          <Image
            src="/pfp.png"
            alt="arjun"
            width={250}
            height={500}
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60 object-contain absolute lg:translate-x-3 duration-500 ease-in-out cursor-pointer lg:-translate-y-3 lg:hover:translate-y-0 lg:hover:translate-x-0"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center lg:w-2/3 lg:p-6"
        >
          <div className=" flex m-2 ml-12">
            <Card />
          </div>
          <div className=" rounded-xl lg:p-4 m-1 my-5">
            <p className=" leading-1 text-sm lg:text-lg flex-wrap p-1 lg:p-7 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sequi
              nobis architecto nihil laboriosam aliquid culpa enim harum
              pariatur explicabo beatae, error illo fugiat fugit quae dolor quis
              repudiandae soluta?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
