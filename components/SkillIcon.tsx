import Image from "next/image";
import { motion } from "framer-motion";

type SkillIconProps = {
  src: string;
  text: string;
  props?: any;
};
const SkillIcon = ({ src, text, props }: SkillIconProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.25 }}
      viewport={{ once: true }}
      className=" flex items-center justify-center flex-col"
    >
      <Image
        src={src}
        alt={text}
        width={50}
        height={50}
        className={` lg:h-12 lg:w-12 h-10 w-10 rounded-sm text-white ${props}`}
      />
      <p className=" mt-1 font-sans text-white">{text}</p>
    </motion.div>
  );
};

export default SkillIcon;
