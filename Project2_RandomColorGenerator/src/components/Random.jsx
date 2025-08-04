import React from "react";
import "./style.css";
const Random = () => {
  const [colorType, setColorType] = React.useState("hex");
  const [color, setColor] = React.useState("#000000");
  const handleColor = () => {
    const newColor = generateColor();
    setColor(newColor);
  };
  const generateColor = () => {
    return colorType === "hex"
      ? `#${Math.floor(Math.random() * 1000000)}`
      : `rgb(${Math.floor(Math.random() * 1000)}, ${Math.floor(
          Math.random() * 1000
        )}, ${Math.floor(Math.random() * 1000)})`;
  };
  return (
    <div
      className='random'
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <button onClick={() => setColorType("hex")}>Create HEX color</button>
      <button onClick={() => setColorType("rgb")}>Create RGB color</button>
      <button onClick={handleColor}>Generate random color</button>
      <div className='details'>
        <h2>Color Type is: {colorType}</h2>
        <p>Current color is: {color}</p>
      </div>
    </div>
  );
};

export default Random;
