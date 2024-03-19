import ReactSwitch from "react-switch";
import { motion } from "framer-motion";

type HeroSectionProps = {
  toggleAnimation: () => void;
  isAnimationPaused: boolean;
};

const Navbar = ({ toggleAnimation, isAnimationPaused }: HeroSectionProps) => {
  return (
    <div className=" overflow-hidden sticky top-4 hidden lg:flex justify-end ml-auto  mt-7 z-50">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.25 }}
        className="bg-transparent backdrop-blur-xl bg-gray-500 rounded-l-full p-4"
      >
        <div className=" flex gap-10 mr-60 text-lg ml-10">
          <div className=" flex items-center">
            <ReactSwitch
              onChange={toggleAnimation}
              checked={!isAnimationPaused}
              onColor="#c084fc"
              onHandleColor="#ec4899"
              handleDiameter={22}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={16}
              width={40}
              className="react-switch"
              id="animation-switch"
            />
          </div>
          <div className="gradient_text">
            <a href="#home">Home</a>
          </div>
          <div className="gradient_text">
            <a href="#about">About</a>
          </div>
          <div className="gradient_text">
            <a href="#skills">Skills</a>
          </div>
          <div className="gradient_text">
            <a href="#projects">Projects</a>
          </div>
          <div className=" gradient_text">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
