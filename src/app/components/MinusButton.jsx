const MinusButton = ({
  value,
  displayValue,
  operator,
  setDisplayValue,
  setValue,
  setWaitingForOperand,
  setOperator,
}) => {
  const CalculatorOperations = {
    "-": (prevValue, nextValue) => prevValue - nextValue,
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);

      setValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  return (
    <div
      className="border border-black flex justify-center items-center orange-button text-4xl text-white cursor-pointer hoverOrange activeOrange"
      onClick={() => performOperation("-")}
    >
      -
    </div>
  );
};

export default MinusButton;
