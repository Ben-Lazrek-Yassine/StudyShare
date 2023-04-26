import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { parse } from "mathjs";

const MathPlot = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const mathFunction = parse("").compile();
    const xValues = Array.from({ length: 100 }, (_, i) => i / 10 - 5);
    const yValues = xValues.map((x) => mathFunction.evaluate({ x }));
    setData([{ x: xValues, y: yValues }]);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const mathFunction = parse(input).compile();
      const xValues = Array.from({ length: 100 }, (_, i) => i / 10 - 5);
      const yValues = xValues.map((x) => mathFunction.evaluate({ x }));
      setData([{ x: xValues, y: yValues }]);
    }, 500);

    return () => clearTimeout(debounce);
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Plot Function</h2>
      <Plot
            data={data}
            layout={{
              width: 800,
              height: 500,
              margin: { t: 0 },
              xaxis: { title: "x" },
              yaxis: { title: "y" },
            }}
          />
      <form>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a function"
          className="rounded-lg border-gray-200 border-2 p-2 mr-2 mt-10"
        />
      </form>
      {data.length > 0 && (
        <div className="mt-24">
        </div>
      )}
    </div>
  );
};

export default MathPlot;
