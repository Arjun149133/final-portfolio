import Image from "next/image";
const Signature = () => {
  return (
    <div className=" absolute top-2 left-2">
      <Image
        src="/sign.svg"
        alt="signature"
        width={50}
        height={50}
        className=" text-white"
      />
    </div>
  );
};

export default Signature;
