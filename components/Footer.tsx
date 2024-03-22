import Image from "next/image";
import Signature from "./Signature";

const Footer = () => {
  return (
    <section className=" min-h-screen flex flex-col justify-end z-40">
      <div className=" bg-white h-[467px]">
        <div className=" flex justify-center mt-7">
          <Image
            src="/Signature.svg"
            alt="signature"
            width={100}
            height={100}
            className=" sm:h-28 sm:w-32"
          />
        </div>
        <div className=" px-4 lg:px-28 mt-5">
          <div className=" flex max-sm:flex-col max-sm:space-y-2 max-sm:items-center justify-center space-x-2 sm:space-x-10 text-gray-900 cursor-pointer max-sm:text-sm">
            <div className=" flex justify-center max-sm:w-full">
              <a href="#home" className=" gradient_text">
                Home
              </a>
            </div>
            <div className=" flex justify-center max-sm:w-full">
              <a href="#about" className=" gradient_text">
                About
              </a>
            </div>
            <div className=" flex justify-center max-sm:w-full">
              <a href="#skills" className=" gradient_text">
                Skills
              </a>
            </div>
            <div className=" flex justify-center  max-sm:w-full">
              <a href="#projects" className=" gradient_text">
                Projects
              </a>
            </div>
            <div className=" flex justify-center  max-sm:w-full">
              <a href="#contact" className=" gradient_text">
                Contact
              </a>
            </div>
          </div>
          <div className=" flex justify-center mt-10">
            <div>
              <Image
                onClick={() => window.open("https://github.com/Arjun149133")}
                src="/github.svg"
                alt="signature"
                width={100}
                height={100}
                className=" h-7 sm:h-10 cursor-pointer"
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
                className=" h-7 sm:h-10  cursor-pointer"
              />
            </div>
            <div>
              <Image
                onClick={() => window.open("https://twitter.com/AArjunY")}
                src="/tweet.svg"
                alt="signature"
                width={100}
                height={100}
                className=" h-7 sm:h-10  cursor-pointer"
              />
            </div>
          </div>
          <div className="flex justify-center mt-20 text-sm text-gray-800 font-light">
            <p>Arjun 2024 ©</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
