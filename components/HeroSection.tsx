import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

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
              <a
                href="/resume-arjun2.pdf"
                download="resume-arjun2.pdf"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </button>
          </div>
          <div className=" flex justify-center items-center mt-7 space-x-4 lg:space-x-10 opacity-95">
            <div>
              <Image
                onClick={() => window.open("https://github.com/Arjun149133")}
                src="/github.svg"
                alt="signature"
                width={100}
                height={100}
                className=" h-7 sm:h-10 cursor-pointer bg-white w-fit rounded-2xl"
              />
            </div>
            <div>
              <Image
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/arjun-yadav-4aa978261/"
                  )
                }
                src="/linked.svg"
                alt="signature"
                width={100}
                height={100}
                className=" h-7 sm:h-10  cursor-pointer bg-white w-fit rounded-md"
              />
            </div>
            <div>
              <Image
                onClick={() => window.open("https://twitter.com/AArjunY")}
                src="/tweet.svg"
                alt="signature"
                width={100}
                height={100}
                className=" h-7 sm:h-10  cursor-pointer bg-white w-fit rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
