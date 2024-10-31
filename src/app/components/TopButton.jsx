import Image from "next/image";

const TopButton = ({ img }) => {
  const clearAll = () => {
    setValue(null);
    setDisplayValue("0");
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div
      className="border border-black flex justify-center items-center bg-gray-400 hover:bg-gray-400/75 cursor-pointer active:bg-gray-400/85"
      onClick={clearAll}
    >
      <Image src={img} alt="top button" />
    </div>
  );
};

export default TopButton;
