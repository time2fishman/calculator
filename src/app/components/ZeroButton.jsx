const ZeroButton = ({
  num,
  displayValue,
  setDisplayValue,
  waitingForOperand,
  setWaitingForOperand,
}) => {
  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(
        displayValue === "0" ? String(digit) : displayValue + digit
      );
    }
  };

  return (
    <div
      className="border border-black flex justify-center items-center text-2xl bg-gray-200 col-span-2 cursor-pointer hover:bg-gray-300/75 active:bg-gray-300/90"
      onClick={() => inputDigit(num)}
    >
      {num}
    </div>
  );
};

export default ZeroButton;
