"use client";

import NumDecButton from "./components/NumDecButton";
import ZeroButton from "./components/ZeroButton";
import ClearButton from "./components/ClearButton";
import PlusMinusButton from "./components/PlusMinusButton";
import PercentButton from "./components/PercentButton";
import DivideButton from "./components/DivideButton";
import MultiplyButton from "./components/MultiplyButton";
import MinusButton from "./components/MinusButton";
import PlusButton from "./components/PlusButton";
import EqualsButton from "./components/EqualsButton";
import Display from "./components/Display";

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  return (
    <>
      <header className="text-center py-10">
        <h1 className="text-4xl font-medium ">Calculator</h1>
      </header>
      <main className="flex justify-center">
        <div className="border border-black flex justify-center w-72 max-w-lg grid grid-cols-4 grid-rows-6 shadow-2xl">
          <Display value={displayValue} />
          <ClearButton
            clear={"C"}
            setValue={setValue}
            setOperator={setOperator}
            setDisplayValue={setDisplayValue}
            setWaitingForOperand={setWaitingForOperand}
          />
          <PlusMinusButton
            plusMinus={"+/-"}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <PercentButton
            percent={"%"}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <DivideButton
            value={value}
            setValue={setValue}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            operator={operator}
            setOperator={setOperator}
            setWaitingForOperand={setWaitingForOperand}
          />
          <NumDecButton
            num={7}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={8}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={9}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <MultiplyButton
            value={value}
            setValue={setValue}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            operator={operator}
            setOperator={setOperator}
            setWaitingForOperand={setWaitingForOperand}
          />
          <NumDecButton
            num={4}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={5}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={6}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <MinusButton
            value={value}
            setValue={setValue}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            operator={operator}
            setOperator={setOperator}
            setWaitingForOperand={setWaitingForOperand}
          />
          <NumDecButton
            num={1}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={2}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={3}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <PlusButton
            value={value}
            setValue={setValue}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            operator={operator}
            setOperator={setOperator}
            setWaitingForOperand={setWaitingForOperand}
          />
          <ZeroButton
            num={0}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <NumDecButton
            num={"."}
            waitingForOperand={waitingForOperand}
            setWaitingForOperand={setWaitingForOperand}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
          />
          <EqualsButton
            value={value}
            setValue={setValue}
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            operator={operator}
            setOperator={setOperator}
            setWaitingForOperand={setWaitingForOperand}
          />
        </div>
      </main>
      <footer className="text-center mt-10">
        <a className="text-gray-200" target="_blank" href="https://icons8.com">
          Icons by Icons8
        </a>
      </footer>
    </>
  );
}
