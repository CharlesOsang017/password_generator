import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";


const Card = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const [passWordLength, setPassWordLength] = useState(12)
  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleGenerate = () => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specialChars = ["/", "*", "-", "_", "@", "$", "&"];
    const letters = ["a", "b", "c", "d", "e", "f", "g", "k"];

    const allValue = [...numbers, ...specialChars, ...letters];

    let generatedValue = "";

    for (let i = 0; i < passWordLength; i++) {
      
      const randomIndex = Math.floor(Math.random() * allValue.length);
      generatedValue += allValue[randomIndex];
    }

    setInputValue(generatedValue);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title  text-bold mb-2 justify-center">
          Password Generator
        </h2>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
           
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span
            className="tooltip  tooltip-top cursor-pointer"
            data-tip={copied ? "Copied!!" : "Copy!!"}
          >
            {copied ? <ClipboardCheck /> : <Clipboard onClick={handleCopy} />}
          </span>
        </label>
        <div className="flex justify-between items-center px-3 ">
          <h3>Adjust password length</h3>

          <input type="number" className="input w-14 h-12 input-accent" value={passWordLength} onChange={(e)=>setPassWordLength(e.target.value)} />
        </div>
        <button className="btn btn-success" onClick={handleGenerate}>
          GENERATE
        </button>
      </div>
    
    </div>
  );
};

export default Card;
