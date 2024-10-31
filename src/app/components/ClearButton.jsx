const ClearButton = ({
  clear,
  setValue,
  setDisplayValue,
  setOperator,
  setWaitingForOperand,
}) => {
  const clearAll = () => {
    setValue(null);
    setDisplayValue("0");
    setOperator(null);
    setWaitingForOperand(false);
  };

  return (
    <div
      className="border border-black flex justify-center items-center text-2xl bg-gray-400 hover:bg-gray-400/75 cursor-pointer active:bg-gray-400/85"
      onClick={clearAll}
    >
      {clear}
    </div>
  );
};

export default ClearButton;
