import Image from "next/image";
import Card from "./Card";
import { motion } from "framer-motion";
import { Laila, Armata } from "next/font/google";

const laila = Laila({ weight: "500", subsets: ["latin"] });

const armata = Armata({ weight: "400", subsets: ["latin"] });

const About = () => {
  return (
    <section id="about" className="min-h-screen overflow-hidden">
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
          className=" flex justify-center mx-5 lg:w-1/3 relative items-center"
        >
          <Image
            src="/screen.svg"
            alt="arjun"
            width={250}
            height={500}
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60 object-contain "
          />
          <Image
            src="/pfp.png"
            alt="arjun"
            width={250}
            height={500}
            className=" rounded-full h-32 w-32 lg:h-60 lg:w-60 object-contain absolute lg:translate-x-3 duration-500 ease-in-out cursor-pointer lg:-translate-y-3 lg:hover:translate-y-0 lg:hover:translate-x-0 border-white border-2"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true }}
          className=" flex flex-col justify-center lg:w-2/3 lg:p-6"
        >
          {/* <div className=" flex m-2 ml-12">
            <Card />
          </div> */}
          <div className=" rounded-xl lg:p-4 m-1 max-md:my-5 max-md:text-center">
            <div className=" mb-2 lg:ml-7 lg:text-2xl font-bold">
              <h1>I CREATE</h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                WEBSITES
              </h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                TAILORED FOR
              </h1>
              <h1>YOUR SUCCESS</h1>
            </div>
            <p
              className={`text-sm lg:text-lg flex-wrap p-1 lg:p-7 text-white leading-relaxed ${laila.className}`}
            >
              With a strong foundation in web fundamentals, I specialize in
              crafting bespoke sites that attract customers and empower small
              businesses. Let's work together to elevate your online presence
              and bring your vision to life.
            </p>
          </div>
          <div className=" max-md:text-center mb-2 lg:ml-10 ">
            <a
              href="#contact"
              className=" bg-sky-600 p-2 lg:p-4 rounded-full px-4 hover:bg-sky-500 font-bold"
            >
              Get In Touch!
            </a>
          </div>
        </motion.div>
      </div>
      <div className=" h-1 bg-white mt-12 opacity-50 rounded-full mx-1" />
    </section>
  );
};

export default About;
