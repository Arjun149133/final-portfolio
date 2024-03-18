import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home" className="py-28">
      <div className="grid grid-cols-1">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center"
        >
          <h1 className="text-white mb-4 text-3xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-700">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Arjun",
                1000,
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="strong"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              className="from-blue-100 to-blue-500 bg-clip-text bg-gradient-to-r text-transparent"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Step into my little corner of the coding galaxy!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-6 bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 text-white hover:text-purple-500 ">
              <a href="#" rel="noreferrer">
                Download Resume
              </a>
            </button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-700 via-purple-500 to-pink-500 hover:bg-slate-800 text-white hover:text-purple-500 mt-3">
              <span className="block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="#" rel="noreferrer">
                  Let's Connect!
                </a>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
