import React, { useState } from 'react';
import "./calc.css";

const Calculator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [toolSelected, setToolSelected] = useState('');
  const [showTextTools, setShowTextTools] = useState(false);
  const [showMathTools, setShowMathTools] = useState(false);
  const [showMoreTools, setShowMoreTools] = useState(false);

  const convertToUpperCase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const convertToLowerCase = () => {
    setOutputText(inputText.toLowerCase());
  };

  const reverseText = () => {
    setOutputText(inputText.split('').reverse().join(''));
  };


  const convertToBinary = () => {
    let output = '';
    for (let i = 0; i < inputText.length; i++) {
      const binary = inputText.charCodeAt(i).toString(2);
      output += binary.padStart(8, '0') + ' ';
    }
    setOutputText(output.trim());
  };

  const convertToHex = () => {
    let output = '';
    for (let i = 0; i < inputText.length; i++) {
      const hex = inputText.charCodeAt(i).toString(16);
      output += hex.toUpperCase() + ' ';
    }
    setOutputText(output.trim());
  };

  const handleMathToolChange = (event) => {
    setToolSelected(event.target.value);
  };

  const performMath = (event) => {
    event.preventDefault();

    let output;
    switch (toolSelected) {
      case 'sqrt':
        output = Math.sqrt(Number(inputText));
        break;
      case 'cbrt':
        output = Math.cbrt(Number(inputText));
        break;
      case 'square':
        output = Math.pow(Number(inputText), 2);
        break;
      case 'cube':
        output = Math.pow(Number(inputText), 3);
        break;
      default:
        output = 'Please select a tool';
    }

    setOutputText(output.toString());
  };

  return (
    <div className="App">
      <h1>Converter</h1>
      <div>
<button onClick={() => setShowTextTools(!showTextTools)} className="btn">
  {showTextTools ? 'Hide' : 'Show'} Text Tools
</button>
<button onClick={() => setShowMathTools(!showMathTools)} className="btn">
  {showMathTools ? 'Hide' : 'Show'} Math Tools
</button>
<button onClick={() => setShowMoreTools(!showMoreTools)} className="btn">
  {showMoreTools ? 'Hide' : 'More'} Tools
</button>
      </div>
      <div className="tools-container">
  {showTextTools && (
    <div>
      <h2 className="text-lg font-bold mb-4">Text Tools</h2>
      <button 
        onClick={convertToUpperCase} 
        className="bg-white text-black rounded-lg px-4 py-2 mr-2"
      >
        Convert to Upper Case
      </button>
      <button 
        onClick={convertToLowerCase} 
        className="bg-white text-black rounded-lg px-4 py-2 mr-2"
      >
        Convert to Lower Case
      </button>
      <button 
        onClick={reverseText} 
        className="bg-white text-black rounded-lg px-4 py-2"
      >
        Reverse Text
      </button>
    </div>
  )}
  
  {showMathTools && (
    <div>
      <h2 className="text-lg font-bold mb-4">Math Tools</h2>
      <form onSubmit={performMath}>
        <label className="mr-2">
          Select a Math Tool:
          <select 
            value={toolSelected} 
            onChange={handleMathToolChange} 
            className="bg-gray-100 rounded-lg px-2 py-1 ml-2"
          >
            <option value="">Please select a tool</option>
            <option value="sqrt">Square Root</option>
            <option value="cbrt">Cube Root</option>
            <option value="square">Square</option>
            <option value="cube">Cube</option>
          </select>
        </label>
        <button 
          type="submit" 
          className="bg-white text-black rounded-lg px-4 py-2"
        >
          Calculate
        </button>
      </form>
    </div>
  )}

  {showMoreTools && (
    <div>
      <h2 className="text-lg font-bold mb-4">More Tools</h2>
      <button 
        onClick={convertToBinary} 
        className="bg-white text-black rounded-lg px-4 py-2 mr-2"
      >
        Convert to Binary
      </button>
      <button 
        onClick={convertToHex} 
        className="bg-white text-black rounded-lg px-4 py-2"
      >
        Convert to Hex
      </button>
    </div>
  )}
</div>
  <div className="input-container">
    <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Enter your input..' />
  </div>
  <div className="output-container">
    <textarea value={outputText} onChange={(e) => setOutputText(e.target.value)} placeholder='Result...' />
  </div>
</div>
);
}

export default Calculator;


