import Image from "next/image";
const Signature = () => {
  return (
    <div className=" absolute top-2 lg:left-20">
      <Image
        src="/arj.svg"
        alt="signature"
        width={100}
        height={100}
        className=" sm:h-28 sm:w-32"
      />
    </div>
  );
};

export default Signature;
