import React, { useState } from "react";
import "./App.css";
import './assets/css/main.css';

const App = () => {
  const [palette, setPalette] = useState([]);

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
  };

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }, () => getRandomColor());
    setPalette(newPalette);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="container">
      <h1>Color Palette Generator</h1>
      <button onClick={generatePalette}>Generate Palette</button>
      <div id="palette">
        {palette.map((color, index) => (
          <div
            key={index}
            className="swatch"
            style={{ backgroundColor: color }}
            onClick={() => copyToClipboard(color)}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
