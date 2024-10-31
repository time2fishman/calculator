const PlusMinusButton = ({ plusMinus, displayValue, setDisplayValue }) => {
  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };
  return (
    <div
      className="border border-black text-2xl flex justify-center items-center bg-gray-400 hover:bg-gray-400/75 cursor-pointer active:bg-gray-400/85"
      onClick={() => toggleSign()}
    >
      {plusMinus}
    </div>
  );
};

export default PlusMinusButton;
