import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        // eslint-disable-next-line no-eval
        const res = eval(input);
        setResult(res.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl w-80">
      <h1 className="text-center text-2xl font-bold mb-4">🧮 Calculator</h1>

      <div className="bg-gray-700 rounded-lg p-3 text-right mb-4 min-h-[60px]">
        <div className="text-gray-300 text-sm">{input || "0"}</div>
        <div className="text-xl font-semibold">{result}</div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`rounded-xl py-3 font-bold text-lg transition-all
              ${btn === "="
                ? "bg-green-500 hover:bg-green-600 text-white"
                : btn === "C"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-600 hover:bg-gray-500 text-white"}
            `}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
