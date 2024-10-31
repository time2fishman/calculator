const PercentButton = ({ percent, displayValue, setDisplayValue }) => {
  const inputPercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, "");
    const newValue = parseFloat(displayValue) / 100;

    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)));
  };

  return (
    <div
      className="border border-black text-2xl flex justify-center items-center bg-gray-400 hover:bg-gray-400/75 cursor-pointer active:bg-gray-400/85"
      onClick={() => inputPercent()}
    >
      {percent}
    </div>
  );
};

export default PercentButton;
