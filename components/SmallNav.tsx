import { HomeIcon, UserIcon, SparklesIcon } from "@heroicons/react/16/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import ReactSwitch from "react-switch";
import { motion } from "framer-motion";
import Image from "next/image";

type HeroSectionProps = {
  toggleAnimation: () => void;
  isAnimationPaused: boolean;
};
const SmallNav = ({ toggleAnimation, isAnimationPaused }: HeroSectionProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className=" lg:hidden sticky bottom-2 w-full flex justify-center z-50 "
    >
      <div className=" flex gap-5 bg-transparent backdrop-blur-2xl bg-gray-500 rounded-full p-2 w-auto">
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
        <div className=" gradient_text">
          <a href="#home">
            <HomeIcon className=" w-10 h-7 text-white " />
          </a>
        </div>
        <div className=" gradient_text">
          <a href="#about">
            <UserIcon className=" w-10 h-7 text-white" />
          </a>
        </div>
        <div className=" gradient_text">
          <a href="#skills">
            <Image
              src="/settings.svg"
              alt="rest"
              width={50}
              height={50}
              className={` h-7 w-10 object-contain rounded-sm text-white`}
            />
          </a>
        </div>
        <div className="gradient_text hover:text-yellow-300">
          <a href="#projects">
            <SparklesIcon className=" w-10 h-7 text-white" />
          </a>
        </div>
        <div className=" gradient_text">
          <a href="#home">
            <DevicePhoneMobileIcon className=" w-10 h-7 text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SmallNav;
